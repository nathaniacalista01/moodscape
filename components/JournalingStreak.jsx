import { useFonts } from "expo-font";
import React from "react";
import { Image, Text, View } from "react-native";
import { parse } from "date-fns";

const JournalingStreak = ({ journals }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  const getStreaks = () => {
    let current = journals[0];
    if (!current) {
      return 0;
    }
    let startIndex = 1;
    let previous = journals[startIndex];
    let streak = 1;
    while (previous.mood_image) {
      streak += 1;
      startIndex += 1;
      previous = journals[startIndex];
    }
    return streak;
  };
  const streak = getStreaks();
  return (
    <View className="mt-8 mx-12 p-4 bg-white w-5/6 min-h-[15vh]">
      <Text className="text-[20px] font-medium" style={{ fontFamily: "Karla" }}>
        Journaling Streaks
      </Text>
      <View className="flex flex-row justify-between gap-x-2 mt-4">
        {journals.map((journal) => {
          const dateObject = parse(journal.date, "M/d/yyyy", new Date());
          const day = dateObject.getDate();
          const month = dateObject.toLocaleString("en-US", {
            month: "short",
          }); // 'short' gives the abbreviated month name
          if (journal.mood_image) {
            return (
              <View className="flex flex-col items-center">
                <Image
                  source={journal.mood_image}
                  className="w-[30px] h-[35px]"
                />
                <Text
                  className="text-[12px] font-medium mt-2"
                  style={{ fontFamily: "Karla" }}
                >
                  {day}
                </Text>
                <Text className="text-[12px]" style={{ fontFamily: "Karla" }}>
                  {month}
                </Text>
              </View>
            );
          } else {
            return (
              <View className="flex flex-col items-center justify-center">
                <Image
                  source={require("../assets/moods/blank.png")}
                  className="w-[30px] h-[35px]"
                />
                <Text
                  className="text-[12px] font-medium mt-2"
                  style={{ fontFamily: "Karla" }}
                >
                  {day}
                </Text>
                <Text className="text-[12px]" style={{ fontFamily: "Karla" }}>
                  {month}
                </Text>
              </View>
            );
          }
        })}
      </View>
      <View className="flex flex-row mt-4">
        <Image
          source={require("../assets/icons/fire.png")}
          className="w-[20px] h-[20px]"
        />
        <Text className="text-[14px] ml-2">
          You've been journalling for {streak} days
        </Text>
      </View>
    </View>
  );
};

export default JournalingStreak;
