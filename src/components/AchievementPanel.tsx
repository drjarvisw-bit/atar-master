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
    <div className="bg-white border border-black/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Achievements</h2>
        <span className="text-sm text-black/40">{count}/{ACHIEVEMENTS.length}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-black/[0.06] rounded-full overflow-hidden mb-5">
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
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-black/8 bg-black/[0.02] opacity-50 grayscale'
              }`}
              title={ach.description}
            >
              <span className="text-2xl mb-1">{ach.icon}</span>
              <span className="text-xs font-medium text-black leading-tight">{ach.title}</span>
              {!done && (
                <Lock size={12} className="absolute top-1.5 right-1.5 text-black/25" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
