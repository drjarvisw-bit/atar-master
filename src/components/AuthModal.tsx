import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Mail, Lock, LogIn, UserPlus, AlertCircle, X } from 'lucide-react'

interface AuthModalProps {
  onClose: () => void
  onSuccess?: () => void
  message?: string
}

export default function AuthModal({ onClose, onSuccess, message = 'Sign in to continue' }: AuthModalProps) {
  const [mode, setMode] = useState<'sign_in' | 'sign_up'>('sign_in')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [confirmSent, setConfirmSent] = useState(false)
  const { signIn, signUp, signInWithGoogle } = useAuth()

  const isSignIn = mode === 'sign_in'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (isSignIn) {
        const { error: err } = await signIn(email, password)
        if (err) { setError(err.message); return }
        onSuccess?.()
      } else {
        const { error: err } = await signUp(email, password)
        if (err) { setError(err.message); return }
        setConfirmSent(true)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogle = async () => {
    setError('')
    const { error: err } = await signInWithGoogle()
    if (err) setError(err.message)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-md bg-gh-surface border border-gh-border rounded-2xl p-6 sm:p-8 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gh-text-muted hover:text-gh-text-primary">
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <span className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-xs font-semibold tracking-wide text-white">AM</span>
          <h2 className="text-xl font-bold text-white">{message}</h2>
        </div>

        {confirmSent ? (
          <div className="text-center py-4">
            <Mail className="mx-auto h-12 w-12 text-gh-accent-blue mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Check your email</h3>
            <p className="text-gray-400 text-sm">We sent a confirmation link to <span className="text-white">{email}</span></p>
          </div>
        ) : (
          <>
            {/* Mode toggle */}
            <div className="flex bg-gh-overlay rounded-lg p-1 mb-5">
              {(['sign_in', 'sign_up'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setError('') }}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                    mode === m ? 'bg-gh-border text-white' : 'text-gh-text-secondary hover:text-gh-text-primary'
                  }`}
                >
                  {m === 'sign_in' ? 'Sign In' : 'Sign Up'}
                </button>
              ))}
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
                <AlertCircle className="h-4 w-4 shrink-0" /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gh-text-muted" />
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full bg-gh-overlay border border-gh-border rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gh-text-muted focus:outline-none focus:ring-2 focus:ring-gh-accent-blue/50 focus:border-gh-accent-blue transition"
                  placeholder="you@example.com" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gh-text-muted" />
                <input type="password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full bg-gh-overlay border border-gh-border rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gh-text-muted focus:outline-none focus:ring-2 focus:ring-gh-accent-blue/50 focus:border-gh-accent-blue transition"
                  placeholder="••••••••" />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium py-2.5 rounded-lg transition">
                {isSignIn ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                {submitting ? 'Please wait…' : isSignIn ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gh-border" />
              <span className="text-xs text-gh-text-muted uppercase">or</span>
              <div className="flex-1 h-px bg-gh-border" />
            </div>

            <button onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 bg-gh-overlay hover:bg-gh-border border border-gh-border text-gh-text-secondary hover:text-white font-medium py-2.5 rounded-lg transition">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </>
        )}
      </div>
    </div>
  )
}
