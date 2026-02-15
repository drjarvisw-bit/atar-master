import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Download, Lock, Crown, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AuthModal from '../components/AuthModal'

const ALL_YEARS = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
const FREE_YEARS = new Set([2018, 2019, 2020])

export default function ExamsPage() {
  const { user, isPro } = useAuth()
  const navigate = useNavigate()
  const [showAuth, setShowAuth] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)

  const canDownload = (year: number) => isPro || FREE_YEARS.has(year)

  const handleDownload = (year: number, exam: 1 | 2) => {
    if (!user) { setShowAuth(true); return }
    if (!canDownload(year)) { setShowUpgrade(true); return }
    const suffix = exam === 1 ? 'exam1' : 'exam2'
    window.open(`/pdfs/mm-${year}-${suffix}-guide.pdf`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gh-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">📝 VCE Methods Exam Papers</h1>
          <p className="text-gh-text-secondary">Download past VCAA exam papers with marking guides</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_YEARS.map(year => {
            const isFree = FREE_YEARS.has(year)
            const unlocked = canDownload(year)

            return (
              <div key={year} className={`rounded-2xl border bg-gh-surface p-5 flex flex-col gap-4 transition-all ${
                unlocked ? 'border-gh-border hover:border-gh-text-muted' : 'border-gh-border opacity-80'
              }`}>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{year}</h2>
                    <p className="text-xs text-gh-text-muted mt-0.5">Mathematical Methods</p>
                  </div>
                  {isFree ? (
                    <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                      FREE
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      <Crown size={12} /> PRO
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex items-center gap-2 text-xs text-gh-text-secondary">
                  <FileText size={14} />
                  <span>Exam 1 (Tech-Free) + Exam 2 (Tech-Active)</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleDownload(year, 1)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition ${
                      unlocked
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-gh-overlay text-gh-text-muted cursor-pointer hover:bg-gh-border'
                    }`}
                  >
                    {unlocked ? <Download size={14} /> : <Lock size={14} />}
                    Exam 1
                  </button>
                  <button
                    onClick={() => handleDownload(year, 2)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition ${
                      unlocked
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-gh-overlay text-gh-text-muted cursor-pointer hover:bg-gh-border'
                    }`}
                  >
                    {unlocked ? <Download size={14} /> : <Lock size={14} />}
                    Exam 2
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pro upsell banner */}
        {!isPro && user && (
          <div className="mt-10 rounded-2xl border border-blue-600/40 bg-blue-600/10 p-6 text-center">
            <Crown className="mx-auto h-8 w-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Unlock All Exam Papers</h3>
            <p className="text-sm text-gh-text-secondary mb-4">Upgrade to Pro to download all 9 years of past exams</p>
            <button onClick={() => navigate('/pricing')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition text-sm">
              View Pricing
            </button>
          </div>
        )}
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} message="Sign in to download exams" />}
      {showUpgrade && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowUpgrade(false)}>
          <div className="bg-gh-surface border border-gh-border rounded-2xl p-8 max-w-sm text-center" onClick={e => e.stopPropagation()}>
            <Crown className="mx-auto h-10 w-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Pro Feature</h3>
            <p className="text-sm text-gh-text-secondary mb-5">This exam paper is available with a Pro subscription.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowUpgrade(false)}
                className="flex-1 py-2.5 rounded-lg border border-gh-border text-gh-text-secondary hover:bg-gh-overlay transition text-sm">
                Cancel
              </button>
              <button onClick={() => { setShowUpgrade(false); navigate('/pricing') }}
                className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition text-sm">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
