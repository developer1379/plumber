'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle2, ChevronDown, ShieldAlert } from 'lucide-react'

export function QuickQuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [postcode, setPostcode] = useState('')
  const [service, setService] = useState('boiler-service')
  
  // Math captcha state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })
  const [userCaptcha, setUserCaptcha] = useState('')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !email || !postcode) {
      setStatus('error')
      setMessage('Please fill in all fields.')
      return
    }

    // Local captcha validation
    const expected = captcha.num1 + captcha.num2
    if (parseInt(userCaptcha.trim()) !== expected) {
      setStatus('error')
      setMessage('Incorrect security check answer. Please try again.')
      generateCaptcha()
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone,
          email, 
          message: `Quick Quote Request:\nPostcode: ${postcode}\nService: ${service}`,
          captchaNum1: captcha.num1,
          captchaNum2: captcha.num2,
          captchaAnswer: userCaptcha.trim()
        }),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setEmail('')
        setPostcode('')
        setUserCaptcha('')
      } else {
        throw new Error(data.error || 'Server error')
      }
    } catch (err: any) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong. Please try calling us directly.')
      generateCaptcha()
    }
  }

  if (status === 'success') {
    return (
      <div className="w-full max-w-[460px] rounded-2xl border border-border border-t-[5px] border-t-secondary bg-[#faf9f6] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)] text-center space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-sans text-[24px] leading-snug tracking-tight text-primary font-bold">
          Quote Request Received!
        </h3>
        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
          Thanks, Rob will review your details and send you a fixed quote within the hour.
        </p>
        <button 
          onClick={() => {
            setStatus('idle')
            generateCaptcha()
          }}
          className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-secondary-hover transition-colors cursor-pointer"
        >
          Send Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[460px] rounded-2xl border border-border border-t-[5px] border-t-secondary bg-[#faf9f6] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)] text-left">
      {/* Title & Description */}
      <div>
        <h2 className="font-sans text-[24px] leading-[1.1] tracking-tight text-primary font-bold">
          Get a Fixed Quote
        </h2>
        <p className="text-xs text-slate-500 mt-1.5 leading-normal font-medium">
          Free written quote within the hour, no obligation.
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 07958 795361"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Grid: Postcode & Service Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Postcode */}
          <div>
            <label htmlFor="postcode" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
              Your Postcode
            </label>
            <input
              id="postcode"
              type="text"
              placeholder="e.g. SP8 4WF"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Service Needed */}
          <div>
            <label htmlFor="service" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
              Service Needed
            </label>
            <div className="relative">
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                disabled={status === 'submitting'}
                className="w-full rounded-lg border border-slate-200 bg-white pl-3.5 pr-8 h-[44px] text-[13px] text-primary focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="boiler-service">Boiler Servicing</option>
                <option value="boiler-repair">Boiler Repair</option>
                <option value="gas-installation">Gas Appliance Fitting</option>
                <option value="landlord-checks">Landlord CP12 Check</option>
                <option value="emergency-plumbing">Emergency Plumbing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Check (Math Captcha) */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label htmlFor="captcha" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Security Check
          </label>
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-700 select-none">
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
              disabled={status === 'submitting'}
              className="w-24 rounded-lg border border-slate-200 bg-white px-3 h-[40px] text-sm text-primary text-center font-bold placeholder:text-slate-400 focus:border-secondary focus:ring-3 focus:ring-secondary/15 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full h-[46px] rounded-full text-[12px] font-bold uppercase tracking-[0.1em] text-white bg-secondary hover:bg-secondary-hover transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Get My Quote →'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {status === 'error' && (
        <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-red-600 bg-red-50/50 border border-red-100 rounded-lg p-3">
          <ShieldAlert className="h-4.5 w-4.5 flex-shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Bottom Trust Context */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center text-[10px] text-slate-400 font-medium">
        <span>5.0 ★★★★★ Rating</span>
        <span>&bull;</span>
        <span>Insured to £2.5M</span>
        <span>&bull;</span>
        <a href={siteConfig.contact.primaryPhoneHref} className="hover:text-primary transition-colors underline">
          Call {siteConfig.contact.primaryPhone}
        </a>
      </div>
    </div>
  )
}
