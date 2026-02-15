import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2021_EXAM2: ExamPaper = {
    id: 'mm-2021-exam2',
    year: 2021,
    subject: Subject.METHODS,
    title: "Exam 2 (Tech-Active)",
    questions: [
        // =====================================================================
        // SECTION A: Multiple Choice (20 Questions, 1 mark each)
        // =====================================================================
        {
            id: 'mm-21-2-mc1',
            number: 'Question 1',
            text: "The period of the function with rule $y = \\tan\\left(\\frac{\\pi x}{2}\\right)$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "B",
            markingGuide: ["Period $= \\frac{\\pi}{\\pi/2} = 2$."],
            options: [
                { label: "A", text: "$1$" },
                { label: "B", text: "$2$" },
                { label: "C", text: "$4$" },
                { label: "D", text: "$2\\pi$" },
                { label: "E", text: "$4\\pi$" }
            ]
        },
        {
            id: 'mm-21-2-mc2',
            number: 'Question 2',
            text: "The graph of $y = \\log_e(x) + \\log_e(2x)$, where $x > 0$, is identical, over the same domain, to the graph of",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Functions",
            answer: "C",
            markingGuide: ["$\\log_e(x) + \\log_e(2x) = \\log_e(2x^2)$."],
            options: [
                { label: "A", text: "$y = 2\\log_e\\left(\\frac{1}{2}x\\right)$" },
                { label: "B", text: "$y = 2\\log_e(2x)$" },
                { label: "C", text: "$y = \\log_e(2x^2)$" },
                { label: "D", text: "$y = \\log_e(3x)$" },
                { label: "E", text: "$y = \\log_e(4x)$" }
            ]
        },
        {
            id: 'mm-21-2-mc3',
            number: 'Question 3',
            text: "A box contains many coloured glass beads.\n\nA random sample of 48 beads is selected and it is found that the proportion of blue-coloured beads in this sample is 0.125.\n\nBased on this sample, a 95% confidence interval for the proportion of blue-coloured glass beads is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "E",
            markingGuide: ["$\\hat{p} = 0.125$, $n = 48$. CI $= 0.125 \\pm 1.96\\sqrt{\\frac{0.125 \\times 0.875}{48}}$."],
            options: [
                { label: "A", text: "$(0.0314, 0.2186)$" },
                { label: "B", text: "$(0.0465, 0.2035)$" },
                { label: "C", text: "$(0.0018, 0.2482)$" },
                { label: "D", text: "$(0.0896, 0.1604)$" },
                { label: "E", text: "$(0.0264, 0.2136)$" }
            ]
        },
        {
            id: 'mm-21-2-mc4',
            number: 'Question 4',
            text: "The maximum value of the function $h : [0, 2] \\to R$, $h(x) = (x - 2)e^x$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "B",
            markingGuide: ["Check endpoints and stationary points of $h(x) = (x-2)e^x$ on $[0,2]$."],
            options: [
                { label: "A", text: "$-e$" },
                { label: "B", text: "$0$" },
                { label: "C", text: "$1$" },
                { label: "D", text: "$2$" },
                { label: "E", text: "$e$" }
            ]
        },
        {
            id: 'mm-21-2-mc5',
            number: 'Question 5',
            text: "Consider the following four functional relations.\n\n$f(x) = f(-x)$ $\\qquad$ $-f(x) = f(-x)$ $\\qquad$ $f(x) = -f(x)$ $\\qquad$ $(f(x))^2 = f(x^2)$\n\nThe number of these functional relations that are satisfied by the function $f : R \\to R$, $f(x) = x$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Function Properties",
            answer: "B",
            markingGuide: ["Only $-f(x) = f(-x)$ is satisfied (odd function)."],
            options: [
                { label: "A", text: "$0$" },
                { label: "B", text: "$1$" },
                { label: "C", text: "$2$" },
                { label: "D", text: "$3$" },
                { label: "E", text: "$4$" }
            ]
        },
        {
            id: 'mm-21-2-mc6',
            number: 'Question 6',
            text: "The probability of winning a game is 0.25.\n\nThe probability of winning a game is independent of winning any other game.\n\nIf Ben plays 10 games, the probability that he will win exactly four times is closest to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "B",
            markingGuide: ["$\\Pr(X=4) = \\binom{10}{4}(0.25)^4(0.75)^6 \\approx 0.1460$... check options."],
            options: [
                { label: "A", text: "$0.1460$" },
                { label: "B", text: "$0.2241$" },
                { label: "C", text: "$0.9219$" },
                { label: "D", text: "$0.0781$" },
                { label: "E", text: "$0.7759$" }
            ]
        },
        {
            id: 'mm-21-2-mc7',
            number: 'Question 7',
            text: "The tangent to the graph of $y = x^3 - ax^2 + 1$ at $x = 1$ passes through the origin.\n\nThe value of $a$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "D",
            markingGuide: ["Find tangent at $x=1$ and set it to pass through $(0,0)$."],
            options: [
                { label: "A", text: "$\\frac{1}{2}$" },
                { label: "B", text: "$1$" },
                { label: "C", text: "$\\frac{3}{2}$" },
                { label: "D", text: "$2$" },
                { label: "E", text: "$\\frac{5}{2}$" }
            ]
        },
        {
            id: 'mm-21-2-mc8',
            number: 'Question 8',
            text: "The graph of the function $f$ is shown below (a curve with a vertical asymptote at $x = a$, approaching from the left going to $-\\infty$ and from the right increasing).\n\nThe graph corresponding to $f'$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivative Graphs",
            answer: "D",
            markingGuide: ["Graph D shows the derivative consistent with the given function shape."],
            options: [
                { label: "A", text: "Graph A (curve with horizontal asymptote, increasing from left)" },
                { label: "B", text: "Graph B (curve with vertical asymptote, positive on both sides)" },
                { label: "C", text: "Graph C (curve with vertical asymptote, negative left, positive right)" },
                { label: "D", text: "Graph D (curve with vertical asymptote, positive left, positive right)" },
                { label: "E", text: "Graph E (curve with vertical asymptote, positive decreasing)" }
            ]
        },
        {
            id: 'mm-21-2-mc9',
            number: 'Question 9',
            text: "Let $g(x) = x + 2$ and $f(x) = x^2 - 4$.\n\nIf $h$ is the composite function given by $h : [-5, -1) \\to R$, $h(x) = f(g(x))$, then the range of $h$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "A",
            markingGuide: ["$h(x) = (x+2)^2 - 4$. On $[-5,-1)$, range is $(-3, 5]$."],
            options: [
                { label: "A", text: "$(-3, 5]$" },
                { label: "B", text: "$[-3, 5)$" },
                { label: "C", text: "$(-3, 5)$" },
                { label: "D", text: "$(-4, 5]$" },
                { label: "E", text: "$[-4, 5]$" }
            ]
        },
        {
            id: 'mm-21-2-mc10',
            number: 'Question 10',
            text: "Consider the functions $f(x) = \\sqrt{x + 2}$ and $g(x) = \\sqrt{1 - 2x}$, defined over their maximal domains.\n\nThe maximal domain of the function $h = f + g$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Domain",
            answer: "D",
            markingGuide: ["$f$: $x \\ge -2$; $g$: $x \\le \\frac{1}{2}$. Intersection: $\\left[-2, \\frac{1}{2}\\right]$."],
            options: [
                { label: "A", text: "$\\left(-2, \\frac{1}{2}\\right)$" },
                { label: "B", text: "$[-2, \\infty)$" },
                { label: "C", text: "$(-\\infty, -2) \\cup \\left(\\frac{1}{2}, \\infty\\right)$" },
                { label: "D", text: "$\\left[-2, \\frac{1}{2}\\right]$" },
                { label: "E", text: "$[-2, 1]$" }
            ]
        },
        {
            id: 'mm-21-2-mc11',
            number: 'Question 11',
            text: "If $\\int_0^a f(x)\\,dx = k$, then $\\int_0^a (3f(x) + 2)\\,dx$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "A",
            markingGuide: ["$\\int_0^a (3f(x)+2)\\,dx = 3k + 2a$."],
            options: [
                { label: "A", text: "$3k + 2a$" },
                { label: "B", text: "$3k$" },
                { label: "C", text: "$k + 2a$" },
                { label: "D", text: "$k + 2$" },
                { label: "E", text: "$3k + 2$" }
            ]
        },
        {
            id: 'mm-21-2-mc12',
            number: 'Question 12',
            text: "For a certain species of bird, the proportion of birds with a crest is known to be $\\frac{3}{5}$.\n\nLet $\\hat{P}$ be the random variable representing the proportion of birds with a crest in samples of size $n$ for this specific bird.\n\nThe smallest sample size for which the standard deviation of $\\hat{P}$ is less than 0.08 is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Sampling Distribution",
            answer: "D",
            markingGuide: ["$\\text{sd}(\\hat{P}) = \\sqrt{\\frac{p(1-p)}{n}} < 0.08$. Solve for $n$."],
            options: [
                { label: "A", text: "$7$" },
                { label: "B", text: "$27$" },
                { label: "C", text: "$37$" },
                { label: "D", text: "$38$" },
                { label: "E", text: "$43$" }
            ]
        },
        {
            id: 'mm-21-2-mc13',
            number: 'Question 13',
            text: "The value of an investment, in dollars, after $n$ months can be modelled by the function\n\n$f(n) = 2500 \\times (1.004)^n$\n\nwhere $n \\in \\{0, 1, 2, \\ldots\\}$.\n\nThe average rate of change of the value of the investment over the first 12 months is closest to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Average Rate of Change",
            answer: "C",
            markingGuide: ["$\\frac{f(12) - f(0)}{12} = \\frac{2500(1.004^{12} - 1)}{12}$."],
            options: [
                { label: "A", text: "$\\$10.00$ per month" },
                { label: "B", text: "$\\$10.20$ per month" },
                { label: "C", text: "$\\$10.50$ per month" },
                { label: "D", text: "$\\$125.00$ per month" },
                { label: "E", text: "$\\$127.00$ per month" }
            ]
        },
        {
            id: 'mm-21-2-mc14',
            number: 'Question 14',
            text: "A value of $k$ for which the average value of $y = \\cos\\left(kx - \\frac{\\pi}{2}\\right)$ over the interval $[0, \\pi]$ is equal to the average value of $y = \\sin(x)$ over the same interval is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "E",
            markingGuide: ["Compute average values and equate to find $k$."],
            options: [
                { label: "A", text: "$\\frac{1}{6}$" },
                { label: "B", text: "$\\frac{1}{5}$" },
                { label: "C", text: "$\\frac{1}{4}$" },
                { label: "D", text: "$\\frac{1}{3}$" },
                { label: "E", text: "$\\frac{1}{2}$" }
            ]
        },
        {
            id: 'mm-21-2-mc15',
            number: 'Question 15',
            text: "Four fair coins are tossed at the same time.\n\nThe outcome for each coin is independent of the outcome for any other coin.\n\nThe probability that there is an equal number of heads and tails, given that there is at least one head, is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "D",
            markingGuide: ["$\\Pr(2H2T | \\text{at least 1H}) = \\frac{\\binom{4}{2}/16}{15/16} = \\frac{6}{15} = \\frac{2}{5}$."],
            options: [
                { label: "A", text: "$\\frac{1}{2}$" },
                { label: "B", text: "$\\frac{1}{3}$" },
                { label: "C", text: "$\\frac{3}{4}$" },
                { label: "D", text: "$\\frac{2}{5}$" },
                { label: "E", text: "$\\frac{4}{7}$" }
            ]
        },
        {
            id: 'mm-21-2-mc16',
            number: 'Question 16',
            text: "Let $\\cos(x) = \\frac{3}{5}$ and $\\sin^2(y) = \\frac{25}{169}$, where $x \\in \\left[\\frac{3\\pi}{2}, 2\\pi\\right]$ and $y \\in \\left[\\frac{3\\pi}{2}, 2\\pi\\right]$.\n\nThe value of $\\sin(x) + \\cos(y)$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Trigonometric Identities",
            answer: "A",
            markingGuide: ["In $[\\frac{3\\pi}{2}, 2\\pi]$: $\\sin(x) < 0$, $\\cos(y) > 0$. Compute values."],
            options: [
                { label: "A", text: "$\\frac{8}{65}$" },
                { label: "B", text: "$-\\frac{112}{65}$" },
                { label: "C", text: "$\\frac{112}{65}$" },
                { label: "D", text: "$-\\frac{8}{65}$" },
                { label: "E", text: "$\\frac{64}{65}$" }
            ]
        },
        {
            id: 'mm-21-2-mc17',
            number: 'Question 17',
            text: "A discrete random variable $X$ has a binomial distribution with a probability of success of $p = 0.1$ for $n$ trials, where $n > 2$.\n\nIf the probability of obtaining at least two successes after $n$ trials is at least 0.5, then the smallest possible value of $n$ is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "E",
            markingGuide: ["Find smallest $n$ such that $\\Pr(X \\ge 2) \\ge 0.5$ with $p = 0.1$."],
            options: [
                { label: "A", text: "$15$" },
                { label: "B", text: "$16$" },
                { label: "C", text: "$17$" },
                { label: "D", text: "$18$" },
                { label: "E", text: "$19$" }
            ]
        },
        {
            id: 'mm-21-2-mc18',
            number: 'Question 18',
            text: "Let $f : R \\to R$, $f(x) = (2x - 1)(2x + 1)(3x - 1)$ and $g : (-\\infty, 0) \\to R$, $g(x) = x\\log_e(-x)$.\n\nThe maximum number of solutions for the equation $f(x - k) = g(x)$, where $k \\in R$, is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Intersections",
            answer: "D",
            markingGuide: ["Analyse the number of intersections by considering graph translations."],
            options: [
                { label: "A", text: "$0$" },
                { label: "B", text: "$1$" },
                { label: "C", text: "$2$" },
                { label: "D", text: "$3$" },
                { label: "E", text: "$4$" }
            ]
        },
        {
            id: 'mm-21-2-mc19',
            number: 'Question 19',
            text: "Which one of the following functions is differentiable for all real values of $x$?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Differentiability",
            answer: "E",
            markingGuide: ["Check continuity and differentiability at $x = 0$ for each piecewise function."],
            options: [
                { label: "A", text: "$f(x) = \\begin{cases} x & x < 0 \\\\ -x & x \\ge 0 \\end{cases}$" },
                { label: "B", text: "$f(x) = \\begin{cases} x & x < 0 \\\\ -x & x > 0 \\end{cases}$" },
                { label: "C", text: "$f(x) = \\begin{cases} 8x + 4 & x < 0 \\\\ (2x+1)^2 & x \\ge 0 \\end{cases}$" },
                { label: "D", text: "$f(x) = \\begin{cases} 2x + 1 & x < 0 \\\\ (2x+1)^2 & x \\ge 0 \\end{cases}$" },
                { label: "E", text: "$f(x) = \\begin{cases} 4x + 1 & x < 0 \\\\ (2x+1)^2 & x \\ge 0 \\end{cases}$" }
            ]
        },
        {
            id: 'mm-21-2-mc20',
            number: 'Question 20',
            text: "Let $A$ and $B$ be two independent events from a sample space.\n\nIf $\\Pr(A) = p$, $\\Pr(B) = p^2$ and $\\Pr(A) + \\Pr(B) = 1$, then $\\Pr(A' \\cup B)$ is equal to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Probability Rules",
            answer: "E",
            markingGuide: ["Use $\\Pr(A' \\cup B) = 1 - \\Pr(A) + \\Pr(A \\cap B) = 1 - p + p \\cdot p^2 = 1 - p + p^3$... with $p + p^2 = 1$."],
            options: [
                { label: "A", text: "$1 - p - p^2$" },
                { label: "B", text: "$p^2 - p^3$" },
                { label: "C", text: "$p - p^3$" },
                { label: "D", text: "$1 - p + p^3$" },
                { label: "E", text: "$1 - p - p^2 + p^3$" }
            ]
        },
        // =====================================================================
        // SECTION B: Extended Response (5 Questions, 60 marks total)
        // =====================================================================
        // --- Question 1 (14 marks) ---
        {
            id: 'mm-21-2-q1a',
            number: '1a',
            text: "A rectangular sheet of cardboard has a width of $h$ centimetres. Its length is twice its width. Squares of side length $x$ centimetres, where $x > 0$, are cut from each of the corners. The sides are then folded up to make a rectangular box with an open top.\n\nA box is to be made from a sheet of cardboard with $h = 25$ cm.\n\nShow that the volume, $V_{box}$, in cubic centimetres, is given by $V_{box}(x) = 2x(25 - 2x)(25 - x)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "Show: width $= h - 2x = 25-2x$, length $= 2h - 2x = 50-2x = 2(25-x)$, height $= x$. $V = x(25-2x) \\cdot 2(25-x)$.",
            markingGuide: ["Derive dimensions and multiply to obtain $V_{box}(x) = 2x(25 - 2x)(25 - x)$."]
        },
        {
            id: 'mm-21-2-q1b',
            number: '1b',
            text: "State the domain of $V_{box}$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$0 < x < 12.5$ (or $x \\in (0, 12.5)$)",
            markingGuide: ["Domain: $(0, 12.5)$ since $25 - 2x > 0 \\Rightarrow x < 12.5$."]
        },
        {
            id: 'mm-21-2-q1c',
            number: '1c',
            text: "Find the derivative of $V_{box}$ with respect to $x$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$V'_{box}(x) = 2(25 - 2x)(25 - x) + 2x(-2)(25 - x) + 2x(25 - 2x)(-1)$",
            markingGuide: ["Differentiate $V_{box}(x) = 2x(25-2x)(25-x)$ using product rule."]
        },
        {
            id: 'mm-21-2-q1d',
            number: '1d',
            text: "Calculate the maximum possible volume of the box and for which value of $x$ this occurs.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "Solve $V'_{box}(x) = 0$ for $x$ in domain, then evaluate $V_{box}$ at that $x$.",
            markingGuide: ["Set $V'_{box}(x) = 0$, solve, verify maximum, and compute $V_{box}$."]
        },
        {
            id: 'mm-21-2-q1e',
            number: '1e',
            text: "Waste minimisation is a goal when making cardboard boxes. Percentage wasted is based on the area of the sheet of cardboard that is cut out before the box is made.\n\nFind the percentage of the sheet of cardboard that is wasted when $x = 5$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Applications",
            answer: "Wasted area $= 4x^2 = 100$. Total area $= 25 \\times 50 = 1250$. Percentage $= \\frac{100}{1250} \\times 100 = 8\\%$.",
            markingGuide: ["Calculate $\\frac{4x^2}{h \\times 2h} \\times 100\\%$ with $h=25$, $x=5$."]
        },
        {
            id: 'mm-21-2-q1fi',
            number: '1f.i',
            text: "Now consider a box made from a rectangular sheet of cardboard where $h > 0$ and the box's length is still twice its width.\n\nLet $V_{box}$ be the function that gives the volume of the box.\n\nState the domain of $V_{box}$ in terms of $h$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$0 < x < \\frac{h}{2}$",
            markingGuide: ["Domain: $\\left(0, \\frac{h}{2}\\right)$."]
        },
        {
            id: 'mm-21-2-q1fii',
            number: '1f.ii',
            text: "Find the maximum volume for any such rectangular box, $V_{box}$, in terms of $h$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "Express $V_{box}(x) = 2x(h-2x)(h-x)$ and optimise in terms of $h$.",
            markingGuide: ["Differentiate, solve $V'(x) = 0$, substitute back to get max volume in terms of $h$."]
        },
        {
            id: 'mm-21-2-q1g',
            number: '1g',
            text: "Now consider making a box from a square sheet of cardboard with side lengths of $h$ centimetres.\n\nShow that the maximum volume of the box occurs when $x = \\frac{h}{6}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "For square sheet: $V = x(h-2x)^2$. $V' = (h-2x)^2 - 4x(h-2x) = (h-2x)(h-6x) = 0$. So $x = \\frac{h}{6}$.",
            markingGuide: ["Derive $V = x(h-2x)^2$, differentiate and show $x = \\frac{h}{6}$ gives maximum."]
        },
        // --- Question 2 (10 marks) ---
        {
            id: 'mm-21-2-q2a',
            number: '2a',
            text: "Four rectangles of equal width are drawn and used to approximate the area under the parabola $y = x^2$ from $x = 0$ to $x = 1$. The heights of the rectangles are the values of the graph of $y = x^2$ at the right endpoint of each rectangle.\n\nState the width of each of the rectangles shown above.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Riemann Sums",
            answer: "$\\frac{1}{4}$",
            markingGuide: ["Width $= \\frac{1-0}{4} = \\frac{1}{4}$."]
        },
        {
            id: 'mm-21-2-q2b',
            number: '2b',
            text: "Find the total area of the four rectangles shown above.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Riemann Sums",
            answer: "$\\frac{1}{4}\\left[\\left(\\frac{1}{4}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{3}{4}\\right)^2 + 1^2\\right] = \\frac{15}{32}$",
            markingGuide: ["Sum $= \\frac{1}{4}\\left(\\frac{1}{16} + \\frac{1}{4} + \\frac{9}{16} + 1\\right) = \\frac{15}{32}$."]
        },
        {
            id: 'mm-21-2-q2c',
            number: '2c',
            text: "Find the area between the graph of $y = x^2$, the $x$-axis and the line $x = 1$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "$\\int_0^1 x^2\\,dx = \\frac{1}{3}$",
            markingGuide: ["$\\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$."]
        },
        {
            id: 'mm-21-2-q2d',
            number: '2d',
            text: "The graph of $f$ is shown below (a curve from roughly $(-3, 2)$ rising to about $(-1, 8)$ then decreasing through $(0,0)$ and down to about $(2, -8)$ then rising).\n\nApproximate $\\int_{-2}^{2} f(x)\\,dx$ using four rectangles of equal width and the right endpoint of each rectangle.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Riemann Sums",
            answer: "Width $= 1$. Sum $= 1 \\times [f(-1) + f(0) + f(1) + f(2)]$. Read values from graph.",
            markingGuide: ["Use right endpoints $x = -1, 0, 1, 2$ with width $1$, read $f$ values from graph."]
        },
        {
            id: 'mm-21-2-q2e',
            number: '2e',
            text: "Parts of the graphs of $y = x^2$ and $y = \\sqrt{x}$ are shown below.\n\nFind the area of the shaded region.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\frac{1}{3}$",
            markingGuide: ["$\\int_0^1 (\\sqrt{x} - x^2)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$."]
        },
        {
            id: 'mm-21-2-q2f',
            number: '2f',
            text: "The graph of $y = x^2$ is transformed to the graph of $y = ax^2$, where $a \\in (0, 2]$.\n\nFind the values of $a$ such that the area defined by the region(s) bounded by the graphs of $y = ax^2$ and $y = \\sqrt{x}$ and the lines $x = 0$ and $x = a$ is equal to $\\frac{1}{3}$. Give your answer correct to two decimal places.",
            marks: 4,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "Set up integral and solve for $a$.",
            markingGuide: ["Set $\\int_0^a |\\sqrt{x} - ax^2|\\,dx = \\frac{1}{3}$ and solve for $a$ numerically."]
        },
        // --- Question 3 (12 marks) ---
        {
            id: 'mm-21-2-q3a',
            number: '3a',
            text: "Let $q(x) = \\log_e(x^2 - 1) - \\log_e(1 - x)$.\n\nState the maximal domain and the range of $q$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Functions",
            answer: "Domain: $(1, \\infty)$; Range: $R$",
            markingGuide: ["Need $x^2 - 1 > 0$ and $1 - x > 0$; simplify $q(x) = \\log_e(x+1)$ on appropriate domain."]
        },
        {
            id: 'mm-21-2-q3bi',
            number: '3b.i',
            text: "Find the equation of the tangent to the graph of $q$ when $x = -2$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "Find $q(-2)$ and $q'(-2)$, write tangent equation.",
            markingGuide: ["Evaluate $q(-2)$ and $q'(-2)$, then $y - q(-2) = q'(-2)(x + 2)$."]
        },
        {
            id: 'mm-21-2-q3bii',
            number: '3b.ii',
            text: "Find the equation of the line that is perpendicular to the graph of $q$ when $x = -2$ and passes through the point $(-2, 0)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "Gradient $= -\\frac{1}{q'(-2)}$, passing through $(-2, 0)$.",
            markingGuide: ["Perpendicular gradient $= -1/q'(-2)$; line: $y = m(x+2)$."]
        },
        {
            id: 'mm-21-2-q3c',
            number: '3c',
            text: "Let $p(x) = e^{-2x} - 2e^{-x} + 1$.\n\nExplain why $p$ is not a one-to-one function.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Function Properties",
            answer: "$p(x) = (e^{-x} - 1)^2$ which has a minimum and is not monotonic.",
            markingGuide: ["$p(x) = (e^{-x}-1)^2 \\ge 0$ with minimum at $x=0$; not one-to-one as it takes the same value for different $x$."]
        },
        {
            id: 'mm-21-2-q3d',
            number: '3d',
            text: "Find the gradient of the tangent to the graph of $p$ at $x = a$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$p'(a) = -2e^{-2a} + 2e^{-a}$",
            markingGuide: ["$p'(x) = -2e^{-2x} + 2e^{-x}$; evaluate at $x = a$."]
        },
        {
            id: 'mm-21-2-q3e',
            number: '3e',
            text: "The line $y = x + 2$ and the tangent to the graph of $p$ at $x = a$ intersect with an acute angle of $\\theta$ between them.\n\nFind the value(s) of $a$ for which $\\theta = 60°$. Give your answer(s) correct to two decimal places.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "Use $\\tan(60°) = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$ with $m_1 = 1$ and $m_2 = p'(a)$.",
            markingGuide: ["Set $\\tan(60°) = \\left|\\frac{1 - p'(a)}{1 + p'(a)}\\right|$ and solve for $a$ numerically."]
        },
        {
            id: 'mm-21-2-q3f',
            number: '3f',
            text: "Find the $x$-coordinate of the point of intersection between the line $y = x + 2$ and the graph of $p$, and hence find the area bounded by $y = x + 2$, the graph of $p$ and the $x$-axis, both correct to three decimal places.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "Solve $e^{-2x} - 2e^{-x} + 1 = x + 2$ numerically, then integrate.",
            markingGuide: ["Find intersection numerically, then compute area using definite integral."]
        },
        // --- Question 4 (14 marks) ---
        {
            id: 'mm-21-2-q4a',
            number: '4a',
            text: "A teacher coaches their school's table tennis team. The teacher has an adjustable ball machine. The speed, measured in metres per second, of the balls shot by the ball machine is a normally distributed random variable $W$.\n\nThe teacher sets the ball machine with a mean speed of 10 metres per second and a standard deviation of 0.8 metres per second.\n\nDetermine $\\Pr(W \\ge 11)$, correct to three decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$\\Pr(W \\ge 11)$",
            markingGuide: ["$\\Pr(W \\ge 11) = \\Pr\\left(Z \\ge \\frac{11-10}{0.8}\\right)$."]
        },
        {
            id: 'mm-21-2-q4b',
            number: '4b',
            text: "Find the value of $k$, in metres per second, which 80% of ball speeds are below. Give your answer in metres per second, correct to one decimal place.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "Find $k$ such that $\\Pr(W < k) = 0.80$.",
            markingGuide: ["$k = 10 + 0.8 \\times z_{0.80}$."]
        },
        {
            id: 'mm-21-2-q4c',
            number: '4c',
            text: "The teacher adjusts the height setting for the ball machine. With the new height setting, 8% of balls do not land on the table.\n\nLet $\\hat{P}$ be the random variable representing the sample proportion of balls that do not land on the table in random samples of 25 balls.\n\nFind the mean and the standard deviation of $\\hat{P}$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Sampling Distribution",
            answer: "Mean $= 0.08$, sd $= \\sqrt{\\frac{0.08 \\times 0.92}{25}}$",
            markingGuide: ["Mean $= p = 0.08$; sd $= \\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.08 \\times 0.92}{25}}$."]
        },
        {
            id: 'mm-21-2-q4d',
            number: '4d',
            text: "Use the binomial distribution to find $\\Pr(\\hat{P} > 0.1)$, correct to three decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\Pr(\\hat{P} > 0.1) = \\Pr(X > 2.5) = \\Pr(X \\ge 3)$ where $X \\sim \\text{Bin}(25, 0.08)$.",
            markingGuide: ["$\\hat{P} > 0.1 \\Leftrightarrow X > 2.5 \\Leftrightarrow X \\ge 3$. Compute $1 - \\Pr(X \\le 2)$."]
        },
        {
            id: 'mm-21-2-q4e',
            number: '4e',
            text: "The teacher can also adjust the spin setting on the ball machine. The spin, measured in revolutions per second, is a continuous random variable $X$ with the probability density function\n\n$f(x) = \\begin{cases} \\frac{x}{500} & 0 \\le x < 20 \\\\ \\frac{50 - x}{750} & 20 \\le x \\le 50 \\\\ 0 & \\text{elsewhere} \\end{cases}$\n\nFind the maximum possible spin applied by the ball machine, in revolutions per second.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Random Variables",
            answer: "$50$ revolutions per second",
            markingGuide: ["Maximum spin is $50$ (upper bound of the pdf support)."]
        },
        {
            id: 'mm-21-2-q4f',
            number: '4f',
            text: "Find the median spin, in revolutions per second, correct to one decimal place.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Random Variables",
            answer: "Solve for median $m$ from $\\int_0^m f(x)\\,dx = 0.5$.",
            markingGuide: ["If $m < 20$: $\\int_0^m \\frac{x}{500}\\,dx = \\frac{m^2}{1000} = 0.5$, so $m = \\sqrt{500}$. If $m \\ge 20$: use both pieces."]
        },
        {
            id: 'mm-21-2-q4g',
            number: '4g',
            text: "Find the standard deviation of the spin, in revolutions per second, correct to one decimal place.",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Random Variables",
            answer: "Compute $E(X)$ and $E(X^2)$, then $\\text{sd} = \\sqrt{E(X^2) - [E(X)]^2}$.",
            markingGuide: ["Calculate $E(X)$ and $\\text{Var}(X)$ using the piecewise pdf, then take square root."]
        },
        {
            id: 'mm-21-2-q4h',
            number: '4h',
            text: "The teacher adjusts the spin setting so that the median spin becomes 30 revolutions per second. This will transform the original probability density function $f$ to a new probability density function $g$, where $g(x) = af\\left(\\frac{x}{b}\\right)$.\n\nFind the values of $a$ and $b$ for which the new median spin is 30 revolutions per second, giving your answer correct to two decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Transformations of Random Variables",
            answer: "Find $a$ and $b$ such that the transformed pdf has median 30.",
            markingGuide: ["Use the transformation $g(x) = af(x/b)$ and the constraint that median scales by $b$, with $a = 1/b$."]
        },
        // --- Question 5 (10 marks) ---
        {
            id: 'mm-21-2-q5a',
            number: '5a',
            text: "Part of the graph of $f : R \\to R$, $f(x) = \\sin\\left(\\frac{x}{2}\\right) + \\cos(2x)$ is shown.\n\nState the period of $f$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$4\\pi$",
            markingGuide: ["Period of $\\sin(x/2)$ is $4\\pi$; period of $\\cos(2x)$ is $\\pi$. LCM $= 4\\pi$."]
        },
        {
            id: 'mm-21-2-q5b',
            number: '5b',
            text: "State the minimum value of $f$, correct to three decimal places.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "Find minimum of $\\sin(x/2) + \\cos(2x)$ using CAS.",
            markingGuide: ["Use CAS to find the minimum value of $f(x) = \\sin(x/2) + \\cos(2x)$."]
        },
        {
            id: 'mm-21-2-q5c',
            number: '5c',
            text: "Find the smallest positive value of $h$ for which $f(h - x) = f(x)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "Find axis of symmetry; smallest positive $h$.",
            markingGuide: ["$f(h-x) = f(x)$ means the graph is symmetric about $x = h/2$. Find smallest positive $h$."]
        },
        {
            id: 'mm-21-2-q5d',
            number: '5d',
            text: "Consider the set of functions of the form $g_a : R \\to R$, $g_a(x) = \\sin\\left(\\frac{x}{a}\\right) + \\cos(ax)$, where $a$ is a positive integer.\n\nState the value of $a$ such that $g_a(x) = f(x)$ for all $x$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$a = 2$",
            markingGuide: ["$g_2(x) = \\sin(x/2) + \\cos(2x) = f(x)$."]
        },
        {
            id: 'mm-21-2-q5ei',
            number: '5e.i',
            text: "Find an antiderivative of $g_a$ in terms of $a$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Antidifferentiation",
            answer: "$-a\\cos\\left(\\frac{x}{a}\\right) + \\frac{1}{a}\\sin(ax) + c$",
            markingGuide: ["$\\int g_a(x)\\,dx = -a\\cos(x/a) + \\frac{1}{a}\\sin(ax) + c$."]
        },
        {
            id: 'mm-21-2-q5eii',
            number: '5e.ii',
            text: "Use a definite integral to show that the area bounded by $g_a$ and the $x$-axis over the interval $[0, 2a\\pi]$ is equal above and below the $x$-axis for all values of $a$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "Show $\\int_0^{2a\\pi} g_a(x)\\,dx = 0$.",
            markingGuide: ["Evaluate $\\int_0^{2a\\pi} g_a(x)\\,dx$ and show it equals $0$ for all positive integer $a$."]
        },
        {
            id: 'mm-21-2-q5f',
            number: '5f',
            text: "Explain why the maximum value of $g_a$ cannot be greater than 2 for all values of $a$ and why the minimum value of $g_a$ cannot be less than $-2$ for all values of $a$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$|\\sin(x/a)| \\le 1$ and $|\\cos(ax)| \\le 1$, so $-2 \\le g_a(x) \\le 2$.",
            markingGuide: ["Since $-1 \\le \\sin(x/a) \\le 1$ and $-1 \\le \\cos(ax) \\le 1$, we have $-2 \\le g_a(x) \\le 2$."]
        },
        {
            id: 'mm-21-2-q5g',
            number: '5g',
            text: "Find the greatest possible minimum value of $g_a$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "Find the value of $a$ that maximises the minimum of $g_a$.",
            markingGuide: ["As $a \\to \\infty$, the minimum of $g_a$ approaches $-1$. Greatest possible minimum $= -1$."]
        },
    ]
};
