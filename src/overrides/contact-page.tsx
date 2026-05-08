import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { MastheadMark } from '@/components/shared/masthead-mark'
import { ContactForm } from '@/components/contact/contact-form'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
      <NavbarShell />
      <div className="border-b border-white/10 bg-[#0a0a0a] px-4 py-8 text-[#f4f0ec] sm:px-6">
        <div className="mx-auto flex max-w-3xl items-start gap-4">
          <MastheadMark className="h-12 w-12 sm:h-14 sm:w-14" />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Contact</p>
            <h1
              className="mt-2 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Reach the desk
            </h1>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-[#C6A69F]" aria-hidden />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-base leading-8 text-[#2a2220]">
          Use the form below to compose a note—we’ll hand it to the right inbox. Prefer email? The direct lines are still here.
        </p>

        <ContactForm />

        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]/40">Direct email</p>
        <div className="mt-3 grid gap-0 border border-[#0a0a0a]/10 bg-white/30 sm:grid-cols-2">
          <div className="border-b border-[#0a0a0a]/10 p-5 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/45">Editorial</p>
            <a className="mt-3 block text-lg font-medium underline decoration-[#0a0a0a]/20 underline-offset-2 hover:decoration-[#0a0a0a]" href="mailto:editor@example.com">
              editor@example.com
            </a>
          </div>
          <div className="p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/45">General</p>
            <a className="mt-3 block text-lg font-medium underline decoration-[#0a0a0a]/20 underline-offset-2 hover:decoration-[#0a0a0a]" href="mailto:contact@example.com">
              contact@example.com
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-[#3d3532]">
          <Link href="/updates" className="font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/30 underline-offset-4">
            Back to dispatches
          </Link>
          <span className="mx-2 text-[#0a0a0a]/30">·</span>
          <Link href="/search" className="font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/30 underline-offset-4">
            Search
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
