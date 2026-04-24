import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const topics = [
  {
    title: 'Reading & archive',
    description: 'The /updates list is the main feed. Category filters narrow the file without changing the article layout.',
  },
  {
    title: 'Accounts',
    description: 'Sign in from the login page when you need the dashboard. Sessions are local to this site’s auth shell.',
  },
  {
    title: 'Contacting the desk',
    description: 'Use the contact page to route a note; we answer with the same direct tone as the public copy.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Help"
      description="Short answers for readers and contributors. For anything sensitive, use Contact."
      leadBand={
        <p>
          <Link className="font-medium underline decoration-[#1a1412]/30 underline-offset-2" href="/contact">
            Contact the desk
          </Link>{' '}
          for corrections, rights questions, or partnership notes.
        </p>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-0 border border-[#0a0a0a]/10">
          {topics.map((t) => (
            <div key={t.title} className="border-b border-[#0a0a0a]/8 p-5 last:border-b-0 sm:p-6">
              <h2 className="text-base font-medium text-[#0a0a0a]" style={{ fontFamily: 'var(--font-display)' }}>
                {t.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2a2220]">{t.description}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#0a0a0a]/10 bg-white/30 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/50">FAQ</h3>
          <Accordion type="single" collapsible className="mt-3">
            {mockFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-[#0a0a0a]/10">
                <AccordionTrigger className="text-left text-sm text-[#0a0a0a] hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-[#2a2220]">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageShell>
  )
}
