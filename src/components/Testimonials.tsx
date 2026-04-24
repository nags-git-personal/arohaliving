'use client'

import React, { useEffect, useState } from 'react'

type Testimonial = {
  id?: string | number
  name: string
  location?: string | null
  quote: string
}

const fallback: Testimonial[] = [
  {
    name: 'Mrs. Lakshmi Rao',
    location: 'Resident, 3 years',
    quote: 'I came here wondering if I would miss home. Today, Aroha is home — the friendships, the care, the quiet mornings in the garden. My children say I seem younger than ever.',
  },
  {
    name: 'Col. (Retd.) Harish Menon',
    location: 'Resident, 2 years',
    quote: 'The dignity with which the staff treat us, the freedom I have, and the peace my family feels knowing I am cared for — it is everything I hoped retirement would be.',
  },
  {
    name: 'Ms. Anjali Shetty',
    location: 'Daughter of resident',
    quote: 'Choosing Aroha for Amma was the best decision we made as a family. The warmth is palpable from the moment you walk in. She is thriving.',
  },
]

type Props = { items?: Testimonial[] }

export const Testimonials: React.FC<Props> = ({ items }) => {
  const data = items && items.length > 0 ? items : fallback
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % data.length), 6000)
    return () => clearInterval(t)
  }, [data.length])

  const current = data[idx]

  return (
    <section className="section section-dark">
      <div className="container section-center">
        <span className="eyebrow">Voices of Aroha</span>
        <h2>Stories from our community</h2>
        <div className="divider" />
        <div className="testimonials-wrap">
          <div className="testimonial-quote">{current.quote}</div>
          <div className="testimonial-author">{current.name}</div>
          {current.location && <div className="testimonial-location">{current.location}</div>}
          <div className="testimonial-dots">
            {data.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === idx ? 'active' : ''}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
