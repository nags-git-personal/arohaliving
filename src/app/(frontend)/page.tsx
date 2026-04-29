import React from 'react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { AmenitiesGrid } from '@/components/AmenitiesGrid'
import { LivingOptions } from '@/components/LivingOptions'
import { Contact } from '@/components/Contact'
import { getMediaUrl, getSettings } from '@/lib/payload-helpers'

export default async function HomePage() {
  const settings = await getSettings()

  const s = (settings || {}) as {
    phone?: string
    email?: string
    address?: string
    whatsapp?: string
    contactEyebrow?: string
    contactTitle?: string
    contactIntro?: string
    contactCallLabel?: string
    contactEmailLabel?: string
    contactWhatsappLabel?: string
    contactVisitLabel?: string
    contactHoursLabel?: string
    contactHoursValue?: string
    contactImage?: unknown
    contactImageUrl?: string
    heroBrandTitle?: string
    heroBrandCaption?: string
    heroMeta?: string
    heroSlides?: Array<{
      heading?: string
      subheading?: string
      caption?: string
      image?: unknown
      imageUrl?: string
    }>
    promiseEyebrow?: string
    promiseHeading?: string
    promiseBody?: string
    promiseStats?: Array<{ value?: string; label?: string }>
    careEyebrow?: string
    careHeading?: string
    careBody?: string
    partnerLabel?: string
    partnerUrl?: string
    careMainImage?: unknown
    careMainImageUrl?: string
    careAccentImage?: unknown
    careAccentImageUrl?: string
    careAccentLabel?: string
    careBadgeTitle?: string
    careBadgeMeta?: string
    missionEyebrow?: string
    missionTitle?: string
    missionBody?: string
    visionEyebrow?: string
    visionTitle?: string
    visionBody?: string
    facilitiesEyebrow?: string
    facilitiesTitle?: string
    facilitiesIntro?: string
    facilityCategories?: Array<{
      title?: string
      subtitle?: string
      intro?: string
      badge?: string
      icon?: string
      items?: Array<{ title?: string; description?: string }>
    }>
    masterPlanEyebrow?: string
    masterPlanTitle?: string
    masterPlanBody?: string
    masterPlanImage?: unknown
    masterPlanImageUrl?: string
    masterPlanPlaceholderLabel?: string
    masterPlanPlaceholderNote?: string
    residencesEyebrow?: string
    residencesTitleLineOne?: string
    residencesTitleLineTwo?: string
    residencesIntro?: string
    residenceCards?: Array<{
      title?: string
      description?: string
      image?: unknown
      imageUrl?: string
    }>
    floorplanNote?: string
  }

  const heroSlides =
    s.heroSlides
      ?.map((slide) => ({
        heading: slide.heading,
        subheading: slide.subheading,
        caption: slide.caption || 'Slide',
        image: getMediaUrl(slide.image) || slide.imageUrl || '',
      }))
      .filter((slide) => slide.image) || []

  const promiseStats =
    s.promiseStats
      ?.filter((item) => item.value && item.label)
      .map((item) => ({ value: item.value || '', label: item.label || '' })) || undefined

  const facilityCategories =
    s.facilityCategories
      ?.filter((category) => category.title && category.subtitle && category.intro)
      .map((category) => ({
        title: category.title || '',
        subtitle: category.subtitle || '',
        intro: category.intro || '',
        badge: category.badge,
        icon: category.icon || 'star',
        items:
          category.items
            ?.filter((item) => item.title && item.description)
            .map((item) => ({ title: item.title || '', description: item.description || '' })) || [],
      })) || undefined

  const residenceCards =
    s.residenceCards
      ?.filter((card) => card.title && card.description)
      .map((card) => ({
        title: card.title || '',
        description: card.description || '',
        image: getMediaUrl(card.image) || card.imageUrl || '',
      })) || undefined

  return (
    <>
      <Hero
        brandTitle={s.heroBrandTitle}
        brandCaption={s.heroBrandCaption}
        meta={s.heroMeta}
        slides={heroSlides}
      />
      <About
        promiseEyebrow={s.promiseEyebrow}
        promiseHeading={s.promiseHeading}
        promiseBody={s.promiseBody}
        promiseStats={promiseStats}
        careEyebrow={s.careEyebrow}
        careHeading={s.careHeading}
        careBody={s.careBody}
        partnerLabel={s.partnerLabel}
        partnerUrl={s.partnerUrl}
        mainImageUrl={getMediaUrl(s.careMainImage) || s.careMainImageUrl}
        accentImageUrl={getMediaUrl(s.careAccentImage) || s.careAccentImageUrl}
        accentLabel={s.careAccentLabel}
        badgeTitle={s.careBadgeTitle}
        badgeMeta={s.careBadgeMeta}
        missionEyebrow={s.missionEyebrow}
        missionTitle={s.missionTitle}
        missionBody={s.missionBody}
        visionEyebrow={s.visionEyebrow}
        visionTitle={s.visionTitle}
        visionBody={s.visionBody}
      />
      <AmenitiesGrid
        eyebrow={s.facilitiesEyebrow}
        title={s.facilitiesTitle}
        intro={s.facilitiesIntro}
        categories={facilityCategories}
      />
      <LivingOptions
        masterPlanEyebrow={s.masterPlanEyebrow}
        masterPlanTitle={s.masterPlanTitle}
        masterPlanBody={s.masterPlanBody}
        masterPlanImage={getMediaUrl(s.masterPlanImage) || s.masterPlanImageUrl}
        masterPlanPlaceholderLabel={s.masterPlanPlaceholderLabel}
        masterPlanPlaceholderNote={s.masterPlanPlaceholderNote}
        residencesEyebrow={s.residencesEyebrow}
        residencesTitleLineOne={s.residencesTitleLineOne}
        residencesTitleLineTwo={s.residencesTitleLineTwo}
        residencesIntro={s.residencesIntro}
        residences={residenceCards}
        floorplanNote={s.floorplanNote}
      />
      <Contact
        phone={s.phone}
        email={s.email}
        address={s.address}
        whatsapp={s.whatsapp}
        eyebrow={s.contactEyebrow}
        title={s.contactTitle}
        intro={s.contactIntro}
        callLabel={s.contactCallLabel}
        emailLabel={s.contactEmailLabel}
        whatsappLabel={s.contactWhatsappLabel}
        visitLabel={s.contactVisitLabel}
        hoursLabel={s.contactHoursLabel}
        hoursValue={s.contactHoursValue}
        imageUrl={getMediaUrl(s.contactImage) || s.contactImageUrl}
      />
    </>
  )
}
