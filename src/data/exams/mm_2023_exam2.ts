import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2023_EXAM2: ExamPaper = {
    id: 'mm-2023-exam2',
    year: 2023,
    subject: Subject.METHODS,
    title: "Exam 2 (Tech-Active)",
    questions: [
        // =====================================================================
        // SECTION A: Multiple Choice (20 Questions, 1 mark each)
        // =====================================================================
        {
            id: 'mm-23-2-mc1',
            number: 'Question 1',
            text: "The amplitude, $A$, and the period, $P$, of the function $f(x) = -\\frac{1}{2}\\sin(3x + 2\\pi)$ are",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "B",
            markingGuide: ["$A = \\frac{1}{2}$, $P = \\frac{2\\pi}{3}$."],
            options: [
                { label: "A", text: "$A = -\\frac{1}{2},\\; P = \\frac{\\pi}{3}$" },
                { label: "B", text: "$A = -\\frac{1}{2},\\; P = \\frac{2\\pi}{3}$" },
                { label: "C", text: "$A = -\\frac{1}{2},\\; P = \\frac{3\\pi}{2}$" },
                { label: "D", text: "$A = \\frac{1}{2},\\; P = \\frac{\\pi}{3}$" },
                { label: "E", text: "$A = \\frac{1}{2},\\; P = \\frac{2\\pi}{3}$" }
            ]
        },
        {
            id: 'mm-23-2-mc2',
            number: 'Question 2',
            text: "For the parabola with equation $y = ax^2 + 2bx + c$, where $a, b, c \\in R$, the equation of the axis of symmetry is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Quadratics",
            answer: "A",
            markingGuide: ["Axis of symmetry: $x = -\\frac{2b}{2a} = -\\frac{b}{a}$."],
            options: [
                { label: "A", text: "$x = -\\frac{b}{a}$" },
                { label: "B", text: "$x = -\\frac{b}{2a}$" },
                { label: "C", text: "$y = c$" },
                { label: "D", text: "$x = \\frac{b}{a}$" },
                { label: "E", text: "$x = \\frac{b}{2a}$" }
            ]
        },
        {
            id: 'mm-23-2-mc3',
            number: 'Question 3',
            text: "Two functions, $p$ and $q$, are continuous over their domains, which are $[-2, 3)$ and $(-1, 5]$, respectively.\n\nThe domain of the sum function $p + q$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Domain",
            answer: "E",
            markingGuide: ["Domain of $p + q$ is intersection of domains: $[-2, 3) \\cap (-1, 5] = (-1, 3)$."],
            options: [
                { label: "A", text: "$[-2, 5]$" },
                { label: "B", text: "$[-2, -1) \\cup (3, 5]$" },
                { label: "C", text: "$[-2, -1) \\cup (-1, 3) \\cup (3, 5]$" },
                { label: "D", text: "$[-1, 3]$" },
                { label: "E", text: "$(-1, 3)$" }
            ]
        },
        {
            id: 'mm-23-2-mc4',
            number: 'Question 4',
            text: "Consider the system of simultaneous linear equations below containing the parameter $k$.\n\n$$kx + 5y = k + 5$$\n$$4x + (k+1)y = 0$$\n\nThe value(s) of $k$ for which the system of equations has infinite solutions are",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Simultaneous Equations",
            answer: "A",
            markingGuide: ["Determinant $= k(k+1) - 20 = k^2 + k - 20 = (k+5)(k-4) = 0$. $k \\in \\{-5, 4\\}$."],
            options: [
                { label: "A", text: "$k \\in \\{-5, 4\\}$" },
                { label: "B", text: "$k \\in \\{-5\\}$" },
                { label: "C", text: "$k \\in \\{4\\}$" },
                { label: "D", text: "$k \\in R \\setminus \\{-5, 4\\}$" },
                { label: "E", text: "$k \\in R \\setminus \\{-5\\}$" }
            ]
        },
        {
            id: 'mm-23-2-mc5',
            number: 'Question 5',
            text: "Which one of the following functions has a horizontal tangent at $(0, 0)$?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "D",
            markingGuide: ["$y = x^{4/3}$: passes through origin and $y'(0) = \\frac{4}{3}(0)^{1/3} = 0$."],
            options: [
                { label: "A", text: "$y = x^{-1/3}$" },
                { label: "B", text: "$y = x^{1/3}$" },
                { label: "C", text: "$y = x^{2/3}$" },
                { label: "D", text: "$y = x^{4/3}$" },
                { label: "E", text: "$y = x^{3/4}$" }
            ]
        },
        {
            id: 'mm-23-2-mc6',
            number: 'Question 6',
            text: "Suppose that $\\int_3^{10} f(x)\\,dx = C$ and $\\int_7^{10} f(x)\\,dx = D$. The value of $\\int_7^3 f(x)\\,dx$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "D",
            markingGuide: ["$\\int_7^3 f(x)\\,dx = -\\int_3^7 = -(C - D) = D - C$."],
            options: [
                { label: "A", text: "$C + D$" },
                { label: "B", text: "$C + D - 3$" },
                { label: "C", text: "$C - D$" },
                { label: "D", text: "$D - C$" },
                { label: "E", text: "$CD - 3$" }
            ]
        },
        {
            id: 'mm-23-2-mc7',
            number: 'Question 7',
            text: "Let $f(x) = \\log_e x$, where $x > 0$ and $g(x) = \\sqrt{1 - x}$, where $x < 1$.\n\nThe domain of the derivative of $(f \\circ g)(x)$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "C",
            markingGuide: ["$(f \\circ g)(x) = \\log_e(\\sqrt{1-x})$. Need $1-x > 0$, so $x < 1$. Domain of derivative: $(-\\infty, 1)$."],
            options: [
                { label: "A", text: "$x \\in R$" },
                { label: "B", text: "$x \\in (-\\infty, 1]$" },
                { label: "C", text: "$x \\in (-\\infty, 1)$" },
                { label: "D", text: "$x \\in (0, \\infty)$" },
                { label: "E", text: "$x \\in (0, 1)$" }
            ]
        },
        {
            id: 'mm-23-2-mc8',
            number: 'Question 8',
            text: "A box contains $n$ green balls and $m$ red balls. A ball is selected at random, and its colour is noted. The ball is then replaced in the box.\n\nIn 8 such selections, where $n \\ne m$, what is the probability that a green ball is selected at least once?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "C",
            markingGuide: ["$P(\\text{at least 1 green}) = 1 - P(\\text{no green})^8 = 1 - \\left(\\frac{m}{n+m}\\right)^8$."],
            options: [
                { label: "A", text: "$8\\left(\\frac{n}{n+m}\\right)\\left(\\frac{m}{n+m}\\right)^7$" },
                { label: "B", text: "$1 - \\left(\\frac{n}{n+m}\\right)^8$" },
                { label: "C", text: "$1 - \\left(\\frac{m}{n+m}\\right)^8$" },
                { label: "D", text: "$1 - \\left(\\frac{n}{n+m}\\right)\\left(\\frac{m}{n+m}\\right)^7$" },
                { label: "E", text: "$1 - 8\\left(\\frac{n}{n+m}\\right)\\left(\\frac{m}{n+m}\\right)^7$" }
            ]
        },
        {
            id: 'mm-23-2-mc9',
            number: 'Question 9',
            text: "The function $f$ is given by\n\n$$f(x) = \\begin{cases} \\tan\\left(\\frac{x}{2}\\right) & 4 \\le x < 2\\pi \\\\ \\sin(ax) & 2\\pi \\le x \\le 8 \\end{cases}$$\n\nThe value of $a$ for which $f$ is continuous and smooth at $x = 2\\pi$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Continuity and Differentiability",
            answer: "C",
            markingGuide: ["Continuity: $\\tan(\\pi) = 0 = \\sin(2\\pi a)$. Smoothness: $\\frac{1}{2}\\sec^2(\\pi) = a\\cos(2\\pi a)$. $a = -\\frac{1}{2}$."],
            options: [
                { label: "A", text: "$-2$" },
                { label: "B", text: "$-\\frac{\\pi}{2}$" },
                { label: "C", text: "$-\\frac{1}{2}$" },
                { label: "D", text: "$\\frac{1}{2}$" },
                { label: "E", text: "$2$" }
            ]
        },
        {
            id: 'mm-23-2-mc10',
            number: 'Question 10',
            text: "A continuous random variable $X$ has the following probability density function.\n\n$$g(x) = \\begin{cases} \\frac{x-1}{20} & 1 \\le x < 6 \\\\ \\frac{9-x}{12} & 6 \\le x \\le 9 \\\\ 0 & \\text{elsewhere} \\end{cases}$$\n\nThe value of $k$ such that $\\Pr(X < k) = 0.35$ is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "B",
            markingGuide: ["$\\int_1^k \\frac{x-1}{20}\\,dx = \\frac{(k-1)^2}{40} = 0.35$. $(k-1)^2 = 14$. $k = \\sqrt{14} + 1$."],
            options: [
                { label: "A", text: "$\\sqrt{14} - 1$" },
                { label: "B", text: "$\\sqrt{14} + 1$" },
                { label: "C", text: "$\\sqrt{15} - 1$" },
                { label: "D", text: "$\\sqrt{15} + 1$" },
                { label: "E", text: "$1 - \\sqrt{15}$" }
            ]
        },
        {
            id: 'mm-23-2-mc11',
            number: 'Question 11',
            text: "Two functions, $f$ and $g$, are continuous and differentiable for all $x \\in R$. It is given that $f(-2) = -7$, $g(-2) = 8$ and $f'(-2) = 3$, $g'(-2) = 2$.\n\nThe gradient of the graph $y = f(x) \\times g(x)$ at the point where $x = -2$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "E",
            markingGuide: ["$y' = f'g + fg'$. At $x=-2$: $3(8) + (-7)(2) = 24 - 14 = 10$."],
            options: [
                { label: "A", text: "$-10$" },
                { label: "B", text: "$-6$" },
                { label: "C", text: "$0$" },
                { label: "D", text: "$6$" },
                { label: "E", text: "$10$" }
            ]
        },
        {
            id: 'mm-23-2-mc12',
            number: 'Question 12',
            text: "The probability mass function for the discrete random variable $X$ is shown below.\n\n| $X$ | $-1$ | $0$ | $1$ | $2$ |\n|---|---|---|---|---|\n| $\\Pr(X=x)$ | $k^2$ | $3k$ | $k$ | $-k^2 - 4k + 1$ |\n\nThe maximum possible value for the mean of $X$ is:",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Discrete Random Variables",
            answer: "E",
            markingGuide: ["$E(X) = -3k^2 - 7k + 2$, which is decreasing for $k \\ge 0$. Maximum at $k = 0$: $E(X) = 2$."],
            options: [
                { label: "A", text: "$0$" },
                { label: "B", text: "$\\frac{1}{3}$" },
                { label: "C", text: "$\\frac{2}{3}$" },
                { label: "D", text: "$1$" },
                { label: "E", text: "$2$" }
            ]
        },
        {
            id: 'mm-23-2-mc13',
            number: 'Question 13',
            text: "The following algorithm applies Newton's method using a **For** loop with 3 iterations.\n\n```\nInputs: f(x), a function of x\n        df(x), the derivative of f(x)\n        x0, an initial estimate\n\nDefine newton(f(x), df(x), x0)\n    For i from 1 to 3\n        If df(x0) = 0 Then\n            Return \"Error: Division by zero\"\n        Else\n            x0 ← x0 − f(x0) ÷ df(x0)\n    EndFor\n    Return x0\n```\n\nThe **Return** value of the function `newton(x³ + 3x − 3, 3x² + 3, 1)` is closest to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Newton's Method",
            answer: "C",
            markingGuide: ["$x_0=1$, $x_1=5/6\\approx0.83333$, $x_2\\approx0.81785$, $x_3\\approx0.81773$."],
            options: [
                { label: "A", text: "$0.83333$" },
                { label: "B", text: "$0.81785$" },
                { label: "C", text: "$0.81773$" },
                { label: "D", text: "$1$" },
                { label: "E", text: "$3$" }
            ]
        },
        {
            id: 'mm-23-2-mc14',
            number: 'Question 14',
            text: "A polynomial has the equation $y = x(3x - 1)(x + 3)(x + 1)$.\n\nThe number of tangents to this curve that pass through the positive $x$-intercept is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "D",
            markingGuide: ["Positive $x$-intercept at $(\\frac{1}{3}, 0)$. Three tangent lines pass through this point."],
            options: [
                { label: "A", text: "$0$" },
                { label: "B", text: "$1$" },
                { label: "C", text: "$2$" },
                { label: "D", text: "$3$" },
                { label: "E", text: "$4$" }
            ]
        },
        {
            id: 'mm-23-2-mc15',
            number: 'Question 15',
            text: "Let $X$ be a normal random variable with mean of 100 and standard deviation of 20. Let $Y$ be a normal random variable with mean of 80 and standard deviation of 10.\n\nWhich of the diagrams below best represents the probability density functions for $X$ and $Y$, plotted on the same set of axes?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "D",
            markingGuide: ["$Y$ (solid) is narrower (SD=10) and centred left (mean=80). $X$ (dashed) is wider (SD=20) and centred right (mean=100). Diagram D."],
            options: [
                { label: "A", text: "Graph A" },
                { label: "B", text: "Graph B" },
                { label: "C", text: "Graph C" },
                { label: "D", text: "Graph D" },
                { label: "E", text: "Graph E" }
            ]
        },
        {
            id: 'mm-23-2-mc16',
            number: 'Question 16',
            text: "Let $f(x) = e^{x-1}$.\n\nGiven that the product function $f(x) \\times g(x) = e^{(x-1)^2}$, the rule for the function $g$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponential Functions",
            answer: "B",
            markingGuide: ["$g(x) = e^{(x-1)^2}/e^{x-1} = e^{(x-1)^2-(x-1)} = e^{(x-1)(x-2)} = e^{(x-2)(x-1)}$."],
            options: [
                { label: "A", text: "$g(x) = e^{x-1}$" },
                { label: "B", text: "$g(x) = e^{(x-2)(x-1)}$" },
                { label: "C", text: "$g(x) = e^{(x+2)(x-1)}$" },
                { label: "D", text: "$g(x) = e^{x(x-2)}$" },
                { label: "E", text: "$g(x) = e^{x(x-3)}$" }
            ]
        },
        {
            id: 'mm-23-2-mc17',
            number: 'Question 17',
            text: "A cylinder of height $h$ and radius $r$ is formed from a thin rectangular sheet of metal of length $x$ and width $y$, by cutting along the dashed lines shown below.\n\nThe volume of the cylinder, in terms of $x$ and $y$, is given by",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "B",
            markingGuide: ["$2\\pi r = y$, $r = \\frac{y}{2\\pi}$. $h = x - 4r = x - \\frac{2y}{\\pi}$. $V = \\pi r^2 h = \\frac{\\pi xy^2 - 2y^3}{4\\pi^2}$."],
            options: [
                { label: "A", text: "$\\pi x^2 y$" },
                { label: "B", text: "$\\frac{\\pi xy^2 - 2y^3}{4\\pi^2}$" },
                { label: "C", text: "$\\frac{2y^3 - \\pi xy^2}{4\\pi^2}$" },
                { label: "D", text: "$\\frac{\\pi xy - 2y^2}{2\\pi}$" },
                { label: "E", text: "$\\frac{2y^2 - \\pi xy}{2\\pi}$" }
            ]
        },
        {
            id: 'mm-23-2-mc18',
            number: 'Question 18',
            text: "Consider the function $f: [-a\\pi, a\\pi] \\to R$, $f(x) = \\sin(ax)$, where $a$ is a positive integer.\n\nThe number of local minima in the graph of $y = f(x)$ is always equal to",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "E",
            markingGuide: ["$ax \\in [-a^2\\pi, a^2\\pi]$. Number of local minima of $\\sin(u)$ in this range is $a^2$."],
            options: [
                { label: "A", text: "$2$" },
                { label: "B", text: "$4$" },
                { label: "C", text: "$a$" },
                { label: "D", text: "$2a$" },
                { label: "E", text: "$a^2$" }
            ]
        },
        {
            id: 'mm-23-2-mc19',
            number: 'Question 19',
            text: "Find all values of $k$, such that the equation $x^2 + (4k+3)x + 4k^2 - \\frac{9}{4} = 0$ has two real solutions for $x$, one positive and one negative.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Quadratics",
            answer: "D",
            markingGuide: ["Product of roots $< 0$: $4k^2 - \\frac{9}{4} < 0 \\Rightarrow -\\frac{3}{4} < k < \\frac{3}{4}$. Discriminant $> 0$: $k > -\\frac{3}{4}$."],
            options: [
                { label: "A", text: "$k > -\\frac{3}{4}$" },
                { label: "B", text: "$k \\ge -\\frac{3}{4}$" },
                { label: "C", text: "$k > \\frac{3}{4}$" },
                { label: "D", text: "$-\\frac{3}{4} < k < \\frac{3}{4}$" },
                { label: "E", text: "$k < -\\frac{3}{4}$ or $k > \\frac{3}{4}$" }
            ]
        },
        {
            id: 'mm-23-2-mc20',
            number: 'Question 20',
            text: "Let $f(x) = \\log_e\\left(x + \\frac{1}{\\sqrt{2}}\\right)$.\n\nLet $g(x) = \\sin(x)$ where $x \\in (-\\infty, 5)$.\n\nThe largest interval of $x$ values for which $(f \\circ g)(x)$ and $(g \\circ f)(x)$ both exist is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "A",
            markingGuide: ["Need $x > -\\frac{1}{\\sqrt{2}}$ (for $g \\circ f$) and $\\sin(x) > -\\frac{1}{\\sqrt{2}}$ (for $f \\circ g$). Largest interval: $\\left(-\\frac{1}{\\sqrt{2}},\\; \\frac{5\\pi}{4}\\right)$."],
            options: [
                { label: "A", text: "$\\left(-\\frac{1}{\\sqrt{2}},\\; \\frac{5\\pi}{4}\\right)$" },
                { label: "B", text: "$\\left[-\\frac{1}{\\sqrt{2}},\\; \\frac{5\\pi}{4}\\right)$" },
                { label: "C", text: "$\\left(-\\frac{\\pi}{4},\\; \\frac{5\\pi}{4}\\right)$" },
                { label: "D", text: "$\\left[-\\frac{\\pi}{4},\\; \\frac{5\\pi}{4}\\right]$" },
                { label: "E", text: "$\\left[-\\frac{\\pi}{4},\\; -\\frac{1}{\\sqrt{2}}\\right]$" }
            ]
        },

        // =====================================================================
        // SECTION B: Extended Response (5 Questions, 60 marks total)
        // =====================================================================

        // ----- Question 1 (11 marks) -----
        {
            id: 'mm-23-2-q1a',
            number: 'Question 1a',
            text: "Let $f: R \\to R$, $f(x) = x(x-2)(x+1)$. Part of the graph of $f$ is shown.\n\nState the coordinates of all axial intercepts of $f$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Polynomials",
            answer: "$(0, 0)$, $(2, 0)$, $(-1, 0)$",
            markingGuide: ["$x$-intercepts at $x = 0, 2, -1$. $y$-intercept at $(0, 0)$."]
        },
        {
            id: 'mm-23-2-q1b',
            number: 'Question 1b',
            text: "Find the coordinates of the stationary points of $f$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Stationary Points",
            answer: "See marking guide",
            markingGuide: [
                "M1: $f'(x) = 3x^2 - 2x - 2 = 0$. Solve using CAS.",
                "A1: $x = \\frac{1 \\pm \\sqrt{7}}{3}$. Substitute to find $y$-coordinates."
            ]
        },
        {
            id: 'mm-23-2-q1ci',
            number: 'Question 1c.i',
            text: "Let $g: R \\to R$, $g(x) = x - 2$.\n\nFind the values of $x$ for which $f(x) = g(x)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Solving Equations",
            answer: "$x = -1, 1, 2$",
            markingGuide: ["$x(x-2)(x+1) = x - 2$. Solve: $x = -1, 1, 2$."]
        },
        {
            id: 'mm-23-2-q1cii',
            number: 'Question 1c.ii',
            text: "Write down an expression using definite integrals that gives the area of the regions bound by $f$ and $g$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "See marking guide",
            markingGuide: [
                "M1: $\\int_{-1}^{1} |f(x) - g(x)|\\,dx + \\int_{1}^{2} |f(x) - g(x)|\\,dx$.",
                "A1: $\\int_{-1}^{1} (f(x) - g(x))\\,dx + \\int_{1}^{2} (g(x) - f(x))\\,dx$ (or vice versa with absolute values)."
            ]
        },
        {
            id: 'mm-23-2-q1ciii',
            number: 'Question 1c.iii',
            text: "Hence, find the total area of the regions bound by $f$ and $g$, correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "See marking guide",
            markingGuide: ["Evaluate using CAS."]
        },
        {
            id: 'mm-23-2-q1d',
            number: 'Question 1d',
            text: "Let $h: R \\to R$, $h(x) = (x - a)(x - b)^2$, where $h(x) = f(x) + k$ and $a, b, k \\in R$.\n\nFind the possible values of $a$ and $b$.",
            marks: 4,
            topic: Topic.FUNCTIONS,
            subTopic: "Polynomials",
            answer: "See marking guide",
            markingGuide: [
                "M1: $h(x) = x^3 - 2x^2 + x + k$ (expanding $f(x)+k = x^3-x^2-2x+k$... actually $f(x) = x^3-x^2-2x$, so $h(x) = x^3-x^2-2x+k$).",
                "M1: $(x-a)(x-b)^2 = x^3 - (a+2b)x^2 + (2ab+b^2)x - ab^2$. Equate coefficients.",
                "A2: Solve the system for $a$, $b$, and $k$."
            ]
        },

        // ----- Question 2 (11 marks) -----
        {
            id: 'mm-23-2-q2a',
            number: 'Question 2a',
            text: "The following diagram represents an observation wheel, with its centre at point $P$. Passengers are seated in pods, which are carried around as the wheel turns. The wheel moves anticlockwise with constant speed and completes one full rotation every 30 minutes. When a pod is at the lowest point of the wheel (point $A$), it is 15 metres above the ground. The wheel has a radius of 60 metres.\n\nConsider the function $h(t) = -60\\cos(bt) + c$ for some $b, c \\in R$, which models the height above the ground of a pod originally situated at point $A$, after time $t$ minutes.\n\nShow that $b = \\frac{\\pi}{15}$ and $c = 75$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "See marking guide",
            markingGuide: [
                "M1: Period = 30, so $\\frac{2\\pi}{b} = 30 \\Rightarrow b = \\frac{\\pi}{15}$.",
                "A1: At $t=0$ (point $A$), $h(0) = 15$: $-60(1) + c = 15 \\Rightarrow c = 75$."
            ]
        },
        {
            id: 'mm-23-2-q2b',
            number: 'Question 2b',
            text: "Find the average height of a pod on the wheel as it travels from point $A$ to point $B$.\n\nGive your answer in metres, correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "See marking guide",
            markingGuide: [
                "M1: Point $B$ is at the same height as $P$ (centre), to the right. $h = 75$ at $B$, which occurs at $t = 7.5$.",
                "A1: Average $= \\frac{1}{7.5}\\int_0^{7.5} h(t)\\,dt$. Evaluate using CAS."
            ]
        },
        {
            id: 'mm-23-2-q2c',
            number: 'Question 2c',
            text: "Find the average rate of change, in metres per minute, of the height of a pod on the wheel as it travels from point $A$ to point $B$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Average Rate of Change",
            answer: "See marking guide",
            markingGuide: ["$\\frac{h(7.5) - h(0)}{7.5 - 0} = \\frac{75 - 15}{7.5} = 8$ m/min."]
        },
        {
            id: 'mm-23-2-q2di',
            number: 'Question 2d.i',
            text: "After 15 minutes, the wheel stops moving and remains stationary for 5 minutes. After this, it continues moving at double its previous speed for another 7.5 minutes.\n\nThe height above the ground of a pod that was initially at point $A$, after $t$ minutes, can be modelled by the piecewise function $w$:\n\n$$w(t) = \\begin{cases} h(t) & 0 \\le t < 15 \\\\ k & 15 \\le t < 20 \\\\ h(mt + n) & 20 \\le t \\le 27.5 \\end{cases}$$\n\nwhere $k \\ge 0$, $m \\ge 0$ and $n \\in R$.\n\nState the values of $k$ and $m$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Piecewise Functions",
            answer: "$k = h(15) = 75$, $m = 2$",
            markingGuide: ["$k = h(15) = -60\\cos(\\pi) + 75 = 135$. $m = 2$ (double speed)."]
        },
        {
            id: 'mm-23-2-q2dii',
            number: 'Question 2d.ii',
            text: "Find **all** possible values of $n$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Piecewise Functions",
            answer: "See marking guide",
            markingGuide: [
                "M1: Continuity at $t = 20$: $h(2(20) + n) = k = h(15)$. So $h(40 + n) = h(15)$.",
                "A1: $40 + n = 15 + 30j$ for integer $j$, or use symmetry. Find all valid $n$."
            ]
        },
        {
            id: 'mm-23-2-q2diii',
            number: 'Question 2d.iii',
            text: "Sketch the graph of the piecewise function $w$ on the axes below, showing the coordinates of the endpoints.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Piecewise Functions",
            answer: "See marking guide",
            markingGuide: [
                "M1: Graph of $h(t)$ from $t=0$ to $t=15$.",
                "M1: Horizontal line at $w = k$ from $t=15$ to $t=20$.",
                "A1: Graph of $h(2t+n)$ from $t=20$ to $t=27.5$ with correct endpoints labelled."
            ]
        },

        // ----- Question 3 (12 marks) -----
        {
            id: 'mm-23-2-q3a',
            number: 'Question 3a',
            text: "Consider the function $g: R \\to R$, $g(x) = 2^x + 5$.\n\nState the value of $\\lim_{x \\to -\\infty} g(x)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponential Functions",
            answer: "$5$",
            markingGuide: ["As $x \\to -\\infty$, $2^x \\to 0$, so $g(x) \\to 5$."]
        },
        {
            id: 'mm-23-2-q3b',
            number: 'Question 3b',
            text: "The derivative, $g'(x)$, can be expressed in the form $g'(x) = k \\times 2^x$.\n\nFind the real number $k$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$k = \\log_e(2)$",
            markingGuide: ["$g'(x) = 2^x \\ln 2 = \\log_e(2) \\times 2^x$."]
        },
        {
            id: 'mm-23-2-q3ci',
            number: 'Question 3c.i',
            text: "Let $a$ be a real number. Find, in terms of $a$, the equation of the tangent to $g$ at the point $(a, g(a))$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "$y = \\log_e(2) \\cdot 2^a (x - a) + 2^a + 5$",
            markingGuide: ["Tangent: $y - g(a) = g'(a)(x - a)$, where $g(a) = 2^a + 5$ and $g'(a) = 2^a \\ln 2$."]
        },
        {
            id: 'mm-23-2-q3cii',
            number: 'Question 3c.ii',
            text: "Hence, or otherwise, find the equation of the tangent to $g$ that passes through the origin, correct to three decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "See marking guide",
            markingGuide: [
                "M1: Tangent through origin: $0 = \\ln(2) \\cdot 2^a(0-a) + 2^a + 5$. Solve for $a$ using CAS.",
                "A1: Find $a$ and substitute to get equation $y = mx$."
            ]
        },
        {
            id: 'mm-23-2-q3d',
            number: 'Question 3d',
            text: "Let $h: R \\to R$, $h(x) = 2^x - x^2$.\n\nFind the coordinates of the point of inflection for $h$, correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Points of Inflection",
            answer: "See marking guide",
            markingGuide: ["$h''(x) = (\\ln 2)^2 \\cdot 2^x - 2 = 0$. Solve using CAS."]
        },
        {
            id: 'mm-23-2-q3e',
            number: 'Question 3e',
            text: "Find the largest interval of $x$ values for which $h$ is strictly decreasing.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Increasing/Decreasing",
            answer: "See marking guide",
            markingGuide: ["Solve $h'(x) = \\ln(2) \\cdot 2^x - 2x = 0$ using CAS. $h$ is decreasing between the two solutions."]
        },
        {
            id: 'mm-23-2-q3f',
            number: 'Question 3f',
            text: "Apply Newton's method, with an initial estimate of $x_0 = 0$, to find an approximate $x$-intercept of $h$.\n\nWrite the estimates $x_1$, $x_2$ and $x_3$ in the table below, correct to three decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Newton's Method",
            answer: "See marking guide",
            markingGuide: [
                "M1: $x_1 = 0 - h(0)/h'(0) = 0 - (1-0)/(\\ln 2 - 0) = -1/\\ln 2 \\approx -1.443$.",
                "A1: Continue iterating to find $x_2$ and $x_3$."
            ]
        },
        {
            id: 'mm-23-2-q3g',
            number: 'Question 3g',
            text: "For the function $h$, explain why a solution to the equation $\\log_e(2) \\times (2^x) - 2x = 0$ should not be used as an initial estimate $x_0$ in Newton's method.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Newton's Method",
            answer: "See marking guide",
            markingGuide: ["$\\log_e(2) \\cdot 2^x - 2x = 0$ is $h'(x) = 0$, i.e., a stationary point. Using a stationary point as $x_0$ causes division by zero in Newton's formula."]
        },
        {
            id: 'mm-23-2-q3h',
            number: 'Question 3h',
            text: "There is a positive real number $n$ for which the function $f(x) = n^x - x^n$ has a local minimum on the $x$-axis.\n\nFind this value of $n$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "See marking guide",
            markingGuide: [
                "M1: Local min on $x$-axis means $f(a) = 0$ and $f'(a) = 0$ for some $a$. $n^a = a^n$ and $n^a \\ln n = na^{n-1}$.",
                "A1: Solve to find $n$."
            ]
        },

        // ----- Question 4 (15 marks) -----
        {
            id: 'mm-23-2-q4a',
            number: 'Question 4a',
            text: "A manufacturer produces tennis balls.\n\nThe diameter of the tennis balls is a normally distributed random variable $D$, which has a mean of 6.7 cm and a standard deviation of 0.1 cm.\n\nFind $\\Pr(D > 6.8)$, correct to four decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$0.1587$",
            markingGuide: ["$\\Pr(D > 6.8) = \\Pr(Z > 1) \\approx 0.1587$."]
        },
        {
            id: 'mm-23-2-q4b',
            number: 'Question 4b',
            text: "Find the minimum diameter of a tennis ball that is larger than 90% of all tennis balls produced.\n\nGive your answer in centimetres, correct to two decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$6.83$ cm",
            markingGuide: ["$d = 6.7 + 1.2816 \\times 0.1 \\approx 6.83$ cm."]
        },
        {
            id: 'mm-23-2-q4c',
            number: 'Question 4c',
            text: "Tennis balls are packed and sold in cylindrical containers. A tennis ball can fit through the opening at the top of the container if its diameter is smaller than 6.95 cm.\n\nFind the probability that a randomly selected tennis ball can fit through the opening at the top of the container.\n\nGive your answer correct to four decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$0.9938$",
            markingGuide: ["$\\Pr(D < 6.95) = \\Pr(Z < 2.5) \\approx 0.9938$."]
        },
        {
            id: 'mm-23-2-q4d',
            number: 'Question 4d',
            text: "In a random selection of 4 tennis balls, find the probability that at least 3 balls can fit through the opening at the top of the container.\n\nGive your answer correct to four decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "See marking guide",
            markingGuide: [
                "M1: Let $p = \\Pr(D < 6.95)$. $\\Pr(X \\ge 3) = \\binom{4}{3}p^3(1-p) + p^4$.",
                "A1: Evaluate using CAS."
            ]
        },
        {
            id: 'mm-23-2-q4e',
            number: 'Question 4e',
            text: "A tennis ball is classed as grade A if its diameter is between 6.54 cm and 6.86 cm, otherwise it is classed as grade B.\n\nGiven that a tennis ball can fit through the opening at the top of the container, find the probability that it is classed as grade A.\n\nGive your answer correct to four decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "See marking guide",
            markingGuide: [
                "M1: $\\Pr(A \\mid D < 6.95) = \\frac{\\Pr(6.54 < D < 6.86)}{\\Pr(D < 6.95)}$.",
                "A1: Evaluate using CAS."
            ]
        },
        {
            id: 'mm-23-2-q4f',
            number: 'Question 4f',
            text: "The manufacturer would like to improve processes to ensure that more than 99% of all tennis balls produced are classed as grade A.\n\nAssuming that the mean diameter of the tennis balls remains the same, find the required standard deviation of the diameter, in centimetres, correct to two decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "See marking guide",
            markingGuide: [
                "M1: $\\Pr(6.54 < D < 6.86) > 0.99$. By symmetry, need $\\Pr(D < 6.54) < 0.005$.",
                "A1: $\\frac{6.7 - 6.54}{\\sigma} = z_{0.005} \\approx 2.576$. $\\sigma = 0.16/2.576 \\approx 0.06$ cm."
            ]
        },
        {
            id: 'mm-23-2-q4g',
            number: 'Question 4g',
            text: "An inspector takes a random sample of 32 tennis balls from the manufacturer and determines a confidence interval for the population proportion of grade A balls produced.\n\nThe confidence interval is $(0.7382, 0.9493)$, correct to 4 decimal places.\n\nFind the level of confidence that the population proportion of grade A balls is within the interval, as a percentage correct to the nearest integer.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "See marking guide",
            markingGuide: [
                "M1: $\\hat{p} = \\frac{0.7382 + 0.9493}{2} = 0.84375$. Margin $= 0.9493 - 0.84375 = 0.10555$.",
                "A1: $z = \\frac{0.10555}{\\sqrt{0.84375 \\times 0.15625/32}}$. Find confidence level."
            ]
        },
        {
            id: 'mm-23-2-q4h',
            number: 'Question 4h',
            text: "A tennis coach uses both grade A and grade B balls. The serving speed, in metres per second, of a grade A ball is a continuous random variable, $V$, with the probability density function\n\n$$f(v) = \\begin{cases} \\frac{1}{6\\pi}\\sin\\left(\\sqrt{\\frac{v-30}{3}}\\right) & 30 \\le v \\le 3\\pi^2 + 30 \\\\ 0 & \\text{elsewhere} \\end{cases}$$\n\nFind the probability that the serving speed of a grade A ball exceeds 50 metres per second.\n\nGive your answer correct to four decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "See marking guide",
            markingGuide: ["$\\Pr(V > 50) = \\int_{50}^{3\\pi^2+30} f(v)\\,dv$. Evaluate using CAS."]
        },
        {
            id: 'mm-23-2-q4i',
            number: 'Question 4i',
            text: "Find the **exact** mean serving speed for grade A balls, in metres per second.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Expected Value",
            answer: "See marking guide",
            markingGuide: ["$E(V) = \\int_{30}^{3\\pi^2+30} v \\cdot f(v)\\,dv$. Evaluate using CAS."]
        },
        {
            id: 'mm-23-2-q4j',
            number: 'Question 4j',
            text: "The serving speed of a grade B ball is given by a continuous random variable, $W$, with the probability density function $g(w)$.\n\nA transformation maps the graph of $f$ to the graph of $g$, where $g(w) = af\\left(\\frac{w}{b}\\right)$.\n\nIf the mean serving speed for a grade B ball is $2\\pi^2 + 8$ metres per second, find the values of $a$ and $b$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Transformations of PDF",
            answer: "See marking guide",
            markingGuide: [
                "M1: Under transformation $w = bv$, $g(w) = \\frac{1}{b}f(w/b)$, so $a = 1/b$. Mean of $W = b \\times E(V)$.",
                "A1: Use $E(W) = 2\\pi^2 + 8$ to find $b$, then $a = 1/b$."
            ]
        },

        // ----- Question 5 (11 marks) -----
        {
            id: 'mm-23-2-q5a',
            number: 'Question 5a',
            text: "Let $f: R \\to R$, $f(x) = e^x + e^{-x}$ and $g: R \\to R$, $g(x) = \\frac{1}{2}f(2-x)$.\n\nComplete a possible sequence of transformations to map $f$ to $g$.\n\n• Dilation of factor $\\frac{1}{2}$ from the $x$-axis.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "See marking guide",
            markingGuide: [
                "M1: Reflection in the $y$-axis ($x \\to -x$).",
                "A1: Translation 2 units in the positive $x$-direction."
            ]
        },
        {
            id: 'mm-23-2-q5b',
            number: 'Question 5b',
            text: "Two functions $g_1$ and $g_2$ are created, both with the same rule as $g$ but with distinct domains, such that $g_1$ is strictly increasing and $g_2$ is strictly decreasing.\n\nGive the domain and range for the inverse of $g_1$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "See marking guide",
            markingGuide: [
                "M1: $g$ has minimum at $x = 2$ (since $g(x) = \\frac{1}{2}(e^{2-x} + e^{-(2-x)})$). $g_1$ is increasing on $[2, \\infty)$.",
                "A1: Domain of $g_1^{-1}$: $[g(2), \\infty) = [1, \\infty)$. Range of $g_1^{-1}$: $[2, \\infty)$."
            ]
        },
        {
            id: 'mm-23-2-q5ci',
            number: 'Question 5c.i',
            text: "The intersection points between the graphs of $y = x$, $y = g(x)$ and the inverses of $g_1$ and $g_2$, are labelled $P$ and $Q$.\n\nFind the coordinates of $P$ and $Q$, correct to two decimal places.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "See marking guide",
            markingGuide: ["Solve $g(x) = x$ using CAS. The two solutions give $P$ and $Q$."]
        },
        {
            id: 'mm-23-2-q5cii',
            number: 'Question 5c.ii',
            text: "Find the area of the region bound by the graphs of $g$, the inverse of $g_1$ and the inverse of $g_2$.\n\nGive your answer correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "See marking guide",
            markingGuide: [
                "M1: By symmetry about $y = x$, the area equals $2\\int_P^Q |g(x) - x|\\,dx$.",
                "A1: Evaluate using CAS."
            ]
        },
        {
            id: 'mm-23-2-q5d',
            number: 'Question 5d',
            text: "Let $h: R \\to R$, $h(x) = \\frac{1}{k}f(k - x)$, where $k \\in (0, \\infty)$.\n\nThe turning point of $h$ always lies on the graph of the function $y = 2x^n$, where $n$ is an integer.\n\nFind the value of $n$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "See marking guide",
            markingGuide: ["Turning point at $x = k$: $h(k) = \\frac{1}{k}f(0) = \\frac{2}{k}$. So $(k, \\frac{2}{k})$ lies on $y = 2x^n$. $\\frac{2}{k} = 2k^n \\Rightarrow k^{-(1)} = k^n \\Rightarrow n = -1$."]
        },
        {
            id: 'mm-23-2-q5e',
            number: 'Question 5e',
            text: "Let $h_1: [k, \\infty) \\to R$, $h_1(x) = h(x)$.\n\nThe rule for the **inverse** of $h_1$ is $y = \\log_e\\left(\\frac{k}{2}x + \\frac{1}{2}\\sqrt{k^2x^2 - 4}\\right) + k$.\n\nWhat is the smallest value of $k$ such that $h$ will intersect with the inverse of $h_1$?\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "See marking guide",
            markingGuide: ["$h$ intersects $h_1^{-1}$ when $h$ intersects $y = x$ (since inverse reflects in $y=x$). Solve using CAS for smallest $k$."]
        },
        {
            id: 'mm-23-2-q5f',
            number: 'Question 5f',
            text: "It is possible for the graphs of $h$ and the inverse of $h_1$ to intersect twice. This occurs when $k = 5$.\n\nFind the area of the region bound by the graphs of $h$ and the inverse of $h_1$, when $k = 5$.\n\nGive your answer correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "See marking guide",
            markingGuide: [
                "M1: Find the two intersection points of $h$ and $h_1^{-1}$ when $k=5$ using CAS.",
                "A1: Area $= 2\\int_a^b |h(x) - x|\\,dx$ by symmetry about $y=x$. Evaluate using CAS."
            ]
        }
    ]
};
