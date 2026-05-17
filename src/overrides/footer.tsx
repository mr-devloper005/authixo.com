import Link from 'next/link'
import { MastheadMark } from '@/components/shared/masthead-mark'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


const primary = { label: 'Dispatches', href: '/updates' }

const secondary = [{ label: 'Contact', href: '/contact' }]

const legal = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-[#f4f0ec]">
      <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Masthead</p>
            <Link
              href="/"
              className="mt-3 flex w-fit max-w-full items-center gap-3"
              aria-label={`${SITE_CONFIG.name} — home`}
            >
              <MastheadMark className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
              <span
                className="text-2xl font-medium leading-tight tracking-[-0.03em] text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">{SITE_CONFIG.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Primary</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href={primary.href} className="text-white/90 hover:text-white">
                    {primary.label}
                  </Link>
                </li>
                {secondary.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/60 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Legals</p>
              <ul className="mt-3 space-y-2 text-sm">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/50 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {categories.length ? (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12 h-px w-full bg-white/10" />
        <p className="mt-6 text-xs text-white/40">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
