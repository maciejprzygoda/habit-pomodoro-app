// utils funkcji związanych z nawykami

//zliczanie wykonanych dizsiaj
export function countDoneToday(habits = []) {
  const today = new Date().toISOString().slice(0, 10);
  return habits.filter(
    h => Array.isArray(h.doneDates) && h.doneDates.includes(today)
  ).length;
}
//zlicznaie wykonanych ogolem - potrzeben od obblicznai poziomu
export function totalDone(habits = []) {
  return habits.reduce(
    (sum, h) => sum + (Array.isArray(h.doneDates) ? h.doneDates.length : 0),
    0
  );
}

// informacja o liczbie dni wykonanych w ostatnich 7 i 30 dniach
export function getWeeklyStats(habitId, habits = []) {
  const habit = habits.find(h => h.id === habitId);
  if (!habit || !Array.isArray(habit.doneDates)) {
    return { weeklyDone: 0, monthlyDone: 0 };
  }

  const now = new Date();
  const dates = habit.doneDates.map(d => new Date(d).setHours(0, 0, 0, 0));

  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 6);
  weekAgo.setHours(0, 0, 0, 0);

  const monthAgo = new Date(now);
  monthAgo.setDate(now.getDate() - 29);
  monthAgo.setHours(0, 0, 0, 0);

  const todayTime = now.setHours(0, 0, 0, 0);

  const weeklyDone = dates.filter(a => a >= weekAgo.getTime() && a <= todayTime).length;
  const monthlyDone = dates.filter(a => a >= monthAgo.getTime() && a <= todayTime).length;

  return { weeklyDone, monthlyDone };
}
