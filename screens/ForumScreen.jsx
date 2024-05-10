import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchBox from "../components/SearchBox";
import TopicCard from "../components/TopicCard";
import { FORUMS } from "../data/forums";
import { FAB } from "@rneui/themed";

const ForumScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView vertical={true} className="relative flex w-full min-h-screen">
        <LinearGradient
          colors={["#FFE9ED", "#C3D8FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="relative h-full w-full min-h-screen w-screen flex items-center pt-12"
        >
          <SearchBox />

          {FORUMS.map((forum) => {
            return <TopicCard key={forum.id} forum={forum} isReply={false} />;
          })}
        </LinearGradient>
      </ScrollView>
      <TouchableOpacity className="bg-[#3C548D] rounded-full absolute w-[40px] h-[40px] right-5 bottom-5 flex items-center justify-center">
        <Text className="text-white font-bold text-[30px]">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForumScreen;
