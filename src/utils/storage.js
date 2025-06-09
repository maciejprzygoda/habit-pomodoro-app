import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Zapisuje dane do AsyncStorage pod określonym kluczem
 * @param {string} key - Klucz (np. 'habits')
 * @param {any} value - Dane do zapisania
 */
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Błąd zapisu danych [${key}]:`, e);
  }
};

/**
 * Odczytuje dane z AsyncStorage z określonego klucza
 * @param {string} key - Klucz (np. 'habits')
 * @returns {any|null} - Dane lub null jeśli nie istnieją
 */
export const loadData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Błąd odczytu danych [${key}]:`, e);
    return null;
  }
};

/**
 * Usuwa dane z AsyncStorage dla danego klucza
 * @param {string} key - Klucz do usunięcia
 */
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Błąd usuwania danych [${key}]:`, e);
  }
};
