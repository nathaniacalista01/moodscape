import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";

const MoodOptions = () => {
  return (
    <LinearGradient
      colors={["#F1FFFF", "#E4FEF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="px-[20px] py-[12px] rounded-[8px] w-full min-h-[15vh] my-6 flex flex-col"
    >
      <Text className="font-medium font-[#242D41] leading-[16px]">
        How was your day?
      </Text>
      <View className="flex flex-row justify-around w-full">
        <View className="flex flex-col w-1/6 ">
          <Image
            source={require("../assets/moods/awful.png")}
            className="w-full h-[45px] mt-4"
            resizeMode="contain"
          />
          <Text className="text-center text-[12px]">Awful</Text>
        </View>
        <View className="flex flex-col w-1/6 ">
          <Image
            source={require("../assets/moods/sad.png")}
            className="w-full h-[45px] mt-4"
            resizeMode="contain"
          />
          <Text className="text-center text-[12px]">Sad</Text>
        </View>
        <View className="flex flex-col w-1/6 ">
          <Image
            source={require("../assets/moods/meh.png")}
            className="w-full h-[45px] mt-4"
            resizeMode="contain"
          />
          <Text className="text-center text-[12px]">Meh</Text>
        </View>
        <View className="flex flex-col w-1/6 ">
          <Image
            source={require("../assets/moods/happy.png")}
            className="w-full h-[45px] mt-4"
            resizeMode="contain"
          />
          <Text className="text-center text-[12px]">Good</Text>
        </View>
        <View className="flex flex-col w-1/6 ">
          <Image
            source={require("../assets/moods/amaze.png")}
            className="w-full h-[45px] mt-4"
            resizeMode="contain"
          />
          <Text className="text-center text-[12px]">Amazing</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MoodOptions;
