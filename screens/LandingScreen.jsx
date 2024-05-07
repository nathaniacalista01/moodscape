import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const LandingScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <LinearGradient
      colors={["#FDE9EC", "#FFFFFF", "#C4F5EA"]}
      className="absolute h-full w-screen flex items-center justify-center"
    >
      <View className="top-[15%] flex flex-col w-full h-screen items-center justify-start">
        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
          className="h-1/3 mb-10"
        />
        <Text
          className="text-[20px] font-medium text-[#3C548D] leading-[28px] tracking-wider"
          style={{ fontFamily: "Karla" }}
        >
          Welcome to
        </Text>
        <Image
          source={require("../assets/moodscape.png")}
          resizeMode="contain"
          className="h-10 mt-4"
        />
        <TouchableOpacity onPress={() => navigation.navigate("MainApp")}>
          <LinearGradient
            colors={["#87DCCB", "#D6BDFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-[320px] p-[12px] rounded-3xl mt-12"
            onPress={() => navigation.replace("Home")}
          >
            <Text
              className="text-white text-center text-[16px] font-bold"
              style={{ fontFamily: "Karla" }}
            >
              Sign up
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <View className="w-[320px] p-[12px] bg-twhite border-[1px] border-[#D6BDFF] rounded-3xl mt-4">
            <Text
              className="text-white text-center text-[16px] font-bold text-[#3C548D]"
              style={{ fontFamily: "Karla" }}
            >
              Sign In with Google
            </Text>
          </View>
        </TouchableOpacity>

        <View className="w-[320px] mt-6">
          <Text
            className="text-[#3C548D] text-center"
            style={{ fontFamily: "Karla" }}
          >
            Login
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};
export default LandingScreen;
