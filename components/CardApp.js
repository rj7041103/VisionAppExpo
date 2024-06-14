import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { ButtonApp } from "./ButtonApp";
import TextApp from "./TextApp";
const CardApp = ({ titulo, text, image }) => {
  return (
    <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
      <Text className="font-bold text-3xl text-center text-slate-900 dark:text-slate-100">
        {titulo}
      </Text>
      <ImageBackground
        className="w-full h-72 mt-[35px] object-contain mb-7"
        source={{ uri: image }}
      />
      {/*           <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
        {text}
      </Text>  */}
      <TextApp text={text} />
      {/* <ButtonApp
        onPress={() => {
          prop.navigation.navigate("Home");
        }}
        text={"Ver mas"}
        textColor={"white"}
        gradientColors={["#6165F3", "#270091"]}
        nameIcon={"eye"}
        colorIcon={"white"}
      /> */}
    </Card>
  );
};

export default CardApp;

const styles = StyleSheet.create({});
