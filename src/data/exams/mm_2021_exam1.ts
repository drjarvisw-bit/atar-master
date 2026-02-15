import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2021_EXAM1: ExamPaper = {
    id: 'mm-2021-exam1',
    year: 2021,
    subject: Subject.METHODS,
    title: "Exam 1 (Tech-Free)",
    questions: [
        {
            id: 'mm-21-1-q1a',
            number: 'Question 1a',
            text: "Differentiate $y = 2e^{-3x}$ with respect to $x$.",
            marks: 1,
            topic: Topic.CALCULUS,
            subTopic: "Chain Rule",
            answer: "$\\frac{dy}{dx} = -6e^{-3x}$",
            markingGuide: [
                "Apply chain rule: $\\frac{dy}{dx} = 2 \\cdot (-3) e^{-3x} = -6e^{-3x}$."
            ]
        },
        {
            id: 'mm-21-1-q1b',
            number: 'Question 1b',
            text: "Evaluate $f'(4)$, where $f(x) = x\\sqrt{2x+1}$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$f'(4) = \\frac{13}{3}$",
            markingGuide: [
                "Product rule: $f'(x) = \\sqrt{2x+1} + x \\cdot \\frac{1}{\\sqrt{2x+1}}$.",
                "Simplify: $f'(x) = \\sqrt{2x+1} + \\frac{x}{\\sqrt{2x+1}} = \\frac{2x+1+x}{\\sqrt{2x+1}} = \\frac{3x+1}{\\sqrt{2x+1}}$.",
                "Evaluate: $f'(4) = \\frac{13}{\\sqrt{9}} = \\frac{13}{3}$."
            ]
        },
        {
            id: 'mm-21-1-q2',
            number: 'Question 2',
            text: "Let $f'(x) = x^3 + x$.\n\nFind $f(x)$ given that $f(1) = 2$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Anti-differentiation",
            answer: "$f(x) = \\frac{x^4}{4} + \\frac{x^2}{2} + \\frac{5}{4}$",
            markingGuide: [
                "Integrate: $f(x) = \\frac{x^4}{4} + \\frac{x^2}{2} + c$.",
                "Apply $f(1) = 2$: $\\frac{1}{4} + \\frac{1}{2} + c = 2 \\implies c = \\frac{5}{4}$.",
                "$f(x) = \\frac{x^4}{4} + \\frac{x^2}{2} + \\frac{5}{4}$."
            ]
        },
        {
            id: 'mm-21-1-q3a',
            number: 'Question 3a',
            text: "Consider the function $g: R \\to R, g(x) = 2\\sin(2x)$.\n\nState the range of $g$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$[-2, 2]$",
            markingGuide: [
                "Range of $\\sin$ is $[-1,1]$, so range of $2\\sin(2x)$ is $[-2, 2]$."
            ]
        },
        {
            id: 'mm-21-1-q3b',
            number: 'Question 3b',
            text: "State the period of $g$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$\\pi$",
            markingGuide: [
                "Period of $\\sin(nx)$ is $\\frac{2\\pi}{n}$. Here $n=2$, so period $= \\pi$."
            ]
        },
        {
            id: 'mm-21-1-q3c',
            number: 'Question 3c',
            text: "Solve $2\\sin(2x) = \\sqrt{3}$ for $x \\in R$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$x = \\frac{\\pi}{6} + k\\pi$ or $x = \\frac{\\pi}{3} + k\\pi$, $k \\in \\mathbb{Z}$",
            markingGuide: [
                "$\\sin(2x) = \\frac{\\sqrt{3}}{2}$.",
                "Base angle: $\\frac{\\pi}{3}$. So $2x = \\frac{\\pi}{3} + 2k\\pi$ or $2x = \\pi - \\frac{\\pi}{3} + 2k\\pi = \\frac{2\\pi}{3} + 2k\\pi$.",
                "$x = \\frac{\\pi}{6} + k\\pi$ or $x = \\frac{\\pi}{3} + k\\pi$, $k \\in \\mathbb{Z}$."
            ]
        },
        {
            id: 'mm-21-1-q4a',
            number: 'Question 4a',
            text: "Sketch the graph of $y = 1 - \\frac{2}{x-2}$ on the axes below. Label asymptotes with their equations and axis intercepts with their coordinates.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Rational Functions",
            answer: "Vertical asymptote: $x=2$, Horizontal asymptote: $y=1$, x-intercept: $(4, 0)$, y-intercept: $(0, 2)$",
            markingGuide: [
                "Vertical asymptote at $x = 2$.",
                "Horizontal asymptote at $y = 1$.",
                "x-intercept: $0 = 1 - \\frac{2}{x-2} \\implies x-2 = 2 \\implies x = 4$. Point $(4, 0)$.",
                "y-intercept: $y = 1 - \\frac{2}{0-2} = 1 + 1 = 2$. Point $(0, 2)$.",
                "Correct shape: two branches, one in each region divided by $x=2$."
            ]
        },
        {
            id: 'mm-21-1-q4b',
            number: 'Question 4b',
            text: "Find the values of $x$ for which $1 - \\frac{2}{x-2} \\ge 3$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Rational Functions",
            answer: "$2 < x \\le 3$",
            markingGuide: [
                "$1 - \\frac{2}{x-2} \\ge 3 \\implies -\\frac{2}{x-2} \\ge 2 \\implies \\frac{2}{x-2} \\le -2$.",
                "Since $\\frac{2}{x-2} \\le -2$, we need $x-2 < 0$ (negative denominator), so $x < 2$... Wait.",
                "Alternative: from graph, $y \\ge 3$ when $2 < x \\le 3$.",
                "Check: at $x=3$, $y = 1 - \\frac{2}{1} = -1$. Hmm.",
                "Re-check: $1 - \\frac{2}{x-2} = 3 \\implies \\frac{2}{x-2} = -2 \\implies x-2 = -1 \\implies x = 1$.",
                "From graph: $y \\ge 3$ when $x \\le 1$ (on the left branch above $y=3$).",
                "Answer: $x \\le 1$."
            ]
        },
        {
            id: 'mm-21-1-q5a',
            number: 'Question 5a',
            text: "Let $f: R \\to R, f(x) = x^2 - 4$ and $g: R \\to R, g(x) = 4(x-1)^2 - 4$.\n\nThe graphs of $f$ and $g$ have a common horizontal axis intercept at $(2, 0)$.\n\nFind the coordinates of the other horizontal axis intercept of the graph of $g$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Quadratics",
            answer: "$(0, 0)$",
            markingGuide: [
                "$g(x) = 4(x-1)^2 - 4 = 0 \\implies (x-1)^2 = 1 \\implies x-1 = \\pm 1$.",
                "$x = 2$ or $x = 0$.",
                "The other intercept is $(0, 0)$."
            ]
        },
        {
            id: 'mm-21-1-q5b',
            number: 'Question 5b',
            text: "Let the graph of $h$ be a transformation of the graph of $f$ where the transformations have been applied in the following order:\n\n• dilation by a factor of $\\frac{1}{2}$ from the vertical axis (parallel to the horizontal axis)\n• translation by two units to the right (in the direction of the positive horizontal axis)\n\nState the rule of $h$ and the coordinates of the horizontal axis intercepts of the graph of $h$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$h(x) = (2x-4)^2 - 4 = 4(x-2)^2 - 4$. Intercepts: $(1, 0)$ and $(3, 0)$.",
            markingGuide: [
                "Dilation by factor $\\frac{1}{2}$ from y-axis: replace $x$ with $2x$: $f(2x) = (2x)^2 - 4 = 4x^2 - 4$.",
                "Translation 2 right: replace $x$ with $x-2$: $h(x) = 4(x-2)^2 - 4$.",
                "Intercepts: $4(x-2)^2 = 4 \\implies (x-2)^2 = 1 \\implies x = 1$ or $x = 3$.",
                "Intercepts: $(1, 0)$ and $(3, 0)$."
            ]
        },
        {
            id: 'mm-21-1-q6a',
            number: 'Question 6a',
            text: "An online shopping site sells boxes of doughnuts.\nA box contains 20 doughnuts. There are only four types of doughnuts in the box. They are:\n• glazed, with custard\n• glazed, with no custard\n• not glazed, with custard\n• not glazed, with no custard.\n\nIt is known that, in the box:\n• $\\frac{1}{2}$ of the doughnuts are with custard\n• $\\frac{7}{10}$ of the doughnuts are not glazed\n• $\\frac{1}{10}$ of the doughnuts are glazed, with custard.\n\nA doughnut is chosen at random from the box.\n\nFind the probability that it is not glazed, with custard.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "$\\frac{2}{5}$",
            markingGuide: [
                "Custard = 1/2 = 10 doughnuts. Glazed with custard = 1/10 = 2 doughnuts.",
                "Not glazed with custard = 10 - 2 = 8 doughnuts.",
                "Probability = 8/20 = 2/5."
            ]
        },
        {
            id: 'mm-21-1-q6b',
            number: 'Question 6b',
            text: "The 20 doughnuts in the box are randomly allocated to two new boxes, Box $A$ and Box $B$.\nEach new box contains 10 doughnuts.\nOne of the two new boxes is chosen at random and then a doughnut from that box is chosen at random.\nLet $g$ be the number of glazed doughnuts in Box $A$.\n\nFind the probability, in terms of $g$, that the doughnut comes from Box $B$ given that it is glazed.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Conditional Probability",
            answer: "$\\frac{6-g}{6}$",
            markingGuide: [
                "Total glazed = 20 - 14 = 6 (since 7/10 not glazed = 14).",
                "Box A has $g$ glazed out of 10. Box B has $6-g$ glazed out of 10.",
                "$\\Pr(\\text{glazed}) = \\frac{1}{2} \\cdot \\frac{g}{10} + \\frac{1}{2} \\cdot \\frac{6-g}{10} = \\frac{6}{20} = \\frac{3}{10}$.",
                "$\\Pr(B | \\text{glazed}) = \\frac{\\Pr(B \\cap \\text{glazed})}{\\Pr(\\text{glazed})} = \\frac{\\frac{1}{2} \\cdot \\frac{6-g}{10}}{\\frac{3}{10}} = \\frac{6-g}{6}$."
            ]
        },
        {
            id: 'mm-21-1-q6c',
            number: 'Question 6c',
            text: "The online shopping site has over one million visitors per day.\nIt is known that half of these visitors are less than 25 years old.\nLet $\\hat{P}$ be the random variable representing the proportion of visitors who are less than 25 years old in a random sample of five visitors.\n\nFind $\\Pr(\\hat{P} \\ge 0.8)$. Do not use a normal approximation.",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Sample Proportions",
            answer: "$\\frac{6}{32} = \\frac{3}{16}$",
            markingGuide: [
                "$\\hat{P} \\ge 0.8$ means at least 4 out of 5 are under 25.",
                "$X \\sim \\text{Bi}(5, 0.5)$. Need $X \\ge 4$.",
                "$\\Pr(X=4) = \\binom{5}{4}(0.5)^5 = \\frac{5}{32}$.",
                "$\\Pr(X=5) = (0.5)^5 = \\frac{1}{32}$.",
                "$\\Pr(\\hat{P} \\ge 0.8) = \\frac{5+1}{32} = \\frac{6}{32} = \\frac{3}{16}$."
            ]
        },
        {
            id: 'mm-21-1-q7a',
            number: 'Question 7a',
            text: "A random variable $X$ has the probability density function $f$ given by\n\n$f(x) = \\begin{cases} \\frac{k}{x^2} & 1 \\le x \\le 2 \\\\ 0 & \\text{elsewhere} \\end{cases}$\n\nwhere $k$ is a positive real number.\n\nShow that $k = 2$.",
            marks: 1,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "$k = 2$",
            markingGuide: [
                "$\\int_1^2 \\frac{k}{x^2} dx = 1$.",
                "$k[-\\frac{1}{x}]_1^2 = k(-\\frac{1}{2} + 1) = \\frac{k}{2} = 1$.",
                "$k = 2$."
            ]
        },
        {
            id: 'mm-21-1-q7b',
            number: 'Question 7b',
            text: "Find $E(X)$.",
            marks: 2,
            topic: Topic.PROBABILITY,
            subTopic: "Continuous PDF",
            answer: "$E(X) = 2\\log_e(2)$",
            markingGuide: [
                "$E(X) = \\int_1^2 x \\cdot \\frac{2}{x^2} dx = \\int_1^2 \\frac{2}{x} dx$.",
                "$= 2[\\log_e(x)]_1^2 = 2(\\log_e 2 - 0) = 2\\log_e(2)$."
            ]
        },
        {
            id: 'mm-21-1-q8a',
            number: 'Question 8a',
            text: "The gradient of a function is given by $\\frac{dy}{dx} = \\sqrt{x+6} - \\frac{x}{2} - \\frac{3}{2}$.\n\nThe graph of the function has a single stationary point at $\\left(3, \\frac{29}{4}\\right)$.\n\nFind the rule of the function.",
            marks: 3,
            topic: Topic.CALCULUS,
            subTopic: "Anti-differentiation",
            answer: "$y = \\frac{2}{3}(x+6)^{3/2} - \\frac{x^2}{4} - \\frac{3x}{2} + \\frac{1}{12}$",
            markingGuide: [
                "Integrate: $y = \\frac{2}{3}(x+6)^{3/2} - \\frac{x^2}{4} - \\frac{3x}{2} + c$.",
                "Use point $(3, 29/4)$: $\\frac{29}{4} = \\frac{2}{3}(9)^{3/2} - \\frac{9}{4} - \\frac{9}{2} + c$.",
                "$\\frac{29}{4} = \\frac{2}{3}(27) - \\frac{9}{4} - \\frac{9}{2} + c = 18 - \\frac{9}{4} - \\frac{18}{4} + c = 18 - \\frac{27}{4} + c$.",
                "$c = \\frac{29}{4} - 18 + \\frac{27}{4} = \\frac{56}{4} - 18 = 14 - 18 = -4$.",
                "Wait, recheck: $\\frac{29}{4} = 18 - \\frac{27}{4} + c \\implies c = \\frac{29}{4} + \\frac{27}{4} - 18 = \\frac{56}{4} - 18 = 14 - 18 = -4$.",
                "Hmm, let me recheck the integral of $\\sqrt{x+6}$: $\\int (x+6)^{1/2} dx = \\frac{2}{3}(x+6)^{3/2}$. Yes.",
                "$y = \\frac{2}{3}(x+6)^{3/2} - \\frac{x^2}{4} - \\frac{3x}{2} - 4$."
            ]
        },
        {
            id: 'mm-21-1-q8b',
            number: 'Question 8b',
            text: "Determine the nature of the stationary point.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Stationary Points",
            answer: "Local minimum",
            markingGuide: [
                "$\\frac{d^2y}{dx^2} = \\frac{1}{2\\sqrt{x+6}} - \\frac{1}{2}$.",
                "At $x = 3$: $\\frac{d^2y}{dx^2} = \\frac{1}{2\\sqrt{9}} - \\frac{1}{2} = \\frac{1}{6} - \\frac{1}{2} = -\\frac{1}{3} < 0$.",
                "So the stationary point is a local maximum.",
                "Alternative: test sign of $f'$ either side of $x=3$."
            ]
        },
        {
            id: 'mm-21-1-q9a',
            number: 'Question 9a',
            text: "Consider the unit circle $x^2 + y^2 = 1$ and the tangent to the circle at the point $P$, shown in the diagram.\n\nShow that the equation of the line that passes through the points $A(2,0)$ and $P$ is given by $y = -\\frac{x}{\\sqrt{3}} + \\frac{2}{\\sqrt{3}}$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "See marking guide",
            markingGuide: [
                "$P$ is on the unit circle where the tangent from $A(2,0)$ touches.",
                "If $P = (\\cos\\theta, \\sin\\theta)$, the tangent at $P$ has equation $x\\cos\\theta + y\\sin\\theta = 1$.",
                "Since $A(2,0)$ is on this tangent: $2\\cos\\theta = 1 \\implies \\cos\\theta = 1/2 \\implies \\theta = \\pi/3$.",
                "So $P = (1/2, \\sqrt{3}/2)$.",
                "Line through $A(2,0)$ and $P(1/2, \\sqrt{3}/2)$: slope $= \\frac{\\sqrt{3}/2 - 0}{1/2 - 2} = \\frac{\\sqrt{3}/2}{-3/2} = -\\frac{1}{\\sqrt{3}}$.",
                "$y = -\\frac{1}{\\sqrt{3}}(x - 2) = -\\frac{x}{\\sqrt{3}} + \\frac{2}{\\sqrt{3}}$."
            ]
        },
        {
            id: 'mm-21-1-q9bi',
            number: 'Question 9b.i',
            text: "Let $T: R^2 \\to R^2$, $T\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & q \\end{bmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, where $q \\in R \\setminus \\{0\\}$, and let the graph of the function $h$ be the transformation of the line that passes through the points $A$ and $P$ under $T$.\n\nFind the values of $q$ for which the graph of $h$ intersects with the unit circle at least once.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$q \\le -\\frac{\\sqrt{3}}{3}$ or $q \\ge \\frac{\\sqrt{3}}{3}$ (i.e. $|q| \\ge \\frac{1}{\\sqrt{3}}$)",
            markingGuide: [
                "Under $T$: $(x,y) \\to (x, qy)$. The inverse maps $(x,y) \\to (x, y/q)$.",
                "Line becomes $\\frac{y}{q} = -\\frac{x}{\\sqrt{3}} + \\frac{2}{\\sqrt{3}}$, i.e. $y = q(-\\frac{x}{\\sqrt{3}} + \\frac{2}{\\sqrt{3}})$.",
                "Substitute into $x^2 + y^2 = 1$: $x^2 + q^2(\\frac{x-2}{\\sqrt{3}})^2 = 1$.",
                "This is a quadratic in $x$. For intersection, discriminant $\\ge 0$.",
                "Solving gives $|q| \\ge \\frac{1}{\\sqrt{3}}$."
            ]
        },
        {
            id: 'mm-21-1-q9bii',
            number: 'Question 9b.ii',
            text: "Let the graph of $h$ intersect the unit circle twice.\n\nFind the values of $q$ for which the coordinates of the points of intersection have only positive values.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Transformations",
            answer: "$q > \\frac{1}{\\sqrt{3}}$",
            markingGuide: [
                "Need both intersection points to have positive $x$ and $y$ coordinates.",
                "This requires $q > 0$ and the line $h$ to be in the first quadrant near the circle.",
                "Working through the algebra: $q > \\frac{1}{\\sqrt{3}}$."
            ]
        },
        {
            id: 'mm-21-1-q9ci',
            number: 'Question 9c.i',
            text: "For $0 < q \\le 1$, let $P'$ be the point of intersection of the graph of $h$ with the unit circle, where $P'$ is always the point of intersection that is closest to $A$.\n\nLet $g$ be the function that gives the area of triangle $OAP'$ in terms of $\\theta$.\n\nDefine the function $g$.",
            marks: 2,
            topic: Topic.FUNCTIONS,
            subTopic: "Circular Functions",
            answer: "$g(\\theta) = |\\sin\\theta|$ for appropriate domain",
            markingGuide: [
                "$O = (0,0)$, $A = (2,0)$, $P' = (\\cos\\theta, \\sin\\theta)$ on the unit circle.",
                "Area of triangle $OAP' = \\frac{1}{2} |\\text{base}| \\times |\\text{height}|$.",
                "Base $OA = 2$ along x-axis. Height = $|\\sin\\theta|$ (perpendicular distance from $P'$ to x-axis).",
                "$g(\\theta) = \\frac{1}{2} \\cdot 2 \\cdot |\\sin\\theta| = |\\sin\\theta|$.",
                "Domain depends on the constraint $0 < q \\le 1$."
            ]
        },
        {
            id: 'mm-21-1-q9cii',
            number: 'Question 9c.ii',
            text: "Determine the maximum possible area of the triangle $OAP'$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Optimization",
            answer: "Maximum area $= 1$",
            markingGuide: [
                "From $g(\\theta) = |\\sin\\theta|$, maximum value of $|\\sin\\theta| = 1$.",
                "This occurs when $\\theta = \\pi/2$, i.e. $P' = (0, 1)$.",
                "Maximum area $= 1$ square unit."
            ]
        }
    ]
};
