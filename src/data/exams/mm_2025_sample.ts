
import { type ExamPaper, Subject, Topic } from "../../types";

export const MM_2025_SAMPLE: ExamPaper = {
    id: 'mm-2025-sample',
    year: 2025,
    subject: Subject.METHODS,
    title: "Exam 1",
    questions: [
        {
            id: 'mm-25-1-q1',
            number: 'Question 1',
            text: "Let $f: R \\setminus \\{1\\} \\to R, f(x) = \\frac{2}{x-1} + 3$. State the range of $f$.",
            marks: 1,
            topic: Topic.FUNCTIONS,
            subTopic: "Rectangular Hyperbola",
            answer: "$R \\setminus \\{3\\}$",
            markingGuide: ["Identify horizontal asymptote at $y=3$."]
        },
        {
            id: 'mm-25-1-q2',
            number: 'Question 2',
            text: "Solve $2 \\log_e(x) - \\log_e(x+2) = \\log_e(3)$ for $x$.",
            marks: 3,
            topic: Topic.FUNCTIONS,
            subTopic: "Logarithms",
            answer: "$x=6$",
            markingGuide: [
                "Combine LHS: $\\log_e(\\frac{x^2}{x+2})$",
                "Equate arguments: $x^2 = 3(x+2)$",
                "Solve quadratic $x^2 - 3x - 6 = 0$, reject negative solution."
            ]
        },
        {
            id: 'mm-25-1-q3',
            number: 'Question 3',
            text: "Differentiate $x^2 \\sin(2x)$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Product Rule",
            answer: "$2x\\sin(2x) + 2x^2\\cos(2x)$",
            markingGuide: ["$u=x^2, v=\\sin(2x)$", "$u'=2x, v'=2\\cos(2x)$", "Apply $u'v + uv'$"]
        },
        {
            id: 'mm-25-1-q4',
            number: 'Question 4',
            text: "Find the area bounded by $y=e^x$, the x-axis, $x=0$ and $x=2$.",
            marks: 2,
            topic: Topic.CALCULUS,
            subTopic: "Area under curve",
            answer: "$e^2 - 1$",
            markingGuide: ["Integral $\\int_0^2 e^x dx$", "$[e^x]_0^2 = e^2 - e^0$"]
        },
        {
            id: 'mm-25-1-q5',
            number: 'Question 5',
            text: "Let $X \\sim \\text{Bi}(n, p)$. If $E(X)=12$ and $\\text{Var}(X)=4.8$, find $n$ and $p$.",
            marks: 3,
            topic: Topic.PROBABILITY,
            subTopic: "Binomial Parameters",
            answer: "$n=20, p=0.6$",
            markingGuide: [
                "$np = 12$", 
                "$np(1-p) = 4.8 \\implies 12(1-p) = 4.8$",
                "$1-p = 0.4 \\implies p=0.6$",
                "$n(0.6)=12 \\implies n=20$"
            ]
        }
    ]
};
