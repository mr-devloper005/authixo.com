'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { MastheadMark } from '@/components/shared/masthead-mark'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryPath = '/updates'
const navMain = [
  { label: 'Dispatches', href: primaryPath },
  { label: 'Contact', href: '/contact' },
]

function navItemActive(pathname: string, itemHref: string) {
  if (itemHref === primaryPath) {
    return pathname === primaryPath || pathname.startsWith(`${primaryPath}/`)
  }
  return pathname === itemHref
}

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? ''

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a] text-[#f4f0ec]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <div className="min-w-0">
          <Link
            href="/"
            className="flex max-w-full items-center gap-2.5 sm:gap-3"
            aria-label={`${SITE_CONFIG.name} — home`}
          >
            <MastheadMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
            <span
              className="truncate text-[1.35rem] font-medium leading-none tracking-[-0.04em] text-white sm:text-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navMain.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition ${
                navItemActive(pathname, item.href) ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            {navMain.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-sm font-medium uppercase tracking-[0.18em] ${
                  navItemActive(pathname, item.href) ? 'text-white' : 'text-white/65'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
