/**
 * Unified VCE Mathematical Methods Skill Tree
 *
 * This is the single source of truth for the skill tree structure.
 * Each node represents a **question type category** (not a single question).
 * The `questionTypes` array maps to subTopic values in exam data.
 */

import { Topic, Subject, type SkillTreeData, type SkillTreeNode } from '../types';

// ── Tier 0: Prerequisites (Year 8–10 knowledge) ────────────────

const BASIC_ALGEBRA: SkillTreeNode = {
  id: 'basic-algebra',
  title: 'Basic Algebra',
  description: 'Manipulating expressions, solving linear equations, factoring, expanding brackets.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: [
    'Algebra',
    'Solving Equations',
    'Inequalities',
    'Linear Equations',
    'Linear Functions',
    'Proof',
  ],
};

const NUMBER_OPS: SkillTreeNode = {
  id: 'number-ops',
  title: 'Number Operations',
  description: 'Indices, surds, fractions, and basic arithmetic properties.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: [
    'Algorithms',
  ],
};

const BASIC_TRIG: SkillTreeNode = {
  id: 'basic-trig',
  title: 'Basic Trigonometry',
  description: 'Sin, cos, tan ratios. Unit circle basics. Radians and degrees.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: [
    'Trigonometry',
    'Trigonometric Identities',
  ],
};

const BASIC_PROB: SkillTreeNode = {
  id: 'basic-prob',
  title: 'Basic Probability',
  description: 'Sample spaces, tree diagrams, basic counting principles.',
  prerequisites: [],
  topic: Topic.PROBABILITY,
  difficulty: 1,
  tier: 0,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: [
    'Probability',
    'Probability Rules',
    'Combinatorics',
    'Complementary Events',
  ],
};

const GRAPHING_BASICS: SkillTreeNode = {
  id: 'graphing-basics',
  title: 'Graphing Basics',
  description: 'Plotting points, reading graphs, coordinate geometry fundamentals.',
  prerequisites: [],
  topic: Topic.FUNCTIONS,
  difficulty: 1,
  tier: 0,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Coordinate Geometry',
    'Perpendicular Lines',
    'Graphing',
    'Graph Sketching',
  ],
};

// ── Tier 1: VCE Methods Foundation ──────────────────────────────

