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
  activity: (
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  ),
  home: (
    <>
      <path d="M3 12L12 3l9 9" />
      <path d="M9 21V12h6v9" />
      <path d="M5 21h14" />
    </>
  ),
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
