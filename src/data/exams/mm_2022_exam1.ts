import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2022_EXAM1: ExamPaper = {
    id: 'mm-2022-1',
    year: 2022,
    subject: Subject.METHODS,
    title: "Exam 1 (Tech-Free)",
    questions: [
        // Question 1 (3 marks)
        {
            id: 'mm-22-1-q1a',
            number: 'Question 1a',
            text: "Let $y = 3xe^{2x}$. Find $\\frac{dy}{dx}$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$\\frac{dy}{dx} = 3e^{2x} + 6xe^{2x} = 3e^{2x}(1 + 2x)$",
            markingGuide: [
                "Apply product rule: $u = 3x$, $v = e^{2x}$.",
                "$u' = 3$, $v' = 2e^{2x}$.",
                "$\\frac{dy}{dx} = 3e^{2x} + 6xe^{2x}$ or equivalently $3e^{2x}(1 + 2x)$."
            ]
        },
        {
            id: 'mm-22-1-q1b',
            number: 'Question 1b',
            text: "Find and simplify the rule of $f'(x)$, where $f: R \\to R$, $f(x) = \\frac{\\cos(x)}{e^x}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Quotient Rule",
            answer: "$f'(x) = \\frac{-e^x\\sin(x) - e^x\\cos(x)}{e^{2x}} = -\\frac{\\sin(x) + \\cos(x)}{e^x}$",
            markingGuide: [
                "Apply quotient rule: $u = \\cos(x)$, $v = e^x$.",
                "$u' = -\\sin(x)$, $v' = e^x$.",
                "$f'(x) = \\frac{-e^x\\sin(x) - e^x\\cos(x)}{e^{2x}}$.",
                "Simplify: $f'(x) = -\\frac{\\sin(x) + \\cos(x)}{e^x}$."
            ]
        },
        // Question 2 (4 marks)
        {
            id: 'mm-22-1-q2a',
            number: 'Question 2a',
            text: "Let $g : \\left(\\frac{3}{2},\\, \\infty\\right) \\to R$, $g(x) = \\frac{3}{2x - 3}$. Find the rule for an antiderivative of $g(x)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Integration",
            answer: "$\\frac{3}{2} \\log_e(2x - 3) + c$",
            markingGuide: [
                "Recognise $\\int \\frac{3}{2x-3} dx = \\frac{3}{2} \\log_e(2x - 3) + c$."
            ]
        },
        {
            id: 'mm-22-1-q2b',
            number: 'Question 2b',
            text: "Evaluate $\\int_0^1 f(x)\\big(2f(x) - 3\\big)\\,dx$, where $\\int_0^1 \\big[f(x)\\big]^2\\,dx = \\frac{1}{5}$ and $\\int_0^1 f(x)\\,dx = \\frac{1}{3}$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Integration Properties",
            answer: "$-\\frac{3}{5}$",
            markingGuide: [
                "Expand: $\\int_0^1 f(x)(2f(x) - 3)\\,dx = \\int_0^1 2[f(x)]^2 - 3f(x)\\,dx$.",
                "Split: $= 2\\int_0^1 [f(x)]^2\\,dx - 3\\int_0^1 f(x)\\,dx$.",
                "Substitute: $= 2 \\times \\frac{1}{5} - 3 \\times \\frac{1}{3} = \\frac{2}{5} - 1 = -\\frac{3}{5}$."
            ]
        },
        // Question 3 (3 marks)
        {
            id: 'mm-22-1-q3',
            number: 'Question 3',
            text: "Consider the system of equations\n$$kx - 5y = 4 + k$$\n$$3x + (k + 8)y = -1$$\nDetermine the value of $k$ for which the system of equations above has an infinite number of solutions.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Simultaneous Equations",
            answer: "$k = -3$",
            markingGuide: [
                "For infinite solutions, the ratios of coefficients must be equal: $\\frac{k}{3} = \\frac{-5}{k+8} = \\frac{4+k}{-1}$.",
                "From $\\frac{k}{3} = \\frac{-5}{k+8}$: $k(k+8) = -15$, so $k^2 + 8k + 15 = 0$, $(k+3)(k+5) = 0$, giving $k = -3$ or $k = -5$.",
                "Check $\\frac{4+k}{-1}$: For $k = -3$: $\\frac{1}{-1} = -1$ and $\\frac{-3}{3} = -1$ ✓. For $k = -5$: $\\frac{-1}{-1} = 1$ and $\\frac{-5}{3} \\neq 1$ ✗.",
                "Therefore $k = -3$."
            ]
        },
        // Question 4 (5 marks)
        {
            id: 'mm-22-1-q4a',
            number: 'Question 4a',
            text: "A card is drawn from a deck of red and blue cards. After verifying the colour, the card is replaced. This is performed four times. Each card has probability $\\frac{1}{2}$ of being red and $\\frac{1}{2}$ of being blue. Let $X$ be the number of blue cards drawn.\n\nComplete the table:\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $\\Pr(X=x)$ | $\\frac{1}{16}$ | | $\\frac{6}{16}$ | | |",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\Pr(X=1) = \\frac{4}{16}$, $\\Pr(X=3) = \\frac{4}{16}$, $\\Pr(X=4) = \\frac{1}{16}$",
            markingGuide: [
                "$X \\sim \\text{Bi}(4, \\frac{1}{2})$.",
                "$\\Pr(X=1) = \\binom{4}{1}(\\frac{1}{2})^4 = \\frac{4}{16}$.",
                "$\\Pr(X=3) = \\binom{4}{3}(\\frac{1}{2})^4 = \\frac{4}{16}$.",
                "$\\Pr(X=4) = (\\frac{1}{2})^4 = \\frac{1}{16}$."
            ]
        },
        {
            id: 'mm-22-1-q4b',
            number: 'Question 4b',
            text: "Given that the first card drawn is blue, find the probability that exactly two of the next three cards drawn will be red.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\frac{3}{8}$",
            markingGuide: [
                "Given first card is blue, the remaining 3 draws are independent with $p = \\frac{1}{2}$.",
                "$\\Pr(\\text{exactly 2 red out of 3}) = \\binom{3}{2}(\\frac{1}{2})^2(\\frac{1}{2})^1 = \\frac{3}{8}$."
            ]
        },
        {
            id: 'mm-22-1-q4c',
            number: 'Question 4c',
            text: "The deck is changed so that the probability of a card being red is $\\frac{2}{3}$ and the probability of a card being blue is $\\frac{1}{3}$. Given that the first card drawn is blue, find the probability that exactly two of the next three cards drawn will be red.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "$\\frac{4}{9}$",
            markingGuide: [
                "Given first card is blue (already happened), remaining 3 draws: $p(\\text{red}) = \\frac{2}{3}$.",
                "$\\Pr(\\text{exactly 2 red out of 3}) = \\binom{3}{2}(\\frac{2}{3})^2(\\frac{1}{3})^1 = 3 \\times \\frac{4}{9} \\times \\frac{1}{3} = \\frac{12}{27} = \\frac{4}{9}$."
            ]
        },
        // Question 5 (5 marks)
        {
            id: 'mm-22-1-q5a',
            number: 'Question 5a',
            text: "Solve $10^{3x-13} = 100$ for $x$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponentials",
            answer: "$x = 5$",
            markingGuide: [
                "Write $100 = 10^2$.",
                "$10^{3x-13} = 10^2$, so $3x - 13 = 2$.",
                "$3x = 15$, $x = 5$."
            ]
        },
        {
            id: 'mm-22-1-q5b',
            number: 'Question 5b',
            text: "Find the maximal domain of $f$, where $f(x) = \\log_e(x^2 - 2x - 3)$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Functions",
            answer: "$(-\\infty, -1) \\cup (3, \\infty)$",
            markingGuide: [
                "Require $x^2 - 2x - 3 > 0$.",
                "Factorise: $(x - 3)(x + 1) > 0$.",
                "Critical points: $x = -1$ and $x = 3$.",
                "Solution: $x < -1$ or $x > 3$, i.e., $(-\\infty, -1) \\cup (3, \\infty)$."
            ]
        },
        // Question 6 (8 marks)
        {
            id: 'mm-22-1-q6a',
            number: 'Question 6a',
            text: "The graph of $y = f(x)$, where $f: [0, 2\\pi] \\to R$, $f(x) = 2\\sin(2x) - 1$, is shown.\n\nOn the axes, draw the graph of $y = g(x)$, where $g(x)$ is the reflection of $f(x)$ in the horizontal axis.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$g(x) = -f(x) = -2\\sin(2x) + 1 = 1 - 2\\sin(2x)$",
            markingGuide: [
                "Correct shape: reflection of $f(x)$ in the $x$-axis.",
                "$g(x) = -(2\\sin(2x) - 1) = 1 - 2\\sin(2x)$.",
                "Range of $g$: $[-1, 3]$, endpoints correct."
            ]
        },
        {
            id: 'mm-22-1-q6b',
            number: 'Question 6b',
            text: "Find all values of $k$ such that $f(k) = 0$ and $k \\in [0, 2\\pi]$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$k = \\frac{\\pi}{12},\\, \\frac{5\\pi}{12},\\, \\frac{13\\pi}{12},\\, \\frac{17\\pi}{12}$",
            markingGuide: [
                "$2\\sin(2k) - 1 = 0 \\Rightarrow \\sin(2k) = \\frac{1}{2}$.",
                "$2k = \\frac{\\pi}{6},\\, \\frac{5\\pi}{6},\\, \\frac{13\\pi}{6},\\, \\frac{17\\pi}{6}$ (for $2k \\in [0, 4\\pi]$).",
                "$k = \\frac{\\pi}{12},\\, \\frac{5\\pi}{12},\\, \\frac{13\\pi}{12},\\, \\frac{17\\pi}{12}$."
            ]
        },
        {
            id: 'mm-22-1-q6ci',
            number: 'Question 6c.i',
            text: "Let $h: D \\to R$, $h(x) = 2\\sin(2x) - 1$, where $h(x)$ has the same rule as $f(x)$ with a different domain. The graph of $y = h(x)$ is translated $a$ units in the positive horizontal direction and $b$ units in the positive vertical direction so that it is mapped onto the graph of $y = g(x)$, where $a, b \\in (0, \\infty)$.\n\nFind the value for $b$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$b = 2$",
            markingGuide: [
                "$g(x) = 1 - 2\\sin(2x)$ has vertical midline at $y = 1$; $h(x) = 2\\sin(2x) - 1$ has midline at $y = -1$.",
                "Vertical shift: $b = 1 - (-1) = 2$."
            ]
        },
        {
            id: 'mm-22-1-q6cii',
            number: 'Question 6c.ii',
            text: "Find the smallest positive value for $a$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$a = \\frac{\\pi}{2}$",
            markingGuide: [
                "After vertical shift: $h(x) + 2 = 2\\sin(2x) + 1$.",
                "Need $2\\sin(2(x - a)) + 1 = 1 - 2\\sin(2x)$, so $\\sin(2x - 2a) = -\\sin(2x)$.",
                "$\\sin(2x - 2a) = \\sin(2x + \\pi)$, so $2a = \\pi$ (smallest positive), $a = \\frac{\\pi}{2}$."
            ]
        },
        {
            id: 'mm-22-1-q6ciii',
            number: 'Question 6c.iii',
            text: "Hence, or otherwise, state the domain $D$ of $h(x)$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$D = \\left[-\\frac{\\pi}{2},\\, \\frac{3\\pi}{2}\\right]$",
            markingGuide: [
                "$g(x)$ is defined on $[0, 2\\pi]$, and $h(x - \\frac{\\pi}{2}) + 2 = g(x)$.",
                "So $h$ is evaluated at $x - \\frac{\\pi}{2}$ for $x \\in [0, 2\\pi]$.",
                "Domain of $h$: $[0 - \\frac{\\pi}{2},\\, 2\\pi - \\frac{\\pi}{2}] = [-\\frac{\\pi}{2},\\, \\frac{3\\pi}{2}]$."
            ]
        },
        // Question 7 (7 marks)
        {
            id: 'mm-22-1-q7ai',
            number: 'Question 7a.i',
            text: "A tilemaker wants to make square tiles of size 20 cm × 20 cm. The front surface is painted with two colours meeting these conditions:\n- Condition 1: Each colour covers half the front surface.\n- Condition 2: Tiles can line up horizontally to form a continuous pattern.\n\nFor Type A, colours are divided using $f(x) = 4\\sin\\left(\\frac{\\pi x}{10}\\right) + a$, where $a \\in R$. Tile corners are at $(0,0)$, $(20,0)$, $(20,20)$, $(0,20)$.\n\nFind the area of the front surface of each tile.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Area",
            answer: "$400$ cm²",
            markingGuide: [
                "Area $= 20 \\times 20 = 400$ cm²."
            ]
        },
        {
            id: 'mm-22-1-q7aii',
            number: 'Question 7a.ii',
            text: "Find the value of $a$ so that a Type A tile meets Condition 1.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Integration",
            answer: "$a = 10$",
            markingGuide: [
                "Area below $f(x)$ from $x = 0$ to $x = 20$: $\\int_0^{20} f(x)\\,dx = \\int_0^{20} 4\\sin(\\frac{\\pi x}{10}) + a\\,dx$.",
                "$= \\left[-\\frac{40}{\\pi}\\cos(\\frac{\\pi x}{10}) + ax\\right]_0^{20} = -\\frac{40}{\\pi}(\\cos(2\\pi) - \\cos(0)) + 20a = 0 + 20a = 20a$.",
                "For Condition 1: $20a = 200$, so $a = 10$."
            ]
        },
        {
            id: 'mm-22-1-q7b',
            number: 'Question 7b',
            text: "Type B tiles are divided using $g(x) = -\\frac{1}{100}x^3 + \\frac{3}{10}x^2 - 2x + 10$.\n\nShow that a Type B tile meets Condition 1.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Integration",
            answer: "$\\int_0^{20} g(x)\\,dx = 200$",
            markingGuide: [
                "$\\int_0^{20} g(x)\\,dx = \\int_0^{20} \\left(-\\frac{x^3}{100} + \\frac{3x^2}{10} - 2x + 10\\right)dx$.",
                "$= \\left[-\\frac{x^4}{400} + \\frac{x^3}{10} - x^2 + 10x\\right]_0^{20}$.",
                "$= -\\frac{160000}{400} + \\frac{8000}{10} - 400 + 200 = -400 + 800 - 400 + 200 = 200$.",
                "Since $200 = \\frac{1}{2} \\times 400$, Condition 1 is met."
            ]
        },
        {
            id: 'mm-22-1-q7c',
            number: 'Question 7c',
            text: "Determine the endpoints of $f(x)$ and $g(x)$ on each tile. Hence, use these values to confirm that Type A and Type B tiles can be placed in any order to produce a continuous pattern to meet Condition 2.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Function Evaluation",
            answer: "Both $f$ and $g$ have value 10 at $x = 0$ and $x = 20$.",
            markingGuide: [
                "$f(0) = 4\\sin(0) + 10 = 10$ and $f(20) = 4\\sin(2\\pi) + 10 = 10$.",
                "$g(0) = 0 + 0 - 0 + 10 = 10$ and $g(20) = -80 + 120 - 40 + 10 = 10$.",
                "Both functions have the same value (10) at $x = 0$ and $x = 20$, so tiles connect continuously."
            ]
        },
        // Question 8 (5 marks)
        {
            id: 'mm-22-1-q8a',
            number: 'Question 8a',
            text: "Part of the graph of $y = f(x)$ is shown. The rule $A(k) = k\\sin(k)$ gives the area bounded by the graph of $f$, the horizontal axis and the line $x = k$.\n\nState the value of $A\\left(\\frac{\\pi}{3}\\right)$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integral",
            answer: "$A\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi\\sqrt{3}}{6}$",
            markingGuide: [
                "$A\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3} \\cdot \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\pi\\sqrt{3}}{6}$."
            ]
        },
        {
            id: 'mm-22-1-q8b',
            number: 'Question 8b',
            text: "Evaluate $f\\left(\\frac{\\pi}{3}\\right)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Fundamental Theorem of Calculus",
            answer: "$f\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} + \\frac{\\pi}{6}$",
            markingGuide: [
                "Since $\\int_0^k f(x)\\,dx = A(k) = k\\sin(k)$, by the Fundamental Theorem of Calculus: $f(k) = A'(k)$.",
                "$A'(k) = \\sin(k) + k\\cos(k)$.",
                "$f\\left(\\frac{\\pi}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right) + \\frac{\\pi}{3}\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} + \\frac{\\pi}{3} \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}}{2} + \\frac{\\pi}{6}$."
            ]
        },
        {
            id: 'mm-22-1-q8c',
            number: 'Question 8c',
            text: "Consider the average value of the function $f$ over the interval $x \\in [0, k]$, where $k \\in [0, 2]$.\n\nFind the value of $k$ that results in the maximum average value.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Average Value",
            answer: "$k = \\frac{\\pi}{2}$",
            markingGuide: [
                "Average value $= \\frac{1}{k}\\int_0^k f(x)\\,dx = \\frac{A(k)}{k} = \\frac{k\\sin(k)}{k} = \\sin(k)$.",
                "Maximise $\\sin(k)$ for $k \\in [0, 2]$: maximum at $k = \\frac{\\pi}{2} \\approx 1.571$.",
                "Since $\\frac{\\pi}{2} \\in [0, 2]$, the maximum average value occurs at $k = \\frac{\\pi}{2}$."
            ]
        }
    ]
};
