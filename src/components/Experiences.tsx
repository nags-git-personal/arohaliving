import React from 'react'

type Experience = {
  title: string
  caption: string
  image: string
  tint: 'green' | 'blue' | 'yellow'
}

const experiences: Experience[] = [
  {
    title: 'Yoga & Cultural Activities',
    caption: 'Daily wellness sessions, meditation, and cultural programs to nurture body, mind, and spirit.',
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80',
    tint: 'green',
  },
  {
    title: 'Labyrinth & Reflexology',
    caption: 'A meditative labyrinth and therapeutic reflexology track for cognitive and physical wellness.',
    image:
      'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=900&q=80',
    tint: 'blue',
  },
  {
    title: 'Amphitheatre & Events',
    caption: 'Live performances, community gatherings, and celebrations in our beautiful outdoor amphitheatre.',
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80',
    tint: 'yellow',
  },
  {
    title: 'Home-Style Dining',
    caption: 'Fresh, nutritious meals with dietician support and separate kitchens for vegetarians and non-vegetarians.',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80',
    tint: 'yellow',
  },
  {
    title: 'Medical & Physiotherapy',
    caption: 'On-call doctors, nursing care, ambulance on site, and personalised physiotherapy programs.',
    image:
      'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=900&q=80',
    tint: 'blue',
  },
  {
    title: 'Chanting Garden & Walks',
    caption: 'Serene chanting garden, open gym, walking track, and water bodies in a lush natural setting.',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80',
    tint: 'green',
  },
]

export const Experiences: React.FC = () => {
  return (
    <section className="section" id="experiences" style={{ background: 'var(--c-cream)' }}>
      <div className="container section-center">
        <span className="eyebrow">Life at The Park by Aroha</span>
        <h2>A day lived well, every day</h2>
        <div className="divider" />
        <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--c-muted)' }}>
          From sunrise yoga and reflexology walks to cultural evenings and home-style dining —
          every moment at The Park by Aroha is shaped around wellness, community, and joy.
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
