'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { RelatedAreas, RelatedServices, RelatedPosts } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { Check, Phone, Mail, Star, Quote, ArrowRight, HelpCircle } from 'lucide-react'

// INFINTELY CRISP VECTOR BRAND LOGO COMPONENTS
const WorcesterLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 150 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5,16 C15,6 25,6 35,16" fill="none" stroke="#d9383a" strokeWidth="3" strokeLinecap="round" />
    <path d="M10,23 C20,13 30,13 40,23" fill="none" stroke="#0c4c92" strokeWidth="3" strokeLinecap="round" />
    <text x="50" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13.5" fill="#0c4c92" letterSpacing="0.04em">WORCESTER</text>
    <text x="50" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8.5" fill="#475569" letterSpacing="0.1em">Bosch Group</text>
  </svg>
)

const VaillantLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 576.4 163.7" className={className} xmlns="http://www.w3.org/2000/svg">
    <style>{`
      .v-st0 { fill: #00897d; }
      .v-st1 { fill: #ffffff; }
    `}</style>
    <path className="v-st0" d="M245,120.8v-14.2h-8.9c-11,0-15.1,3-15.1,11c0,6.7,2.8,9.7,9,9.7C236.6,127.2,240,124.6,245,120.8 M246.6,135.2v-4.3c-8.9,8.3-15.7,9.2-22.5,9.2c-13.4,0-21.1-8.2-21.1-22.2c0-15.6,10.1-23.1,31.1-23.1H245v-4c0-8.8-3.1-11.7-12.6-11.7c-5.4,0-11.9,0.4-19.3,2.2c-1.4,0.3-2.7-0.7-2.7-2.1v-8.9c0-1.5,1-2.8,2.5-3.2c4.6-1.1,12.2-2.4,23.7-2.4c19.6,0,26.4,6.7,26.4,25.2v45.2c0,1.5-1.2,2.7-2.7,2.7h-11C247.8,137.9,246.6,136.7,246.6,135.2" />
    <path className="v-st0" d="M417,120.8v-14.2h-8.9c-11,0-15.1,3-15.1,11c0,6.7,2.8,9.7,9,9.7C408.7,127.2,412.1,124.6,417,120.8 M418.6,135.2v-4.3c-8.8,8.3-15.7,9.2-22.5,9.2c-13.4,0-21.1-8.2-21.1-22.2c0-15.6,10.1-23.1,31-23.1H417v-4c0-8.8-3.3-11.7-13.1-11.7c-5.6,0-12.9,0.6-20.4,2.4c-1.4,0.3-2.7-0.7-2.7-2.1v-8.9c0-1.5,1-2.8,2.5-3.1c4.8-1.1,12.9-2.6,24.7-2.6c20,0,27,6.7,27,25.2v45.2c0,1.5-1.2,2.7-2.7,2.7h-11C419.9,137.9,418.6,136.7,418.6,135.2" />
    <path className="v-st0" d="M552.2,140c-17.4,0-24.9-6.4-24.9-25V52.1c0-1.5,1.2-2.7,2.7-2.7h12.6c1.5,0,2.7,1.2,2.7,2.7v14.8h20.2c1.5,0,2.7,1.2,2.7,2.7v9.4c0,1.5-1.2,2.7-2.7,2.7h-20.2v33.1c0,7.2,3.1,10.5,9.9,10.5c5.2,0,8.5-0.3,11.5-0.6c1.4-0.1,2.6,0.9,2.6,2.3v8.7c0,1.6-1.1,2.9-2.7,3.2C561.2,139.8,558.2,140,552.2,140" />
    <path className="v-st0" d="M466.6,69.6v4.2c6.9-5.7,14.4-9,23.5-9c14.4,0,22,6.4,22.1,22l0.2,48.5c0,1.5-1.2,2.7-2.7,2.7h-12.8c-1.5,0-2.7-1.2-2.7-2.7v-43c0-9-3-11.9-10.5-11.9c-5.5,0-10,1.8-15.5,5.9v49c0,1.5-1.2,2.7-2.7,2.7h-12.6c-1.5,0-2.7-1.2-2.7-2.7V69.6c0-1.5,1.2-2.7,2.7-2.7h11C465.4,66.9,466.6,68.1,466.6,69.6" />
    <path className="v-st0" d="M345.5,135.2V40.9c0-1.5,1.2-2.7,2.7-2.7h12.6c1.5,0,2.7,1.2,2.7,2.7v94.2c0,1.5-1.2,2.7-2.7,2.7h-12.6C346.7,137.9,345.5,136.7,345.5,135.2" />
    <path className="v-st0" d="M311.6,135.2V40.9c0-1.5,1.2-2.7,2.7-2.7H327c1.5,0,2.7,1.2,2.7,2.7v94.2c0,1.5-1.2,2.7-2.7,2.7h-12.6C312.8,137.9,311.6,136.7,311.6,135.2" />
    <path className="v-st0" d="M278.1,135.2V69.6c0-1.5,1.2-2.7,2.7-2.7h12.6c1.5,0,2.7,1.2,2.7,2.7v65.6c0,1.5-1.2,2.7-2.7,2.7h-12.6C279.3,137.9,278.1,136.7,278.1,135.2" />
    <path className="v-st0" d="M277.8,52.6V40.9c0-1.5,1.2-2.7,2.7-2.7h13.3c1.5,0,2.7,1.2,2.7,2.7v11.7c0,1.5-1.2,2.7-2.7,2.7h-13.3C279,55.4,277.8,54.2,277.8,52.6" />
    <path className="v-st0" d="M208,41.2l-28.7,94.3c-0.4,1.4-1.7,2.3-3.1,2.3h-17.4c-1.4,0-2.7-0.9-3.1-2.3l-28.6-94.3c-0.5-1.5,0.7-3,2.2-3h14.5c1.5,0,2.8,1,3.1,2.4l20.8,79l20.8-79c0.4-1.4,1.7-2.4,3.1-2.4h14C207.4,38.2,208.5,39.8,208,41.2" />
    <path className="v-st0" d="M41.6,24.6c5.6-3.2,11.8-5.1,18.5-5.1s12.8,1.9,18.4,5.1c-1.4,2.4-2.9,5.1-4.5,8.2c-4.5-2.6-9.2-3.9-13.9-3.9c-4.8,0-9.4,1.3-13.9,3.9C44.5,29.7,43,27,41.6,24.6 M95.2,39.8c-1.4,4-2.8,7.3-4.3,10.3c8,12.7,12.7,28.8,12.7,43.4c0,14.2-4.6,28.1-12.7,37.9c-5.9,7.2-16,15.8-30.8,15.8s-24.9-8.6-30.8-15.8c-8.1-9.9-12.7-23.7-12.7-37.9c0-14.6,4.8-30.7,12.8-43.4c-1.6-3-2.9-6.4-4.3-10.3C13.7,54.7,7.1,75.4,7.1,93.5c0,18.4,6.6,33.9,14.9,43.9c9.3,11.3,22.2,19.2,38.1,19.2c15.9,0,28.9-7.9,38.1-19.2c8.2-10,14.9-25.5,14.9-43.9C113,75.4,106.4,54.7,95.2,39.8" />
    <path className="v-st1" d="M90.9,50.1c2.2-4.4,4.1-9.3,6.1-15.8c2.3-7.4,4.2-20.1,1.3-24.8c-1-1.6-2.4-2.2-3.3-2.3c-0.3-0.1-0.5-0.1-0.8-0.1c-4,0-8.8,4.3-20.2,25.7c-4.5-2.6-9.2-3.9-13.9-3.9s-9.4,1.3-13.9,3.9C34.8,11.4,30,7.1,25.9,7.1c-0.3,0-0.5,0-0.8,0.1c-0.9,0.2-2.3,0.7-3.3,2.3c-2.9,4.8-1,17.4,1.3,24.8c2,6.6,3.9,11.4,6.1,15.8c-8,12.7-12.7,28.8-12.7,43.4c0,14.3,4.6,28.1,12.7,37.9c5.9,7.2,16,15.8,30.8,15.8c14.8,0,25-8.6,30.8-15.8c8.1-9.9,12.7-23.7,12.7-37.9C103.6,78.9,98.9,62.8,90.9,50.1" />
    <path d="M72.2,89.6c1.1-1.4-0.6-2.4-1.1-2.7c-0.2-0.1-0.2-0.3-0.2-0.5c1.2-3,4-4.6,6-3.3c1.7,1,2,4.9,0,8.8c-1.9,3.7-6,5.1-7.7,4.1c-1.1-0.8-1.3-2.3-0.2-5.8c0.1-0.4,0.3-0.5,0.7-0.3C70,90,71.4,90.6,72.2,89.6 M95.9,113.3l-19.2,0.1c0.2,0.7,0.2,1.5,0.1,2.3l19,0.1c0.7,0,1.2-0.6,1.2-1.2C97.1,113.8,96.5,113.3,95.9,113.3 M98.9,108.5c0,0.6-0.5,1.2-1.1,1.2l-21.5,1.1h0h0c-1.3-3.3-4.6-2.8-4.6-5.6c0-1.5,0.8-2.1,1.5-3c3.1-3.7,8.4-8.8,9-16.3c0.3-4.7-0.8-11-4.6-11.7c-7.2-1.5-14.4,15-14.4,25.4c0,4.2-0.1,5.5,1.5,8c0.9,1.2,2,2.8,1.8,4.5c-0.2,2.1-2.2,2.7-3.2,3.7c-3,2.9,0.1,7.7,5.6,7.7c3.7,0,6.7-1.9,7.5-5.3h0l16.9,0.9c0.6,0.1,1.1,0.6,1.1,1.2c0,0.6-0.6,1.1-1.2,1.1l-13.7-0.9c-3.8,6.7-15,13.1-19.6,13.1c-4.6,0-15.7-6.4-19.6-13.1l-13.7,0.9c-0.6,0-1.2-0.4-1.2-1.1c-0.1-0.6,0.5-1.1,1.1-1.2l16.9-0.9c0.9,3.4,3.9,5.3,7.6,5.3c5.5,0,8.6-4.8,5.6-7.7c-1-1-3-1.6-3.2-3.7c-0.2-1.6,1-3.2,1.8-4.5c1.7-2.4,1.5-3.8,1.5-8c0-10.4-7.2-26.9-14.4-25.4c-3.8,0.8-5,7-4.6,11.7c0.6,7.5,5.8,12.6,8.9,16.3c0.8,0.9,1.5,1.5,1.5,3c0,2.8-3.2,2.3-4.6,5.6h0l-21.5-1.1c-0.6,0-1.2-0.6-1.1-1.2c0-0.6,0.6-1.1,1.2-1.1l14.9,0.8c1.7-9.9-3.4-22.7-2.4-30.9c0.8-6.8,5.6-12.3,9.2-14.9c0.4-0.3,0.5-0.8,0.4-1.3c-1.3-4.5-2.8-12-6.8-21.9c-4-10-7.5-19.9-9.8-19.7c-2.3,0.3-0.7,9.9,4,22.1c4.7,12.2,9.7,17.6,8.3,18.3c-1.4,0.8-3.6-2.6-6.3-7.2c-3.2-5.4-5.5-11.2-8-19.2c-2.9-9.5-4-22.7-0.4-23.3c3.6-0.6,10.3,9.9,18.3,24.9c7.8,14.8,10.5,23.5,10.5,23.5c0.1,0.3,0.3,0.8,1,0.7c1.4-0.3,3.1-0.4,4.7-0.4c1.7,0,3.3,0.1,4.7,0.4c0.7,0.1,0.9-0.3,1-0.7c0,0,2.7-8.7,10.4-23.5c8-15.1,14.7-25.5,18.3-24.9c3.6,0.6,2.6,13.9-0.3,23.3c-2.5,8.1-4.8,13.8-8,19.2c-2.7,4.6-4.9,7.9-6.3,7.2c-1.3-0.7,3.7-6.1,8.3-18.3c4.7-12.2,6.3-21.8,4-22.1c-2.3-0.2-5.8,9.7-9.8,19.7c-4,9.9-5.5,17.4-6.8,21.9c-0.1,0.5,0,1,0.4,1.3c3.6,2.6,8.4,8.1,9.2,14.9c1,8.2-4.1,21-2.4,30.9l14.9-0.8C98.3,107.4,98.9,107.9,98.9,108.5 M60.1,123.9c-1.3,1.4-3.4,2.9-5.7,3.6c1.6,1.6,3.7,2.4,5.7,2.4c2.1,0,4.1-0.8,5.7-2.4C63.4,126.8,61.3,125.3,60.1,123.9 M49,87c0.2-0.1,0.2-0.3,0.2-0.5c-1.2-3-4-4.6-6-3.3c-1.7,1-2,4.9,0,8.8c1.9,3.7,6.1,5.1,7.7,4.1c1.1-0.8,1.3-2.3,0.2-5.8c-0.1-0.4-0.3-0.5-0.7-0.3c-0.2,0.1-1.7,0.6-2.4-0.3C46.9,88.2,48.5,87.2,49,87 M43.4,113.3l-19.1-0.1c-0.6,0-1.2,0.6-1.2,1.2c0,0.6,0.6,1.2,1.2,1.2l19-0.1C43.2,114.8,43.3,114.1,43.4,113.3" />
  </svg>
)

const IdealLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 110 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="55" y="18" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" fill="#008e9b" letterSpacing="-0.04em">ideal</text>
    <text x="55" y="29" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400" fontSize="9" fill="#475569" letterSpacing="0.13em">HEATING</text>
    <path d="M15,34 Q55,39 95,34" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const BaxiLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="40" y="28" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="27" fill="#0c4c92" letterSpacing="0.01em">BAXI</text>
  </svg>
)

const GlowwormLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 150 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="18" r="7" fill="#facc15" />
    <circle cx="12" cy="18" r="4" fill="#ffffff" opacity="0.6" />
    <text x="25" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16.5" fill="#1e293b">Glow</text>
    <text x="66" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16.5" fill="#ef4444">·</text>
    <text x="73" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16.5" fill="#1e293b">worm</text>
    <text x="25" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="7.5" fill="#64748b" letterSpacing="0.05em">The energy you need</text>
  </svg>
)

const GasSafeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 50" className={className} xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,42 25,8 45,42" fill="#facc15" stroke="#000000" strokeWidth="2.5" strokeLinejoin="miter" />
    <polygon points="9,32 41,32 41,38 9,38" fill="#000000" />
    <text x="25" y="37" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="5.5" fill="#facc15" textAnchor="middle" letterSpacing="0.08em">SAFE</text>
    <text x="25" y="21" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="7" fill="#000000" textAnchor="middle">GAS</text>
    <path d="M25,23 C23,24 23,27 25,29 C27,31 29,29 29,27 C29,25 28,24 27,23 Z" fill="#000000" />
    <text x="50" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" fill="#1e293b" letterSpacing="0.02em">REGISTERED</text>
    <text x="50" y="32" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6.5" fill="#64748b" letterSpacing="0.05em">GAS SAFE REGISTER</text>
  </svg>
)

const WhichLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 140 45" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="136" height="41" rx="4" fill="#ffffff" stroke="#d9232a" strokeWidth="2.5" />
    <polygon points="120,2 138,2 138,20" fill="#d9232a" />
    <text x="12" y="28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#d9232a">Which?</text>
    <text x="12" y="38" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="7" fill="#1e293b">Trusted Trader</text>
  </svg>
)

const CheckatradeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 180 45" className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#d9232a">Checka</text>
    <text x="75" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#0c4c92">trade</text>
    <text x="5" y="36" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="8" fill="#64748b">Where reputation matters</text>
  </svg>
)

const TrustpilotLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 45" className={className} xmlns="http://www.w3.org/2000/svg">
    <polygon points="15,6 18,15 27,15 20,20 23,29 15,23 7,29 10,20 3,15 12,15" fill="#00b67a" />
    <text x="32" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#1e293b">Trustpilot</text>
    <rect x="32" y="28" width="90" height="12" fill="#00b67a" rx="2" />
    <g fill="#ffffff">
      <polygon points="41,30 42,33 45,33 43,35 44,38 41,36 38,38 39,35 37,33 40,33" />
      <polygon points="59,30 60,33 63,33 61,35 62,38 59,36 56,38 57,35 55,33 58,33" />
      <polygon points="77,30 78,33 81,33 79,35 80,38 77,36 74,38 75,35 73,33 76,33" />
      <polygon points="95,30 96,33 99,33 97,35 98,38 95,36 92,38 93,35 91,33 94,33" />
      <polygon points="113,30 114,33 117,33 115,35 116,38 113,36 110,38 111,35 109,33 112,33" />
    </g>
  </svg>
)

