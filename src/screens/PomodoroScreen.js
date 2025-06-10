import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import usePomodoro from '../hooks/usePomodoro';

export default function PomodoroScreen() {
  const { formattedTime, isRunning, start, pause, reset } = usePomodoro();

  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      <Text style={styles.timer}>{formattedTime}</Text>
      <View style={styles.buttonContainer}>
        {isRunning ? (
          <Button title="Pauza" onPress={pause} />
        ) : (
          <Button title="Start" onPress={start} />
        )}
        <Button title="Reset" onPress={reset} color="#888" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  timer: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
