const STORAGE_KEY = 'atar_streak';

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  activeDates: string[];  // all active dates
}

export interface StreakInfo extends StreakData {
  weekHistory: boolean[]; // last 7 days, index 0 = 6 days ago, index 6 = today
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

function getRaw(): StreakData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { currentStreak: 0, longestStreak: 0, lastActiveDate: '', activeDates: [] };
}

function save(data: StreakData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getStreak(): StreakData {
  return getRaw();
}

export function recordActivity(): StreakData {
  const data = getRaw();
  const t = today();

  if (data.lastActiveDate === t) return data; // already recorded today

  const gap = data.lastActiveDate ? daysBetween(data.lastActiveDate, t) : 0;

  if (gap === 1) {
    data.currentStreak += 1;
  } else if (gap > 1 || !data.lastActiveDate) {
    data.currentStreak = 1;
  }

  data.lastActiveDate = t;
  if (!data.activeDates.includes(t)) data.activeDates.push(t);
  if (data.currentStreak > data.longestStreak) data.longestStreak = data.currentStreak;

  save(data);
  return data;
}

export function getStreakData(): StreakInfo {
  const data = getRaw();
  const t = new Date();
  const weekHistory: boolean[] = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(t);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    weekHistory.push(data.activeDates.includes(ds));
  }

  // If lastActiveDate is >1 day ago, streak is broken
  let currentStreak = data.currentStreak;
  if (data.lastActiveDate) {
    const gap = daysBetween(data.lastActiveDate, today());
    if (gap > 1) currentStreak = 0;
  }

  return { ...data, currentStreak, weekHistory };
}