const POLYNOMIAL_FN: SkillTreeNode = {
  id: 'polynomial-fn',
  title: 'Polynomial Functions',
  description: 'Quadratics, cubics, quartics. Factoring, roots, discriminant, remainder theorem.',
  prerequisites: ['basic-algebra'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: [
    'Polynomials',
    'Polynomial Equations',
    'Quadratics',
    'Cubic Equations',
    'Cubic Functions',
    'Cubic Polynomials',
    'Polynomial Graphs',
    'Polynomial Expansion',
    'Polynomial Approximation',
    'Remainder Theorem',
    'Discriminant',
    'Power Functions',
  ],
};

const EXPONENTIAL_FN: SkillTreeNode = {
  id: 'exponential-fn',
  title: 'Exponential Functions',
  description: 'Exponential growth/decay, index laws, solving exponential equations.',
  prerequisites: ['number-ops'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: [
    'Exponential Functions',
    'Exponentials',
    'Exponential Equations',
    'Exponential and Logarithmic Functions',
  ],
};

const LOGARITHMIC_FN: SkillTreeNode = {
  id: 'logarithmic-fn',
  title: 'Logarithmic Functions',
  description: 'Log laws, solving log equations, natural log, change of base.',
  prerequisites: ['number-ops'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: [
    'Logarithmic Functions',
    'Logarithms',
    'Logarithmic Equations',
    'Domain of Logarithmic Functions',
  ],
};

const CIRCULAR_FN: SkillTreeNode = {
  id: 'circular-fn',
  title: 'Circular Functions',
  description: 'Graphs of sin, cos, tan. Amplitude, period, phase shift. Solving trig equations.',
  prerequisites: ['basic-trig'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Circular Functions',
    'Trigonometric Equations',
    'Trig Functions',
    'Trig Asymptotes',
    'Periodic Functions',
    'Periodicity',
  ],
};

const TRANSFORMATIONS: SkillTreeNode = {
  id: 'transformations',
  title: 'Transformations',
  description: 'Translations, dilations, reflections of functions. Mapping rules.',
  prerequisites: ['graphing-basics'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: [
    'Transformations',
  ],
};

const DOMAIN_RANGE: SkillTreeNode = {
  id: 'domain-range',
  title: 'Domain & Range',
  description: 'Finding domain and range of functions. Interval notation. Implied domains.',
  prerequisites: ['graphing-basics'],
  topic: Topic.FUNCTIONS,
  difficulty: 2,
  tier: 1,
  position: { x: 5, y: 0 },
  questions: [],
  questionTypes: [
    'Domain and Range',
    'Domain',
    'Range',
    'Function Properties',
    'Function Evaluation',
    'Functions',
    'Functions and Relations',
    'Properties of Functions',
    'Piecewise Functions',
    'Rational Functions',
    'Graphing Rationals',
    'Rectangular Hyperbola',
    'Asymptotes',
    'Limiting Behaviour',
    'Intercepts',
    'Modelling',
    'Undefined Expressions',
  ],
};

// ── Tier 2: Intermediate ────────────────────────────────────────

const COMPOSITE_FN: SkillTreeNode = {
  id: 'composite-fn',
  title: 'Composite Functions',
  description: 'Function composition f(g(x)). Domain of composite functions.',
  prerequisites: ['polynomial-fn', 'domain-range'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 2,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: [
    'Composite Functions',
    'Domain of Composite Functions',
    'Composite Graphs',
    'Composite Inequalities',
    'Function Operations',
    'Function Addition',
    'Functional Equations',
  ],
};

const INVERSE_FN: SkillTreeNode = {
  id: 'inverse-fn',
  title: 'Inverse Functions',
  description: 'Finding inverses, restricting domain, graphing inverse functions.',
  prerequisites: ['domain-range'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 2,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: [
    'Inverse Functions',
  ],
};

const DERIVATIVES: SkillTreeNode = {
  id: 'derivatives',
  title: 'Derivatives & Gradients',
  description: 'First principles, basic differentiation rules, gradient at a point.',
  prerequisites: ['polynomial-fn', 'exponential-fn', 'logarithmic-fn', 'circular-fn'],
  topic: Topic.CALCULUS,
  difficulty: 3,
  tier: 2,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Derivatives',
    'Differentiation',
    'Gradient',
    'Derivatives of Hybrid Functions',
    'Exponential Derivatives',
    'Derivative Graphs',
    'Derivatives and Graphs',
    'Derivative and Graph',
    'Graph of Derivative',
    'Graphing Derivatives',
    'Second Derivative',
    'Differentiability',
    'Continuity and Differentiability',
    'Continuity',
    'Function Analysis',
    'Increasing Functions',
    'Increasing/Decreasing',
    'Odd Functions',
  ],
};

const DIFF_RULES: SkillTreeNode = {
  id: 'diff-rules',
  title: 'Chain / Product / Quotient',
  description: 'Chain rule, product rule, quotient rule for derivatives.',
  prerequisites: ['derivatives'],
  topic: Topic.CALCULUS,
  difficulty: 3,
  tier: 2,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: [
    'Chain Rule',
    'Product Rule',
    'Quotient Rule',
  ],
};

const SIMULT_EQ: SkillTreeNode = {
  id: 'simult-eq',
  title: 'Simultaneous Equations',
  description: 'Solving systems of linear/non-linear equations. Intersection of curves.',
  prerequisites: ['polynomial-fn'],
  topic: Topic.FUNCTIONS,
  difficulty: 3,
  tier: 2,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: [
    'Simultaneous Equations',
    'Intersection Analysis',
    'Intersections',
  ],
};

// ── Tier 3: Advanced ────────────────────────────────────────────

const TANGENT_LINES: SkillTreeNode = {
  id: 'tangent-lines',
  title: 'Tangent Lines',
  description: 'Finding equations of tangent and normal lines at a point on a curve.',
  prerequisites: ['diff-rules'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: [
    'Tangent Lines',
    'Tangents',
    'Tangent Properties',
  ],
};

const STATIONARY_PTS: SkillTreeNode = {
  id: 'stationary-pts',
  title: 'Stationary Points',
  description: 'Finding and classifying stationary points. First/second derivative test.',
  prerequisites: ['diff-rules'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: [
    'Stationary Points',
    'Nature of Stationary Points',
    'Turning Points',
    'Points of Inflection',
  ],
};

const OPTIMISATION: SkillTreeNode = {
  id: 'optimisation',
  title: 'Optimisation',
  description: 'Setting up and solving optimisation problems using derivatives.',
  prerequisites: ['stationary-pts'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: [
    'Optimisation',
    'Optimization',
    'Distance Optimisation',
    'Transformations and Optimisation',
    'Min Distance',
  ],
};

const ANTI_DIFF: SkillTreeNode = {
  id: 'anti-diff',
  title: 'Anti-differentiation',
  description: 'Finding antiderivatives. Integration by recognition.',
  prerequisites: ['derivatives'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Anti-differentiation',
    'Antidifferentiation',
    'Integration',
  ],
};

const DEFINITE_INT: SkillTreeNode = {
  id: 'definite-int',
  title: 'Definite Integrals',
  description: 'Evaluating definite integrals. Fundamental theorem of calculus.',
  prerequisites: ['anti-diff'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: [
    'Definite Integrals',
    'Definite Integral',
    'Fundamental Theorem of Calculus',
    'Integration Properties',
    'Integral Properties',
    'Trapezium Rule',
    'Riemann Sums',
    'Newton\'s Method',
    'Newton',
    'Partial Fractions',
    'Approximation',
  ],
};

const AREA_CURVES: SkillTreeNode = {
  id: 'area-curves',
  title: 'Area Between Curves',
  description: 'Finding areas enclosed by curves using integration.',
  prerequisites: ['definite-int'],
  topic: Topic.CALCULUS,
  difficulty: 5,
  tier: 3,
  position: { x: 5, y: 0 },
  questions: [],
  questionTypes: [
    'Area Between Curves',
    'Areas Under Curves',
    'Area Under Curve',
    'Area under Curve',
    'Area under curve',
    'Area',
    'Transformations and Integrals',
  ],
};

const AVG_RATE: SkillTreeNode = {
  id: 'avg-rate',
  title: 'Average Rate / Value',
  description: 'Average rate of change over an interval. Average value of a function.',
  prerequisites: ['definite-int'],
  topic: Topic.CALCULUS,
  difficulty: 4,
  tier: 3,
  position: { x: 6, y: 0 },
  questions: [],
  questionTypes: [
    'Average Rate of Change',
    'Average Value',
    'Rates of Change',
    'Applications',
  ],
};

// ── Tier 4: Probability & Statistics ────────────────────────────

const COND_PROB: SkillTreeNode = {
  id: 'cond-prob',
  title: 'Conditional Probability',
  description: 'Conditional probability, independence, Bayes\' theorem.',
  prerequisites: ['basic-prob'],
  topic: Topic.PROBABILITY,
  difficulty: 3,
  tier: 4,
  position: { x: 0, y: 0 },
  questions: [],
  questionTypes: [
    'Conditional Probability',
    'Independent Events',
    'Bayes\' Theorem',
    'Bayes Theorem',
    'Bayes',
  ],
};

const BINOMIAL_DIST: SkillTreeNode = {
  id: 'binomial-dist',
  title: 'Binomial Distribution',
  description: 'Binomial random variables, probability calculations, expected value and variance.',
  prerequisites: ['basic-prob'],
  topic: Topic.PROBABILITY,
  difficulty: 3,
  tier: 4,
  position: { x: 1, y: 0 },
  questions: [],
  questionTypes: [
    'Binomial Distribution',
    'Binomial Probability',
    'Binomial Parameters',
    'Discrete Distributions',
    'Discrete Random Variables',
    'Expected Value',
    'Probability Distributions',
    'Geometric Distribution',
    'Transformations of Random Variables',
  ],
};

const NORMAL_DIST: SkillTreeNode = {
  id: 'normal-dist',
  title: 'Normal Distribution',
  description: 'Normal distribution properties, standardising, inverse normal calculations.',
  prerequisites: ['binomial-dist'],
  topic: Topic.PROBABILITY,
  difficulty: 4,
  tier: 4,
  position: { x: 2, y: 0 },
  questions: [],
  questionTypes: [
    'Normal Distribution',
  ],
};

const CONTINUOUS_PDF: SkillTreeNode = {
  id: 'continuous-pdf',
  title: 'Continuous PDF',
  description: 'Continuous probability density functions, CDF, expected value, variance.',
  prerequisites: ['anti-diff', 'cond-prob'],
  topic: Topic.PROBABILITY,
  difficulty: 4,
  tier: 4,
  position: { x: 3, y: 0 },
  questions: [],
  questionTypes: [
    'Continuous PDF',
    'Continuous Distributions',
    'Continuous Random Variables',
    'Continuous Distribution',
    'Transformations of PDF',
    'Median',
    'Mean Calculation',
    'Variance',
  ],
};

const CONFIDENCE_INT: SkillTreeNode = {
  id: 'confidence-int',
  title: 'Confidence Intervals',
  description: 'Constructing and interpreting confidence intervals for proportions.',
  prerequisites: ['normal-dist'],
  topic: Topic.PROBABILITY,
  difficulty: 4,
  tier: 4,
  position: { x: 4, y: 0 },
  questions: [],
  questionTypes: [
    'Confidence Intervals',
  ],
};

const SAMPLE_PROP: SkillTreeNode = {
  id: 'sample-prop',
  title: 'Sample Proportions',
  description: 'Sampling distributions, margin of error, sample size calculations.',
  prerequisites: ['confidence-int'],
  topic: Topic.PROBABILITY,
  difficulty: 5,
  tier: 4,
  position: { x: 5, y: 0 },
  questions: [],
  questionTypes: [
    'Sample Proportions',
    'Sampling Distribution',
  ],
};

// ── Assemble the unified tree ────────────────────────────────────

const ALL_NODES: SkillTreeNode[] = [
  // Tier 0
  BASIC_ALGEBRA,
  NUMBER_OPS,
  BASIC_TRIG,
  GRAPHING_BASICS,
  BASIC_PROB,
  // Tier 1
  POLYNOMIAL_FN,
  EXPONENTIAL_FN,
  LOGARITHMIC_FN,
  CIRCULAR_FN,
  TRANSFORMATIONS,
  DOMAIN_RANGE,
  // Tier 2
  COMPOSITE_FN,
  INVERSE_FN,
  SIMULT_EQ,
  DERIVATIVES,
  DIFF_RULES,
  // Tier 3
  TANGENT_LINES,
  STATIONARY_PTS,
  OPTIMISATION,
  ANTI_DIFF,
  DEFINITE_INT,
  AREA_CURVES,
  AVG_RATE,
  // Tier 4
  COND_PROB,
  BINOMIAL_DIST,
  NORMAL_DIST,
  CONTINUOUS_PDF,
  CONFIDENCE_INT,
  SAMPLE_PROP,
];

export const UNIFIED_SKILL_TREE: SkillTreeData = {
  id: 'vce-methods-unified',
  title: 'VCE Methods Skill Tree',
  description: 'Complete VCE Mathematical Methods skill tree covering all topics from the VCAA study design.',
  subject: Subject.METHODS,
  year: 2024,
  nodes: ALL_NODES,
  totalMarks: 0, // calculated dynamically from matched questions
};

export { ALL_NODES };
