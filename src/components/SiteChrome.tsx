import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingActions } from './FloatingActions'
import { getSettings } from '@/lib/payload-helpers'

type Settings = {
  phone?: string
  email?: string
  address?: string
  whatsapp?: string
  facebook?: string
  instagram?: string
  youtube?: string
  navLinks?: Array<{ label?: string; href?: string }>
  navCtaLabel?: string
  navCtaLink?: string
  footerAbout?: string
  footerExploreHeading?: string
  footerExploreLinks?: Array<{ label?: string; href?: string }>
  footerCareHeading?: string
  footerCareItems?: Array<{ label?: string }>
  footerContactHeading?: string
  footerBottomLeft?: string
  footerBottomRight?: string
}

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const raw = await getSettings()
  const s: Settings = (raw || {}) as Settings

  return (
    <>
      <Navbar
        phone={s.phone}
        links={s.navLinks?.filter((link) => link.label && link.href).map((link) => ({
          label: link.label || '',
          href: link.href || '/',
        }))}
        ctaLabel={s.navCtaLabel}
        ctaLink={s.navCtaLink}
      />
      {children}
      <Footer
        phone={s.phone}
        email={s.email}
        address={s.address}
        whatsapp={s.whatsapp}
        facebook={s.facebook}
        instagram={s.instagram}
        youtube={s.youtube}
        about={s.footerAbout}
        exploreHeading={s.footerExploreHeading}
        exploreLinks={s.footerExploreLinks?.filter((link) => link.label && link.href).map((link) => ({
          label: link.label || '',
          href: link.href || '/',
        }))}
        careHeading={s.footerCareHeading}
        careItems={s.footerCareItems?.filter((item) => item.label).map((item) => ({
          label: item.label || '',
        }))}
        contactHeading={s.footerContactHeading}
        bottomLeft={s.footerBottomLeft}
        bottomRight={s.footerBottomRight}
      />
      <FloatingActions phone={s.phone} whatsapp={s.whatsapp} />
    </>
  )
}
