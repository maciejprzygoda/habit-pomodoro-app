import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HabitItemStyles";

export default function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(habit.id)} style={styles.checkboxContainer}>
        <Text style={styles.checkbox}>{habit.done ? "✅" : "⬜️"}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{habit.name}</Text>
      <TouchableOpacity onPress={() => onDelete(habit.id)}>
        <Text style={styles.trash}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};
