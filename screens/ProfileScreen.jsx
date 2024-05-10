import { useFonts } from "expo-font";
import React from "react";
import { Text, View, Image } from "react-native";

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
    <View className="h-screen bg-white" style={{ flex: 1 }}>
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
            <Text className="text-[16px] text-[#242D41] font-bold">
              Full Name
            </Text>
            <View className="flex flex-row justify-between">
              <Text>{user.name}</Text>
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
            <Text className="text-[16px] text-[#242D41] font-bold">Email</Text>
            <View className="flex flex-row justify-between">
              <Text>{user.email}</Text>
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
            <Text className="text-[16px] text-[#242D41] font-bold">Gender</Text>
            <View className="flex flex-row justify-between">
              <Text>{user.gender}</Text>
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
            <Text className="text-[16px] text-[#242D41] font-bold">
              Date Of Birth
            </Text>
            <View className="flex flex-row justify-between">
              <Text>{user.birhtday}</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View>
            <View className="flex flex-row justify-between mt-4">
              <Text>Change your password</Text>
              <Image
                source={require("../assets/icons/arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
          <View>
            <View className="flex flex-row justify-between mt-4">
              <Text className="text-[#F02323]">Logout</Text>
              <Image
                source={require("../assets/icons/red-arrow.png")}
                className="w-[24px] h-[24px]"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
