'use client'

import React, { useEffect, useState } from 'react'

type HeroProps = {
  heading?: string
  subheading?: string
  videoUrl?: string
}

type Slide = { image: string; caption: string }

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2000&q=80',
    caption: 'Medchal, Hyderabad',
  },
  {
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=80',
    caption: 'Families, always welcome',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=2000&q=80',
    caption: 'Wellness every day',
  },
  {
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=2000&q=80',
    caption: '147 elegant apartments',
  },
]

export const Hero: React.FC<HeroProps> = ({
  heading = 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
  subheading = 'An ascent to a higher quality of life — a thoughtfully designed, technology-enabled senior living community nestled in the serene surroundings of Medchal, Hyderabad.',
  videoUrl,
}) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [])

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
          slides.map((s, i) => (
            <div
              key={s.image}
              className={`hero-slide ${i === active ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ))
        )}
        <div className="hero-overlay" />
      </div>
      <div className="container hero-inner">
        <span className="eyebrow">The Park by Aroha · Medchal, Hyderabad</span>
        <h1 dangerouslySetInnerHTML={{ __html: heading }} />
        <p className="hero-sub">{subheading}</p>
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={s.caption}
            className={`hero-dot ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="hero-dot-bar" aria-hidden />
            <span className="hero-dot-label">{s.caption}</span>
          </button>
        ))}
      </div>
      <a href="#about" className="hero-scroll">
        Scroll ↓
      </a>
    </section>
  )
}
