import { Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import ServiceApp from "./screens/ServiceApp";
import PayForm from "./screens/PayForm";
import Home from "./screens/Home";
import KnowScreen from "./screens/KnowScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [txtColorHome, setTextColorHome] = useState("purple");
  const [txtColorPay, setTextColorPay] = useState("black");
  const [txtColorService, setTextColorService] = useState("black");
  const [txtColorKnow, setTextColorKnow] = useState("black");
  const [activeTab, setActiveTab] = useState("Home");
  const changeIconAndTextColor = (current) => {
    setActiveTab(current);
    switch (current) {
      case "Home":
        setTextColorHome(txtColorHome === "black" ? "purple" : "black");
        setTextColorService("black");
        setTextColorPay("black");
        setTextColorKnow("black");
        break;
      case "Services":
        setTextColorService(txtColorService === "black" ? "purple" : "black");
        setTextColorHome("black");
        setTextColorPay("black");
        setTextColorKnow("black");
        break;

      case "Know":
        setTextColorKnow(txtColorKnow === "black" ? "purple" : "black");
        setTextColorService("black");
        setTextColorHome("black");
        setTextColorPay("black");
        break;

      case "Pay":
        setTextColorPay(txtColorPay === "black" ? "purple" : "black");
        setTextColorService("black");
        setTextColorHome("black");
        setTextColorKnow("black");
        break;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Set tab bar active tint color and text color dynamically
        tabBarActiveTintColor: route.name === activeTab ? "purple" : "black",
        tabBarStyle: {
          width: "100%",
          height: 100,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={30} color={txtColorHome} />
          ),
          tabBarLabel: () => (
            <Text style={{ color: txtColorHome, marginBottom: 20 }}>Home</Text>
          ),
        }}
        listeners={{
          tabPress: () => {
            changeIconAndTextColor("Home");
          },
        }}
      />

      <Tab.Screen
        name="Know"
        component={KnowScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="question-circle"
              size={30}
              color={txtColorKnow}
            />
          ),
          tabBarLabel: () => (
            <Text style={{ color: txtColorKnow, marginBottom: 20 }}>Know</Text>
          ),
        }}
        listeners={{
          tabPress: () => {
            changeIconAndTextColor("Know");
          },
        }}
      />

      <Tab.Screen
        name="Services"
        component={ServiceApp}
        options={{
          tabBarIcon: () => (
            <AntDesign
              name="customerservice"
              size={30}
              color={txtColorService}
            />
          ),
          tabBarLabel: () => (
            <Text style={{ color: txtColorService, marginBottom: 20 }}>
              Services
            </Text>
          ),
        }}
        listeners={{
          tabPress: () => {
            changeIconAndTextColor("Services");
          },
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayForm}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="money-check-alt"
              size={30}
              color={txtColorPay}
            />
          ),
          tabBarLabel: () => (
            <Text style={{ color: txtColorPay, marginBottom: 20 }}>Pay</Text>
          ),
        }}
        listeners={{
          tabPress: () => {
            changeIconAndTextColor("Pay");
          },
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationManager = () => {
  return <MyTabs />;
};

export default NavigationManager;
