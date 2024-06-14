import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonApp } from "../components/ButtonApp";
import { useNavigation } from "@react-navigation/native";
import { PriceContext } from "../context/PriceContextApp";
import { LinearGradient } from "expo-linear-gradient";
const ServiceApp = () => {
  const navigation = useNavigation();
  const { changePrice } = useContext(PriceContext);
  return (
    <ScrollView className=" bg-[#0059EB] dark:bg-slate-800">
      <LinearGradient colors={["#FEFFFF", "#52356F", "#0059EB"]}>
        <View className="flex-1 h-auto  justify-center items-center p-8 mb-2 ">
          <View className="flex-column relative justify-around items-center w-[95%] bg-indigo-50 rounded-3xl ">
            <Text className="font-bold text-3xl text-center mt-8 mb-6 text-slate-900 dark:text-slate-100">
              4$
            </Text>
            <View className="w-full p-6 justify-start">
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  3 consultas telefónicas a 1 oftalmólogo especialista
                </Text>
              </View>
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  10 terapias mensuales
                </Text>
              </View>
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  1 examen Oftalmológico cada año con un 20% de descuento
                </Text>
              </View>

              <View className="flex-1 h-auto justify-center items-center">
                <ButtonApp
                  onPress={() => {
                    changePrice(200);
                    navigation.navigate("Pay");
                  }}
                  text={"Get Basic Plan"}
                  textColor={"white"}
                  gradientColors={["#6165F3", "#270091"]}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="flex-1 h-auto  justify-center items-center p-8 mb-2 ">
          <View className="flex-column relative justify-around items-center w-[95%] bg-indigo-50 rounded-3xl ">
            <Text className="font-bold text-3xl text-center mt-8 mb-6 text-slate-900 dark:text-slate-100">
              6$
            </Text>
            <View className="w-full p-6 justify-start">
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  Atención 24/7
                </Text>
              </View>

              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  afiliación con clínica oftalmólogica
                </Text>
              </View>
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  20 terapias visuales mensuales
                </Text>
              </View>
              <View className="flex flex-row   gap-2 ">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={35}
                  color="green"
                />
                <Text className="text-slate-800 dark:text-slate-300 text-lg mb-16">
                  2 examen Oftalmológico cada año con un 30% de descuento
                </Text>
              </View>

              <View className="flex-1 h-auto justify-center items-center">
                <ButtonApp
                  onPress={() => {
                    changePrice(320);
                    navigation.navigate("Pay");
                  }}
                  text={"Get Premium Plan"}
                  textColor={"white"}
                  gradientColors={["#6165F3", "#270091"]}
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default ServiceApp;
