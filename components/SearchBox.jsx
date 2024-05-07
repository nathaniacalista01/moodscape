import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";

const SearchBox = () => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <LinearGradient
      colors={["rgba(232, 234, 253, 1)", "rgba(255, 255, 255, 0.4)"]}
      className="flex flex-row mx-12 bg-transparant px-[12px] py-[12px] w-5/6 rounded-[16px]"
    >
      <Image
        source={require("../assets/search.png")}
        className="w-[20px] h-[20px] mr-4"
      />
      <Text
        className="text-[#3C548D] text-[16px]"
        style={{ fontFamily: "Karla" }}
      >
        Search for Topics
      </Text>
    </LinearGradient>
  );
};

export default SearchBox;
