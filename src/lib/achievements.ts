/**
 * Achievement / badge system for ATAR Master.
 */

import { type UserProgress } from './progress';
import { type StreakData } from './streak';
import { ALL_NODES } from '../data/skillTreeData';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-blood',    icon: '🎯', title: 'First Blood',      description: 'Complete your first question' },
  { id: 'on-fire',        icon: '🔥', title: 'On Fire',          description: 'Answer 5 questions correctly in a row' },
  { id: 'bookworm',       icon: '📚', title: 'Bookworm',         description: 'Complete all 4 levels of any node' },
  { id: 'perfectionist',  icon: '🏆', title: 'Perfectionist',    description: 'Get a perfect score on any level' },
  { id: 'rising-star',    icon: '🌟', title: 'Rising Star',      description: 'Practice 10 different nodes' },
  { id: 'diamond-streak', icon: '💎', title: 'Diamond Streak',   description: 'Maintain a 30-day study streak' },
  { id: 'year-master',    icon: '🎓', title: 'Year Master',      description: 'Complete all nodes in a year level' },
  { id: 'speed-demon',    icon: '⚡', title: 'Speed Demon',      description: 'Answer a question correctly in under 10 seconds' },
  { id: 'big-brain',      icon: '🧠', title: 'Big Brain',        description: 'Complete a Level 5 question' },
  { id: 'half-way',       icon: '🏅', title: 'Half Way',         description: 'Complete 50% of all nodes' },
];

const STORAGE_KEY = 'atar_achievements';

export interface UnlockedAchievement {
  id: string;
  unlockedAt: string;
}

export function getUnlockedAchievements(): UnlockedAchievement[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

export function unlockAchievement(id: string): UnlockedAchievement | null {
  const unlocked = getUnlockedAchievements();
  if (unlocked.find(a => a.id === id)) return null;
  const entry: UnlockedAchievement = { id, unlockedAt: new Date().toISOString() };
  unlocked.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
  return entry;
}

export function isUnlocked(id: string): boolean {
  return getUnlockedAchievements().some(a => a.id === id);
}

export interface AchievementContext {
  progress: UserProgress;
  streak: StreakData;
  /** Number of consecutive correct answers in current session */
  sessionCorrectStreak?: number;
  /** Whether the player just got a perfect score on a level */
  perfectLevel?: boolean;
  /** Whether the player just answered in <10s */
  speedAnswer?: boolean;
  /** The level just completed */
  completedLevel?: number;
  /** Total nodes available */
  totalNodes?: number;
}

/**
 * Check all achievements and return newly unlocked ones.
 */
export function checkAchievements(ctx: AchievementContext): Achievement[] {
  const { progress, streak } = ctx;
  const newlyUnlocked: Achievement[] = [];

  const tryUnlock = (id: string) => {
    const entry = unlockAchievement(id);
    if (entry) {
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      if (ach) newlyUnlocked.push(ach);
    }
  };

  const nodes = progress.nodes;
  const nodeIds = Object.keys(nodes);
  const completedNodes = nodeIds.filter(
    id => nodes[id].status === 'completed' || nodes[id].status === 'mastered'
  );

  // First Blood: at least one question done (any node has progress)
  if (nodeIds.length > 0) {
    tryUnlock('first-blood');
  }

  // On Fire: 5 correct in a row
  if (ctx.sessionCorrectStreak && ctx.sessionCorrectStreak >= 5) {
    tryUnlock('on-fire');
  }

  // Bookworm: any node with all 4 levels completed
  for (const id of nodeIds) {
    const np = nodes[id];
    if (np.levelsCompleted && np.levelsCompleted.length >= 4) {
      tryUnlock('bookworm');
      break;
    }
  }

  // Perfectionist
  if (ctx.perfectLevel) {
    tryUnlock('perfectionist');
  }

  // Rising Star: 10 different nodes practiced
  if (nodeIds.length >= 10) {
    tryUnlock('rising-star');
  }

  // Diamond Streak: 30 day streak
  if (streak.currentStreak >= 30) {
    tryUnlock('diamond-streak');
  }

  // Speed Demon
  if (ctx.speedAnswer) {
    tryUnlock('speed-demon');
  }

  // Big Brain: completed a level 5 question
  if (ctx.completedLevel && ctx.completedLevel >= 5) {
    tryUnlock('big-brain');
  }

  // Half Way: 50% nodes completed
  const totalNodes = ctx.totalNodes || ALL_NODES.length;
  if (completedNodes.length >= totalNodes / 2) {
    tryUnlock('half-way');
  }

  return newlyUnlocked;
}
