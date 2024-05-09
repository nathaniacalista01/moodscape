import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MoodOptions = ({ navigation }) => {
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
        {[
          { mood: "Awful", image: require("../assets/moods/awful.png") },
          { mood: "Sad", image: require("../assets/moods/sad.png") },
          { mood: "Meh", image: require("../assets/moods/meh.png") },
          { mood: "Good", image: require("../assets/moods/happy.png") },
          { mood: "Amazing", image: require("../assets/moods/amaze.png") },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex flex-col w-1/6"
            onPress={() =>
              navigation.navigate("AddJournal", {
                mood: item.mood,
                image: item.image,
              })
            }
          >
            <Image
              source={item.image}
              className="w-full h-[45px] mt-4"
              resizeMode="contain"
            />
            <Text className="text-center text-[12px]">{item.mood}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

export default MoodOptions;
