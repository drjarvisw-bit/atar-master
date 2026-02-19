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

const topicColor = (t: Topic) => SKILL_TOPIC_COLORS[t] ?? { primary: '#6B7280', glow: '#6B7280', bg: 'rgba(107,114,128,0.12)' };

function groupByYear(exams: ExamPaper[]): Record<number, ExamPaper[]> {
  const g: Record<number, ExamPaper[]> = {};
  for (const e of exams) {
    (g[e.year] ??= []).push(e);
  }
  return g;
}

/* ───────── Sidebar ───────── */

function Sidebar({
  exams, selectedId, onSelect, open, onClose,
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
      {open && (
        <div className="fixed inset-0 bg-black/25 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-black/10 z-50
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-auto
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-black/8">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-black/40" />
            <h2 className="font-semibold text-sm text-black">Exam Browser</h2>
          </div>
          <button onClick={onClose} className="lg:hidden text-black/35 hover:text-black">
            <X size={18} />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-57px)] p-2">
          {years.map((year) => (
            <div key={year} className="mb-1">
              <button
                onClick={() => setExpanded((p) => ({ ...p, [year]: !p[year] }))}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-black/40 uppercase tracking-wider hover:text-black rounded-lg hover:bg-black/[0.04] transition-colors"
              >
                {expanded[year] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                {year}
                <span className="ml-auto text-black/30 font-normal normal-case">
                  {grouped[year].length} papers
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expanded[year] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
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
                            ? 'bg-black/[0.06] text-black font-medium border-l-2 border-black/40'
                            : 'text-black/50 hover:text-black hover:bg-black/[0.04]'
                          }
                        `}
                      >
                        <FileText size={14} className="shrink-0" />
                        <span className="truncate">
                          {exam.title.includes('Exam 1') ? 'Exam 1' : 'Exam 2'}
                        </span>
                        <span className="ml-auto text-xs text-black/30">
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
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-xl border border-black/10">
      <div className="flex items-center gap-2">
        <BarChart3 size={16} className="text-black/40" />
        <span className="text-sm font-medium text-black">Stats</span>
      </div>
      <div className="h-4 w-px bg-black/10 hidden sm:block" />
      <span className="text-xs text-black/45">
        <strong className="text-black">{questions.length}</strong> questions
      </span>
      <span className="text-xs text-black/45">
        <strong className="text-black">{totalMarks}</strong> marks
      </span>
      <div className="h-4 w-px bg-black/10 hidden sm:block" />
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
  topics, selectedTopics, onToggleTopic, marksRange, onMarksRange,
}: {
  topics: Topic[];
  selectedTopics: Set<Topic>;
  onToggleTopic: (t: Topic) => void;
  marksRange: [number, number];
  onMarksRange: (r: [number, number]) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 p-4 text-sm font-medium text-black hover:bg-black/[0.02] transition-colors"
      >
        <Filter size={16} className="text-black/40" />
        Filters
        {selectedTopics.size > 0 && (
          <span className="text-xs px-1.5 py-0.5 rounded-full bg-black/[0.06] text-black/60">
            {selectedTopics.size}
          </span>
        )}
        <ChevronDown
          size={14}
          className={`ml-auto text-black/35 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 space-y-3 border-t border-black/8 pt-3">
          <div>
            <label className="text-xs text-black/35 uppercase tracking-wider mb-2 block">Topics</label>
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
                      color: active ? c.primary : 'rgba(0,0,0,0.45)',
                      borderColor: active ? c.primary + '44' : 'rgba(0,0,0,0.10)',
                    }}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs text-black/35 uppercase tracking-wider mb-2 block">
              Marks: {marksRange[0]} – {marksRange[1]}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range" min={1} max={20} value={marksRange[0]}
                onChange={(e) => onMarksRange([Math.min(+e.target.value, marksRange[1]), marksRange[1]])}
                className="flex-1 h-1"
              />
              <input
                type="range" min={1} max={20} value={marksRange[1]}
                onChange={(e) => onMarksRange([marksRange[0], Math.max(+e.target.value, marksRange[0])])}
                className="flex-1 h-1"
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
    <div className="border border-black/10 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-black/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <span
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
          style={{ background: c.bg, color: c.primary }}
        >
          {q.number}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-black leading-relaxed"><MathText text={q.text} /></p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: c.bg, color: c.primary }}
            >
              {q.topic}
            </span>
            {q.subTopic && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/[0.05] text-black/45">
                {q.subTopic}
              </span>
            )}
            <span className="text-xs text-black/35 ml-auto">
              {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
            </span>
          </div>
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 text-black/30 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 space-y-3 border-t border-black/8">
          {q.options && q.options.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {q.options.map((opt) => {
                const isCorrect = q.answer.startsWith(opt.label);
                return (
                  <div
                    key={opt.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                      isCorrect
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-black/[0.02]'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isCorrect ? 'bg-green-100 text-green-700' : 'bg-black/[0.06] text-black/45'
                    }`}>
                      {isCorrect ? <CheckCircle2 size={14} /> : opt.label}
                    </span>
                    <span className={isCorrect ? 'text-green-700 font-medium' : 'text-black/60'}>
                      <MathText text={opt.text} />
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-3 bg-black/[0.02] rounded-lg p-3 border border-black/8">
            <p className="text-xs text-black/35 uppercase tracking-wider mb-1.5">Answer</p>
            <p className="text-sm font-semibold text-green-700"><MathText text={q.answer} /></p>
          </div>

          {q.markingGuide.length > 0 && (
            <div className="bg-black/[0.02] rounded-lg p-3 border border-black/8">
              <p className="text-xs text-black/35 uppercase tracking-wider mb-1.5">Marking Guide</p>
              <div className="space-y-1">
                {q.markingGuide.map((step, i) => (
                  <p key={i} className="text-xs text-black/55 leading-relaxed">
                    <span className="text-black/35 font-mono mr-1">{i + 1}.</span>
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
      <div className="w-16 h-16 rounded-2xl bg-black/[0.05] flex items-center justify-center mb-4">
        <BookOpen size={28} className="text-black/25" />
      </div>
      <h3 className="text-lg font-semibold text-black mb-1">Select an exam</h3>
      <p className="text-sm text-black/45 max-w-xs">
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

  const handleSelectExam = useCallback((id: string) => {
    setSelectedId(id);
    setSelectedTopics(new Set());
    setMarksRange([1, 20]);
  }, []);

  return (
    <div className="flex h-full min-h-screen bg-[#FAFAFA]">
      <Sidebar
        exams={allExams}
        selectedId={selectedId}
        onSelect={handleSelectExam}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 p-4 border-b border-black/8 bg-white sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-black/[0.04] text-black/45"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm font-medium text-black truncate">
            {selectedExam?.title ?? 'Exam Browser'}
          </span>
        </div>

        {selectedExam ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black">{selectedExam.title}</h1>
              <p className="text-sm text-black/45 mt-1">
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
                    <p className="text-sm text-black/35">No questions match the current filters.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-12 h-12 rounded-xl bg-black/[0.05] flex items-center justify-center mx-auto mb-3">
                  <FileText size={22} className="text-black/25" />
                </div>
                <p className="text-sm text-black/40">No questions available for this exam yet.</p>
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
