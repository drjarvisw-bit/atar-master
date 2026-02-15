import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function SuccessPage() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer)
          navigate('/dashboard')
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-3">Welcome to Pro!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for upgrading. You now have full access to all exam papers, topic mastery
          analytics, and priority support.
        </p>
        <a
          href="/dashboard"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
        >
          Go to Dashboard
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Redirecting in {countdown} second{countdown !== 1 && 's'}…
        </p>
      </div>
    </div>
  )
}
