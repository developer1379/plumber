'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function BottomQuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [postcode, setPostcode] = useState('')
  const [helpText, setHelpText] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !email || !postcode || !helpText) {
      setStatus('error')
      setErrorMessage('Please fill in all fields.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone,
          email, 
          message: `Homepage Quote Request:\nPostcode: ${postcode}\nHow can we help: ${helpText}`,
        }),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setEmail('')
        setPostcode('')
        setHelpText('')
      } else {
        throw new Error(data.error || 'Server error')
      }
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try calling us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md text-center space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-slate-800">Quote Request Received!</h3>
        <p className="text-sm text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
          Thanks, Rob will review your request and get back to you with a free, fixed quote as soon as possible.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="rounded-xl border border-slate-200 hover:bg-slate-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all cursor-pointer"
        >
          Send Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm placeholder-slate-450 focus:border-[#ff6b00] focus:outline-none transition-all shadow-xs"
          />
        </div>

        <div>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm placeholder-slate-450 focus:border-[#ff6b00] focus:outline-none transition-all shadow-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm placeholder-slate-450 focus:border-[#ff6b00] focus:outline-none transition-all shadow-xs"
          />
        </div>

        <div>
          <input
            id="postcode"
            type="text"
            required
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode"
            className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm placeholder-slate-450 focus:border-[#ff6b00] focus:outline-none transition-all shadow-xs"
          />
        </div>
      </div>

      <div>
        <textarea
          id="message"
          required
          rows={3}
          value={helpText}
          onChange={(e) => setHelpText(e.target.value)}
          placeholder="How can we help?"
          className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm placeholder-slate-450 focus:border-[#ff6b00] focus:outline-none transition-all resize-none shadow-xs"
        />
      </div>

      {status === 'error' && (
        <div className="text-[12.5px] font-bold text-red-500 bg-red-50 px-3.5 py-2.5 rounded-xl border border-red-100 flex items-center justify-center animate-shake w-full">
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8f00] hover:from-[#e05e00] hover:to-[#ff7a00] text-white py-4 text-sm font-black tracking-wider transition-all duration-300 shadow-md shadow-orange-500/10 active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <span>Submitting...</span>
        ) : (
          <>
            <span>Get My Free Quote</span>
            <ArrowRight className="h-4 w-4 stroke-[3]" />
          </>
        )}
      </button>
    </form>
  )
}
