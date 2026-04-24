'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

type LoginFormProps = {
  actionClass: string
  mutedClass: string
  inputClassName?: string
}

export function LoginForm({ actionClass, mutedClass, inputClassName }: LoginFormProps) {
  const inputClass =
    inputClassName ||
    'h-12 w-full rounded-xl border border-current/10 bg-transparent px-4 text-sm outline-none focus:border-current/30'
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!email.trim() || !password) {
      setError('Enter your email and password.')
      return
    }
    try {
      await login(email.trim(), password)
      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Could not sign in. Please try again.')
    }
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Welcome back</p>
      <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
        {error ? <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p> : null}
        <input
          className={inputClass}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-60 ${actionClass}`}
        >
          {isLoading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <div className={`mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm ${mutedClass}`}>
        <Link href="/forgot-password" className="hover:underline">
          Forgot password?
        </Link>
        <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <Sparkles className="h-4 w-4" />
          Create account
        </Link>
      </div>
    </>
  )
}
