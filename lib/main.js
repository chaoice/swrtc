// import mqtt from 'mqtt'
import rtcFactory from "./RtcFactory";
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
    constructor(clientTopic, mqttConfig,constraints,eventListeners,turnConfig) {
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
        this.turnConfig=turnConfig||{
            iceServers: [
                {
                    urls: "turn:154.8.202.184:3478",
                    username: 'root',
                    credential: '123456'
                }
            ]
        }
        this.localStreamMap = {}  // 存储本地stream
        this.remoteStreamMap = {}  // 存储远程stream
        this.answerStreamMap = {}  // 存储answer stream
        setInterval(()=>{
            console.log("当前的map信息")
            console.log(this.localPcMap)
            console.log(this.remotePcMap)
            //清理连接状态，当两次
            for(let key in this.callIns){
                let call=this.callIns[key];
                if(this.remotePcMap[call.callerTopic+call.calleeTopic].connectionState=='disconnected'||this.remotePcMap[call.callerTopic+call.calleeTopic].connectionState=='failed'){
                    console.log("存在异常连接状态",call)
                    if(call.errRemoteCnt!=null){
                        //多于一次，发起挂断
                        this.handle({
                            type:"hangUp",
                            callerTopic:call.callerTopic,
                            calleeTopic:call.calleeTopic,
                            clientTopic:this.clientTopic,
                        })
                    }else{
                        call.errRemoteCnt=1
                    }
                }else{
                    delete call.errRemoteCnt
                }
                if(this.localPcMap[call.calleeTopic+call.callerTopic].connectionState=='disconnected'||this.localPcMap[call.calleeTopic+call.callerTopic].connectionState=='failed'){
                    console.log("存在异常连接状态",call)
                    if(call.errLocalCnt!=null){
                        //多于一次，发起挂断
                        this.handle({
                            type:"hangUp",
                            callerTopic:call.callerTopic,
                            calleeTopic:call.calleeTopic,
                            clientTopic:this.clientTopic,
                        })
                    }else{
                        call.errLocalCnt=1
                    }
                }else{
                    delete call.errLocalCnt
                }
            }

        },10000)
    }
    isRelay(data){
        return data.callerTopic!=this.clientTopic&&data.calleeTopic!=this.clientTopic
    }
    closeExistPC
    //处理消息
    handle(data){
        try{
            if(data.type=="offer"){
                this.callIns[data.callerTopic+data.calleeTopic]={
                    callerTopic:data.callerTopic,
                    calleeTopic:data.calleeTopic,
                    clientTopic:data.clientTopic,
                    status:"calling"
                }
                this.eventListeners['offerIn']&&this.eventListeners['offerIn'](data)

            }else if(data.type=="candidate"){
                let candidate=new rtcFactory.RTCIceCandidate(data.ice)
                if(data.kind=='local'){
                    if(this.remotePcMap[data.callerTopic+data.calleeTopic]&&this.remotePcMap[data.callerTopic+data.calleeTopic].remoteDescription!=null){
                        this.remotePcMap[data.callerTopic+data.calleeTopic].addIceCandidate(candidate)
                    }else{
                        if(!this.remoteIcesMap[data.callerTopic+data.calleeTopic]){
                            this.remoteIcesMap[data.callerTopic+data.calleeTopic]=[]
                        }
                        this.remoteIcesMap[data.callerTopic+data.calleeTopic].push(candidate)
                    }
                }else{
                    this.localPcMap[data.calleeTopic+data.callerTopic].addIceCandidate(candidate)
                }
            }else if (data.type=="answer"){
                if(this.localPcMap[data.calleeTopic+data.callerTopic].remoteDescription==null){
                    let answer=new rtcFactory.RTCSessionDescription(data.sdp)
                    this.localPcMap[data.calleeTopic+data.callerTopic].setRemoteDescription(answer);
                    this.callOuts[data.calleeTopic+data.callerTopic].status="answered"
                }else{
                    console.error("answer重复")
                }

            }else if (data.type=="hangUp"){
                //对方挂断
                if(this.isRelay(data)){
                    //如果是中继的,关掉callin的
                    if(data.clientTopic==data.callerTopic){
                        this.hangUp(data,"there")
                    }else{
                        this.hangUp(data)
                    }
                    //同时把callout的也挂断
                    this.hangUp({...data,callerTopic:this.clientTopic,originCallerTopic:data.callerTopic})
                }else{
                    this.hangUp(data,'there')
                }
                this.eventListeners['hangUp']&&this.eventListeners['hangUp'](data)
            }else if (data.type=="reject"){
                //对方拒绝
                if(this.isRelay(data)){
                    //如果是中继的,关掉callin的
                    if(data.clientTopic==data.callerTopic){
                        this.hangUp(data,"there")
                    }else{
                        this.hangUp(data)
                    }
                    //同时把callout的也挂断
                    this.hangUp({...data,callerTopic:this.clientTopic})
                }else{
                    this.hangUp(data,'there')
                }
                this.eventListeners['reject']&&this.eventListeners['reject'](data)
            }else if (data.type=="forward"){
                //对方挂断
                if(this.isRelay(data)){
                    //如果是中继的,关掉callin的
                    if(data.clientTopic==data.callerTopic){
                        this.forwardCall(data,"there")
                    }else{
                        this.forwardCall(data)
                    }
                    //同时把callout的也挂断
                    this.forwardCall({...data,callerTopic:this.clientTopic,originCallerTopic:data.callerTopic})
                }else{
                    this.forwardCall(data,'there')
                }
                this.eventListeners['forwardCall']&&this.eventListeners['forwardCall'](data)
            }else if (data.type=="answered"){
                if(this.callIns[data.callerTopic+data.calleeTopic].status!="answered"){
                    this.eventListeners['answered']&&this.eventListeners['answered'](data)
                    delete this.callIns[data.callerTopic+data.calleeTopic]
                }
            }
        }catch (e) {
            console.error("呼叫引擎处理消息出错",e)
        }
    }

    /***
     * 处理mqtt消息
     * @param topic
     * @param message
     */
    messageHandler(topic, message) {
        try{
            console.log("收到消息",topic,message.toString())
            let data = JSON.parse(message.toString());
            this.handle(data)
        }catch (e) {
            console.error("呼叫引擎处理消息出错",e)
            console.error(message.toString())
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
            }
            // else{
            //     this.mqttClient = mqtt.connect(mqttConfig.url,{...mqttConfig});
            //     this.mqttClient.reconnecting=true;
            //     this.mqttClient.on("connect", () => {
            //         this.mqttClient.subscribe(this.clientTopic, (err) => {
            //             if (!err) {
            //                 console.log("订阅成功",this.clientTopic)
            //                 resolve(this.mqttClient);
            //             }else{
            //                 reject(err);
            //             }
            //         });
            //     });
            //     this.mqttClient.on("reconnect", () => {
            //         console.log("重连中...")
            //     });
            //     this.mqttClient.on("message", (topic, message) => {
            //         // message is Buffer
            //         this.messageHandler(topic, message);
            //     });
            // }

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
        //如果存在callout的记录，清理掉。
        if(this.localPcMap[calleeTopic+(callerTopic||this.clientTopic)]!=null){
            this.closeCallOutConnection({
                callerTopic:callerTopic,
                calleeTopic:calleeTopic,
            })
        }
        let local = new rtcFactory.RTCPeerConnection(this.turnConfig);
        let stream = relayStream||await rtcFactory.getUserMedia(this.constraints);
        // 保存stream到map中
        const streamKey = calleeTopic + (callerTopic||this.clientTopic);
        this.localStreamMap[streamKey] = stream;
        
        stream.getTracks().forEach(track => local.addTrack(track));
        this.eventListeners['localCallStream']&&this.eventListeners['localCallStream']({
            pc:local,
            stream:stream,
            callerTopic:callerTopic,
            calleeTopic:calleeTopic
        })
        let localStream = new rtcFactory.MediaStream()
        this.remoteStreamMap[streamKey] = localStream;  // 保存远程stream
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
        this.localPcMap[calleeTopic+(callerTopic||this.clientTopic)]=local
        console.log("setlocalpcMap"+calleeTopic+(callerTopic||this.clientTopic))
        this.mqttClient.publish(relayTopic||calleeTopic,JSON.stringify({
            type:"offer",
            callerTopic:callerTopic||this.clientTopic,
            calleeTopic:calleeTopic,
            clientTopic:this.clientTopic,
            sdp:offer_sdp
        }))
        this.callOuts[calleeTopic+(callerTopic||this.clientTopic)]={
            callerTopic:callerTopic||this.clientTopic,
            calleeTopic:calleeTopic,
            clientTopic:this.clientTopic,
            targetTopic:relayTopic||calleeTopic,
            status:"calling"
        }
        this.eventListeners['answerOut']&&this.eventListeners['answerOut'](this.callOuts[calleeTopic+(callerTopic||this.clientTopic)])

        //30s超时未收到answer,挂断所有链接，并触发超时事件给callout端
        // setTimeout(()=> {
        //     if(this.callOuts[calleeTopic].status=="calling"){
        //         //超时未收到answer,挂断连接
        //         this.huangUpAll({
        //             callerTopic:callerTopic||this.clientTopic,
        //             calleeTopic:calleeTopic,
        //         })
        //         this.mqttClient.publish(callerTopic||this.clientTopic,JSON.stringify({
        //             type:"timeout",
        //             callerTopic:callerTopic||this.clientTopic,
        //             calleeTopic:calleeTopic
        //         }))
        //     }
        // },30000)
        local.oniceconnectionstatechange = ()=> {
            console.log("local ice:",local.iceConnectionState)
            if (local.iceConnectionState === "failed"||local.iceConnectionState === "disconnected") {
                this.closeCallOutConnection(this.callOuts[calleeTopic+(callerTopic||this.clientTopic)])
                //hangup
                this.handle({
                    callerTopic:callerTopic||this.clientTopic,
                    calleeTopic:calleeTopic,
                    clientTopic:this.clientTopic,
                    type:'hangUp',
                })
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
                //如果对方节点是calleeTopic，就调用connectedRelay事件
                if(relayTopic&&relayTopic==calleeTopic){
                    //发送mqtt消息
                    this.mqttClient.publish(callerTopic,JSON.stringify({
                        type:"relayConnected",
                        callerTopic:callerTopic||this.clientTopic,
                        calleeTopic:calleeTopic,
                        clientTopic:this.clientTopic
                    }))
                }
            }
        }

    }

    /***
     * 接听电话
     * @param data
     * @returns {Promise<void>}
     */
    async  answerCall(data){
        if(!this.callIns[data.callerTopic+data.calleeTopic]){
            //其他人已经接听了，再接听，不做处理
            return
        }
        //如果已经由connect，清理掉pc
        if(this.remotePcMap[data.callerTopic+data.calleeTopic]!=null){
            this.closeCallInConnection(data)
        }
        let remote = new rtcFactory.RTCPeerConnection(this.turnConfig)
        this.remotePcMap[data.callerTopic+data.calleeTopic]=remote
        let remoteStream = new rtcFactory.MediaStream()
        
        // 保存stream到map中
        const streamKey = data.callerTopic + data.calleeTopic;
        this.remoteStreamMap[streamKey] = remoteStream;
        
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
                this.handle({
                    callerTopic:data.callerTopic||this.clientTopic,
                    calleeTopic:data.calleeTopic,
                    clientTopic:this.clientTopic,
                    type:'hangUp',
                })
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
        // 保存answer stream到map中
        this.answerStreamMap[streamKey] = stream;
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
        if(this.remoteIcesMap[data.callerTopic+data.calleeTopic]){
            for(let i=0;i<this.remoteIcesMap[data.callerTopic+data.calleeTopic].length;i++){
                remote.addIceCandidate(this.remoteIcesMap[data.callerTopic+data.calleeTopic][i])
            }
        }
        this.callIns[data.callerTopic+data.calleeTopic].status="answered"
        //如果当前节点是被叫节点，同时发个已接听消息给与自己相同主题的节点
        if(data.calleeTopic==this.clientTopic){
            this.mqttClient.publish(this.clientTopic,
                JSON.stringify({
                    type:"answered",
                    clientTopic:this.clientTopic,
                    callerTopic:data.callerTopic,
                    calleeTopic:data.calleeTopic
                })
            )
        }


        return remote
    }

    /***
     * 关闭连接
     * @param rtcPeerConnection
     */
    closeConnection (rtcPeerConnection)  {
        if(rtcPeerConnection!=null){
            try{
                // 停止并释放所有sender的track
                rtcPeerConnection.getSenders().forEach((sender)=> {
                    if(sender.track) {
                        sender.track.stop();
                    }
                });

                // 停止并释放所有receiver的track
                rtcPeerConnection.getReceivers().forEach((receiver) => {
                    if(receiver.track) {
                        receiver.track.stop();
                    }
                });

                // 处理所有transceiver
                rtcPeerConnection.getTransceivers().forEach((transceiver)=> {
                    if (transceiver.sender) {
                        if(transceiver.sender.track) {
                            transceiver.sender.track.stop();
                        }
                    }
                    if (transceiver.receiver) {
                        if(transceiver.receiver.track) {
                            transceiver.receiver.track.stop();
                        }
                    }
                    // 停止transceiver
                    if(transceiver.stop) {
                        transceiver.stop();
                    }
                });

                // 关闭并清空RTCPeerConnection
                rtcPeerConnection.close();
            }catch (e){
                console.error("关闭连接失败",e)
            }
        }
    }
    closeCallOutConnection (callOut,originCallerTopic)  {
        if(callOut!=null){
            console.log("关闭callOut连接",callOut,originCallerTopic);
            let key=originCallerTopic!=null?callOut.calleeTopic+originCallerTopic :callOut.calleeTopic+callOut.callerTopic;
            this.closeConnection(this.localPcMap[key])
            this.cleanupMediaStreams(key);
            delete this.callOuts[key];
            delete this.localPcMap[key]
            this.eventListeners['closeCallOut']&&this.eventListeners['closeCallOut'](callOut,originCallerTopic)
        }
    }
    closeCallInConnection (callIn,originCallerTopic)  {
        if(callIn!=null){
            console.log("关闭callIn连接",callIn,originCallerTopic);
            let key=originCallerTopic!=null?originCallerTopic+callIn.calleeTopic :callIn.callerTopic+callIn.calleeTopic;
            this.closeConnection(this.remotePcMap[key])
            this.cleanupMediaStreams(key);
            delete this.callIns[key];
            delete this.remotePcMap[key]
            this.eventListeners['closeCallIn']&&this.eventListeners['closeCallIn'](callIn,originCallerTopic)
        }
    }
    huangUpAll(data){
        let callOut=this.callOuts[data.calleeTopic+data.callerTopic]
        if(callOut){
            this.closeCallOutConnection(callOut)
            this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                type: "hangUp",
                clientTopic: callOut.clientTopic,
                callerTopic: callOut.callerTopic,
                calleeTopic: callOut.calleeTopic
            }))
        }
        let callIn=this.callIns[data.callerTopic+data.calleeTopic]
        if(callIn){
            this.closeCallInConnection(callIn)
            this.mqttClient.publish(callIn.clientTopic,JSON.stringify({
                type: "hangUp",
                clientTopic: this.clientTopic,
                callerTopic: callIn.callerTopic,
                calleeTopic: callIn.calleeTopic
            }))
        }

    }

    /***
     * 挂断电话
     * @param data
     * @package who 挂断类型，there:对面挂断，默认:自己挂断
     */
    hangUp(data,who){
        let originCallerTopic=data.originCallerTopic||data.callerTopic
        if(data.callerTopic==this.clientTopic){
            //callout 拒绝
            let callOut=this.callOuts[data.calleeTopic+originCallerTopic]
            if(callOut){
                this.closeCallOutConnection(callOut,originCallerTopic)
                if(who=='there'){
                    //对方挂断不发送消息
                }else{
                    this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                        type: callOut.status=='answered'?'hangUp':'reject',
                        clientTopic: callOut.clientTopic,
                        callerTopic: callOut.callerTopic,
                        calleeTopic: callOut.calleeTopic,
                        status:callOut.status,
                        direction:'callIn'
                    }))
                }
            }
        }else{
            //callin 拒绝
            let callIn=this.callIns[originCallerTopic+data.calleeTopic]
            if(callIn){
                this.closeCallInConnection(callIn,originCallerTopic)
                if(who=='there'){
                    //对方挂断不发送消息
                }else {
                    this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
                        type: callIn.status == 'answered' ? 'hangUp' : 'reject',
                        clientTopic: this.clientTopic,
                        callerTopic: callIn.callerTopic,
                        calleeTopic: callIn.calleeTopic,
                        status: callIn.status,
                        direction: 'callOut'
                    }))
                }
            }
        }
    }
    /***
     * 转接电话
     * @param data {callerTopic 呼叫者topic,calleeTopic 被呼叫者topic,clientTopic 当前节点topic,forwardTopic 转接topic}
     * @package who 挂断类型，there:对面挂断，默认:自己挂断
     */
    forwardCall(data,who){
        let originCallerTopic=data.originCallerTopic||data.callerTopic
        if(data.callerTopic==this.clientTopic){
            //callout 拒绝
            let callOut=this.callOuts[data.calleeTopic+originCallerTopic]
            if(callOut){
                this.closeCallOutConnection(callOut,originCallerTopic)
                if(who=='there'){
                    //对方挂断不发送消息
                }else{
                    this.mqttClient.publish(callOut.targetTopic,JSON.stringify({
                        type: 'forward',
                        clientTopic: callOut.clientTopic,
                        callerTopic: callOut.callerTopic,
                        calleeTopic: callOut.calleeTopic,
                        forwardTopic:data.forwardTopic,
                        status:callOut.status,
                        direction:'callIn'
                    }))
                }
            }
            //到caller了，caller重新makecall
            this.makeCall({
                calleeTopic:data.forwardTopic,
                callerTopic:data.callerTopic,
                relayTopic:data.relayTopic
            })
        }else{
            //callin 拒绝
            let callIn=this.callIns[originCallerTopic+data.calleeTopic]
            if(callIn){
                this.closeCallInConnection(callIn,originCallerTopic)
                if(who=='there'){
                    //对方挂断不发送消息
                }else {
                    this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
                        type: 'forward',
                        clientTopic: this.clientTopic,
                        forwardTopic:data.forwardTopic,
                        callerTopic: callIn.callerTopic,
                        calleeTopic: callIn.calleeTopic,
                        status: callIn.status,
                        direction: 'callOut'
                    }))
                }
            }
        }
    }

    /***
     * 清理客户端资源
     */
    end(){
        this.mqttClient.end();
        // 清理所有streams
        this.cleanupMediaStreams();
        for(let key in this.localPcMap){
            this.closeConnection(this.localPcMap[key])
        }
        for(let key in this.remotePcMap){
            this.closeConnection(this.remotePcMap[key])
        }
    }

    cleanupMediaStreams(streamKey) {
        // 清理指定的streams
        if (streamKey) {
            // 清理本地stream
            if(this.localStreamMap[streamKey]) {
                this.localStreamMap[streamKey].getTracks().forEach(track => {
                    track.stop();
                });
                delete this.localStreamMap[streamKey];
            }
            
            // 清理远程stream
            if(this.remoteStreamMap[streamKey]) {
                this.remoteStreamMap[streamKey].getTracks().forEach(track => {
                    track.stop();
                });
                delete this.remoteStreamMap[streamKey];
            }
            
            // 清理answer stream
            if(this.answerStreamMap[streamKey]) {
                this.answerStreamMap[streamKey].getTracks().forEach(track => {
                    track.stop();
                });
                delete this.answerStreamMap[streamKey];
            }
        } else {
            // 清理所有streams
            Object.keys(this.localStreamMap).forEach(key => {
                this.localStreamMap[key].getTracks().forEach(track => {
                    track.stop();
                });
            });
            this.localStreamMap = {};
            
            Object.keys(this.remoteStreamMap).forEach(key => {
                this.remoteStreamMap[key].getTracks().forEach(track => {
                    track.stop();
                });
            });
            this.remoteStreamMap = {};
            
            Object.keys(this.answerStreamMap).forEach(key => {
                this.answerStreamMap[key].getTracks().forEach(track => {
                    track.stop();
                });
            });
            this.answerStreamMap = {};
        }
    }

}
