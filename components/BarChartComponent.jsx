import { useFonts } from "expo-font";
import React from "react";
import { View, Text, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";
const BarChartComponent = ({ barData }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <View className="flex flex-col p-4 bg-white mx-12 bg-white w-5/6 mt-4 rounded-[8px]">
      <Text
        className="text-[20px] font-bold text-center"
        style={{ fontFamily: "Karla" }}
      >
        Monthly Mood Recap
      </Text>
      <BarChart
        horizontal
        barWidth={10}
        barBorderRadius={4}
        frontColor="#B791F7"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        width={250}
        height={300}
        xAxisInterval={2}
      />
    </View>
  );
};

export default BarChartComponent;
