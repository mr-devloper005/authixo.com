import { Bookmark, Building2, FileText, Image as ImageIcon } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { MastheadMark } from '@/components/shared/masthead-mark'
import { LoginForm } from '@/components/auth/login-form'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

function getLoginConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      side: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
      icon: Building2,
      title: 'Access your business dashboard',
      body: 'Manage listings, verification details, contact info, and local discovery surfaces from one place.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      side: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
      icon: FileText,
      title: 'Sign in to your publication workspace',
      body: 'Draft, review, and publish long-form work with the calmer reading system intact.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#07101f] text-white',
      panel: 'border border-white/10 bg-white/6',
      side: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
      icon: ImageIcon,
      title: 'Enter the creator workspace',
      body: 'Open your visual feed, creator profile, and publishing tools without dropping into a generic admin shell.',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
    icon: Bookmark,
    title: 'Open your curated collections',
    body: 'Manage saved resources, collection notes, and curator identity from a calmer workspace.',
  }
}

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon
  const inputEditorial = 'h-12 w-full border border-[#0a0a0a]/20 bg-white px-4 text-sm text-[#0a0a0a] outline-none focus:border-[#0a0a0a]'

  if (productKind === 'editorial') {
    return (
      <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
        <NavbarShell />
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <section className="grid gap-0 border border-[#0a0a0a]/10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="border-b border-white/10 bg-[#0a0a0a] p-8 text-[#f4f0ec] lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-4 sm:gap-5">
                <MastheadMark className="h-14 w-14 sm:h-16 sm:w-16" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Account</p>
                  <h1 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                    Sign in to the desk
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">Same black-and-paper system as the public site—one session for dispatches, drafts, and the dashboard.</p>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-white/75">
                <li className="border-l-2 border-[#C6A69F] pl-3">Calm type, no generic admin chrome</li>
                <li className="border-l-2 border-white/15 pl-3">Routes to the tasks enabled for this build</li>
                <li className="border-l-2 border-white/15 pl-3">Log out from account settings or clear storage</li>
              </ul>
            </div>
            <div className="bg-white/50 p-8">
              <LoginForm
                actionClass="rounded-none h-12 w-full border-0 bg-[#0a0a0a] px-6 text-white hover:bg-[#1a1a1a] sm:max-w-sm"
                mutedClass="text-[#3d3532]"
                inputClassName={inputEditorial}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Cleaner product-specific workflows', 'Palette and layout matched to the site family', 'Fewer repeated admin patterns'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <LoginForm actionClass={config.action} mutedClass={config.muted} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
