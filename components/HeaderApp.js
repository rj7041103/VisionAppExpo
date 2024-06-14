import { Text, View } from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import AvatarApp from "./AvatarApp";
export const HeaderApp = () => {
  return (
    <Header
      placement="left"
      leftComponent={<AvatarApp />}
      centerComponent={{ text: "EYE CARE" }}
      rightComponent={{ icon: "home" }}
      classname="font-semibold text-lg text-gray-900 dark:text-stone-100"
    />
  );
};

export default HeaderApp;
