import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { HabitContext } from '../contexts/HabitContext';
import HabitItem from '../components/HabitItem';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { habits, addHabit, toggleHabit, deleteHabit } = useContext(HabitContext);
  const [newHabit, setNewHabit] = useState('');
  const navigation = useNavigation();

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      addHabit(newHabit.trim());
      setNewHabit('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moje Nawykowe Cele</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem habit={item} onToggle={toggleHabit} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Brak nawyków. Dodaj coś!</Text>}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Dodaj nowy nawyk..."
          value={newHabit}
          onChangeText={setNewHabit}
        />
        <Button title="Dodaj" onPress={handleAddHabit} />
      </View>

      <TouchableOpacity
        style={styles.pomodoroButton}
        onPress={() => navigation.navigate('Pomodoro')}
      >
        <Text style={styles.pomodoroText}>🕒 Przejdź do Pomodoro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
  },
  empty: {
    marginTop: 40,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
  },
  pomodoroButton: {
    marginTop: 30,
    backgroundColor: '#f87171',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  pomodoroText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
