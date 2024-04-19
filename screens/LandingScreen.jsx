import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LandingScreen = () => {
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
          <Text
            className="text-[20px] font-medium text-[#3C548D] leading-[28px] tracking-wider"
            style={styles.karla}
          >
            Welcome to
          </Text>
          <Image
            source={require("../assets/image.png")}
            resizeMode="contain"
            className="h-10 mt-4"
          />
          <LinearGradient
            colors={["#87DCCB", "#D6BDFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-[320px] p-[12px] rounded-3xl mt-12"
          >
            <Text
              className="text-white text-center text-[16px] font-bold"
              style={styles.karla}
            >
              Sign up
            </Text>
          </LinearGradient>

          <View className="w-[320px] p-[12px] bg-twhite border-[1px] border-[#D6BDFF] rounded-3xl mt-4">
            <Text
              className="text-white text-center text-[16px] font-bold text-[#3C548D]"
              style={styles.karla}
            >
              Sign In with Google
            </Text>
          </View>
          <View className="w-[320px] mt-6">
            <Text className="text-[#3C548D] text-center" style={styles.karla}>
              Login
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default LandingScreen;

const styles = StyleSheet.create({
  karla: { fontFamily: "Karla" },
});
