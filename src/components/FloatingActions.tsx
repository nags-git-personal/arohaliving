import React from 'react'
import { Icon } from './Icon'

type Props = {
  phone?: string
  whatsapp?: string
}

export const FloatingActions: React.FC<Props> = ({ phone, whatsapp }) => {
  const cleanPhone = phone?.replace(/\s/g, '')
  const cleanWa = whatsapp?.replace(/[^\d+]/g, '')
  return (
    <div className="floating" aria-label="Quick contact">
      {cleanWa && (
        <a
          className="wa"
          href={`https://wa.me/${cleanWa.replace('+', '')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <span className="floating-icon"><Icon name="whatsapp" size={24} color="currentColor" /></span>
        </a>
      )}
      {cleanPhone && (
        <a className="call" href={`tel:${cleanPhone}`} aria-label="Call us">
          <span className="floating-icon"><Icon name="phone" size={20} color="currentColor" strokeWidth={1.8} /></span>
        </a>
      )}
    </div>
  )
}
