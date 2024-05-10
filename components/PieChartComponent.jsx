import React from "react";
import { Text, View, ScrollView, Dimensions, Image } from "react-native";
import { JOURNALS } from "../data/journal";
import JournalingStreak from "./JournalingStreak";
import { LinearGradient } from "expo-linear-gradient";
import { PieChart } from "react-native-gifted-charts";
import { parse } from "date-fns";
import { useFonts } from "expo-font";

const screenWidth = Dimensions.get("window").width * 0.8;

const MoodPercentage = ({ source, name, percentage, backgroundColor }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <View className="flex flex-row items-center justfy-between mt-[4px]">
      <View
        className="w-[10px] h-[10px] rounded-full"
        style={{ backgroundColor: backgroundColor }}
      />
      <Image source={source} className="w-[25px] h-[25px] ml-4" />
      <View className="w-1/4">
        <Text
          className="text-[12px] text-[#242D41] ml-2"
          style={{ fontFamily: "Karla" }}
        >
          {name}
        </Text>
      </View>
      <View>
        <Text
          className="text-[12px] text-[#242D41] ml-4"
          style={{ fontFamily: "Karla" }}
        >
          {percentage.toFixed(2)}%{" "}
        </Text>
      </View>
    </View>
  );
};

const PieChartComponent = ({ total, moodCounts, pieData }) => {
  const moods = [
    {
      source: require("../assets/moods/happy.png"),
      name: "Good",
      percentage: (moodCounts.HAPPY / total) * 100,
      backgroundColor: "#FFE7AA",
    },
    {
      source: require("../assets/moods/sad.png"),
      name: "Sad",
      percentage: (moodCounts.SAD / total) * 100,
      backgroundColor: "#B4E8FE",
    },
    {
      source: require("../assets/moods/amaze.png"),
      name: "Amaze",
      percentage: (moodCounts.AMAZE / total) * 100,
      backgroundColor: "#DFCBFF",
    },
    {
      source: require("../assets/moods/meh.png"),
      name: "Meh",
      percentage: (moodCounts.MEH / total) * 100,
      backgroundColor: "#BAFBCC",
    },
    {
      source: require("../assets/moods/awful.png"),
      name: "Awful",
      percentage: (moodCounts.AWFUL / total) * 100,
      backgroundColor: "#F9C0BA",
    },
  ];
  moods.sort((a, b) => b.percentage - a.percentage);

  return (
    <View className="flex flex-row bg-white w-5/6 mt-8 rounded-[8px] px-4 py-8 items-center justify-center">
      <PieChart
        donut
        textColor="black"
        radius={50}
        showTextBackground
        data={pieData}
      />
      <View className="flex flex-col ml-4">
        {moods.map((mood) => {
          return (
            <MoodPercentage
              key={mood.name}
              source={mood.source}
              name={mood.name}
              percentage={mood.percentage}
              backgroundColor={mood.backgroundColor}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PieChartComponent;
