import { PageShell } from '@/components/shared/page-shell'

const services = [
  { name: 'Reader & archive', status: 'Operational' },
  { name: 'Publishing API', status: 'Operational' },
  { name: 'Media delivery', status: 'Degraded in edge regions' },
]

const incidents = [
  { date: 'Apr 2, 2026', title: 'Elevated compile times on deploy preview', status: 'Monitoring' },
  { date: 'Mar 12, 2026', title: 'Notification queue lag (10m)', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      eyebrow="Uptime"
      title="Status"
      description="A simple board for the pieces readers notice. This page is hand-edited in the template—wire your own provider when you go live."
    >
      <div className="space-y-8">
        <div className="grid gap-0 border border-[#0a0a0a]/10 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="border-b border-[#0a0a0a]/8 p-5 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[#0a0a0a]/60">{service.name}</h2>
              <p className="mt-3 text-base font-medium text-[#0a0a0a]">{service.status}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#0a0a0a]/10 bg-white/30 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/50">Log</h3>
          <ul className="mt-4 space-y-3">
            {incidents.map((incident) => (
              <li key={incident.title} className="border-b border-[#0a0a0a]/8 pb-3 last:border-0 last:pb-0">
                <p className="text-xs text-[#0a0a0a]/45">{incident.date}</p>
                <p className="text-sm font-medium text-[#0a0a0a]">{incident.title}</p>
                <p className="text-xs text-[#3d3532]">{incident.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}
