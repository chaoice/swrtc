import mqtt from 'mqtt'
export default class CallManager {
    /***
     *
     * @param clientTopic
     * @param mqttConfig
     * @param eventListeners 事件回调，包含
     */
    constructor(clientTopic, mqttConfig,constraints,eventListeners) {
        this.mqttClient = null;
        this.clientTopic = clientTopic;
        this.initMqttConnection(mqttConfig)
        this.eventListeners = eventListeners;
        this.localPcMap={}
        this.remotePcMap={}
        this.remoteIcesMap={}
        this.constraints=constraints
        this.callOuts={}
        this.callIns={}
    }

    /***
     * 处理mqtt消息
     * @param topic
     * @param message
     */
    messageHandler(topic, message) {
        console.log("收到消息",topic,message.toString())
        let data = JSON.parse(message.toString());
        if(data.type=="offer"){
            this.eventListeners['offerIn'](data)
            this.callIns[data.callerTopic]={
                callerTopic:data.callerTopic,
                calleeTopic:data.calleeTopic,
                clientTopic:data.clientTopic
            }
        }else if(data.type=="candidate"){
            let candidate=new RTCIceCandidate(data.ice)
            if(data.kind=='local'){
                if(this.remotePcMap[data.clientTopic]&&this.remotePcMap[data.clientTopic].remoteDescription!=null){
                    this.remotePcMap[data.clientTopic].addIceCandidate(candidate)
                }else{
                    if(!this.remoteIcesMap[data.clientTopic]){
                        this.remoteIcesMap[data.clientTopic]=[]
                    }
                    this.remoteIcesMap[data.clientTopic].push(candidate)
                }
            }else{
                this.localPcMap[data.clientTopic].addIceCandidate(candidate)
            }
        }else if (data.type=="answer"){
            let answer=new RTCSessionDescription(data.sdp)
            this.localPcMap[data.clientTopic].setRemoteDescription(answer);
        }else if (data.type=="hangUp"){
            //对方挂断
            this.hangUp(data)
            this.eventListeners['hangUp']&&this.eventListeners['hangUp'](data)
        }
    }

    /***
     * 初始化mqtt连接
     * @param mqttConfig
     * @returns {Promise<unknown>}
     */
    initMqttConnection(mqttConfig) {
        return new Promise((resolve, reject) => {
            if(mqttConfig.publish){
                this.mqttClient=mqttConfig
            }else{
                this.mqttClient = mqtt.connect(mqttConfig.url,{...mqttConfig});
                this.mqttClient.reconnecting=true;
                this.mqttClient.on("connect", () => {
                    this.mqttClient.subscribe(this.clientTopic, (err) => {
                        if (!err) {
                            console.log("订阅成功",this.clientTopic)
                            resolve(this.mqttClient);
                        }else{
                            reject(err);
                        }
                    });
                });
                this.mqttClient.on("reconnect", () => {
                    console.log("重连中...")
                });
                this.mqttClient.on("message", (topic, message) => {
                    // message is Buffer
                    this.messageHandler(topic, message);
                });
            }

        })

    }

    /***
     * 打电话
     * @param calleeTopic
     * @param relayTopic
     * @param callerTopic
     * @returns {Promise<void>}
     */
    async  makeCall({calleeTopic,relayTopic,callerTopic}){
        let local = new RTCPeerConnection(null);
        let stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        local.addTrack(stream.getTracks()[0]);
        this.eventListeners['localCallStream']&&this.eventListeners['localCallStream']({
            pc:local,
            stream:stream
        })
        local.ontrack = (event)=> {
            console.log('onaddtrack', event);
            let stream = new MediaStream()
            stream.addTrack(event.track)
            this.eventListeners['callStream']({
                pc:local,
                stream:stream
            })
        }
        local.onicecandidate = (e)=> {
            let iceCandidate = e.candidate;
            if (iceCandidate){
                this.mqttClient.publish(relayTopic||calleeTopic,JSON.stringify({
                    type:"candidate",
                    kind:'local',
                    clientTopic:this.clientTopic,
                    ice:iceCandidate
                }))
            }
        }
        //1.创建offer之后本地会生成ice，将offer和ice一块告诉对端。
        let offer_sdp = await local.createOffer({offerOptions: 1});
        local.setLocalDescription(offer_sdp);
        this.mqttClient.publish(relayTopic||calleeTopic,JSON.stringify({
            type:"offer",
            callerTopic:callerTopic||this.clientTopic,
            calleeTopic:calleeTopic,
            clientTopic:this.clientTopic,
            sdp:offer_sdp
        }))
        this.callOuts[calleeTopic]={
            callerTopic:callerTopic||this.clientTopic,
            calleeTopic:calleeTopic,
            clientTopic:this.clientTopic,
            targetTopic:relayTopic||calleeTopic,
        }
        local.oniceconnectionstatechange = ()=> {
            console.log("local ice:",local.iceConnectionState)
            if (local.iceConnectionState === "failed"||local.iceConnectionState === "disconnected") {
                this.closeConnection(local)
                //连接断连回调
                this.eventListeners['disconnected']&&this.eventListeners['disconnected']({
                    clientTopic: this.clientTopic,
                    callerTopic:callerTopic||this.clientTopic,
                    calleeTopic:calleeTopic,
                })
            }else if (local.iceConnectionState === "connected") {
                //连接完成回调
                this.eventListeners['connected'] && this.eventListeners['connected']({
                    clientTopic: this.clientTopic,
                    callerTopic:callerTopic||this.clientTopic,
                    calleeTopic:calleeTopic,
                })
            }
        }
        this.localPcMap[relayTopic||calleeTopic]=local
    }

