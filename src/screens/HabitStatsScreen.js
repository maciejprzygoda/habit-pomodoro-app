import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HabitContext } from "../contexts/HabitContext";
import Styles from "../styles/Styles";  


export default function HabitStatsScreen({ route }) {
  const { habitId } = route.params;
  const { habits } = useContext(HabitContext);

  const habit = habits.find((h) => h.id === habitId);

  if (!habit) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.header}>Brak danych dla tego nawyku.</Text>
      </View>
    );
  }

  const allDoneDates = Array.isArray(habit.doneDates) ? habit.doneDates : [];
  const today = new Date();

  // Pomocnicze funkcje do liczenia
  const countInLastNDays = (dates, n) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // tylko data
    const nDaysAgo = new Date(now);
    nDaysAgo.setDate(now.getDate() - (n - 1));
    return dates.filter((dateStr) => {
      const date = new Date(dateStr);
      date.setHours(0, 0, 0, 0); // tylko data
      return date >= nDaysAgo && date <= now;
    }).length;
  };

  const weekCount = countInLastNDays(allDoneDates, 7);
  const monthCount = countInLastNDays(allDoneDates, 30);
  const totalCount = allDoneDates.length;

  return (
    <View style={Styles.container_stats}>
      <Text style={Styles.header}>Statystyki nawyku: {habit.name}</Text>
      <Text style={Styles.stat}>Wykonano w ostatnim tygodniu: {weekCount} / 7 dni</Text>
      <Text style={Styles.stat}>Wykonano w ostatnim miesiącu: {monthCount} / 30 dni</Text>
      <Text style={Styles.stat}>Wykonano ogółem: {totalCount}</Text>
    </View>
  );
}

