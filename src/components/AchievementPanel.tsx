import { useMemo } from 'react';
import { Lock } from 'lucide-react';
import { ACHIEVEMENTS, getUnlockedAchievements } from '../lib/achievements';

export default function AchievementPanel() {
  const unlocked = useMemo(() => {
    const list = getUnlockedAchievements();
    return new Set(list.map(a => a.id));
  }, []);

  const count = unlocked.size;

  return (
    <div className="bg-gh-surface border border-gh-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">🏆 Achievements</h2>
        <span className="text-sm text-gh-text-secondary">{count}/{ACHIEVEMENTS.length}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gh-canvas rounded-full overflow-hidden mb-5">
        <div
          className="h-full rounded-full bg-yellow-500 transition-all duration-500"
          style={{ width: `${(count / ACHIEVEMENTS.length) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {ACHIEVEMENTS.map(ach => {
          const done = unlocked.has(ach.id);
          return (
            <div
              key={ach.id}
              className={`relative flex flex-col items-center text-center p-3 rounded-lg border transition ${
                done
                  ? 'border-yellow-500/50 bg-yellow-500/10'
                  : 'border-gh-border bg-gh-canvas opacity-50 grayscale'
              }`}
              title={ach.description}
            >
              <span className="text-2xl mb-1">{ach.icon}</span>
              <span className="text-xs font-medium text-gh-text-primary leading-tight">{ach.title}</span>
              {!done && (
                <Lock size={12} className="absolute top-1.5 right-1.5 text-gh-text-secondary" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
