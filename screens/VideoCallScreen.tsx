// App.js

import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";

import { APP_ID, APP_Sign } from "../configcall.js";
import { View, StyleSheet } from "react-native";
import React from "react";
export default function VideoCallScreen(props) {
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={APP_ID}
        appSign={APP_Sign}
        userID={`user-${Math.random().toString(36).substring(7)}`} // userID can be something like a phone number or the user id on your own user system.
        userName={`user-${Math.random().toString(36).substring(7)}`}
        callID={`call-${Math.random().toString(36).substring(7)}`} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            props.navigation.navigate("Home");
          },
          onHangUp: () => {
            props.navigation.navigate("Home");
          },
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
