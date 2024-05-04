import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import activities from "../data/activites.json";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const ActivityScrollView = () => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="max-h-[200px] gap-x-4 mt-6"
    >
      <LinearGradient
        className="flex flex-row w-[150px] px-[6px] h-[70px] items-center justify-center rounded-[8px]"
        colors={["rgba(246, 229, 196, 0.6)", "rgba(255, 207, 215, 0.6)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Image
          resizeMode="contain"
          className="max-h-[50px]"
          source={require("../assets/activities/water.png")}
        />
        <Text
          className="text-[14px] font-medium text-[#242D41] shrink"
          style={{ fontFamily: "Karla" }}
        >
          Drink Enough Water
        </Text>
      </LinearGradient>
      <LinearGradient
        className="flex flex-row w-[150px] px-[6px] h-[70px] items-center justify-center rounded-[8px]"
        colors={["rgba(246, 229, 196, 0.6)", "rgba(255, 207, 215, 0.6)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Image
          resizeMode="contain"
          className="max-h-[50px]"
          source={require("../assets/activities/jogging.png")}
        />
        <Text
          className="text-[14px] font-medium text-[#242D41] shrink"
          style={{ fontFamily: "Karla" }}
        >
            Do Simple Exercise
        </Text>
      </LinearGradient>
      <LinearGradient
        className="flex flex-row w-[150px] px-[6px] h-[70px] items-center justify-center rounded-[8px]"
        colors={["rgba(246, 229, 196, 0.6)", "rgba(255, 207, 215, 0.6)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Image
          resizeMode="contain"
          className="max-h-[50px]"
          source={require("../assets/activities/mind.png")}
        />
        <Text
          className="text-[14px] font-medium text-[#242D41] shrink"
          style={{ fontFamily: "Karla" }}
        >
          Drink Enough Water
        </Text>
      </LinearGradient>
    </ScrollView>
  );
};


export default ActivityScrollView;
