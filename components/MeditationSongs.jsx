import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const MeditationSongs = () => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      className="w-full"
    >
      <View className="flex flex-row gap-x-4">
        <LinearGradient
          colors={["#FBF8CB", "#CFFBBA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="max-w-1/2 w-[170px] h-[150px] mt-6 items-center"
        >
          <Text
            className="font-bold text-[#2B3413] text-[20px] mt-8"
            style={{ fontFamily: "Karla" }}
          >
            Forest
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={["#C6EEFF", "#68AAD9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="max-w-1/2 w-[170px] h-[150px] mt-6 items-center"
        >
          <Text
            className="font-bold text-[#242D41] text-[20px] mt-8"
            style={{ fontFamily: "Karla" }}
          >
            Rainy
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default MeditationSongs;
