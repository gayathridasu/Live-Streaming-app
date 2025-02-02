import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room(){
    const {roomId} = useParams();

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }
    
    let myMeeting = async (element) => {
        const appID = 1258578068;
      const serverSecret = "2912cc87f39b9a949b0f24b6a61bf84d";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  randomID(5),  randomID(5));
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.LiveStreaming,
            // config:{
            //     role,
            // },
        },
        sharedLinks:[{
            name: "Copy link",
            url: `http://localhost3000/room/${roomId}`
        }]
        
      });
    };

    return(
        <div ref={myMeeting}></div>
    )
}
export default Room;