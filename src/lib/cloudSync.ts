/**
 * Cloud sync: localStorage progress ↔ Firestore atar_user_progress collection.
 *
 * Data synced:
 *  - progress_data: completed questions, weak questions, practice minutes, recent sessions
 *  - streak_data: streak count, last practice date, active dates (from streak.ts)
 *  - achievements_data: skill-tree node progress (from progress.ts)
 */

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebaseClient';

// ── localStorage keys (mirrors useProgress.ts + streak.ts + progress.ts) ──

const KEYS = {
  completed: 'atar-completed',
  weak: 'atar-weak',
  streak: 'atar-streak',
  lastPracticeDate: 'atar-last-practice-date',
  practiceMinutes: 'atar-practice-minutes',
  recentSessions: 'atar-recent-sessions',
  streakV2: 'atar_streak',
  skillTree: 'atar-master-progress',
} as const;

// ── Types ─────────────────────────────────────────────────────

interface ProgressData {
  completed: string[];
  weak: string[];
  practiceMinutes: number;
  recentSessions: unknown[];
  updatedAt: string;
}

interface StreakCloudData {
  streak: number;
  lastPracticeDate: string | null;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  activeDates: string[];
  updatedAt: string;
}

interface AchievementsData {
  skillTree: Record<string, unknown>;
  updatedAt: string;
}

// ── Helpers ───────────────────────────────────────────────────

function readLS<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLS(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event('progress-change'));
}

function now(): string {
  return new Date().toISOString();
}

// ── Gather local data ─────────────────────────────────────────

function gatherProgressData(): ProgressData {
  return {
    completed: readLS<string[]>(KEYS.completed, []),
    weak: readLS<string[]>(KEYS.weak, []),
    practiceMinutes: readLS<number>(KEYS.practiceMinutes, 0),
    recentSessions: readLS<unknown[]>(KEYS.recentSessions, []),
    updatedAt: now(),
  };
}

function gatherStreakData(): StreakCloudData {
  const v2 = readLS<{
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string;
    activeDates: string[];
  }>(KEYS.streakV2, { currentStreak: 0, longestStreak: 0, lastActiveDate: '', activeDates: [] });

  return {
    streak: readLS<number>(KEYS.streak, 0),
    lastPracticeDate: readLS<string | null>(KEYS.lastPracticeDate, null),
    currentStreak: v2.currentStreak,
    longestStreak: v2.longestStreak,
    lastActiveDate: v2.lastActiveDate,
    activeDates: v2.activeDates,
    updatedAt: now(),
  };
}

function gatherAchievementsData(): AchievementsData {
  return {
    skillTree: readLS<Record<string, unknown>>(KEYS.skillTree, {}),
    updatedAt: now(),
  };
}

// ── Merge logic ───────────────────────────────────────────────

function mergeProgress(local: ProgressData, cloud: ProgressData): ProgressData {
  const completed = Array.from(new Set([...local.completed, ...cloud.completed]));
  const weak = Array.from(new Set([...local.weak, ...cloud.weak]))
    .filter((id) => !completed.includes(id));
  const practiceMinutes = Math.max(local.practiceMinutes, cloud.practiceMinutes);

  const sessionKey = (s: Record<string, unknown>) => `${s.date}|${s.mode}`;
  const sessionMap = new Map<string, unknown>();
  for (const s of [...(cloud.recentSessions as Record<string, unknown>[]),
                    ...(local.recentSessions as Record<string, unknown>[])]) {
    const rec = s as Record<string, unknown>;
    sessionMap.set(sessionKey(rec), rec);
  }
  const recentSessions = Array.from(sessionMap.values()).slice(0, 20);

  return { completed, weak, practiceMinutes, recentSessions, updatedAt: now() };
}

function mergeStreak(local: StreakCloudData, cloud: StreakCloudData): StreakCloudData {
  const activeDates = Array.from(new Set([...local.activeDates, ...cloud.activeDates])).sort();
  return {
    streak: Math.max(local.streak, cloud.streak),
    lastPracticeDate:
      (local.lastPracticeDate ?? '') >= (cloud.lastPracticeDate ?? '')
        ? local.lastPracticeDate
        : cloud.lastPracticeDate,
    currentStreak: Math.max(local.currentStreak, cloud.currentStreak),
    longestStreak: Math.max(local.longestStreak, cloud.longestStreak),
    lastActiveDate:
      local.lastActiveDate >= cloud.lastActiveDate ? local.lastActiveDate : cloud.lastActiveDate,
    activeDates,
    updatedAt: now(),
  };
}

