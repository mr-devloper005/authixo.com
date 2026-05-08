import { PageShell } from "@/components/shared/page-shell"
import { SITE_CONFIG } from "@/lib/site-config"

const sections = [
  {
    title: "Using the site",
    body: `By reading or submitting material on ${SITE_CONFIG.name}, you agree to do so lawfully. Do not attempt to break, scrape, or overload the service beyond ordinary browsing and publishing use.`,
  },
  {
    title: "Content",
    body: "You are responsible for what you publish. You grant us a non-exclusive license to host, display, and distribute your submitted work in connection with the site. You can ask to remove or correct a piece through the same channels as privacy requests.",
  },
  {
    title: "Liability",
    body: "The site is provided as-is. We are not liable for indirect or consequential damages arising from use of the service. Nothing here limits rights that cannot be limited by law in your jurisdiction.",
  },
  {
    title: "Changes",
    body: "We may update these terms; the “last updated” line will move when we do. Continued use after a change is posted is treated as notice.",
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of use"
      description={`Rules and expectations for reading and participating on ${SITE_CONFIG.name}.`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a]/50">Last updated — April 2026</p>
      <div className="mt-6 space-y-0 border border-[#0a0a0a]/10">
        {sections.map((section) => (
          <div key={section.title} className="border-b border-[#0a0a0a]/8 p-5 last:border-b-0 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]">{section.title}</h2>
            <p className="mt-2 text-sm leading-[1.75] text-[#2a2220]">{section.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
