import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Loader2 } from 'lucide-react'
import AuthModal from './AuthModal'
import type { ReactNode } from 'react'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const [dismissed, setDismissed] = useState(false)

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-gh-accent-blue animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <>
        {/* Show page content blurred behind the modal */}
        <div className="pointer-events-none select-none filter blur-sm opacity-40">
          {children}
        </div>
        {!dismissed && (
          <AuthModal
            onClose={() => setDismissed(true)}
            message="Sign in to continue"
          />
        )}
        {dismissed && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="text-center bg-gh-surface border border-gh-border rounded-2xl p-8 max-w-sm mx-4">
              <span className="text-4xl mb-3 block">🔒</span>
              <h3 className="text-lg font-semibold text-white mb-2">Authentication Required</h3>
              <p className="text-sm text-gh-text-secondary mb-4">You need to sign in to access this feature.</p>
              <button
                onClick={() => setDismissed(false)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition text-sm"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </>
    )
  }

  return <>{children}</>
}
