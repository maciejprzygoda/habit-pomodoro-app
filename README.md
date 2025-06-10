# Habit Pomodoro App

Aplikacja mobilna zbudowana w **React Native (Expo)** służąca do:
- śledzenia nawyków (habit tracker),
- zarządzania czasem metodą **Pomodoro**,
- działania offline z wykorzystaniem AsyncStorage.

---

#  Funkcje

-  Dodawanie i odhaczanie codziennych nawyków
-  Timer Pomodoro z odliczaniem
-  Przechowywanie danych lokalnie (AsyncStorage)
-  Context API do zarządzania stanem
-  Nawigacja pomiędzy ekranami (React Navigation)

---

##  Uruchomienie projektu

1. **Zainstaluj Expo CLI (jeśli jeszcze nie masz):**

```bash
npm install -g expo-cli

    Zainstaluj zależności:

npm install

    Uruchom aplikację:

npx expo start

    Skanuj kod QR w aplikacji Expo Go na telefonie

Wymagane biblioteki

Projekt korzysta z:

    expo

    react-native

    @react-navigation/native

    @react-navigation/native-stack

    @react-native-async-storage/async-storage

Struktura folderów

HabitPomodoroApp/
├── App.js
├── package.json
├── src/
│   ├── components/       # Komponenty UI (np. HabitItem)
│   ├── contexts/         # Context API (HabitContext)
│   ├── navigation/       # React Navigation
│   ├── screens/          # Ekrany: Home, Pomodoro
│   ├── services/         # (opcjonalnie) np. powiadomienia
│   ├── utils/            # Narzędzia, np. storage.js

Autor
M.PRzygoda
 Czerwiec 2025


Projekt edukacyjny – możesz swobodnie używać, rozwijać i modyfikować.

