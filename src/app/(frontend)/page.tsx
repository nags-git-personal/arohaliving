import React from 'react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { VideoSection } from '@/components/VideoSection'
import { AmenitiesGrid } from '@/components/AmenitiesGrid'
import { Experiences } from '@/components/Experiences'
import { LivingOptions } from '@/components/LivingOptions'
import { Contact } from '@/components/Contact'
import { getSettings, getAmenities } from '@/lib/payload-helpers'

export default async function HomePage() {
  const [settings, amenities] = await Promise.all([getSettings(), getAmenities()])

  const s = (settings || {}) as {
    phone?: string
    email?: string
    address?: string
    whatsapp?: string
    heroSlides?: Array<{ heading?: string; subheading?: string }>
    walkthroughVideo?: { url?: string } | null
    walkthroughVideoTitle?: string | null
    walkthroughVideoCaption?: string | null
  }

  const heroSlide = s.heroSlides?.[0]
  const videoUrl = typeof s.walkthroughVideo === 'object' ? s.walkthroughVideo?.url : null

  return (
    <>
      <Hero heading={heroSlide?.heading} subheading={heroSlide?.subheading} />
      <About />
      <VideoSection
        videoUrl={videoUrl}
        title={s.walkthroughVideoTitle}
        caption={s.walkthroughVideoCaption}
      />
      <AmenitiesGrid items={amenities as never} />
      <Experiences />
      <LivingOptions />
      <Contact phone={s.phone} email={s.email} address={s.address} whatsapp={s.whatsapp} />
    </>
  )
}
