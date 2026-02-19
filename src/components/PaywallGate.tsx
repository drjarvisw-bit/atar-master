import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Lock, Crown, Check } from 'lucide-react'
import type { ReactNode } from 'react'

export { isFreePaper } from '../lib/constants'

interface PaywallGateProps {
  requirePro: boolean
  children: ReactNode
}

export default function PaywallGate({ requirePro, children }: PaywallGateProps) {
  const { isPro } = useAuth()
  const navigate = useNavigate()

  if (!requirePro || isPro) return <>{children}</>

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white border border-black/10 rounded-2xl p-8 text-center shadow-xl">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-black/[0.04] border border-black/10 mb-5">
          <Lock className="h-7 w-7 text-black/35" />
        </div>

        <h2 className="text-2xl font-bold text-black mb-2">Unlock Pro Papers</h2>
        <p className="text-black/50 mb-8">
          This exam paper is available on the Pro plan.
        </p>

        <div className="bg-black/[0.02] border border-black/10 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Crown className="h-5 w-5 text-black/40" />
            <span className="text-lg font-semibold text-black">ATAR Master Pro</span>
          </div>
          <div className="text-3xl font-bold text-black mb-1">
            $9.99<span className="text-base font-normal text-black/45">/month</span>
          </div>
          <p className="text-sm text-black/45 mb-4">or $89.99/year (save ~25%)</p>

          <ul className="text-left space-y-2 text-sm text-black/55">
            {[
              'All exam papers (all years)',
              'Full worked solutions',
              'Performance analytics & tracking',
              'Priority support',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-black/35 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => navigate('/pricing')}
          className="w-full bg-black hover:bg-black/85 text-white font-medium py-3 rounded-lg transition"
        >
          Upgrade to Pro
        </button>

        <p className="text-xs text-black/35 mt-4">
          Free tier includes 2018–2020 papers. Cancel anytime.
        </p>
      </div>
    </div>
  )
}
