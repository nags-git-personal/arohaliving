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
}

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const raw = await getSettings()
  const s: Settings = (raw || {}) as Settings

  return (
    <>
      <Navbar phone={s.phone} />
      {children}
      <Footer
        phone={s.phone}
        email={s.email}
        address={s.address}
        whatsapp={s.whatsapp}
        facebook={s.facebook}
        instagram={s.instagram}
        youtube={s.youtube}
      />
      <FloatingActions phone={s.phone} whatsapp={s.whatsapp} />
    </>
  )
}
