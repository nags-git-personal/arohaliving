import React from 'react'

type LogoProps = {
  variant?: 'light' | 'dark'
  size?: number
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 40 }) => {
  const gold = '#c9a96e'
  const text = variant === 'light' ? '#f5f0e8' : '#1a1a1a'
  return (
    <div className="aroha-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="32" cy="32" r="30" stroke={gold} strokeWidth="1.5" />
        <path
          d="M32 14c-6 8-10 14-10 20a10 10 0 0020 0c0-6-4-12-10-20z"
          fill={gold}
          opacity="0.9"
        />
        <path
          d="M14 38c6-2 12-2 18 0s12 2 18 0"
          stroke={gold}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="32" cy="34" r="2" fill={text} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 500,
            color: text,
            letterSpacing: '0.02em',
          }}
        >
          Aroha
        </span>
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: gold,
            marginTop: 2,
          }}
        >
          Living
        </span>
      </div>
    </div>
  )
}
