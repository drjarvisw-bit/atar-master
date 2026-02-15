import { useMemo, useEffect, useState } from 'react';
import { X, ArrowRight, Star, Zap, BookOpen } from 'lucide-react';
import { ALL_NODES } from '../data/skillTreeData';
import { getNodeQuestionCounts } from '../data/questionMatcher';
import { getTrainingForNode } from '../data/training';
import { SKILL_TOPIC_COLORS, type Topic } from '../types';
import type { UserProgress } from '../lib/progress';
import { getNodeProgress } from '../lib/progress';

interface Props {
  nodeId: string;
  progress: UserProgress;
  onClose: () => void;
  onEnter: (nodeId: string) => void;
}

export default function SkillNodePanel({ nodeId, progress, onClose, onEnter }: Props) {
  const node = useMemo(() => ALL_NODES.find(n => n.id === nodeId), [nodeId]);
  const np = getNodeProgress(progress, nodeId);
  const examCount = useMemo(() => getNodeQuestionCounts()[nodeId] ?? 0, [nodeId]);
  const trainingCount = useMemo(() => getTrainingForNode(nodeId).length, [nodeId]);
  const qCount = trainingCount + examCount;
  const topicColor = node ? SKILL_TOPIC_COLORS[node.topic as Topic] : null;
  const [isVisible, setIsVisible] = useState(false);

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, [nodeId]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  if (!node) return null;

  const progressPct = (np.levelsCompleted.length / 4) * 100;
  const primaryColor = topicColor?.primary ?? '#3B82F6';

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Panel: bottom sheet on mobile, right sidebar on desktop */}
      <div
        className={`
          fixed z-50 bg-gray-900 border-gray-700 shadow-2xl
          transition-all duration-300 ease-out

          /* Mobile: bottom sheet */
          inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-auto
          rounded-t-2xl sm:rounded-t-none

          /* Desktop: right sidebar */
          sm:right-0 sm:top-0 sm:h-full sm:w-96
          sm:rounded-l-2xl sm:border-l

          ${isVisible
            ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0'
            : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
          }
        `}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-600" />
        </div>

        <div className="p-5 sm:p-6 sm:h-full sm:flex sm:flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}30, ${primaryColor}10)`,
                  border: `1px solid ${primaryColor}40`,
                }}
              >
                {node.title.includes('Exam') ? '📝' : '📐'}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{node.title}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span className="text-xs text-gray-500">{node.topic}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-5 leading-relaxed">{node.description}</p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-gray-800/80 rounded-xl p-3 text-center border border-gray-700/50">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star size={14} className="text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-white">{np.score}%</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Score</div>
            </div>
            <div className="bg-gray-800/80 rounded-xl p-3 text-center border border-gray-700/50">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap size={14} className="text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">{np.levelsCompleted.length}/4</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Levels</div>
            </div>
            <div className="bg-gray-800/80 rounded-xl p-3 text-center border border-gray-700/50">
              <div className="flex items-center justify-center gap-1 mb-1">
                <BookOpen size={14} className="text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">{qCount}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Questions</div>
            </div>
          </div>

          {/* Progress bar with level indicators */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Progress</span>
              <span className="text-xs font-bold" style={{ color: primaryColor }}>{Math.round(progressPct)}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-800 overflow-hidden relative">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progressPct}%`,
                  background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}CC)`,
                  boxShadow: `0 0 8px ${primaryColor}40`,
                }}
              />
            </div>
            {/* Level dots */}
            <div className="flex justify-between mt-2 px-1">
              {['Easy', 'Medium', 'Hard', 'Exam'].map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      np.levelsCompleted.includes(i + 1)
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-600 bg-gray-800'
                    }`}
                  />
                  <span className="text-[9px] text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer on desktop */}
          <div className="hidden sm:flex-1 sm:block" />

          {/* CTA Button */}
          <button
            onClick={() => onEnter(nodeId)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:shadow-lg active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}CC)`,
              boxShadow: `0 4px 20px ${primaryColor}30`,
            }}
          >
            Enter Topic <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
