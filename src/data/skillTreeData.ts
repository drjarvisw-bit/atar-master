/**
 * VCE Mathematical Methods Skill Tree — Year Level Structure
 *
 * Columns represent Year Levels (Year 8 → VCE Exam).
 * Each node is a topic taught at that year level per VCAA curriculum.
 */

import { Topic, Subject, type SkillTreeData, type SkillTreeNode } from '../types';

export const TIER_LABELS = ['Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'VCE Exam'];

// ── Year 8 (tier: 0) ────────────────────────────────────────────

const Y8_ALGEBRA: SkillTreeNode = {
  id: 'y8-algebra',
  title: 'Basic Algebra',
  description: 'Simplifying, expanding, factoring linear expressions.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: ['Algebra', 'Solving Equations', 'Linear Equations', 'Linear Functions'],
};

const Y8_LINEAR_EQ: SkillTreeNode = {
  id: 'y8-linear-eq',
  title: 'Linear Equations',
  description: 'Solving linear equations and inequalities.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 1 },
  questions: [],
  questionTypes: ['Inequalities', 'Simultaneous Equations'],
};

const Y8_NUMBER_OPS: SkillTreeNode = {
  id: 'y8-number-ops',
  title: 'Number Operations',
  description: 'Indices, rationals, irrationals, basic arithmetic properties.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 2 },
  questions: [],
  questionTypes: ['Algorithms'],
};

const Y8_PROBABILITY: SkillTreeNode = {
  id: 'y8-probability',
  title: 'Basic Probability',
  description: 'Experiments, relative frequency, sample spaces.',
  prerequisites: [],
  topic: Topic.PROBABILITY,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 3 },
  questions: [],
  questionTypes: ['Probability', 'Complementary Events'],
};

const Y8_GRAPHING: SkillTreeNode = {
  id: 'y8-graphing',
  title: 'Graphing',
  description: 'Cartesian plane, plotting linear relations.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 4 },
  questions: [],
  questionTypes: ['Coordinate Geometry', 'Graphing', 'Graph Sketching'],
};

// ── Year 9 (tier: 1) ────────────────────────────────────────────

const Y9_NON_LINEAR: SkillTreeNode = {
  id: 'y9-non-linear',
  title: 'Non-linear Relations',
  description: 'Quadratics intro, simple curves, parabolas.',
  prerequisites: ['y8-algebra', 'y8-graphing'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: ['Quadratics', 'Power Functions'],
};

const Y9_INDEX_LAWS: SkillTreeNode = {
  id: 'y9-index-laws',
  title: 'Index Laws',
  description: 'Negative & fractional exponents, surds.',
  prerequisites: ['y8-number-ops'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 1 },
  questions: [],
  questionTypes: [],
};

const Y9_TRIGONOMETRY: SkillTreeNode = {
  id: 'y9-trigonometry',
  title: 'Trigonometry',
  description: 'Pythagoras, sin/cos/tan ratios.',
  prerequisites: ['y8-algebra', 'y8-graphing'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 2 },
  questions: [],
  questionTypes: ['Trigonometry', 'Trigonometric Identities'],
};

const Y9_PROBABILITY: SkillTreeNode = {
  id: 'y9-probability',
  title: 'Probability',
  description: 'Two-step experiments, Venn diagrams, tree diagrams.',
  prerequisites: ['y8-probability'],
  topic: Topic.PROBABILITY,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 3 },
  questions: [],
  questionTypes: ['Probability Rules', 'Combinatorics'],
};

const Y9_STATISTICS: SkillTreeNode = {
  id: 'y9-statistics',
  title: 'Statistics',
  description: 'Mean, median, mode, data displays.',
  prerequisites: ['y8-probability'],
  topic: Topic.PROBABILITY,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 4 },
  questions: [],
  questionTypes: ['Median', 'Mean Calculation', 'Variance'],
};

// ── Year 10 (tier: 2) ───────────────────────────────────────────

