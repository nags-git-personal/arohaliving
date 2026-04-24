'use client'

import React, { useEffect, useState } from 'react'

type HeroProps = {
  heading?: string
  subheading?: string
}

type Slide = { image: string; caption: string }

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2000&q=80',
    caption: 'Nestled in nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=80',
    caption: 'Families, always welcome',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=2000&q=80',
    caption: 'Walks of wellness',
  },
  {
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=2000&q=80',
    caption: 'Mornings of calm',
  },
]

export const Hero: React.FC<HeroProps> = ({
  heading = 'A nest of warmth, held by <em>safe hands</em>',
  subheading = 'Aroha is where seniors live protected, cherished and surrounded by family — 24/7 medical care, caring hands, and a home that feels like your own.',
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
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`hero-slide ${i === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      <div className="container hero-inner">
        <span className="eyebrow">Premium Senior Living</span>
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
