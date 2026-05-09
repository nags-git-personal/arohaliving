'use client'

import React, { useEffect, useState } from 'react'

type HeroProps = {
  brandTitle?: string
  brandCaption?: string
  meta?: string
  slides?: Slide[]
  videoUrl?: string
}

export type Slide = {
  image: string
  caption: string
  heading?: string
  subheading?: string
}

const defaultSlides: Slide[] = [
  {
    image: '/media/site/image%201.png',
    caption: 'A premium lifestyle, beautifully lived',
    heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
    subheading: 'A Luxury Technology-Enabled Senior Living Community',
  },
  {
    image: '/media/site/image2.png',
    caption: 'Warm company in elegant surroundings',
    heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
    subheading: 'A Luxury Technology-Enabled Senior Living Community',
  },
  {
    image: '/media/site/image3.png',
    caption: 'Wellness and confidence every day',
    heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
    subheading: 'A Luxury Technology-Enabled Senior Living Community',
  },
  {
    image: '/media/site/image4.png',
    caption: 'A vibrant next chapter with style',
    heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
    subheading: 'A Luxury Technology-Enabled Senior Living Community',
  },
]

export const Hero: React.FC<HeroProps> = ({
  brandTitle = 'The Park',
  brandCaption = 'by Aroha',
  meta = '150 Premium Residences · Medchal · Hyderabad · Launching Soon',
  slides = defaultSlides,
  videoUrl,
}) => {
  const [active, setActive] = useState(0)
  const safeSlides = slides.length > 0 ? slides : defaultSlides
  const activeSlide = safeSlides[active] ?? safeSlides[0]

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % safeSlides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [safeSlides.length])

  return (
    <section className="hero" id="home">
      <div className="hero-carousel" aria-hidden="true">
        {videoUrl ? (
          <video
            className="hero-video"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          safeSlides.map((s, i) => (
            <div
              key={s.image}
              className={`hero-slide ${i === active ? 'is-active' : ''}`}
            >
              <img src={s.image} alt="" />
            </div>
          ))
        )}
        <div className="hero-overlay" />
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
      </div>
      <div className="container hero-inner">
        <div className="hero-brand-lockup" aria-label="The Park by Aroha">
          <span className="hero-brand-title">{brandTitle}</span>
          <span className="hero-brand-caption">{brandCaption}</span>
        </div>
        <p className="hero-ambient-caption" key={active}>
          {activeSlide.caption}
        </p>
        <h1 dangerouslySetInnerHTML={{ __html: activeSlide.heading || defaultSlides[0].heading || '' }} />
        <p className="hero-sub">{activeSlide.subheading || defaultSlides[0].subheading}</p>
        <p className="hero-meta">{meta}</p>
      </div>
      <div className="hero-dots" aria-label="Hero slides">
        {safeSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={s.caption}
            className={`hero-dot ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
