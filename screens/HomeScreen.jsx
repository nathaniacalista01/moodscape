import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ActivityScrollView from "../components/ActivityScrollView";
import MoodOptions from "../components/MoodOptions";
import MeditationSongs from "../components/MeditationSongs";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  return (
    <ScrollView vertical={true} className="flex bg-white flex-col h-screen">
      <View className="h-[40vh] w-screen relative items-center flex justify-center">
        <Image
          source={require("../assets/cloud.png")}
          className="absolute bottom-0 w-full"
          resizeMode="contain"
        />
        <View className="bg-transparant w-3/4 p-10 rounded-[16px] shadow-xl	">
          <Text
            className="text-center text-[#242d41] font-medium text-[16px]"
            style={{ fontFamily: "Karla" }}
          >
            I choose to be happy today and to love myself today
          </Text>
        </View>
      </View>
      <View className="bg-white px-4 pt-8 flex flex-col w-full">
        <Text
          className="text-[20px] text-[#3C548D] font-bold text-left"
          style={{ fontFamily: "Karla" }}
        >
          Hello, Nate
        </Text>
        <MoodOptions navigation={navigation} />
        <View className="flex flex-col">
          <Text
            className="text-[20px] text-[#3C548D] font-bold text-left"
            style={{ fontFamily: "Karla" }}
          >
            Daily Activity
          </Text>
          <ActivityScrollView />
        </View>
        <View className="flex flex-col mt-6">
          <Text
            className="text-[20px] text-[#3C548D] font-bold text-left"
            style={{ fontFamily: "Karla" }}
          >
            Meditation Song
          </Text>
          <MeditationSongs />
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
