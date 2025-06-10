import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HabitContext = createContext(null);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now().toString(),
      name,
      done: false,
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
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

