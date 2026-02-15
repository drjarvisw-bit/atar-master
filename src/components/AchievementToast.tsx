import { useEffect, useState } from 'react';
import type { Achievement } from '../lib/achievements';

interface Props {
  achievement: Achievement;
  onDone: () => void;
}

export default function AchievementToast({ achievement, onDone }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className={`fixed top-6 right-6 z-[9999] transition-all duration-400 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl border-2 border-yellow-500/70 bg-gh-surface shadow-lg shadow-yellow-500/20">
        <span className="text-3xl">{achievement.icon}</span>
        <div>
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Achievement Unlocked!</div>
          <div className="text-sm font-semibold text-gh-text-primary">{achievement.title}</div>
          <div className="text-xs text-gh-text-secondary">{achievement.description}</div>
        </div>
      </div>
    </div>
  );
}
