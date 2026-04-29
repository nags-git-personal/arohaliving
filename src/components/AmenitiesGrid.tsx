import React from 'react'
import { Icon } from './Icon'

type AmenityItem = {
  title: string
  description: string
}

type AmenityCategory = {
  title: string
  subtitle: string
  intro: string
  badge?: string
  icon: string
  items: AmenityItem[]
}

const defaultCategories: AmenityCategory[] = [
  {
    title: 'Recreation & Engagement',
    subtitle: 'Days designed to feel meaningful',
    intro:
      'An ever-changing calendar of wellness, culture and connection — so every day at The Park offers something to look forward to.',
    icon: 'sun',
    items: [
      {
        title: 'Yoga, Meditation & Cultural Activities',
        description:
          'Daily yoga and wellness sessions alongside cultural programmes nurture both physical health and emotional well-being.',
      },
      {
        title: 'Community Outreach',
        description:
          'Residents are invited to share their skills through outreach programmes, fostering a sense of purpose and connection.',
      },
      {
        title: 'Indoor Games, Gym & Walking Track',
        description:
          'From indoor games to a senior-friendly gym and serene walking tracks, fitness and leisure support an active, balanced lifestyle.',
      },
      {
        title: 'Outdoor Activities & Amphitheatre',
        description:
          'Beautiful outdoor spaces and an amphitheatre host events, performances and gatherings, creating a vibrant social environment.',
      },
      {
        title: 'Labyrinth for Cognitive Wellness',
        description:
          'A thoughtfully designed labyrinth offers a meditative walking experience that supports mental clarity and cognitive stimulation.',
      },
      {
        title: 'Reflexology Track',
        description:
          'A circular nature-cure track of pebble, sand and water surfaces gently stimulates pressure points, improving circulation and well-being.',
      },
      {
        title: 'Spiritual Accessibility',
        description:
          'A nearby ISKCON temple and dedicated prayer rooms allow residents to nurture their spiritual practices with ease.',
      },
      {
        title: 'Multipurpose & Media Rooms',
        description:
          'Spaces designed for movies, events and group activities ensure there is always something to look forward to.',
      },
    ],
  },
  {
    title: 'Medical & Health',
    subtitle: 'Care that is always within reach',
    intro:
      'A complete continuum of medical support — from daily wellness to emergency response — discreetly woven into the rhythm of community life.',
    icon: 'heart',
    items: [
      {
        title: 'On-call Doctors & In-house Nursing',
        description:
          'Qualified doctors and trained nursing staff, supported by emergency treatment infrastructure, ensure timely attention for routine and urgent needs alike.',
      },
      {
        title: 'Ambulance On Site',
        description:
          'A dedicated ambulance is stationed within the premises for swift response and quick access to nearby hospitals and critical care.',
      },
      {
        title: 'Physiotherapy Services',
        description:
          'On-site physiotherapy specialists help residents improve mobility, manage pain and maintain an active lifestyle through personalised therapy programmes.',
      },
      {
        title: 'Diagnostic Services',
        description:
          'Regular health check-ups and diagnostics are easily accessible, supporting early detection and continuous monitoring of health conditions.',
      },
      {
        title: 'Digitised Medical Records',
        description:
          'All health records are securely digitised, enabling seamless tracking of medical history, medications and treatments for informed, efficient care.',
      },
      {
        title: 'Smart Emergency Sensors',
        description:
          'Optional in-home sensors can be installed to detect unusual activity or emergencies, adding a quiet layer of technology-enabled safety.',
      },
    ],
  },
  {
    title: 'Building & Safety',
    subtitle: 'Safety, woven into every detail',
    intro:
      'Every corner of The Park is engineered around the way seniors actually live — quietly removing risk, while preserving independence and dignity in daily routines.',
    badge: 'Safety First · 6 layers of built-in protection',
    icon: 'shield',
    items: [
      {
        title: 'Anti-skid Flooring & Guide Rails',
        description:
          'Every corner is designed with safety in mind. Anti-skid flooring minimises the risk of slips, while strategically placed guide rails offer continuous support so residents can move confidently and independently.',
      },
      {
        title: 'Grab Bars & Wide Doorways',
        description:
          'Bathrooms are thoughtfully fitted with ergonomically placed grab bars and extra-wide doorways, wheelchair accessible and designed for ease, comfort and dignity.',
      },
      {
        title: '24/7 Security & CCTV',
        description:
          'Round-the-clock security personnel and comprehensive CCTV surveillance keep the community secure. Residents and families enjoy lasting peace of mind.',
      },
      {
        title: 'Wide Corridors & Open Spaces',
        description:
          'Spacious corridors and open layouts encourage easy navigation and effortless mobility, while creating natural settings for casual strolls and friendly encounters.',
      },
      {
        title: 'In-room Panic Buttons',
        description:
          'Each residence is equipped with emergency panic buttons, so help is always just one press away, day or night.',
      },
      {
        title: 'Fire Hazard Protection',
        description:
          'Advanced fire safety systems, alarms, extinguishers and rehearsed evacuation protocols are integrated throughout the property for maximum protection.',
      },
    ],
  },
  {
    title: 'Customized Living',
    subtitle: 'Comfort, exactly the way you like it',
    intro:
      'From dietician-curated meals to in-room dining and quiet sanitised surrounds — daily living at The Park is shaped around personal preference and considered respect.',
    icon: 'home',
    items: [
      {
        title: 'Nutritious, Home-Style Dining',
        description:
          'Freshly prepared meals that feel like home, balanced for taste and nutrition so residents enjoy every bite.',
      },
      {
        title: 'Dietician-supported Meal Planning',
        description:
          'Personalised meal plans cater to individual health needs, ensuring the right nutrition for every lifestyle and condition.',
      },
      {
        title: 'Modern Restaurant with Separate Veg & Non-Veg Kitchens',
        description:
          'Dedicated kitchen and dining spaces respect dietary preferences with quiet dignity, alongside private dining spaces for guests and family.',
      },
      {
        title: 'Room Dining Options',
        description:
          'Residents may enjoy meals in the comfort of their own homes whenever they prefer privacy or convenience.',
      },
      {
        title: 'Filtered Drinking Water',
        description:
          'Clean, safe and purified drinking water is available throughout the community.',
      },
      {
        title: 'Sanitised Living Environment',
        description:
          'High standards of hygiene and sanitation across all spaces promote a safe and healthy living atmosphere.',
      },
      {
        title: 'Guest Suites',
        description:
          'Luxuriously furnished guest suites make visiting family and friends feel completely at home.',
      },
      {
        title: 'Daily Convenience Services',
        description:
          'A grocery store, laundry service, salon and other on-site essentials are planned to cater to everyday needs with ease.',
      },
    ],
  },
]

