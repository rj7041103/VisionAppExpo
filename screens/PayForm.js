import { View, Text, ImageBackground, TextInput, Alert } from "react-native";
import { ButtonApp } from "../components/ButtonApp";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { PriceContext } from "../context/PriceContextApp";
const PayForm = () => {
  const navigation = useNavigation();
  const { price } = useContext(PriceContext);
  return (
    <View className="flex-col h-full  bg-[#F1F1F1] justify-center items-center">
      <View className="w-full h-auto flex-row">
        <View className="w-[50%] h-auto flex-1 flex-col relative">
          <View className="w-full h-auto flex-1 flex-col justify-evenly items-center bg-slate-50  ">
            <Text className="text-black  text-2xl">Type:</Text>
            <TextInput
              className="w-10/12 h-11 bg-black text-white text-xl text-center rounded-3xl pl-4"
              value="Pago Movil"
            />
          </View>
          <View className="w-full h-auto flex-1 flex-col justify-evenly items-center  bg-slate-50 ">
            <Text className="text-black text-2xl">Benefit person name: </Text>
            <TextInput
              className="w-10/12 h-11 bg-black text-white text-xl text-center rounded-3xl pl-4"
              value="Maria Parra"
            />
          </View>
        </View>
        <View className="w-[50%] h-auto flex-1 flex-col items-center  bg-slate-50  ">
          <ImageBackground
            source={require("../assets/metodosPagos.png")}
            className="w-[96%] h-60 mt-[43px] object-contain mb-7  "
          />
        </View>
      </View>

      <View className="w-full  flex-row h-60">
        <View className="w-[50%] h-auto flex-1 flex-col relative">
          <View className="w-full h-auto flex-1 flex-col justify-evenly items-center bg-slate-50  ">
            <Text className="text-black  text-2xl">CI:</Text>
            <TextInput
              className="w-10/12 h-11 bg-black text-white text-xl text-center rounded-3xl pl-4"
              value="10632118"
            />
          </View>
          <View className="w-full h-auto flex-1 flex-col justify-evenly items-center  bg-slate-50 ">
            <Text className="text-black text-2xl">Phone Number: </Text>
            <TextInput
              className="w-10/12 h-11 bg-black text-white text-xl text-center mb-2  rounded-3xl pl-4"
              value="04245123123"
            />
          </View>
        </View>
        <View className="w-[50%] h-auto flex-1 flex-col items-center  bg-slate-50  ">
          {price === 0 ? (
            <View className="w-full h-auto flex-1 flex-col justify-evenly items-center bg-slate-50  ">
              <Text className="text-black  text-2xl">Amount:</Text>
              <TextInput
                className="w-10/12 h-11 bg-black text-white text-xl text-center rounded-3xl pl-4"
                value={`180$`}
              />
            </View>
          ) : (
            <View className="w-full h-auto flex-1 flex-col justify-evenly items-center bg-slate-50  ">
              <Text className="text-black  text-2xl">Amount:</Text>
              <TextInput
                className="w-10/12 h-11 bg-black text-white text-xl text-center rounded-3xl pl-4"
                value={`${price}$`}
              />
            </View>
          )}
          <View className="w-full h-auto flex-1 flex-col justify-evenly items-center  bg-slate-50 ">
            <Text className="text-black text-2xl">Banck: </Text>
            <TextInput
              className="w-10/12 h-11 bg-black text-white text-xl text-center mb-2 rounded-3xl pl-4"
              value="BNC"
            />
          </View>
        </View>
      </View>

      <View className="w-full h-auto flex-row mt-12 p-20 ">
        <ButtonApp
          onPress={() => {
            Alert.alert("Compra exitosa");
            navigation.navigate("Home");
          }}
          text={"Buy $"}
          textColor={"white"}
          gradientColors={["#6165F3", "#270091"]}
        />
      </View>
    </View>
  );
};

export default PayForm;
