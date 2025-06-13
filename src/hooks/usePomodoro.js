import { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { scheduleNotification, registerNotificationsAsync } from '../services/notifications';



const notifyAfterPomodoro = () => {
  scheduleNotification('Pomodoro zakończone!', 'Zrób przerwę lub rozpocznij kolejną sesję', 1);
};

const DEFAULT_POMODORO_TIME = 25 * 60;

export default function usePomodoro(initialTime = DEFAULT_POMODORO_TIME) {
  useEffect(() => {
  registerNotificationsAsync();
}, []);
  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            notifyCompletion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const notifyCompletion = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Pomodoro zakończone!',
        body: 'Czas na przerwę albo kolejną sesję 🚀',
      },
      trigger: null,
    });
  };

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(initialTime);
  };

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    reset,
    formattedTime: formatTime(),
  };
}
