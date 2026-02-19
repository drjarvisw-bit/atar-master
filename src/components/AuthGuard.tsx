import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Loader2, ArrowLeft } from 'lucide-react'
import AuthModal from './AuthModal'
import type { ReactNode } from 'react'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const [showModal, setShowModal] = useState(true)
  const navigate = useNavigate()

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-black/30 animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <>
        <div className="pointer-events-none select-none filter blur-sm opacity-40">
          {children}
        </div>
        {showModal ? (
          <AuthModal
            onClose={() => setShowModal(false)}
            message="Sign in to continue"
          />
        ) : (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/25 backdrop-blur-[2px]">
            <div className="text-center bg-white border border-black/10 rounded-2xl p-8 max-w-sm mx-4 shadow-xl">
              <span className="text-4xl mb-3 block">🔒</span>
              <h3 className="text-lg font-semibold text-black mb-2">Sign in required</h3>
              <p className="text-sm text-black/50 mb-5">You need to sign in to access this feature.</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className="px-5 py-2.5 bg-black/[0.05] hover:bg-black/[0.08] text-black/55 font-medium rounded-lg transition text-sm flex items-center gap-1.5 border border-black/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-5 py-2.5 bg-black hover:bg-black/85 text-white font-medium rounded-lg transition text-sm"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return <>{children}</>
}