function mergeAchievements(local: AchievementsData, cloud: AchievementsData): AchievementsData {
  const STATUS_RANK: Record<string, number> = {
    locked: 0, unlocked: 1, 'in-progress': 2, completed: 3, mastered: 4,
  };
  const localTree = (local.skillTree?.nodes ?? local.skillTree ?? {}) as Record<string, Record<string, unknown>>;
  const cloudTree = (cloud.skillTree?.nodes ?? cloud.skillTree ?? {}) as Record<string, Record<string, unknown>>;
  const allKeys = new Set([...Object.keys(localTree), ...Object.keys(cloudTree)]);
  const merged: Record<string, unknown> = { ...(local.skillTree as Record<string, unknown>) };

  const nodes: Record<string, unknown> = {};
  for (const key of allKeys) {
    const l = localTree[key] as Record<string, unknown> | undefined;
    const c = cloudTree[key] as Record<string, unknown> | undefined;
    if (!l) { nodes[key] = c; continue; }
    if (!c) { nodes[key] = l; continue; }
    const lRank = STATUS_RANK[l.status as string] ?? 0;
    const cRank = STATUS_RANK[c.status as string] ?? 0;
    const best = lRank >= cRank ? { ...l } : { ...c };
    best.score = Math.max((l.score as number) ?? 0, (c.score as number) ?? 0);
    best.levelsCompleted = Array.from(
      new Set([...((l.levelsCompleted as number[]) ?? []), ...((c.levelsCompleted as number[]) ?? [])]),
    ).sort((a, b) => a - b);
    nodes[key] = best;
  }
  merged.nodes = nodes;

  return { skillTree: merged, updatedAt: now() };
}

// ── Apply cloud data to localStorage ──────────────────────────

function applyProgressToLocal(data: ProgressData) {
  writeLS(KEYS.completed, data.completed);
  writeLS(KEYS.weak, data.weak);
  writeLS(KEYS.practiceMinutes, data.practiceMinutes);
  writeLS(KEYS.recentSessions, data.recentSessions);
}

function applyStreakToLocal(data: StreakCloudData) {
  writeLS(KEYS.streak, data.streak);
  writeLS(KEYS.lastPracticeDate, data.lastPracticeDate);
  writeLS(KEYS.streakV2, {
    currentStreak: data.currentStreak,
    longestStreak: data.longestStreak,
    lastActiveDate: data.lastActiveDate,
    activeDates: data.activeDates,
  });
}

function applyAchievementsToLocal(data: AchievementsData) {
  writeLS(KEYS.skillTree, data.skillTree);
}

// ── Public API ────────────────────────────────────────────────

export async function syncToCloud(userId: string): Promise<void> {
  if (!db) return;

  const localProgress = gatherProgressData();
  const localStreak = gatherStreakData();
  const localAchievements = gatherAchievementsData();

  // Read latest cloud snapshot first to avoid overwrite on multi-device sessions
  const docRef = doc(db, 'atar_user_progress', userId);
  const snapshot = await getDoc(docRef);
  const existing = snapshot.exists() ? snapshot.data() : null;

  const progress_data = existing
    ? mergeProgress(localProgress, existing.progress_data as ProgressData)
    : localProgress;
  const streak_data = existing
    ? mergeStreak(localStreak, existing.streak_data as StreakCloudData)
    : localStreak;
  const achievements_data = existing
    ? mergeAchievements(localAchievements, existing.achievements_data as AchievementsData)
    : localAchievements;

  await setDoc(docRef, {
    progress_data,
    streak_data,
    achievements_data,
    updated_at: now(),
  }, { merge: true });
}

export async function syncFromCloud(userId: string): Promise<void> {
  if (!db) return;

  const docRef = doc(db, 'atar_user_progress', userId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    // No cloud data yet — push local to cloud
    await syncToCloud(userId);
    return;
  }

  const data = snapshot.data();

  // Merge and apply
  const localProgress = gatherProgressData();
  const localStreak = gatherStreakData();
  const localAchievements = gatherAchievementsData();

  const mergedProgress = mergeProgress(localProgress, data.progress_data as ProgressData);
  const mergedStreak = mergeStreak(localStreak, data.streak_data as StreakCloudData);
  const mergedAchievements = mergeAchievements(localAchievements, data.achievements_data as AchievementsData);

  applyProgressToLocal(mergedProgress);
  applyStreakToLocal(mergedStreak);
  applyAchievementsToLocal(mergedAchievements);

  // Push merged data back to cloud
  await syncToCloud(userId);
}

// ── Debounced push ────────────────────────────────────────────

let lastPushTime = 0;
let pendingPush: ReturnType<typeof setTimeout> | null = null;

const DEBOUNCE_MS = 30_000; // 30 seconds

export function scheduleSyncToCloud(userId: string): void {
  const elapsed = Date.now() - lastPushTime;

  if (pendingPush) clearTimeout(pendingPush);

  if (elapsed >= DEBOUNCE_MS) {
    lastPushTime = Date.now();
    syncToCloud(userId).catch(console.error);
  } else {
    pendingPush = setTimeout(() => {
      lastPushTime = Date.now();
      pendingPush = null;
      syncToCloud(userId).catch(console.error);
    }, DEBOUNCE_MS - elapsed);
  }
}
