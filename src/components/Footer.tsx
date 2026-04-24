import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Icon } from './Icon'

type FooterProps = {
  phone?: string
  email?: string
  address?: string
  facebook?: string
  instagram?: string
  youtube?: string
}

export const Footer: React.FC<FooterProps> = ({
  phone,
  email,
  address,
  facebook,
  instagram,
  youtube,
}) => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo variant="light" />
            <p className="footer-about">
              A sanctuary of wellness, care and vibrant community life crafted for the most cherished
              chapter of your story.
            </p>
            <div className="footer-socials">
              {facebook && <a href={facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><span>f</span></a>}
              {instagram && <a href={instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><span>ig</span></a>}
              {youtube && <a href={youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><span>yt</span></a>}
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#amenities">Amenities</Link></li>
              <li><Link href="/#living">Living Options</Link></li>
              <li><Link href="/blog">Insights</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li>Independent Living</li>
              <li>Assisted Living</li>
              <li>Memory Care</li>
              <li>Wellness Programs</li>
              <li>Medical Services</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {phone && (
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>
                    <Icon name="phone" size={14} /> {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    <Icon name="mail" size={14} /> {email}
                  </a>
                </li>
              )}
              {address && (
                <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <Icon name="mapPin" size={14} />
                  <span style={{ whiteSpace: 'pre-line' }}>{address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Aroha Living. All rights reserved.</span>
          <span>Designed with care for life&apos;s finest years.</span>
        </div>
      </div>
    </footer>
  )
}
