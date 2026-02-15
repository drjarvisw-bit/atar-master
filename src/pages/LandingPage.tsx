import { Link } from 'react-router-dom';
import { GitBranch, Target, Trophy, Zap } from 'lucide-react';

const features = [
  {
    icon: <GitBranch size={28} />,
    title: 'Civilization-Style Skill Tree',
    desc: 'Unlock skills like a tech tree — master foundations before advancing to exam-level problems.',
  },
  {
    icon: <Target size={28} />,
    title: 'Real VCE Exam Questions',
    desc: 'Top-tier nodes are actual past exam questions. Prove your mastery where it counts.',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Progressive Mastery',
    desc: 'Track your progress from locked → learning → mastered across every topic.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Adaptive Difficulty',
    desc: 'Each node builds on prerequisites. You only face challenges you\'re ready for.',
  },
];

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gh-accent-blue via-purple-400 to-gh-danger-fg bg-clip-text text-transparent">
          ATAR Master
        </h1>
        <p className="text-xl text-gh-text-secondary mb-2">
          Civilization Tech Tree × VCE Exam Prep
        </p>
        <p className="text-gh-text-muted max-w-2xl mx-auto mb-8">
          Unlock skill nodes, master prerequisites, and conquer real exam questions.
          A structured path from foundational concepts to exam-ready mastery.
        </p>
        <Link
          to="/skill-tree"
          className="inline-flex items-center gap-2 bg-gh-accent-blue-bold hover:bg-gh-accent-blue text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          <GitBranch size={18} />
          Enter the Skill Tree
        </Link>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="border border-gh-border rounded-xl p-6 bg-gh-surface hover:border-gh-accent-blue/40 transition-colors"
          >
            <div className="text-gh-accent-blue mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
            <p className="text-gh-text-secondary text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Subjects */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Supported Subjects</h2>
        <div className="flex justify-center gap-4">
          {['Mathematical Methods', 'Specialist Mathematics'].map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-gh-border bg-gh-surface text-sm text-gh-text-secondary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
