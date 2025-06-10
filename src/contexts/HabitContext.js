import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export const HabitContext = createContext(null);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitObj) => {
  const newHabit = {
    id: Date.now().toString(),
    name: habitObj.name,
    done: false,
    reminderEnabled: habitObj.reminderEnabled || false,
    reminderTime: habitObj.reminderTime || null,
    notificationId: habitObj.notificationId || null,
  };
  setHabits((prev) => [...prev, newHabit]);
};


  // Usuwanie nawyku + anulowanie powiadomienia, jeśli było ustawione
  const deleteHabit = async (id) => {
    setHabits((prev) => {
      const habit = prev.find((h) => h.id === id);
      if (habit?.notificationId) {
        Notifications.cancelScheduledNotificationAsync(habit.notificationId);
      }
      return prev.filter((habit) => habit.id !== id);
    });
  };

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  useEffect(() => {
    const loadHabits = async () => {
      const stored = await AsyncStorage.getItem('habits');
      if (stored) setHabits(JSON.parse(stored));
    };
    loadHabits();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
