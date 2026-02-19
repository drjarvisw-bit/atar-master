import { useState, useEffect, useRef } from 'react';
import { Flame, Trophy, Gem } from 'lucide-react';
import { getStreakData, type StreakInfo } from '../lib/streak';

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getWeekDayLabels(): string[] {
  const labels: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(DAY_LABELS[d.getDay() === 0 ? 6 : d.getDay() - 1]);
  }
  return labels;
}

function streakColor(n: number): string {
  if (n >= 30) return 'text-cyan-500';
  if (n >= 7) return 'text-amber-500';
  return 'text-orange-500';
}

function streakGlow(n: number): string {
  if (n >= 30) return 'drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]';
  if (n >= 7) return 'drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]';
  return '';
}

export default function StreakBadge() {
  const [data, setData] = useState<StreakInfo | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(getStreakData());
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = () => setData(getStreakData());
    window.addEventListener('streak-updated', handler);
    return () => window.removeEventListener('streak-updated', handler);
  }, []);

  if (!data) return null;

  const { currentStreak, longestStreak, weekHistory } = data;
  const labels = getWeekDayLabels();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => { setOpen(!open); setData(getStreakData()); }}
        className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-black/[0.04] transition group"
        title={`${currentStreak} day streak`}
      >
        <Flame className={`h-4 w-4 transition-transform group-hover:scale-110 ${streakColor(currentStreak)} ${streakGlow(currentStreak)} ${currentStreak > 0 ? 'animate-pulse' : ''}`} />
        <span className={`text-sm font-bold ${streakColor(currentStreak)}`}>
          {currentStreak}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-black/10 rounded-xl shadow-lg p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="mb-1 flex justify-center">
              <Flame className={`h-8 w-8 ${streakColor(currentStreak)} ${streakGlow(currentStreak)}`} />
            </div>
            <div className={`text-2xl font-bold ${streakColor(currentStreak)}`}>
              {currentStreak} Day{currentStreak !== 1 ? 's' : ''}
            </div>
            <div className="text-xs text-black/40">Current Streak</div>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm mb-3 px-2">
            <div className="text-center">
              <div className="font-bold text-black">{longestStreak}</div>
              <div className="text-[10px] text-black/40">Longest</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-black">{data.activeDates.length}</div>
              <div className="text-[10px] text-black/40">Total Days</div>
            </div>
          </div>

          {/* Week calendar */}
          <div className="border-t border-black/8 pt-3">
            <div className="text-xs text-black/40 mb-2">This Week</div>
            <div className="flex justify-between gap-1">
              {weekHistory.map((active, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                      active
                        ? 'bg-green-50 text-green-600 ring-1 ring-green-200'
                        : 'bg-black/[0.03] text-black/25'
                    }`}
                  >
                    {active ? '✓' : '·'}
                  </div>
                  <span className="text-[9px] text-black/35">{labels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone hints */}
          {currentStreak > 0 && currentStreak < 7 && (
            <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-black/40">
              <Trophy className="h-3 w-3" /> {7 - currentStreak} more day{7 - currentStreak !== 1 ? 's' : ''} to gold streak.
            </div>
          )}
          {currentStreak >= 7 && currentStreak < 30 && (
            <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-amber-600">
              <Gem className="h-3 w-3" /> {30 - currentStreak} more day{30 - currentStreak !== 1 ? 's' : ''} to diamond.
            </div>
          )}
          {currentStreak >= 30 && (
            <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-cyan-600">
              <Gem className="h-3 w-3" /> Diamond streak. You're unstoppable.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
