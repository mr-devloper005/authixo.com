import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { MastheadMark } from '@/components/shared/masthead-mark'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      side: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      side: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#07101f] text-white',
      panel: 'border border-white/10 bg-white/6',
      side: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
      icon: ImageIcon,
      title: 'Set up your creator profile',
      body: 'Launch a visual-first account with gallery publishing, identity surfaces, and profile-led discovery.',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
    icon: Bookmark,
    title: 'Create a curator account',
    body: 'Build shelves, save references, and connect collections to your profile without a generic feed setup.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon
  const inputClass = 'h-12 w-full border border-[#0a0a0a]/20 bg-white px-4 text-sm text-[#0a0a0a] outline-none focus:border-[#0a0a0a]'

  if (productKind === 'editorial') {
    return (
      <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
        <NavbarShell />
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <section className="grid gap-0 border border-[#0a0a0a]/10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="border-b border-white/10 bg-[#0a0a0a] p-8 text-[#f4f0ec] lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-4 sm:gap-5">
                <MastheadMark className="h-14 w-14 sm:h-16 sm:w-16" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Join</p>
                  <h1 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Open a desk account
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">Used for publishing flows tied to this site. No social graph, no growth prompts.</p>
                </div>
              </div>
              <p className="mt-6 border-l-2 border-[#C6A69F] pl-3 text-sm text-white/75">You can still read everything here without an account.</p>
            </div>
            <div className="bg-white/50 p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/50">Register</p>
              <form className="mt-4 grid gap-3">
                <input className={inputClass} placeholder="Full name" name="name" autoComplete="name" />
                <input className={inputClass} placeholder="Email" name="email" type="email" autoComplete="email" />
                <input className={inputClass} placeholder="Password" name="password" type="password" autoComplete="new-password" />
                <input
                  className={inputClass}
                  placeholder="What you plan to publish (optional)"
                  name="note"
                />
                <button
                  type="submit"
                  className="mt-1 h-12 w-full border-0 bg-[#0a0a0a] text-sm font-semibold text-white transition hover:bg-[#1a1a1a] sm:max-w-sm"
                >
                  Create account
                </button>
              </form>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-[#3d3532]">
                <span>Have credentials?</span>
                <Link href="/login" className="inline-flex items-center gap-2 font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/30 underline-offset-4">
                  <Sparkles className="h-4 w-4" />
                  Sign in
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
