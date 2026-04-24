'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Icon } from './Icon'

type NavbarProps = {
  phone?: string
}

export const Navbar: React.FC<NavbarProps> = ({ phone }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`navbar ${open ? 'nav-open' : ''}`}
      style={scrolled ? { background: 'rgba(13,13,13,0.96)' } : undefined}
    >
      <div className="container navbar-inner">
        <Link href="/" aria-label="Aroha Living home">
          <Logo variant="light" />
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#amenities">Amenities</Link></li>
          <li><Link href="/#living">Living Options</Link></li>
          <li><Link href="/blog">Insights</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <div className="nav-cta">
          {phone && (
            <a className="nav-phone" href={`tel:${phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={16} />
              <span>{phone}</span>
            </a>
          )}
          <Link href="/#contact" className="btn btn-outline" style={{ padding: '10px 20px' }}>
            Enquire
          </Link>
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
