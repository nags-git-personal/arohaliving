import React from 'react'
import { Icon } from './Icon'

type Amenity = {
  id?: string | number
  title: string
  description: string
  icon?: string | null
}

type Props = {
  items?: Amenity[]
}

const fallback: Amenity[] = [
  { title: '24/7 Medical Care', description: 'On-site doctors, nurses and emergency response around the clock for peace of mind.', icon: 'heart' },
  { title: 'Gourmet Dining', description: 'Chef-curated, nutritionist-approved meals served in elegant community dining rooms.', icon: 'utensils' },
  { title: 'Wellness & Fitness', description: 'Yoga, physiotherapy, swimming and age-appropriate gym with trained coaches.', icon: 'dumbbell' },
  { title: 'Safe Environment', description: 'Gated community, CCTV, panic buttons and anti-skid flooring across residences.', icon: 'shield' },
  { title: 'Library & Reading', description: 'A quiet haven with curated books, periodicals and comfortable reading nooks.', icon: 'book' },
  { title: 'Landscaped Gardens', description: 'Walking paths, herb gardens and meditation pavilions amid lush greenery.', icon: 'leaf' },
  { title: 'Social & Cultural', description: 'Weekly satsangs, movie nights, birthday celebrations and cultural festivals.', icon: 'users' },
  { title: 'Concierge & Transport', description: 'Chauffeured transport, errand help and a dedicated lifestyle concierge.', icon: 'bus' },
]

export const AmenitiesGrid: React.FC<Props> = ({ items }) => {
  const data = items && items.length > 0 ? items : fallback
  return (
    <section className="section section-dark" id="amenities">
      <div className="container section-center">
        <span className="eyebrow">Amenities &amp; Lifestyle</span>
        <h2>Every comfort, thoughtfully considered</h2>
        <div className="divider" />
        <p style={{ maxWidth: 680, margin: '0 auto', opacity: 0.85 }}>
          From wellness and care to leisure and community — explore the facilities that make
          Aroha Living feel like home, only better.
        </p>
        <div className="amenities-grid">
          {data.map((a, i) => (
            <div key={a.id ?? i} className="amenity-card">
              <div className="amenity-icon">
                <Icon name={a.icon || 'star'} size={40} strokeWidth={1.2} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
