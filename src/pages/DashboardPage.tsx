import { useMemo } from 'react';
import { useProgress } from '../hooks/useProgress';
import { getAllExams } from '../data/exams';
import { Topic, SKILL_TOPIC_COLORS } from '../types';
import { Flame, Clock, CheckCircle2, TrendingUp, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const TOPICS = Object.values(Topic);

export default function DashboardPage() {
  const progress = useProgress();
  const overall = progress.getOverallProgress();
  const streak = progress.getStreak();
  const practiceTime = progress.getTotalPracticeTime();
  const sessions = progress.getRecentSessions();
  const weakCount = progress.getWeakQuestions().length;

  const topicData = useMemo(() =>
    TOPICS.map(t => ({ topic: t, ...progress.getTopicProgress(t) })).filter(t => t.total > 0),
    [progress]
  );

  const allExams = useMemo(() => getAllExams(), []);

  // Recommend: topic with lowest completion rate that has questions
  const recommended = useMemo(() => {
    if (weakCount > 0) return { label: 'Weak Areas', mode: 'weak' };
    const sorted = topicData
      .filter(t => t.total > 0)
      .sort((a, b) => (a.completed / a.total) - (b.completed / b.total));
    if (sorted.length > 0 && sorted[0].completed < sorted[0].total) {
      return { label: sorted[0].topic, mode: 'topic' };
    }
    return { label: 'Random Mix', mode: 'random' };
  }, [topicData, weakCount]);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">📊 Dashboard</h1>
      <p className="text-gh-text-secondary mb-8">Track your progress and stay on top</p>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {([
          { icon: <CheckCircle2 size={20} className="text-green-400" />, value: `${overall.completed}/${overall.total}`, label: 'Questions Done' },
          { icon: <Flame size={20} className="text-orange-400" />, value: `${streak}`, label: 'Day Streak 🔥' },
          { icon: <Clock size={20} className="text-blue-400" />, value: `${Math.round(practiceTime)}m`, label: 'Practice Time' },
          { icon: <TrendingUp size={20} className="text-purple-400" />, value: `${weakCount}`, label: 'Weak Questions' },
        ]).map((s, i) => (
          <div key={i} className="bg-gh-surface border border-gh-border rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">{s.icon}</div>
            <div className="text-2xl font-bold text-gh-text-primary">{s.value}</div>
            <div className="text-xs text-gh-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Topic progress */}
      <div className="bg-gh-surface border border-gh-border rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Topic Mastery</h2>
        <div className="space-y-4">
          {topicData.map(({ topic, completed, total }) => {
            const pct = total ? Math.round((completed / total) * 100) : 0;
            const color = SKILL_TOPIC_COLORS[topic];
            return (
              <div key={topic}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: color?.primary }}>{topic}</span>
                  <span className="text-gh-text-secondary">{completed}/{total} ({pct}%)</span>
                </div>
                <div className="w-full h-2 bg-gh-canvas rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color?.primary }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent sessions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gh-surface border border-gh-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Practice</h2>
          {sessions.length === 0 ? (
            <p className="text-sm text-gh-text-secondary">No practice sessions yet. Start one!</p>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {sessions.slice(0, 8).map((s, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gh-text-primary capitalize">{s.mode}</span>
                    <span className="text-gh-text-secondary ml-2">{new Date(s.date).toLocaleDateString()}</span>
                  </div>
                  <span className={s.correct / s.total >= 0.7 ? 'text-green-400' : 'text-yellow-400'}>
                    {s.correct}/{s.total}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recommendation */}
        <div className="bg-gh-surface border border-gh-border rounded-xl p-6 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">🎯 Recommended Next</h2>
          <p className="text-gh-text-secondary text-sm mb-4 flex-1">
            {weakCount > 0
              ? `You have ${weakCount} questions to revisit. Let's strengthen those weak spots!`
              : `Focus on "${recommended.label}" to improve your weakest area.`
            }
          </p>
          <Link
            to="/practice"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gh-accent-blue text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            <Play size={16} /> Start Practice
          </Link>
        </div>
      </div>

      {/* Exam progress */}
      <div className="bg-gh-surface border border-gh-border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Exam Completion</h2>
        <div className="grid grid-cols-2 gap-3">
          {allExams.map(exam => {
            const ep = progress.getExamProgress(exam.id);
            return (
              <div key={exam.id} className="flex items-center justify-between p-3 bg-gh-canvas rounded-lg border border-gh-border">
                <span className="text-sm text-gh-text-primary">{exam.title}</span>
                <span className="text-xs text-gh-text-secondary">{ep.percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
