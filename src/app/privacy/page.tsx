import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    title: 'What we collect',
    body: 'We may collect the email and name you provide, content you submit for publication, basic device and usage signals needed to run the site, and any messages you send through contact flows.',
  },
  {
    title: 'How we use it',
    body: 'To deliver the service you asked for, keep accounts secure, fix bugs, and understand aggregate traffic—never to sell a cold-contact list of readers.',
  },
  {
    title: 'Storage & access',
    body: 'Data lives with our hosting and tooling providers under their own DPAs. You can request export or deletion where applicable by contacting the desk with the same email you used to register.',
  },
  {
    title: 'Your choices',
    body: 'You can stop using the site, clear cookies, or ask us to close an account tied to a verifiable address. We will respond within a reasonable window.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Privacy"
      description="A plain-language summary of how this publication-adjacent site handles information."
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
