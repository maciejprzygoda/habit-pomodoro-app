import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
  Platform,
} from "react-native";
import { HabitContext } from "../contexts/HabitContext";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";
import styles from "../styles/Styles";

export default function AddHabitScreen() {
  const { addHabit } = useContext(HabitContext);
  const [newHabit, setNewHabit] = useState("");
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const navigation = useNavigation();

  // Funkcja do planowania powiadomienia - zwraca notificationId
  const scheduleHabitNotification = async (habitName, time) => {
    const now = new Date();
    const notificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      time.getHours(),
      time.getMinutes(),
      0
    );
    if (notificationTime < now) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Przypomnienie o nawyku!",
        body: `Pora: ${habitName}`,
      },
      trigger: {
        hour: notificationTime.getHours(),
        minute: notificationTime.getMinutes(),
        repeats: true,
      },
    });
    return id;
  };

  const handleAddHabit = async () => {
    if (newHabit.trim()) {
      let notificationId = null;
      let reminderTimeString = null;

      if (reminderEnabled) {
        notificationId = await scheduleHabitNotification(
          newHabit.trim(),
          reminderTime
        );
        reminderTimeString =
          reminderTime.getHours().toString().padStart(2, "0") +
          ":" +
          reminderTime.getMinutes().toString().padStart(2, "0");
      }

      // Dodaj pełny obiekt nawyku z info o powiadomieniu!
      addHabit({
        name: newHabit.trim(),
        reminderEnabled,
        reminderTime: reminderTimeString,
        notificationId,
      });

      setNewHabit("");
      setReminderEnabled(false);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodaj nowy nawyk</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nazwa nawyku..."
          value={newHabit}
          onChangeText={setNewHabit}
        />
      </View>

      <View style={styles.reminderRow}>
        <Text style={styles.reminderText}>Przypomnienie</Text>
        <Switch value={reminderEnabled} onValueChange={setReminderEnabled} />
      </View>

      {reminderEnabled && (
        <View style={styles.timePickerRow}>
          <Text style={{ marginRight: 10 }}>Godzina:</Text>
          <TouchableOpacity
            style={styles.timeButton}
            onPress={() => setShowTimePicker(true)}
          >
            <Text style={styles.timeText}>
              {reminderTime.getHours().toString().padStart(2, "0")}:
              {reminderTime.getMinutes().toString().padStart(2, "0")}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={reminderTime}
              mode="time"
              is24Hour={true}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(_, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setReminderTime(selectedTime);
              }}
            />
          )}
        </View>
      )}



      <Button title="Dodaj" onPress={handleAddHabit} />

      <TouchableOpacity
        style={styles.pomodoroButton}
        onPress={() => navigation.navigate("Pomodoro")}
      >
        <Text style={styles.pomodoroText}>🕒 Przejdź do Pomodoro</Text>
      </TouchableOpacity>
    </View>
  );
}
