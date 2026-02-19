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
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl border-2 border-yellow-300 bg-white shadow-lg shadow-yellow-500/10">
        <span className="text-3xl">{achievement.icon}</span>
        <div>
          <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider">Achievement Unlocked!</div>
          <div className="text-sm font-semibold text-black">{achievement.title}</div>
          <div className="text-xs text-black/45">{achievement.description}</div>
        </div>
      </div>
    </div>
  );
}
