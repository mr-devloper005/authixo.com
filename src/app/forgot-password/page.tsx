"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"
import { MastheadMark } from "@/components/shared/masthead-mark"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#e8e2dc] text-[#0a0a0a]">
      <NavbarShell />
      <div className="border-b border-white/10 bg-[#0a0a0a] text-[#f4f0ec]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex items-start gap-4">
            <MastheadMark className="h-12 w-12 sm:h-14 sm:w-14" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Access</p>
              <h1 className="mt-1 text-2xl font-medium sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>Password reset</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-1 items-center justify-center p-4 py-12 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full border border-[#0a0a0a]/10 bg-white/50 p-6 sm:p-8"
        >
          <Link
            href="/login"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[#3d3532] transition hover:text-[#0a0a0a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>Email a reset link</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2a2220]">
                We will send a message to the address you used for this desk. Demo flow only—no message leaves your browser in this template.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0a0a0a]">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0a0a0a]/40" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-[#0a0a0a]/20 pl-9"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-none bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                  disabled={isLoading}
                >
                  {isLoading ? "Queueing…" : "Send reset link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-[#0a0a0a]/15 bg-white">
                <CheckCircle className="h-8 w-8 text-[#0a0a0a]" />
              </div>
              <h2 className="text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>Check your email</h2>
              <p className="mt-2 text-sm text-[#2a2220]">
                (Demo) We would email <strong>{email}</strong> a reset link in production.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 w-full border-[#0a0a0a] rounded-none"
              >
                <Link href="/login">Back to sign in</Link>
              </Button>
              <p className="mt-5 text-sm text-[#3d3532]">
                Wrong address?{" "}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#0a0a0a] underline decoration-[#0a0a0a]/30 underline-offset-2"
                >
                  Try again
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
