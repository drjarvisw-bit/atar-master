import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2025_EXAM2: ExamPaper = {
    id: 'mm-2025-exam2',
    year: 2025,
    subject: Subject.METHODS,
    title: "Exam 2 (Tech-Active)",
    questions: [
        // =====================================================================
        // SECTION A: Multiple Choice (20 Questions, 20 marks)
        // =====================================================================
        {
            id: 'mm-25-2-mc1',
            number: 'Question 1',
            text: "A function that has a range of $[6, 12]$ is",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Trig Functions",
            answer: "C",
            markingGuide: ["$9-3\\cos(6x)$: amplitude 3, mean 9, range $[9-3, 9+3] = [6, 12]$."],
            options: [
                { label: "A", text: "$f: R \\to R,\\, f(x) = 6 + 3\\cos(9x)$" },
                { label: "B", text: "$f: R \\to R,\\, f(x) = 6 + 6\\cos(3x)$" },
                { label: "C", text: "$f: R \\to R,\\, f(x) = 9 - 3\\cos(6x)$" },
                { label: "D", text: "$f: R \\to R,\\, f(x) = 9 - 6\\cos(3x)$" }
            ]
        },
        {
            id: 'mm-25-2-mc2',
            number: 'Question 2',
            text: "All asymptotes of the graph of $y = 2\\tan\\!\\left(\\pi\\!\\left(x + \\frac{1}{2}\\right)\\right)$ are given by",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Trig Asymptotes",
            answer: "A",
            markingGuide: ["Period is $\\frac{\\pi}{\\pi} = 1$. Asymptotes of $\\tan(u)$ at $u = \\frac{\\pi}{2} + n\\pi$. So $\\pi(x+\\frac{1}{2}) = \\frac{\\pi}{2} + n\\pi \\implies x = n$, i.e. $x = k, k \\in Z$."],
            options: [
                { label: "A", text: "$x = k,\\, k \\in Z$" },
                { label: "B", text: "$x = 2k,\\, k \\in Z$" },
                { label: "C", text: "$x = 2k+1,\\, k \\in Z$" },
                { label: "D", text: "$x = \\frac{4k+1}{2},\\, k \\in Z$" }
            ]
        },
        {
            id: 'mm-25-2-mc3',
            number: 'Question 3',
            text: "The graph of $y = f(x)$ is shown. Which one of the following options best represents the graph of $y = f(-x) + 2$?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "B",
            markingGuide: ["Reflection in the $y$-axis gives $f(-x)$, then translation 2 units up."],
            options: [
                { label: "A", text: "Graph A" },
                { label: "B", text: "Graph B" },
                { label: "C", text: "Graph C" },
                { label: "D", text: "Graph D" }
            ]
        },
        {
            id: 'mm-25-2-mc4',
            number: 'Question 4',
            text: "Consider the system of equations containing the parameter $k$, where $k \\in R$:\n$kx + 3y = k^2$\n$2x + (2k+1)y = 6 - 2k$\n\nFind the value(s) of $k$ for which this system has no real solutions.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Simultaneous Equations",
            answer: "A",
            markingGuide: [
                "Determinant $\\Delta = k(2k+1) - 6 = 2k^2 + k - 6 = (2k-3)(k+2) = 0$ when $k = 3/2$ or $k = -2$.",
                "Test $k = -2$: equations are $-2x+3y=4$ and $2x-3y=10$ — parallel, distinct → no solution.",
                "Test $k = 3/2$: equations are proportional → infinite solutions.",
                "So $k = -2$ only."
            ],
            options: [
                { label: "A", text: "$k = -2$ only" },
                { label: "B", text: "$k = \\frac{3}{2}$ only" },
                { label: "C", text: "$k = -2$ or $k = \\frac{3}{2}$" },
                { label: "D", text: "$k \\in R \\setminus \\{-2, \\frac{3}{2}\\}$" }
            ]
        },
        {
            id: 'mm-25-2-mc5',
            number: 'Question 5',
            text: "Which of the following sets represents a function that has an inverse function?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "B",
            markingGuide: ["Must be a function (no repeated $x$-values) AND one-to-one (no repeated $y$-values).", "B: $\\{(-1,3),(2,2),(3,1)\\}$ — all $x$ and $y$ values distinct. ✓"],
            options: [
                { label: "A", text: "$\\{(1,3),\\,(2,0),\\,(2,1)\\}$" },
                { label: "B", text: "$\\{(-1,3),\\,(2,2),\\,(3,1)\\}$" },
                { label: "C", text: "$\\{(-1,3),\\,(0,1),\\,(1,3)\\}$" },
                { label: "D", text: "$\\{(1,0),\\,(2,3),\\,(1,3)\\}$" }
            ]
        },
        {
            id: 'mm-25-2-mc6',
            number: 'Question 6',
            text: "The trapezium rule is used, with two trapeziums, to estimate the area bounded by the graph of $y = f(x)$, the $x$-axis and the lines $x = 0$ and $x = 1$.\n\nFor which function will the trapezium rule estimate be larger than the exact area?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Trapezium Rule",
            answer: "B",
            markingGuide: ["Trapezium rule overestimates when the function is concave up ($f''(x) > 0$).", "$f(x) = x^3 + 1$: $f''(x) = 6x > 0$ for $x \\in (0,1)$. Concave up. ✓"],
            options: [
                { label: "A", text: "$f(x) = 3 - e^x$" },
                { label: "B", text: "$f(x) = x^3 + 1$" },
                { label: "C", text: "$f(x) = 3\\sin(x) + 1$" },
                { label: "D", text: "$f(x) = \\log_e(x+3)$" }
            ]
        },
        {
            id: 'mm-25-2-mc7',
            number: 'Question 7',
            text: "Consider the algorithm below.\n\n$n \\leftarrow 17$\n$k \\leftarrow 5$\nwhile $n > k$:\n    $n \\leftarrow n - k$\n    print $n$\nend while\n\nIn order, the values printed by the algorithm are",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Algorithms",
            answer: "C",
            markingGuide: ["$17 > 5$: $n = 12$, print 12.", "$12 > 5$: $n = 7$, print 7.", "$7 > 5$: $n = 2$, print 2.", "$2 \\not> 5$: stop."],
            options: [
                { label: "A", text: "$12$" },
                { label: "B", text: "$12, 7$" },
                { label: "C", text: "$12, 7, 2$" },
                { label: "D", text: "$12, 7, 2, -3$" }
            ]
        },
        {
            id: 'mm-25-2-mc8',
            number: 'Question 8',
            text: "A random sample of $n$ Victorian households is taken to estimate the proportion of all Victorian households that have vegetable gardens. The approximate 95% confidence interval calculated using this sample is $(0.248, 0.552)$, correct to three decimal places.\n\nThe number of households, $n$, in the sample is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "C",
            markingGuide: [
                "Width $= 0.552 - 0.248 = 0.304$. Margin $E = 0.152$. $\\hat{p} = 0.4$.",
                "$1.96\\sqrt{\\frac{0.4 \\times 0.6}{n}} = 0.152$.",
                "$\\frac{0.24}{n} = (\\frac{0.152}{1.96})^2 \\approx 0.006013$. $n \\approx 40$."
            ],
            options: [
                { label: "A", text: "$10$" },
                { label: "B", text: "$28$" },
                { label: "C", text: "$40$" },
                { label: "D", text: "$49$" }
            ]
        },
        {
            id: 'mm-25-2-mc9',
            number: 'Question 9',
            text: "One day, at a particular school, $m$ students walked to school and the remaining $n$ students travelled to school using a different form of transport.\n\nOf the $m$ students who walked, 20% took at least 30 minutes to get to school.\nOf the $n$ students who used a different form of transport, 40% took at least 30 minutes to get to school.\n\nGiven that a randomly selected student took at least 30 minutes to get to school, the probability that they walked to school is given by",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Bayes' Theorem",
            answer: "A",
            markingGuide: ["$P(W|\\text{late}) = \\frac{0.2m}{0.2m + 0.4n} = \\frac{m}{m + 2n}$."],
            options: [
                { label: "A", text: "$\\frac{m}{m+2n}$" },
                { label: "B", text: "$\\frac{2n}{m+2n}$" },
                { label: "C", text: "$\\frac{m}{5(m+n)}$" },
                { label: "D", text: "$\\frac{1}{3}$" }
            ]
        },
        {
            id: 'mm-25-2-mc10',
            number: 'Question 10',
            text: "Consider $f: R \\to R,\\, f(x) = 2x^2 + x - 1$ and $g: R \\to R,\\, g(x) = \\sin(x)$.\n\nThe inequality $(f \\circ g)(x) > 0$ is satisfied when",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "C",
            markingGuide: [
                "$(f \\circ g)(x) = 2\\sin^2(x) + \\sin(x) - 1 = (2\\sin x - 1)(\\sin x + 1) > 0$.",
                "$\\sin x + 1 \\ge 0$ always. Equals 0 when $\\sin x = -1$ (product = 0, not > 0).",
                "Need $2\\sin x - 1 > 0$ and $\\sin x + 1 > 0$, i.e. $\\sin x > \\frac{1}{2}$.",
                "So $\\frac{1}{2} < \\sin(x) \\le 1$."
            ],
            options: [
                { label: "A", text: "$\\sin(x) \\le -1$" },
                { label: "B", text: "$-1 < \\sin(x) < 0$" },
                { label: "C", text: "$\\frac{1}{2} < \\sin(x) \\le 1$" },
                { label: "D", text: "$0 < \\sin(x) < \\frac{1}{2}$" }
            ]
        },
        {
            id: 'mm-25-2-mc11',
            number: 'Question 11',
            text: "The chart below shows the daily price of a stock market share over a 30-day period.\n\nOver which of the following time intervals did the daily price undergo the greatest average rate of change?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Average Rate of Change",
            answer: "B",
            markingGuide: ["From graph: day 3 price ≈ $35, day 17 price ≈ $37.5. Average rate ≈ $2.50/14 ≈ 0.18.", "Compare with other intervals; day 3 to 17 has the steepest positive slope."],
            options: [
                { label: "A", text: "day 3 to day 10" },
                { label: "B", text: "day 3 to day 17" },
                { label: "C", text: "day 14 to day 21" },
                { label: "D", text: "day 14 to day 28" }
            ]
        },
        {
            id: 'mm-25-2-mc12',
            number: 'Question 12',
            text: "For a normal random variable $X$, it is known that $\\Pr(X > 200) = 0.325$ and $\\Pr(180 < X < 200) = 0.589$.\n\nThe mean and standard deviation of $X$ are closest to",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "D",
            markingGuide: [
                "$P(X < 180) = 1 - 0.325 - 0.589 = 0.086$.",
                "Using inverse normal: $z_1 = \\text{invNorm}(0.086) \\approx -1.365$, $z_2 = \\text{invNorm}(0.675) \\approx 0.454$.",
                "$\\frac{180-\\mu}{\\sigma} = -1.365$ and $\\frac{200-\\mu}{\\sigma} = 0.454$.",
                "Solving: $\\mu \\approx 195$, $\\sigma \\approx 11$."
            ],
            options: [
                { label: "A", text: "190 and 10" },
                { label: "B", text: "190 and 11" },
                { label: "C", text: "195 and 10" },
                { label: "D", text: "195 and 11" }
            ]
        },
        {
            id: 'mm-25-2-mc13',
            number: 'Question 13',
            text: "The graphs of $y = f(x)$ and $y = g(x)$ are sketched on the same set of axes. Which of the following could be the graph of $y = (g \\circ f)(x)$?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Composite Functions",
            answer: "B",
            markingGuide: ["Analyse how the outputs of $f$ map through $g$. Where $f(x) = 0$, $(g \\circ f)(x) = g(0)$. Consider domain/range mappings."],
            options: [
                { label: "A", text: "Graph A" },
                { label: "B", text: "Graph B" },
                { label: "C", text: "Graph C" },
                { label: "D", text: "Graph D" }
            ]
        },
        {
            id: 'mm-25-2-mc14',
            number: 'Question 14',
            text: "Let $f$ be the probability density function for a continuous random variable $X$, where\n\n$f(x) = \\begin{cases} k\\sin(x) & 0 \\le x < \\frac{\\pi}{4} \\\\ k\\cos(x) & \\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{2} \\\\ 0 & \\text{otherwise} \\end{cases}$\n\nand $k$ is a positive real number. The value of $k$ is",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "B",
            markingGuide: [
                "$\\int_0^{\\pi/4} k\\sin(x)\\,dx + \\int_{\\pi/4}^{\\pi/2} k\\cos(x)\\,dx = 1$.",
                "$k[-\\cos x]_0^{\\pi/4} + k[\\sin x]_{\\pi/4}^{\\pi/2} = 1$.",
                "$k(1 - \\frac{1}{\\sqrt{2}}) + k(1 - \\frac{1}{\\sqrt{2}}) = 1$.",
                "$2k(1 - \\frac{1}{\\sqrt{2}}) = 1 \\implies k = \\frac{1}{2 - \\sqrt{2}}$."
            ],
            options: [
                { label: "A", text: "$\\frac{1}{\\sqrt{2}}$" },
                { label: "B", text: "$\\frac{1}{2 - \\sqrt{2}}$" },
                { label: "C", text: "$\\sqrt{2} + 2$" },
                { label: "D", text: "$2 - \\sqrt{2}$" }
            ]
        },
        {
            id: 'mm-25-2-mc15',
            number: 'Question 15',
            text: "The graph of $y = g(x)$ passes through the point $(1, 3)$.\n\nThe graph of $y = 1 - g(2x - 3)$ must pass through the point",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "B",
            markingGuide: [
                "We need $2x - 3 = 1 \\implies x = 2$.",
                "Then $y = 1 - g(1) = 1 - 3 = -2$.",
                "Point is $(2, -2)$."
            ],
            options: [
                { label: "A", text: "$(-1, -2)$" },
                { label: "B", text: "$(2, -2)$" },
                { label: "C", text: "$(-1, 2)$" },
                { label: "D", text: "$(2, 2)$" }
            ]
        },
        {
            id: 'mm-25-2-mc16',
            number: 'Question 16',
            text: "Consider the function $h(x) = a\\log_e(bx)$, where $a, b \\in R \\setminus \\{0\\}$.\n\nGiven that its derivative $h'(x)$ has range $(0, \\infty)$, which of the following must be true?",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives of Logarithms",
            answer: "D",
            markingGuide: [
                "$h'(x) = \\frac{a}{x}$. Range $(0, \\infty)$ requires:",
                "If $b > 0$: domain $x > 0$, need $a > 0$ (so $ab > 0$).",
                "If $b < 0$: domain $x < 0$, need $a < 0$ (so $ab > 0$).",
                "In both cases $ab > 0$."
            ],
            options: [
                { label: "A", text: "$a > 0$ only" },
                { label: "B", text: "$a > 0$ and $b < 0$" },
                { label: "C", text: "$a > 0$ and $b > 0$" },
                { label: "D", text: "$ab > 0$" }
            ]
        },
        {
            id: 'mm-25-2-mc17',
            number: 'Question 17',
            text: "Given that $f: R \\to R$ satisfies $\\int_1^2 f(x)\\,dx > \\int_1^3 f(x)\\,dx$, the graph of $y = f(x)$ could be",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integrals",
            answer: "D",
            markingGuide: [
                "$\\int_1^2 f > \\int_1^3 f \\implies \\int_2^3 f(x)\\,dx < 0$.",
                "Need net negative signed area on $[2, 3]$.",
                "Graph D shows the function dipping below the $x$-axis sufficiently in $[2, 3]$."
            ],
            options: [
                { label: "A", text: "Graph A" },
                { label: "B", text: "Graph B" },
                { label: "C", text: "Graph C" },
                { label: "D", text: "Graph D" }
            ]
        },
        {
            id: 'mm-25-2-mc18',
            number: 'Question 18',
            text: "Consider the following graphs, which represent probability mass functions.\n\nWhich pair of these probability mass functions has the same mean?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Discrete Distributions",
            answer: "C",
            markingGuide: ["Calculate $E(X) = \\sum x \\cdot p(x)$ for each. Graphs II and III have the same mean."],
            options: [
                { label: "A", text: "I and II" },
                { label: "B", text: "I and IV" },
                { label: "C", text: "II and III" },
                { label: "D", text: "II and IV" }
            ]
        },
        {
            id: 'mm-25-2-mc19',
            number: 'Question 19',
            text: "Let $A$ be a point on the line $y = x + c$ and $B$ be a point on the curve $y = \\log_e(x-1)$.\n\nIf $A$ and $B$ are placed such that the line segment $AB$ has the minimum possible length, and this length is $\\sqrt{2}$, the value of $c$ must be",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Minimum Distance",
            answer: "D",
            markingGuide: [
                "Tangent to curve parallel to line ($m = 1$): $\\frac{1}{x-1} = 1 \\implies x = 2$, $y = 0$. Point $(2, 0)$.",
                "Distance from $(2, 0)$ to line $x - y + c = 0$: $\\frac{|2 + c|}{\\sqrt{2}} = \\sqrt{2}$.",
                "$|2 + c| = 2$, so $c = 0$ or $c = -4$.",
                "$c = -4$: line intersects curve, so invalid. $c = 0$: line $y = x$ stays above curve. ✓"
            ],
            options: [
                { label: "A", text: "$\\sqrt{2} - 2$" },
                { label: "B", text: "$\\sqrt{2}$" },
                { label: "C", text: "$1$" },
                { label: "D", text: "$0$" }
            ]
        },
        {
            id: 'mm-25-2-mc20',
            number: 'Question 20',
            text: "Let $a > 1$, and consider the functions $f: R \\to R,\\, f(x) = a^x$ and $g: R \\to R,\\, g(x) = a^{2x+2}$.\n\nWhich one of the following sequences of transformations, when applied to $f(x)$, does **not** produce $g(x)$?",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "C",
            markingGuide: [
                "$g(x) = a^{2x+2} = a^{2(x+1)} = f(2(x+1))$, or equivalently $g(x) = a^2 \\cdot (a^x)^2$.",
                "A: dilation $\\frac{1}{2}$ from $y$-axis → $a^{2x}$, then translate 1 left → $a^{2(x+1)} = a^{2x+2}$ ✓.",
                "B: dilation $\\frac{1}{2}$ from $y$-axis → $a^{2x}$, then dilation $a^2$ from $x$-axis → $a^2 \\cdot a^{2x} = a^{2x+2}$ ✓.",
                "C: dilation $a$ from $x$-axis → $a^{x+1}$, dilation $\\frac{1}{2}$ from $y$-axis → $a^{2x+1}$, translate 1 right → $a^{2(x-1)+1} = a^{2x-1}$ ✗.",
                "D: dilation $a^3$ from $x$-axis → $a^{x+3}$, translate 1 right → $a^{x+2}$, dilation $\\frac{1}{2}$ from $y$-axis → $a^{2x+2}$ ✓."
            ],
            options: [
                { label: "A", text: "dilation by a factor of $\\frac{1}{2}$ from the $y$-axis, then translation by 1 unit in the negative direction of the $x$-axis" },
                { label: "B", text: "dilation by a factor of $\\frac{1}{2}$ from the $y$-axis, then dilation by a factor of $a^2$ from the $x$-axis" },
                { label: "C", text: "dilation by a factor of $a$ from the $x$-axis, then dilation by a factor of $\\frac{1}{2}$ from the $y$-axis, then translation by 1 unit in the positive direction of the $x$-axis" },
                { label: "D", text: "dilation by a factor of $a^3$ from the $x$-axis, then translation by 1 unit in the positive direction of the $x$-axis, then dilation by a factor of $\\frac{1}{2}$ from the $y$-axis" }
            ]
        },

        // =====================================================================
        // SECTION B: Extended Response (4 Questions, 60 marks)
        // =====================================================================

        // --- Question 1 (13 marks) ---
        {
            id: 'mm-25-2-q1a',
            number: 'Section B Q1a',
            text: "Let $g: R \\to R$ be defined by $g(x) = 4x^3 - 3x^4$.\n\nFind the coordinates of both stationary points of $g$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Stationary Points",
            answer: "$(0, 0)$ and $(1, 1)$",
            markingGuide: [
                "$g'(x) = 12x^2 - 12x^3 = 12x^2(1-x) = 0$ at $x = 0$ and $x = 1$.",
                "A – $(0, 0)$ and A – $(1, 1)$. (2 correct $x$-values 1 mark.)"
            ]
        },
        {
            id: 'mm-25-2-q1b',
            number: 'Section B Q1b',
            text: "Sketch the graph of $y = g(x)$ on the axes provided, labelling the stationary points and axial intercepts with their coordinates.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Graph Sketching",
            answer: "Quartic graph through $(0,0)$ and $(\\frac{4}{3}, 0)$ with local max at $(1,1)$ and stationary inflection at $(0,0)$",
            markingGuide: [
                "A – intercepts $(0,0)$ and $(\\frac{4}{3}, 0)$.",
                "A – local max at $(1,1)$ and correct graph shape."
            ]
        },
        {
            id: 'mm-25-2-q1c',
            number: 'Section B Q1c',
            text: "Complete the following gradient table with appropriate values of $x$ and $g'(x)$ to show that $g$ has a stationary point of inflection.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Nature of Stationary Points",
            answer: "Table showing $g'(x) > 0$ on both sides of $x = 0$",
            markingGuide: [
                "One possible table: $x$: $-1$, $0$, $\\frac{1}{2}$; $g'(x)$: $24$, $0$, $\\frac{3}{2}$.",
                "A – middle column has $x = 0$ and $g'(0) = 0$.",
                "A – left column has a negative $x$-value with positive gradient, right column has $x \\in (0,1)$ with positive gradient."
            ]
        },
        {
            id: 'mm-25-2-q1d',
            number: 'Section B Q1d',
            text: "Find the average value of $g$ between $x = 0$ and $x = 2$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "$-\\frac{8}{5}$",
            markingGuide: [
                "Average value $= \\frac{1}{2-0}\\int_0^2 (4x^3 - 3x^4)\\,dx = \\frac{1}{2}[x^4 - \\frac{3}{5}x^5]_0^2$.",
                "$= \\frac{1}{2}(16 - \\frac{96}{5}) = \\frac{1}{2} \\cdot \\frac{-16}{5} = -\\frac{8}{5}$.",
                "M – allow a missing $dx$.",
                "A – $-\\frac{8}{5}$."
            ]
        },
        {
            id: 'mm-25-2-q1e',
            number: 'Section B Q1e',
            text: "Let $h$ be the result after applying a sequence of transformations to $g$, such that $h$ has a stationary point of inflection at $(1, 0)$ and a local maximum at $(-1, 1)$.\n\nWrite down a possible sequence of three transformations to map from $g$ to $h$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "See marking guide for multiple valid sequences",
            markingGuide: [
                "One valid sequence: 1. Reflect in the $y$-axis, 2. Dilate by factor 2 from $y$-axis, 3. Translate 1 unit right.",
                "Another: 1. Dilate by factor 2 from $y$-axis, 2. Translate 1 unit left, 3. Reflect in $y$-axis.",
                "A – reflect in $y$-axis (anywhere).",
                "A – dilate by factor 2 from $y$-axis (anywhere).",
                "A – 3 correct transformations in a correct order."
            ]
        },
        {
            id: 'mm-25-2-q1f',
            number: 'Section B Q1f',
            text: "Let $X \\sim \\text{Bi}(4, p)$ be a binomial random variable.\n\nShow that $\\Pr(X \\ge 3) = g(p)$ for all $p \\in [0, 1]$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\Pr(X \\ge 3) = 4p^3 - 3p^4 = g(p)$",
            markingGuide: [
                "$\\Pr(X \\ge 3) = \\Pr(X=3) + \\Pr(X=4)$.",
                "M – evidence of binomial formula: $\\binom{4}{3}p^3(1-p) + \\binom{4}{4}p^4$.",
                "M – complete algebraic working: $= 4p^3(1-p) + p^4 = 4p^3 - 4p^4 + p^4 = 4p^3 - 3p^4 = g(p)$."
            ]
        },

        // --- Question 2 (14 marks) ---
        {
            id: 'mm-25-2-q2a',
            number: 'Section B Q2a',
            text: "Let $f: R \\to R,\\, f(x) = \\frac{x}{2} + 7$ and $g: R \\to R,\\, g(x) = Ae^{kx}$, where $A, k \\in R$.\n\nThe graphs of $y = f(x)$ and $y = g(x)$ intersect at the points $(-12, 1)$ and $(2, 8)$.\n\nWrite down two simultaneous equations in terms of $A$ and $k$. Solve them, using algebra, to show that $A = 2^{18/7}$ and $k = \\frac{3}{14}\\log_e(2)$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponentials",
            answer: "$A = 2^{18/7}$, $k = \\frac{3}{14}\\log_e(2)$",
            markingGuide: [
                "A – simultaneous equations: $1 = Ae^{-12k}$ and $8 = Ae^{2k}$.",
                "M – divide (2) by (1): $8 = e^{14k} \\implies 14k = \\ln 8 = 3\\ln 2 \\implies k = \\frac{3}{14}\\ln 2$.",
                "M – substitute back: $A = 8e^{-2k} = 8 \\cdot 2^{-3/7} = 2^3 \\cdot 2^{-3/7} = 2^{18/7}$."
            ]
        },
        {
            id: 'mm-25-2-q2b',
            number: 'Section B Q2b',
            text: "Find the value of $b$, where $b \\in R$, such that $g(x)$ can be expressed in the form $g(x) = A \\times 2^{bx}$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponentials",
            answer: "$b = \\frac{3}{14}$",
            markingGuide: [
                "$g(x) = Ae^{kx} = A \\cdot e^{\\frac{3}{14}\\ln 2 \\cdot x} = A \\cdot 2^{\\frac{3}{14}x}$.",
                "A – $b = \\frac{3}{14}$. Accept $\\frac{3\\log_e 2}{14}$ as $k$."
            ]
        },
        {
            id: 'mm-25-2-q2c',
            number: 'Section B Q2c',
            text: "Use a definite integral to evaluate the area bounded by the graphs of $y = f(x)$ and $y = g(x)$, where $x \\in [-12, 2]$.\n\nGive the area correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$15.87$",
            markingGuide: [
                "M – correct method involving definite integral: $\\int_{-12}^{2} |f(x) - g(x)|\\,dx$ or $\\int_{-12}^{2} (f(x) - g(x))\\,dx$.",
                "A – $15.87$ (accept $15.8719\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q2di',
            number: 'Section B Q2d.i',
            text: "Let $h(x) = f(x) - g(x)$.\n\nWrite down an expression for the derivative of $h(x)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$h'(x) = \\frac{1}{2} - Ake^{kx}$",
            markingGuide: [
                "A – $h'(x) = \\frac{1}{2} - Ake^{kx}$. Accept equivalent forms."
            ]
        },
        {
            id: 'mm-25-2-q2dii',
            number: 'Section B Q2d.ii',
            text: "Find the maximum value of $h(x)$, where $x \\in [-12, 2]$.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$1.72$",
            markingGuide: [
                "Set $h'(x) = 0$ and solve using CAS.",
                "A – maximum value $\\approx 1.72$ (accept $1.71974\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q2e',
            number: 'Section B Q2e',
            text: "Let $g^{-1}$ be the inverse of $g$.\n\nFind the points where the graph of $y = g^{-1}(x)$ intersects with the graph of $y = 2(x - 7)$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "$(1, -12)$ and $(8, 2)$",
            markingGuide: [
                "M – recognise that $y = 2(x-7)$ is the inverse of $f(x) = \\frac{x}{2} + 7$.",
                "Intersections of $g^{-1}$ and $f^{-1}$ correspond to reflections of intersections of $g$ and $f$ in $y = x$.",
                "A – points $(1, -12)$ and $(8, 2)$."
            ]
        },
        {
            id: 'mm-25-2-q2fi',
            number: 'Section B Q2f.i',
            text: "Let $F$ be an anti-derivative of $f$ that passes through $(0, c)$, where $c \\in R$.\n\nShow that it is **not** possible for the graph of $y = F(x)$ to pass through both $(-12, 1)$ and $(2, 8)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Antidifferentiation",
            answer: "See marking guide",
            markingGuide: [
                "$F(x) = \\frac{x^2}{4} + 7x + c$.",
                "M – find $F(x)$ and attempt to find $c$.",
                "Using $(-12, 1)$: $36 - 84 + c = 1 \\implies c = 49$.",
                "Using $(2, 8)$: $1 + 14 + c = 8 \\implies c = -7$.",
                "M – justification that no single anti-derivative passes through both ($c$ cannot have two values)."
            ]
        },
        {
            id: 'mm-25-2-q2fii',
            number: 'Section B Q2f.ii',
            text: "The graph of $y = F(x)$ can be dilated by a factor of $m$ from the $x$-axis such that its image passes through both $(-12, 1)$ and $(2, 8)$.\n\nFind the values of $m$ and $c$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Transformations",
            answer: "See marking guide",
            markingGuide: [
                "After dilation: $y = m(\\frac{x^2}{4} + 7x + c)$.",
                "M – set up simultaneous equations with $F(x)$ passing through both points.",
                "$m(-48 + c) = 1$ and $m(15 + c) = 8$.",
                "A – solve for both $m$ and $c$."
            ]
        },

        // --- Question 3 (14 marks) ---
        {
            id: 'mm-25-2-q3ai',
            number: 'Section B Q3a.i',
            text: "The time taken for a driver to travel to work each day, in minutes, is modelled by a continuous random variable $T$ with probability density function\n\n$f(t) = \\begin{cases} \\frac{1}{1215000}(t-29)(59-t)^3 & 29 \\le t \\le 59 \\\\ 0 & \\text{otherwise} \\end{cases}$\n\nFind the mean time taken, in minutes, for the driver to travel to work each day.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Distributions",
            answer: "$39$ minutes",
            markingGuide: [
                "A – mean $= \\int_{29}^{59} t \\cdot f(t)\\,dt = 39$."
            ]
        },
        {
            id: 'mm-25-2-q3aii',
            number: 'Section B Q3a.ii',
            text: "Find the standard deviation of the time taken, in minutes, for the driver to travel to work each day.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Distributions",
            answer: "$\\approx 5.34$ minutes",
            markingGuide: [
                "C – correct formula with their mean from 3a.i: $\\text{Var}(T) = \\int_{29}^{59} (t - \\mu)^2 f(t)\\,dt$ or $E(T^2) - \\mu^2$.",
                "A – $\\text{sd} \\approx 5.34$ (accept exact or other forms). (5.34... or var 1 mark only.)"
            ]
        },
        {
            id: 'mm-25-2-q3bi',
            number: 'Section B Q3b.i',
            text: "The driver allows $k$ minutes to travel to work each day. If the journey takes longer than $k$ minutes, the driver will be late. Whether the driver is late on a particular day is independent of whether they are late on any other day.\n\nIf $k = 47$, write a definite integral to show that the probability of the driver being late is $0.08704$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Distributions",
            answer: "$\\int_{47}^{59} \\frac{1}{1215000}(t-29)(59-t)^3\\,dt = 0.08704$",
            markingGuide: [
                "A – $\\int_{47}^{59} f(t)\\,dt$ or equivalent with correct terminals."
            ]
        },
        {
            id: 'mm-25-2-q3bii',
            number: 'Section B Q3b.ii',
            text: "If $k = 47$, find the probability that the driver will be late on at least one day in a five-day working week.\n\nGive your answer correct to four decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$0.3658$",
            markingGuide: [
                "M – either method: $1 - (1 - 0.08704)^5$ or $1 - \\binom{5}{0}(0.08704)^0(0.91296)^5$.",
                "A – $0.3658$ (accept $0.365752\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q3biii',
            number: 'Section B Q3b.iii',
            text: "For $k = 47$, let $\\hat{P}$ be the proportion of days the driver is late in any five-day working week.\n\nFind $\\Pr(0.4 \\le \\hat{P} \\le 0.6)$ correct to four decimal places.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Sample Proportions",
            answer: "$0.0631$",
            markingGuide: [
                "$\\hat{P}$ takes values $0, 0.2, 0.4, 0.6, 0.8, 1$ based on $X \\sim \\text{Bi}(5, 0.08704)$.",
                "$\\Pr(0.4 \\le \\hat{P} \\le 0.6) = \\Pr(X = 2) + \\Pr(X = 3)$.",
                "M – seeing 2 and 3.",
                "A – $0.0631$ (accept $0.063145\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q3biv',
            number: 'Section B Q3b.iv',
            text: "Find the **integer** $k$ such that the probability, correct to one decimal place, of the driver being late at least once in any five-day working week is $0.2$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$k = 49$",
            markingGuide: [
                "Need $1 - (1-p)^5 = 0.2$ where $p = \\Pr(T > k) = \\int_k^{59} f(t)\\,dt$.",
                "$(1-p)^5 = 0.8 \\implies p = 1 - 0.8^{1/5} \\approx 0.04365$.",
                "M – setting up an expression for the probability of being late at least once in terms of $p$ or $k$, or finding correct $p$ value.",
                "A – $k = 49$."
            ]
        },
        {
            id: 'mm-25-2-q3ci',
            number: 'Section B Q3c.i',
            text: "At a given traffic light, the wait time is modelled by a normal distribution with a mean of 2.5 minutes and a standard deviation of $\\sigma$ minutes.\n\nIf $\\sigma = 0.6$, find the probability that the wait time will be less than 3.5 minutes.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$0.95$",
            markingGuide: [
                "A – $\\Pr(T < 3.5) \\approx 0.95$ (accept $0.9522\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q3cii',
            number: 'Section B Q3c.ii',
            text: "Find the value of $\\sigma$ such that there is a 2% chance of a wait time longer than 3.5 minutes.\n\nGive your answer correct to two decimal places.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Normal Distribution",
            answer: "$\\sigma \\approx 0.49$",
            markingGuide: [
                "$\\Pr(T > 3.5) = 0.02 \\implies \\Pr(T < 3.5) = 0.98$.",
                "$\\frac{3.5 - 2.5}{\\sigma} = \\text{invNorm}(0.98) \\approx 2.054$.",
                "A – $\\sigma \\approx 0.49$ (accept $0.4869\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q3d',
            number: 'Section B Q3d',
            text: "The driver passes through three traffic lights ($A$, $B$ and $C$) on their journey to work. The probability of each traffic light being red is shown in the table below.\n\n| Traffic light | $A$ | $B$ | $C$ |\n|---|---|---|---|\n| Probability red | 0.2 | 0.3 | 0.1 |\n\nLet $Y$ be the random variable representing the number of traffic lights that are red on the driver's journey to work. Assume that each traffic light being red is independent of any other traffic light being red.\n\nComplete the following table for the probability distribution of $Y$.\n\n| $y$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $\\Pr(Y=y)$ | | | | |",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Discrete Distributions",
            answer: "$\\Pr(0) = 0.504,\\, \\Pr(1) = 0.398,\\, \\Pr(2) = 0.092,\\, \\Pr(3) = 0.006$",
            markingGuide: [
                "$\\Pr(0) = 0.8 \\times 0.7 \\times 0.9 = 0.504$.",
                "$\\Pr(3) = 0.2 \\times 0.3 \\times 0.1 = 0.006$.",
                "$\\Pr(2) = 0.2(0.3)(0.9) + 0.2(0.7)(0.1) + 0.8(0.3)(0.1) = 0.054 + 0.014 + 0.024 = 0.092$.",
                "$\\Pr(1) = 1 - 0.504 - 0.092 - 0.006 = 0.398$.",
                "A – at least two correct.",
                "A – all correct (accept equivalent fractions or exact decimals)."
            ]
        },

        // --- Question 4 (19 marks) ---
        {
            id: 'mm-25-2-q4a',
            number: 'Section B Q4a',
            text: "Consider the function $f: \\left[0, \\frac{5\\pi}{2}\\right] \\to R,\\, f(x) = \\sin(x) + 1$.\n\nEvaluate $f\\!\\left(\\frac{2\\pi}{3}\\right)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$\\frac{\\sqrt{3}}{2} + 1 = \\frac{2 + \\sqrt{3}}{2}$",
            markingGuide: [
                "A – $f(\\frac{2\\pi}{3}) = \\sin(\\frac{2\\pi}{3}) + 1 = \\frac{\\sqrt{3}}{2} + 1$. Accept equivalent forms."
            ]
        },
        {
            id: 'mm-25-2-q4b',
            number: 'Section B Q4b',
            text: "Find the exact values of $x$ for which $f(x) = \\frac{3}{2}$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$x = \\frac{\\pi}{6},\\, \\frac{5\\pi}{6},\\, \\frac{13\\pi}{6}$",
            markingGuide: [
                "$\\sin(x) + 1 = \\frac{3}{2} \\implies \\sin(x) = \\frac{1}{2}$.",
                "A – $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}$ (all three, within domain $[0, \\frac{5\\pi}{2}]$)."
            ]
        },
        {
            id: 'mm-25-2-q4c',
            number: 'Section B Q4c',
            text: "There exist real numbers $a$ and $k$ in the interval $\\left(0, \\frac{5\\pi}{2}\\right)$, such that $f(x+k) = f(x)$ for all $x \\in [0, a]$.\n\nFind the value of $k$ and the largest possible value of $a$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Periodicity",
            answer: "$k = 2\\pi$, $a = \\frac{\\pi}{2}$",
            markingGuide: [
                "$f(x+k) = f(x)$ means $k$ is a period (or multiple). The fundamental period of $\\sin(x)+1$ is $2\\pi$.",
                "A – $k = 2\\pi$.",
                "A – largest $a$ such that $[0, a]$ and $[k, a+k]$ both lie in $[0, \\frac{5\\pi}{2}]$: $a + 2\\pi \\le \\frac{5\\pi}{2} \\implies a \\le \\frac{\\pi}{2}$."
            ]
        },
        {
            id: 'mm-25-2-q4d',
            number: 'Section B Q4d',
            text: "Consider the tangent to the graph of $y = f(x)$ at the point $A$ where $x = \\frac{2\\pi}{3}$, as shown on the axes.\n\nFind the equation of the tangent to the graph of $y = f(x)$ at the point where $x = \\frac{2\\pi}{3}$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "$y = -\\frac{1}{2}(x - \\frac{2\\pi}{3}) + 1 + \\frac{\\sqrt{3}}{2}$",
            markingGuide: [
                "$f'(x) = \\cos(x)$. $f'(\\frac{2\\pi}{3}) = \\cos(\\frac{2\\pi}{3}) = -\\frac{1}{2}$.",
                "A – tangent: $y = -\\frac{1}{2}(x - \\frac{2\\pi}{3}) + \\frac{2+\\sqrt{3}}{2}$. Accept equivalent forms. Must have $y = $."
            ]
        },
        {
            id: 'mm-25-2-q4ei',
            number: 'Section B Q4e.i',
            text: "Apply two iterations of Newton's method to $f$ with $x_0 = \\frac{2\\pi}{3}$.\n\nWrite down $x_2$, correct to one decimal place.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Newton's Method",
            answer: "$x_2 \\approx 5.2$",
            markingGuide: [
                "$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)} = \\frac{2\\pi}{3} - \\frac{\\frac{2+\\sqrt{3}}{2}}{-\\frac{1}{2}}$.",
                "Continue to $x_2$.",
                "A – $x_2 \\approx 5.2$ (accept $5.2036\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q4eii',
            number: 'Section B Q4e.ii',
            text: "On the axes in **part d**, draw the tangent to the graph of $y = f(x)$ at the point where $x = x_1$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Newton's Method",
            answer: "Tangent line drawn at $x = x_1$ on the graph",
            markingGuide: [
                "A – tangent should be a straight line, with the point of tangency directly above the $x$-intercept of the dashed line."
            ]
        },
        {
            id: 'mm-25-2-q4fi',
            number: 'Section B Q4f.i',
            text: "Now consider the line $y = t(x)$, which is the tangent to the graph of $y = f(x)$ at the point $(p, f(p))$, where $p \\in \\left(0, \\frac{5\\pi}{2}\\right)$.\n\nShow that $t(x) = \\cos(p)(x - p) + \\sin(p) + 1$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Lines",
            answer: "See marking guide",
            markingGuide: [
                "$f'(x) = \\cos(x)$, so gradient at $x = p$ is $\\cos(p)$.",
                "M – obtaining $f'(p) = \\cos(p)$ and $f(p) = \\sin(p) + 1$.",
                "M – correct substitution: $t(x) = \\cos(p)(x-p) + \\sin(p) + 1$."
            ]
        },
        {
            id: 'mm-25-2-q4fii',
            number: 'Section B Q4f.ii',
            text: "Determine the minimum and maximum possible values for the $y$-intercept of $y = t(x)$, for $p \\in \\left(0, \\frac{5\\pi}{2}\\right)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "Min $\\approx -5.2$, Max $\\approx 4.1$",
            markingGuide: [
                "$y$-intercept: $t(0) = -p\\cos(p) + \\sin(p) + 1$.",
                "Use CAS to find min and max of $h(p) = -p\\cos(p) + \\sin(p) + 1$ on $(0, \\frac{5\\pi}{2})$.",
                "AA – (1 mark if approx. 4.1, −5.2)."
            ]
        },
        {
            id: 'mm-25-2-q4fiii',
            number: 'Section B Q4f.iii',
            text: "Determine the values of $p$ for which $y = t(x)$ has a unique $x$-intercept that is equal to the $x$-intercept of $y = f(x)$.\n\nGive your answers correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Tangent Properties",
            answer: "See marking guide",
            markingGuide: [
                "The $x$-intercept of $f(x) = \\sin(x)+1$ is at $x = \\frac{3\\pi}{2}$ (where $\\sin x = -1$).",
                "Need the tangent at $(p, f(p))$ to have its unique $x$-intercept at $\\frac{3\\pi}{2}$.",
                "M – for or equivalent setup.",
                "A – both values of $p$ (method implied)."
            ]
        },
        {
            id: 'mm-25-2-q4gi',
            number: 'Section B Q4g.i',
            text: "Let $g: \\left[0, \\frac{5\\pi}{2}\\right] \\to R,\\, g(x) = ax^3 + bx^2 + cx + d$ be a polynomial function, where $a, b, c, d \\in R$.\n\nSuppose $g(0) = f(0)$ and $g'(0) = f'(0)$.\n\nShow that $c = 1$ and $d = 1$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Polynomial Approximation",
            answer: "$c = 1$, $d = 1$",
            markingGuide: [
                "$g(0) = d$ and $f(0) = \\sin(0)+1 = 1$, so $d = 1$.",
                "M – show that $d = 1$.",
                "$g'(x) = 3ax^2 + 2bx + c$. $g'(0) = c$ and $f'(0) = \\cos(0) = 1$, so $c = 1$.",
                "M – show that $c = 1$."
            ]
        },
        {
            id: 'mm-25-2-q4gii',
            number: 'Section B Q4g.ii',
            text: "If $g(2\\pi) = f(2\\pi)$ and $g'(2\\pi) = f'(2\\pi)$, determine the area bounded by the graphs of $y = f(x)$ and $y = g(x)$, for $x \\in [0, 2\\pi]$.\n\nGive your answer correct to two decimal places.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\approx 1.53$",
            markingGuide: [
                "From conditions: $g(2\\pi) = 1$, $g'(2\\pi) = 1$.",
                "With $c=1, d=1$: $8\\pi^3 a + 4\\pi^2 b + 2\\pi + 1 = 1$ and $12\\pi^2 a + 4\\pi b + 1 = 1$.",
                "M – correct $a$ and $b$ or integral expression.",
                "A – area $\\approx 1.53$ (accept $1.5325\\ldots$)."
            ]
        },
        {
            id: 'mm-25-2-q4giii',
            number: 'Section B Q4g.iii',
            text: "Let $a = 0$, $c = 1$, $d = 1$.\n\nFind $b$ and $r$, such that $g(r) = f(r)$ and $g'(r) = f'(r)$, where $b \\in R$ and $r \\in \\left(0, \\frac{5\\pi}{2}\\right)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Polynomial Approximation",
            answer: "See marking guide",
            markingGuide: [
                "With $a = 0$: $g(x) = bx^2 + x + 1$.",
                "$g(r) = f(r) \\implies br^2 + r + 1 = \\sin(r) + 1 \\implies br^2 = \\sin(r) - r$.",
                "$g'(r) = f'(r) \\implies 2br = \\cos(r) - 1$.",
                "M – obtaining two equations for $b$ and $r$ or approximate values or one exact value.",
                "A – both exact (method implied)."
            ]
        }
    ]
};
