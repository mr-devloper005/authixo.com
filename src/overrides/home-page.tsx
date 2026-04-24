import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'

export const HOME_PAGE_OVERRIDE_ENABLED = false

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

/**
 * Optional override — kept aligned with the main editorial system (black / dusty rose / no stock “template” chrome).
 * Toggle `HOME_PAGE_OVERRIDE_ENABLED` if you need a fully custom homepage without touching `app/page.tsx` logic.
 */
export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: true })
  const featured = posts[0]
  const recent = posts.slice(1, 6)
  const archive = posts.slice(1)

  return (
    <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
      <NavbarShell />
      <section className="border-b border-white/10 bg-[#0a0a0a] px-4 py-12 text-[#f4f0ec] sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Override home</p>
        {featured ? (
          <>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
              {String((featured.content as { category?: string })?.category || 'Dispatch')}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              {featured.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">{excerpt(featured.summary)}</p>
            <div className="mt-8">
              <Link
                href={`/updates/${featured.slug}`}
                className="inline-flex border border-white/30 bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition hover:bg-[#C6A69F]"
              >
                Continue reading
              </Link>
            </div>
          </>
        ) : null}
      </section>
      <div className="h-2 w-full bg-[#C6A69F]" aria-hidden />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-0">
          {archive.map((post) => (
            <article key={post.id} className="border-b border-[#0a0a0a]/10 py-8 first:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/45">
                {String((post.content as { category?: string })?.category || 'Update')}
              </p>
              <h2 className="mt-2 text-2xl font-medium leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#2a2220]">{excerpt(post.summary)}</p>
              <div className="mt-4">
                <Link href={`/updates/${post.slug}`} className="text-sm font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/25 underline-offset-4">
                  Open
                </Link>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="border border-[#0a0a0a]/10 bg-white/25 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/50">Recent</p>
            <ul className="mt-3 space-y-3">
              {recent.map((post) => (
                <li key={post.id}>
                  <Link href={`/updates/${post.slug}`} className="text-sm leading-snug text-[#2a2220] hover:text-[#0a0a0a]">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
