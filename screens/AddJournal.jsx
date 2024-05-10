import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { JOURNALS } from "../data/journal";

const AddJournal = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  const { mood, image } = route.params;
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const currentDate = new Date();
  const options = { month: "long", day: "2-digit", year: "numeric" };
  const dateString = currentDate.toLocaleDateString("en-US", options);
  const handleSave = () => {
    const newJournal = {
      id: JOURNALS.length - 1,
      date: currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      mood: mood,
      mood_image: image,
      title: title,
      content: content,
    };
    JOURNALS.push(newJournal)
  };
  return (
    <ScrollView className="h-screen w-full px-8 flex flex-col">
      <View className="flex flex-row mt-14 justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/back.png")}
            className="w-[24px] h-[24px]"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSave()}>
          <LinearGradient
            colors={["#B6CBFF", "#FFB0CA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-[8px] px-[24px] rounded-full"
          >
            <Text
              className="text-white font-bold"
              style={{ fontFamily: "Karla" }}
            >
              Save
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View className="w-full flex flex-col mt-6">
        <Text
          style={{ fontFamily: "Karla" }}
          className="text-[16px] text-[#242D41] font-medium"
        >
          {dateString}
        </Text>
        <Image source={image} className="mt-4 ml-2" />
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="text-[24px] mt-4 ml-2 font-bold"
          placeholder="Title"
          style={{ fontFamily: "Karla" }}
        />
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline={true}
          placeholder="Express your feeling here"
          className="w-full flex flex-col ml-2 mt-2 text-[16px]"
          style={{ fontFamily: "Karla", lineHeight: 28 }}
        />
      </View>
    </ScrollView>
  );
};

export default AddJournal;
