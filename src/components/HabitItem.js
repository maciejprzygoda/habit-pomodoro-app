import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { HabitContext } from '../contexts/HabitContext';

const { habits, addHabit, toggleHabit, deleteHabit } = useContext(HabitContext);

export default function HabitItem({ habit, onToggle }) {
  return (
    <TouchableOpacity onPress={() => onToggle(habit.id)}>
      <View style={[styles.item, habit.done && styles.done]}>
        <Text style={styles.text}>{habit.name}</Text>
        <Text>{habit.done ? '✅' : '⬜️'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#eee',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  done: {
    backgroundColor: '#cdeccf',
  },
  text: {
    fontSize: 18,
  },
});
