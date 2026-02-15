import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2022_EXAM2: ExamPaper = {
    id: 'mm-2022-exam2',
    year: 2022,
    subject: Subject.METHODS,
    title: "Exam 2 (Tech-Active)",
    questions: [
        // =====================================================================
        // SECTION A: Multiple Choice (20 Questions, 1 mark each)
        // =====================================================================
        {
            id: 'mm-22-2-mc1',
            number: 'Question 1',
            text: "The period of the function $f(x) = 3\\cos(2x + \\pi)$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "B",
            markingGuide: ["Period $= \\frac{2\\pi}{2} = \\pi$."],
            options: [
                { label: "A", text: "$2\\pi$" },
                { label: "B", text: "$\\pi$" },
                { label: "C", text: "$\\frac{2\\pi}{3}$" },
                { label: "D", text: "$2$" },
                { label: "E", text: "$3$" }
            ]
        },
        {
            id: 'mm-22-2-mc2',
            number: 'Question 2',
            text: "The graph of $y = \\frac{1}{(x+3)^2} + 4$ has a horizontal asymptote with the equation",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Asymptotes",
            answer: "A",
            markingGuide: ["As $x \\to \\pm\\infty$, $\\frac{1}{(x+3)^2} \\to 0$, so $y \\to 4$."],
            options: [
                { label: "A", text: "$y = 4$" },
                { label: "B", text: "$y = 3$" },
                { label: "C", text: "$y = 0$" },
                { label: "D", text: "$x = -2$" },
                { label: "E", text: "$x = -3$" }
            ]
        },
        {
            id: 'mm-22-2-mc3',
            number: 'Question 3',
            text: "The gradient of the graph of $y = e^{3x}$ at the point where the graph crosses the vertical axis is equal to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "E",
            markingGuide: ["$\\frac{dy}{dx} = 3e^{3x}$. At $x = 0$: $\\frac{dy}{dx} = 3e^0 = 3$."],
            options: [
                { label: "A", text: "$0$" },
                { label: "B", text: "$\\frac{1}{e}$" },
                { label: "C", text: "$1$" },
                { label: "D", text: "$e$" },
                { label: "E", text: "$3$" }
            ]
        },
        {
            id: 'mm-22-2-mc4',
            number: 'Question 4',
            text: "Which one of the following functions is not continuous over the interval $x \\in [0, 5]$?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Continuity",
            answer: "D",
            markingGuide: ["$\\tan\\left(\\frac{x}{3}\\right)$ has a vertical asymptote at $x = \\frac{3\\pi}{2} \\approx 4.71$, which is in $[0, 5]$."],
            options: [
                { label: "A", text: "$f(x) = \\frac{1}{(x+3)^2}$" },
                { label: "B", text: "$f(x) = \\sqrt{x+3}$" },
                { label: "C", text: "$f(x) = x^{\\frac{1}{3}}$" },
                { label: "D", text: "$f(x) = \\tan\\left(\\frac{x}{3}\\right)$" },
                { label: "E", text: "$f(x) = \\sin^2\\left(\\frac{x}{3}\\right)$" }
            ]
        },
        {
            id: 'mm-22-2-mc5',
            number: 'Question 5',
            text: "The largest value of $a$ such that the function $f: (-\\infty, a] \\to R$, $f(x) = x^2 + 3x - 10$, where $f$ is one-to-one, is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "C",
            markingGuide: ["Vertex at $x = -\\frac{3}{2} = -1.5$. For one-to-one on $(-\\infty, a]$, need $a \\le -1.5$. Largest value is $a = -1.5$."],
            options: [
                { label: "A", text: "$-12.25$" },
                { label: "B", text: "$-5$" },
                { label: "C", text: "$-1.5$" },
                { label: "D", text: "$0$" },
                { label: "E", text: "$2$" }
            ]
        },
        {
            id: 'mm-22-2-mc6',
            number: 'Question 6',
            text: "Which of the pairs of functions below are **not** inverse functions?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "C",
            markingGuide: ["C: $f(x) = x^2$ for $x < 0$ and $g(x) = \\sqrt{x}$ for $x > 0$. The inverse of $f(x) = x^2, x < 0$ is $g(x) = -\\sqrt{x}$, not $\\sqrt{x}$."],
            options: [
                { label: "A", text: "$f(x) = 5x + 3,\\; x \\in R$ and $g(x) = \\frac{x-3}{5},\\; x \\in R$" },
                { label: "B", text: "$f(x) = \\frac{2}{3}x + 2,\\; x \\in R$ and $g(x) = \\frac{3}{2}x - 3,\\; x \\in R$" },
                { label: "C", text: "$f(x) = x^2,\\; x < 0$ and $g(x) = \\sqrt{x},\\; x > 0$" },
                { label: "D", text: "$f(x) = \\frac{1}{x},\\; x \\ne 0$ and $g(x) = \\frac{1}{x},\\; x \\ne 0$" },
                { label: "E", text: "$f(x) = \\log_e(x) + 1,\\; x > 0$ and $g(x) = e^{x-1},\\; x \\in R$" }
            ]
        },
        {
            id: 'mm-22-2-mc7',
            number: 'Question 7',
            text: "The graph of $y = f(x)$ is shown (a curve with a local minimum to the left of the y-axis and a local maximum to the right, with an inflection point near the origin). The graph of $y = f'(x)$, the first derivative of $f(x)$ with respect to $x$, could be",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivative Graphs",
            answer: "E",
            markingGuide: ["The original function has a local min (left) and local max (right), so $f'(x) = 0$ at two points, positive between them. Graph E shows a positive hump crossing zero at both turning points, consistent with a cubic-like derivative."],
            options: [
                { label: "A", text: "Graph A (positive hump then dip, zeros at two points)" },
                { label: "B", text: "Graph B (tall positive hump, one zero)" },
                { label: "C", text: "Graph C (negative dip then positive, two zeros)" },
                { label: "D", text: "Graph D (vertical asymptote shape)" },
                { label: "E", text: "Graph E (starts positive, crosses to negative, single smooth curve)" }
            ]
        },
        {
            id: 'mm-22-2-mc8',
            number: 'Question 8',
            text: "If $\\int_0^b f(x)\\,dx = 10$ and $\\int_0^a f(x)\\,dx = -4$, where $0 < a < b$, then $\\int_a^b f(x)\\,dx$ is equal to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "E",
            markingGuide: ["$\\int_a^b f(x)\\,dx = \\int_0^b f(x)\\,dx - \\int_0^a f(x)\\,dx = 10 - (-4) = 14$."],
            options: [
                { label: "A", text: "$-6$" },
                { label: "B", text: "$-4$" },
                { label: "C", text: "$0$" },
                { label: "D", text: "$10$" },
                { label: "E", text: "$14$" }
            ]
        },
        {
            id: 'mm-22-2-mc9',
            number: 'Question 9',
            text: "Let $f: [0, \\infty) \\to R$, $f(x) = \\sqrt{2x + 1}$.\n\nThe shortest distance, $d$, from the origin to the point $(x, y)$ on the graph of $f$ is given by",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Distance Optimisation",
            answer: "D",
            markingGuide: ["$d = \\sqrt{x^2 + y^2} = \\sqrt{x^2 + 2x + 1} = \\sqrt{(x+1)^2} = x + 1$ (since $x \\ge 0$)."],
            options: [
                { label: "A", text: "$d = x^2 + 2x + 1$" },
                { label: "B", text: "$d = x^2 + \\sqrt{2x + 1}$" },
                { label: "C", text: "$d = \\sqrt{x^2 - 2x + 1}$" },
                { label: "D", text: "$d = x + 1$" },
                { label: "E", text: "$d = 2x + 1$" }
            ]
        },
        {
            id: 'mm-22-2-mc10',
            number: 'Question 10',
            text: "An organisation randomly surveyed 1000 Australian adults and found that 55% of those surveyed were happy with their level of physical activity.\n\nAn approximate 95% confidence interval for the percentage of Australian adults who were happy with their level of physical activity is closest to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "D",
            markingGuide: ["$\\hat{p} = 0.55$, $n = 1000$. $E = 1.96\\sqrt{\\frac{0.55 \\times 0.45}{1000}} \\approx 0.0308$.", "CI: $(0.55 - 0.031, 0.55 + 0.031) \\approx (0.519, 0.581)$, as percentage $(51.9, 58.1)$."],
            options: [
                { label: "A", text: "$(4.1, 6.9)$" },
                { label: "B", text: "$(50.9, 59.1)$" },
                { label: "C", text: "$(52.4, 57.6)$" },
                { label: "D", text: "$(51.9, 58.1)$" },
                { label: "E", text: "$(45.2, 64.8)$" }
            ]
        },
        {
            id: 'mm-22-2-mc11',
            number: 'Question 11',
            text: "If $\\frac{d}{dx}(x \\cdot \\sin(x)) = \\sin(x) + x \\cdot \\cos(x)$, then $\\frac{1}{k}\\int x\\cos(x)\\,dx$ is equal to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Antidifferentiation",
            answer: "C",
            markingGuide: ["From the product rule: $x\\cos(x) = \\frac{d}{dx}(x\\sin(x)) - \\sin(x)$.", "$\\int x\\cos(x)\\,dx = x\\sin(x) - \\int \\sin(x)\\,dx + c$.", "So $\\frac{1}{k}\\int x\\cos(x)\\,dx = \\frac{1}{k}\\left(x\\sin(x) - \\int \\sin(x)\\,dx\\right) + c$."],
            options: [
                { label: "A", text: "$k\\left(x\\sin(x) - \\int \\sin(x)\\,dx\\right) + c$" },
                { label: "B", text: "$\\frac{1}{k}x\\sin(x) - \\int \\sin(x)\\,dx + c$" },
                { label: "C", text: "$\\frac{1}{k}\\left(x\\sin(x) - \\int \\sin(x)\\,dx\\right) + c$" },
                { label: "D", text: "$\\frac{1}{k}(x\\sin(x) - \\sin(x)) + c$" },
                { label: "E", text: "$\\frac{1}{k}\\left(\\int x\\sin(x)\\,dx - \\int \\sin(x)\\,dx\\right) + c$" }
            ]
        },
        {
            id: 'mm-22-2-mc12',
            number: 'Question 12',
            text: "A bag contains three red pens and $x$ black pens. Two pens are randomly drawn from the bag without replacement.\n\nThe probability of drawing a pen of each colour is equal to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Combinatorics",
            answer: "A",
            markingGuide: ["Total pens: $3 + x$. $P = \\frac{\\binom{3}{1}\\binom{x}{1}}{\\binom{3+x}{2}} = \\frac{3x}{\\frac{(3+x)(2+x)}{2}} = \\frac{6x}{(2+x)(3+x)}$."],
            options: [
                { label: "A", text: "$\\frac{6x}{(2+x)(3+x)}$" },
                { label: "B", text: "$\\frac{3x}{(2+x)(3+x)}$" },
                { label: "C", text: "$\\frac{x}{2+x}$" },
                { label: "D", text: "$\\frac{3+x}{(2+x)(3+x)}$" },
                { label: "E", text: "$\\frac{3+x}{5+2x}$" }
            ]
        },
        {
            id: 'mm-22-2-mc13',
            number: 'Question 13',
            text: "The function $f(x) = \\log_e\\left(\\frac{x+a}{x-a}\\right)$, where $a$ is a positive real constant, has the maximal domain",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Domain of Logarithmic Functions",
            answer: "C",
            markingGuide: ["Need $\\frac{x+a}{x-a} > 0$. Both factors same sign: $x > a$ or $x < -a$. Domain is $R \\setminus [-a, a]$."],
            options: [
                { label: "A", text: "$[-a, a]$" },
                { label: "B", text: "$(-a, a)$" },
                { label: "C", text: "$R \\setminus [-a, a]$" },
                { label: "D", text: "$R \\setminus (-a, a)$" },
                { label: "E", text: "$R$" }
            ]
        },
        {
            id: 'mm-22-2-mc14',
            number: 'Question 14',
            text: "A continuous random variable, $X$, has a probability density function given by\n\n$$f(x) = \\begin{cases} \\frac{2}{9}xe^{-\\frac{1}{9}x^2} & x \\ge 0 \\\\ 0 & x < 0 \\end{cases}$$\n\nThe expected value of $X$, correct to three decimal places, is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "B",
            markingGuide: ["$E(X) = \\int_0^{\\infty} x \\cdot \\frac{2}{9}xe^{-\\frac{1}{9}x^2}\\,dx = \\int_0^{\\infty} \\frac{2}{9}x^2 e^{-\\frac{1}{9}x^2}\\,dx \\approx 2.659$."],
            options: [
                { label: "A", text: "$1.000$" },
                { label: "B", text: "$2.659$" },
                { label: "C", text: "$3.730$" },
                { label: "D", text: "$6.341$" },
                { label: "E", text: "$9.000$" }
            ]
        },
        {
            id: 'mm-22-2-mc15',
            number: 'Question 15',
            text: "The maximal domain of the function with rule $f(x) = \\sqrt{x^2 - 2x - 3}$ is given by",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Domain",
            answer: "E",
            markingGuide: ["Need $x^2 - 2x - 3 \\ge 0$, i.e. $(x-3)(x+1) \\ge 0$. Solution: $x \\le -1$ or $x \\ge 3$. Domain: $(-\\infty, -1] \\cup [3, \\infty)$."],
            options: [
                { label: "A", text: "$(-\\infty, \\infty)$" },
                { label: "B", text: "$(-\\infty, -3) \\cup (1, \\infty)$" },
                { label: "C", text: "$(-1, 3)$" },
                { label: "D", text: "$[-3, 1]$" },
                { label: "E", text: "$(-\\infty, -1] \\cup [3, \\infty)$" }
            ]
        },
        {
            id: 'mm-22-2-mc16',
            number: 'Question 16',
            text: "The function $f(x) = \\frac{1}{3}x^3 + mx^2 + nx + p$, for $m, n, p \\in R$, has turning points at $x = -3$ and $x = 1$ and passes through the point $(3, 4)$.\n\nThe values of $m$, $n$ and $p$ respectively are",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Cubic Functions",
            answer: "B",
            markingGuide: ["$f'(x) = x^2 + 2mx + n$. Turning points at $x = -3$ and $x = 1$: $f'(x) = (x+3)(x-1) = x^2 + 2x - 3$.", "So $2m = 2 \\Rightarrow m = 1$ and $n = -3$.", "$f(3) = 9 + 9 - 9 + p = 4 \\Rightarrow p = -5$."],
            options: [
                { label: "A", text: "$m = 0,\\; n = -\\frac{7}{3},\\; p = 2$" },
                { label: "B", text: "$m = 1,\\; n = -3,\\; p = -5$" },
                { label: "C", text: "$m = -1,\\; n = -3,\\; p = 13$" },
                { label: "D", text: "$m = \\frac{5}{4},\\; n = \\frac{3}{2},\\; p = -\\frac{83}{4}$" },
                { label: "E", text: "$m = \\frac{5}{2},\\; n = 6,\\; p = -\\frac{91}{2}$" }
            ]
        },
        {
            id: 'mm-22-2-mc17',
            number: 'Question 17',
            text: "A function $g$ is continuous on the domain $x \\in [a, b]$ and has the following properties:\n\n• The average rate of change of $g$ between $x = a$ and $x = b$ is positive.\n• The instantaneous rate of change of $g$ at $x = \\frac{a+b}{2}$ is negative.\n\nTherefore, on the interval $x \\in [a, b]$, the function must be",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Rates of Change",
            answer: "A",
            markingGuide: ["$g(b) > g(a)$ (positive average rate), but $g'\\left(\\frac{a+b}{2}\\right) < 0$ (decreasing at midpoint). The function increases overall but decreases somewhere in between, so it must be many-to-one."],
            options: [
                { label: "A", text: "many-to-one." },
                { label: "B", text: "one-to-many." },
                { label: "C", text: "one-to-one." },
                { label: "D", text: "strictly decreasing." },
                { label: "E", text: "strictly increasing." }
            ]
        },
        {
            id: 'mm-22-2-mc18',
            number: 'Question 18',
            text: "If $X$ is a binomial random variable where $n = 20$, $p = 0.88$ and $\\Pr(X \\ge 16 \\mid X \\ge a) = 0.9175$, correct to four decimal places, then $a$ is equal to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "B",
            markingGuide: ["$\\Pr(X \\ge 16 \\mid X \\ge a) = \\frac{\\Pr(X \\ge 16)}{\\Pr(X \\ge a)} = 0.9175$ (since $a < 16$).", "Use CAS to find $\\Pr(X \\ge 16)$ and solve for $a$. $a = 12$."],
            options: [
                { label: "A", text: "$11$" },
                { label: "B", text: "$12$" },
                { label: "C", text: "$13$" },
                { label: "D", text: "$14$" },
                { label: "E", text: "$15$" }
            ]
        },
        {
            id: 'mm-22-2-mc19',
            number: 'Question 19',
            text: "A box is formed from a rectangular sheet of cardboard, which has a width of $a$ units and a length of $b$ units, by first cutting out squares of side length $x$ units from each corner and then folding upwards to form a container with an open top.\n\nThe maximum volume of the box occurs when $x$ is equal to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "D",
            markingGuide: ["$V = x(a-2x)(b-2x)$. $V' = 12x^2 - 4(a+b)x + ab = 0$.", "$x = \\frac{4(a+b) \\pm \\sqrt{16(a+b)^2 - 48ab}}{24} = \\frac{a+b \\pm \\sqrt{a^2 - ab + b^2}}{6}$.", "Maximum at the smaller root: $x = \\frac{a+b - \\sqrt{a^2 - ab + b^2}}{6}$."],
            options: [
                { label: "A", text: "$\\frac{a - b + \\sqrt{a^2 - ab + b^2}}{6}$" },
                { label: "B", text: "$\\frac{a + b + \\sqrt{a^2 - ab + b^2}}{6}$" },
                { label: "C", text: "$\\frac{a - b - \\sqrt{a^2 - ab + b^2}}{6}$" },
                { label: "D", text: "$\\frac{a + b - \\sqrt{a^2 - ab + b^2}}{6}$" },
                { label: "E", text: "$\\frac{a + b - \\sqrt{a^2 - 2ab + b^2}}{6}$" }
            ]
        },
        {
            id: 'mm-22-2-mc20',
            number: 'Question 20',
            text: "A soccer player kicks a ball with an angle of elevation of $\\theta°$, where $\\theta$ is a normally distributed random variable with a mean of $42°$ and a standard deviation of $8°$.\n\nThe horizontal distance that the ball travels before landing is given by the function $d = 50\\sin(2\\theta)$.\n\nThe probability that the ball travels more than 40 m horizontally before landing is closest to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "A",
            markingGuide: ["Solve $50\\sin(2\\theta) > 40$, i.e. $\\sin(2\\theta) > 0.8$.", "$2\\theta > \\sin^{-1}(0.8) \\approx 53.13°$ or $2\\theta < 180° - 53.13° = 126.87°$.", "So $26.57° < \\theta < 63.43°$.", "$\\Pr(26.57 < \\theta < 63.43)$ where $\\theta \\sim N(42, 8^2)$.", "Using CAS: $\\approx 0.969$."],
            options: [
                { label: "A", text: "$0.969$" },
                { label: "B", text: "$0.937$" },
                { label: "C", text: "$0.226$" },
                { label: "D", text: "$0.149$" },
                { label: "E", text: "$0.027$" }
            ]
        },

        // =====================================================================
        // SECTION B: Extended Response (5 Questions, 60 marks total)
        // =====================================================================

        // ----- Question 1 (11 marks) -----
        {
            id: 'mm-22-2-q1a',
            number: 'Question 1a',
            text: "The diagram shows part of the graph of $y = f(x)$, where $f(x) = \\frac{x^2}{12}$.\n\nState the equation of the axis of symmetry of the graph of $f$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Quadratics",
            answer: "$x = 0$",
            markingGuide: ["The parabola $f(x) = \\frac{x^2}{12}$ is symmetric about the y-axis. Axis of symmetry: $x = 0$."]
        },
        {
            id: 'mm-22-2-q1b',
            number: 'Question 1b',
            text: "State the derivative of $f$ with respect to $x$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$f'(x) = \\frac{x}{6}$",
            markingGuide: ["$f'(x) = \\frac{2x}{12} = \\frac{x}{6}$."]
        },
        {
            id: 'mm-22-2-q1c',
            number: 'Question 1c',
            text: "The tangent to $f$ at point $M$ has gradient $-2$.\n\nFind the equation of the tangent to $f$ at point $M$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "$y = -2x - 12$",
            markingGuide: [
                "M1: Find x-coordinate: $f'(x) = -2 \\Rightarrow \\frac{x}{6} = -2 \\Rightarrow x = -12$.",
                "A1: $f(-12) = \\frac{144}{12} = 12$. Tangent: $y - 12 = -2(x + 12) \\Rightarrow y = -2x - 12$."
            ]
        },
        {
            id: 'mm-22-2-q1di',
            number: 'Question 1d.i',
            text: "Find the equation of the line perpendicular to the tangent passing through point $M$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Perpendicular Lines",
            answer: "$y = \\frac{1}{2}x + 18$",
            markingGuide: ["Perpendicular gradient: $\\frac{1}{2}$. Through $M(-12, 12)$: $y - 12 = \\frac{1}{2}(x + 12) \\Rightarrow y = \\frac{1}{2}x + 18$."]
        },
        {
            id: 'mm-22-2-q1dii',
            number: 'Question 1d.ii',
            text: "The line perpendicular to the tangent at point $M$ also cuts $f$ at point $N$.\n\nFind the area enclosed by this line and the curve $y = f(x)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\frac{10976}{9} \\approx 1219.6$",
            markingGuide: [
                "M1: Find intersection: $\\frac{x^2}{12} = \\frac{1}{2}x + 18 \\Rightarrow x^2 - 6x - 216 = 0 \\Rightarrow (x+12)(x-18) = 0$. $N$ at $x = 18$.",
                "A1: Area $= \\int_{-12}^{18}\\left(\\frac{1}{2}x + 18 - \\frac{x^2}{12}\\right)dx$."
            ]
        },
        {
            id: 'mm-22-2-q1e',
            number: 'Question 1e',
            text: "Another parabola is defined by the rule $g(x) = \\frac{x^2}{4a^2}$, where $a > 0$.\n\nA tangent to $g$ and the line perpendicular to the tangent at $x = -b$, where $b > 0$, are shown.\n\nFind the value of $b$, in terms of $a$, such that the shaded area is a minimum.",
            marks: 4,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$b = a\\sqrt[3]{2}$",
            markingGuide: [
                "M1: $g'(x) = \\frac{x}{2a^2}$. At $x = -b$: gradient $= -\\frac{b}{2a^2}$, perpendicular gradient $= \\frac{2a^2}{b}$.",
                "M1: Find intersection of perpendicular line with $g(x)$, set up area integral.",
                "M1: Express area as a function of $b$ and differentiate.",
                "A1: $b = a\\sqrt[3]{2}$."
            ]
        },

        // ----- Question 2 (16 marks) -----
        {
            id: 'mm-22-2-q2ai',
            number: 'Question 2a.i',
            text: "On a remote island, there are only two species of animals: foxes and rabbits. The populations increase and decrease in a periodic pattern.\n\nThe population of rabbits can be modelled by the rule $r(t) = 1700\\sin\\left(\\frac{\\pi t}{80}\\right) + 2500$.\n\nOne point of minimum fox population, $(20, 700)$, and one point of maximum fox population, $(100, 2500)$, are shown on the graph.\n\nState the initial population of rabbits.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$2500$",
            markingGuide: ["$r(0) = 1700\\sin(0) + 2500 = 2500$."]
        },
        {
            id: 'mm-22-2-q2aii',
            number: 'Question 2a.ii',
            text: "State the minimum and maximum population of rabbits.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "Min: $800$, Max: $4200$",
            markingGuide: ["Min $= 2500 - 1700 = 800$. Max $= 2500 + 1700 = 4200$."]
        },
        {
            id: 'mm-22-2-q2aiii',
            number: 'Question 2a.iii',
            text: "State the number of weeks between maximum populations of rabbits.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$160$",
            markingGuide: ["Period $= \\frac{2\\pi}{\\pi/80} = 160$ weeks."]
        },
        {
            id: 'mm-22-2-q2b',
            number: 'Question 2b',
            text: "The population of foxes can be modelled by the rule $f(t) = a\\sin\\left(\\frac{\\pi}{60}(t - b)\\right) + 1600$.\n\nShow that $a = 900$ and $b = 80$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "See marking guide",
            markingGuide: [
                "M1: From graph: min fox pop = 700, max = 2500. Mean $= \\frac{700+2500}{2} = 1600$ ✓. Amplitude $a = 2500 - 1600 = 900$.",
                "A1: Period same as rabbits = 160 weeks, so $\\frac{2\\pi}{\\pi/60} = 120$... Actually from graph, period $= 2 \\times (100 - 20) = 160$. Min at $t = 20$: $\\sin\\left(\\frac{\\pi}{60}(20 - b)\\right) = -1 \\Rightarrow \\frac{\\pi(20-b)}{60} = -\\frac{\\pi}{2} \\Rightarrow 20 - b = -30$... Alternatively, max at $t=100$, min at $t=20$. $b = 80$."
            ]
        },
        {
            id: 'mm-22-2-q2c',
            number: 'Question 2c',
            text: "Find the maximum combined population of foxes and rabbits. Give your answer correct to the nearest whole number.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Optimisation",
            answer: "$5339$",
            markingGuide: ["Using CAS, maximise $r(t) + f(t)$. Maximum combined population $\\approx 5339$."]
        },
        {
            id: 'mm-22-2-q2d',
            number: 'Question 2d',
            text: "What is the number of weeks between the periods when the combined population of foxes and rabbits is a maximum?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Periodicity",
            answer: "$160$",
            markingGuide: ["Both populations have the same period of 160 weeks, so the combined population also has period 160 weeks."]
        },
        {
            id: 'mm-22-2-q2e',
            number: 'Question 2e',
            text: "The population of foxes is better modelled by the transformation of $y = \\sin(t)$ under $Q$ given by\n\n$$Q: \\begin{pmatrix} t \\\\ y \\end{pmatrix} \\mapsto \\begin{pmatrix} \\frac{90}{\\pi} & 0 \\\\ 0 & 900 \\end{pmatrix} \\begin{pmatrix} t \\\\ y \\end{pmatrix} + \\begin{pmatrix} 60 \\\\ 1600 \\end{pmatrix}$$\n\nFind the average population during the first 300 weeks for the combined population of foxes and rabbits, where the population of foxes is modelled by the transformation of $y = \\sin(t)$ under the transformation $Q$. Give your answer correct to the nearest whole number.",
            marks: 4,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "$4100$ (to nearest whole number)",
            markingGuide: [
                "M1: Under transformation $Q$: $t_{new} = \\frac{90}{\\pi}t + 60$, $y_{new} = 900y + 1600$.",
                "So fox model becomes $f(t) = 900\\sin\\left(\\frac{\\pi(t-60)}{90}\\right) + 1600$.",
                "M1: Combined population $= r(t) + f(t) = 1700\\sin\\left(\\frac{\\pi t}{80}\\right) + 2500 + 900\\sin\\left(\\frac{\\pi(t-60)}{90}\\right) + 1600$.",
                "M1: Average $= \\frac{1}{300}\\int_0^{300}(r(t) + f(t))\\,dt$.",
                "A1: Evaluate using CAS $\\approx 4100$."
            ]
        },
        {
            id: 'mm-22-2-q2f',
            number: 'Question 2f',
            text: "Over a longer period of time, it is found that the increase and decrease in the population of rabbits gets smaller and smaller.\n\nThe population of rabbits over a longer period of time can be modelled by the rule\n$$s(t) = 1700e^{-0.003t}\\sin\\left(\\frac{\\pi t}{80}\\right) + 2500, \\quad \\text{for all } t \\ge 0$$\n\nFind the average rate of change between the first two times when the population of rabbits is at a maximum. Give your answer correct to one decimal place.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Average Rate of Change",
            answer: "$-3.0$",
            markingGuide: [
                "M1: Find the first two maximum points of $s(t)$ using CAS (e.g., $t_1 \\approx 40$, $t_2 \\approx 200$, or solve $s'(t) = 0$).",
                "A1: Average rate of change $= \\frac{s(t_2) - s(t_1)}{t_2 - t_1} \\approx -3.0$."
            ]
        },
        {
            id: 'mm-22-2-q2g',
            number: 'Question 2g',
            text: "Find the time, where $t > 40$, in weeks, when the rate of change of the rabbit population is at its greatest positive value. Give your answer correct to the nearest whole number.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Rates of Change",
            answer: "$t \\approx 156$ weeks",
            markingGuide: [
                "M1: Find $s'(t)$ and maximise it for $t > 40$ using CAS.",
                "A1: $t \\approx 156$ weeks."
            ]
        },
        {
            id: 'mm-22-2-q2h',
            number: 'Question 2h',
            text: "Over time, the rabbit population approaches a particular value.\n\nState this value.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Limiting Behaviour",
            answer: "$2500$",
            markingGuide: ["As $t \\to \\infty$, $e^{-0.003t} \\to 0$, so $s(t) \\to 2500$."]
        },

        // ----- Question 3 (14 marks) -----
        {
            id: 'mm-22-2-q3ai',
            number: 'Question 3a.i',
            text: "Mika is flipping a coin. The unbiased coin has a probability of $\\frac{1}{2}$ of landing on heads and $\\frac{1}{2}$ of landing on tails.\n\nLet $X$ be the binomial random variable representing the number of times that the coin lands on heads.\n\nMika flips the coin five times.\n\nFind $\\Pr(X = 5)$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\frac{1}{32}$",
            markingGuide: ["$\\Pr(X = 5) = \\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$."]
        },
        {
            id: 'mm-22-2-q3aii',
            number: 'Question 3a.ii',
            text: "Find $\\Pr(X \\ge 2)$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\frac{13}{16}$",
            markingGuide: ["$\\Pr(X \\ge 2) = 1 - \\Pr(X=0) - \\Pr(X=1) = 1 - \\frac{1}{32} - \\frac{5}{32} = \\frac{26}{32} = \\frac{13}{16}$."]
        },
        {
            id: 'mm-22-2-q3aiii',
            number: 'Question 3a.iii',
            text: "Find $\\Pr(X \\ge 2 \\mid X < 5)$, correct to three decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "$0.806$",
            markingGuide: [
                "M1: $\\Pr(X \\ge 2 \\mid X < 5) = \\frac{\\Pr(2 \\le X < 5)}{\\Pr(X < 5)} = \\frac{\\Pr(X \\ge 2) - \\Pr(X = 5)}{1 - \\Pr(X = 5)}$.",
                "A1: $= \\frac{\\frac{13}{16} - \\frac{1}{32}}{1 - \\frac{1}{32}} = \\frac{\\frac{25}{32}}{\\frac{31}{32}} = \\frac{25}{31} \\approx 0.806$."
            ]
        },
        {
            id: 'mm-22-2-q3aiv',
            number: 'Question 3a.iv',
            text: "Find the expected value and the standard deviation for $X$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$E(X) = \\frac{5}{2}$, $\\text{SD}(X) = \\frac{\\sqrt{5}}{2}$",
            markingGuide: [
                "M1: $E(X) = np = 5 \\times \\frac{1}{2} = \\frac{5}{2}$.",
                "A1: $\\text{Var}(X) = np(1-p) = \\frac{5}{4}$. $\\text{SD}(X) = \\sqrt{\\frac{5}{4}} = \\frac{\\sqrt{5}}{2}$."
            ]
        },
        {
            id: 'mm-22-2-q3bi',
            number: 'Question 3b.i',
            text: "The height reached by each of Mika's coin flips is given by a continuous random variable, $H$, with the probability density function\n\n$$f(h) = \\begin{cases} ah^2 + bh + c & 1.5 \\le h \\le 3 \\\\ 0 & \\text{elsewhere} \\end{cases}$$\n\nwhere $h$ is the vertical height reached by the coin flip, in metres, between the coin and the floor, and $a$, $b$ and $c$ are real constants.\n\nState the value of the definite integral $\\int_{1.5}^{3} f(h)\\,dh$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "$1$",
            markingGuide: ["Total area under a PDF is 1."]
        },
        {
            id: 'mm-22-2-q3bii',
            number: 'Question 3b.ii',
            text: "Given that $\\Pr(H \\le 2) = 0.35$ and $\\Pr(H \\ge 2.5) = 0.25$, find the values of $a$, $b$ and $c$.",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "$a = \\frac{16}{15}$, $b = -\\frac{16}{3}$, $c = \\frac{32}{5}$",
            markingGuide: [
                "M1: Set up three equations: $\\int_{1.5}^{3}(ah^2 + bh + c)\\,dh = 1$, $\\int_{1.5}^{2}(ah^2 + bh + c)\\,dh = 0.35$, $\\int_{2.5}^{3}(ah^2 + bh + c)\\,dh = 0.25$.",
                "M1: Solve the system of three equations in three unknowns.",
                "A1: $a = \\frac{16}{15}$, $b = -\\frac{16}{3}$, $c = \\frac{32}{5}$."
            ]
        },
        {
            id: 'mm-22-2-q3biii',
            number: 'Question 3b.iii',
            text: "The ceiling of Mika's room is 3 m above the floor. The minimum distance between the coin and the ceiling is a continuous random variable, $D$, with probability density function $g$.\n\nThe function $g$ is a transformation of the function $f$ given by $g(d) = f(rd + s)$, where $d$ is the minimum distance between the coin and the ceiling, and $r$ and $s$ are real constants.\n\nFind the values of $r$ and $s$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Transformations",
            answer: "$r = -1$, $s = 3$",
            markingGuide: ["If ceiling is 3 m, then $d = 3 - h$, so $h = 3 - d = -d + 3$. Hence $g(d) = f(-d + 3) = f(-1 \\cdot d + 3)$, so $r = -1$, $s = 3$."]
        },
        {
            id: 'mm-22-2-q3ci',
            number: 'Question 3c.i',
            text: "Mika's sister Bella also has a coin. On each flip, Bella's coin has a probability of $p$ of landing on heads and $(1-p)$ of landing on tails, where $p$ is a constant value between 0 and 1.\n\nBella flips her coin 25 times in order to estimate $p$.\n\nLet $\\hat{P}$ be the random variable representing the proportion of times that Bella's coin lands on heads in her sample.\n\nIs the random variable $\\hat{P}$ discrete or continuous? Justify your answer.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Sample Proportions",
            answer: "Discrete",
            markingGuide: ["Discrete, because $\\hat{P} = \\frac{X}{25}$ where $X$ can only take integer values 0, 1, 2, ..., 25. So $\\hat{P}$ can only take a countable number of values."]
        },
        {
            id: 'mm-22-2-q3cii',
            number: 'Question 3c.ii',
            text: "If $\\hat{p} = 0.4$, find an approximate 95% confidence interval for $p$, correct to three decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "$(0.208, 0.592)$",
            markingGuide: ["$CI = 0.4 \\pm 1.96\\sqrt{\\frac{0.4 \\times 0.6}{25}} = 0.4 \\pm 1.96 \\times 0.09798 = 0.4 \\pm 0.192 = (0.208, 0.592)$."]
        },
        {
            id: 'mm-22-2-q3ciii',
            number: 'Question 3c.iii',
            text: "Bella knows that she can decrease the width of a 95% confidence interval by using a larger sample of coin flips.\n\nIf $\\hat{p} = 0.4$, how many coin flips would be required to halve the width of the confidence interval found in part c.ii.?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "$100$",
            markingGuide: ["To halve the width, need to multiply $n$ by 4 (since width $\\propto \\frac{1}{\\sqrt{n}}$). $4 \\times 25 = 100$."]
        },

        // ----- Question 4 (10 marks) -----
        {
            id: 'mm-22-2-q4a',
            number: 'Question 4a',
            text: "Consider the function $f$, where $f: \\left(-\\frac{1}{2}, \\frac{1}{2}\\right) \\to R$, $f(x) = \\log_e\\left(\\frac{\\frac{1}{2} + x}{\\frac{1}{2} - x}\\right)$.\n\nState the range of $f(x)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Functions",
            answer: "$R$",
            markingGuide: ["As $x \\to \\frac{1}{2}^-$, $f(x) \\to +\\infty$. As $x \\to -\\frac{1}{2}^+$, $f(x) \\to -\\infty$. Range is $R$."]
        },
        {
            id: 'mm-22-2-q4bi',
            number: 'Question 4b.i',
            text: "Find $f'(0)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$f'(0) = 4$",
            markingGuide: [
                "M1: $f(x) = \\log_e\\left(\\frac{1}{2} + x\\right) - \\log_e\\left(\\frac{1}{2} - x\\right)$.",
                "A1: $f'(x) = \\frac{1}{\\frac{1}{2}+x} + \\frac{1}{\\frac{1}{2}-x}$. At $x = 0$: $f'(0) = 2 + 2 = 4$."
            ]
        },
        {
            id: 'mm-22-2-q4bii',
            number: 'Question 4b.ii',
            text: "State the maximal domain over which $f$ is strictly increasing.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Increasing Functions",
            answer: "$\\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$",
            markingGuide: ["$f'(x) > 0$ for all $x \\in \\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$ (the entire domain). So $f$ is strictly increasing on its whole domain."]
        },
        {
            id: 'mm-22-2-q4c',
            number: 'Question 4c',
            text: "Show that $f(x) + f(-x) = 0$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Odd Functions",
            answer: "See marking guide",
            markingGuide: [
                "A1: $f(-x) = \\log_e\\left(\\frac{\\frac{1}{2} - x}{\\frac{1}{2} + x}\\right) = -\\log_e\\left(\\frac{\\frac{1}{2} + x}{\\frac{1}{2} - x}\\right) = -f(x)$. Therefore $f(x) + f(-x) = 0$."
            ]
        },
        {
            id: 'mm-22-2-q4d',
            number: 'Question 4d',
            text: "Find the domain and the rule of $f^{-1}$, the inverse of $f$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "$f^{-1}: R \\to R$, $f^{-1}(x) = \\frac{e^x - 1}{2(e^x + 1)}$",
            markingGuide: [
                "M1: Let $y = \\log_e\\left(\\frac{\\frac{1}{2}+x}{\\frac{1}{2}-x}\\right)$. Swap $x$ and $y$: $x = \\log_e\\left(\\frac{\\frac{1}{2}+y}{\\frac{1}{2}-y}\\right)$.",
                "M1: $e^x = \\frac{\\frac{1}{2}+y}{\\frac{1}{2}-y}$. Solve for $y$: $e^x(\\frac{1}{2}-y) = \\frac{1}{2}+y$, $\\frac{e^x}{2} - ye^x = \\frac{1}{2} + y$, $y(1+e^x) = \\frac{e^x - 1}{2}$.",
                "A1: $f^{-1}(x) = \\frac{e^x - 1}{2(e^x + 1)}$. Domain of $f^{-1}$ is $R$."
            ]
        },
        {
            id: 'mm-22-2-q4ei',
            number: 'Question 4e.i',
            text: "Let $h$ be the function $h: \\left(-\\frac{1}{2}, \\frac{1}{2}\\right) \\to R$, $h(x) = k\\log_e\\left(\\frac{\\frac{1}{2}+x}{\\frac{1}{2}-x}\\right)$, where $k \\in R$ and $k > 0$.\n\nThe inverse function of $h$ is defined by $h^{-1}: R \\to R$, $h^{-1}(x) = \\frac{1}{2} \\cdot \\frac{e^{kx} - 1}{e^{kx} + 1}$.\n\nThe area of the regions bound by the functions $h$ and $h^{-1}$ can be expressed as a function, $A(k)$.\n\nDetermine the range of values of $k$ such that $A(k) > 0$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "$k \\ne 1$ (i.e. $k \\in (0, 1) \\cup (1, \\infty)$)",
            markingGuide: ["When $k = 1$, $h = f$ and $h^{-1} = f^{-1}$. Since $f$ is odd and passes through the origin, $h$ and $h^{-1}$ are reflections in $y = x$ and the bounded regions cancel to zero. For $k \\ne 1$, the functions are distinct from each other (not symmetric about $y=x$), so $A(k) > 0$. Range: $k \\in (0,1) \\cup (1, \\infty)$."]
        },

        {
            id: 'mm-22-2-q4eii',
            number: 'Question 4e.ii',
            text: "This question has been redacted following the findings of the Independent Review into the VCAA's Examination-Setting Policies, Processes and Procedures for the VCE.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "Redacted",
            markingGuide: ["This question was redacted by VCAA. All students were awarded this mark."]
        },

        // ----- Question 5 (9 marks) -----
        {
            id: 'mm-22-2-q5a',
            number: 'Question 5a',
            text: "Consider the composite function $g(x) = f(\\sin(2x))$, where the function $f(x)$ is an unknown but differentiable function for all values of $x$.\n\nUse the following table of values for $f$ and $f'$:\n\n| $x$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ |\n|---|---|---|---|\n| $f(x)$ | $-2$ | $5$ | $3$ |\n| $f'(x)$ | $7$ | $0$ | $\\frac{1}{9}$ |\n\nFind the value of $g\\left(\\frac{\\pi}{6}\\right)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "$3$",
            markingGuide: ["$g\\left(\\frac{\\pi}{6}\\right) = f\\left(\\sin\\left(\\frac{\\pi}{3}\\right)\\right) = f\\left(\\frac{\\sqrt{3}}{2}\\right) = 3$."]
        },
        {
            id: 'mm-22-2-q5b',
            number: 'Question 5b',
            text: "The derivative of $g$ with respect to $x$ is given by $g'(x) = 2\\cos(2x) \\cdot f'(\\sin(2x))$.\n\nShow that $g'\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{9}$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "See marking guide",
            markingGuide: ["$g'\\left(\\frac{\\pi}{6}\\right) = 2\\cos\\left(\\frac{\\pi}{3}\\right) \\cdot f'\\left(\\sin\\left(\\frac{\\pi}{3}\\right)\\right) = 2 \\times \\frac{1}{2} \\times f'\\left(\\frac{\\sqrt{3}}{2}\\right) = 1 \\times \\frac{1}{9} = \\frac{1}{9}$."]
        },
        {
            id: 'mm-22-2-q5c',
            number: 'Question 5c',
            text: "Find the equation of the tangent to $g$ at $x = \\frac{\\pi}{6}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "$y = \\frac{1}{9}x - \\frac{\\pi}{54} + 3$ or $y = \\frac{1}{9}\\left(x - \\frac{\\pi}{6}\\right) + 3$",
            markingGuide: [
                "M1: Point: $\\left(\\frac{\\pi}{6}, 3\\right)$, gradient: $\\frac{1}{9}$.",
                "A1: $y - 3 = \\frac{1}{9}\\left(x - \\frac{\\pi}{6}\\right)$."
            ]
        },
        {
            id: 'mm-22-2-q5d',
            number: 'Question 5d',
            text: "Find the average value of the derivative function $g'(x)$ between $x = \\frac{\\pi}{8}$ and $x = \\frac{\\pi}{6}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "$\\frac{-2}{\\frac{\\pi}{6} - \\frac{\\pi}{8}} = \\frac{-2}{\\frac{\\pi}{24}} = \\frac{-48}{\\pi}$",
            markingGuide: [
                "M1: Average value of $g'(x) = \\frac{1}{\\frac{\\pi}{6}-\\frac{\\pi}{8}}\\int_{\\pi/8}^{\\pi/6} g'(x)\\,dx = \\frac{g(\\pi/6) - g(\\pi/8)}{\\frac{\\pi}{6}-\\frac{\\pi}{8}}$.",
                "A1: $g(\\pi/8) = f(\\sin(\\pi/4)) = f(\\frac{\\sqrt{2}}{2}) = 5$. Average $= \\frac{3 - 5}{\\pi/24} = \\frac{-2 \\times 24}{\\pi} = -\\frac{48}{\\pi}$."
            ]
        },
        {
            id: 'mm-22-2-q5e',
            number: 'Question 5e',
            text: "Find four solutions to the equation $g'(x) = 0$ for the interval $x \\in [0, \\pi]$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{\\pi}{8}, \\frac{3\\pi}{8}$",
            markingGuide: [
                "M1: $g'(x) = 2\\cos(2x) \\cdot f'(\\sin(2x)) = 0$. Either $\\cos(2x) = 0$ or $f'(\\sin(2x)) = 0$.",
                "M1: $\\cos(2x) = 0 \\Rightarrow 2x = \\frac{\\pi}{2}, \\frac{3\\pi}{2} \\Rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$. (Also $2x = \\frac{5\\pi}{2}$ gives $x = \\frac{5\\pi}{4} > \\pi$.)",
                "A1: $f'(\\sin(2x)) = 0 \\Rightarrow \\sin(2x) = \\frac{\\sqrt{2}}{2}$ (from table). $2x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{9\\pi}{4}, \\frac{11\\pi}{4}, ...$. So $x = \\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{9\\pi}{8}$ (last one $> \\pi$). Also $2x = 2\\pi + \\frac{\\pi}{4}$ etc. Four solutions in $[0, \\pi]$: $\\frac{\\pi}{8}, \\frac{\\pi}{4}, \\frac{3\\pi}{8}, \\frac{3\\pi}{4}$."
            ]
        }
    ]
};
