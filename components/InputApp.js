import { View, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const InputApp = ({
  placeholder,
  inputName,
  iconName,
  iconColor,
  user,
  setUser,
  type,
}) => {
  const handleChangeUser = (inputName, value) => {
    setUser({ ...user, [inputName]: value });
  };
  function inputTypes() {
    if (type === "number") {
      return (
        <View className="flex-1 w-11/12 pr-[20] pb-[20] pt-[8]   bg-white rounded-3xl mb-[35] pl-[20] flex-row justify-start gap-[15] relative -z-[1] ">
          <Icon name={iconName} size={24} color={iconColor} />
          <TextInput
            placeholder={placeholder}
            onChangeText={(value) => handleChangeUser(inputName, value)}
            style={{ width: "100%" }}
            keyboardType="numeric"
          />
        </View>
      );
    } else if (type == "password") {
      return (
        <View className="flex-1 w-11/12 pr-[20] pb-[20] pt-[8]   bg-white rounded-3xl mb-[35] pl-[20] flex-row justify-start gap-[15] relative -z-[1] ">
          <Icon name={iconName} size={24} color={iconColor} />
          <TextInput
            placeholder={placeholder}
            onChangeText={(value) => handleChangeUser(inputName, value)}
            style={{ width: "100%" }}
            secureTextEntry
          />
        </View>
      );
    } else {
      return (
        <View className="flex-1 w-11/12 pr-[20] pb-[20] pt-[8]   bg-white rounded-3xl mb-[35] pl-[20] flex-row justify-start gap-[15] relative -z-[1] ">
          <Icon name={iconName} size={24} color={iconColor} />
          <TextInput
            placeholder={placeholder}
            onChangeText={(value) => handleChangeUser(inputName, value)}
            style={{ width: "100%" }}
          />
        </View>
      );
    }
  }
  return inputTypes();
};

export default InputApp;
