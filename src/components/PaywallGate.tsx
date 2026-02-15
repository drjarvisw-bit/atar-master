import { useAuth } from '../hooks/useAuth'
import { Lock, Crown, Check } from 'lucide-react'
import type { ReactNode } from 'react'

const FREE_PREFIXES = ['mm-2021', 'mm-2022', 'mm-2023'] as const

export function isFreePaper(paperId: string): boolean {
  return FREE_PREFIXES.some((p) => paperId.startsWith(p))
}

interface PaywallGateProps {
  requirePro: boolean
  children: ReactNode
}

export default function PaywallGate({ requirePro, children }: PaywallGateProps) {
  const { isPro } = useAuth()

  if (!requirePro || isPro) return <>{children}</>

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-purple-500/10 mb-5">
          <Lock className="h-7 w-7 text-purple-400" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Unlock Pro Papers</h2>
        <p className="text-gray-400 mb-8">
          2024–2025 exam papers and full worked solutions are available on the Pro plan.
        </p>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Crown className="h-5 w-5 text-yellow-400" />
            <span className="text-lg font-semibold text-white">ATAR Master Pro</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            $9.99<span className="text-base font-normal text-gray-400">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">or $79.99/year (save 33%)</p>

          <ul className="text-left space-y-2 text-sm text-gray-300">
            {[
              'All exam papers 2021–2025',
              'Full worked solutions',
              'Performance analytics & tracking',
              'Priority support',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 rounded-lg transition">
          Upgrade to Pro
        </button>

        <p className="text-xs text-gray-600 mt-4">
          Free tier includes 2021–2023 papers. Cancel anytime.
        </p>
      </div>
    </div>
  )
}
