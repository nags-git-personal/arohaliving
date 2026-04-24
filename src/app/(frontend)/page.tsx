import React from 'react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { AmenitiesGrid } from '@/components/AmenitiesGrid'
import { Experiences } from '@/components/Experiences'
import { LivingOptions } from '@/components/LivingOptions'
import { Testimonials } from '@/components/Testimonials'
import { BlogPreview } from '@/components/BlogPreview'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Contact } from '@/components/Contact'
import {
  getSettings,
  getAmenities,
  getTestimonials,
  getFaqs,
  getPosts,
} from '@/lib/payload-helpers'

export default async function HomePage() {
  const [settings, amenities, testimonials, faqs, posts] = await Promise.all([
    getSettings(),
    getAmenities(),
    getTestimonials(),
    getFaqs(),
    getPosts(3),
  ])

  const s = (settings || {}) as {
    phone?: string
    email?: string
    address?: string
    heroSlides?: Array<{ heading?: string; subheading?: string }>
  }

  const heroSlide = s.heroSlides?.[0]

  return (
    <>
      <Hero heading={heroSlide?.heading} subheading={heroSlide?.subheading} />
      <About />
      <AmenitiesGrid items={amenities as never} />
      <Experiences />
      <LivingOptions />
      <Testimonials items={testimonials as never} />
      <BlogPreview posts={posts as never} />
      <FaqAccordion items={faqs as never} />
      <Contact phone={s.phone} email={s.email} address={s.address} />
    </>
  )
}
