import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../styles/PomodoroScreenStyles";

const POMODORO_TIMES = [10, 15, 25, 45]; // minuty
const BREAK_TIMES = [3, 5, 10]; // minuty

export default function PomodoroScreen() {
  const [mode, setMode] = useState("work"); // 'work' albo 'break'
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef();

  // Zmieniaj czas po wyborze nowej wartości
  useEffect(() => {
    if (mode === "work") setSecondsLeft(workDuration * 60);
  }, [workDuration]);

  useEffect(() => {
    if (mode === "break") setSecondsLeft(breakDuration * 60);
  }, [breakDuration]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval.current);
            handleSessionEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [isRunning, mode, workDuration, breakDuration]);

  const handleSessionEnd = () => {
    setIsRunning(false);
    if (mode === "work") {
      Alert.alert("Brawo!", "Czas na przerwę!", [
        { text: "Zacznij przerwę", onPress: () => startBreak() },
        { text: "OK" },
      ]);
    } else {
      Alert.alert("Koniec przerwy", "Wracaj do pracy!", [
        { text: "Zacznij Pomodoro", onPress: () => startWork() },
        { text: "OK" },
      ]);
    }
  };

  const startWork = () => {
    setMode("work");
    setSecondsLeft(workDuration * 60);
    setIsRunning(true);
  };

  const startBreak = () => {
    setMode("break");
    setSecondsLeft(breakDuration * 60);
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(mode === "work" ? workDuration * 60 : breakDuration * 60);
  };

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {mode === "work" ? "⏳ Czas pracy" : "☕ Przerwa"}
      </Text>

      {/* Wybór czasu tylko przed startem */}
      {!isRunning && (
        <View style={styles.pickerRow}>
          <Text style={styles.pickerLabel}>Czas pracy:</Text>
          <View style={styles.buttonGroup}>
            {POMODORO_TIMES.map((min) => (
              <TouchableOpacity
                key={min}
                style={[
                  styles.pickerButton,
                  workDuration === min && styles.pickerButtonActive,
                ]}
                onPress={() => setWorkDuration(min)}
              >
                <Text style={styles.pickerText}>{min} min</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      {!isRunning && (
        <View style={styles.pickerRow}>
          <Text style={styles.pickerLabel}>Przerwa:</Text>
          <View style={styles.buttonGroup}>
            {BREAK_TIMES.map((min) => (
              <TouchableOpacity
                key={min}
                style={[
                  styles.pickerButton,
                  breakDuration === min && styles.pickerButtonActive,
                ]}
                onPress={() => setBreakDuration(min)}
              >
                <Text style={styles.pickerText}>{min} min</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>

      <View style={styles.btnRow}>
        <Button
          title={isRunning ? "Pauza" : "Start"}
          onPress={() => setIsRunning((v) => !v)}
        />
        <Button title="Reset" onPress={resetTimer} color="#888" />
      </View>

      <View style={{ marginTop: 24 }}>
        <Button
          title={mode === "work" ? "Zacznij przerwę" : "Zacznij Pomodoro"}
          onPress={mode === "work" ? startBreak : startWork}
        />
      </View>
    </View>
  );
};
