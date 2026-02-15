import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home, GitBranch, FileText } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import SkillTreePage from './pages/SkillTreePage';
import ExamViewerPage from './pages/ExamViewerPage';
import './index.css';

function NavBar() {
  const link = 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors';
  const active = 'bg-gh-surface text-gh-accent-blue';
  const inactive = 'text-gh-text-secondary hover:text-gh-text-primary hover:bg-gh-surface/50';

  return (
    <nav className="sticky top-0 z-50 border-b border-gh-border bg-gh-canvas/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-gh-text-primary">
          <span className="text-2xl">🎓</span> ATAR Master
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/" end className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <Home size={16} /> Home
          </NavLink>
          <NavLink to="/skill-tree" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <GitBranch size={16} /> Skill Tree
          </NavLink>
          <NavLink to="/exams" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>
            <FileText size={16} /> Exams
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gh-canvas text-gh-text-primary font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/skill-tree" element={<SkillTreePage />} />
          <Route path="/exams" element={<ExamViewerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
