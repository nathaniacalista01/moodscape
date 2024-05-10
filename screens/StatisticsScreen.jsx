import React from "react";
import { Text, View, ScrollView, Dimensions, Image } from "react-native";
import { JOURNALS } from "../data/journal";
import JournalingStreak from "../components/JournalingStreak";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { parse, format } from "date-fns";
import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";

const StatisticsScreen = () => {
  function findPopularDayForMood(moods) {
    const dayCount = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    };

    JOURNALS.forEach((journal) => {
      if (moods.includes(journal.mood)) {
        const date = parse(journal.date, "M/d/yyyy", new Date());
        const dayOfWeek = format(date, "EEEE");
        dayCount[dayOfWeek]++;
      }
    });

    // Mencari hari dengan jumlah terbanyak
    let maxDay = "";
    let maxCount = 0;
    for (const day in dayCount) {
      if (dayCount[day] > maxCount) {
        maxDay = day;
        maxCount = dayCount[day];
      }
    }
    console.log("Ini day count", dayCount);
    return { dayCount, maxDay };
  }
  const countMoods = () => {
    const moodCounts = {
      AMAZE: 0,
      SAD: 0,
      HAPPY: 0,
      MEH: 0,
      AWFUL: 0,
    };
    const now = new Date();
    const month = now.getMonth() + 1;
    let total = 0;
    for (let i = 0; i < JOURNALS.length; i++) {
      total += 1;
      const journal = JOURNALS[i];
      const dateObject = parse(journal.date, "M/d/yyyy", new Date());
      const journalMonth = dateObject.getMonth() + 1;
      if (journalMonth !== month) {
        break;
      } else {
        if (moodCounts.hasOwnProperty(journal.mood)) {
          moodCounts[journal.mood]++;
        }
      }
    }
    return { total, moodCounts };
  };

  const checkLastSevenDays = () => {
    const today = new Date();
    const result = [];
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);

      const formattedDate =
        checkDate.getMonth() +
        1 +
        "/" +
        checkDate.getDate() +
        "/" +
        checkDate.getFullYear();

      const journalEntry = JOURNALS.find(
        (journal) => journal.date === formattedDate
      );
      result.push(journalEntry || { date: formattedDate });
    }

    return result;
  };
  const results = checkLastSevenDays();
  const { total, moodCounts } = countMoods();
  const { dayCount, maxDay } = findPopularDayForMood(["AMAZE", "HAPPY"]);

  const barData = [
    { value: dayCount.Monday, label: "M" },
    { value: dayCount.Tuesday, label: "T", frontColor: "#177AD5" },
    { value: dayCount.Wednesday, label: "W", frontColor: "#177AD5" },
    { value: dayCount.Thursday, label: "T" },
    { value: dayCount.Friday, label: "F", frontColor: "#177AD5" },
    { value: dayCount.Saturday, label: "S" },
    { value: dayCount.Sunday, label: "S" },
  ];
  const pieData = [
    { value: moodCounts.AMAZE, color: "#FFE7AA" },
    { value: moodCounts.AWFUL, color: "#F9C0BA" },
    { value: moodCounts.HAPPY, color: "#DFCBFF" },
    { value: moodCounts.MEH, color: "#B4E8FE" },
    { value: moodCounts.SAD, color: "#BAFBCC" },
  ];
  return (
    <View>
      <ScrollView className="w-full min-h-screen mb-4">
        <LinearGradient
          colors={[
            "rgba(246, 229, 196, 0.2)",
            "rgba(255, 207, 215, 0.2)",
            "rgba(211, 224, 255, 0.2)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="relative w-full min-h-screen w-screen flex items-center pt-12"
        >
          <JournalingStreak journals={results} />
          <PieChartComponent
            pieData={pieData}
            moodCounts={moodCounts}
            total={total}
          />
          <BarChartComponent barData={barData} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default StatisticsScreen;
