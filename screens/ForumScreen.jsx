import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import SearchBox from "../components/SearchBox";
import TopicCard from "../components/TopicCard";
import { FORUMS } from "../data/forums";

const ForumScreen = () => {
  return (
    <ScrollView vertical={true} className="flex w-full min-h-screen">
      <LinearGradient
        colors={["#FFE9ED", "#C3D8FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="h-full w-full min-h-screen w-screen flex items-center pt-12"
      >
        <SearchBox />
        {FORUMS.map((forum) => {
          return <TopicCard forum={forum} isReply={false} />;
        })}
      </LinearGradient>
    </ScrollView>
  );
};

export default ForumScreen;
