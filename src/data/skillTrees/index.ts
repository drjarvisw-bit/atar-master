import type { SkillTreeData } from '../../types';
import { MM_2025_EXAM1_TREE } from './mm_2025_exam1';
import { MM_2025_EXAM2_TREE } from './mm_2025_exam2';
import { MM_2024_EXAM1_TREE } from './mm_2024_exam1';
import { MM_2021_EXAM1_TREE } from './mm_2021_exam1';

export const SKILL_TREES: Record<string, SkillTreeData> = {
  [MM_2025_EXAM1_TREE.id]: MM_2025_EXAM1_TREE,
  [MM_2025_EXAM2_TREE.id]: MM_2025_EXAM2_TREE,
  [MM_2024_EXAM1_TREE.id]: MM_2024_EXAM1_TREE,
  [MM_2021_EXAM1_TREE.id]: MM_2021_EXAM1_TREE,
};

export const SKILL_TREE_LIST = Object.values(SKILL_TREES);
