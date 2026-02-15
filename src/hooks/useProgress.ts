import { useCallback, useSyncExternalStore } from 'react';
import { Topic, type ExamQuestion } from '../types';
import { getAllExams } from '../data/exams';

// ── Storage keys ──────────────────────────────────────────────
const KEYS = {
  completed: 'atar-completed',
  weak: 'atar-weak',
  streak: 'atar-streak',
  lastPracticeDate: 'atar-last-practice-date',
  practiceMinutes: 'atar-practice-minutes',
  timerStart: 'atar-timer-start',
  recentSessions: 'atar-recent-sessions',
} as const;

// ── Helpers ───────────────────────────────────────────────────
function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Failed to read from localStorage key "${key}":`, error);
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event('progress-change'));
}

// External-store plumbing so React re-renders on changes
let revision = 0;
const subscribe = (cb: () => void) => {
  const handler = () => { revision++; cb(); };
  window.addEventListener('progress-change', handler);
  return () => window.removeEventListener('progress-change', handler);
};
const getSnapshot = () => revision;

// ── All questions helper ──────────────────────────────────────
function allQuestions(): ExamQuestion[] {
  return getAllExams().flatMap((e) => e.questions);
}

// ── Public session type ───────────────────────────────────────
export interface PracticeSession {
  date: string; // ISO
  mode: string;
  correct: number;
  total: number;
}

// ── Hook ──────────────────────────────────────────────────────
export function useProgress() {
  // trigger re-render when localStorage changes
  useSyncExternalStore(subscribe, getSnapshot);

  const getCompletedQuestions = useCallback((): string[] => {
    return read<string[]>(KEYS.completed, []);
  }, []);

  const getWeakQuestions = useCallback((): string[] => {
    return read<string[]>(KEYS.weak, []);
  }, []);

  const markQuestionComplete = useCallback((questionId: string) => {
    const list = read<string[]>(KEYS.completed, []);
    if (!list.includes(questionId)) {
      list.push(questionId);
      write(KEYS.completed, list);
    }
    // remove from weak if present
    const weak = read<string[]>(KEYS.weak, []);
    const idx = weak.indexOf(questionId);
    if (idx >= 0) { weak.splice(idx, 1); write(KEYS.weak, weak); }
    updateStreak();
  }, []);

  const markQuestionWeak = useCallback((questionId: string) => {
    const weak = read<string[]>(KEYS.weak, []);
    if (!weak.includes(questionId)) {
      weak.push(questionId);
      write(KEYS.weak, weak);
    }
    updateStreak();
  }, []);

  const getTopicProgress = useCallback((topic: Topic) => {
    const qs = allQuestions().filter((q) => q.topic === topic);
    const completed = read<string[]>(KEYS.completed, []);
    return {
      completed: qs.filter((q) => completed.includes(q.id)).length,
      total: qs.length,
    };
  }, []);

  const getExamProgress = useCallback((examId: string) => {
    const exam = getAllExams().find((e) => e.id === examId);
    if (!exam) return { completed: 0, total: 0, percentage: 0 };
    const completed = read<string[]>(KEYS.completed, []);
    const done = exam.questions.filter((q) => completed.includes(q.id)).length;
    return {
      completed: done,
      total: exam.questions.length,
      percentage: exam.questions.length ? Math.round((done / exam.questions.length) * 100) : 0,
    };
  }, []);

  const resetProgress = useCallback(() => {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
    window.dispatchEvent(new Event('progress-change'));
  }, []);

  const getStreak = useCallback((): number => {
    return read<number>(KEYS.streak, 0);
  }, []);

  const getTotalPracticeTime = useCallback((): number => {
    return read<number>(KEYS.practiceMinutes, 0);
  }, []);

  const startTimer = useCallback(() => {
    write(KEYS.timerStart, Date.now());
  }, []);

  const stopTimer = useCallback(() => {
    const start = read<number | null>(KEYS.timerStart, null);
    if (start) {
      const mins = (Date.now() - start) / 60000;
      const total = read<number>(KEYS.practiceMinutes, 0);
      write(KEYS.practiceMinutes, Math.round((total + mins) * 10) / 10);
      localStorage.removeItem(KEYS.timerStart);
    }
  }, []);

  const addSession = useCallback((session: PracticeSession) => {
    const sessions = read<PracticeSession[]>(KEYS.recentSessions, []);
    sessions.unshift(session);
    write(KEYS.recentSessions, sessions.slice(0, 20));
  }, []);

  const getRecentSessions = useCallback((): PracticeSession[] => {
    return read<PracticeSession[]>(KEYS.recentSessions, []);
  }, []);

  const getOverallProgress = useCallback(() => {
    const total = allQuestions().length;
    const completed = read<string[]>(KEYS.completed, []).length;
    return { completed, total };
  }, []);

  return {
    getCompletedQuestions,
    getWeakQuestions,
    markQuestionComplete,
    markQuestionWeak,
    getTopicProgress,
    getExamProgress,
    resetProgress,
    getStreak,
    getTotalPracticeTime,
    startTimer,
    stopTimer,
    addSession,
    getRecentSessions,
    getOverallProgress,
  };
}

// ── Internal streak logic ─────────────────────────────────────
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = read<string | null>(KEYS.lastPracticeDate, null);

  if (last === today) return; // already counted today

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const streak = read<number>(KEYS.streak, 0);

  if (last === yesterday) {
    write(KEYS.streak, streak + 1);
  } else {
    write(KEYS.streak, 1);
  }
  write(KEYS.lastPracticeDate, today);
}
