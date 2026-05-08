import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    title: 'Strictly necessary',
    body: 'Session and security cookies (or the equivalent in local storage) keep you signed in where auth is used and protect forms from trivial abuse.',
  },
  {
    title: 'Preferences',
    body: 'Lightweight storage may remember things like whether you have dismissed a notice, so the layout does not nag you on every page load.',
  },
  {
    title: 'Analytics (if any)',
    body: 'We prefer aggregate, privacy-respecting traffic signals over ad-tech graphs. If enabled, we keep retention short and do not use cookies to sell your attention.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Cookies & storage"
      description="What gets stored in your browser when you use this site."
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
