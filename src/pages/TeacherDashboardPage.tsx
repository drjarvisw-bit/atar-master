import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import {
  Users, Crown, UserPlus, ExternalLink, BarChart3, Shield,
} from 'lucide-react';
import { isAdminUser } from '../lib/constants';

const MOCK_RECENT_SIGNUPS = [
  { email: 'student1@example.com', date: '2025-02-14', plan: 'Free' },
  { email: 'student2@example.com', date: '2025-02-13', plan: 'Pro' },
  { email: 'student3@example.com', date: '2025-02-12', plan: 'Free' },
  { email: 'student4@example.com', date: '2025-02-11', plan: 'Free' },
  { email: 'student5@example.com', date: '2025-02-10', plan: 'Pro' },
];

export default function TeacherDashboardPage() {
  const { user } = useAuth();

  if (!isAdminUser(user)) {
    return <Navigate to="/dashboard" replace />;
  }

  const stats = [
    { icon: <Users size={20} className="text-blue-400" />, value: '—', label: 'Total Users' },
    { icon: <BarChart3 size={20} className="text-green-400" />, value: '—', label: 'Active Users' },
    { icon: <Crown size={20} className="text-yellow-400" />, value: '—', label: 'Pro Users' },
    { icon: <UserPlus size={20} className="text-purple-400" />, value: '—', label: 'This Week' },
  ];

  const quickLinks = [
    { label: 'Stripe Dashboard', url: 'https://dashboard.stripe.com', icon: <Crown size={16} /> },
    { label: 'Supabase Dashboard', url: 'https://supabase.com/dashboard', icon: <Shield size={16} /> },
    { label: 'Vercel Dashboard', url: 'https://vercel.com/dashboard', icon: <ExternalLink size={16} /> },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Shield size={28} className="text-gh-accent-blue" />
        <div>
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <p className="text-sm text-gh-text-secondary">Admin panel — {user?.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-gh-surface border border-gh-border rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2">{s.icon}</div>
            <div className="text-2xl font-bold text-gh-text-primary">{s.value}</div>
            <div className="text-xs text-gh-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Recent Signups */}
        <div className="md:col-span-2 bg-gh-surface border border-gh-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Signups</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gh-text-secondary border-b border-gh-border">
                  <th className="pb-2">Email</th>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Plan</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_RECENT_SIGNUPS.map((u, i) => (
                  <tr key={i} className="border-b border-gh-border/50">
                    <td className="py-2 text-gh-text-primary">{u.email}</td>
                    <td className="py-2 text-gh-text-secondary">{u.date}</td>
                    <td className="py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.plan === 'Pro' ? 'bg-gh-accent-blue/20 text-gh-accent-blue' : 'bg-gray-700 text-gray-300'}`}>
                        {u.plan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gh-text-secondary mt-3">* Mock data — will connect to Supabase DB later</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-gh-surface border border-gh-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickLinks.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-gh-canvas border border-gh-border rounded-lg text-sm text-gh-text-primary hover:border-gh-accent-blue transition"
              >
                {l.icon}
                {l.label}
                <ExternalLink size={12} className="ml-auto text-gh-text-secondary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
