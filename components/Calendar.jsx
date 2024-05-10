import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { JOURNALS } from "../data/journal";
import { Calendar } from "react-native-calendars";
import { format, parse } from "date-fns";
import { useFonts } from "expo-font";
const CustomDay = ({ date, state, marking, onPress }) => {
  const [fontsLoaded] = useFonts({
    Karla: require("../assets/fonts/Karla.ttf"),
  });
  let backgroundColor = "white";
  let periodColor = "white";
  let textColor = "black";
  let fontWeight = "normal";
  if (state === "disabled") {
    textColor = "grey";
  } else if (state === "today") {
    backgroundColor = "#3C548D";
    textColor = "white";
    fontWeight = "bold";
  }

  // Custom marking logic
  if (marking?.marked) {
    periodColor = marking.color;
  }

  return (
    <TouchableOpacity onPress={() => onPress(date)}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className="flex relative items-center justify-center w-[50px] h-[40px]"
      >
        <View
          style={{ backgroundColor: backgroundColor }}
          className="flex items-center justify-center w-[25px] h-[25px] rounded-[4px]"
        >
          <Text
            style={{ color: textColor, fontWeight: fontWeight }}
            className="text-[14px]"
          >
            {date.day}
          </Text>
        </View>

        {marking.marked && (
          <View
            className="absolute bottom-0 w-3/4 mx-12 h-[5px] rounded-lg"
            style={{ backgroundColor: periodColor }}
          ></View>
        )}
      </View>
    </TouchableOpacity>
  );
};
const CustomCalendar = () => {
  const [journal, setJournal] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const markedDates = JOURNALS.reduce((acc, journal) => {
    // Safely parse the date from the expected format "M/D/YYYY"
    const date = parse(journal.date, "M/d/yyyy", new Date());
    // Format the date as "YYYY-MM-DD"
    const formattedDate = format(date, "yyyy-MM-dd");
    let color = "gray"; // Default color

    if (journal.mood === "AMAZE") color = "#DFCBFF";
    if (journal.mood === "SAD") color = "#B4E8FE";
    if (journal.mood === "MEH") color = "#BAFBCC";
    if (journal.mood === "GOOD") color = "#FFE7AA";
    if (journal.mood === "AWFUL") color = "#F9C0BA";

    acc[formattedDate] = {
      marked: true,
      dotColor: color,
      activeOpacity: 0.5,
      color: color,
    };
    return acc;
  }, {});

  const showJournal = (date) => {
    // Convert the date from "yyyy-MM-dd" to "M/d/yyyy"
    const formattedDate = format(
      parse(date, "yyyy-MM-dd", new Date()),
      "M/d/yyyy"
    );
    const filteredJournals = JOURNALS.filter(
      (journal) => journal.date === formattedDate
    );
    console.log("Journals for ", date, ": ", filteredJournals);
    // Optionally, update state or handle display of filtered journals here
    setJournal(filteredJournals.length > 0 ? filteredJournals[0] : null);
  };
  console.log("Ini marked dates ; ", markedDates);

  return (
    <View className="bg-white w-full flex flex-col" style={{ flex: 1 }}>
      <Calendar
        dayComponent={({ date, state }) => {
          const marking = markedDates[date.dateString] || {};
          return (
            <CustomDay
              key={date}
              date={date}
              state={state}
              marking={marking}
              onPress={(date) => showJournal(date.dateString)}
            />
          );
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        {journal && journal.title !== "" && (
          <View
            className="flex flex-col w-full px-8 mt-8 bg-white min-h-[300px]"
            style={{ flexGrow: 1 }}
          >
            <View className="flex flex-row">
              <Image source={journal.mood_image} />
              <View className="flex flex-col ml-8" style={{ flexShrink: 1 }}>
                <Text
                  className="text-[20px] font-medium flex-wrap"
                  style={{
                    fontFamily: "Karla",
                  }}
                >
                  {journal.title}
                </Text>
                <Text
                  className="mt-2 text-[14px] text-[#9898AF]"
                  style={{ fontFamily: "Karla" }}
                >
                  {journal.date}
                </Text>
              </View>
            </View>
            <Text
              className="mt-2 text-[16px] text-justify"
              style={{ fontFamily: "Karla", lineHeight: 24 }}
            >
              {journal.content}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CustomCalendar;
