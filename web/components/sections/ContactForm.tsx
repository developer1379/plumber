'use client'

import { useState, useEffect } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    website: '', // Honeypot
  })

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })
  const [userCaptcha, setUserCaptcha] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Generate random math challenge on mount
  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1
    const n2 = Math.floor(Math.random() * 9) + 1
    setCaptcha({ num1: n1, num2: n2 })
    setUserCaptcha('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Quick client-side check first
    const expected = captcha.num1 + captcha.num2
    if (parseInt(userCaptcha.trim()) !== expected) {
      setError('Incorrect security check answer. Please try again.')
      generateCaptcha()
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaNum1: captcha.num1,
          captchaNum2: captcha.num2,
          captchaAnswer: userCaptcha.trim()
        }),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setSuccess(true)
        setFormData({ name: '', phone: '', email: '', message: '', website: '' })
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
        generateCaptcha()
      }
    } catch {
      setError('Connection failed. Please check your network and try again.')
      generateCaptcha()
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-8 text-center space-y-4 animate-fade-in-up">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-primary font-serif">Message Sent Successfully!</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you for contacting Rob Holton. I will review your message and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-primary">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold text-primary">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 07958 795 361"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-primary">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-primary">
          How can we help?
          <span className="font-normal text-muted text-xs block mt-1">Please describe your plumbing or heating job.</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your boiler service, repair, check, or leak details..."
          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary resize-y transition-all"
        />
      </div>

      {/* Math Captcha Fields */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label htmlFor="captcha" className="text-sm font-bold text-primary flex items-center gap-1.5">
          <span>Security Check</span>
          <span className="text-xs font-normal text-muted leading-none mt-0.5">(To block spam bots)</span>
        </label>
        <div className="flex items-center gap-3">
          <div className="bg-slate-50 border border-border px-4 py-2.5 rounded-lg text-sm font-bold text-slate-700 select-none">
            What is {captcha.num1} + {captcha.num2}?
          </div>
          <input
            id="captcha"
            type="text"
            name="captcha"
            required
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            placeholder="Answer"
            className="w-24 rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary text-center font-bold transition-all"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors disabled:bg-slate-300 active:scale-95 duration-150"
      >
        {loading ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  )
}
