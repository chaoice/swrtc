import mqtt from 'mqtt'
import rtcFactory from "./RtcFactory";
var configuration = {
    iceServers: [
        {
            urls: "turn:154.8.202.184:3478",
            username: 'root',
            credential: '123456'
        }
    ]
};
function getRuntimeEnv(){
    if(typeof window!="undefined"){
        return "web"
    }else{
        return "node"
    }
}
export default class CallManager  {
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
            let candidate=new rtcFactory.RTCIceCandidate(data.ice)
            if(data.kind=='local'){
                if(this.remotePcMap[data.callerTopic]&&this.remotePcMap[data.callerTopic].remoteDescription!=null){
                    this.remotePcMap[data.callerTopic].addIceCandidate(candidate)
                }else{
                    if(!this.remoteIcesMap[data.callerTopic]){
                        this.remoteIcesMap[data.callerTopic]=[]
                    }
                    this.remoteIcesMap[data.callerTopic].push(candidate)
                }
            }else{
                this.localPcMap[data.calleeTopic].addIceCandidate(candidate)
            }
        }else if (data.type=="answer"){
            let answer=new rtcFactory.RTCSessionDescription(data.sdp)
            this.localPcMap[data.calleeTopic].setRemoteDescription(answer);
            this.callOuts[data.calleeTopic].status="answered"
        }else if (data.type=="hangUp"){
            //对方挂断
            this.hangUp(data,'there')
            this.eventListeners['hangUp']&&this.eventListeners['hangUp'](data)
        }else if (data.type=="reject"){
            //对方拒绝
            this.hangUp(data,'there')
            this.eventListeners['reject']&&this.eventListeners['reject'](data)
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
    async  makeCall({calleeTopic,relayTopic,callerTopic,relayStream}){
        let local = new rtcFactory.RTCPeerConnection(configuration);
        let stream=relayStream||await rtcFactory.getUserMedia(this.constraints);
        stream.getTracks().forEach(track => local.addTrack(track));
        this.eventListeners['localCallStream']&&this.eventListeners['localCallStream']({
            pc:local,
            stream:stream,
            callerTopic:callerTopic,
            calleeTopic:calleeTopic
        })
        let localStream = new rtcFactory.MediaStream()
        local.ontrack = (event)=> {
            console.log('onaddtrack', event);
            localStream.addTrack(event.track)
            setTimeout(()=>{
                this.eventListeners['callStream']({
                    pc:local,
                    stream:localStream,
                    callerTopic:callerTopic,
                    calleeTopic:calleeTopic
                })
            },200)
        }
        local.onicecandidate = (e)=> {
            let iceCandidate = e.candidate;
            if (iceCandidate){
                this.mqttClient.publish(relayTopic||calleeTopic,JSON.stringify({
                    type:"candidate",
                    kind:'local',
                    callerTopic:callerTopic||this.clientTopic,
                    calleeTopic:calleeTopic,
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
        this.localPcMap[calleeTopic]=local
    }

    /***
     * 接听电话
     * @param data
     * @returns {Promise<void>}
     */
    async  answerCall(data){
        let remote = new rtcFactory.RTCPeerConnection(configuration)
        this.remotePcMap[data.callerTopic]=remote
        let remoteStream = new rtcFactory.MediaStream()
        remote.ontrack = (e) =>{
            console.log('onaddtrack', e);
            remoteStream.addTrack(e.track)
            setTimeout(()=>{
                this.eventListeners['answerStream']({
                    pc:remote,
                    stream:remoteStream,
                    ...data
                })
            },200)

        }
        remote.oniceconnectionstatechange = ()=> {
            console.log("remote ice:",remote.iceConnectionState)
            if (remote.iceConnectionState === "failed"||remote.iceConnectionState === "disconnected") {
                this.closeConnection(remote)
                //连接断连回调
                this.eventListeners['disconnected']&&this.eventListeners['disconnected']({
                    clientTopic:data.clientTopic,
                    ...data
                })
            }else if (remote.iceConnectionState === "connected") {
                //连接完成回调
                this.eventListeners['connected']&&this.eventListeners['connected']({
                    clientTopic:data.clientTopic,
                    ...data
                })
            }
        }
        let stream = await rtcFactory.getUserMedia(this.constraints);
        stream.getTracks().forEach(track => remote.addTrack(track));
        this.eventListeners['localAnswerStream']&&this.eventListeners['localAnswerStream']({
            pc:remote,
            stream:stream,
            ...data
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
                        calleeTopic:data.calleeTopic,
                        callerTopic:data.callerTopic,
                        kind:'remote',
                        ice:iceCandidate
                    })
                )
            }
        }
        let offer=new rtcFactory.RTCSessionDescription(data.sdp)
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
        if(this.remoteIcesMap[data.callerTopic]){
            for(let i=0;i<this.remoteIcesMap[data.callerTopic].length;i++){
                remote.addIceCandidate(this.remoteIcesMap[data.callerTopic][i])
            }
        }
        this.callIns[data.callerTopic].status="answered"


        return remote
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
    huangUpAll(data){
        let callOut=this.callOuts[data.calleeTopic]
        if(callOut){
            this.closeConnection(this.localPcMap[callOut.calleeTopic])
            this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                type: "hangUp",
                clientTopic: callOut.clientTopic,
                callerTopic: callOut.callerTopic,
                calleeTopic: callOut.calleeTopic
            }))
            delete this.callOuts[data.calleeTopic];
            delete this.localPcMap[callOut.calleeTopic]
        }
        let callIn=this.callIns[data.callerTopic]
        if(callIn){
            this.closeConnection(this.remotePcMap[data.callerTopic])
            this.mqttClient.publish(callIn.clientTopic,JSON.stringify({
                type: "hangUp",
                clientTopic: this.clientTopic,
                callerTopic: callIn.callerTopic,
                calleeTopic: callIn.calleeTopic
            }))
            delete this.callIns[data.callerTopic];
            delete this.remotePcMap[data.callerTopic]
        }

    }

    /***
     * 挂断电话
     * @param data
     * @package who 挂断类型，there:对面挂断，默认:自己挂断
     */
    hangUp(data,who){
        if(data.callerTopic==this.clientTopic){
            //callout 拒绝
            let callOut=this.callOuts[data.calleeTopic]
            if(callOut){
                this.closeConnection(this.localPcMap[callOut.calleeTopic])
                if(who=='there'){
                    //对方挂断不发送消息
                }else{
                    this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                        type: callOut.status?'hangUp':'reject',
                        clientTopic: callOut.clientTopic,
                        callerTopic: callOut.callerTopic,
                        calleeTopic: callOut.calleeTopic
                    }))
                }
                delete this.callOuts[data.calleeTopic];
                delete this.localPcMap[callOut.calleeTopic]
            }
        }else{
            //callin 拒绝
            let callIn=this.callIns[data.callerTopic]
            if(callIn){
                this.closeConnection(this.remotePcMap[data.callerTopic])
                this.mqttClient.publish(callIn.clientTopic,JSON.stringify({
                    type: callIn.status?'hangUp':'reject',
                    clientTopic: this.clientTopic,
                    callerTopic: callIn.callerTopic,
                    calleeTopic: callIn.calleeTopic
                }))
                delete this.callIns[data.callerTopic];
                delete this.remotePcMap[data.callerTopic]
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
