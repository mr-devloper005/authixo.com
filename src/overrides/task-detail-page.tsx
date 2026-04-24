import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 5)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const dateLabel = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
      <NavbarShell />
      <section className="border-b border-white/10 bg-[#0a0a0a] text-[#f4f0ec]">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            <Link href="/updates" className="text-white/70 transition hover:text-white">
              Dispatches
            </Link>
            <span className="px-2 text-white/35">/</span>
            <span className="text-white/50">File</span>
          </div>
          <h1
            className="mt-6 text-[1.9rem] font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[2.4rem] lg:leading-[1.06]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-white/60">
            <time dateTime={post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined}>{dateLabel}</time>
            <span className="px-2 text-white/30">·</span>
            <span>{post.authorName || 'Authixo desk'}</span>
          </p>
        </div>
      </section>

      <div className="h-2 w-full bg-[#C6A69F]" aria-hidden />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.4fr)] lg:gap-14 lg:px-8">
        <article>
          <div
            className="article-content prose prose-lg max-w-none border-0 text-[#1a1412] [font-family:var(--font-sans)]
            prose-p:leading-[1.8] prose-headings:[font-family:var(--font-display)]"
          >
            <RichContent html={html} />
          </div>

          {recent.length >= 2 ? (
            <div className="mt-16 grid border border-[#0a0a0a]/10 md:grid-cols-2">
              {recent.slice(0, 2).map((item, index) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="border-b border-[#0a0a0a]/10 p-5 transition first:border-b md:first:border-r md:[&:first-child]:border-b-0"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/40">{index === 0 ? 'Previous' : 'Next'}</p>
                  <p className="mt-3 text-base font-medium leading-snug text-[#0a0a0a]" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          ) : null}
        </article>

        <aside className="mt-10 space-y-0 border border-[#0a0a0a]/10 bg-white/20 lg:mt-0">
          <div className="border-b border-[#0a0a0a]/10 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/50">In this file</p>
            <ul className="mt-3 space-y-2">
              {recent.map((item) => (
                <li key={item.id}>
                  <Link href={`/updates/${item.slug}`} className="text-sm leading-relaxed text-[#2a2220] transition hover:text-[#0a0a0a]">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <form action="/search" className="p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0a0a0a]/50">Search</p>
            <label className="mt-2 flex items-stretch border border-[#0a0a0a]/15">
              <input name="q" className="min-w-0 flex-1 border-0 bg-white px-3 py-2.5 text-sm text-[#0a0a0a] outline-none" placeholder="Query the archive" />
              <button type="submit" className="inline-flex w-10 shrink-0 items-center justify-center bg-[#0a0a0a] text-white" aria-label="Search">
                <Search className="h-4 w-4" />
              </button>
            </label>
          </form>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
