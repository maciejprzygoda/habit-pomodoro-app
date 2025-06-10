import React from 'react';
import { HabitProvider } from './src/contexts/HabitContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <HabitProvider>
      <AppNavigator />
    </HabitProvider>
  );
}

