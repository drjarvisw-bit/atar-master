import { useState } from 'react';
import { X, Lock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { type SkillTreeNode, SkillNodeStatus, SKILL_TOPIC_COLORS } from '../types';

interface Props {
  node: SkillTreeNode;
  status: SkillNodeStatus;
  onComplete: () => void;
  onClose: () => void;
}

export default function SkillNodePanel({ node, status, onComplete, onClose }: Props) {
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<string | null>(null);
  const colors = SKILL_TOPIC_COLORS[node.topic] ?? { primary: '#8b949e', glow: '#8b949e', bg: 'rgba(139,148,158,0.15)' };
  const isCompleted = status === SkillNodeStatus.COMPLETED;
  const isLocked = status === SkillNodeStatus.LOCKED;

  return (
    <div className="border border-gh-border rounded-xl bg-gh-surface overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gh-border" style={{ borderTopColor: colors.primary, borderTopWidth: 3 }}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-base" style={{ color: colors.primary }}>{node.title}</h3>
            <p className="text-xs text-gh-text-muted mt-0.5">Tier {node.tier} · {node.topic}</p>
          </div>
          <button onClick={onClose} className="text-gh-text-muted hover:text-gh-text-primary">
            <X size={16} />
          </button>
        </div>
        <p className="text-sm text-gh-text-secondary mt-2">{node.description}</p>

        {isCompleted && (
          <span className="inline-flex items-center gap-1 mt-2 text-xs text-gh-success-fg">
            <CheckCircle size={12} /> Completed
          </span>
        )}
        {isLocked && (
          <span className="inline-flex items-center gap-1 mt-2 text-xs text-gh-text-muted">
            <Lock size={12} /> Prerequisites not met
          </span>
        )}

        {node.isExamQuestion && node.examRef && (
          <div className="mt-2 text-xs px-2 py-1 rounded bg-gh-overlay text-gh-warning-fg inline-block">
            📝 {node.examRef.subject} {node.examRef.year} Q{node.examRef.questionNumber} ({node.examRef.marks} marks)
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="p-4">
        {node.questions.length === 0 ? (
          <p className="text-sm text-gh-text-muted italic">No practice questions yet.</p>
        ) : (
          <div className="space-y-3">
            {node.questions.map((q) => (
              <div key={q.id} className="border border-gh-border-muted rounded-lg bg-gh-overlay">
                <button
                  onClick={() => setExpandedQ(expandedQ === q.id ? null : q.id)}
                  className="w-full flex items-center justify-between p-3 text-left text-sm"
                >
                  <span className="text-gh-text-primary">{q.text}</span>
                  {expandedQ === q.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {expandedQ === q.id && (
                  <div className="px-3 pb-3 space-y-2">
                    {/* Hints */}
                    {q.hints.length > 0 && (
                      <div className="text-xs space-y-1">
                        {q.hints.map((h, i) => (
                          <p key={i} className="text-gh-warning-fg">💡 Hint {i + 1}: {h}</p>
                        ))}
                      </div>
                    )}
                    {/* Answer toggle */}
                    <button
                      onClick={() => setShowAnswer(showAnswer === q.id ? null : q.id)}
                      className="text-xs text-gh-accent-blue hover:underline"
                    >
                      {showAnswer === q.id ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer === q.id && (
                      <div className="bg-gh-inset rounded p-2 text-xs space-y-1">
                        <p className="font-semibold text-gh-success-fg">{q.answer}</p>
                        {q.markingGuide.map((step, i) => (
                          <p key={i} className="text-gh-text-secondary">{step}</p>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gh-text-muted text-right">{q.marks} mark{q.marks > 1 ? 's' : ''}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Complete button */}
        {!isCompleted && !isLocked && (
          <button
            onClick={onComplete}
            className="mt-4 w-full py-2 rounded-lg bg-gh-success hover:bg-gh-success-fg text-white text-sm font-medium transition-colors"
          >
            Mark as Completed ✓
          </button>
        )}
      </div>
    </div>
  );
}
