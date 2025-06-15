import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HabitContext } from "../contexts/HabitContext";
import HabitItem from "../components/HabitItem";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/HomeScreenStyles";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { habits, toggleHabit, deleteHabit } = useContext(HabitContext);

  // LICZENIE POZIOMU (każde 10 wykonanych nawyków = 1 poziom)
  const totalDone = habits
    ? habits.reduce((acc, habit) => {
        if (Array.isArray(habit.doneDates)) {
          return acc + habit.doneDates.length;
        }
        return acc;
      }, 0)
    : 0;
  const level = Math.floor(totalDone / 10);

  // LICZENIE ZREALIZOWANYCH DZIŚ
  const today = new Date().toISOString().slice(0, 10);
  const doneToday = habits
    ? habits.filter(
        (habit) =>
          Array.isArray(habit.doneDates) && habit.doneDates.includes(today)
      ).length
    : 0;

  return (
    <View style={styles.container}>
      {/* Nagłówek poziomu */}
      <Text style={[styles.title, { marginBottom: 10 }]}>
        Twój poziom: {level}
      </Text>

      <Text style={styles.title}>Moje Cele</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem
            habit={item}
            onToggle={toggleHabit}
            onDelete={deleteHabit}
            onShowStats={(habitId) =>
              navigation.navigate("HabitStats", { habitId })
            }
            
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Brak nawyków. Dodaj coś!</Text>
        }
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddHabit")}
      >
        <Text style={styles.addButtonText}>➕ Dodaj nawyk</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pomodoroButton}
        onPress={() => navigation.navigate("Pomodoro")}
      >
        <Text style={styles.pomodoroText}>🕒 Przejdź do Pomodoro</Text>
      </TouchableOpacity>

      {/* LICZNIK NA DOLE */}
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Zrealizowane {doneToday}/{habits ? habits.length : 0}
        </Text>
      </View>
    </View>
  );
}