    /***
     * 接听电话
     * @param data
     * @returns {Promise<void>}
     */
    async  answerCall(data){
        let remote = new RTCPeerConnection(null)
        this.remotePcMap[data.clientTopic]=remote
        remote.ontrack = (e) =>{
            console.log('onaddtrack', e);
            let stream = new MediaStream()
            stream.addTrack(e.track)
            this.eventListeners['answerStream']({
                pc:remote,
                stream:stream
            })
        }
        remote.oniceconnectionstatechange = ()=> {
            console.log("remote ice:",remote.iceConnectionState)
            if (remote.iceConnectionState === "failed"||remote.iceConnectionState === "disconnected") {
                this.closeConnection(remote)
                //连接断连回调
                this.eventListeners['disconnected']&&this.eventListeners['disconnected']({
                    clientTopic:data.clientTopic
                })
            }else if (remote.iceConnectionState === "connected") {
                //连接完成回调
                this.eventListeners['connected']&&this.eventListeners['connected']({
                    clientTopic:data.clientTopic
                })
            }
        }
        let stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        remote.addTrack(stream.getTracks()[0]);
        this.eventListeners['localAnswerStream']&&this.eventListeners['localAnswerStream']({
            pc:remote,
            stream:stream
        })
        remote.onicecandidate = (e) =>{
            const iceCandidate = e.candidate;
            console.log("remote ice:",iceCandidate)
            //发送answersdp回去
            if(iceCandidate!=null){
                this.mqttClient.publish(data.clientTopic,
                    JSON.stringify({
                        type:"candidate",
                        clientTopic:this.clientTopic,
                        kind:'remote',
                        ice:iceCandidate
                    })
                )
            }
        }
        let offer=new RTCSessionDescription(data.sdp)
        remote.setRemoteDescription(offer);
        let answer = await remote.createAnswer();
        console.log('createAnswer', answer);
        remote.setLocalDescription(answer);
        this.mqttClient.publish(data.clientTopic,
            JSON.stringify({
                type:"answer",
                clientTopic:this.clientTopic,
                callerTopic:data.callerTopic,
                calleeTopic:data.calleeTopic,
                sdp:answer
            })
        )
        for(let i=0;i<this.remoteIcesMap[data.clientTopic].length;i++){
            remote.addIceCandidate(this.remoteIcesMap[data.clientTopic][i])
        }
    }

    /***
     * 关闭连接
     * @param rtcPeerConnection
     */
    closeConnection (rtcPeerConnection)  {
        if(rtcPeerConnection!=null){
            rtcPeerConnection.getSenders().forEach((sender)=> {
                sender.track.stop();
            });
            rtcPeerConnection.getTransceivers().forEach((transceiver)=> {
                if (transceiver.sender) {
                    transceiver.sender.replaceTrack(null);
                }
                if (transceiver.receiver) {
                    transceiver.receiver.track.stop();
                }
            });
            rtcPeerConnection.close();
            rtcPeerConnection = null;
        }

    }

    /***
     * 挂断电话
     * @param data
     */
    hangUp(data){
        if(data.callerTopic==this.clientTopic){
            //callout 拒绝
            let callOut=this.callOuts[data.calleeTopic]
            if(callOut){
                this.closeConnection(this.localPcMap[callOut.targetTopic])
                this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                    type: "hangUp",
                    clientTopic: callOut.clientTopic,
                    callerTopic: callOut.callerTopic,
                    calleeTopic: callOut.calleeTopic
                }))
                delete this.callOuts[data.calleeTopic];
                delete this.localPcMap[callOut.targetTopic]
            }
        }else{
            //callin 拒绝
            let callIn=this.callIns[data.callerTopic]
            if(callIn){
                this.closeConnection(this.remotePcMap[data.clientTopic])
                this.mqttClient.publish(callIn.clientTopic,JSON.stringify({
                    type: "hangUp",
                    clientTopic: this.clientTopic,
                    callerTopic: callIn.callerTopic,
                    calleeTopic: callIn.calleeTopic
                }))
                delete this.callIns[data.callerTopic];
                delete this.remotePcMap[data.clientTopic]
            }
        }
    }

    /***
     * 清理客户端资源
     */
    end(){
        this.mqttClient.end();
        for(let key in this.localPcMap){
            this.closeConnection(this.localPcMap[key])
        }
        for(let key in this.remotePcMap){
            this.closeConnection(this.remotePcMap[key])
        }
    }

}
