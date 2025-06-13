import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export const HabitContext = createContext(null);
export const HabitProvider = ({ children }) => {
  
  const [habits, setHabits] = useState([]);

  // dodawanie naawyku (inicjalizuje doneDates jako pustą tablicę - problem z inicjowaniem aplikacji bez danych wejsciowych)
  const addHabit = (habitObj) => {
    const newHabit = {
      id: Date.now().toString(),
      name: habitObj.name,
      doneDates: [],
      reminderEnabled: habitObj.reminderEnabled || false,
      reminderTime: habitObj.reminderTime || null,
      notificationId: habitObj.notificationId || null,
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  // usuwanie nawyku + anulowanie powiadomienia, jeśli było ustawione
  const deleteHabit = async (id) => {
    setHabits((prev) => {
      const habit = prev.find((h) => h.id === id);
      if (habit?.notificationId) {
        Notifications.cancelScheduledNotificationAsync(habit.notificationId);
      }
      return prev.filter((habit) => habit.id !== id);
    });
  };

  // logika zaznaczania/odznaczania nawyku na dany dzień - potrzebne do zliczania statystyk
  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const today = new Date().toISOString().slice(0, 10);
        let doneDates = Array.isArray(habit.doneDates)
          ? [...habit.doneDates]
          : [];
        if (doneDates.includes(today)) {
          // Odznacz na dziś
          doneDates = doneDates.filter((date) => date !== today);
        } else {
          // Zaznacz na dziś
          doneDates.push(today);
        }
        return { ...habit, doneDates };
      })
    );
  };

  // pobieranie z pamięci
  useEffect(() => {
    const loadHabits = async () => {
      const stored = await AsyncStorage.getItem("habits");
      if (stored) {
        // Dla zgodności – zamień stare habity (z polem done) na nowy format
        const loaded = JSON.parse(stored).map((habit) => ({
          ...habit,
          doneDates: habit.doneDates
            ? habit.doneDates
            : habit.done
            ? [new Date().toISOString().slice(0, 10)]
            : [],
        }));
        setHabits(loaded);
      }
    };
    loadHabits();
  }, []);

  // zapis do pamięci - async storage
  useEffect(() => {
    AsyncStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, toggleHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
