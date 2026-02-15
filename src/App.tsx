import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Home, GitBranch, FileText, Dumbbell, BarChart3, DollarSign, LogIn, LogOut, User, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { AuthContext, useAuth, useAuthProvider } from './hooks/useAuth';
import AuthGuard from './components/AuthGuard';
import './index.css';

const ADMIN_EMAILS = ['wangmengjames@gmail.com', 'drjarvisw@gmail.com'];

// Lazy-loaded pages for code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SkillTreePage = lazy(() => import('./pages/SkillTreePage'));
const ExamViewerPage = lazy(() => import('./pages/ExamViewerPage'));
const ExamsPage = lazy(() => import('./pages/ExamsPage'));
const PracticePage = lazy(() => import('./pages/PracticePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const TeacherDashboardPage = lazy(() => import('./pages/TeacherDashboardPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-gh-accent-blue border-t-transparent" />
    </div>
  );
}

function UserDropdown() {
  const { user, isPro, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isAdmin = ADMIN_EMAILS.includes(user?.email || '');

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gh-surface/50 transition"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="" className="w-7 h-7 rounded-full" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-gh-surface flex items-center justify-center">
            <User size={14} className="text-gh-text-secondary" />
          </div>
        )}
        <span className="text-sm text-gh-text-secondary hidden sm:inline">
          {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
        </span>
        {isPro && (
          <span className="px-1.5 py-0.5 text-[10px] font-bold bg-gh-accent-blue/20 text-gh-accent-blue rounded-full">PRO</span>
        )}
        <ChevronDown size={14} className="text-gh-text-secondary" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-gh-surface border border-gh-border rounded-xl shadow-lg py-1 z-50">
          <button
            onClick={() => { navigate('/dashboard'); setOpen(false); }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gh-text-primary hover:bg-gh-canvas transition"
          >
            <BarChart3 size={14} /> Dashboard
          </button>
          {isAdmin && (
            <button
              onClick={() => { navigate('/teacher'); setOpen(false); }}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gh-text-primary hover:bg-gh-canvas transition"
            >
              <Shield size={14} /> Teacher Dashboard
            </button>
          )}
          <div className="border-t border-gh-border my-1" />
          <button
            onClick={() => { signOut(); setOpen(false); }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-gh-canvas transition"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

function NavBar() {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const link = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors';
  const active = 'bg-gh-surface text-gh-accent-blue';
  const inactive = 'text-gh-text-secondary hover:text-gh-text-primary hover:bg-gh-surface/50';

  const navLinks = [
    { to: '/', icon: <Home size={16} />, label: 'Home', end: true },
    { to: '/skill-tree', icon: <GitBranch size={16} />, label: 'Skill Tree' },
    { to: '/exams', icon: <FileText size={16} />, label: 'Exams' },
    { to: '/practice', icon: <Dumbbell size={16} />, label: 'Practice' },
    { to: '/dashboard', icon: <BarChart3 size={16} />, label: 'Dashboard' },
    { to: '/pricing', icon: <DollarSign size={16} />, label: 'Pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gh-border bg-gh-canvas/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-gh-text-primary">
          <span className="text-2xl">🎓</span> ATAR Master
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
              {l.icon} {l.label}
            </NavLink>
          ))}
          <div className="ml-2 pl-2 border-l border-gh-border flex items-center gap-2">
            {user ? (
              <UserDropdown />
            ) : (
              <NavLink to="/auth" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
                <LogIn size={16} /> Sign In
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gh-text-secondary hover:text-gh-text-primary">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gh-border bg-gh-canvas px-4 pb-4 space-y-1">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `${link} w-full ${isActive ? active : inactive}`}
            >
              {l.icon} {l.label}
            </NavLink>
          ))}
          <div className="border-t border-gh-border pt-2 mt-2">
            {user ? (
              <UserDropdown />
            ) : (
              <NavLink to="/auth" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${link} w-full ${isActive ? active : inactive}`}>
                <LogIn size={16} /> Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function AppRoutes() {
  return (
    <div className="min-h-screen bg-gh-canvas text-gh-text-primary font-sans">
      <NavBar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/skill-tree" element={<AuthGuard><SkillTreePage /></AuthGuard>} />
          <Route path="/exams" element={<AuthGuard><ExamsPage /></AuthGuard>} />
          <Route path="/exam-viewer" element={<AuthGuard><ExamViewerPage /></AuthGuard>} />
          <Route path="/practice" element={<AuthGuard><PracticePage /></AuthGuard>} />
          <Route path="/dashboard" element={<AuthGuard><DashboardPage /></AuthGuard>} />
          <Route path="/teacher" element={<AuthGuard><TeacherDashboardPage /></AuthGuard>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function App() {
  const auth = useAuthProvider();

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