const Y10_QUADRATICS: SkillTreeNode = {
  id: 'y10-quadratics',
  title: 'Quadratic Functions',
  description: 'Factoring, quadratic formula, parabolas, discriminant.',
  prerequisites: ['y9-non-linear'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 2,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: ['Polynomials', 'Polynomial Equations', 'Discriminant', 'Polynomial Graphs'],
};

const Y10_POLYNOMIALS: SkillTreeNode = {
  id: 'y10-polynomials',
  title: 'Polynomial Functions',
  description: 'Zeros, factor theorem, remainder theorem.',
  prerequisites: ['y9-non-linear'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 2,
  position: { x: 2, y: 1 },
  questions: [],
  questionTypes: ['Cubic Equations', 'Cubic Functions', 'Cubic Polynomials', 'Polynomial Expansion', 'Polynomial Approximation', 'Remainder Theorem'],
};

const Y10_EXPONENTIAL: SkillTreeNode = {
  id: 'y10-exponential',
  title: 'Exponential Functions',
  description: 'Growth/decay, transformations of exponentials.',
  prerequisites: ['y9-index-laws'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 2,
  position: { x: 2, y: 2 },
  questions: [],
  questionTypes: ['Exponential Functions', 'Exponentials', 'Exponential Equations', 'Exponential and Logarithmic Functions'],
};

const Y10_TRIG_UNIT_CIRCLE: SkillTreeNode = {
  id: 'y10-trig-unit-circle',
  title: 'Trig & Unit Circle',
  description: 'Radians, exact values, unit circle.',
  prerequisites: ['y9-trigonometry'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 2,
  position: { x: 2, y: 3 },
  questions: [],
  questionTypes: ['Trigonometric Equations', 'Periodicity'],
};

const Y10_RATES_CHANGE: SkillTreeNode = {
  id: 'y10-rates-change',
  title: 'Rates of Change',
  description: 'Average rate of change, secant lines (pre-calculus).',
  prerequisites: ['y9-non-linear'],
  topic: Topic.CALCULUS,
  difficulty: 3,
  tier: 2,
  position: { x: 2, y: 4 },
  questions: [],
  questionTypes: ['Average Rate of Change', 'Rates of Change'],
};

const Y10_COND_PROBABILITY: SkillTreeNode = {
  id: 'y10-cond-probability',
  title: 'Conditional Probability',
  description: 'Conditional probability and independence.',
  prerequisites: ['y9-probability'],
  topic: Topic.PROBABILITY,
  difficulty: 3,
  tier: 2,
  position: { x: 2, y: 5 },
  questions: [],
  questionTypes: ['Conditional Probability', 'Independent Events', 'Bayes\' Theorem', 'Bayes Theorem', 'Bayes'],
};

// ── Year 11 — Methods Units 1&2 (tier: 3) ──────────────────────

const Y11_FUNCTIONS: SkillTreeNode = {
  id: 'y11-functions',
  title: 'Functions & Relations',
  description: 'Domain, range, inverse, composite functions.',
  prerequisites: ['y10-quadratics', 'y10-polynomials'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Domain and Range', 'Domain', 'Range', 'Function Properties', 'Function Evaluation',
    'Functions', 'Functions and Relations', 'Properties of Functions', 'Piecewise Functions',
    'Rational Functions', 'Graphing Rationals', 'Rectangular Hyperbola', 'Asymptotes',
    'Limiting Behaviour', 'Intercepts', 'Modelling', 'Undefined Expressions',
    'Composite Functions', 'Domain of Composite Functions', 'Composite Graphs',
    'Composite Inequalities', 'Function Operations', 'Function Addition', 'Functional Equations',
    'Inverse Functions',
  ],
};

const Y11_TRANSFORMATIONS: SkillTreeNode = {
  id: 'y11-transformations',
  title: 'Transformations',
  description: 'Dilations, reflections, translations of functions.',
  prerequisites: ['y10-quadratics'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 1 },
  questions: [],
  questionTypes: ['Transformations', 'Perpendicular Lines'],
};

const Y11_LOG_FUNCTIONS: SkillTreeNode = {
  id: 'y11-log-functions',
  title: 'Logarithmic Functions',
  description: 'Log laws, log equations, natural log, change of base.',
  prerequisites: ['y10-exponential'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 2 },
  questions: [],
  questionTypes: ['Logarithmic Functions', 'Logarithms', 'Logarithmic Equations', 'Domain of Logarithmic Functions'],
};

const Y11_CIRCULAR_FN: SkillTreeNode = {
  id: 'y11-circular-fn',
  title: 'Circular Functions',
  description: 'Sin/cos/tan graphs, amplitude, period, phase shift.',
  prerequisites: ['y10-trig-unit-circle'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 3 },
  questions: [],
  questionTypes: ['Circular Functions', 'Trig Functions', 'Trig Asymptotes', 'Periodic Functions'],
};

const Y11_INTRO_CALCULUS: SkillTreeNode = {
  id: 'y11-intro-calculus',
  title: 'Intro to Calculus',
  description: 'Limits, first principles, basic derivatives.',
  prerequisites: ['y10-rates-change', 'y10-polynomials'],
  topic: Topic.CALCULUS,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 4 },
  questions: [],
  questionTypes: [
    'Derivatives', 'Differentiation', 'Gradient',
    'Derivatives of Hybrid Functions', 'Exponential Derivatives',
    'Derivative Graphs', 'Derivatives and Graphs', 'Derivative and Graph',
    'Graph of Derivative', 'Graphing Derivatives', 'Second Derivative',
    'Differentiability', 'Continuity and Differentiability', 'Continuity',
    'Function Analysis', 'Increasing Functions', 'Increasing/Decreasing', 'Odd Functions',
  ],
};

const Y11_COUNTING: SkillTreeNode = {
  id: 'y11-counting',
  title: 'Counting Principles',
  description: 'Counting principles and combinatorics.',
  prerequisites: ['y10-cond-probability'],
  topic: Topic.PROBABILITY,
  difficulty: 3,
  tier: 3,
  position: { x: 3, y: 5 },
  questions: [],
  questionTypes: ['Probability Distributions', 'Discrete Distributions', 'Discrete Random Variables', 'Expected Value'],
};

// ── Year 12 — Methods Units 3&4 (tier: 4) ──────────────────────

const Y12_DIFF_RULES: SkillTreeNode = {
  id: 'y12-diff-rules',
  title: 'Differentiation Rules',
  description: 'Chain rule, product rule, quotient rule.',
  prerequisites: ['y11-intro-calculus'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: ['Chain Rule', 'Product Rule', 'Quotient Rule'],
};

const Y12_APPLICATIONS_DIFF: SkillTreeNode = {
  id: 'y12-applications-diff',
  title: 'Applications of Diff.',
  description: 'Tangent lines, stationary points, optimization.',
  prerequisites: ['y12-diff-rules'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 1 },
  questions: [],
  questionTypes: [
    'Tangent Lines', 'Tangents', 'Tangent Properties',
    'Stationary Points', 'Nature of Stationary Points', 'Turning Points', 'Points of Inflection',
    'Optimisation', 'Optimization', 'Distance Optimisation', 'Transformations and Optimisation', 'Min Distance',
    'Intersection Analysis', 'Intersections', 'Proof',
  ],
};

const Y12_ANTIDIFF: SkillTreeNode = {
  id: 'y12-antidiff',
  title: 'Anti-differentiation',
  description: 'Indefinite integrals, basic anti-differentiation rules.',
  prerequisites: ['y11-intro-calculus'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 2 },
  questions: [],
  questionTypes: ['Anti-differentiation', 'Antidifferentiation', 'Integration'],
};

const Y12_DEFINITE_INT: SkillTreeNode = {
  id: 'y12-definite-int',
  title: 'Definite Integrals',
  description: 'Area under curves, area between curves, FTC.',
  prerequisites: ['y12-antidiff'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 3 },
  questions: [],
  questionTypes: [
    'Definite Integrals', 'Definite Integral', 'Fundamental Theorem of Calculus',
    'Integration Properties', 'Integral Properties', 'Trapezium Rule', 'Riemann Sums',
    'Newton\'s Method', 'Newton', 'Partial Fractions', 'Approximation',
    'Area Between Curves', 'Areas Under Curves', 'Area Under Curve', 'Area under Curve',
    'Area under curve', 'Area', 'Transformations and Integrals',
    'Average Value', 'Applications',
  ],
};

const Y12_CONTINUOUS_PDF: SkillTreeNode = {
  id: 'y12-continuous-pdf',
  title: 'Continuous PDFs',
  description: 'PDF, CDF, expected value of continuous distributions.',
  prerequisites: ['y12-antidiff', 'y11-counting'],
  topic: Topic.PROBABILITY,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 4 },
  questions: [],
  questionTypes: [
    'Continuous PDF', 'Continuous Distributions', 'Continuous Random Variables',
    'Continuous Distribution', 'Transformations of PDF',
    'Transformations of Random Variables',
  ],
};

const Y12_NORMAL_DIST: SkillTreeNode = {
  id: 'y12-normal-dist',
  title: 'Normal Distribution',
  description: 'Z-scores, standard normal, inverse normal.',
  prerequisites: ['y12-continuous-pdf'],
  topic: Topic.PROBABILITY,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 5 },
  questions: [],
  questionTypes: [
    'Normal Distribution',
    'Binomial Distribution', 'Binomial Probability', 'Binomial Parameters',
    'Geometric Distribution',
  ],
};

const Y12_CONFIDENCE: SkillTreeNode = {
  id: 'y12-confidence',
  title: 'Confidence Intervals',
  description: 'Confidence intervals, sample proportions, margin of error.',
  prerequisites: ['y12-normal-dist'],
  topic: Topic.PROBABILITY,
  difficulty: 5,
  tier: 4,
  position: { x: 4, y: 6 },
  questions: [],
  questionTypes: ['Confidence Intervals', 'Sample Proportions', 'Sampling Distribution'],
};

// ── VCE Exam (tier: 5) ─────────────────────────────────────────

const VCE_EXAM1: SkillTreeNode = {
  id: 'vce-exam1',
  title: 'Exam 1 (Tech-Free)',
  description: 'All topics, no calculator allowed.',
  prerequisites: ['y12-diff-rules', 'y12-applications-diff', 'y12-antidiff', 'y12-definite-int', 'y12-continuous-pdf', 'y12-normal-dist', 'y12-confidence'],
  topic: Topic.CALCULUS,
  difficulty: 5,
  tier: 5,
  position: { x: 5, y: 0 },
  questions: [],
  questionTypes: [],
};

const VCE_EXAM2: SkillTreeNode = {
  id: 'vce-exam2',
  title: 'Exam 2 (Tech-Active)',
  description: 'All topics, CAS calculator allowed.',
  prerequisites: ['y12-diff-rules', 'y12-applications-diff', 'y12-antidiff', 'y12-definite-int', 'y12-continuous-pdf', 'y12-normal-dist', 'y12-confidence'],
  topic: Topic.CALCULUS,
  difficulty: 5,
  tier: 5,
  position: { x: 5, y: 1 },
  questions: [],
  questionTypes: [],
};

// ── Assemble ────────────────────────────────────────────────────

const ALL_NODES: SkillTreeNode[] = [
  // Year 8
  Y8_ALGEBRA, Y8_LINEAR_EQ, Y8_NUMBER_OPS, Y8_PROBABILITY, Y8_GRAPHING,
  // Year 9
  Y9_NON_LINEAR, Y9_INDEX_LAWS, Y9_TRIGONOMETRY, Y9_PROBABILITY, Y9_STATISTICS,
  // Year 10
  Y10_QUADRATICS, Y10_POLYNOMIALS, Y10_EXPONENTIAL, Y10_TRIG_UNIT_CIRCLE, Y10_RATES_CHANGE, Y10_COND_PROBABILITY,
  // Year 11
  Y11_FUNCTIONS, Y11_TRANSFORMATIONS, Y11_LOG_FUNCTIONS, Y11_CIRCULAR_FN, Y11_INTRO_CALCULUS, Y11_COUNTING,
  // Year 12
  Y12_DIFF_RULES, Y12_APPLICATIONS_DIFF, Y12_ANTIDIFF, Y12_DEFINITE_INT, Y12_CONTINUOUS_PDF, Y12_NORMAL_DIST, Y12_CONFIDENCE,
  // VCE Exam
  VCE_EXAM1, VCE_EXAM2,
];

export const UNIFIED_SKILL_TREE: SkillTreeData = {
  id: 'vce-methods-unified',
  title: 'VCE Methods Skill Tree',
  description: 'Complete VCE Mathematical Methods skill tree — Year 8 through VCE Exam.',
  subject: Subject.METHODS,
  year: 2024,
  nodes: ALL_NODES,
  totalMarks: 0,
};

export { ALL_NODES };
