// Shared types - synced from VCE Master question bank format

export enum Subject {
  METHODS = 'Mathematical Methods',
  SPECIALIST = 'Specialist Mathematics',
}

export enum Topic {
  CALCULUS = 'Calculus',
  FUNCTIONS = 'Functions & Graphs',
  PROBABILITY = 'Probability & Statistics',
  VECTORS = 'Vectors',
  COMPLEX_NUMBERS = 'Complex Numbers',
  MECHANICS = 'Mechanics',
  PROOF = 'Proof & Logic',
  SEQUENCES = 'Sequences & Series',
}

export enum Difficulty {
  STAR_1 = 1,
  STAR_2 = 2,
  STAR_3 = 3,
  STAR_4 = 4,
  STAR_5 = 5,
}

export enum SkillNodeStatus {
  LOCKED = 'locked',
  UNLOCKED = 'unlocked',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  MASTERED = 'mastered',
}

export interface SkillPracticeQuestion {
  id: string;
  text: string;
  hints: string[];
  answer: string;
  markingGuide: string[];
  marks: number;
}

export interface SkillTreeNode {
  id: string;
  title: string;
  description: string;
  prerequisites: string[];
  topic: Topic;
  difficulty: Difficulty;
  tier: number;
  position: { x: number; y: number };
  questions: SkillPracticeQuestion[];
  isExamQuestion?: boolean;
  examRef?: {
    examId: string;
    year: number;
    subject: Subject;
    questionNumber: string;
    marks: number;
  };
}

export interface SkillTreeData {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  year: number;
  nodes: SkillTreeNode[];
  totalMarks: number;
}

export interface ExamQuestion {
  id: string;
  number: string;
  text: string;
  marks: number;
  topic: Topic;
  subTopic?: string;
  answer: string;
  markingGuide: string[];
  options?: { label: string; text: string }[];
  imageUrl?: string;
  solutionImageUrl?: string;
}

export interface ExamPaper {
  id: string;
  year: number;
  subject: Subject;
  title: string;
  questions: ExamQuestion[];
}

// Topic colors for skill tree visualization
export const SKILL_TOPIC_COLORS: Record<string, { primary: string; glow: string; bg: string }> = {
  [Topic.CALCULUS]: { primary: '#f85149', glow: '#ff7b72', bg: 'rgba(248,81,73,0.15)' },
  [Topic.FUNCTIONS]: { primary: '#58a6ff', glow: '#79c0ff', bg: 'rgba(88,166,255,0.15)' },
  [Topic.PROBABILITY]: { primary: '#3fb950', glow: '#56d364', bg: 'rgba(63,185,80,0.15)' },
  [Topic.VECTORS]: { primary: '#d29922', glow: '#e3b341', bg: 'rgba(210,153,34,0.15)' },
  [Topic.COMPLEX_NUMBERS]: { primary: '#bc8cff', glow: '#d2a8ff', bg: 'rgba(188,140,255,0.15)' },
  [Topic.MECHANICS]: { primary: '#f778ba', glow: '#ff9bce', bg: 'rgba(247,120,186,0.15)' },
  [Topic.PROOF]: { primary: '#79c0ff', glow: '#a5d6ff', bg: 'rgba(121,192,255,0.15)' },
  [Topic.SEQUENCES]: { primary: '#ffa657', glow: '#ffc680', bg: 'rgba(255,166,87,0.15)' },
};
