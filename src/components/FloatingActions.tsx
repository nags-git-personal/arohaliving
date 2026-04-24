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
          <Icon name="whatsapp" size={28} color="white" />
        </a>
      )}
      {cleanPhone && (
        <a className="call" href={`tel:${cleanPhone}`} aria-label="Call us">
          <Icon name="phone" size={22} />
        </a>
      )}
    </div>
  )
}
