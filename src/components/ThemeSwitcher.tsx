import { useState } from 'react';
import { Palette } from 'lucide-react';
import { THEMES, getTheme, setTheme, type ThemeId } from '../lib/theme';

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<ThemeId>(getTheme);
  const [open, setOpen] = useState(false);

  const apply = (id: ThemeId) => {
    setTheme(id);
    setCurrent(id);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-white/10 transition text-gh-text-secondary hover:text-gh-text-primary"
        title="Theme"
      >
        <Palette size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-gh-surface border border-gh-border rounded-xl shadow-lg p-2 z-50">
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => apply(t.id)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition ${
                current === t.id
                  ? 'bg-white/10 text-white'
                  : 'text-gh-text-secondary hover:text-gh-text-primary hover:bg-white/5'
              }`}
            >
              <div className="flex -space-x-1">
                {t.colors.map((c, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full border-2 ${
                      current === t.id ? 'border-white/40' : 'border-gh-border'
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>{t.label}</span>
              {current === t.id && <span className="ml-auto text-blue-400">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
