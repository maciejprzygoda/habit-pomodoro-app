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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moje Cele</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem
            habit={item}
            onToggle={toggleHabit}
            onDelete={deleteHabit}
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
    </View>
  );
};
