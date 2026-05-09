import React from 'react'

const paths: Record<string, React.ReactNode> = {
  heart: <path d="M12 21s-7-4.35-7-10a5 5 0 019-3 5 5 0 019 3c0 5.65-7 10-7 10z" />,
  shield: <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />,
  utensils: (
    <>
      <path d="M4 3v7a3 3 0 003 3v8M10 3v7a3 3 0 01-3 3M18 3c-2 0-3 2-3 5s1 5 3 5v8" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M3 9v6M6 7v10M9 11h6M18 7v10M21 9v6" />
    </>
  ),
  book: <path d="M4 4h11a4 4 0 014 4v12H8a4 4 0 01-4-4V4zM4 16h15" />,
  leaf: <path d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16zM4 20l8-8" />,
  wifi: (
    <>
      <path d="M2 9a15 15 0 0120 0M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0" />
      <circle cx="12" cy="20" r="1.2" />
    </>
  ),
  bus: (
    <>
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v11H4V6zM4 12h16M4 17v2M20 17v2" />
      <circle cx="8" cy="17" r="1.5" />
      <circle cx="16" cy="17" r="1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20c0-2.5 2-4 4.5-4S22 17.5 22 20" />
    </>
  ),
  star: <path d="M12 3l2.8 6 6.2.9-4.5 4.4 1 6.3-5.5-3-5.5 3 1-6.3L3 9.9 9.2 9z" />,
  phone: <path d="M4 5a2 2 0 012-2h2l2 5-2 1a11 11 0 006 6l1-2 5 2v2a2 2 0 01-2 2A16 16 0 014 5z" />,
  mail: (
    <>
      <path d="M3 6h18v12H3z" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  home: (
    <>
      <path d="M3 12L12 3l9 9" />
      <path d="M9 21V12h6v9" />
      <path d="M5 21h14" />
    </>
  ),
  /* ── Amenity-specific icons ─────────────────────────────────────── */
  lotus: (
    <>
      <path d="M12 22c0-4-2-8-6-10 0 3 1 6 3 8" />
      <path d="M12 22c0-4 2-8 6-10 0 3-1 6-3 8" />
      <path d="M12 22V12" />
      <path d="M12 12c0-4-3-7-7-8 1 4 3 7 7 8" />
      <path d="M12 12c0-4 3-7 7-8-1 4-3 7-7 8" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 2A2.5 2.5 0 007 4.5v.5A2.5 2.5 0 004.5 7.5 2.5 2.5 0 002 10a2.5 2.5 0 001.5 2.3V14a2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5A2.5 2.5 0 0020.5 14v-1.7A2.5 2.5 0 0022 10a2.5 2.5 0 00-2.5-2.5A2.5 2.5 0 0017 5a2.5 2.5 0 00-2.5-2.5H9.5z" />
      <path d="M12 5v14M9 9h.01M15 9h.01M9 14h6" />
    </>
  ),
  footprint: (
    <>
      <ellipse cx="9" cy="7" rx="2.5" ry="3.5" />
      <ellipse cx="15" cy="8" rx="2" ry="3" />
      <path d="M8 13c-2 1-3 3-2.5 5 .4 1.5 2 2 3.5 1.5l3-1.5 3 1.5c1.5.5 3 0 3.5-1.5.5-2-.5-4-2.5-5" />
    </>
  ),
  temple: (
    <>
      <path d="M12 2L4 7v1h16V7z" />
      <path d="M5 8v12h14V8" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 20h18" />
      <circle cx="12" cy="13" r="1.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M4.5 6.5a5 5 0 000 10A5 5 0 009 12" />
      <path d="M9 12h6M15 12a5 5 0 010 10" />
      <circle cx="15" cy="22" r="1.5" />
      <path d="M9 6.5V4a2 2 0 014 0v2.5" />
    </>
  ),
  truck: (
    <>
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
      <path d="M10 8v5" />
      <path d="M7.5 10.5h5" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 2h6a1 1 0 011 1v1H8V3a1 1 0 011-1z" />
      <path d="M5 4h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  fileText: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </>
  ),
  eye: (
    <>
      <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  door: (
    <>
      <path d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16" />
      <path d="M3 21h18" />
      <path d="M9 3v18" />
      <circle cx="13" cy="12" r="1" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </>
  ),
  flame: (
    <>
      <path d="M8.5 14.5S7 13 7 10c0-2 1-4 3-5-1 2 0 4 1.5 5 .8-1.5 1.5-3 1-5C15 7 17 10 17 13c0 3-2 6-5 7-1-1-1.5-2.5-1.5-4s.5-2.5 1.5-3.5l-4 2z" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 2.7S6 9 6 14a6 6 0 0012 0C18 9 12 2.7 12 2.7z" />
    </>
  ),
  coffee: (
    <>
      <path d="M17 8h1a4 4 0 010 8h-1" />
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
      <path d="M6 2v3M10 2v3M14 2v3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </>
  ),
  bag: (
    <>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  whatsapp: (
    <path d="M20.5 3.5A10 10 0 003.5 16l-1.5 6 6-1.5A10 10 0 0020.5 3.5zM12 20a8 8 0 01-4.2-1.2l-.3-.2-3.5.9.9-3.4-.2-.3A8 8 0 1112 20zm4.5-5.3c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 01-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 000-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.4a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.8 4.8 0 001 2.6 11 11 0 004.2 3.7c2.6 1 2.6.7 3.1.7a2.5 2.5 0 001.6-1.1 2 2 0 00.1-1.1c-.1-.1-.2-.2-.4-.3z" />
  ),
}

type IconProps = {
  name: keyof typeof paths | string
  size?: number
  color?: string
  strokeWidth?: number
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', strokeWidth = 1.5 }) => {
  const path = paths[name]
  if (!path) return null
  const solid = name === 'whatsapp'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={solid ? color : 'none'}
      stroke={solid ? 'none' : color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {path}
    </svg>
  )
}
