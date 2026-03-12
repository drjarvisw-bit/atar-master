import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db, googleProvider } from '../services/firebaseClient'
import { syncFromCloud, scheduleSyncToCloud } from '../lib/cloudSync'
import { isAdminEmail, isAdminUser } from '../lib/constants'
import type { User } from 'firebase/auth'

interface AuthError {
  message: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isPro: boolean
  isAdmin: boolean
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signInWithGoogle: () => Promise<{ error: AuthError | null }>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function useAuthProvider(): AuthContextType {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isPro, setIsPro] = useState(false)

  const isAdmin = useMemo(() => isAdminUser(user), [user])

  const checkPro = useCallback(async (u: User | null) => {
    if (!u) { setIsPro(false); return }
    if (isAdminEmail(u.email) || isAdminUser(u)) { setIsPro(true); return }
    // Check atar_subscriptions collection in Firestore
    if (!db) { setIsPro(false); return }
    try {
      const subDoc = await getDoc(doc(db, 'atar_subscriptions', u.uid))
      if (subDoc.exists()) {
        const data = subDoc.data()
        setIsPro(data.plan === 'pro' && data.status === 'active')
      } else {
        setIsPro(false)
      }
    } catch (error) {
      console.error('Failed to check user subscription status:', error)
      setIsPro(false)
    }
  }, [])

  useEffect(() => {
    if (!auth) { setLoading(false); return }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      const prev = user
      setUser(firebaseUser)
      checkPro(firebaseUser)
      setLoading(false)

      // Sync from cloud on sign-in
      if (firebaseUser && !prev) {
        try { await syncFromCloud(firebaseUser.uid) } catch (e) { console.error('[auth] cloud sync failed:', e) }
        // Redirect to skill-tree if on landing page
        const path = window.location.pathname
        if (path === '/') {
          window.location.href = '/skill-tree'
        }
      }

      if (!firebaseUser && prev) {
        window.location.replace('/auth')
      }
    })

    return () => unsubscribe()
  }, [checkPro]) // eslint-disable-line react-hooks/exhaustive-deps

  // Listen for progress changes and debounced-sync to cloud
  const userRef = useRef(user)
  userRef.current = user

  useEffect(() => {
    const handler = () => {
      if (userRef.current) scheduleSyncToCloud(userRef.current.uid)
    }
    window.addEventListener('progress-change', handler)
    return () => window.removeEventListener('progress-change', handler)
  }, [])

  const signUp = useCallback(async (email: string, password: string) => {
    if (!auth) return { error: { message: 'Firebase not configured' } }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      return { error: null }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign up failed'
      return { error: { message } }
    }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!auth) return { error: { message: 'Firebase not configured' } }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return { error: null }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign in failed'
      return { error: { message } }
    }
  }, [])

  const handleSignInWithGoogle = useCallback(async () => {
    if (!auth || !googleProvider) return { error: { message: 'Firebase not configured' } }
    try {
      await signInWithPopup(auth, googleProvider)
      return { error: null }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Google sign in failed'
      return { error: { message } }
    }
  }, [])

  const handleSignOut = useCallback(async () => {
    if (!auth) return
    try {
      await firebaseSignOut(auth)
    } catch (error) {
      console.error('[auth] signOut failed:', error)
    }
    setUser(null)
    setIsPro(false)
    window.location.replace('/auth')
  }, [])

  return useMemo(() => ({
    user, loading, isPro, isAdmin,
    signUp, signIn,
    signInWithGoogle: handleSignInWithGoogle,
    signOut: handleSignOut,
  }), [user, loading, isPro, isAdmin, signUp, signIn, handleSignInWithGoogle, handleSignOut])
}
