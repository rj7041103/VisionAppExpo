import React from "react";
import { Avatar } from "react-native-elements";

const AvatarApp = () => {
  return (
    <Avatar
      source={{
        uri: "../assets/images/icon.png",
      }}
      showEditButton
    />
  );
};

export default AvatarApp;
