'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Icon } from './Icon'

type NavbarProps = {
  phone?: string
  links?: Array<{ label: string; href: string }>
  ctaLabel?: string
  ctaLink?: string
}

const defaultLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Facilities', href: '/#amenities' },
  { label: 'Residences', href: '/#residences' },
  { label: 'Contact', href: '/#contact' },
]

const isHashLink = (href: string) => href.startsWith('/#') || href.startsWith('#')

export const Navbar: React.FC<NavbarProps> = ({
  phone,
  links = defaultLinks,
  ctaLabel = 'Enquire',
  ctaLink = '/#contact',
}) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`navbar ${open ? 'nav-open' : ''} ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container navbar-inner">
        <Link href="/" aria-label="Aroha Living home">
          <Logo variant="light" />
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              {isHashLink(link.href) ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          {phone && (
            <a className="nav-phone" href={`tel:${phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={16} />
              <span>{phone}</span>
            </a>
          )}
          {isHashLink(ctaLink) ? (
            <a href={ctaLink} className="btn btn-outline nav-cta-btn">
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaLink} className="btn btn-outline nav-cta-btn">
              {ctaLabel}
            </Link>
          )}
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
