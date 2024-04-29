## simple webrtc library with mqtt as signaling server

This is a simple webrtc library using mqtt as signaling server. to establish a peer-to-peer connection between two clients. The signaling server is used to exchange messages between the clients.

to use this library, you need to have a mqtt server running and the necessary credentials.

### Usage
step1 : install the library using npm
```
npm install swrtc mqtt --save
```

step2 : import the library in your project
```javascript
import callManager from 'swrtc';
```

step3 : create a new instance of MqttClient with the following parameters:
```javascript
import mqtt from 'mqtt';
let mqttClient = mqtt.connect('mqtt://localhost:1883',{
    clientId:'swrtc-client',
    username:'swrtc',
    password:'swrtc'
});
```


step4 : create a new instance of CallManager with the following parameters:
```javascript
import callManager from 'swrtc';
let callManager = new CallManager(clientTopic,{
    publish:(topic,messsage)=>{
        //发布消息
        mqttClient.publish(topic,messsage);
    }
},{
    video:true
},{
    "offerIn":(data)=>{
        //对方发过来的offer，展示接听界面
        console.log("offerIn",data);
        currentCall={
            ...data
        }
        $('.call-status').text('响铃...');
        $('.call-buttons').show(); // 挂断后隐藏按钮
        $('.answer-call').show();
        $('.cuscontainer').css('display', 'flex');
    },
    "hangUp":(data)=>{
        //对方拒绝或者挂断
        console.log("hangUp",data);
        $('.call-status').text('已挂断...');
        setTimeout(() => {
            $('.cuscontainer').css('display', 'none');
        }, 3000);

    },
    "localCallStream":(data)=>{
        //本地流，设置播放流
        document.getElementById("local").srcObject = data.stream;
        console.log("打出时本地流",data);
    },
    "callStream":(data)=>{
        //打电话的时候对方给的流，设置播放流
        document.getElementById("remote").srcObject = data.stream;
        console.log("打出时对方流",data);
    },
    "localAnswerStream":(data)=>{
        //本地流，设置播放流
        document.getElementById("local").srcObject = data.stream;
        console.log("接听时本地流",data);
    },
    "answerStream":(data)=>{
        //接听电话时对方给的流，设置播放流
        document.getElementById("remote").srcObject = data.stream;
        console.log("接听时对方流",data);
    },
    "connected":(data)=>{
        //连接成功
        console.log("connected",data);
        $('.call-status').text('正在通话中...');
        $('.call-buttons').show(); //
        $('.answer-call').hide();
        $('.decline-call').show();
    },
    "disconnected":(data)=>{
        //断开连接
        console.log("disconnected",data);
        $('.call-status').text('对方信号不好...');
        setTimeout(() => {
            $('.cuscontainer').css('display', 'none');
            $('.call-status').text('来电...');
            $('.call-buttons').show(); // 挂断后隐藏按钮
        }, 1000);
    }
});

```

### API

#### CallManager(clientTopic,mqttOptions,webrtcOptions,eventHandlers) constructor

- clientTopic: mqtt topic for the client
- mqttOptions: mqtt options for the client
you can pass the following two styles of mqtt options:
1. proxy callback function for mqtt
```javascript
{
    publish:(topic,messsage)=>{
        //发布消息
        mqttClient.publish(topic,messsage);
    }
}
```
2. real mqttclient options
```javascript
{
    url: 'ws://{mqtthost}:8083/mqtt',
    username: "test",
    password: "test",
    clientId: "test"+Math.random().toString(16).substr(2, 8)
}
```
- constraints: webrtc constraints for the call
- eventHandlers: event handlers for the call
you can pass the following event handlers:
- offerIn: as a callee,function to handle the offer from the caller
- hangUp: function to handle the hangUp from the there
- localCallStream: as a caller, function to handle the local stream
- callStream: as a caller, function to handle the remote stream
- localAnswerStream: as a callee, function to handle the local stream when answering the call
- answerStream: as a callee, function to handle the remote stream when answering the call
- connected: function to handle rtc connection established
- disconnected: function to handle the rtc  disconnection


#### CallManager.makeCall(calleeTopic) call a peer

- calleeTopic:  topic of the peer to call

#### CallManager.answerCall(call) answer the call
- call : the call object to answer
```javascript
    calleeTopic:'/call/1',# 
    clientTopic:'/call/2',#
    callerTopic:'/call/1'#
```
#### CallManager.hangUp() hang up the call
```javascript
    calleeTopic:'/call/1',# 
    clientTopic:'/call/2',#
    callerTopic:'/call/1'#
```
#### CallManager.end() release the resources

### Example
example/index.html
