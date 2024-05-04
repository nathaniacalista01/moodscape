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

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={["#FDE9EC", "#FFFFFF", "#C4F5EA"]}
        className="absolute h-screen w-screen flex items-center justify-center"
      >
        <View className="absolute top-[15%] flex flex-col w-full h-screen items-center justify-start">
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            className="h-1/3 mb-10"
          />
          <Text className="text-[20px] font-medium text-[#3C548D] leading-[28px] tracking-wider">
            Welcome to
          </Text>
          <Image
            source={require("../assets/image.png")}
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
              <Text className="text-white text-center text-[16px] font-bold">
                Sign up
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <View className="w-[320px] p-[12px] bg-twhite border-[1px] border-[#D6BDFF] rounded-3xl mt-4">
              <Text className="text-white text-center text-[16px] font-bold text-[#3C548D]">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>

          <View className="w-[320px] mt-6">
            <Text className="text-[#3C548D] text-center">Login</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default LandingScreen;
