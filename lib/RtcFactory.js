
if(getRuntimeEnv() === 'web'){
    window.require=function (){
        return {}
    }
}
const wrtc =require('wrtc')
function getRuntimeEnv(){
    if(typeof window!="undefined"){
        return "web"
    }else{
        return "node"
    }
}
export default class RtcFactory {
  static get getUserMedia() {
      if (getRuntimeEnv() === 'web') {
        return navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      } else {
        return wrtc.getUserMedia.bind(wrtc);
      }
  }
  static get RTCPeerConnection() {
    if (getRuntimeEnv() === 'web') {
      return RTCPeerConnection.bind(window);
    } else {
      return wrtc.RTCPeerConnection.bind(wrtc);
    }
  }

  static get RTCSessionDescription() {
    if (getRuntimeEnv() === 'web') {
      return RTCSessionDescription.bind(window);
    } else {
      return wrtc.RTCSessionDescription.bind(wrtc);
    }
  }

  static get RTCIceCandidate() {
      if (getRuntimeEnv() === 'web') {
          return RTCIceCandidate.bind(window);
      } else {
          return wrtc.RTCIceCandidate.bind(wrtc);
      }
  }

  static get MediaStream() {
      if (getRuntimeEnv() === 'web') {
          return MediaStream.bind(window);
      } else {
          return wrtc.MediaStream.bind(wrtc);
      }
  }

}
