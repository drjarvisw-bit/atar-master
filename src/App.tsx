import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home, FileText, Dumbbell, BarChart3, DollarSign, LogIn, LogOut, User } from 'lucide-react';
import { AuthContext, useAuth, useAuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import SkillTreePage from './pages/SkillTreePage';
import ExamViewerPage from './pages/ExamViewerPage';
import PracticePage from './pages/PracticePage';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';
import PricingPage from './pages/PricingPage';
import SuccessPage from './pages/SuccessPage';
import './index.css';

function NavBar() {
  const { user, isPro, signOut } = useAuth();
  const link = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors';
  const active = 'bg-gh-surface text-gh-accent-blue';
  const inactive = 'text-gh-text-secondary hover:text-gh-text-primary hover:bg-gh-surface/50';

  return (
    <nav className="sticky top-0 z-50 border-b border-gh-border bg-gh-canvas/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-gh-text-primary">
          <span className="text-2xl">🎓</span> ATAR Master
        </NavLink>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <Home size={16} /> Home
          </NavLink>
          <NavLink to="/exams" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <FileText size={16} /> Exams
          </NavLink>
          <NavLink to="/practice" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <Dumbbell size={16} /> Practice
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <BarChart3 size={16} /> Dashboard
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <DollarSign size={16} /> Pricing
          </NavLink>
          
          <div className="ml-2 pl-2 border-l border-gh-border flex items-center gap-2">
            {user ? (
              <>
                <span className="flex items-center gap-1.5 text-sm text-gh-text-secondary">
                  <User size={14} />
                  {user.email?.split('@')[0]}
                  {isPro && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-gh-accent-blue/20 text-gh-accent-blue rounded-full">
                      PRO
                    </span>
                  )}
                </span>
                <button
                  onClick={() => signOut()}
                  className={`${link} ${inactive}`}
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </>
            ) : (
              <NavLink to="/auth" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
                <LogIn size={16} /> Sign In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppRoutes() {
  return (
    <div className="min-h-screen bg-gh-canvas text-gh-text-primary font-sans">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/skill-tree" element={<SkillTreePage />} />
        <Route path="/exams" element={<ExamViewerPage />} />
        <Route path="/practice" element={
          <ProtectedRoute>
            <PracticePage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
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
