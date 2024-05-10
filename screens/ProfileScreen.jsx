import { useFonts } from "expo-font";
import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

const ProfileScreen = () => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  const user = {
    name: "Natthan Christanto",
    email: "natthanchrist@gmail.com",
    gender: "MALE",
    birhtday: "01/01/2003",
    password: "fakePassword",
  };
  return (
    <ScrollView className="h-screen bg-white" style={{ flex: 1 }}>
      <View className="flex flex-col mt-12">
        <View className="w-full flex items-center justify-center">
          <Image
            source={require("../assets/icons/profile.png")}
            className="w-[64px] h-[64px]"
          />
          <Text
            className="text-[14px] text-[#3C548D] mt-2"
            style={{ fontFamily: "Karla" }}
          >
            Change profile picture
          </Text>
        </View>
        <View className="w-3/4 mx-auto flex flex-col gap-y-4 mt-8">
          <View
            className="flex flex-col gap-y-2 pb-2"
            style={{
              borderBottomColor: "rgba(60, 60, 67, 0.18)",
              borderBottomWidth: 1,
            }}
          >
            <Text
              className="text-[16px] text-[#242D41] font-bold"
              style={{ fontFamily: "Karla" }}
            >
              Full Name
            </Text>
            <View className="flex flex-row justify-between">
              <Text style={{ fontFamily: "Karla" }}>{user.name}</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View
            className="flex flex-col gap-y-2 pb-2"
            style={{
              borderBottomColor: "rgba(60, 60, 67, 0.18)",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{ fontFamily: "Karla" }}
              className="text-[16px] text-[#242D41] font-bold"
            >
              Email
            </Text>
            <View className="flex flex-row justify-between">
              <Text style={{ fontFamily: "Karla" }}>{user.email}</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View
            className="flex flex-col gap-y-2 pb-2"
            style={{
              borderBottomColor: "rgba(60, 60, 67, 0.18)",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{ fontFamily: "Karla" }}
              className="text-[16px] text-[#242D41] font-bold"
            >
              Gender
            </Text>
            <View className="flex flex-row justify-between">
              <Text style={{ fontFamily: "Karla" }}>{user.gender}</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View
            className="flex flex-col gap-y-2 pb-2"
            style={{
              borderBottomColor: "rgba(60, 60, 67, 0.18)",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{ fontFamily: "Karla" }}
              className="text-[16px] text-[#242D41] font-bold"
            >
              Date Of Birth
            </Text>
            <View className="flex flex-row justify-between">
              <Text style={{ fontFamily: "Karla" }}>{user.birhtday}</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View>
            <View className="flex flex-row justify-between mt-4">
              <Text style={{ fontFamily: "Karla" }}>Change your password</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View>
            <View className="flex flex-row justify-between mt-4">
              <Text style={{ fontFamily: "Karla" }} className="text-[#F02323]">
                Logout
              </Text>
              <Image
                source={require("../assets/icons/red-arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity className="flex flex-row w-full bg-[#529ADE] rounded-[8px] px-[8px] py-[10px] mt-8 justify-between">
              <Text
                className="text-white text-[14px] font-bold"
                style={{ fontFamily: "Karla" }}
              >
                Suicide Hotline
              </Text>
              <Image 
                source={require("../assets/icons/white-arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
