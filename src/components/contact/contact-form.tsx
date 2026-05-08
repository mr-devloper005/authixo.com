'use client'

import { useState, type FormEvent } from 'react'
import { useToast } from '@/hooks/use-toast'

const generalEmail = 'contact@example.com'
const editorialEmail = 'editor@example.com'

export function ContactForm() {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('general')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: 'Missing information',
        description: 'Add your name, email, and a message.',
      })
      return
    }

    setSending(true)
    const to = topic === 'editorial' ? editorialEmail : generalEmail
    const subject = `[Authixo contact] ${topic === 'editorial' ? 'Editorial' : 'General'} — ${name.trim()}`
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`

    // Opens the visitor's mail client; no server endpoint required.
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto

    toast({
      title: 'Opening your email app',
      description: 'If nothing opens, copy your message and email us directly.',
    })
    setSending(false)
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-5 border border-[#0a0a0a]/10 bg-white/40 p-6 sm:p-8" noValidate>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]/40">Send a message</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/60">
            Name
          </label>
          <input
            id="contact-name"
            className="mt-2 h-11 w-full border border-[#0a0a0a]/15 bg-white px-3 text-sm text-[#0a0a0a] outline-none focus:border-[#0a0a0a]/40"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={sending}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/60">
            Email
          </label>
          <input
            id="contact-email"
            className="mt-2 h-11 w-full border border-[#0a0a0a]/15 bg-white px-3 text-sm text-[#0a0a0a] outline-none focus:border-[#0a0a0a]/40"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={sending}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-topic" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/60">
          Route to
        </label>
        <select
          id="contact-topic"
          name="topic"
          className="mt-2 h-11 w-full border border-[#0a0a0a]/15 bg-white px-3 text-sm text-[#0a0a0a] outline-none focus:border-[#0a0a0a]/40"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={sending}
        >
          <option value="general">General — {generalEmail}</option>
          <option value="editorial">Editorial — {editorialEmail}</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a]/60">
          Message
        </label>
        <textarea
          id="contact-message"
          className="mt-2 min-h-[160px] w-full border border-[#0a0a0a]/15 bg-white px-3 py-3 text-sm leading-relaxed text-[#0a0a0a] outline-none focus:border-[#0a0a0a]/40"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={sending}
          placeholder="Context, links, and what you need from the desk."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex h-12 w-full items-center justify-center border border-[#0a0a0a] bg-[#0a0a0a] px-6 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#0a0a0a] disabled:opacity-60 sm:w-auto"
      >
        {sending ? 'Preparing…' : 'Open in email app'}
      </button>
      <p className="text-xs leading-relaxed text-[#3d3532]">
        Submits by opening your mail app with a pre-filled message. You can also email the addresses above directly.
      </p>
    </form>
  )
}
