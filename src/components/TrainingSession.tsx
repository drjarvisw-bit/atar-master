import { useState, useMemo, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Check, X, RotateCcw, Trophy, Lightbulb, ChevronRight } from 'lucide-react';
import { getTrainingByLevel, type TrainingQuestion } from '../data/training';
import { getQuestionsForNode } from '../data/questionMatcher';
import MathText from './MathText';

interface Props {
  nodeId: string;
  level: number;
  onComplete: (nodeId: string, level: number, score: number, total: number) => void;
  onBack: () => void;
}

type Phase = 'quiz' | 'summary';

export default function TrainingSession({ nodeId, level, onComplete, onBack }: Props) {
  const questions = useMemo(() => {
    if (level === 5) {
      // Real exam questions for level 5
      return getQuestionsForNode(nodeId).map(mq => ({
        id: mq.question.id,
        text: mq.question.text,
        marks: mq.question.marks,
        hints: mq.question.markingGuide || [],
        answer: mq.question.answer || '',
        isMultipleChoice: !!(mq.question as any).options?.length,
        options: (mq.question as any).options || [],
        examTitle: mq.examTitle,
      }));
    }
    return getTrainingByLevel(nodeId, level as 1 | 2 | 3 | 4);
  }, [nodeId, level]);

  const [phase, setPhase] = useState<Phase>('quiz');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [results, setResults] = useState<Record<number, boolean>>({});

  const current = questions[currentIdx] as TrainingQuestion | undefined;
  const total = questions.length;
  const correctCount = Object.values(results).filter(Boolean).length;

  const handleSelect = useCallback((label: string) => {
    if (isAnswered) return;
    setSelectedOption(label);
  }, [isAnswered]);

  const handleSubmit = useCallback(() => {
    if (!current || !selectedOption) return;
    const correct = current.options?.find(o => o.label === selectedOption)?.correct ?? false;
    setResults(prev => ({ ...prev, [currentIdx]: correct }));
    setIsAnswered(true);
  }, [current, selectedOption, currentIdx]);

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= total) {
      setPhase('summary');
      return;
    }
    setCurrentIdx(prev => prev + 1);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
  }, [currentIdx, total]);

  const handleFinish = useCallback(() => {
    onComplete(nodeId, level, correctCount, total);
  }, [nodeId, level, correctCount, total, onComplete]);

  if (!current && phase === 'quiz') {
    return (
      <div className="min-h-full bg-gray-900 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-400 mb-4">No questions available for this level yet.</p>
          <button onClick={onBack} className="px-4 py-2 bg-gray-700 text-white rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  // Summary phase
  if (phase === 'summary') {
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = pct >= 70;
    return (
      <div className="min-h-full bg-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center">
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
            passed ? 'bg-green-900/50' : 'bg-orange-900/50'
          }`}>
            {passed ? <Trophy size={36} className="text-green-400" /> : <RotateCcw size={36} className="text-orange-400" />}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {passed ? 'Level Complete! 🎉' : 'Keep Practicing'}
          </h2>
          <p className="text-gray-400 mb-6">
            You got <span className="text-white font-bold">{correctCount}/{total}</span> correct ({pct}%)
            {passed ? '' : ' — need 70% to pass'}
          </p>

          {/* Score bar */}
          <div className="h-3 bg-gray-900 rounded-full mb-6 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${passed ? 'bg-green-500' : 'bg-orange-500'}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition"
            >
              Back to Topic
            </button>
            <button
              onClick={handleFinish}
              className={`flex-1 px-4 py-3 font-medium rounded-lg transition text-white ${
                passed ? 'bg-green-600 hover:bg-green-500' : 'bg-orange-600 hover:bg-orange-500'
              }`}
            >
              {passed ? 'Continue →' : 'Try Again'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz phase
  const isCorrect = results[currentIdx];
  const correctOption = current!.options?.find(o => o.correct);

  return (
    <div className="min-h-full bg-gray-900 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition">
          <ArrowLeft size={14} /> Exit
        </button>
        <div className="text-sm text-gray-400">
          <span className="text-white font-bold">{currentIdx + 1}</span> / {total}
        </div>
        <div className="text-sm">
          <span className="text-green-400 font-bold">{correctCount}</span>
          <span className="text-gray-600"> correct</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-gray-800 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentIdx + (isAnswered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="text-lg text-white leading-relaxed">
            <MathText text={current!.text} />
          </div>
          {showHint && current!.hints && current!.hints.length > 0 && (
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
              <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-medium mb-1">
                <Lightbulb size={12} /> Hint
              </div>
              <div className="text-sm text-yellow-200/80">
                <MathText text={current!.hints[0]} />
              </div>
            </div>
          )}
        </div>

        {/* MC Options */}
        {current!.options && current!.options.length > 0 && (
          <div className="space-y-3 mb-6">
            {current!.options.map((opt: { label: string; text: string; correct: boolean }) => {
              const isSelected = selectedOption === opt.label;
              let borderColor = 'border-gray-700';
              let bgColor = 'bg-gray-800';
              let textColor = 'text-gray-300';

              if (isAnswered) {
                if (opt.correct) {
                  borderColor = 'border-green-500';
                  bgColor = 'bg-green-900/30';
                  textColor = 'text-green-300';
                } else if (isSelected && !opt.correct) {
                  borderColor = 'border-red-500';
                  bgColor = 'bg-red-900/30';
                  textColor = 'text-red-300';
                }
              } else if (isSelected) {
                borderColor = 'border-blue-500';
                bgColor = 'bg-blue-900/20';
                textColor = 'text-blue-300';
              }

              return (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.label)}
                  disabled={isAnswered}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${borderColor} ${bgColor} ${
                    !isAnswered ? 'hover:border-blue-600/50 cursor-pointer' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
                    isAnswered && opt.correct ? 'border-green-500 bg-green-500 text-white' :
                    isAnswered && isSelected && !opt.correct ? 'border-red-500 bg-red-500 text-white' :
                    isSelected ? 'border-blue-500 bg-blue-500 text-white' :
                    'border-gray-600 text-gray-500'
                  }`}>
                    {isAnswered && opt.correct ? <Check size={14} /> :
                     isAnswered && isSelected && !opt.correct ? <X size={14} /> :
                     opt.label}
                  </div>
                  <span className={`text-left ${textColor}`}>
                    <MathText text={opt.text} />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Answer explanation (after answering) */}
        {isAnswered && current!.answer && (
          <div className={`p-4 rounded-xl border mb-6 ${
            isCorrect ? 'bg-green-900/20 border-green-800/30' : 'bg-red-900/20 border-red-800/30'
          }`}>
            <div className={`text-sm font-medium mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? '✅ Correct!' : `❌ Incorrect — the answer is ${correctOption?.label}`}
            </div>
            <div className="text-sm text-gray-300">
              <MathText text={current!.answer} />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {!isAnswered && !showHint && current!.hints && current!.hints.length > 0 && (
            <button
              onClick={() => setShowHint(true)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 hover:border-yellow-700 text-gray-400 hover:text-yellow-400 rounded-xl transition flex items-center gap-2"
            >
              <Lightbulb size={16} /> Hint
            </button>
          )}

          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-xl transition flex items-center justify-center gap-2"
            >
              Submit <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition flex items-center justify-center gap-2"
            >
              {currentIdx + 1 >= total ? 'See Results' : 'Next'} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
