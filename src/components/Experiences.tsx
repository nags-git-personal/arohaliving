import React from 'react'

type Experience = {
  title: string
  caption: string
  image: string
  tint: 'green' | 'blue' | 'yellow'
}

const experiences: Experience[] = [
  {
    title: '24/7 Medical Care',
    caption: 'On-site doctors, nurses and emergency response — always.',
    image:
      'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=900&q=80',
    tint: 'blue',
  },
  {
    title: 'Family Moments',
    caption: 'Gatherings, festivals and grandchildren welcome any day.',
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80',
    tint: 'yellow',
  },
  {
    title: 'Gourmet Indian Dining',
    caption: 'Chef-curated thalis, regional specialities, shared together.',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80',
    tint: 'yellow',
  },
  {
    title: 'Yoga & Meditation',
    caption: 'Mornings begin with breath, balance and intention.',
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80',
    tint: 'green',
  },
  {
    title: '24/7 Pure Water',
    caption: 'RO-purified, mineralised, piped to every residence.',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80',
    tint: 'blue',
  },
  {
    title: 'Walks & Smiles',
    caption: 'Shaded walking paths, sunlit benches, friendships everywhere.',
    image:
      'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=900&q=80',
    tint: 'green',
  },
]

export const Experiences: React.FC = () => {
  return (
    <section className="section" id="experiences" style={{ background: 'var(--c-cream)' }}>
      <div className="container section-center">
        <span className="eyebrow">Life at Aroha</span>
        <h2>A day lived well, every day</h2>
        <div className="divider" />
        <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--c-muted)' }}>
          From sunrise yoga to candlelit dinners — every moment at Aroha is shaped around
          warmth, wellness and the people you love.
        </p>
        <div className="experiences-grid">
          {experiences.map((x) => (
            <figure key={x.title} className={`experience-card tint-${x.tint}`}>
              <div
                className="experience-image"
                style={{ backgroundImage: `url(${x.image})` }}
                role="img"
                aria-label={x.title}
              />
              <figcaption className="experience-caption">
                <h3>{x.title}</h3>
                <p>{x.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
