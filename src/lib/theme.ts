export type ThemeId = 'midnight' | 'aurora' | 'slate';

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  colors: [string, string, string]; // preview swatch colors
}

export const THEMES: ThemeMeta[] = [
  { id: 'midnight', label: 'Midnight', colors: ['#08090F', '#0C0E18', '#3b82f6'] },
  { id: 'aurora',   label: 'Aurora',   colors: ['#0F0B2E', '#1A0B3E', '#c084fc'] },
  { id: 'slate',    label: 'Slate',    colors: ['#111318', '#1A1D24', '#3b82f6'] },
];

const STORAGE_KEY = 'atar_theme';

export function getTheme(): ThemeId {
  if (typeof window === 'undefined') return 'midnight';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'midnight' || stored === 'aurora' || stored === 'slate') return stored;
  return 'midnight';
}

export function setTheme(id: ThemeId): void {
  localStorage.setItem(STORAGE_KEY, id);
  document.documentElement.dataset.theme = id;
}

/** Call once on app init */
export function initTheme(): void {
  setTheme(getTheme());
}
