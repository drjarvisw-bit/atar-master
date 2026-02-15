import { useState, useCallback } from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { ALL_NODES } from '../data/skillTreeData';

const YEAR_LEVELS = [
  { label: 'Year 8', tier: 0, description: 'Foundation — Numbers, Algebra, Statistics & Probability', color: '#3B82F6' },
  { label: 'Year 9', tier: 1, description: 'Building blocks — Index laws, Binomials, Venn diagrams', color: '#6366F1' },
  { label: 'Year 10', tier: 2, description: 'Advancing — Quadratics, Exponentials, Conditional probability', color: '#8B5CF6' },
  { label: 'Year 11', tier: 3, description: 'Methods Units 1 & 2 — Trig, Calculus intro, Log functions', color: '#A855F7' },
  { label: 'Year 12', tier: 4, description: 'Methods Units 3 & 4 — Full Calculus, Probability distributions', color: '#D946EF' },
] as const;

const STORAGE_KEY = 'atar_year_level';

interface Props {
  onComplete: (yearLevel: number, unlockedNodeIds: string[]) => void;
}

export function getStoredYearLevel(): number | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? parseInt(v, 10) : null;
  } catch {
    return null;
  }
}

function getNodesUpToTier(maxTier: number): string[] {
  return ALL_NODES
    .filter(n => n.tier <= maxTier)
    .map(n => n.id);
}

export default function YearLevelSelector({ onComplete }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleSelect = useCallback((tier: number) => {
    setSelected(tier);
  }, []);

  const handleConfirm = useCallback(() => {
    if (selected === null) return;
    setAnimatingOut(true);
    localStorage.setItem(STORAGE_KEY, String(selected));
    const nodeIds = getNodesUpToTier(selected);
    setTimeout(() => {
      onComplete(selected, nodeIds);
    }, 400);
  }, [selected, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-950 transition-opacity duration-400 ${animatingOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-lg mx-4">
        {/* Header */}
        <div className="text-center mb-8 animate-[yearFadeDown_0.5s_ease-out]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-4">
            <GraduationCap size={32} className="text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">What year level are you in?</h1>
          <p className="text-gray-400 text-sm">We'll unlock all topics up to your level so you can jump right in.</p>
        </div>

        {/* Year cards */}
        <div className="space-y-3">
          {YEAR_LEVELS.map((y, i) => {
            const isSelected = selected === y.tier;
            return (
              <button
                key={y.tier}
                onClick={() => handleSelect(y.tier)}
                className="w-full text-left transition-all duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`
                    relative rounded-xl border p-4 transition-all duration-200
                    animate-[yearSlideUp_0.4s_ease-out_both]
                    ${isSelected
                      ? 'border-blue-500 bg-blue-600/15 shadow-lg shadow-blue-500/10'
                      : 'border-gray-700/60 bg-gray-800/40 hover:border-gray-600 hover:bg-gray-800/70'}
                  `}
                  style={{ animationDelay: `${i * 80 + 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                          isSelected ? 'scale-110' : ''
                        }`}
                        style={{
                          backgroundColor: isSelected ? y.color + '30' : y.color + '15',
                          color: y.color,
                          borderWidth: '1px',
                          borderColor: isSelected ? y.color + '60' : y.color + '30',
                        }}
                      >
                        {y.label.replace('Year ', '')}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{y.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{y.description}</div>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                        isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-600'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Confirm button */}
        <div className="mt-6 animate-[yearFadeUp_0.5s_ease-out_0.5s_both]">
          <button
            onClick={handleConfirm}
            disabled={selected === null}
            className={`
              w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2
              transition-all duration-200
              ${selected !== null
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 cursor-pointer'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
            `}
          >
            Let's go
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
