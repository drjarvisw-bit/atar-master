
import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2024_EXAM1: ExamPaper = {
    id: 'mm-2024-1',
    year: 2024,
    subject: Subject.METHODS,
    title: "Exam 1 (Tech-Free)",
    questions: [
        {
            id: 'mm-24-1-q1a',
            number: 'Question 1a',
            text: "Let $y = e^x \\cos(3x)$. Find $\\frac{dy}{dx}$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$e^x(\\cos(3x) - 3\\sin(3x))$",
            markingGuide: [
                "Apply product rule: $u=e^x, v=\\cos(3x)$",
                "Derivatives: $u'=e^x, v'=-3\\sin(3x)$",
                "Combine: $e^x\\cos(3x) - 3e^x\\sin(3x)$"
            ]
        },
        {
            id: 'mm-24-1-q1b',
            number: 'Question 1b',
            text: "Let $f(x) = \\log_e(x^3 - 3x + 2)$. Find $f'(3)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "$\\frac{6}{5}$",
            markingGuide: [
                "Apply chain rule: $f'(x) = \\frac{1}{x^3-3x+2} \\times (3x^2-3)$",
                "Substitute $x=3$: $\\frac{3(9)-3}{27-9+2} = \\frac{24}{20}$",
                "Simplify to $6/5$"
            ]
        },
        {
            id: 'mm-24-1-q2',
            number: 'Question 2',
            text: "Consider the simultaneous linear equations:\n$3kx - 2y = k + 4$\n$(k-4)x + ky = -k$\nDetermine the value of $k$ for which the system of equations has no real solution.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Simultaneous Equations",
            answer: "$k = \\frac{4}{3}$",
            markingGuide: [
                "Matrix determinant method or gradient comparison.",
                "Determinant $\\Delta = (3k)(k) - (-2)(k-4) = 3k^2 + 2k - 8$.",
                "Set $\\Delta = 0$: $(3k-4)(k+2) = 0 \\implies k=4/3, k=-2$.",
                "Check $k=-2$: Eqs become $-6x-2y=2$ and $-6x-2y=2$. Coincident lines (infinite solutions).",
                "Check $k=4/3$: Slopes are equal, but intercepts differ (parallel lines). No solution."
            ]
        },
        {
            id: 'mm-24-1-q3a',
            number: 'Question 3a',
            text: "Let $g: R \\setminus \\{-3\\} \\to R, g(x) = \\frac{1}{(x+3)^2} - 2$. On the axes below, sketch the graph of $y = g(x)$ labelling all asymptotes with their equations and axis intercepts with their coordinates.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Graphing Rationals",
            answer: "Sketch showing asymptotes x=-3, y=-2 and intercepts",
            markingGuide: [
                "Vertical asymptote $x=-3$. Horizontal asymptote $y=-2$.",
                "y-intercept: $x=0, y = 1/9 - 2 = -17/9$. Point $(0, -17/9)$.",
                "x-intercepts: $\\frac{1}{(x+3)^2} = 2 \\implies (x+3)^2 = 1/2$.",
                "$x = -3 \\pm \\frac{1}{\\sqrt{2}}$. Points $(-3-\\frac{\\sqrt{2}}{2}, 0)$ and $(-3+\\frac{\\sqrt{2}}{2}, 0)$."
            ]
        },
        {
            id: 'mm-24-1-q3b',
            number: 'Question 3b',
            text: "Determine the area of the region bounded by the line $x=-2$, the x-axis, the y-axis and the graph of $y=g(x)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area under Curve",
            answer: "$\\frac{10}{3}$",
            markingGuide: [
                "Region is below x-axis from $x=-2$ to $x=0$.",
                "Area $= \\left| \\int_{-2}^0 ((x+3)^{-2} - 2) dx \\right|$ or $\\int_{-2}^0 (2 - (x+3)^{-2}) dx$.",
                "Antiderivative of $(x+3)^{-2}$ is $-(x+3)^{-1}$.",
                "$\\int_{-2}^0 g(x) dx = [-(x+3)^{-1} - 2x]_{-2}^0 = (-1/3 - 0) - (-1/1 - 2(-2)) = -1/3 - (-1+4) = -1/3 - 3 = -10/3$.",
                "Area is magnitude: $10/3$."
            ]
        },
        {
            id: 'mm-24-1-q4a',
            number: 'Question 4a',
            text: "Let $X$ be a binomial random variable where $X \\sim \\text{Bi}(4, \\frac{9}{10})$. Find the standard deviation of $X$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Distribution",
            answer: "0.6",
            markingGuide: [
                "$\\text{Var}(X) = np(1-p) = 4 \\times 0.9 \\times 0.1 = 0.36$.",
                "$\\text{SD}(X) = \\sqrt{0.36} = 0.6$."
            ]
        },
        {
            id: 'mm-24-1-q4b',
            number: 'Question 4b',
            text: "Find $\\Pr(X < 2)$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Probability",
            answer: "0.0037",
            markingGuide: [
                "$\\Pr(X < 2) = \\Pr(X=0) + \\Pr(X=1)$.",
                "$\\Pr(X=0) = (0.1)^4 = 0.0001$.",
                "$\\Pr(X=1) = \\binom{4}{1}(0.9)^1(0.1)^3 = 4(0.9)(0.001) = 0.0036$.",
                "Total = $0.0001 + 0.0036 = 0.0037$."
            ]
        },
        {
            id: 'mm-24-1-q5a',
            number: 'Question 5a',
            text: "The function $h: [0, \\infty) \\to R, h(t) = \\frac{3000}{t+1}$ models the population of a town after $t$ years. Use the model to predict the population after four years.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Function Evaluation",
            answer: "600",
            markingGuide: ["Substitute $t=4$: $h(4) = \\frac{3000}{4+1} = \\frac{3000}{5} = 600$."]
        },
        {
            id: 'mm-24-1-q5b',
            number: 'Question 5b',
            text: "A new function, $h_1$, models a population where $h_1(0) = h(0)$ but $h_1$ decreases at half the rate of $h$ at any point in time. State a sequence of two transformations that maps $h$ to this new model $h_1$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "Dilation by factor 1/2 from t-axis (or x-axis), followed by Translation of 1500 units up.",
            markingGuide: [
                "Rate is derivative. $h_1'(t) = 0.5 h'(t)$. Integrating gives $h_1(t) = 0.5 h(t) + c$.",
                "Initial condition: $h_1(0) = 0.5 h(0) + c \\implies 3000 = 1500 + c \\implies c = 1500$.",
                "Model is $h_1(t) = 0.5 h(t) + 1500$.",
                "Transformation 1: Dilation factor 0.5 from t-axis.",
                "Transformation 2: Translation +1500 units in y-direction."
            ]
        },
        {
            id: 'mm-24-1-q5c',
            number: 'Question 5c',
            text: "In the town, 100 people were randomly selected and surveyed, with 60 people indicating that they were unhappy with the roads.\ni. Determine an approximate 95% confidence interval for the proportion of people in the town who are unhappy with the roads. Use $z = 2$ for this confidence interval. (2 marks)\nii. A new sample of $n$ people results in the same sample proportion. Find the smallest value of $n$ to achieve a standard deviation of $\\frac{\\sqrt{2}}{50}$ for the sample proportion. (1 mark)",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Confidence Intervals",
            answer: "i. $(0.5, 0.7)$ ii. $n=300$",
            markingGuide: [
                "i. $\\hat{p} = 60/100 = 0.6$. Formula: $\\hat{p} \\pm z \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$.",
                "Margin $= 2 \\sqrt{\\frac{0.6 \\times 0.4}{100}} = 2 \\sqrt{0.0024}$.",
                "Wait, $\\frac{0.24}{100} = 0.0024$. $\\sqrt{0.0024} = \\frac{\\sqrt{24}}{100} = \\frac{2\\sqrt{6}}{100} \\approx 0.049$.",
                "Using approx: $2 \\times 0.05 = 0.1$. Interval $0.6 \\pm 0.1 = (0.5, 0.7)$.",
                "ii. $SD(\\hat{p}) = \\sqrt{\\frac{0.24}{n}} = \\frac{\\sqrt{2}}{50}$.",
                "Square both sides: $\\frac{0.24}{n} = \\frac{2}{2500} = \\frac{1}{1250}$.",
                "$n = 0.24 \\times 1250 = 300$."
            ]
        },
        {
            id: 'mm-24-1-q6',
            number: 'Question 6',
            text: "Solve $2\\log_3(x-4) + \\log_3(x) = 2$ for $x$.",
            marks: 4,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithmic Equations",
            answer: "$x = \\frac{7+\\sqrt{13}}{2}$",
            markingGuide: [
                "Combine logs: $\\log_3((x-4)^2 x) = 2$.",
                "Exponential form: $x(x^2-8x+16) = 3^2 = 9$.",
                "Cubic: $x^3 - 8x^2 + 16x - 9 = 0$.",
                "Use Factor Theorem: $P(1) = 1 - 8 + 16 - 9 = 0$. So $(x-1)$ is a factor.",
                "Division: $(x-1)(x^2-7x+9) = 0$.",
                "Roots: $x=1$ or $x = \\frac{7 \\pm \\sqrt{49-36}}{2} = \\frac{7 \\pm \\sqrt{13}}{2}$.",
                "Domain constraint: $x-4 > 0 \\implies x > 4$.",
                "Reject $x=1$ and $x = \\frac{7-\\sqrt{13}}{2} \\approx 1.7$.",
                "Only solution: $x = \\frac{7+\\sqrt{13}}{2}$ (approx 5.3)."
            ]
        },
        {
            id: 'mm-24-1-q7a',
            number: 'Question 7a',
            text: "Use the trapezium rule with a step size of $\\frac{\\pi}{3}$ to determine an approximation of the total area between the graph of $y = x\\sin(x)$ and the x-axis over the interval $x \\in [0, \\pi]$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Trapezium Rule",
            answer: "$\\frac{\\pi^2\\sqrt{3}}{6}$",
            markingGuide: [
                "Step $h = \\pi/3$. Points: $x_0=0, x_1=\\pi/3, x_2=2\\pi/3, x_3=\\pi$.",
                "$y_0 = 0$. $y_3 = 0$.",
                "$y_1 = (\\pi/3)\\sin(\\pi/3) = \\frac{\\pi}{3}\\frac{\\sqrt{3}}{2} = \\frac{\\pi\\sqrt{3}}{6}$.",
                "$y_2 = (2\\pi/3)\\sin(2\\pi/3) = \\frac{2\\pi}{3}\\frac{\\sqrt{3}}{2} = \\frac{\\pi\\sqrt{3}}{3}$.",
                "Area $\\approx \\frac{h}{2}(y_0 + 2(y_1+y_2) + y_3) = \\frac{\\pi}{6}(0 + 2(\\frac{\\pi\\sqrt{3}}{6} + \\frac{2\\pi\\sqrt{3}}{6}) + 0)$.",
                "$= \\frac{\\pi}{6} ( 2 \\times \\frac{3\\pi\\sqrt{3}}{6} ) = \\frac{\\pi}{6} ( \\pi\\sqrt{3} ) = \\frac{\\pi^2\\sqrt{3}}{6}$."
            ]
        },
        {
            id: 'mm-24-1-q7b',
            number: 'Question 7b',
            text: "i. Find $f'(x)$ where $f(x)=x\\sin(x)$.\nii. Determine the range of $f'(x)$ over the interval $[\\frac{\\pi}{2}, \\frac{2\\pi}{3}]$.\niii. Hence, verify that $f(x)$ has a stationary point for $x \\in [\\frac{\\pi}{2}, \\frac{2\\pi}{3}]$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Function Analysis",
            answer: "i. $\\sin(x)+x\\cos(x)$ ii. $[\\frac{\\sqrt{3}}{2}-\\frac{\\pi}{3}, 1]$",
            markingGuide: [
                "i. Product rule: $f'(x) = 1\\cdot\\sin(x) + x\\cos(x)$.",
                "ii. $f'$ is continuous. $f'(\\pi/2) = 1 + 0 = 1$.",
                "$f'(2\\pi/3) = \\frac{\\sqrt{3}}{2} + \\frac{2\\pi}{3}(-\\frac{1}{2}) = \\frac{\\sqrt{3}}{2} - \\frac{\\pi}{3}$.",
                "Check monotonicity: $f''(x) = 2\\cos(x) - x\\sin(x)$. In Q2 both terms negative, so $f'$ is decreasing.",
                "Range is $[f'(2\\pi/3), f'(\\pi/2)]$.",
                "iii. $f'(\\pi/2) = 1 > 0$ and $f'(2\\pi/3) \\approx 0.86 - 1.05 < 0$.",
                "Since signs change and function is continuous (IVT), there is a root (stationary point) in the interval."
            ]
        },
        {
            id: 'mm-24-1-q7c',
            number: 'Question 7c',
            text: "On the set of axes below, sketch the graph of $y = f'(x)$ on the domain $[-\\pi, \\pi]$, labelling the endpoints with their coordinates.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Graphing Derivatives",
            answer: "Graph of sine-like wave with endpoints $(-\\pi, \\pi)$ and $(\\pi, -\\pi)$",
            markingGuide: [
                "Endpoints: $f'(-\\pi) = 0 + (-\\pi)(-1) = \\pi$. Point $(-\\pi, \\pi)$.",
                "$f'(\\pi) = 0 + \\pi(-1) = -\\pi$. Point $(\\pi, -\\pi)$.",
                "Passes through origin $(0,0)$.",
                "Odd function symmetry."
            ]
        },
        {
            id: 'mm-24-1-q8a',
            number: 'Question 8a',
            text: "Let $g: R \\to R, g(x) = \\sqrt[3]{x-k} + m$, where $k \\in R \\setminus \\{0\\}$ and $m \\in R$. Let the point $P$ be the y-intercept of the graph of $y=g(x)$. Find the coordinates of $P$, in terms of $k$ and $m$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Intercepts",
            answer: "$(0, m - k^{1/3})$",
            markingGuide: ["Set $x=0$. $y = \\sqrt[3]{-k} + m = -k^{1/3} + m$."]
        },
        {
            id: 'mm-24-1-q8b',
            number: 'Question 8b',
            text: "Find the gradient of $g$ at $P$, in terms of $k$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Derivatives",
            answer: "$\\frac{1}{3k^{2/3}}$",
            markingGuide: [
                "$g(x) = (x-k)^{1/3} + m$.",
                "$g'(x) = \\frac{1}{3}(x-k)^{-2/3}$.",
                "$g'(0) = \\frac{1}{3}(-k)^{-2/3} = \\frac{1}{3} ((-1)^2 k^2)^{-1/3} = \\frac{1}{3k^{2/3}}$."
            ]
        },
        {
            id: 'mm-24-1-q8c',
            number: 'Question 8c',
            text: "Given that the graph of $y=g(x)$ passes through the origin, express $k$ in terms of $m$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Algebra",
            answer: "$k = m^3$",
            markingGuide: [
                "Passes through $(0,0) \\implies P$ is origin.",
                "y-coord of P is $0$: $m - k^{1/3} = 0 \\implies m = k^{1/3}$.",
                "Cube both sides: $k = m^3$."
            ]
        },
        {
            id: 'mm-24-1-q8d',
            number: 'Question 8d',
            text: "Let the point $Q$ be a point different from the point $P$, such that the gradient of $g$ at points $P$ and $Q$ are equal. Given that the graph of $y=g(x)$ passes through the origin, find the coordinates of $Q$ in terms of $m$.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Tangents",
            answer: "$(2m^3, 2m)$",
            markingGuide: [
                "Set $g'(x) = g'(0)$. $\\frac{1}{3}(x-k)^{-2/3} = \\frac{1}{3}(-k)^{-2/3}$.",
                "$(x-k)^2 = (-k)^2 = k^2$.",
                "$x-k = k$ or $x-k = -k$.",
                "$x = 2k$ or $x=0$. Since $Q \\ne P$ (where $x=0$), $x_Q = 2k$.",
                "Substitute $k=m^3$: $x_Q = 2m^3$.",
                "Find y: $g(2k) = \\sqrt[3]{2k-k} + m = k^{1/3} + m$.",
                "Since $k^{1/3}=m$, $y_Q = m + m = 2m$."
            ]
        }
    ]
};
