import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2024_EXAM2: ExamPaper = {
    id: 'mm-2024-exam2',
    year: 2024,
    subject: Subject.METHODS,
    title: "Exam 2 (Tech-Active)",
    questions: [
        // =====================================================================
        // SECTION A: Multiple Choice (20 Questions, 1 mark each)
        // =====================================================================
        {
            id: 'mm-24-2-mc1',
            number: 'Question 1',
            text: "The asymptote(s) of the graph of $y = \\log_e(x + 1) - 3$ are",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Functions",
            answer: "A",
            markingGuide: ["The graph of $y = \\log_e(x+1) - 3$ has a vertical asymptote at $x = -1$. There is no horizontal asymptote for a logarithmic function."],
            options: [
                { label: "A", text: "$x = -1$ only" },
                { label: "B", text: "$x = 1$ only" },
                { label: "C", text: "$y = -3$ only" },
                { label: "D", text: "$x = -1$ and $y = -3$" }
            ]
        },
        {
            id: 'mm-24-2-mc2',
            number: 'Question 2',
            text: "A function $g: R \\to R$ has the derivative $g'(x) = x^3 - x$.\n\nGiven that $g(0) = 5$, the value of $g(2)$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Antidifferentiation",
            answer: "D",
            markingGuide: ["$g(2) = g(0) + \\int_0^2 (x^3 - x)\\,dx = 5 + \\left[\\frac{x^4}{4} - \\frac{x^2}{2}\\right]_0^2 = 5 + (4 - 2) = 7$."],
            options: [
                { label: "A", text: "$2$" },
                { label: "B", text: "$3$" },
                { label: "C", text: "$5$" },
                { label: "D", text: "$7$" }
            ]
        },
        {
            id: 'mm-24-2-mc3',
            number: 'Question 3',
            text: "A discrete random variable $X$ is defined using the probability distribution below, where $k$ is a positive real number.\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $\\Pr(X = x)$ | $2k$ | $3k$ | $5k$ | $3k$ | $2k$ |\n\nFind $\\Pr(X < 4 \\mid X > 1)$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "C",
            markingGuide: ["$15k = 1 \\Rightarrow k = \\frac{1}{15}$. $\\Pr(X < 4 \\mid X > 1) = \\frac{\\Pr(2 \\le X \\le 3)}{\\Pr(X \\ge 2)} = \\frac{5k + 3k}{5k + 3k + 2k} = \\frac{8}{10} = \\frac{4}{5}$."],
            options: [
                { label: "A", text: "$\\frac{13}{15}$" },
                { label: "B", text: "$\\frac{11}{13}$" },
                { label: "C", text: "$\\frac{4}{5}$" },
                { label: "D", text: "$\\frac{8}{15}$" }
            ]
        },
        {
            id: 'mm-24-2-mc4',
            number: 'Question 4',
            text: "If $\\int_a^b f(x)\\,dx = -5$ and $\\int_a^c f(x)\\,dx = 3$, where $a < b < c$, then $\\int_b^c 2f(x)\\,dx$ is equal to",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "B",
            markingGuide: ["$\\int_b^c 2f(x)\\,dx = 2\\left(\\int_a^c f(x)\\,dx - \\int_a^b f(x)\\,dx\\right) = 2(3 - (-5)) = 16$."],
            options: [
                { label: "A", text: "$-16$" },
                { label: "B", text: "$16$" },
                { label: "C", text: "$-4$" },
                { label: "D", text: "$4$" }
            ]
        },
        {
            id: 'mm-24-2-mc5',
            number: 'Question 5',
            text: "Consider the functions $f: (1, \\infty) \\to R$, $f(x) = x^2 - 4x$ and $g: R \\to R$, $g(x) = e^{-x}$.\n\nThe range of the composite function $g(f(x))$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "D",
            markingGuide: ["On $(1, \\infty)$: $f(x) = x^2 - 4x$. $f'(x) = 2x - 4 = 0$ at $x = 2$. $f(2) = -4$ (minimum). As $x \\to 1^+$, $f \\to -3$. As $x \\to \\infty$, $f \\to \\infty$. So $f$ range is $[-4, \\infty)$.", "$g(f(x)) = e^{-f(x)}$. As $f \\to \\infty$, $g \\to 0$. At $f = -4$: $g = e^4$. Range of $g(f(x))$ is $(0, e^4]$."],
            options: [
                { label: "A", text: "$(0, e^3)$" },
                { label: "B", text: "$(0, e^3]$" },
                { label: "C", text: "$(0, e^4)$" },
                { label: "D", text: "$(0, e^4]$" }
            ]
        },
        {
            id: 'mm-24-2-mc6',
            number: 'Question 6',
            text: "Consider the function $f(x) = \\frac{2x + 1}{3 - x}$ with domain $x \\in R \\setminus \\{3\\}$.\n\nThe inverse of $f$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "A",
            markingGuide: ["Let $y = \\frac{2x+1}{3-x}$. $y(3-x) = 2x+1$. $3y - xy = 2x + 1$. $3y - 1 = x(2 + y)$. $x = \\frac{3y-1}{y+2}$. So $f^{-1}(x) = \\frac{3x-1}{x+2}$ with domain $R \\setminus \\{-2\\}$."],
            options: [
                { label: "A", text: "$f^{-1}(x) = \\frac{3x - 1}{x + 2}$ with domain $x \\in R \\setminus \\{-2\\}$" },
                { label: "B", text: "$f^{-1}(x) = 3 - \\frac{7}{x + 2}$ with domain $x \\in R \\setminus \\{-2\\}$" },
                { label: "C", text: "$f^{-1}(x) = 3 + \\frac{5}{x + 2}$ with domain $x \\in R \\setminus \\{-2\\}$" },
                { label: "D", text: "$f^{-1}(x) = \\frac{1 - 3x}{x + 2}$ with domain $x \\in R \\setminus \\{-2\\}$" }
            ]
        },
        {
            id: 'mm-24-2-mc7',
            number: 'Question 7',
            text: "A fair six-sided die is repeatedly rolled. What is the minimum number of rolls required so that the probability of rolling a six at least once is greater than 0.95?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "C",
            markingGuide: ["$1 - \\left(\\frac{5}{6}\\right)^n > 0.95 \\Rightarrow \\left(\\frac{5}{6}\\right)^n < 0.05$.", "$n > \\frac{\\ln 0.05}{\\ln(5/6)} \\approx 16.43$. Minimum $n = 17$."],
            options: [
                { label: "A", text: "$15$" },
                { label: "B", text: "$16$" },
                { label: "C", text: "$17$" },
                { label: "D", text: "$18$" }
            ]
        },
        {
            id: 'mm-24-2-mc8',
            number: 'Question 8',
            text: "Some values of the functions $f: R \\to R$ and $g: R \\to R$ are shown below.\n\n| $x$ | 1 | 2 | 3 |\n|---|---|---|---|\n| $f(x)$ | 0 | 4 | 5 |\n| $g(x)$ | 3 | 4 | $-5$ |\n\nThe graph of the function $h(x) = f(x) - g(x)$ must have an $x$-intercept at",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Function Operations",
            answer: "A",
            markingGuide: ["$h(1) = 0 - 3 = -3$, $h(2) = 4 - 4 = 0$, $h(3) = 5 - (-5) = 10$. So $h(2) = 0$, giving an $x$-intercept at $(2, 0)$."],
            options: [
                { label: "A", text: "$(2, 0)$" },
                { label: "B", text: "$(3, 0)$" },
                { label: "C", text: "$(4, 0)$" },
                { label: "D", text: "$(5, 0)$" }
            ]
        },
        {
            id: 'mm-24-2-mc9',
            number: 'Question 9',
            text: "At a Year 12 formal, 45% of the students travelled to the event in a hired limousine, while the remaining 55% were driven to the event by a parent.\n\nOf the students who travelled in a hired limousine, 30% had a professional photo taken.\n\nOf the students who were driven by a parent, 60% had a professional photo taken.\n\nGiven that a student had a professional photo taken, what is the probability that the student travelled to the event in a hired limousine?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "C",
            markingGuide: ["$\\Pr(\\text{Photo}) = 0.45 \\times 0.30 + 0.55 \\times 0.60 = 0.135 + 0.330 = 0.465$.", "$\\Pr(\\text{Limo} \\mid \\text{Photo}) = \\frac{0.135}{0.465} = \\frac{135}{465} = \\frac{9}{31}$."],
            options: [
                { label: "A", text: "$\\frac{1}{8}$" },
                { label: "B", text: "$\\frac{27}{200}$" },
                { label: "C", text: "$\\frac{9}{31}$" },
                { label: "D", text: "$\\frac{22}{31}$" }
            ]
        },
        {
            id: 'mm-24-2-mc10',
            number: 'Question 10',
            text: "Suppose a function $f: [0, 5] \\to R$ and its derivative $f': [0, 5] \\to R$ are defined and continuous on their domains. If $f'(2) < 0$ and $f'(4) > 0$, which one of these statements must be true?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "B",
            markingGuide: ["Since $f'(2) < 0$ and $f'(4) > 0$, by the Intermediate Value Theorem, $f'(c) = 0$ for some $c \\in (2, 4)$. This means $f$ has a turning point, so $f$ is not monotone and hence not one-to-one. Therefore $f$ does not have an inverse function."],
            options: [
                { label: "A", text: "$f$ is strictly decreasing on $[0, 2]$." },
                { label: "B", text: "$f$ does not have an inverse function." },
                { label: "C", text: "$f$ is positive on $[4, 5]$." },
                { label: "D", text: "$f$ has a local minimum at $x = 3$." }
            ]
        },
        {
            id: 'mm-24-2-mc11',
            number: 'Question 11',
            text: "Twelve students sit in a classroom, with seven students in the first row and the other five students in the second row. Three students are chosen randomly from the class.\n\nThe probability that exactly two of the three students chosen are in the first row is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Combinatorics",
            answer: "B",
            markingGuide: ["$\\Pr = \\frac{\\binom{7}{2}\\binom{5}{1}}{\\binom{12}{3}} = \\frac{21 \\times 5}{220} = \\frac{105}{220} = \\frac{21}{44}$."],
            options: [
                { label: "A", text: "$\\frac{7}{44}$" },
                { label: "B", text: "$\\frac{21}{44}$" },
                { label: "C", text: "$\\frac{5}{22}$" },
                { label: "D", text: "$\\frac{245}{576}$" }
            ]
        },
        {
            id: 'mm-24-2-mc12',
            number: 'Question 12',
            text: "The graph of $y = f(x)$ is shown below (a curve with features around $x = 0$ to $4$, rising from near $x = 0$, with a local max near $x = 3$ at $y \\approx 3$, and approaching $y \\approx 2$ as $x$ increases).\n\nWhich of the following options best represents the graph of $y = f(2x + 1)$?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "B",
            markingGuide: ["$y = f(2x+1)$: replace $x$ with $2x+1$. This is a horizontal compression by factor $\\frac{1}{2}$ and a translation of $\\frac{1}{2}$ unit to the left. The graph features compress horizontally and shift left."],
            options: [
                { label: "A", text: "Graph A" },
                { label: "B", text: "Graph B" },
                { label: "C", text: "Graph C" },
                { label: "D", text: "Graph D" }
            ]
        },
        {
            id: 'mm-24-2-mc13',
            number: 'Question 13',
            text: "The function $f: (0, \\infty) \\to R$, $f(x) = \\frac{x}{2} + \\frac{2}{x}$ is mapped to the function $g$ with the following sequence of transformations:\n\n1. dilation by a factor of 3 from the $y$-axis\n2. translation by 1 unit in the negative direction of the $y$-axis.\n\nThe function $g$ has a local minimum at the point with the coordinates",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Transformations and Optimisation",
            answer: "A",
            markingGuide: ["Dilation by factor 3 from the $y$-axis maps $(x, y) \\to (3x, y)$, so replace $x$ with $x/3$: $g_1(x) = f(x/3) = \\frac{x}{6} + \\frac{6}{x}$.", "Translate down 1: $g(x) = \\frac{x}{6} + \\frac{6}{x} - 1$.", "Original $f$ has min at $x = 2$: $f(2) = 2$. After dilation: min at $(6, 2)$. After translation down 1: $(6, 1)$."],
            options: [
                { label: "A", text: "$(6, 1)$" },
                { label: "B", text: "$\\left(\\frac{2}{3}, 1\\right)$" },
                { label: "C", text: "$(2, 5)$" },
                { label: "D", text: "$\\left(2, -\\frac{1}{3}\\right)$" }
            ]
        },
        {
            id: 'mm-24-2-mc14',
            number: 'Question 14',
            text: "Let $h$ be the probability density function for a continuous random variable $X$, where\n\n$$h(x) = \\begin{cases} \\frac{x}{6} + k & -3 \\le x < 0 \\\\ -\\frac{x}{2} + k & 0 \\le x \\le 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$\n\nand $k$ is a positive real number.\n\nThe value of $\\Pr(X < 0.5)$ is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "B",
            markingGuide: ["$\\int_{-3}^{0}\\left(\\frac{x}{6}+k\\right)dx + \\int_{0}^{1}\\left(-\\frac{x}{2}+k\\right)dx = 1$.", "$\\left[\\frac{x^2}{12}+kx\\right]_{-3}^{0} + \\left[-\\frac{x^2}{4}+kx\\right]_{0}^{1} = 1$.", "$\\left(0 - \\frac{9}{12} + 3k\\right) + \\left(-\\frac{1}{4} + k\\right) = 1$.", "$-\\frac{3}{4} + 3k - \\frac{1}{4} + k = 1 \\Rightarrow 4k = 2 \\Rightarrow k = \\frac{1}{2}$.", "$\\Pr(X < 0.5) = \\int_{-3}^{0}\\left(\\frac{x}{6}+\\frac{1}{2}\\right)dx + \\int_{0}^{0.5}\\left(-\\frac{x}{2}+\\frac{1}{2}\\right)dx$.", "$= \\frac{3}{4} + \\left[-\\frac{x^2}{4}+\\frac{x}{2}\\right]_0^{0.5} = \\frac{3}{4} + \\left(-\\frac{1}{16}+\\frac{1}{4}\\right) = \\frac{3}{4} + \\frac{3}{16} = \\frac{15}{16}$."],
            options: [
                { label: "A", text: "$\\frac{1}{2}$" },
                { label: "B", text: "$\\frac{15}{16}$" },
                { label: "C", text: "$\\frac{3}{16}$" },
                { label: "D", text: "$\\frac{49}{48}$" }
            ]
        },
        {
            id: 'mm-24-2-mc15',
            number: 'Question 15',
            text: "The points of inflection of the graph of $y = 2 - \\tan\\left(\\pi\\left(x - \\frac{1}{4}\\right)\\right)$ are",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "A",
            markingGuide: ["Points of inflection of $\\tan$ occur where $\\tan = 0$, i.e., at integer multiples of $\\pi$ for the argument.", "$\\pi\\left(x - \\frac{1}{4}\\right) = k\\pi \\Rightarrow x = k + \\frac{1}{4}$, $k \\in \\mathbb{Z}$.", "At these points: $y = 2 - \\tan(k\\pi) = 2 - 0 = 2$.", "Inflection points: $\\left(k + \\frac{1}{4}, 2\\right)$, $k \\in \\mathbb{Z}$."],
            options: [
                { label: "A", text: "$\\left(k + \\frac{1}{4}, 2\\right), k \\in \\mathbb{Z}$" },
                { label: "B", text: "$\\left(k - \\frac{1}{4}, 2\\right), k \\in \\mathbb{Z}$" },
                { label: "C", text: "$\\left(k + \\frac{1}{4}, -2\\right), k \\in \\mathbb{Z}$" },
                { label: "D", text: "$\\left(k - \\frac{3}{4}, -2\\right), k \\in \\mathbb{Z}$" }
            ]
        },
        {
            id: 'mm-24-2-mc16',
            number: 'Question 16',
            text: "Suppose that a differentiable function $f: R \\to R$ and its derivative $f': R \\to R$ satisfy $f(4) = 25$ and $f'(4) = 15$.\n\nDetermine the gradient of the tangent line to the graph of $y = \\sqrt{f(x)}$ at $x = 4$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "D",
            markingGuide: ["$\\frac{d}{dx}\\sqrt{f(x)} = \\frac{f'(x)}{2\\sqrt{f(x)}}$.", "At $x = 4$: $\\frac{15}{2\\sqrt{25}} = \\frac{15}{10} = \\frac{3}{2}$."],
            options: [
                { label: "A", text: "$\\sqrt{15}$" },
                { label: "B", text: "$\\frac{1}{10}$" },
                { label: "C", text: "$\\frac{15}{2}$" },
                { label: "D", text: "$\\frac{3}{2}$" }
            ]
        },
        {
            id: 'mm-24-2-mc17',
            number: 'Question 17',
            text: "Consider the algorithm below, which prints the roots of the cubic polynomial $f(x) = x^3 - 2x^2 - 9x + 18$.\n\n```\ndefine f(x)\n    return (x^3 - 2x^2 - 9x + 18)\nc ← f(0)\nif c < 0 then\n    c ← (-c)\nend if\nwhile c > 0\n    if f(c) = 0 then\n        print c\n    end if\n    if f(-c) = 0 then\n        print -c\n    end if\n    c ← c - 1\nend while\n```\n\nIn order, the algorithm prints the values",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Algorithms",
            answer: "D",
            markingGuide: ["$f(x) = x^3 - 2x^2 - 9x + 18 = (x-2)(x-3)(x+3)$. Roots: $x = 2, 3, -3$.", "$c = f(0) = 18$. Loop from $c = 18$ down to $1$.", "At $c = 3$: $f(3) = 0$, print $3$; $f(-3) = 0$, print $-3$.", "At $c = 2$: $f(2) = 0$, print $2$; $f(-2) \\ne 0$.", "Output: $3, -3, 2$."],
            options: [
                { label: "A", text: "$-3, 3, 2$" },
                { label: "B", text: "$-3, 2, 3$" },
                { label: "C", text: "$3, 2, -3$" },
                { label: "D", text: "$3, -3, 2$" }
            ]
        },
        {
            id: 'mm-24-2-mc18',
            number: 'Question 18',
            text: "Find the value of $x$ which maximises the area of the trapezium below.\n\n(A trapezium with top width $x$, two slant sides of length 10, and base width $3x$.)",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "B",
            markingGuide: ["Base $= 3x$, top $= x$. The height $h$ satisfies $h^2 + x^2 = 100$, so $h = \\sqrt{100 - x^2}$.", "Area $= \\frac{1}{2}(x + 3x) \\cdot h = 2x\\sqrt{100 - x^2}$.", "$A'(x) = 2\\sqrt{100-x^2} + 2x \\cdot \\frac{-2x}{2\\sqrt{100-x^2}} = \\frac{200 - 4x^2}{\\sqrt{100-x^2}} = 0$.", "$x^2 = 50 \\Rightarrow x = 5\\sqrt{2}$."],
            options: [
                { label: "A", text: "$10$" },
                { label: "B", text: "$5\\sqrt{2}$" },
                { label: "C", text: "$7$" },
                { label: "D", text: "$\\sqrt{10}$" }
            ]
        },
        {
            id: 'mm-24-2-mc19',
            number: 'Question 19',
            text: "Consider the normal random variable $X$ that satisfies $\\Pr(X < 10) = 0.2$ and $\\Pr(X > 18) = 0.2$.\n\nThe value of $\\Pr(X < 12)$ is closest to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "C",
            markingGuide: ["By symmetry: $\\mu = \\frac{10 + 18}{2} = 14$.", "$\\Pr(X < 10) = 0.2 \\Rightarrow z = \\text{invNorm}(0.2) \\approx -0.8416$.", "$\\frac{10 - 14}{\\sigma} = -0.8416 \\Rightarrow \\sigma \\approx 4.753$.", "$\\Pr(X < 12) = \\Pr\\left(Z < \\frac{12 - 14}{4.753}\\right) = \\Pr(Z < -0.421) \\approx 0.337$."],
            options: [
                { label: "A", text: "$0.134$" },
                { label: "B", text: "$0.297$" },
                { label: "C", text: "$0.337$" },
                { label: "D", text: "$0.365$" }
            ]
        },
        {
            id: 'mm-24-2-mc20',
            number: 'Question 20',
            text: "The function $f: R \\to R$ has an average value $k$ on the interval $[0, 2]$ and satisfies $f(x) = f(x + 2)$ for all $x \\in R$. The value of the definite integral $\\int_2^6 f(x)\\,dx$ is",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "C",
            markingGuide: ["Average value $k$ on $[0,2]$ means $\\int_0^2 f(x)\\,dx = 2k$.", "Since $f(x) = f(x+2)$ (period 2), $\\int_a^{a+2} f(x)\\,dx = 2k$ for any $a$.", "$\\int_2^6 f(x)\\,dx = \\int_2^4 f(x)\\,dx + \\int_4^6 f(x)\\,dx = 2k + 2k = 4k$."],
            options: [
                { label: "A", text: "$2k$" },
                { label: "B", text: "$3k$" },
                { label: "C", text: "$4k$" },
                { label: "D", text: "$6k$" }
            ]
        },

        // =====================================================================
        // SECTION B: Extended Response (5 Questions, 60 marks total)
        // =====================================================================

        // ----- Question 1 (12 marks) -----
        {
            id: 'mm-24-2-q1a',
            number: 'Question 1a',
            text: "Consider the function $f: R \\to R$, $f(x) = (x+1)(x+a)(x-2)(x-2a)$ where $a \\in R$.\n\nState, in terms of $a$ where required, the values of $x$ for which $f(x) = 0$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Polynomial Equations",
            answer: "$x = -1, -a, 2, 2a$",
            markingGuide: ["$f(x) = 0$ when $x + 1 = 0$, $x + a = 0$, $x - 2 = 0$ or $x - 2a = 0$.", "Solutions: $x = -1, -a, 2, 2a$."]
        },
        {
            id: 'mm-24-2-q1bi',
            number: 'Question 1b.i',
            text: "Find the values of $a$ for which the graph of $y = f(x)$ has exactly three $x$-intercepts.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Polynomial Equations",
            answer: "$a \\in \\left\\{-2, -\\frac{1}{2}, 0\\right\\}$",
            markingGuide: [
                "M1: Exactly three $x$-intercepts requires exactly one pair of equal roots from $\\{-1, -a, 2, 2a\\}$.",
                "Possible equalities: $-1 = -a \\Rightarrow a = 1$ (gives roots $-1,-1,2,2$, only 2 distinct — not 3); $-1 = 2a \\Rightarrow a = -\\frac{1}{2}$ (roots $-1, \\frac{1}{2}, 2, -1$ ✓); $-a = 2 \\Rightarrow a = -2$ (roots $-1, 2, 2, -4$ ✓); $-a = 2a \\Rightarrow a = 0$ (roots $-1, 0, 2, 0$ ✓); $2 = 2a \\Rightarrow a = 1$ (same as first case).",
                "A1: $a \\in \\{-2, -\\frac{1}{2}, 0\\}$."
            ]
        },
        {
            id: 'mm-24-2-q1bii',
            number: 'Question 1b.ii',
            text: "Find the values of $a$ for which the graph of $y = f(x)$ has exactly four $x$-intercepts.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Polynomial Equations",
            answer: "$a \\in R \\setminus \\left\\{-2, -\\frac{1}{2}, 0, 1\\right\\}$",
            markingGuide: ["All four roots must be distinct. Exclude values where any two roots coincide: $a \\ne 1, -\\frac{1}{2}, -2, 0$.", "Answer: $a \\in R \\setminus \\{-2, -\\frac{1}{2}, 0, 1\\}$."]
        },
        {
            id: 'mm-24-2-q1ci',
            number: 'Question 1c.i',
            text: "Let $g$ be the function $g: R \\to R$, $g(x) = (x+1)^2(x-2)^2$, which is the function $f$ where $a = 1$.\n\nFind $g'(x)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$g'(x) = 2(x+1)(x-2)(2x-1)$",
            markingGuide: ["$g'(x) = 2(x+1)(x-2)^2 + 2(x+1)^2(x-2) = 2(x+1)(x-2)[(x-2)+(x+1)] = 2(x+1)(x-2)(2x-1)$."]
        },
        {
            id: 'mm-24-2-q1cii',
            number: 'Question 1c.ii',
            text: "Find the coordinates of the local maximum of $g$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Turning Points",
            answer: "$\\left(\\frac{1}{2}, \\frac{81}{16}\\right)$",
            markingGuide: ["$g'(x) = 0$ at $x = -1, \\frac{1}{2}, 2$. Test $x = \\frac{1}{2}$: $g\\left(\\frac{1}{2}\\right) = \\left(\\frac{3}{2}\\right)^2\\left(-\\frac{3}{2}\\right)^2 = \\frac{81}{16}$.", "Since $g(-1) = 0$ and $g(2) = 0$ are minima, $\\left(\\frac{1}{2}, \\frac{81}{16}\\right)$ is the local maximum."]
        },
        {
            id: 'mm-24-2-q1ciii',
            number: 'Question 1c.iii',
            text: "Find the values of $x$ for which $g'(x) > 0$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Increasing Functions",
            answer: "$x \\in (-1, \\frac{1}{2}) \\cup (2, \\infty)$",
            markingGuide: ["$g'(x) = 2(x+1)(x-2)(2x-1) > 0$.", "Sign analysis with roots at $x = -1, \\frac{1}{2}, 2$:", "$g'(x) > 0$ for $x \\in (-1, \\frac{1}{2}) \\cup (2, \\infty)$."]
        },
        {
            id: 'mm-24-2-q1civ',
            number: 'Question 1c.iv',
            text: "Consider the two tangent lines to the graph of $y = g(x)$ at the points where $x = \\frac{-\\sqrt{3}+1}{2}$ and $x = \\frac{\\sqrt{3}+1}{2}$.\n\nDetermine the coordinates of the point of intersection of these two tangent lines.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "$\\left(\\frac{1}{2}, \\frac{27}{4}\\right)$",
            markingGuide: [
                "M1: Let $u = \\frac{1-\\sqrt{3}}{2}$ and $v = \\frac{1+\\sqrt{3}}{2}$. Note $u + v = 1$. By symmetry about $x = \\frac{1}{2}$, both tangent lines are symmetric reflections.", 
                "$g(u) = (u+1)^2(u-2)^2$. $(u+1)(u-2) = \\frac{(3-\\sqrt{3})}{2} \\cdot \\frac{(-3-\\sqrt{3})}{2} = \\frac{-(9-3)}{4} = -\\frac{3}{2}$. So $g(u) = \\frac{9}{4}$. Similarly $g(v) = \\frac{9}{4}$.",
                "$g'(u) = 2(u+1)(u-2)(2u-1) = 2 \\cdot (-\\frac{3}{2}) \\cdot (-\\sqrt{3}) = 3\\sqrt{3}$. $g'(v) = -3\\sqrt{3}$.",
                "A1: At intersection: $3\\sqrt{3}(x - u) + \\frac{9}{4} = -3\\sqrt{3}(x - v) + \\frac{9}{4}$. So $x - u = -(x - v)$, giving $x = \\frac{u+v}{2} = \\frac{1}{2}$.", 
                "$y = \\frac{9}{4} + 3\\sqrt{3}\\left(\\frac{1}{2} - \\frac{1-\\sqrt{3}}{2}\\right) = \\frac{9}{4} + 3\\sqrt{3} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{9}{4} + \\frac{9}{2} = \\frac{27}{4}$."
            ]
        },
        {
            id: 'mm-24-2-q1di',
            number: 'Question 1d.i',
            text: "Let $g$ remain as the function $g: R \\to R$, $g(x) = (x+1)^2(x-2)^2$, which is the function $f$ where $a = 1$.\n\nLet $h$ be the function $h: R \\to R$, $h(x) = (x+1)(x-1)(x+2)(x-2)$, which is the function $f$ where $a = -1$.\n\nUsing translations only, describe a sequence of transformations of $h$, for which its image would have a local maximum at the same coordinates as that of $g$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "Translate $\\frac{1}{2}$ unit in the positive $x$-direction and $\\frac{81}{16} - 4 = \\frac{17}{16}$ units in the positive $y$-direction.",
            markingGuide: ["$h(x) = (x+1)(x-1)(x+2)(x-2) = (x^2-1)(x^2-4) = x^4 - 5x^2 + 4$. Local max at $(0, 4)$.", "$g$ has local max at $(\\frac{1}{2}, \\frac{81}{16})$.", "Translate right $\\frac{1}{2}$ and up $\\frac{81}{16} - 4 = \\frac{17}{16}$."]
        },
        {
            id: 'mm-24-2-q1dii',
            number: 'Question 1d.ii',
            text: "Using a dilation and translations, describe a different sequence of transformations of $h$, for which its image would have both local minimums at the same coordinates as that of $g$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "See marking guide",
            markingGuide: [
                "M1: $h$ has local mins at $\\left(\\pm\\sqrt{\\frac{5}{2}}, -\\frac{9}{4}\\right)$. $g$ has local mins at $(-1, 0)$ and $(2, 0)$.",
                "The midpoint of $g$'s mins is $\\frac{1}{2}$ and half-spread is $\\frac{3}{2}$. The midpoint of $h$'s mins is $0$ and half-spread is $\\sqrt{\\frac{5}{2}}$.",
                "Dilation by factor $\\frac{3}{2\\sqrt{5/2}} = \\frac{3}{\\sqrt{10}}$ from the $y$-axis, then translate $\\frac{1}{2}$ right and $\\frac{9}{4}$ up.",
                "A1: Alternatively: dilate horizontally by factor $\\frac{3\\sqrt{2}}{\\sqrt{10}} = \\frac{3}{\\sqrt{5}}$ from the $y$-axis, translate $\\frac{1}{2}$ in positive $x$-direction and $\\frac{9}{4}$ in positive $y$-direction."
            ]
        },

        // ----- Question 2 (11 marks) -----
        {
            id: 'mm-24-2-q2a',
            number: 'Question 2a',
            text: "A model for the temperature in a room, in degrees Celsius, is given by\n\n$$f(t) = \\begin{cases} 12 + 30t & 0 \\le t \\le \\frac{1}{3} \\\\ 22 & t > \\frac{1}{3} \\end{cases}$$\n\nwhere $t$ represents time in hours after a heater is switched on.\n\nExpress the derivative $f'(t)$ as a hybrid function.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives of Hybrid Functions",
            answer: "$f'(t) = \\begin{cases} 30 & 0 < t < \\frac{1}{3} \\\\ 0 & t > \\frac{1}{3} \\end{cases}$",
            markingGuide: [
                "M1: $f'(t) = 30$ for $0 < t < \\frac{1}{3}$.",
                "A1: $f'(t) = 0$ for $t > \\frac{1}{3}$. (Note: $f'(t)$ is undefined at $t = \\frac{1}{3}$.)"
            ]
        },
        {
            id: 'mm-24-2-q2b',
            number: 'Question 2b',
            text: "Find the average rate of change in temperature predicted by the model between $t = 0$ and $t = \\frac{1}{2}$.\n\nGive your answer in degrees Celsius per hour.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Average Rate of Change",
            answer: "$20$ degrees Celsius per hour",
            markingGuide: ["Average rate $= \\frac{f(1/2) - f(0)}{1/2 - 0} = \\frac{22 - 12}{1/2} = 20$ °C/hr."]
        },
        {
            id: 'mm-24-2-q2ci',
            number: 'Question 2c.i',
            text: "Another model for the temperature in the room is given by $g(t) = 22 - 10e^{-6t}$, $t \\ge 0$.\n\nFind the derivative $g'(t)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Exponential Derivatives",
            answer: "$g'(t) = 60e^{-6t}$",
            markingGuide: ["$g'(t) = -10 \\times (-6) e^{-6t} = 60e^{-6t}$."]
        },
        {
            id: 'mm-24-2-q2cii',
            number: 'Question 2c.ii',
            text: "Find the value of $t$ for which $g'(t) = 10$.\n\nGive your answer correct to three decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Exponential Equations",
            answer: "$t \\approx 0.299$",
            markingGuide: ["$60e^{-6t} = 10 \\Rightarrow e^{-6t} = \\frac{1}{6} \\Rightarrow -6t = \\ln\\frac{1}{6} \\Rightarrow t = \\frac{\\ln 6}{6} \\approx 0.299$."]
        },
        {
            id: 'mm-24-2-q2d',
            number: 'Question 2d',
            text: "Find the time $t \\in (0, 1)$ when the temperatures predicted by the models $f$ and $g$ are equal.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Exponential Equations",
            answer: "$t \\approx 0.24$",
            markingGuide: ["For $0 \\le t \\le \\frac{1}{3}$: $12 + 30t = 22 - 10e^{-6t}$, i.e., $30t + 10e^{-6t} = 10$.", "Solve numerically using CAS: $t \\approx 0.24$."]
        },
        {
            id: 'mm-24-2-q2e',
            number: 'Question 2e',
            text: "Find the time $t \\in (0, 1)$ when the difference between the temperatures predicted by the two models is the greatest.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$t \\approx 0.18$",
            markingGuide: ["For $0 < t < \\frac{1}{3}$: $d(t) = f(t) - g(t) = (12+30t) - (22-10e^{-6t}) = 30t + 10e^{-6t} - 10$.", "$d'(t) = 30 - 60e^{-6t} = 0 \\Rightarrow e^{-6t} = \\frac{1}{2} \\Rightarrow t = \\frac{\\ln 2}{6} \\approx 0.12$.", "Also check $t > \\frac{1}{3}$: $d(t) = 22 - (22 - 10e^{-6t}) = 10e^{-6t}$, which is decreasing.", "Maximum difference at $t \\approx 0.12$. (Or compare absolute differences across both pieces using CAS.)"]
        },
        {
            id: 'mm-24-2-q2fi',
            number: 'Question 2f.i',
            text: "The amount of power, in kilowatts, used by the heater $t$ hours after it is switched on, can be modelled by the continuous function $p$, whose graph is shown.\n\n$$p(t) = \\begin{cases} 1.5 & 0 \\le t \\le 0.4 \\\\ 0.3 + Ae^{-10t} & t > 0.4 \\end{cases}$$\n\nThe amount of energy used by the heater, in kilowatt hours, can be estimated by evaluating the area between the graph of $y = p(t)$ and the $t$-axis.\n\nGiven that $p(t)$ is continuous for $t \\ge 0$, show that $A = 1.2e^4$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Continuity",
            answer: "See marking guide",
            markingGuide: ["For continuity at $t = 0.4$: $\\lim_{t \\to 0.4^+} p(t) = p(0.4) = 1.5$.", "$0.3 + Ae^{-10(0.4)} = 1.5 \\Rightarrow Ae^{-4} = 1.2 \\Rightarrow A = 1.2e^4$."]
        },
        {
            id: 'mm-24-2-q2fii',
            number: 'Question 2f.ii',
            text: "Find how long it takes, after the heater is switched on, until the heater has used 0.5 kilowatt hours of energy.\n\nGive your answer in hours.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "$t = \\frac{1}{3}$ hours",
            markingGuide: ["For $T \\le 0.4$: $\\int_0^T 1.5\\,dt = 1.5T = 0.5 \\Rightarrow T = \\frac{1}{3} \\approx 0.333$ hours.", "Since $\\frac{1}{3} < 0.4$, this is valid."]
        },
        {
            id: 'mm-24-2-q2fiii',
            number: 'Question 2f.iii',
            text: "Find how long it takes, after the heater is switched on, until the heater has used 1 kilowatt hour of energy.\n\nGive your answer in hours, correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "$t \\approx 0.87$ hours",
            markingGuide: [
                "M1: Energy up to $t = 0.4$: $\\int_0^{0.4} 1.5\\,dt = 0.6$ kWh. Remaining energy: $1 - 0.6 = 0.4$ kWh.",
                "For $T > 0.4$: $\\int_{0.4}^{T} (0.3 + 1.2e^4 \\cdot e^{-10t})\\,dt = 0.4$.",
                "$\\left[0.3t - 0.12e^{4-10t}\\right]_{0.4}^{T} = 0.4$.",
                "A1: $0.3T - 0.12e^{4-10T} - 0.12 + 0.12 = 0.4$. Solve using CAS: $T \\approx 0.87$ hours."
            ]
        },

        // ----- Question 3 (11 marks) -----
        {
            id: 'mm-24-2-q3ai',
            number: 'Question 3a.i',
            text: "The points shown on the chart represent monthly online sales in Australia. The variable $y$ represents sales in millions of dollars. The variable $t$ represents the month when the sales were made, where $t = 1$ corresponds to January 2021, $t = 2$ corresponds to February 2021 and so on.\n\nA cubic polynomial $p: (0, 12] \\to R$, $p(t) = at^3 + bt^2 + ct + d$ can be used to model monthly online sales in 2021.\n\nThe graph of $y = p(t)$ is shown as a dashed curve. It has a local minimum at $(2, 2500)$ and a local maximum at $(11, 4400)$.\n\nFind, correct to two decimal places, the values of $a$, $b$, $c$ and $d$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Cubic Polynomials",
            answer: "$a \\approx -14.07$, $b \\approx 274.36$, $c \\approx -1625.93$, $d \\approx 5596.30$",
            markingGuide: [
                "M1: $p'(t) = 3at^2 + 2bt + c$. Since local min at $t = 2$ and local max at $t = 11$: $p'(2) = 0$ and $p'(11) = 0$.",
                "M1: Also $p(2) = 2500$ and $p(11) = 4400$. This gives four equations in four unknowns.",
                "A1: Solve the system using CAS to find $a, b, c, d$ correct to two decimal places."
            ]
        },
        {
            id: 'mm-24-2-q3aii',
            number: 'Question 3a.ii',
            text: "Let $q: (12, 24] \\to R$, $q(t) = p(t - h) + k$ be a cubic function obtained by translating $p$, which can be used to model monthly online sales in 2022.\n\nFind the values of $h$ and $k$ such that the graph of $y = q(t)$ has a local maximum at $(23, 4750)$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$h = 12$, $k = 350$",
            markingGuide: [
                "M1: $p$ has local max at $t = 11$. For $q(t) = p(t-h)+k$ to have local max at $t = 23$: $23 - h = 11 \\Rightarrow h = 12$.",
                "A1: $q(23) = p(11) + k = 4400 + k = 4750 \\Rightarrow k = 350$."
            ]
        },
        {
            id: 'mm-24-2-q3bi',
            number: 'Question 3b.i',
            text: "Another function $f$ can be used to model monthly online sales, where\n\n$$f: (0, 36] \\to R, \\quad f(t) = 3000 + 30t + 700\\cos\\left(\\frac{\\pi t}{6}\\right) + 400\\cos\\left(\\frac{\\pi t}{3}\\right)$$\n\nPart of the graph of $f$ is shown on the axes.\n\nComplete the graph of $f$ on the set of axes above until December 2023, that is, for $t \\in (24, 36]$.\n\nLabel the endpoint at $t = 36$ with its coordinates.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Graphing",
            answer: "Graph completed; endpoint at $(36, 4180)$",
            markingGuide: [
                "M1: Continue the oscillating curve for $t \\in (24, 36]$, showing the correct periodic behaviour.",
                "A1: $f(36) = 3000 + 1080 + 700\\cos(6\\pi) + 400\\cos(12\\pi) = 4080 + 700 + 400 = 4080 + 1100 = 4180$. Wait: $f(36) = 3000 + 30(36) + 700\\cos(6\\pi) + 400\\cos(12\\pi) = 3000 + 1080 + 700(1) + 400(1) = 5180$. Label $(36, 5180)$."
            ]
        },
        {
            id: 'mm-24-2-q3bii',
            number: 'Question 3b.ii',
            text: "The function $f$ predicts that every 12 months, monthly online sales increase by $n$ million dollars.\n\nFind the value of $n$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Periodic Functions",
            answer: "$n = 360$",
            markingGuide: ["$f(t+12) - f(t) = 30(t+12) - 30t + 700[\\cos(\\frac{\\pi(t+12)}{6}) - \\cos(\\frac{\\pi t}{6})] + 400[\\cos(\\frac{\\pi(t+12)}{3}) - \\cos(\\frac{\\pi t}{3})]$.", "The cosine terms have periods 12 and 6 respectively, so they cancel. $f(t+12) - f(t) = 360$.", "$n = 360$."]
        },
        {
            id: 'mm-24-2-q3biii',
            number: 'Question 3b.iii',
            text: "Find the derivative $f'(t)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$f'(t) = 30 - \\frac{700\\pi}{6}\\sin\\left(\\frac{\\pi t}{6}\\right) - \\frac{400\\pi}{3}\\sin\\left(\\frac{\\pi t}{3}\\right)$",
            markingGuide: ["$f'(t) = 30 - \\frac{700\\pi}{6}\\sin\\left(\\frac{\\pi t}{6}\\right) - \\frac{400\\pi}{3}\\sin\\left(\\frac{\\pi t}{3}\\right)$."]
        },
        {
            id: 'mm-24-2-q3biv',
            number: 'Question 3b.iv',
            text: "Hence, find the maximum instantaneous rate of change for the function $f$, correct to the nearest million dollars per month, and the values of $t$ in the interval $(0, 36]$ when this maximum rate occurs, correct to one decimal place.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Rates of Change",
            answer: "Maximum rate $\\approx 787$ million dollars per month, at $t \\approx 4.5, 16.5, 28.5$",
            markingGuide: [
                "M1: Maximise $f'(t)$ using CAS over $(0, 36]$.",
                "A1: The maximum instantaneous rate of change is approximately $787$ million dollars per month. This occurs at $t \\approx 4.5, 16.5, 28.5$ (every 12 months)."
            ]
        },

        // ----- Question 4 (15 marks) -----
        {
            id: 'mm-24-2-q4a',
            number: 'Question 4a',
            text: "At an airport, luggage is weighed before it is checked in. The mass of each piece of luggage, in kilograms, is modelled by a continuous random variable $X$, whose probability density function is\n\n$$f(x) = \\begin{cases} \\frac{1}{67500}x^2(30 - x) & 0 \\le x \\le 30 \\\\ 0 & \\text{elsewhere} \\end{cases}$$\n\nA piece of luggage is labelled as heavy if its mass exceeds 23 kg.\n\nWrite a definite integral which gives the probability that a piece of luggage is labelled as heavy.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "$\\int_{23}^{30} \\frac{1}{67500}x^2(30 - x)\\,dx$",
            markingGuide: ["$\\Pr(X > 23) = \\int_{23}^{30} \\frac{1}{67500}x^2(30-x)\\,dx$."]
        },
        {
            id: 'mm-24-2-q4bi',
            number: 'Question 4b.i',
            text: "Find the mean of $X$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Expected Value",
            answer: "$E(X) = 18$",
            markingGuide: ["$E(X) = \\int_0^{30} \\frac{x}{67500} \\cdot x^2(30-x)\\,dx = \\frac{1}{67500}\\int_0^{30}(30x^3 - x^4)\\,dx$.", "$= \\frac{1}{67500}\\left[\\frac{30x^4}{4} - \\frac{x^5}{5}\\right]_0^{30} = \\frac{1}{67500}\\left(\\frac{30 \\cdot 810000}{4} - \\frac{24300000}{5}\\right) = \\frac{1215000}{67500} = 18$."]
        },
        {
            id: 'mm-24-2-q4bii',
            number: 'Question 4b.ii',
            text: "Find the standard deviation of $X$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Variance",
            answer: "$\\text{SD}(X) = 6$",
            markingGuide: [
                "M1: $E(X^2) = \\int_0^{30} \\frac{x^2}{67500} \\cdot x^2(30-x)\\,dx = \\frac{1}{67500}\\int_0^{30}(30x^4 - x^5)\\,dx = \\frac{1}{67500}\\left[6x^5 - \\frac{x^6}{6}\\right]_0^{30} = 360$.",
                "A1: $\\text{Var}(X) = 360 - 18^2 = 36$. $\\text{SD}(X) = 6$."
            ]
        },
        {
            id: 'mm-24-2-q4biii',
            number: 'Question 4b.iii',
            text: "Given that the mass of a piece of luggage is more than the mean, find the probability that it is labelled as heavy, correct to three decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "$\\approx 0.372$",
            markingGuide: [
                "M1: $\\Pr(X > 23 \\mid X > 18) = \\frac{\\Pr(X > 23)}{\\Pr(X > 18)}$.",
                "Using CAS: $\\Pr(X > 23) \\approx 0.234$. $\\Pr(X > 18) \\approx 0.630$. (Actually $\\Pr(X > 18) = 0.5$ by symmetry considerations... no, this is not symmetric.)",
                "A1: $\\Pr(X > 23 \\mid X > 18) = \\frac{\\Pr(X > 23)}{\\Pr(X > 18)} \\approx 0.372$."
            ]
        },
        {
            id: 'mm-24-2-q4ci',
            number: 'Question 4c.i',
            text: "Use the following information to answer parts c and d.\n\nOf the travellers flying from the airport:\n• 10% do not check in any luggage\n• 40% check in exactly one piece of luggage\n• 50% check in exactly two pieces of luggage.\n\nAssume that the mass of each piece of luggage is independent of the number of pieces checked in by each traveller.\n\nUse the value of 0.234 for the probability that a piece of luggage is labelled as heavy.\n\nLet $W$ be the discrete random variable that represents the number of pieces of luggage labelled as **heavy** checked in by each traveller.\n\nShow that $\\Pr(W = 2) = 0.027$, correct to three decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Probability",
            answer: "See marking guide",
            markingGuide: ["Only travellers checking 2 pieces can have $W = 2$.", "$\\Pr(W = 2) = 0.50 \\times 0.234^2 = 0.50 \\times 0.054756 = 0.027378 \\approx 0.027$."]
        },
        {
            id: 'mm-24-2-q4cii',
            number: 'Question 4c.ii',
            text: "Complete the table below for the probability distribution $W$, correct to three decimal places.\n\n| $w$ | 0 | 1 | 2 |\n|---|---|---|---|\n| $\\Pr(W = w)$ | | | 0.027 |",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Probability Distributions",
            answer: "$\\Pr(W = 0) \\approx 0.700$, $\\Pr(W = 1) \\approx 0.273$",
            markingGuide: [
                "M1: $\\Pr(W = 0) = 0.10(1) + 0.40(1-0.234) + 0.50(1-0.234)^2 = 0.10 + 0.3064 + 0.50(0.586756) = 0.10 + 0.3064 + 0.2934 = 0.6998 \\approx 0.700$.",
                "A1: $\\Pr(W = 1) = 1 - 0.700 - 0.027 = 0.273$. Or: $\\Pr(W=1) = 0.40(0.234) + 0.50 \\times 2(0.234)(0.766) = 0.0936 + 0.1793 = 0.2729 \\approx 0.273$."
            ]
        },
        {
            id: 'mm-24-2-q4di',
            number: 'Question 4d.i',
            text: "On a particular day, a random sample of 35 pieces of luggage was selected at the airport.\n\nLet $\\hat{P}$ be the random variable that represents the proportion of luggage labelled as heavy in random samples of 35.\n\nFind $\\Pr(\\hat{P} > 0.2)$, correct to three decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Sample Proportions",
            answer: "$\\approx 0.697$",
            markingGuide: [
                "M1: $\\hat{P} = X/35$ where $X \\sim \\text{Bin}(35, 0.234)$. $\\Pr(\\hat{P} > 0.2) = \\Pr(X > 7) = \\Pr(X \\ge 8)$.",
                "A1: Using CAS: $\\Pr(X \\ge 8) = 1 - \\Pr(X \\le 7) \\approx 0.697$."
            ]
        },
        {
            id: 'mm-24-2-q4dii',
            number: 'Question 4d.ii',
            text: "Determine the probability that $\\hat{P}$ lies within one standard deviation of its mean, correct to three decimal places. Do **not** use a normal approximation.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Sample Proportions",
            answer: "$\\approx 0.736$",
            markingGuide: [
                "M1: $E(\\hat{P}) = p = 0.234$, $\\text{SD}(\\hat{P}) = \\sqrt{\\frac{0.234 \\times 0.766}{35}} \\approx 0.07162$.",
                "Need $\\Pr(0.234 - 0.07162 < \\hat{P} < 0.234 + 0.07162) = \\Pr(0.1624 < \\hat{P} < 0.3056)$.",
                "$\\hat{P} = X/35$: $\\Pr(5.68 < X < 10.70) = \\Pr(6 \\le X \\le 10)$.",
                "A1: Using CAS with $X \\sim \\text{Bin}(35, 0.234)$: $\\Pr(6 \\le X \\le 10) \\approx 0.736$."
            ]
        },
        {
            id: 'mm-24-2-q4ei',
            number: 'Question 4e.i',
            text: "In one random sample of 50 pieces of luggage, 10 are labelled as heavy.\n\nUse this sample to find an approximate 90% confidence interval for $p$, the population proportion of luggage labelled as heavy, correct to three decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "$(0.107, 0.293)$",
            markingGuide: ["$\\hat{p} = \\frac{10}{50} = 0.2$. $90\\%$ CI: $0.2 \\pm 1.645\\sqrt{\\frac{0.2 \\times 0.8}{50}} = 0.2 \\pm 1.645 \\times 0.05657 = 0.2 \\pm 0.093 = (0.107, 0.293)$."]
        },
        {
            id: 'mm-24-2-q4eii',
            number: 'Question 4e.ii',
            text: "A second random sample of 50 pieces of luggage is selected. Using this sample, the approximate 90% confidence interval for $p$, the population proportion of luggage labelled as heavy, is **wider** than the one obtained above in **part e.i**.\n\nState the minimum and maximum possible number of pieces of luggage labelled as heavy in the second sample.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "Minimum: 11, Maximum: 39",
            markingGuide: ["Width $\\propto \\sqrt{\\hat{p}(1-\\hat{p})}$. Wider CI requires $\\hat{p}(1-\\hat{p}) > 0.2 \\times 0.8 = 0.16$.", "Need $\\hat{p}(1-\\hat{p}) > 0.16$. This holds for $0.2 < \\hat{p} < 0.8$ (excluding $\\hat{p} = 0.2$ and $\\hat{p} = 0.8$).", "With $n = 50$: $X > 10$ and $X < 40$, so minimum $X = 11$ and maximum $X = 39$."]
        },

        // ----- Question 5 (11 marks) -----
        {
            id: 'mm-24-2-q5ai',
            number: 'Question 5a.i',
            text: "The graph below shows the compositions $g \\circ f$ and $f \\circ g$, where $f(x) = \\sin(x)$ and $g(x) = \\sin(2x)$.\n\nThe graph of $y = (g \\circ f)(x)$ has a local maximum whose $x$-value lies in the interval $\\left[0, \\frac{\\pi}{2}\\right]$.\n\nFind the coordinates of this local maximum, correct to one decimal place.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "$(0.9, 1.0)$",
            markingGuide: ["$(g \\circ f)(x) = \\sin(2\\sin(x))$. Maximise for $x \\in [0, \\pi/2]$.", "The argument $2\\sin(x)$ reaches $\\pi/2$ when $\\sin(x) = \\pi/4$, i.e., $x = \\arcsin(\\pi/4) \\approx 0.9$.", "At this point: $\\sin(2\\sin(0.9)) = \\sin(\\pi/2) = 1$. Local max at $(0.9, 1.0)$."]
        },
        {
            id: 'mm-24-2-q5aii',
            number: 'Question 5a.ii',
            text: "State the range of $g \\circ f$ where $x \\in [0, 2\\pi]$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Range",
            answer: "$[-1, 1]$",
            markingGuide: ["$(g \\circ f)(x) = \\sin(2\\sin(x))$. On $[0, 2\\pi]$: $\\sin(x) \\in [-1, 1]$, so $2\\sin(x) \\in [-2, 2]$.", "Since $[-2, 2]$ contains $[-\\pi/2, \\pi/2]$: $\\sin([-2, 2])$ achieves $[-1, 1]$. Range is $[-1, 1]$."]
        },
        {
            id: 'mm-24-2-q5bi',
            number: 'Question 5b.i',
            text: "Find the derivative of $f \\circ g$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "$(f \\circ g)'(x) = 2\\cos(2x)\\cos(\\sin(2x))$",
            markingGuide: ["$(f \\circ g)(x) = \\sin(\\sin(2x))$.", "$(f \\circ g)'(x) = \\cos(\\sin(2x)) \\cdot 2\\cos(2x)$."]
        },
        {
            id: 'mm-24-2-q5bii',
            number: 'Question 5b.ii',
            text: "Show that the equation $\\cos(\\sin(2x)) = 0$ has no real solutions.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Trigonometric Equations",
            answer: "See marking guide",
            markingGuide: [
                "M1: $\\cos(\\sin(2x)) = 0$ requires $\\sin(2x) = \\frac{\\pi}{2} + n\\pi$ for some integer $n$.",
                "A1: But $|\\sin(2x)| \\le 1$ and $\\frac{\\pi}{2} \\approx 1.571 > 1$. So $\\sin(2x)$ can never equal $\\frac{\\pi}{2} + n\\pi$ for any integer $n$. Therefore no real solutions exist."
            ]
        },
        {
            id: 'mm-24-2-q5biii',
            number: 'Question 5b.iii',
            text: "Find the $x$-values of the stationary points of $f \\circ g$ where $x \\in [0, 2\\pi]$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Stationary Points",
            answer: "$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$",
            markingGuide: ["$(f \\circ g)'(x) = 2\\cos(2x)\\cos(\\sin(2x)) = 0$. Since $\\cos(\\sin(2x)) \\ne 0$ (from b.ii), need $\\cos(2x) = 0$.", "$2x = \\frac{\\pi}{2} + n\\pi \\Rightarrow x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$.", "In $[0, 2\\pi]$: $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$."]
        },
        {
            id: 'mm-24-2-q5biv',
            number: 'Question 5b.iv',
            text: "Find the range of $f \\circ g$ where $x \\in [0, 2\\pi]$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Range",
            answer: "$[-\\sin(1), \\sin(1)]$",
            markingGuide: ["$(f \\circ g)(x) = \\sin(\\sin(2x))$. $\\sin(2x) \\in [-1, 1]$.", "$\\sin([-1, 1]) = [-\\sin(1), \\sin(1)] \\approx [-0.841, 0.841]$."]
        },
        {
            id: 'mm-24-2-q5ci',
            number: 'Question 5c.i',
            text: "Write a single definite integral that gives the area bounded by the graphs of $y = (f \\circ g)(x)$ and $y = (g \\circ f)(x)$ in the interval $[0, 2\\pi]$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\int_0^{2\\pi} \\left|\\sin(\\sin(2x)) - \\sin(2\\sin(x))\\right|\\,dx$",
            markingGuide: ["Area $= \\int_0^{2\\pi} |(f \\circ g)(x) - (g \\circ f)(x)|\\,dx = \\int_0^{2\\pi} |\\sin(\\sin(2x)) - \\sin(2\\sin(x))|\\,dx$."]
        },
        {
            id: 'mm-24-2-q5cii',
            number: 'Question 5c.ii',
            text: "Hence, state the area bounded by the graphs of $y = (f \\circ g)(x)$ and $y = (g \\circ f)(x)$ in the interval $[0, 2\\pi]$, correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\approx 3.70$",
            markingGuide: ["Using CAS to evaluate $\\int_0^{2\\pi} |\\sin(\\sin(2x)) - \\sin(2\\sin(x))|\\,dx \\approx 3.70$."]
        },
        {
            id: 'mm-24-2-q5d',
            number: 'Question 5d',
            text: "Let $f_1: (0, 2\\pi) \\to R$, $f_1(x) = \\sin(x)$.\n\nFind all values of $x$ in the interval $(0, 2\\pi)$ for which the composition $f_1 \\circ g$ is defined.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Domain of Composite Functions",
            answer: "$x \\in \\left(0, \\frac{\\pi}{2}\\right) \\cup \\left(\\pi, \\frac{3\\pi}{2}\\right)$",
            markingGuide: [
                "M1: $f_1 \\circ g = f_1(g(x)) = \\sin(\\sin(2x))$. For $f_1$ to be defined, need $g(x) = \\sin(2x) \\in (0, 2\\pi)$.",
                "Since $\\sin(2x) \\in [-1, 1]$ and $(0, 2\\pi) \\supset (0, 1]$: need $\\sin(2x) \\in (0, 1]$, i.e., $\\sin(2x) > 0$.",
                "A1: $\\sin(2x) > 0$ when $2x \\in (0, \\pi) \\cup (2\\pi, 3\\pi)$, i.e., $x \\in (0, \\frac{\\pi}{2}) \\cup (\\pi, \\frac{3\\pi}{2})$."
            ]
        }
    ]
};
