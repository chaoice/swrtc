import * as bootstrap from 'bootstrap'
import './src/scss/styles.scss'
import $ from 'jquery';
import mqtt from 'mqtt';
const mqttConfig={
    url: 'ws://81.70.3.211:8083/mqtt',
    // url: 'ws://10.1.20.214:8083/mqtt',
    username:"test",
    wsOptions: {
        rejectUnauthorized: false,
    },
    password:"test",
    clientId:"test"+Math.random().toString(16).substr(2, 8)
}
import CallManager from './lib/main.js';
var callManager
var relayTopic=null
var currentCall={}
$(document).ready(function() {
    $('.answer-call').click(function() {
        $('.call-status').text('已接听');
        $('.call-buttons').hide(); // 接听后隐藏按钮
        //回答对方的流
        callManager.answerCall(currentCall);
    });

    $('.decline-call').click(function() {
        $('.call-status').text('已挂断');
        $('.call-buttons').hide(); // 挂断后隐藏按钮
        setTimeout(() => {
            $('.cuscontainer').css('display', 'none');
        },3000)
        callManager.hangUp(currentCall);
    });
    $('#connect-btn').click(function() {
        connect();
    });
    $('#call-btn').click(function() {
        makeCall();
    })
});

var connect=function(){
    const clientTopic = document.getElementById('client-topic').value;
    let mqttClient = mqtt.connect(mqttConfig.url,{...mqttConfig});
    mqttClient.reconnecting=true;
    mqttClient.on("connect", () => {
        mqttClient.subscribe(clientTopic, (err) => {
            if (!err) {
                console.log("订阅成功",clientTopic)
            }else{
                console.error(err);
            }
        });
    });
    mqttClient.on("reconnect", () => {
        console.log("重连中...")
    });
    mqttClient.on("message", (topic, message) => {
        // message is Buffer
        console.log("mqttMesage",topic,message.toString())
        callManager.messageHandler(topic, message);
    });
    callManager = new CallManager(clientTopic,{
        publish:(topic,messsage)=>{
            //发布消息
            mqttClient.publish(topic,messsage);
        }
    },{
        video:true,
        audio: {
            noiseSuppression: true,
            echoCancellation: true,
            autoGainControl: true,
            mozNoiseSuppression: true,
            mozAutoGainControl: true,
            mozEchoCancellation: true
        }
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
            // document.getElementById("local").srcObject = data.stream;
            console.log("打出时本地流",data);
        },
        "callStream":(data)=>{
            //打电话的时候对方给的流，设置播放流
            document.getElementById("remote").srcObject = data.stream;
            console.log("打出时对方流",data);
        },
        "localAnswerStream":(data)=>{
            //本地流，设置播放流
            // document.getElementById("local").srcObject = data.stream;
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
}
var makeCall=function (){
    const callTopic = document.getElementById('call-topic');
    callManager.makeCall({calleeTopic:callTopic.value,relayTopic:relayTopic,callerTopic:document.getElementById('client-topic').value});
    currentCall={
        calleeTopic:callTopic.value,
        clientTopic:document.getElementById('client-topic').value,
        callerTopic:document.getElementById('client-topic').value
    }
    $('.cuscontainer').css('display', 'flex');
    $('.call-status').text('正在呼叫...');
    $('.answer-call').hide();
    $('.call-buttons').show(); //
    $('.decline-call').show();
}
