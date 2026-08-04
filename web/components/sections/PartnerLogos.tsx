'use client'

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

export function PartnerLogosSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50/60 border-y border-slate-100/80">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 text-center space-y-8">
        <div>
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
            Installing &amp; Servicing Leading UK Boiler Brands
          </p>
        </div>

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
  )
}

export function AccreditedTradeLogosSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 text-center space-y-8">
        <div>
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
            Accredited &amp; Trusted By Leading UK Trade Bodies
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <GasSafeLogo className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <WorcesterLogo className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <WhichLogo className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <CheckatradeLogo className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
            <TrustpilotLogo className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
