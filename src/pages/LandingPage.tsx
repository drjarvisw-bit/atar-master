import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Check, X as XIcon, Target, FileText, BarChart3, Download, UserPlus, BookOpen, TrendingUp, ChevronDown, GraduationCap, Sparkles, Award } from 'lucide-react';

/* ───────────── optimized mouse tracker hook ───────────── */
function useMousePosition() {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (elementRef.current) {
        elementRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.08), transparent 40%)`;
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return elementRef;
}

/* ───────────── scroll position hook ───────────── */
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrollY;
}

/* ───────────── skill tree animation hook ───────────── */
function useSkillTreeAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.2 });
    io.observe(el);
    const t = setTimeout(() => setStarted(true), 3000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return { ref, started };
}

/* ───────────── Hero Background Skill Tree ───────────── */
function HeroSkillTreeBg({ scrollY }: { scrollY: number }) {
  const nodes = useMemo(() => {
    const result: { x: number; y: number; size: number; opacity: number; delay: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const phase = i * 0.7;
      result.push({
        x: 50 + Math.sin(phase) * 25,
        y: 15 + i * 6,
        size: 6 + Math.random() * 4,
        opacity: 0.05 + Math.random() * 0.08,
        delay: i * 0.3,
      });
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        {nodes.map((n, i) => (
          <g key={i}>
            {i > 0 && (
              <line
                x1={`${nodes[i-1].x}%`} y1={`${nodes[i-1].y}%`}
                x2={`${n.x}%`} y2={`${n.y}%`}
                stroke="rgba(59,130,246,0.08)"
                strokeWidth={1}
              />
            )}
            <circle
              cx={`${n.x}%`} cy={`${n.y}%`} r={n.size}
              fill={`rgba(59,130,246,${n.opacity})`}
              stroke={`rgba(96,165,250,${n.opacity * 0.6})`}
              strokeWidth={1}
            >
              <animate
                attributeName="r"
                values={`${n.size};${n.size * 1.3};${n.size}`}
                dur={`${3 + n.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ───────────── Skill Tree Section ───────────── */
function SkillTreeShowcase() {
  const { ref, started } = useSkillTreeAnimation();

  const columns = useMemo(() => [
    { year: 'Year 8', nodes: ['Number', 'Algebra'] },
    { year: 'Year 9', nodes: ['Number', 'Algebra'] },
    { year: 'Year 10', nodes: ['Algebra', 'Probability'] },
    { year: 'Year 11', nodes: ['Trig', 'Calculus'] },
    { year: 'Year 12', nodes: ['Differentiation', 'Integration'] },
    { year: 'VCE', nodes: ['Exam Ready ✓'] },
  ], []);

  const delayPerCol = 0.6;

  const taglineStyles = useMemo(() => ({
    opacity: started ? 1 : 0,
    transform: started ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.8s ease-out ${columns.length * delayPerCol}s, transform 0.8s ease-out ${columns.length * delayPerCol}s`,
  }), [started, columns.length]);

  const svgW = 800, svgH = 320;
  const colSpacing = svgW / (columns.length + 1);
  const nodeR = 20;

  const nodePositions: { x: number; y: number; label: string; colIdx: number; isVCE: boolean }[] = [];
  columns.forEach((col, ci) => {
    const x = colSpacing * (ci + 1);
    if (col.nodes.length === 1) {
      nodePositions.push({ x, y: svgH / 2, label: col.nodes[0], colIdx: ci, isVCE: ci === 5 });
    } else {
      nodePositions.push({ x, y: svgH / 2 - 45, label: col.nodes[0], colIdx: ci, isVCE: false });
      nodePositions.push({ x, y: svgH / 2 + 45, label: col.nodes[1], colIdx: ci, isVCE: false });
    }
  });

  const connections: { x1: number; y1: number; x2: number; y2: number; colIdx: number }[] = [];
  for (let ci = 0; ci < columns.length - 1; ci++) {
    const fromNodes = nodePositions.filter(n => n.colIdx === ci);
    const toNodes = nodePositions.filter(n => n.colIdx === ci + 1);
    fromNodes.forEach(fn => {
      toNodes.forEach(tn => {
        connections.push({ x1: fn.x + nodeR, y1: fn.y, x2: tn.x - nodeR, y2: tn.y, colIdx: ci });
      });
    });
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <style>{`
        @keyframes skillNodePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes skillLineDraw { to { stroke-dashoffset: 0; } }
      `}</style>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Your path to exam mastery</h2>
        <p className="text-gray-400 mb-8 sm:mb-12">From fundamentals to VCE-ready, one skill at a time.</p>

        <div className="flex justify-center overflow-x-auto">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-w-[800px] min-w-[400px]" style={{ overflow: 'visible' }}>
            <defs>
              <filter id="blueGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              <filter id="goldGlow"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>

            {connections.map((c, i) => {
              const len = Math.sqrt((c.x2 - c.x1) ** 2 + (c.y2 - c.y1) ** 2);
              return (
                <line key={`line-${i}`} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                  stroke={started ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={2} strokeDasharray={len} strokeDashoffset={started ? undefined : len}
                  style={started ? { animation: `skillLineDraw 0.5s ease-out ${c.colIdx * delayPerCol + 0.3}s forwards`, strokeDashoffset: len } : { strokeDashoffset: len }}
                />
              );
            })}

            {nodePositions.map((n, i) => {
              const delay = n.colIdx * delayPerCol;
              const fillActive = n.isVCE ? '#f59e0b' : '#3b82f6';
              const strokeActive = n.isVCE ? '#fbbf24' : '#60a5fa';
              return (
                <g key={`node-${i}`}>
                  <circle cx={n.x} cy={n.y} r={nodeR} fill={fillActive} stroke={strokeActive} strokeWidth={2}
                    filter={n.isVCE ? 'url(#goldGlow)' : 'url(#blueGlow)'}
                    style={{ opacity: started ? 1 : 0, transition: `opacity 0.4s ease-out ${delay}s` }}
                  />
                  <text x={n.x} y={n.y + nodeR + 18} textAnchor="middle"
                    fill={started ? (n.isVCE ? '#fbbf24' : '#93c5fd') : 'rgba(255,255,255,0.25)'}
                    fontSize={11} fontWeight={600}
                    style={{ transition: `fill 0.4s ease-out ${delay}s, opacity 0.4s ease-out ${delay}s`, opacity: started ? 1 : 0.3 }}
                  >{n.label}</text>
                  {nodePositions.findIndex(nd => nd.colIdx === n.colIdx) === i && (
                    <text x={n.x} y={30} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={12} fontWeight={500}>{columns[n.colIdx].year}</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <p className="text-gray-300 text-base sm:text-lg mt-8 sm:mt-10 font-medium" style={taglineStyles}>
          100% of the VCE Methods curriculum. Every topic. Every year.
        </p>
      </div>
    </section>
  );
}

/* ───────────── animated count-up hook ───────────── */
function useCountUp(end: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { threshold: 0.1 });
    io.observe(el);
    const t = setTimeout(start, 1500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [start]);
  return { ref, value };
}

/* ───────────── fade-in on scroll ───────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    io.observe(el);
    const t = setTimeout(() => setVisible(true), 2000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return { ref, visible };
}

/* ───────────── stat item ───────────── */
function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-widest">{label}</div>
    </div>
  );
}

/* ───────────── FAQ Item ───────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
export default function LandingPage() {
  const features = useFadeIn();
  const steps = useFadeIn();
  const pricing = useFadeIn();
  const audience = useFadeIn();
  const credibility = useFadeIn();
  const faq = useFadeIn();
  const mouseGradientRef = useMousePosition();
  const scrollY = useScrollY();

  const parallaxStyles = useMemo(() => ({
    orb1: { transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px)) scale(1)` },
    orb2: { transform: `translate(-50%, calc(-50% + ${scrollY * -0.1}px)) scale(1)` },
  }), [scrollY]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      <div ref={mouseGradientRef} className="pointer-events-none fixed inset-0 z-[1]" />

      <style>{`
        @keyframes orbFloat { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.15); } }
        @keyframes orbFloat2 { 0%, 100% { transform: translate(-50%, -50%) scale(1.1); } 50% { transform: translate(-50%, -50%) scale(0.95); } }
        .orb1 { animation: orbFloat 8s ease-in-out infinite; }
        .orb2 { animation: orbFloat2 10s ease-in-out infinite; }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <HeroSkillTreeBg scrollY={scrollY} />
        <div className="orb1 pointer-events-none absolute top-1/2 left-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-blue-600/20 blur-[120px]" style={parallaxStyles.orb1} />
        <div className="orb2 pointer-events-none absolute top-[40%] left-[55%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-cyan-500/15 blur-[100px]" style={parallaxStyles.orb2} />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs sm:text-sm text-gray-300 mb-8 sm:mb-10">
            <BookOpen size={14} /> 2016–2025 VCE Methods Exams Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 sm:mb-8">
            Master VCE Methods.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Score Higher.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            2,270+ practice questions. 10 years of past exams. Smart skill tracking.
            Everything you need to ace Mathematical Methods.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/skill-tree"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >
              Start Practicing Now →
            </Link>
            <Link
              to="/skill-tree"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-medium text-lg transition-all backdrop-blur-sm text-center"
            >
              View Skill Tree
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          <StatItem end={2270} suffix="+" label="Practice Questions" />
          <StatItem end={20} suffix="" label="Past Exam Papers" />
          <StatItem end={10} suffix=" Years" label="VCE Coverage" />
          <StatItem end={31} suffix="" label="Skill Tree Nodes" />
        </div>
      </section>

      {/* ─── Who Is This For ─── */}
      <section ref={audience.ref} className={`py-20 sm:py-28 transition-all duration-700 ${audience.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Who is ATAR Master for?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Whether you're just starting algebra or cramming for the VCE exam, we've got you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <span className="text-2xl">📚</span>, title: 'Year 8–9 Students', desc: 'Build strong foundations in number, algebra, stats and probability.', color: '#8B5CF6' },
              { icon: <span className="text-2xl">📏</span>, title: 'Year 10 Students', desc: 'Bridge the gap to senior maths with challenging practice.', color: '#A855F7' },
              { icon: <span className="text-2xl">🧮</span>, title: 'Year 11 Students', desc: 'Master Units 1&2 — functions, calculus, probability and more.', color: '#3B82F6' },
              { icon: <span className="text-2xl">🎯</span>, title: 'Year 12 / VCE', desc: 'Exam-ready practice with real past papers and marking guides.', color: '#F59E0B' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skill Tree Showcase ─── */}
      <SkillTreeShowcase />

      {/* ─── Credibility / Social Proof ─── */}
      <section ref={credibility.ref} className={`py-20 sm:py-28 border-y border-white/5 bg-white/[0.01] transition-all duration-700 ${credibility.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-400 mb-6">
            <Award size={16} /> Trusted Data Source
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Built on 10 years of VCAA exam data</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Every question sourced from real Victorian Certificate of Education examinations. Study with the material that matters.
          </p>

          {/* Exam year badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {Array.from({ length: 10 }, (_, i) => 2016 + i).map(year => (
              <div
                key={year}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm font-mono font-bold text-gray-300 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
              >
                {year}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <FileText size={20} className="text-blue-400" />
              <span className="text-2xl font-bold">20</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Exam Papers</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Sparkles size={20} className="text-yellow-400" />
              <span className="text-2xl font-bold">100%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Curriculum Coverage</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <GraduationCap size={20} className="text-green-400" />
              <span className="text-2xl font-bold">VCAA</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Official Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section ref={features.ref} className={`mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-28 transition-all duration-700 ${features.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Powerful tools designed to take you from confused to confident.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Target size={28} />, title: 'Skill Tree', desc: 'Visual learning path from Year 8 to VCE Exam. See exactly where your gaps are.' },
            { icon: <FileText size={28} />, title: 'Past Exam Practice', desc: '10 years of real VCAA exams with detailed marking guides and solutions.' },
            { icon: <BarChart3 size={28} />, title: 'Progress Tracking', desc: 'Track your mastery across every topic. Know when you\'re exam-ready.' },
            { icon: <Download size={28} />, title: 'PDF Study Guides', desc: 'Download combined question + marking guide PDFs. Study offline.' },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 sm:p-8 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300">
              <div className="mb-4 sm:mb-5 text-blue-400 group-hover:text-cyan-400 transition-colors">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section ref={steps.ref} className={`border-y border-white/5 bg-white/[0.01] transition-all duration-700 ${steps.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mx-auto max-w-5xl px-5 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-400">Three steps to exam mastery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { icon: <UserPlus size={24} />, title: 'Sign up for free', desc: 'Create your account in seconds. No credit card required.' },
              { icon: <BookOpen size={24} />, title: 'Practice by topic or exam', desc: 'Choose from the skill tree or dive into real past papers.' },
              { icon: <TrendingUp size={24} />, title: 'Track, improve, ace it', desc: 'Monitor your progress, fill gaps, and walk into the exam confident.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/20 text-blue-400 mb-6">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section ref={pricing.ref} className={`mx-auto max-w-5xl px-5 sm:px-6 py-20 sm:py-28 transition-all duration-700 ${pricing.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
          <p className="text-gray-400">Start free. Upgrade when you're ready.</p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Free */}
          <div className="rounded-2xl p-6 sm:p-8 border border-white/[0.06] bg-white/[0.02]">
            <h3 className="text-xl font-bold mb-1">Free</h3>
            <p className="text-gray-500 text-sm mb-5">Get started at no cost</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-gray-500 text-sm">forever</span>
            </div>
            <Link to="/skill-tree" className="block w-full text-center py-3 rounded-xl border border-white/10 hover:border-white/25 text-gray-300 hover:text-white font-semibold transition-all">
              Start Practicing Now
            </Link>
            <ul className="mt-6 space-y-3">
              {['Basic skill tree access', '3 free exam papers', 'Progress tracking'].map(t => (
                <li key={t} className="flex items-center gap-3 text-sm text-gray-400"><Check size={15} className="text-green-500 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl p-6 sm:p-8 border border-blue-500/30 bg-gradient-to-b from-blue-600/[0.06] to-transparent">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-xs font-bold tracking-wide">MOST POPULAR</div>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-gray-500 text-sm mb-5">Everything to ace Methods</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">$9.99</span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
            <Link to="/pricing" className="block w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Start Pro Trial
            </Link>
            <ul className="mt-6 space-y-3">
              {[
                'All 10 years of exams (2016–2025)',
                'Full skill tree with unlocks',
                'Unlimited practice questions',
                'PDF study guide downloads',
                'Priority new features',
              ].map(t => (
                <li key={t} className="flex items-center gap-3 text-sm text-gray-300"><Check size={15} className="text-green-500 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-6 text-gray-300">Feature comparison</h3>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] text-sm font-semibold border-b border-white/5">
              <div className="px-4 sm:px-6 py-3 text-gray-400">Feature</div>
              <div className="px-4 sm:px-6 py-3 text-center text-gray-400">Free</div>
              <div className="px-4 sm:px-6 py-3 text-center text-blue-400">Pro</div>
            </div>
            {[
              { feature: 'Skill tree access', free: true, pro: true },
              { feature: 'Practice questions', free: 'Limited', pro: 'Unlimited' },
              { feature: 'Exam papers', free: '3 papers', pro: 'All 20' },
              { feature: 'Progress tracking', free: true, pro: true },
              { feature: 'PDF downloads', free: false, pro: true },
              { feature: 'All skill nodes', free: false, pro: true },
              { feature: 'Priority features', free: false, pro: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm border-b border-white/5 last:border-0">
                <div className="px-4 sm:px-6 py-3 text-gray-300">{row.feature}</div>
                <div className="px-4 sm:px-6 py-3 text-center">
                  {row.free === true ? <Check size={16} className="text-green-500 mx-auto" /> :
                   row.free === false ? <XIcon size={16} className="text-gray-600 mx-auto" /> :
                   <span className="text-gray-500 text-xs">{row.free}</span>}
                </div>
                <div className="px-4 sm:px-6 py-3 text-center">
                  {row.pro === true ? <Check size={16} className="text-green-500 mx-auto" /> :
                   <span className="text-blue-400 text-xs font-medium">{row.pro}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section ref={faq.ref} className={`border-t border-white/5 bg-white/[0.01] transition-all duration-700 ${faq.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mx-auto max-w-3xl px-5 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-gray-400">Everything you need to know about ATAR Master.</p>
          </div>
          <div>
            {[
              { q: 'Is ATAR Master really free?', a: 'Yes! The free plan gives you access to the skill tree, basic practice questions, and 3 exam papers. No credit card needed.' },
              { q: 'What exams are included?', a: 'All VCE Mathematical Methods exams from 2016 to 2025 — that\'s 20 papers (Exam 1 and Exam 2 for each year), with full marking guides.' },
              { q: 'How is this different from textbook exercises?', a: 'ATAR Master uses a skill tree progression system inspired by games like Duolingo. You start at your level, unlock skills as you progress, and practice with real exam questions — not generic textbook drills.' },
              { q: 'Can Year 8–10 students use this?', a: 'Absolutely! The skill tree starts from Year 8 foundations and builds up. It\'s perfect for getting ahead or filling knowledge gaps before senior years.' },
              { q: 'Will this help me get a higher ATAR?', a: 'ATAR Master focuses specifically on VCE Methods exam preparation. By practicing with real past exams and tracking your mastery across every topic, you\'ll be better prepared for the exam.' },
              { q: 'Can I cancel Pro anytime?', a: 'Yes, you can cancel your Pro subscription at any time. You\'ll keep access until the end of your billing period.' },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative py-20 sm:py-28 text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative z-10 px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to master Methods?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Join students across Victoria preparing smarter, not harder.</p>
          <Link to="/skill-tree" className="inline-block w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            Start Practicing Now →
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-400">✦</span>
            <span className="font-bold text-lg">ATAR Master</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-500">
            <Link to="/skill-tree" className="hover:text-gray-300 transition-colors">Skill Tree</Link>
            <Link to="/exams" className="hover:text-gray-300 transition-colors">Exams</Link>
            <Link to="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
            <Link to="/auth" className="hover:text-gray-300 transition-colors">Sign In</Link>
          </div>
          <div className="text-sm text-gray-600 text-center md:text-right">
            <p>Built for VCE students</p>
            <p>© 2026 ATAR Master</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
