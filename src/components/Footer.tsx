import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Icon } from './Icon'

type FooterProps = {
  phone?: string
  email?: string
  address?: string
  whatsapp?: string
  facebook?: string
  instagram?: string
  youtube?: string
  about?: string
  exploreHeading?: string
  exploreLinks?: Array<{ label: string; href: string }>
  careHeading?: string
  careItems?: Array<{ label: string }>
  contactHeading?: string
  bottomLeft?: string
  bottomRight?: string
}

const isHashLink = (href: string) => href.startsWith('/#') || href.startsWith('#')

export const Footer: React.FC<FooterProps> = ({
  phone,
  email,
  address,
  whatsapp,
  facebook,
  instagram,
  youtube,
  about = 'A sanctuary of wellness, care and vibrant community life crafted for the most cherished chapter of your story.',
  exploreHeading = 'Explore',
  exploreLinks = [
    { label: 'About Us', href: '/#about' },
    { label: 'Facilities', href: '/#amenities' },
    { label: 'Master Plan', href: '/#masterplan' },
    { label: 'Residences', href: '/#residences' },
    { label: 'Contact Us', href: '/#contact' },
  ],
  careHeading = 'Care',
  careItems = [
    { label: 'Active Adult Community' },
    { label: 'Care-ready support' },
    { label: 'Wellness and engagement' },
    { label: 'Medical and safety services' },
    { label: 'Customised daily living' },
  ],
  contactHeading = 'Contact',
  bottomLeft = 'Aroha Living. All rights reserved.',
  bottomRight = "Designed with care for life's finest years.",
}) => {
  const year = new Date().getFullYear()
  const waDigits = whatsapp?.replace(/[^\d+]/g, '').replace('+', '')
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo variant="light" />
            <p className="footer-about">{about}</p>
            <div className="footer-socials">
              {facebook && <a href={facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><span>f</span></a>}
              {instagram && <a href={instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><span>ig</span></a>}
              {youtube && <a href={youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><span>yt</span></a>}
            </div>
          </div>
          <div>
            <h4>{exploreHeading}</h4>
            <ul>
              {exploreLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  {isHashLink(link.href) ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{careHeading}</h4>
            <ul>
              {careItems.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{contactHeading}</h4>
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
              {whatsapp && waDigits && (
                <li>
                  <a href={`https://wa.me/${waDigits}`} target="_blank" rel="noreferrer">
                    <Icon name="whatsapp" size={14} /> {whatsapp}
                  </a>
                </li>
              )}
              {address && (
                <li className="footer-address-item">
                  <Icon name="mapPin" size={14} />
                  <span className="footer-address-text">{address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {bottomLeft}</span>
          <span>{bottomRight}</span>
        </div>
      </div>
    </footer>
  )
}
