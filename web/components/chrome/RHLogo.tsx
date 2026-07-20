import React from 'react'

interface RHLogoProps {
  theme?: 'light' | 'dark'
  className?: string
}

export function RHLogo({ theme = 'light', className = '' }: RHLogoProps) {
  // Slate-600/700 for light theme text, White for dark theme text
  const textColor = theme === 'dark' ? '#ffffff' : '#4b5563'

  return (
    <svg
      viewBox="0 0 260 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-11 md:h-14 w-auto ${className}`}
    >
      <defs>
        {/* Flame Gradient (Yellow at top, Orange-Red at bottom) */}
        <linearGradient id="flame-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" /> {/* Amber 500 */}
          <stop offset="35%" stopColor="#ea580c" /> {/* Orange 600 */}
          <stop offset="100%" stopColor="#dc2626" /> {/* Red 600 */}
        </linearGradient>

        {/* Water Droplet Gradient (Cyan at top, Blue at bottom) */}
        <linearGradient id="drop-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
          <stop offset="100%" stopColor="#1d4ed8" /> {/* Blue 700 */}
        </linearGradient>

        {/* Circular mask to cut out the background of the flame around the droplet */}
        <mask id="flame-cutout-mask">
          <rect x="-10" y="-10" width="80" height="80" fill="#ffffff" />
          {/* Black circle cuts out the flame, leaving a transparent gap */}
          <circle cx="20" cy="40" r="13" fill="#000000" />
        </mask>
      </defs>

      {/* 1. Flame Background Graphic (with transparency cutout mask) */}
      <g transform="translate(16, 1)">
        {/* Main outer flame shape with the cutout mask applied */}
        <path
          d="M20 54C31.046 54 40 45.046 40 34C40 21 20 0 20 0S0 21 0 34C0 45.046 8.954 54 20 54Z"
          fill="url(#flame-grad)"
          mask="url(#flame-cutout-mask)"
        />
        
        {/* Inner nested blue water droplet, positioned inside the cutout */}
        <path
          d="M20 49C25 49 29 45 29 40C29 34 20 23 20 23S11 34 11 40C11 45 15 49 20 49Z"
          fill="url(#drop-grad)"
        />
        
        {/* Left-side curved highlight inside the droplet */}
        <path
          d="M15 36.5C13.5 38.5 13.5 41.5 15 43.5"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      {/* 2. Letters R and H (rendered on top, merged using negative letter-spacing) */}
      <text
        x="6"
        y="45"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="44"
        fill={textColor}
        letterSpacing="-4.8"
      >
        RH
      </text>

      {/* 3. Text Label: Plumbing & Heating */}
      <text
        x="78"
        y="25"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="17.5"
        fill={textColor}
        letterSpacing="-0.2"
      >
        Plumbing &
      </text>
      <text
        x="78"
        y="46"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="17.5"
        fill={textColor}
        letterSpacing="-0.2"
      >
        Heating
      </text>
    </svg>
  )
}
