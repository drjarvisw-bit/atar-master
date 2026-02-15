import { useState, useMemo, useCallback } from 'react';
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Filter,
  BarChart3,
  Menu,
  X,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { type ExamPaper, type ExamQuestion, Topic, SKILL_TOPIC_COLORS } from '../types';
import { getAllExams } from '../data/exams';
import MathText from '../components/MathText';

/* ───────── helpers ───────── */

const topicColor = (t: Topic) => SKILL_TOPIC_COLORS[t] ?? { primary: '#8b949e', glow: '#8b949e', bg: 'rgba(139,148,158,0.15)' };

function groupByYear(exams: ExamPaper[]): Record<number, ExamPaper[]> {
  const g: Record<number, ExamPaper[]> = {};
  for (const e of exams) {
    (g[e.year] ??= []).push(e);
  }
  return g;
}

/* ───────── Sidebar ───────── */

function Sidebar({
  exams,
  selectedId,
  onSelect,
  open,
  onClose,
}: {
  exams: ExamPaper[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  open: boolean;
  onClose: () => void;
}) {
  const grouped = useMemo(() => groupByYear(exams), [exams]);
  const years = useMemo(() => Object.keys(grouped).map(Number).sort((a, b) => b - a), [grouped]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>(() => {
    const m: Record<number, boolean> = {};
    years.forEach((y) => (m[y] = true));
    return m;
  });

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-gh-surface border-r border-gh-border z-50
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-auto
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gh-border">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-gh-accent-blue" />
            <h2 className="font-semibold text-sm text-gh-text-primary">Exam Browser</h2>
          </div>
          <button onClick={onClose} className="lg:hidden text-gh-text-muted hover:text-gh-text-primary">
            <X size={18} />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-57px)] p-2">
          {years.map((year) => (
            <div key={year} className="mb-1">
              <button
                onClick={() => setExpanded((p) => ({ ...p, [year]: !p[year] }))}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gh-text-secondary uppercase tracking-wider hover:text-gh-text-primary rounded-lg hover:bg-gh-overlay transition-colors"
              >
                {expanded[year] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                {year}
                <span className="ml-auto text-gh-text-muted font-normal normal-case">
                  {grouped[year].length} papers
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[year] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {grouped[year]
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((exam) => {
                    const isSelected = exam.id === selectedId;
                    const qCount = exam.questions.length;
                    return (
                      <button
                        key={exam.id}
                        onClick={() => { onSelect(exam.id); onClose(); }}
                        className={`
                          w-full flex items-center gap-2 px-4 py-2.5 ml-2 text-left text-sm rounded-lg
                          transition-all duration-150
                          ${isSelected
                            ? 'bg-gh-accent-blue/15 text-gh-accent-blue border-l-2 border-gh-accent-blue'
                            : 'text-gh-text-secondary hover:text-gh-text-primary hover:bg-gh-overlay'
                          }
                        `}
                      >
                        <FileText size={14} className="shrink-0" />
                        <span className="truncate">
                          {exam.title.includes('Exam 1') ? 'Exam 1' : 'Exam 2'}
                        </span>
                        <span className="ml-auto text-xs text-gh-text-muted">
                          {qCount > 0 ? `${qCount}Q` : '—'}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

/* ───────── Stats Bar ───────── */

function StatsBar({ questions }: { questions: ExamQuestion[] }) {
  const totalMarks = questions.reduce((s, q) => s + q.marks, 0);
  const topicCounts: Record<string, number> = {};
  for (const q of questions) {
    topicCounts[q.topic] = (topicCounts[q.topic] ?? 0) + 1;
  }
  const sorted = Object.entries(topicCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-gh-surface rounded-xl border border-gh-border">
      <div className="flex items-center gap-2">
        <BarChart3 size={16} className="text-gh-accent-blue" />
        <span className="text-sm font-medium text-gh-text-primary">Stats</span>
      </div>
      <div className="h-4 w-px bg-gh-border hidden sm:block" />
      <span className="text-xs text-gh-text-secondary">
        <strong className="text-gh-text-primary">{questions.length}</strong> questions
      </span>
      <span className="text-xs text-gh-text-secondary">
        <strong className="text-gh-text-primary">{totalMarks}</strong> marks
      </span>
      <div className="h-4 w-px bg-gh-border hidden sm:block" />
      <div className="flex flex-wrap gap-2">
        {sorted.map(([topic, count]) => {
          const c = topicColor(topic as Topic);
          const pct = Math.round((count / questions.length) * 100);
          return (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: c.bg, color: c.primary }}
            >
              {topic} {pct}%
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ───────── Filter Bar ───────── */

function FilterBar({
  topics,
  selectedTopics,
  onToggleTopic,
  marksRange,
  onMarksRange,
}: {
  topics: Topic[];
  selectedTopics: Set<Topic>;
  onToggleTopic: (t: Topic) => void;
  marksRange: [number, number];
  onMarksRange: (r: [number, number]) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gh-surface rounded-xl border border-gh-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 p-4 text-sm font-medium text-gh-text-primary hover:bg-gh-overlay transition-colors"
      >
        <Filter size={16} className="text-gh-accent-blue" />
        Filters
        {selectedTopics.size > 0 && (
          <span className="text-xs px-1.5 py-0.5 rounded-full bg-gh-accent-blue/20 text-gh-accent-blue">
            {selectedTopics.size}
          </span>
        )}
        <ChevronDown
          size={14}
          className={`ml-auto text-gh-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-3 border-t border-gh-border-muted pt-3">
          {/* Topic chips */}
          <div>
            <label className="text-xs text-gh-text-muted uppercase tracking-wider mb-2 block">Topics</label>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => {
                const active = selectedTopics.has(t);
                const c = topicColor(t);
                return (
                  <button
                    key={t}
                    onClick={() => onToggleTopic(t)}
                    className="text-xs px-2.5 py-1 rounded-full transition-all duration-150 border"
                    style={{
                      background: active ? c.bg : 'transparent',
                      color: active ? c.primary : '#8b949e',
                      borderColor: active ? c.primary + '44' : '#30363d',
                    }}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Marks range */}
          <div>
            <label className="text-xs text-gh-text-muted uppercase tracking-wider mb-2 block">
              Marks: {marksRange[0]} – {marksRange[1]}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range" min={1} max={20} value={marksRange[0]}
                onChange={(e) => onMarksRange([Math.min(+e.target.value, marksRange[1]), marksRange[1]])}
                className="flex-1 accent-[#58a6ff] h-1"
              />
              <input
                type="range" min={1} max={20} value={marksRange[1]}
                onChange={(e) => onMarksRange([marksRange[0], Math.max(+e.target.value, marksRange[0])])}
                className="flex-1 accent-[#58a6ff] h-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Question Card ───────── */

function QuestionCard({ q }: { q: ExamQuestion }) {
  const [open, setOpen] = useState(false);
  const c = topicColor(q.topic);

  return (
    <div
      className="border border-gh-border rounded-xl bg-gh-surface overflow-hidden transition-all duration-200 hover:border-gh-text-muted"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left group"
      >
        {/* Question number badge */}
        <span
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
          style={{ background: c.bg, color: c.primary }}
        >
          {q.number}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-gh-text-primary leading-relaxed"><MathText text={q.text} /></p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: c.bg, color: c.primary }}
            >
              {q.topic}
            </span>
            {q.subTopic && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-gh-overlay text-gh-text-muted">
                {q.subTopic}
              </span>
            )}
            <span className="text-xs text-gh-text-muted ml-auto">
              {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
            </span>
          </div>
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 text-gh-text-muted mt-1 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-3 border-t border-gh-border-muted">
          {/* MC options */}
          {q.options && q.options.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {q.options.map((opt) => {
                const isCorrect = q.answer.startsWith(opt.label);
                return (
                  <div
                    key={opt.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                      isCorrect
                        ? 'bg-gh-success/10 border border-gh-success/30'
                        : 'bg-gh-inset'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isCorrect
                          ? 'bg-gh-success-fg/20 text-gh-success-fg'
                          : 'bg-gh-overlay text-gh-text-muted'
                      }`}
                    >
                      {isCorrect ? <CheckCircle2 size={14} /> : opt.label}
                    </span>
                    <span className={isCorrect ? 'text-gh-success-fg font-medium' : 'text-gh-text-secondary'}>
                      <MathText text={opt.text} />
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Answer */}
          <div className="mt-3 bg-gh-inset rounded-lg p-3 border border-gh-border-muted">
            <p className="text-xs text-gh-text-muted uppercase tracking-wider mb-1.5">Answer</p>
            <p className="text-sm font-semibold text-gh-success-fg"><MathText text={q.answer} /></p>
          </div>

          {/* Marking guide */}
          {q.markingGuide.length > 0 && (
            <div className="bg-gh-inset rounded-lg p-3 border border-gh-border-muted">
              <p className="text-xs text-gh-text-muted uppercase tracking-wider mb-1.5">Marking Guide</p>
              <div className="space-y-1">
                {q.markingGuide.map((step, i) => (
                  <p key={i} className="text-xs text-gh-text-secondary leading-relaxed">
                    <span className="text-gh-accent-blue font-mono mr-1">{i + 1}.</span>
                    <MathText text={step} />
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── Empty State ───────── */

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gh-overlay flex items-center justify-center mb-4">
        <BookOpen size={28} className="text-gh-text-muted" />
      </div>
      <h3 className="text-lg font-semibold text-gh-text-primary mb-1">Select an exam</h3>
      <p className="text-sm text-gh-text-secondary max-w-xs">
        Choose an exam paper from the sidebar to view its questions, answers, and marking criteria.
      </p>
    </div>
  );
}

/* ───────── Main Page ───────── */

export default function ExamViewerPage() {
  const allExams = useMemo(() => getAllExams(), []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<Set<Topic>>(new Set());
  const [marksRange, setMarksRange] = useState<[number, number]>([1, 20]);

  const selectedExam = useMemo(
    () => (selectedId ? allExams.find((e) => e.id === selectedId) ?? null : null),
    [selectedId, allExams]
  );

  const availableTopics = useMemo(() => {
    if (!selectedExam) return [];
    const set = new Set(selectedExam.questions.map((q) => q.topic));
    return Array.from(set).sort();
  }, [selectedExam]);

  const filteredQuestions = useMemo(() => {
    if (!selectedExam) return [];
    return selectedExam.questions.filter((q) => {
      if (selectedTopics.size > 0 && !selectedTopics.has(q.topic)) return false;
      if (q.marks < marksRange[0] || q.marks > marksRange[1]) return false;
      return true;
    });
  }, [selectedExam, selectedTopics, marksRange]);

  const toggleTopic = useCallback((t: Topic) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }, []);

  // Reset filters when exam changes
  const handleSelectExam = useCallback((id: string) => {
    setSelectedId(id);
    setSelectedTopics(new Set());
    setMarksRange([1, 20]);
  }, []);

  return (
    <div className="flex h-full min-h-screen bg-gh-canvas">
      <Sidebar
        exams={allExams}
        selectedId={selectedId}
        onSelect={handleSelectExam}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 p-4 border-b border-gh-border bg-gh-surface sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-gh-overlay text-gh-text-secondary"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm font-medium text-gh-text-primary truncate">
            {selectedExam?.title ?? 'Exam Browser'}
          </span>
        </div>

        {selectedExam ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            {/* Header */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gh-text-primary">{selectedExam.title}</h1>
              <p className="text-sm text-gh-text-secondary mt-1">
                {selectedExam.subject} · {selectedExam.year}
              </p>
            </div>

            {selectedExam.questions.length > 0 ? (
              <>
                <StatsBar questions={selectedExam.questions} />
                <FilterBar
                  topics={availableTopics}
                  selectedTopics={selectedTopics}
                  onToggleTopic={toggleTopic}
                  marksRange={marksRange}
                  onMarksRange={setMarksRange}
                />

                {filteredQuestions.length > 0 ? (
                  <div className="space-y-3">
                    {filteredQuestions.map((q) => (
                      <QuestionCard key={q.id} q={q} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-sm text-gh-text-muted">No questions match the current filters.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-12 h-12 rounded-xl bg-gh-overlay flex items-center justify-center mx-auto mb-3">
                  <FileText size={22} className="text-gh-text-muted" />
                </div>
                <p className="text-sm text-gh-text-muted">No questions available for this exam yet.</p>
              </div>
            )}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}
