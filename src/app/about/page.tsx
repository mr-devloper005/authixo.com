import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { mockTeamMembers } from "@/data/mock-data"
import { SITE_CONFIG } from "@/lib/site-config"

const masthead = [
  "Authixo is a small, independent channel for media updates and long-form notes—typeset like a serious magazine, without the default SaaS skin.",
  "We keep the public pages narrow on purpose: one masthead, one archive, and reading views that do not fight the words.",
]

const columns = [
  {
    title: "What we file",
    body: "Short dispatches, announcements, and longer pieces when a story needs room. The mix can flex; the frame stays quiet.",
  },
  {
    title: "What we avoid",
    body: "Engagement baits, growth chrome, and recycled template copy. If it reads like a product landing page, it does not ship on the home feed.",
  },
  {
    title: "How to read",
    body: "Start at the front, open /updates, or use search when you need a keyword. The interface is the same for every task the system supports under the hood.",
  },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow={SITE_CONFIG.name}
      title="About the desk"
      description="A thin editorial front: black, paper, and type—aligned with the home page, not a separate marketing product."
      leadBand={
        <p className="max-w-3xl text-[0.95rem] leading-relaxed sm:text-base">
          We publish in public; we do not run a helpdesk funnel on the home page. Use Contact when you need a line to a human.
        </p>
      }
    >
      <div className="space-y-8">
        {masthead.map((p, i) => (
          <p key={i} className="text-base leading-[1.75] text-[#1a1412]">
            {p}
          </p>
        ))}

        <div className="grid gap-0 border border-[#0a0a0a]/10 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title} className="border-b border-[#0a0a0a]/8 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-[#0a0a0a]/55">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#2a2220]">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#0a0a0a]/10 bg-white/30 p-6 sm:p-8">
          <h2 className="text-xl font-medium" style={{ fontFamily: "var(--font-display)" }}>
            People
          </h2>
          <p className="mt-2 text-sm text-[#3d3532]">A rotating bench—names below are sample roster entries for the template.</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockTeamMembers.map((m) => (
              <li key={m.id} className="border-b border-[#0a0a0a]/10 pb-5 sm:border-0 sm:pb-0">
                <p className="font-medium text-[#0a0a0a]">{m.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#0a0a0a]/50">{m.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#2a2220]">{m.bio}</p>
                <p className="mt-1 text-xs text-[#0a0a0a]/45">{m.location}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/team"
            className="inline-flex border border-[#0a0a0a] bg-[#0a0a0a] px-4 py-2.5 text-white transition hover:bg-white hover:text-[#0a0a0a]"
          >
            Open org feed
          </Link>
          <Link href="/contact" className="text-[#0a0a0a] underline decoration-[#0a0a0a]/25 underline-offset-4">
            Write the desk
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
