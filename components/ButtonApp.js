import React from "react";
import { Text, Pressable, StyleSheet, Animated } from "react-native";
import { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import TextApp from "./TextApp";
export const ButtonApp = ({
  onPress,
  text,
  textColor,
  gradientColors,
  nameIcon,
  colorIcon,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const handleAnimated = () => {
    Animated.timing(opacity, {
      toValue: 0.8,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.85,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    handleAnimated();
    if (onPress) {
      onPress();
    }
  };

  const animatedStyles = {
    opacity: opacity,
    transform: [{ scale: scale }],
  };

  return (
    <AnimatedPressable
      style={[animatedStyles]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className="flex-1 relative  w-10/12 justify-center items-center rounded-[40px]  flex-row gap-5  "
    >
      <LinearGradient
        colors={gradientColors}
        className="flex-1 -p-3 pb-4 pt-4 justify-center items-center  rounded-3xl mb-5   flex-row gap-5  active:scale-75  active:bg-slate-100"
      >
        {nameIcon && nameIcon !== "" ? (
          <Icon name={nameIcon} size={24} color={colorIcon} />
        ) : null}

        <TextApp
          text={text}
          color={textColor}
          className="text-center font-semibold "
          typeOfText={"subtitle"}
        />
      </LinearGradient>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    flexDirection: "row",
    gap: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
