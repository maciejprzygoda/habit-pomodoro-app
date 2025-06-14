
# HabitPomodoroApp

Aplikacja mobilna do śledzenia nawyków z techniką Pomodoro  
Stworzona w React Native

---

## Spis treści

- [Opis](#opis)
- [Funkcje](#funkcje)
- [Technologie](#technologie)
- [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
- [Struktura projektu](#struktura-projektu)
- [Zrzuty ekranu](#zrzuty-ekranu)
- [Autor](#autor)
- [Budowanie APK](#budowanie-apk)

---

## Opis

**HabitPomodoroApp** to prosta i funkcjonalna aplikacja mobilna do śledzenia realizacji nawyków oraz pracy w systemie Pomodoro.  
Dzięki niej możesz budować dobre nawyki, ustawiać powiadomienia, przeglądać swoje statystyki i korzystać z timera Pomodoro.

---

## Funkcje

- Dodawanie, usuwanie i oznaczanie nawyków jako wykonane
- Przypomnienia o nawykach (powiadomienia push)
- Licznik zrealizowanych nawyków i poziom użytkownika (gamifikacja)
- Statystyki każdego nawyku: wykonania tygodniowe, miesięczne i ogólne
- Timer Pomodoro do wydajnej nauki/pracy
- Przechowywanie danych lokalnie (tryb offline)
- Przejrzysty interfejs i responsywny układ
- Obsługa różnych rozmiarów ekranu

---

## Technologie

- **React Native**
- **Expo**
- React Navigation
- Context API (zarządzanie stanem globalnym)
- AsyncStorage (przechowywanie danych)
- Expo Notifications (powiadomienia)
- DateTimePicker
- Flexbox (responsywny layout)
- Ikony: @expo/vector-icons

---

## Instalacja i uruchomienie

1. **Klonuj repozytorium:**
   ```bash
   git clone https://github.com/maciejprzygoda/habit-pomodoro-app.git
   cd habit-pomodoro-app
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom aplikację:**
   ```bash
   npx expo start
   ```

4. **Testuj na telefonie (Expo Go) lub emulatorze Android/iOS.**

---

## Struktura projektu

```
HabitPomodoroApp/
├── src/
│   ├── components/    # Komponenty UI (HabitItem, Timer, itp.)
│   ├── contexts/      # Context API do zarządzania stanem
│   ├── navigation/    # Konfiguracja nawigacji
│   ├── screens/       # Główne ekrany aplikacji (Home, AddHabit, Pomodoro, Statystyki)
│   ├── styles/        # Pliki ze stylami
├── App.js
├── README.md
├── package.json
└── ...
```

## Budowanie APK

1. **Zainstaluj Expo CLI globalnie (jeśli jeszcze nie masz):**
   ```bash
   npm install -g expo-cli
   ```

2. **Zaloguj się do Expo (jeśli nie masz konta, załóż na https://expo.dev):**
   ```bash
   expo login
   ```

3. **W katalogu projektu uruchom komendę:**
   ```bash
   expo build:android
   ```
   - Wybierz opcję APK lub AAB (APK działa na większości urządzeń, AAB jest wymagany do Google Play).
   - Poczekaj, aż Expo zbuduje aplikację (link do pliku .apk lub .aab pojawi się w konsoli oraz na Twoim koncie Expo).

4. **Pobierz gotowy plik APK/AAB i zainstaluj na swoim telefonie lub prześlij do Google Play!**

Więcej o publikowaniu aplikacji:  
https://docs.expo.dev/classic/building-standalone-apps/


Autor
M.Przygoda
 Czerwiec 2025


Projekt edukacyjny – możesz swobodnie używać, rozwijać i modyfikować.