export default function Home() {
  // Quote form state
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [postcode, setPostcode] = useState('')
  const [helpText, setHelpText] = useState('')
  
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Hero form independent states
  const [heroService, setHeroService] = useState('')
  const [heroDetails, setHeroDetails] = useState('')
  const [heroStatus, setHeroStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [heroError, setHeroError] = useState('')

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1
    const n2 = Math.floor(Math.random() * 9) + 1
    setCaptcha({ num1: n1, num2: n2 })
  }

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
      const expectedAnswer = (captcha.num1 + captcha.num2).toString()
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone,
          email, 
          message: `Homepage Quote Request:\nPostcode: ${postcode}\nHow can we help: ${helpText}`,
          captchaNum1: captcha.num1,
          captchaNum2: captcha.num2,
          captchaAnswer: expectedAnswer
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
      generateCaptcha()
    }
  }

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !email || !heroService || !heroDetails) {
      setHeroStatus('error')
      setHeroError('Please fill in all fields.')
      return
    }

    setHeroStatus('submitting')
    setHeroError('')

    try {
      const expectedAnswer = (captcha.num1 + captcha.num2).toString()
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone,
          email, 
          message: `Hero Quote Request:\nService: ${heroService}\nDetails: ${heroDetails}`,
          captchaNum1: captcha.num1,
          captchaNum2: captcha.num2,
          captchaAnswer: expectedAnswer
        }),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setHeroStatus('success')
        setName('')
        setPhone('')
        setEmail('')
        setHeroService('')
        setHeroDetails('')
      } else {
        throw new Error(data.error || 'Server error')
      }
    } catch (err: any) {
      setHeroStatus('error')
      setHeroError(err.message || 'Something went wrong. Please try calling us directly.')
      generateCaptcha()
    }
  }

  const servicesList = [
    {
      title: 'Plumbing',
      description: 'From leaks and drips to full bathroom installations.',
      iconUrl: '/icons/plumbing.png',
      color: 'text-blue-500 bg-blue-50 border-blue-100',
      slug: 'emergency-callouts'
    },
    {
      title: 'Boiler Repairs',
      description: 'Expert diagnostics and repairs for all boiler makes.',
      iconUrl: '/icons/boiler.png',
      color: 'text-orange-500 bg-orange-50 border-orange-100',
      slug: 'boiler-servicing-installation-repairs'
    },
    {
      title: 'Heating Services',
      description: 'Keep your home warm with our heating solutions.',
      iconUrl: '/icons/heating.png',
      color: 'text-red-500 bg-red-50 border-red-100',
      slug: 'boiler-servicing-installation-repairs'
    },
    {
      title: 'Emergency Callouts',
      description: '24/7 callout for urgent plumbing & heating issues.',
      iconUrl: '/icons/emergency.png',
      color: 'text-red-600 bg-red-50 border-red-100',
      slug: 'emergency-callouts'
    },
    {
      title: 'Installations',
      description: 'Boilers, bathrooms, and heating system installations.',
      iconUrl: '/icons/installations.png',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      slug: 'gas-installations'
    }
  ]

  return (    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-[72px] md:pt-[80px]">
        
        {/* HERO SECTION */}
        <section className="relative bg-white pt-6 pb-8 lg:pt-8 lg:pb-10 overflow-hidden">
          {/* Family Plumber Background Image Framed Center-Left (Heads 100% Intact, Shifted Left) */}
          <div className="absolute right-[12%] xl:right-[15%] top-0 bottom-0 w-full lg:w-[54%] xl:w-[52%] h-full z-0 lg:block hidden overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
              <img 
                src="/family-hero.png" 
                alt="RH Plumbing &amp; Heating family" 
                className="w-full h-full object-cover object-top"
              />
              {/* Seamless left and right gradient fade overlays with wider smooth blur */}
              <div className="absolute inset-y-0 left-0 w-48 sm:w-64 lg:w-72 bg-gradient-to-r from-white via-white/95 via-white/75 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-48 sm:w-64 lg:w-72 bg-gradient-to-l from-white via-white/95 via-white/75 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            </div>
          </div>

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Header, Copy, Buttons & Trust Bar */}
              <div className="lg:col-span-7 space-y-5 pt-1">
                
                {/* Orange Tagline */}
                <p className="text-xs sm:text-base font-black uppercase tracking-wider text-[#ff5500]">
                  YOUR LOCAL PLUMBING &amp; HEATING EXPERTS
                </p>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-black leading-[1.08] text-slate-900 tracking-tight">
                  Trusted by Families.<br />
                  Recommended by Locals.
                </h1>

                {/* Paragraph */}
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                  RH Plumbing &amp; Heating is a family-run business delivering honest advice, quality workmanship and reliable service across our local community.
                </p>

                {/* Hero Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center pt-1">
                  <a 
                    href="#quote-form" 
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff5500] hover:from-[#e56000] hover:to-[#e54b00] px-6 py-3.5 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer text-center"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Get My Quote</span>
                  </a>

                  <a 
                    href={siteConfig.contact.primaryPhoneHref} 
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-[#104d96] bg-white hover:bg-slate-50 px-6 py-3.5 text-[#104d96] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs active:scale-95 transition-all cursor-pointer text-center"
                  >
                    <Phone className="h-4.5 w-4.5 text-[#104d96] fill-[#104d96]" />
                    <span>Speak to an Expert</span>
                  </a>
                </div>

                {/* Horizontal Trust Bar (Super Responsive: 2x2 on Mobile, 1x4 on Desktop) */}
                <div className="pt-5 max-w-[640px] w-full">
                  <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-5 shadow-lg shadow-slate-200/50">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
                      
                      {/* Item 1 */}
                      <div className="px-2 pt-2 sm:pt-0 space-y-1.5 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] text-slate-900 leading-tight">Local &amp; Family Run</h4>
                        <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold leading-tight">Proudly serving our community</p>
                      </div>

                      {/* Item 2 */}
                      <div className="px-2 pt-2 sm:pt-0 space-y-1.5 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 11 2 2 4-4" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] text-slate-900 leading-tight">Trusted &amp; Rated</h4>
                        <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold leading-tight">5★ reviews from happy customers</p>
                      </div>

                      {/* Item 3 */}
                      <div className="px-2 pt-3 sm:pt-0 space-y-1.5 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6">
                            <circle cx="9" cy="12" r="3" />
                            <path d="M15 9l6-6M9 21v-6" />
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] text-slate-900 leading-tight">Upfront Pricing</h4>
                        <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold leading-tight">No surprises, just honest prices</p>
                      </div>

                      {/* Item 4 */}
                      <div className="px-2 pt-3 sm:pt-0 space-y-1.5 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] text-slate-900 leading-tight">Reliable &amp; Tidy</h4>
                        <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold leading-tight">Respect for your home</p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* FLOATING GOOGLE RATING SPEECH BUBBLE CARD (Matching Concept PDF & Screenshot) */}
              <div className="absolute bottom-2 left-[46%] xl:left-[48%] hidden xl:block z-20">
                <div className="relative bg-white rounded-2xl p-3.5 px-5 shadow-2xl border border-slate-100 text-center min-w-[150px] transform hover:scale-105 transition-transform">
                  {/* Left speech bubble pointer caret */}
                  <div className="absolute -left-2 top-7 w-0 h-0 border-t-[7px] border-t-transparent border-r-[9px] border-r-white border-b-[7px] border-b-transparent drop-shadow-xs" />
                  
                  <div className="flex items-center justify-center gap-0.5 text-slate-900 font-extrabold text-base">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <span className="text-lg font-black text-slate-900 leading-none">5.0</span>
                    <div className="flex text-amber-400 gap-0.5">
                      <Star className="h-3.5 w-3.5 fill-current text-amber-400 stroke-none" />
                      <Star className="h-3.5 w-3.5 fill-current text-amber-400 stroke-none" />
                      <Star className="h-3.5 w-3.5 fill-current text-amber-400 stroke-none" />
                      <Star className="h-3.5 w-3.5 fill-current text-amber-400 stroke-none" />
                      <Star className="h-3.5 w-3.5 fill-current text-amber-400 stroke-none" />
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold block mt-1">From 120+ reviews</span>
                </div>
              </div>

              {/* RIGHT COLUMN: Free Quote Form Card & Dark Blue Callout Box */}
              <div className="lg:col-span-5 flex flex-col items-end justify-start space-y-3 relative z-10 w-full" id="quote-form">
                
                {/* Mobile Family Image Card */}
                <div className="lg:hidden flex justify-center w-full">
                  <div className="relative w-full max-w-[440px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src="/family-hero.png" 
                      alt="RH Plumbing &amp; Heating family" 
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Google rating overlay for mobile */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-xl p-2 px-3 shadow-md">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black text-slate-900">5.0</span>
                        <div className="flex text-amber-400 gap-0.5">
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-500 font-semibold block">From 120+ reviews</span>
                    </div>
                  </div>
                </div>

                {/* Quote Form Card */}
                {heroStatus === 'success' ? (
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl text-center space-y-4 w-full max-w-[350px]">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-800">Quote Request Received!</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Thanks, we will get back to you with a free, no-obligation quote within 1 hour.
                    </p>
                    <button 
                      onClick={() => setHeroStatus('idle')}
                      className="rounded-xl border border-slate-200 hover:bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-5 shadow-xl space-y-3 w-full max-w-[350px]">
                    <div className="text-center">
                      <h3 className="text-lg font-extrabold text-[#104d96] tracking-tight">Get Your Free Quote</h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">Fast, friendly &amp; no obligation</p>
                    </div>

                    <form onSubmit={handleHeroFormSubmit} className="space-y-2.5">
                      {/* Inputs */}
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 text-slate-400">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
                        />
                      </div>

                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                        </span>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number"
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
                        />
                      </div>

                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                          <Mail className="h-3.5 w-3.5 text-slate-400" />
                        </span>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
                        />
                      </div>

                      <div className="relative">
                        <select
                          required
                          value={heroService}
                          onChange={(e) => setHeroService(e.target.value)}
                          className={`w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all appearance-none shadow-2xs ${heroService ? 'text-slate-800 font-medium' : 'text-slate-400 font-medium'}`}
                        >
                          <option value="" disabled>What do you need help with?</option>
                          <option value="Plumbing Repairs">Plumbing Repairs</option>
                          <option value="Boiler Servicing &amp; Installation">Boiler Servicing &amp; Installation</option>
                          <option value="Heating Installations">Heating Installations</option>
                          <option value="Emergency Callouts">Emergency Callouts</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 text-slate-400">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>

                      <div>
                        <textarea
                          required
                          rows={2}
                          value={heroDetails}
                          onChange={(e) => setHeroDetails(e.target.value)}
                          placeholder="Tell us a few details..."
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all resize-none shadow-2xs"
                        />
                      </div>

                      {heroStatus === 'error' && (
                        <div className="text-[11px] font-bold text-red-500 bg-red-50 px-2.5 py-1.5 rounded-xl border border-red-100 text-center animate-shake">
                          <span>{heroError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={heroStatus === 'submitting'}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff5500] hover:from-[#e56000] hover:to-[#e54b00] text-white py-3 text-xs sm:text-sm font-black tracking-wider transition-all duration-300 shadow-md shadow-orange-500/20 active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {heroStatus === 'submitting' ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Get My Quote</span>
                            <ArrowRight className="h-4 w-4 stroke-[3]" />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium pt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3 w-3 text-slate-400">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>We aim to respond within 1 hour</span>
                    </div>

                  </div>
                )}

                {/* Need Help Now Dark Blue Callout Box */}
                <a 
                  href={siteConfig.contact.primaryPhoneHref}
                  className="w-full max-w-[350px] bg-[#0c4c92] hover:bg-[#093c75] text-white rounded-2xl p-3.5 px-5 shadow-lg transition-all cursor-pointer group flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs font-black text-white uppercase tracking-wider">Need Help Now?</p>
                    <p className="text-[10.5px] text-blue-200 font-medium">We offer same-day callouts</p>
                    <p className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2 pt-0.5">
                      <Phone className="h-4.5 w-4.5 text-white fill-white" />
                      <span>{siteConfig.contact.primaryPhone}</span>
                    </p>
                  </div>
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* DEDICATED ACCREDITATION LOGOS STRIP SECTION (Extra Large 5 Partner Logos) */}
        <section className="bg-white border-t border-slate-100 py-10 md:py-14 relative z-10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
            {/* 5 Extra Large Partner Logos Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 md:gap-18">
              <img src="/logos/gassafe-exact.png" alt="Gas Safe Register" className="h-20 md:h-24 w-auto object-contain" />
              <img src="/logos/worcester-exact.png" alt="Worcester Bosch Accredited Installer" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/logos/which-exact.png" alt="Which? Trusted Trader" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/logos/checkatrade-exact.png" alt="Checkatrade" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/logos/trustpilot-exact.png" alt="Trustpilot 5 Stars" className="h-16 md:h-20 w-auto object-contain" />
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Heading block */}
            <div className="text-center space-y-2 pb-12 max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff6b00]">
                OUR SERVICES
              </p>
              <h2 className="text-3xl md:text-[38px] font-black text-slate-800 leading-tight">
                Complete Plumbing &amp; Heating Solutions
              </h2>
            </div>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {servicesList.map((service, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="group rounded-xl border border-slate-100 p-8 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-200 flex flex-col items-center text-center justify-between min-h-[285px]"
                  >
                    <div className="space-y-4 flex flex-col items-center w-full">
                      {/* Clean Icon sitting directly on the card */}
                      <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <img 
                          src={service.iconUrl} 
                          alt={service.title} 
                          className="w-14 h-14 object-contain"
                        />
                      </div>

                      {/* Info */}
                      <div className="space-y-2 w-full">
                        <h3 className="font-extrabold text-[17px] text-slate-800 tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-[12.5px] leading-relaxed text-slate-400 font-semibold">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-[13.5px] font-bold text-blue-600 hover:text-blue-800 transition-colors mt-4"
                    >
                      <span>Learn More &rarr;</span>
                    </Link>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* THREE-COLUMN INFO SECTION */}
        <section className="py-20 bg-slate-50/50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              
              {/* Col 1: Why Choose Us */}
              <div className="lg:pr-8 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff6b00]">
                    WHY CHOOSE US?
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-4 pt-2">
                  {[
                    'Experienced & Qualified Engineers',
                    'Transparent Pricing, No Hidden Fees',
                    'High Quality Workmanship',
                    'Friendly, Local & Reliable',
                    'Work Guaranteed for Peace of Mind'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5.5 h-5.5 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[13.5px] text-slate-700 font-bold tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 10 Year Guarantee card */}
                <div className="rounded-xl border border-blue-600 bg-white overflow-hidden flex items-stretch max-w-sm mt-6 shadow-xs">
                  {/* Blue left-side icon badge */}
                  <div className="w-16 bg-[#0d4c92] text-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 11 11 13 15 9" strokeWidth="3" />
                    </svg>
                  </div>
                  {/* Right-side text */}
                  <div className="p-3.5 flex flex-col justify-center">
                    <h4 className="font-extrabold text-[15px] text-[#0d4c92] leading-tight">10 Year Guarantee</h4>
                    <p className="text-[11.5px] text-slate-400 font-semibold mt-0.5">On selected boiler installations*</p>
                  </div>
                </div>
              </div>

              {/* Col 2: Our Simple Process */}
              <div className="lg:px-8 pt-8 lg:pt-0 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff6b00]">
                    OUR SIMPLE PROCESS
                  </p>
                </div>

                {/* Timeline block */}
                <div className="relative pl-10 space-y-8 pt-2">
                  {/* Dotted vertical line */}
                  <div className="absolute left-[20px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-250" />

                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-[#0d4c92] text-white flex items-center justify-center text-xs font-black">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-800 leading-tight">Get in Touch</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-450 font-medium">
                        Call us or fill out our quick form and tell us what you need.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-[#f97316] text-white flex items-center justify-center text-xs font-black">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-800 leading-tight">We Assess</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-450 font-medium">
                        We&apos;ll assess the issue and provide clear options and pricing.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-[#d9383a] text-white flex items-center justify-center text-xs font-black">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-800 leading-tight">We Get It Done</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-450 font-medium">
                        Our expert team gets the job done right, on time.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Col 3: Testimonial */}
              <div className="lg:pl-8 pt-8 lg:pt-0 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff6b00]">
                    WHAT OUR CUSTOMERS SAY
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="relative rounded-xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs space-y-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Top line with Stars and Quote mark */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400 gap-0.5">
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                      </div>
                      <Quote className="h-8 w-8 text-slate-100 stroke-[3]" />
                    </div>

                    {/* Review Text */}
                    <p className="text-[13.5px] leading-relaxed text-slate-500 font-medium mt-4">
                      Brilliant service from start to finish. Quick response, great communication and the work was completed to a very high standard. Highly recommended!
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-800 leading-tight">Sarah T.</h5>
                      <p className="text-[11.5px] text-slate-400 font-semibold mt-0.5">Bedford</p>
                    </div>

                    {/* Google G Logo */}
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* GET A FREE QUOTE FORM SECTION */}
        <section id="quote-form" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* The single grey-blue container card enclosing both columns */}
            <div className="bg-[#f4f7f9] border border-slate-200/40 rounded-3xl p-8 md:p-12 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-6">
                  
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff6b00]">
                    GET A FREE QUOTE
                  </p>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                    Let&apos;s Get Your Job Sorted
                  </h2>

                  <p className="text-[13.5px] leading-relaxed text-slate-600 font-medium">
                    Fill out the form and we&apos;ll get back to you as soon as possible with a free, no-obligation quote.
                  </p>

                  {/* Contact detail blocks */}
                  <div className="space-y-5 pt-4 border-t border-slate-200/60 max-w-md">
                    
                    {/* Phone block */}
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-slate-850 flex-shrink-0 mt-1" />
                      <div>
                        <a href={siteConfig.contact.primaryPhoneHref} className="font-extrabold text-[15px] text-slate-850 hover:text-[#ff6b00] transition-colors block leading-tight">
                          {siteConfig.contact.primaryPhone}
                        </a>
                        <span className="text-[11px] text-[#ff6b00] font-semibold mt-1 block">24/7 Emergency Callout</span>
                      </div>
                    </div>

                    {/* Email block */}
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-slate-850 flex-shrink-0 mt-1" />
                      <div>
                        <a href={`mailto:${siteConfig.contact.email}`} className="font-extrabold text-[15px] text-slate-850 hover:text-[#ff6b00] transition-colors block leading-tight">
                          {siteConfig.contact.email}
                        </a>
                        <span className="text-[11px] text-slate-400 font-medium mt-1 block">We aim to reply within 1 hour</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right Form Column */}
                <div className="lg:col-span-7">
                  
                  {status === 'success' ? (
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
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
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

                        {/* Phone */}
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
                        {/* Email */}
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

                        {/* Postcode */}
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

                      {/* How can we help */}
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

                      {/* Error messaging inside form card */}
                      {status === 'error' && (
                        <div className="text-[12.5px] font-bold text-red-500 bg-red-50 px-3.5 py-2.5 rounded-xl border border-red-100 flex items-center justify-center animate-shake w-full">
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Submit Button */}
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
                  )}

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* LEADING BOILER BRANDS SECTION */}
        <section className="py-12 md:py-16 bg-slate-50/60 border-y border-slate-100/80">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 text-center space-y-8">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                Authorized &amp; Certified Installers For Leading UK Brands
              </p>
            </div>

            {/* 6 Clean Partner Brand Logos Grid */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <WorcesterLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <VaillantLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <IdealLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <BaxiLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <GlowwormLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <GasSafeLogo className="h-10 md:h-14 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY REPAIRS & 6-GRID VALUE PROPS 2-CARD SPLIT BANNER SECTION */}
        <section className="py-12 md:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT CARD: Emergency Plumbing & Boiler Repairs Banner (Real Live HTML/React Component) */}
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/80 flex flex-col justify-between p-6 sm:p-9 min-h-[380px]">
                {/* Background Layer with Van Photo & Slanted Mask with Motion Blur Edge */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/van-hero.png" 
                    alt="RH Plumbing &amp; Heating Service Van" 
                    className="w-full h-full object-cover object-right"
                  />
                  {/* White Left Background Mask with Angled Slanted Cut */}
                  <div className="absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[62%] bg-white z-10 [clip-path:polygon(0_0,100%_0,74%_100%,0_100%)]" />
                  
                  {/* Soft Motion Blur Overlay Transition along the Diagonal Cut */}
                  <div className="absolute inset-y-0 left-0 w-full sm:w-[74%] lg:w-[68%] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 blur-[10px] [clip-path:polygon(66%_0,100%_0,78%_100%,44%_100%)] pointer-events-none" />
                </div>

                {/* Live Card Content (Headline, Subtitle & Checklist) */}
                <div className="relative z-20 max-w-md space-y-3.5">
                  <h3 className="text-2xl sm:text-[32px] font-black text-slate-900 leading-[1.12] tracking-tight">
                    Emergency Plumbing<br />&amp; Boiler Repairs
                  </h3>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-slate-600 leading-relaxed">
                    Fast response. Expert solutions.<br />
                    We&apos;re available 24/7.
                  </p>

                  {/* Live Checklist */}
                  <ul className="space-y-2.5 pt-1.5">
                    {[
                      'Rapid response – we aim to be with you fast',
                      'Boiler breakdowns & no heating issues',
                      'Burst pipes, leaks & blockages',
                      'Gas safe engineers you can trust'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-800">
                        <div className="w-5 h-5 rounded-full bg-[#104d96] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Interactive Red Callout Button */}
                <div className="relative z-20 pt-6 flex justify-start sm:justify-end">
                  <a 
                    href={siteConfig.contact.primaryPhoneHref}
                    className="inline-flex items-center gap-3.5 bg-gradient-to-r from-[#e53935] to-[#d32f2f] hover:from-[#c62828] hover:to-[#b71c1c] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-xl shadow-red-500/25 active:scale-95 transition-all cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-[#d32f2f] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-black leading-tight tracking-tight">
                        {siteConfig.contact.primaryPhone}
                      </div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-red-100 uppercase tracking-wider leading-none mt-0.5">
                        Call Now – 24/7
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* RIGHT CARD: 6 Grid Value Props Card (5 Cols) */}
              <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-y-8 gap-x-4 divide-x divide-slate-100 text-center">
                  
                  {/* Row 1, Col 1 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5.5 21a8.5 8.5 0 0 1 13 0" />
                        <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Local &amp; Reliable</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Proudly serving our local community</p>
                  </div>

                  {/* Row 1, Col 2 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <rect x="3" y="6" width="18" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M6 12h.01M18 12h.01" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Transparent Pricing</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">No hidden costs, just honest quotes</p>
                  </div>

                  {/* Row 1, Col 3 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Experienced Engineers</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Highly trained &amp; Gas Safe registered</p>
                  </div>

                  {/* Row 2, Col 1 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="m15 12-3-3 3-3" />
                        <path d="M9 18l3-3-3-3" />
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Quality Workmanship</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Standards you can trust, every time</p>
                  </div>

                  {/* Row 2, Col 2 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Fully Insured</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Complete peace of mind for your home</p>
                  </div>

                  {/* Row 2, Col 3 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Satisfaction Guaranteed</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">We won&apos;t leave until you&apos;re happy</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Linking Blocks */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 pb-16 pt-8 border-t border-slate-50">
          <RelatedServices />
          <RelatedPosts />
        </div>
      </main>

      <Footer />
    </div>
  )
}
