import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

// Ustawienie obsługi powiadomień, np. sposób ich wyświetlania
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Rejestracja urządzenia do powiadomień
export const registerNotificationsAsync = async () => {
  if (!Device.isDevice) {
    alert('Powiadomienia działają tylko na fizycznym urządzeniu');
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Nie uzyskano uprawnień do powiadomień!');
    return;
  }

  const tokenData = await Notifications.getExpoPushTokenAsync();
  return tokenData.data;
};

// Funkcja pomocnicza do planowania jednorazowego powiadomienia
export const scheduleNotification = async (title, body, seconds = 5) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds,
    },
  });
};
