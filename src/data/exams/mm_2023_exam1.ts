import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2023_EXAM1: ExamPaper = {
    id: 'mm-2023-1',
    year: 2023,
    subject: Subject.METHODS,
    title: "Exam 1 (Tech-Free)",
    questions: [
        // Question 1 (4 marks)
        {
            id: 'mm-23-1-q1a',
            number: 'Question 1a',
            text: "Let $y = \\frac{x^2 - x}{e^x}$. Find and simplify $\\frac{dy}{dx}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Quotient Rule",
            answer: "$\\frac{dy}{dx} = \\frac{-x^2 + 3x - 1}{e^x}$",
            markingGuide: [
                "Quotient rule: $u = x^2 - x$, $v = e^x$, $u' = 2x - 1$, $v' = e^x$.",
                "$\\frac{dy}{dx} = \\frac{(2x-1)e^x - (x^2-x)e^x}{e^{2x}} = \\frac{2x - 1 - x^2 + x}{e^x}$.",
                "$= \\frac{-x^2 + 3x - 1}{e^x}$."
            ]
        },
        {
            id: 'mm-23-1-q1b',
            number: 'Question 1b',
            text: "Let $f(x) = \\sin(x)e^{2x}$. Find $f'\\!\\left(\\frac{\\pi}{4}\\right)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$f'\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{3\\sqrt{2}}{2}\\, e^{\\pi/2}$",
            markingGuide: [
                "Product rule: $f'(x) = \\cos(x)e^{2x} + 2\\sin(x)e^{2x} = e^{2x}(\\cos(x) + 2\\sin(x))$.",
                "$f'(\\frac{\\pi}{4}) = e^{\\pi/2}\\left(\\frac{\\sqrt{2}}{2} + 2 \\cdot \\frac{\\sqrt{2}}{2}\\right) = e^{\\pi/2} \\cdot \\frac{3\\sqrt{2}}{2}$."
            ]
        },
        // Question 2 (3 marks)
        {
            id: 'mm-23-1-q2',
            number: 'Question 2',
            text: "Solve $e^{2x} - 12 = 4e^x$ for $x \\in R$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Exponential Equations",
            answer: "$x = \\log_e(6)$",
            markingGuide: [
                "Rearrange: $e^{2x} - 4e^x - 12 = 0$.",
                "Let $u = e^x$: $u^2 - 4u - 12 = 0$, $(u - 6)(u + 2) = 0$.",
                "$u = 6$ or $u = -2$. Since $e^x > 0$, discard $u = -2$.",
                "$e^x = 6 \\Rightarrow x = \\log_e(6)$."
            ]
        },
        // Question 3 (4 marks)
        {
            id: 'mm-23-1-q3a',
            number: 'Question 3a',
            text: "Sketch the graph of $f(x) = 2 - \\frac{3}{x-1}$ on the axes, labelling all asymptotes with their equations and axial intercepts with their coordinates.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Rational Functions",
            answer: "Vertical asymptote $x = 1$, horizontal asymptote $y = 2$, $x$-intercept $(\\frac{5}{2}, 0)$, $y$-intercept $(0, 5)$.",
            markingGuide: [
                "Vertical asymptote: $x = 1$.",
                "Horizontal asymptote: $y = 2$.",
                "$x$-intercept: $2 - \\frac{3}{x-1} = 0 \\Rightarrow x - 1 = \\frac{3}{2} \\Rightarrow x = \\frac{5}{2}$.",
                "$y$-intercept: $f(0) = 2 - \\frac{3}{-1} = 5$.",
                "Correct shape: two branches of a hyperbola."
            ]
        },
        {
            id: 'mm-23-1-q3b',
            number: 'Question 3b',
            text: "Find the values of $x$ for which $f(x) \\leq 1$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Inequalities",
            answer: "$1 < x \\leq 4$",
            markingGuide: [
                "$2 - \\frac{3}{x-1} \\leq 1 \\Rightarrow -\\frac{3}{x-1} \\leq -1 \\Rightarrow \\frac{3}{x-1} \\geq 1$.",
                "For $x > 1$: $3 \\geq x - 1$, so $x \\leq 4$. Combined: $1 < x \\leq 4$."
            ]
        },
        // Question 4 (2 marks)
        {
            id: 'mm-23-1-q4',
            number: 'Question 4',
            text: "The graph of $y = x + \\frac{1}{x}$ is shown over part of its domain.\n\nUse two trapeziums of equal width to approximate the area between the curve, the $x$-axis and the lines $x = 1$ and $x = 3$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Trapezium Rule",
            answer: "$\\frac{31}{6}$",
            markingGuide: [
                "Two trapeziums each of width 1: $[1,2]$ and $[2,3]$.",
                "$f(1) = 2$, $f(2) = \\frac{5}{2}$, $f(3) = \\frac{10}{3}$.",
                "Area $\\approx \\frac{1}{2}(2 + \\frac{5}{2}) \\times 1 + \\frac{1}{2}(\\frac{5}{2} + \\frac{10}{3}) \\times 1 = \\frac{9}{4} + \\frac{35}{12} = \\frac{27}{12} + \\frac{35}{12} = \\frac{62}{12} = \\frac{31}{6}$."
            ]
        },
        // Question 5 (4 marks)
        {
            id: 'mm-23-1-q5a',
            number: 'Question 5a',
            text: "Evaluate $\\int_0^{\\pi/3} \\sin(x)\\, dx$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integral",
            answer: "$\\frac{1}{2}$",
            markingGuide: [
                "$\\int_0^{\\pi/3} \\sin(x)\\, dx = [-\\cos(x)]_0^{\\pi/3} = -\\cos(\\frac{\\pi}{3}) + \\cos(0) = -\\frac{1}{2} + 1 = \\frac{1}{2}$."
            ]
        },
        {
            id: 'mm-23-1-q5b',
            number: 'Question 5b',
            text: "Hence, or otherwise, find all values of $k$ such that $\\int_0^{\\pi/3} \\sin(x)\\, dx = \\int_k^{\\pi/2} \\cos(x)\\, dx$, where $-3\\pi < k < 2\\pi$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Definite Integral",
            answer: "$k = -\\frac{11\\pi}{6},\\, -\\frac{7\\pi}{6},\\, \\frac{\\pi}{6},\\, \\frac{5\\pi}{6}$",
            markingGuide: [
                "$\\int_k^{\\pi/2} \\cos(x)\\, dx = [\\sin(x)]_k^{\\pi/2} = 1 - \\sin(k) = \\frac{1}{2}$.",
                "$\\sin(k) = \\frac{1}{2}$.",
                "General solutions: $k = \\frac{\\pi}{6} + 2n\\pi$ or $k = \\frac{5\\pi}{6} + 2n\\pi$.",
                "For $-3\\pi < k < 2\\pi$: $k = -\\frac{11\\pi}{6},\\, -\\frac{7\\pi}{6},\\, \\frac{\\pi}{6},\\, \\frac{5\\pi}{6}$."
            ]
        },
        // Question 6 (4 marks)
        {
            id: 'mm-23-1-q6a',
            number: 'Question 6a',
            text: "From a sample of randomly selected households, an approximate 95% confidence interval for the proportion $p$ of households having solar panels installed was $(0.04, 0.16)$.\n\nFind the value of $\\hat{p}$ that was used to obtain this confidence interval.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "$\\hat{p} = 0.10$",
            markingGuide: [
                "$\\hat{p} = \\frac{0.04 + 0.16}{2} = 0.10$."
            ]
        },
        {
            id: 'mm-23-1-q6b',
            number: 'Question 6b',
            text: "Use $z = 2$ to approximate the 95% confidence interval.\n\nFind the size of the sample from which this 95% confidence interval was obtained.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "$n = 100$",
            markingGuide: [
                "Margin of error: $E = 0.16 - 0.10 = 0.06$.",
                "$E = z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$: $0.06 = 2\\sqrt{\\frac{0.10 \\times 0.90}{n}}$.",
                "$0.03 = \\sqrt{\\frac{0.09}{n}}$, $0.0009 = \\frac{0.09}{n}$, $n = 100$."
            ]
        },
        {
            id: 'mm-23-1-q6c',
            number: 'Question 6c',
            text: "A larger sample with size four times the original is selected. The sample proportion is the same.\n\nBy what factor will the increased sample size affect the width of the confidence interval?",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "Width is halved (factor of $\\frac{1}{2}$).",
            markingGuide: [
                "Width $\\propto \\frac{1}{\\sqrt{n}}$. If $n$ is multiplied by 4, width is multiplied by $\\frac{1}{\\sqrt{4}} = \\frac{1}{2}$."
            ]
        },
        // Question 7 (7 marks)
        {
            id: 'mm-23-1-q7a',
            number: 'Question 7a',
            text: "Consider $f: (-\\infty, 1] \\to R$, $f(x) = x^2 - 2x$.\n\nState the range of $f$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Functions",
            answer: "$[-1, \\infty)$",
            markingGuide: [
                "$f(x) = (x-1)^2 - 1$. Minimum at $x = 1$: $f(1) = -1$. As $x \\to -\\infty$, $f(x) \\to \\infty$.",
                "Range: $[-1, \\infty)$."
            ]
        },
        {
            id: 'mm-23-1-q7b',
            number: 'Question 7b',
            text: "Sketch the graph of the inverse function $y = f^{-1}(x)$ on the axes. Label any endpoints and axial intercepts with their coordinates.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "Reflection of $f$ in $y = x$. Endpoint $(-1, 1)$, passes through $(0, 0)$.",
            markingGuide: [
                "Correct reflection of $f$ in $y = x$.",
                "Endpoint $(-1, 1)$ labelled (closed dot).",
                "Passes through $(0, 0)$."
            ]
        },
        {
            id: 'mm-23-1-q7c',
            number: 'Question 7c',
            text: "Determine the equation and the domain for the inverse function $f^{-1}$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Inverse Functions",
            answer: "$f^{-1}(x) = 1 - \\sqrt{x + 1}$, domain $[-1, \\infty)$.",
            markingGuide: [
                "From $y = x^2 - 2x = (x-1)^2 - 1$: swap $x$ and $y$: $x = (y-1)^2 - 1$.",
                "$(y-1)^2 = x + 1$, $y - 1 = \\pm\\sqrt{x+1}$.",
                "Since original domain is $(-\\infty, 1]$, take negative root: $f^{-1}(x) = 1 - \\sqrt{x+1}$.",
                "Domain of $f^{-1}$ = range of $f$ = $[-1, \\infty)$."
            ]
        },
        {
            id: 'mm-23-1-q7d',
            number: 'Question 7d',
            text: "Calculate the area of the regions enclosed by the curves of $f$, $f^{-1}$ and $y = -x$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area Between Curves",
            answer: "$\\frac{1}{3}$",
            markingGuide: [
                "Intersections: $f$ and $y = -x$ at $(0,0)$ and $(1,-1)$; $f^{-1}$ and $y = -x$ at $(0,0)$ and $(-1,1)$; $f$ and $f^{-1}$ at $(0,0)$.",
                "Area $= \\int_{-1}^{0} (-x - f^{-1}(x))\\,dx + \\int_0^1 (-x - f(x))\\,dx$.",
                "$= \\int_{-1}^{0} (-x - 1 + \\sqrt{x+1})\\,dx + \\int_0^1 (x - x^2)\\,dx = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$."
            ]
        },
        // Question 8 (6 marks)
        {
            id: 'mm-23-1-q8a',
            number: 'Question 8a',
            text: "The queuing time $T$ (minutes) has PDF $f(t) = kt(16 - t^2)$ for $0 \\leq t \\leq 4$, and $f(t) = 0$ elsewhere.\n\nShow that $k = \\frac{1}{64}$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous Distribution",
            answer: "$k = \\frac{1}{64}$",
            markingGuide: [
                "$\\int_0^4 kt(16 - t^2)\\,dt = 1$.",
                "$k\\int_0^4 (16t - t^3)\\,dt = k[8t^2 - \\frac{t^4}{4}]_0^4 = k(128 - 64) = 64k = 1$.",
                "$k = \\frac{1}{64}$."
            ]
        },
        {
            id: 'mm-23-1-q8b',
            number: 'Question 8b',
            text: "Find $E(T)$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Expected Value",
            answer: "$E(T) = \\frac{32}{15}$",
            markingGuide: [
                "$E(T) = \\int_0^4 t \\cdot \\frac{1}{64} t(16-t^2)\\,dt = \\frac{1}{64}\\int_0^4 (16t^2 - t^4)\\,dt$.",
                "$= \\frac{1}{64}\\left[\\frac{16t^3}{3} - \\frac{t^5}{5}\\right]_0^4 = \\frac{1}{64}\\left(\\frac{1024}{3} - \\frac{1024}{5}\\right) = \\frac{1024}{64} \\cdot \\frac{2}{15} = \\frac{32}{15}$."
            ]
        },
        {
            id: 'mm-23-1-q8c',
            number: 'Question 8c',
            text: "What is the probability that a person has to queue for more than two minutes, given that they have already queued for one minute?",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "$\\frac{16}{25}$",
            markingGuide: [
                "$\\Pr(T > 2 | T > 1) = \\frac{\\Pr(T > 2)}{\\Pr(T > 1)}$.",
                "$\\Pr(T > 2) = 1 - \\frac{1}{64}[8t^2 - \\frac{t^4}{4}]_0^2 = 1 - \\frac{28}{64} = \\frac{9}{16}$.",
                "$\\Pr(T > 1) = 1 - \\frac{1}{64}[8t^2 - \\frac{t^4}{4}]_0^1 = 1 - \\frac{31}{256} = \\frac{225}{256}$.",
                "$\\Pr(T > 2 | T > 1) = \\frac{9/16}{225/256} = \\frac{9}{16} \\cdot \\frac{256}{225} = \\frac{144}{225} = \\frac{16}{25}$."
            ]
        },
        // Question 9 (6 marks)
        {
            id: 'mm-23-1-q9a',
            number: 'Question 9a',
            text: "Track 1 is $f(x) = a - x(x-2)^2$. Track 2 is $g(x) = 12x + bx^2$.\n\nGiven that $f(0) = 12$ and $g(1) = 9$, verify that $a = 12$ and $b = -3$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Function Evaluation",
            answer: "$a = 12$, $b = -3$",
            markingGuide: [
                "$f(0) = a - 0 = a = 12$ ✓.",
                "$g(1) = 12 + b = 9 \\Rightarrow b = -3$ ✓."
            ]
        },
        {
            id: 'mm-23-1-q9b',
            number: 'Question 9b',
            text: "Verify that $f(x)$ and $g(x)$ both have a turning point at $P$. Give the coordinates of $P$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Stationary Points",
            answer: "$P = (2, 12)$",
            markingGuide: [
                "$f(x) = 12 - x(x-2)^2 = -x^3 + 4x^2 - 4x + 12$.",
                "$f'(x) = -3x^2 + 8x - 4 = -(3x-2)(x-2)$. $f'(2) = 0$ ✓.",
                "$g(x) = 12x - 3x^2$. $g'(x) = 12 - 6x$. $g'(2) = 0$ ✓.",
                "$f(2) = 12 - 2(0) = 12$, $g(2) = 24 - 12 = 12$. So $P = (2, 12)$."
            ]
        },
        {
            id: 'mm-23-1-q9c',
            number: 'Question 9c',
            text: "A theme park is planned whose boundaries form triangle $\\triangle OAB$ where $O$ is the origin, $A$ is at $(k, 0)$ and $B$ is at $(k, g(k))$, where $k \\in (0, 4)$.\n\nFind the maximum possible area of the theme park, in km².",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Optimisation",
            answer: "$\\frac{128}{9}$ km²",
            markingGuide: [
                "Area $= \\frac{1}{2} \\times k \\times g(k) = \\frac{1}{2}k(12k - 3k^2) = 6k^2 - \\frac{3}{2}k^3$.",
                "$A'(k) = 12k - \\frac{9}{2}k^2 = k(12 - \\frac{9}{2}k) = 0$.",
                "$k = 0$ or $k = \\frac{8}{3}$. Since $k \\in (0, 4)$, $k = \\frac{8}{3}$.",
                "$A(\\frac{8}{3}) = 6 \\cdot \\frac{64}{9} - \\frac{3}{2} \\cdot \\frac{512}{27} = \\frac{384}{9} - \\frac{256}{9} = \\frac{128}{9}$ km²."
            ]
        }
    ]
};