type Props = {
  eyebrow?: string
  title?: string
  intro?: string
  categories?: AmenityCategory[]
}

export const AmenitiesGrid: React.FC<Props> = ({
  eyebrow = 'Facilities & Services',
  title = 'Four dimensions of thoughtful living',
  intro = 'The Park by Aroha brings together engaging daily life, care readiness, senior-first safety and deeply personalised comfort within one integrated active adult community.',
  categories = defaultCategories,
}) => {
  return (
    <section className="section section-dark" id="amenities">
      <div className="container section-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <div className="divider" />
        <p className="amenities-intro">{intro}</p>
        <div className="amenity-category-grid">
          {categories.map((category) => (
            <article key={category.title} className="amenity-category-card">
              <div className="amenity-category-head">
                <div className="amenity-icon amenity-category-icon">
                  <Icon name={category.icon} size={40} strokeWidth={1.2} />
                </div>
                <div>
                  <h3>{category.title}</h3>
                  <p className="amenity-category-subtitle">{category.subtitle}</p>
                </div>
              </div>
              <p className="amenity-category-intro">{category.intro}</p>
              {category.badge && <p className="amenity-category-badge">{category.badge}</p>}
              <div className="amenity-list">
                {category.items.map((item) => (
                  <div key={item.title} className="amenity-list-item">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
