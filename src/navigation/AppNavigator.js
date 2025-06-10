import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PomodoroScreen from '../screens/PomodoroScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Nawyki' }}
        />
        <Stack.Screen
          name="Pomodoro"
          component={PomodoroScreen}
          options={{ title: 'Pomodoro Timer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
