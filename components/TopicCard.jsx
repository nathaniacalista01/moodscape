import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

const TopicCard = ({ forum, isReply }) => {
  const { name, content, comments, likes, createdTime, profile, replies } =
    forum;
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  // Function to truncate content to 300 words
  const truncateContent = (text, limit) => {
    const wordArray = text.split(" ");
    if (wordArray.length > limit) {
      return wordArray.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  // Limit for content in words
  const contentLimit = 30;
  const truncatedContent = truncateContent(content, contentLimit);
  const gradientColors = isReply
    ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)"] // Transparent background for replies
    : ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]; // Original gradient for main posts

  const parentClass = isReply
    ? ""
    : "h-fit mx-6 mt-4 rounded-[8px] px-[12px] py-[24px] mb-2";
  return (
    <LinearGradient
      colors={gradientColors}
      className={parentClass}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex flex-row mx-4 min-h-[200px]">
        <View className="flex flex-col h-fit w-[36px] items-center">
          <Image source={profile} className="rounded-full w-[36px] h-[36px]" />
          {replies.length > 0 && (
            <View className="h-[200px] border-l w-[1px] border-[#E6E6E6]" />
          )}
        </View>
        <View className="flex flex-col w-5/6 ml-2">
          <View className="flex flex-row gap-x-2 ">
            <Text
              className="text-[16px] font-medium text-[#242D41]"
              style={{ fontFamily: "Karla" }}
            >
              {name}
            </Text>
            <Text className="text-[#9898AF] font-medium text-[12px]">.</Text>
            <Text
              className="text-[14px] text-[#9898AF]"
              style={{ fontFamily: "Karla" }}
            >
              {createdTime}
            </Text>
          </View>
          <Text className="text-justify mt-2" style={{ fontFamily: "Karla" }}>
            {isExpanded ? content : truncatedContent}
          </Text>
          {content.split(" ").length > contentLimit && (
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
              <Text className="mt-4">
                {isExpanded ? "Show Less" : "Show More"}
              </Text>
            </TouchableOpacity>
          )}
          <View className="flex flex-row w-full mt-4 gap-x-3">
            <View className="flex flex-row justify-center items-center">
              <Image
                source={require("../assets/icons/replies.png")}
                className="w-[20px] h-[20px]"
              />
              <Text className="ml-1">{comments}</Text>
            </View>
            <View className="flex flex-row justify-center items-center">
              <Image
                source={require("../assets/icons/likes.png")}
                className="w-[20px] h-[20px]"
              />
              <Text className="ml-1">{likes}</Text>
            </View>
          </View>
        </View>
      </View>
      {replies.length > 0 &&
        replies.map((reply) => {
          return <TopicCard forum={reply} isReply={true} />;
        })}
    </LinearGradient>
  );
};

export default TopicCard;
