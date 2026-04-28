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
  { title: 'Safety by Design', description: 'Anti-skid flooring, guide rails, grab bars, wide corridors, panic buttons, and 24/7 CCTV with fire-hazard protection — every detail engineered for your safety.', icon: 'shield' },
  { title: 'Medical & Nursing Care', description: 'On-call doctors, in-house trained nursing staff, and emergency treatment infrastructure — ensuring timely, professional healthcare is always within reach.', icon: 'heart' },
  { title: 'Ambulance On Site', description: 'A dedicated ambulance stationed within the premises for swift response during emergencies and seamless access to nearby hospitals.', icon: 'bus' },
  { title: 'Physiotherapy Services', description: 'On-site physiotherapy experts provide personalised therapy programs to improve mobility, manage pain, and support an active, independent lifestyle.', icon: 'activity' },
  { title: 'Yoga & Meditation', description: 'Daily yoga, wellness, and cultural activity sessions designed to nurture both physical health and emotional well-being of every resident.', icon: 'sun' },
  { title: 'Labyrinth & Reflexology', description: 'A meditative labyrinth for cognitive stimulation paired with a therapeutic reflexology track featuring pebble, sand, and water sections for overall wellness.', icon: 'leaf' },
  { title: 'Outdoor & Amphitheatre', description: 'Beautiful outdoor spaces including an amphitheatre, open gym, chanting garden, walking track, water bodies, and serene sitting areas.', icon: 'users' },
  { title: 'Nutritious Dining', description: 'Freshly prepared home-style meals with dietician support, separate vegetarian and non-vegetarian kitchens, room dining options, and filtered drinking water.', icon: 'utensils' },
  { title: 'Smart Technology', description: 'Digitised medical records, health management systems, and optional in-home emergency sensors for proactive, technology-enabled senior care.', icon: 'wifi' },
  { title: 'Spiritual Wellness', description: 'An ISKCON temple within walkable distance, a dedicated prayer room, and multipurpose spaces ensure residents can nurture their spiritual practices with ease.', icon: 'star' },
  { title: 'Library & Media Room', description: 'A thoughtfully curated library, media room, and games room — spaces that keep the mind active and always offer something enjoyable to look forward to.', icon: 'book' },
  { title: 'Comfortable Residences', description: '147 elegantly crafted apartments with spacious interiors, age-friendly features, and a vibrant, sanitised community environment that feels truly like home.', icon: 'home' },
]

export const AmenitiesGrid: React.FC<Props> = ({ items }) => {
  const data = items && items.length > 0 ? items : fallback
  return (
    <section className="section section-dark" id="amenities">
      <div className="container section-center">
        <span className="eyebrow">Comprehensive Facilities &amp; Amenities</span>
        <h2>Every comfort, thoughtfully considered</h2>
        <div className="divider" />
        <p style={{ maxWidth: 680, margin: '0 auto', opacity: 0.85 }}>
          The Park by Aroha is designed with meticulous attention to detail — ensuring
          comfort, safety, health, and vibrant engagement for every resident.
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
