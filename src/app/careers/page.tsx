import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { SITE_CONFIG } from "@/lib/site-config"

const roles = [
  { title: "Editorial producer", location: "Remote (US time zones)", type: "Contract", level: "Mid" },
  { title: "Front-end (Next.js)", location: "Remote", type: "Full-time", level: "Senior" },
  { title: "Fact-checking partner", location: "Hybrid / NYC", type: "Part-time", level: "Experienced" },
]

const benefits = [
  "Editorial calendar that respects time off",
  "Stipend for tools and long-form software",
  "No OKR deck—ship stories, not tickets",
  "Access passes to events we co-publish with",
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Hiring"
      title="Careers"
      description={`We grow ${SITE_CONFIG.name} slowly, with people who like words more than funnels. Roles below are sample listings for the site shell.`}
      leadBand={
        <p>We are not a growth team hiring “rockstars.” Send a short note and links through Contact; put the role in the subject line.</p>
      }
    >
      <div className="grid gap-0 border border-[#0a0a0a]/10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {roles.map((role) => (
            <div key={role.title} className="border-b border-[#0a0a0a]/8 p-5 sm:p-6 last:border-b-0 lg:last:border-b">
              <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/50">
                <span>{role.level}</span>
                <span>·</span>
                <span>{role.type}</span>
              </div>
              <h2 className="mt-2 text-lg font-medium text-[#0a0a0a]" style={{ fontFamily: "var(--font-display)" }}>
                {role.title}
              </h2>
              <p className="mt-1 text-sm text-[#3d3532]">{role.location}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-medium text-[#0a0a0a] underline decoration-[#0a0a0a]/25 underline-offset-4"
              >
                Inquire
              </Link>
            </div>
          ))}
        </div>
        <div className="border-t border-[#0a0a0a]/10 p-5 sm:p-6 lg:border-l lg:border-t-0">
          <h3 className="text-base font-medium" style={{ fontFamily: "var(--font-display)" }}>
            Why this desk
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#2a2220]">
            We bias toward long attention spans, thin interfaces, and readers who tab away to source material.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#2a2220]">
            {benefits.map((b) => (
              <li key={b} className="border-l-2 border-[#C6A69F] pl-3">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}
