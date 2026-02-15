import { useState, useCallback, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Map, MousePointerClick, Star, TrendingUp, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'atar_onboarding_complete';

interface Props {
  onComplete: () => void;
}

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

export function isOnboardingComplete(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function resetOnboarding() {
  localStorage.removeItem(STORAGE_KEY);
}

// ----- Sample node animation for Step 3 -----

function SampleNodeDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
    ];
    const loop = setTimeout(() => setPhase(0), 4500);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [phase === 0 ? 0 : undefined]);

  // Restart the loop when phase hits 0
  useEffect(() => {
    if (phase === 0) {
      const t = setTimeout(() => setPhase(1), 600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const levels = ['Easy', 'Medium', 'Hard', 'Exam'];
  const colors = ['#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Node circle */}
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500"
          style={{
            background: phase >= 4 ? 'linear-gradient(135deg, #22C55E, #16A34A)' : 'linear-gradient(135deg, #3B82F6, #2563EB)',
            boxShadow: phase >= 4
              ? '0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.2)'
              : '0 0 15px rgba(59,130,246,0.3)',
            transform: phase >= 4 ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <span className="text-white">{phase >= 4 ? 'Done!' : 'Algebra'}</span>
        </div>
        {/* Completion burst */}
        {phase >= 4 && (
          <div className="absolute inset-0 animate-[onboardPing_0.6s_ease-out]">
            <div className="w-16 h-16 rounded-full border-2 border-green-400 opacity-0" />
          </div>
        )}
      </div>

      {/* Level progress bars */}
      <div className="flex gap-2">
        {levels.map((lbl, i) => (
          <div key={lbl} className="flex flex-col items-center gap-1">
            <div
              className="w-12 h-2 rounded-full overflow-hidden bg-gray-700"
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: phase > i ? '100%' : '0%',
                  backgroundColor: colors[i],
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
            <span className="text-[10px] text-gray-400">{lbl}</span>
          </div>
        ))}
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4].map(s => (
          <Star
            key={s}
            size={14}
            className={`transition-all duration-300 ${
              phase >= s ? 'text-yellow-400 fill-yellow-400 scale-110' : 'text-gray-600'
            }`}
            style={{ transitionDelay: `${s * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

// ----- Steps content -----

const STEPS: Step[] = [
  {
    title: 'Your Skill Tree',
    description: 'This is your map of every maths topic from Year 8 all the way to the VCE exam. Each circle is a topic you can master.',
    icon: <Map size={24} className="text-blue-400" />,
    visual: (
      <div className="flex items-center justify-center py-4">
        <svg width="220" height="120" viewBox="0 0 220 120">
          {/* Connections */}
          <line x1="40" y1="60" x2="110" y2="35" stroke="#374151" strokeWidth="2" />
          <line x1="40" y1="60" x2="110" y2="85" stroke="#374151" strokeWidth="2" />
          <line x1="110" y1="35" x2="180" y2="60" stroke="#374151" strokeWidth="2" />
          <line x1="110" y1="85" x2="180" y2="60" stroke="#374151" strokeWidth="2" />
          {/* Nodes */}
          <circle cx="40" cy="60" r="18" fill="#22C55E" className="animate-[onboardPulse_2s_ease-in-out_infinite]" />
          <text x="40" y="64" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Yr 8</text>
          <circle cx="110" cy="35" r="18" fill="#3B82F6" className="animate-[onboardPulse_2s_ease-in-out_0.3s_infinite]" />
          <text x="110" y="39" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Yr 9</text>
          <circle cx="110" cy="85" r="18" fill="#3B82F6" className="animate-[onboardPulse_2s_ease-in-out_0.6s_infinite]" />
          <text x="110" y="89" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Yr 10</text>
          <circle cx="180" cy="60" r="18" fill="#374151" stroke="#4B5563" strokeWidth="2" />
          <text x="180" y="58" textAnchor="middle" fill="#9CA3AF" fontSize="7" fontWeight="bold">Yr 11</text>
          <text x="180" y="68" textAnchor="middle" fill="#6B7280" fontSize="6">locked</text>
        </svg>
      </div>
    ),
  },
  {
    title: 'Tap to Explore',
    description: 'Tap any unlocked node to see what that topic covers. Then hit "Enter" to start practicing questions.',
    icon: <MousePointerClick size={24} className="text-blue-400" />,
    visual: (
      <div className="flex flex-col items-center gap-3 py-4">
        {/* Simulated node tap */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-white text-xs font-bold">Algebra</span>
          </div>
          {/* Tap indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center animate-[onboardBounce_1s_ease-in-out_infinite]">
            <MousePointerClick size={12} className="text-gray-800" />
          </div>
        </div>
        {/* Simulated panel */}
        <div className="w-48 rounded-lg bg-gray-800 border border-gray-700 p-3 animate-[onboardSlideUp_0.5s_ease-out_0.3s_both]">
          <div className="text-xs font-semibold text-white mb-1">Algebra</div>
          <div className="text-[10px] text-gray-400 mb-2">Simplify, expand, factorise linear expressions...</div>
          <div className="w-full py-1.5 bg-blue-600 rounded text-center text-[10px] font-semibold text-white">
            Enter
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '4 Levels Per Topic',
    description: 'Each topic has 4 difficulty levels: Easy, Medium, Hard, and Real Exam questions. Pass 70% to unlock the next level and earn stars!',
    icon: <Star size={24} className="text-yellow-400" />,
    visual: <SampleNodeDemo />,
  },
  {
    title: 'Track Your Progress',
    description: 'Earn XP as you practice, build streaks by practicing daily, and watch your skill tree light up as you conquer each topic!',
    icon: <TrendingUp size={24} className="text-green-400" />,
    visual: (
      <div className="flex flex-col items-center gap-3 py-2">
        {/* XP bar */}
        <div className="w-48">
          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
            <span>Level 3</span>
            <span>240 / 300 XP</span>
          </div>
          <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full animate-[onboardGrow_1.5s_ease-out_0.3s_both]" style={{ width: '80%' }} />
          </div>
        </div>
        {/* Stats row */}
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-green-400">12</div>
            <div className="text-[10px] text-gray-500">Skills Done</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-orange-400">5</div>
            <div className="text-[10px] text-gray-500">Day Streak</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-blue-400">85%</div>
            <div className="text-[10px] text-gray-500">Avg Score</div>
          </div>
        </div>
      </div>
    ),
  },
];

// ----- Main component -----

export default function OnboardingTutorial({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const finish = useCallback(() => {
    setFadingOut(true);
    localStorage.setItem(STORAGE_KEY, 'true');
    setTimeout(() => onComplete(), 400);
  }, [onComplete]);

  const goNext = useCallback(() => {
    if (animating) return;
    if (step >= STEPS.length - 1) {
      finish();
      return;
    }
    setAnimating(true);
    setDirection('next');
    setTimeout(() => {
      setStep(s => s + 1);
      setAnimating(false);
    }, 250);
  }, [step, animating, finish]);

  const goPrev = useCallback(() => {
    if (animating || step <= 0) return;
    setAnimating(true);
    setDirection('prev');
    setTimeout(() => {
      setStep(s => s - 1);
      setAnimating(false);
    }, 250);
  }, [step, animating]);

  const current = STEPS[step];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-400 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Backdrop with spotlight gradient */}
      <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm" />

      {/* Content card */}
      <div className="relative z-10 w-full max-w-sm mx-4">
        <div className="bg-gray-900 border border-gray-700/60 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          {/* Skip button */}
          <div className="flex justify-end p-3 pb-0">
            <button
              onClick={finish}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded-lg hover:bg-gray-800"
            >
              Skip
              <X size={14} />
            </button>
          </div>

          {/* Step content */}
          <div className="px-6 pb-2">
            {/* Icon + Title */}
            <div
              className={`transition-all duration-250 ${
                animating
                  ? direction === 'next' ? 'opacity-0 -translate-x-4' : 'opacity-0 translate-x-4'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                  {current.icon}
                </div>
                <h2 className="text-lg font-bold text-white">{current.title}</h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{current.description}</p>
            </div>

            {/* Visual area */}
            <div
              className={`mt-4 min-h-[140px] flex items-center justify-center transition-all duration-250 ${
                animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {current.visual}
            </div>
          </div>

          {/* Footer: dots + nav */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-800">
            {/* Step dots */}
            <div className="flex gap-2">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step
                      ? 'w-6 bg-blue-500'
                      : i < step
                        ? 'w-2 bg-blue-500/40'
                        : 'w-2 bg-gray-700'
                  }`}
                />
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex gap-2">
              {step > 0 && (
                <button
                  onClick={goPrev}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              <button
                onClick={goNext}
                className="h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                {step === STEPS.length - 1 ? 'Get Started' : 'Next'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----- Help button (for replaying) -----

export function OnboardingHelpButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
      title="Replay tutorial"
    >
      <HelpCircle size={16} />
    </button>
  );
}
