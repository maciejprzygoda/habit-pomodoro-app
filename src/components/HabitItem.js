import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HabitItemStyles";
import { Ionicons } from "@expo/vector-icons";

export default function HabitItem({ habit, onToggle, onDelete, onShowStats }) {
  // sprawdzenie czy nawyk wykonano dzisiaj?
  const today = new Date().toISOString().slice(0, 10);
  const doneToday =
    Array.isArray(habit.doneDates) && habit.doneDates.includes(today);

  return (
    <View style={styles.item}>
      {/* checkbox */}
      <TouchableOpacity
        onPress={() => onToggle(habit.id)}
        style={styles.checkboxContainer}
      >
        <Text style={styles.checkbox}>{doneToday ? "✅" : "⬜️"}</Text>
      </TouchableOpacity>

      {/* NAZWA NAWYKU */}
      <Text style={[styles.text, doneToday && styles.textDone]}>
        {habit.name}
      </Text>
      
      {/* Usuwanie */}
      <TouchableOpacity onPress={() => onDelete(habit.id)}>
        <Text style={styles.trash}>🗑️</Text>
      </TouchableOpacity>

      {/* Statystyki */}
      <TouchableOpacity
        onPress={() => onShowStats && onShowStats(habit.id)}
        style={styles.statsButton}
      >
        <Ionicons name="bar-chart-outline" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}
