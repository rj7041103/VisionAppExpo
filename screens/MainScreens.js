import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NavigationManager from "../NavigationManager";
import Login from "./Login";
import Home from "./Home";
import { AuthContext } from "../context/LoginContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { UserContext } from "../context/UserContextCall";
const MainScreens = () => {
  const Stack = createNativeStackNavigator();
  const { isAuthenticated } = useContext(AuthContext);
  const { isCalling } = useContext(UserContext);
  const handleNavigation = () => {
    if (isAuthenticated && isCalling == false) {
      return <NavigationManager />;
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      );
    }
  };

  return <NavigationContainer>{handleNavigation()}</NavigationContainer>;
};

export default MainScreens;
