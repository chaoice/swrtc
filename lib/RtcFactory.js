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
      return RTCPeerConnection;
    } else {
      return wrtc.RTCPeerConnection;
    }
  }

  static get RTCSessionDescription() {
    if (getRuntimeEnv() === 'web') {
      return RTCSessionDescription;
    } else {
      return wrtc.RTCSessionDescription;
    }
  }

  static get RTCIceCandidate() {
      if (getRuntimeEnv() === 'web') {
          return RTCIceCandidate;
      } else {
          return wrtc.RTCIceCandidate;
      }
  }

  static get MediaStream() {
      if (getRuntimeEnv() === 'web') {
          return MediaStream;
      } else {
          return wrtc.MediaStream;
      }
  }

}
