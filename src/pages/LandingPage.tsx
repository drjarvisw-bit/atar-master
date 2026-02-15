import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, BookOpen, BarChart3, ChevronDown, ChevronRight, Check, X, ArrowRight, Zap } from 'lucide-react';

const stats = [
  { value: '10', label: 'Past Exams' },
  { value: '800+', label: 'Questions' },
  { value: '5', label: 'Years Covered' },
];

const features = [
  {
    emoji: '🌳',
    icon: <GitBranch size={28} />,
    title: 'Skill Tree',
    desc: 'Unlock topics step by step, from foundations to exam mastery. See your learning path laid out visually — like a tech tree for VCE.',
  },
  {
    emoji: '📝',
    icon: <BookOpen size={28} />,
    title: 'Real Exam Practice',
    desc: 'Every VCE Mathematical Methods exam from 2021–2025, with detailed step-by-step solutions. Practice with the real thing.',
  },
  {
    emoji: '📊',
    icon: <BarChart3 size={28} />,
    title: 'Progress Tracking',
    desc: 'Real-time mastery tracking across every topic. Instantly spot weak areas and focus your study where it matters most.',
  },
];

const steps = [
  { num: '01', title: 'Pick a Topic', desc: 'Choose from the skill tree or jump into a past exam.', icon: <ChevronRight size={20} /> },
  { num: '02', title: 'Practice', desc: 'Solve real exam questions with hints and detailed solutions.', icon: <Zap size={20} /> },
  { num: '03', title: 'Master', desc: 'Track your progress and unlock advanced topics as you improve.', icon: <Check size={20} /> },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Try before you commit',
    cta: 'Get Started Free',
    highlight: false,
    features: [
      { text: '3 past exams (2021–2023)', included: true },
      { text: 'Basic progress tracking', included: true },
      { text: 'Full skill tree access', included: false },
      { text: 'Step-by-step solutions', included: false },
      { text: 'All 10 past exams', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    desc: 'Everything you need to ace Methods',
    cta: 'Start Pro Trial',
    highlight: true,
    features: [
      { text: 'All 10 past exams (2021–2025)', included: true },
      { text: 'Full skill tree with unlocks', included: true },
      { text: 'Advanced progress analytics', included: true },
      { text: 'Step-by-step worked solutions', included: true },
      { text: 'Priority new content access', included: true },
    ],
  },
];

const faqs = [
  {
    q: 'What subjects are covered?',
    a: 'Currently we cover VCE Mathematical Methods Units 3 & 4. Specialist Mathematics is coming soon.',
  },
  {
    q: 'Are these real VCE exam questions?',
    a: 'Yes! Every question comes from actual VCAA past exams (2021–2025), including both Exam 1 and Exam 2.',
  },
  {
    q: 'How does the skill tree work?',
    a: 'Topics are arranged in a dependency graph. Master foundational concepts to unlock advanced ones, building a solid understanding from the ground up.',
  },
  {
    q: 'Can I cancel my Pro subscription?',
    a: 'Absolutely. Cancel anytime with one click — no lock-in contracts, no questions asked.',
  },
  {
    q: 'Is this suitable for all VCE Methods students?',
    a: "Yes! Whether you're aiming for a 25 or a 50, the skill tree adapts to your level. Start from basics or jump straight to exam-level problems.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gh-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gh-surface/50 transition-colors"
      >
        <span className="font-medium text-gh-text-primary">{q}</span>
        <ChevronDown size={18} className={`text-gh-text-muted transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-gh-text-secondary text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gh-border bg-gh-surface text-sm text-gh-text-secondary mb-8">
            📐 2021–2025 VCE Methods Exams Now Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
            ATAR Master
          </h1>
          <p className="text-xl text-gh-text-secondary mb-3">
            VCE Maths Exam Prep — Built for Results
          </p>
          <p className="text-gh-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Real past exams. Structured skill trees. Progress tracking that shows exactly where to focus. Built by students who've been through it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/skill-tree"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              <GitBranch size={18} />
              Start Learning Free
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-gh-border hover:border-gh-text-muted text-gh-text-secondary font-medium px-8 py-3.5 rounded-xl transition-colors"
            >
              See How It Works
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gh-border bg-gh-surface/50">
        <div className="mx-auto max-w-4xl px-6 py-12 grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-blue-500">
                {s.value}
              </div>
              <div className="text-sm text-gh-text-muted mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Everything You Need to Ace Methods</h2>
          <p className="text-gh-text-secondary max-w-2xl mx-auto">Three tools working together to take you from confused to confident.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-gh-border rounded-2xl p-8 bg-gh-surface hover:border-gh-text-muted transition-colors"
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-lg font-semibold mb-3 text-white">{f.title}</h3>
              <p className="text-gh-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gh-surface/30 border-y border-gh-border">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-gh-text-secondary">Three steps to exam mastery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-600/30 text-blue-500 mb-6">
                  <span className="text-xl font-bold">{s.num}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-gh-text-secondary text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Simple, Student-Friendly Pricing</h2>
          <p className="text-gh-text-secondary">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-colors ${
                plan.highlight
                  ? 'border-blue-600 bg-gh-surface'
                  : 'border-gh-border bg-gh-surface'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-xs font-semibold text-white">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
              <p className="text-gh-text-muted text-sm mb-4">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gh-text-muted text-sm">{plan.period}</span>
              </div>
              <Link
                to={plan.highlight ? "/pricing" : "/skill-tree"}
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'border border-gh-border hover:border-gh-text-muted text-gh-text-primary'
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <X size={16} className="text-gh-text-muted shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? 'text-gh-text-secondary' : 'text-gh-text-muted'}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gh-surface/30 border-y border-gh-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Master Methods?</h2>
        <p className="text-gh-text-secondary mb-8 max-w-xl mx-auto">
          Join students across Victoria who are preparing smarter, not harder.
        </p>
        <Link
          to="/skill-tree"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
        >
          <GitBranch size={18} />
          Start Learning Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gh-border">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GitBranch size={18} className="text-blue-500" />
            <span className="font-semibold text-white">ATAR Master</span>
          </div>
          <p className="text-gh-text-muted text-sm">
            © 2025 ATAR Master. Built for VCE students in Victoria, Australia.
          </p>
          <div className="flex gap-6 text-sm text-gh-text-muted">
            <a href="#" className="hover:text-gh-text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-gh-text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-gh-text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
