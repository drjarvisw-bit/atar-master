import { useMemo, useState } from 'react';
import { X, Lock, CheckCircle2, ChevronDown, ChevronRight, Dumbbell } from 'lucide-react';
import type { SkillTreeNode, SkillNodeStatus, Topic } from '../types';
import { SkillNodeStatus as SNS, SKILL_TOPIC_COLORS } from '../types';
import { getQuestionsForNode, type MatchedQuestion } from '../data/questionMatcher';
import MathText from './MathText';

interface SkillNodePanelProps {
  node: SkillTreeNode;
  allNodes: SkillTreeNode[];
  getStatus: (nodeId: string) => SkillNodeStatus;
  onComplete: (nodeId: string) => void;
  onClose: () => void;
}

export default function SkillNodePanel({ node, allNodes, getStatus, onComplete, onClose }: SkillNodePanelProps) {
  const status = getStatus(node.id);
  const topicColor = SKILL_TOPIC_COLORS[node.topic as Topic] || SKILL_TOPIC_COLORS['Functions & Graphs'];
  const isCompleted = status === SNS.COMPLETED || status === SNS.MASTERED;

  const matchedQuestions = useMemo(() => getQuestionsForNode(node.id), [node.id]);

  // Group by exam
  const groupedByExam = useMemo(() => {
    const groups = new Map<string, { year: number; title: string; questions: MatchedQuestion[] }>();
    matchedQuestions.forEach(mq => {
      const key = mq.examId;
      if (!groups.has(key)) {
        groups.set(key, { year: mq.year, title: mq.examTitle, questions: [] });
      }
      groups.get(key)!.questions.push(mq);
    });
    return [...groups.entries()].sort((a, b) => b[1].year - a[1].year);
  }, [matchedQuestions]);

  const totalMarks = matchedQuestions.reduce((sum, mq) => sum + mq.question.marks, 0);

  const prereqNodes = useMemo(() =>
    node.prerequisites.map(pId => {
      const pNode = allNodes.find(n => n.id === pId);
      const pStatus = getStatus(pId);
      return { id: pId, node: pNode, status: pStatus };
    }),
    [node, allNodes, getStatus]
  );

  const [expandedExams, setExpandedExams] = useState<Set<string>>(new Set());
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleExam = (examId: string) => {
    setExpandedExams(prev => {
      const next = new Set(prev);
      next.has(examId) ? next.delete(examId) : next.add(examId);
      return next;
    });
  };

  const toggleQuestion = (qId: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      next.has(qId) ? next.delete(qId) : next.add(qId);
      return next;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gh-inset/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gh-surface border border-gh-border rounded-lg p-6 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border font-mono"
                style={{
                  color: topicColor.primary,
                  borderColor: topicColor.primary + '40',
                  backgroundColor: topicColor.bg,
                }}
              >
                {node.topic}
              </span>
              <span className="text-[10px] text-gh-text-muted font-mono">
                Tier {node.tier}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gh-text-primary font-mono">{node.title}</h2>
            <p className="text-sm text-gh-text-secondary mt-1">{node.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gh-text-muted hover:text-gh-text-primary transition-colors p-1 -mr-1 -mt-1 flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gh-text-muted font-mono">Difficulty:</span>
            <span className="text-gh-warningFg text-sm">
              {'★'.repeat(node.difficulty)}{'☆'.repeat(5 - node.difficulty)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gh-text-muted font-mono">Questions:</span>
            <span className="text-xs text-gh-text-primary font-mono font-bold">{matchedQuestions.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gh-text-muted font-mono">Total Marks:</span>
            <span className="text-xs text-gh-text-primary font-mono font-bold">{totalMarks}</span>
          </div>
        </div>

        {/* Prerequisites */}
        {prereqNodes.length > 0 && (
          <div className="mb-4">
            <div className="text-xs text-gh-text-muted font-mono mb-2">Prerequisites</div>
            <div className="flex flex-wrap gap-2">
              {prereqNodes.map(({ id, node: pNode, status: pStatus }) => {
                const done = pStatus === SNS.COMPLETED || pStatus === SNS.MASTERED;
                return (
                  <span
                    key={id}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border font-mono ${
                      done
                        ? 'border-gh-successFg/30 text-gh-successFg bg-gh-successFg/10'
                        : 'border-gh-border text-gh-text-muted bg-gh-canvas'
                    }`}
                  >
                    {done ? <CheckCircle2 size={12} /> : <Lock size={12} />}
                    {pNode?.title || id}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Matched Exam Questions */}
        {groupedByExam.length > 0 && (
          <div className="mb-6">
            <div className="text-xs text-gh-text-muted font-mono mb-3">
              Exam Questions ({matchedQuestions.length})
            </div>
            <div className="space-y-2">
              {groupedByExam.map(([examId, group]) => {
                const isExpanded = expandedExams.has(examId);
                return (
                  <div key={examId} className="border border-gh-border rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleExam(examId)}
                      className="w-full flex items-center justify-between px-3 py-2 bg-gh-canvas hover:bg-gh-surface/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {isExpanded ? <ChevronDown size={14} className="text-gh-text-muted" /> : <ChevronRight size={14} className="text-gh-text-muted" />}
                        <span className="text-xs font-mono text-gh-text-primary font-bold">{group.year}</span>
                        <span className="text-xs font-mono text-gh-text-secondary">{group.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gh-text-muted">{group.questions.length} Qs</span>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-gh-border">
                        {group.questions.map(mq => {
                          const q = mq.question;
                          const isQExpanded = expandedQuestions.has(q.id);
                          return (
                            <div key={q.id} className="border-b border-gh-border last:border-b-0">
                              <button
                                onClick={() => toggleQuestion(q.id)}
                                className="w-full flex items-center justify-between px-4 py-2 hover:bg-gh-canvas/50 transition-colors text-left"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {isQExpanded
                                    ? <ChevronDown size={12} className="text-gh-text-muted flex-shrink-0" />
                                    : <ChevronRight size={12} className="text-gh-text-muted flex-shrink-0" />
                                  }
                                  <span className="text-xs font-mono text-gh-text-primary">{q.number}</span>
                                  {q.subTopic && (
                                    <span className="text-[10px] text-gh-text-muted font-mono truncate">
                                      [{q.subTopic}]
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] font-mono text-gh-text-muted flex-shrink-0 ml-2">
                                  {q.marks} mk{q.marks !== 1 ? 's' : ''}
                                </span>
                              </button>
                              {isQExpanded && (
                                <div className="px-4 pb-3">
                                  <MathText
                                    text={q.text}
                                    className="text-sm text-gh-text-primary leading-relaxed whitespace-pre-line block mb-2"
                                  />
                                  {q.options && q.options.length > 0 && (
                                    <div className="space-y-1 ml-2">
                                      {q.options.map(opt => (
                                        <div key={opt.label} className="flex items-start gap-2 text-sm">
                                          <span className="text-gh-text-muted font-mono font-bold">{opt.label}.</span>
                                          <MathText text={opt.text} className="text-gh-text-secondary" />
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {matchedQuestions.length === 0 && (
          <div className="mb-6 p-4 rounded-md bg-gh-canvas border border-gh-border text-center">
            <p className="text-sm text-gh-text-muted font-mono">No exam questions mapped yet.</p>
            <p className="text-xs text-gh-text-muted mt-1">This skill covers prerequisite knowledge.</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onComplete(node.id)}
            className={`flex-1 px-4 py-2.5 rounded-md font-medium text-sm transition-all font-mono flex items-center justify-center gap-2 ${
              isCompleted
                ? 'bg-gh-successFg/10 text-gh-successFg border border-gh-successFg/30'
                : 'bg-gh-accent-blueBold text-white hover:bg-gh-accent-blue'
            }`}
          >
            {isCompleted ? (
              <>✓ completed</>
            ) : (
              <><Dumbbell size={14} /> start_practice()</>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-md border border-gh-border text-gh-text-secondary hover:text-gh-text-primary hover:border-gh-text-muted transition-all text-sm font-mono"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
