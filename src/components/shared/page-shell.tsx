'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { MastheadMark } from '@/components/shared/masthead-mark'

export function PageShell({
  title,
  description,
  eyebrow = 'On site',
  actions,
  leadBand,
  children,
}: {
  title: string
  description?: string
  /** Small caps label above the title (e.g. masthead name). */
  eyebrow?: string
  actions?: ReactNode
  /** Optional full-width band below the black header (e.g. dusty-rose intro line). */
  leadBand?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
      <NavbarShell />
      <main>
        <section className="border-b border-white/10 bg-[#0a0a0a] text-[#f4f0ec]">
          <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                <MastheadMark className="h-12 w-12 shrink-0 sm:h-16 sm:w-16" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">{eyebrow}</p>
                  <h1
                    className="mt-2 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[2.4rem] lg:leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h1>
                  {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">{description}</p>}
                </div>
              </div>
              {actions && <div className="flex w-full max-w-md flex-col gap-2 sm:w-auto sm:items-stretch sm:pt-1">{actions}</div>}
            </div>
          </div>
        </section>
        {leadBand ? <div className="bg-[#C6A69F] px-4 py-3 text-sm font-medium text-[#1a1412] sm:px-6 lg:px-10">{leadBand}</div> : null}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}
