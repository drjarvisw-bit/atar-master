import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { type ExamPaper, type ExamQuestion, Subject, Topic } from '../types';

// Sample exam data
const sampleExam: ExamPaper = {
  id: 'methods-2023-exam1',
  year: 2023,
  subject: Subject.METHODS,
  title: 'Mathematical Methods — Exam 1 (Tech Free)',
  questions: [
    {
      id: 'mm23-q1',
      number: '1',
      text: 'Let f(x) = 2sin(3x). Find f\'(x).',
      marks: 2,
      topic: Topic.CALCULUS,
      subTopic: 'Trig Differentiation',
      answer: "f'(x) = 6cos(3x)",
      markingGuide: ['Apply chain rule: 2 × 3cos(3x) [M1]', 'Simplify: 6cos(3x) [A1]'],
    },
    {
      id: 'mm23-q2',
      number: '2',
      text: 'Solve the equation 2log_e(x) - log_e(x - 1) = log_e(4) for x > 1.',
      marks: 3,
      topic: Topic.FUNCTIONS,
      subTopic: 'Logarithmic Equations',
      answer: 'x = 2',
      markingGuide: [
        'Combine: log_e(x²/(x-1)) = log_e(4) [M1]',
        'x²/(x-1) = 4 → x² - 4x + 4 = 0 [M1]',
        '(x-2)² = 0 → x = 2 [A1]',
      ],
    },
    {
      id: 'mm23-q3',
      number: '3',
      text: 'A continuous random variable X has probability density function f(x) = kx(1-x) for 0 ≤ x ≤ 1 and f(x) = 0 otherwise. Find the value of k.',
      marks: 3,
      topic: Topic.PROBABILITY,
      subTopic: 'PDF',
      answer: 'k = 6',
      markingGuide: [
        '∫₀¹ kx(1-x) dx = 1 [M1]',
        'k[x²/2 - x³/3]₀¹ = 1 → k(1/2 - 1/3) = 1 [M1]',
        'k × 1/6 = 1 → k = 6 [A1]',
      ],
    },
  ],
};

function QuestionCard({ q }: { q: ExamQuestion }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gh-border rounded-xl bg-gh-surface overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div>
          <span className="text-xs text-gh-text-muted mr-2">Q{q.number}</span>
          <span className="text-sm text-gh-text-primary">{q.text}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs text-gh-text-muted">{q.marks}m</span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-gh-border-muted">
          <div className="mt-3 bg-gh-inset rounded-lg p-3 space-y-1">
            <p className="text-sm font-semibold text-gh-success-fg">{q.answer}</p>
            {q.markingGuide.map((step, i) => (
              <p key={i} className="text-xs text-gh-text-secondary">{step}</p>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-gh-overlay text-gh-text-muted">{q.topic}</span>
            {q.subTopic && (
              <span className="text-xs px-2 py-0.5 rounded bg-gh-overlay text-gh-text-muted">{q.subTopic}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExamViewerPage() {
  const exam = sampleExam;

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{exam.title}</h1>
        <p className="text-sm text-gh-text-secondary">{exam.year} · {exam.questions.length} questions · {exam.questions.reduce((s, q) => s + q.marks, 0)} marks total</p>
      </div>
      <div className="space-y-3">
        {exam.questions.map((q) => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>
    </div>
  );
}
