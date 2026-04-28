import React from 'react'
import Link from 'next/link'

const options = [
  {
    title: 'Independent Living',
    description: 'Elegantly crafted apartments with spacious interiors and age-friendly features — for active seniors who value freedom, with the quiet reassurance of community care always nearby.',
    features: ['147 spacious, age-friendly apartments', 'Housekeeping & maintenance included', 'Home-style nutritious meals', 'Access to all amenities & activities'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Assisted Living',
    description: 'Personalised, compassionate support for daily activities — preserving the dignity, comfort, and independence of every resident at every stage of their journey.',
    features: ['On-call doctors & in-house nursing', 'Medication & health management', 'Mobility & daily-activity assistance', 'Digitised health records & monitoring'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Memory Care',
    description: 'A secure, nurturing environment with specialised programming for residents living with memory challenges — backed by professional elder care through our Anvaya Elder Care affiliation.',
    features: ['Secure, monitored environment', 'Cognitive & labyrinth therapy', 'Trained memory-care professionals', 'Smart in-home emergency sensors'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  },
]

export const LivingOptions: React.FC = () => {
  return (
    <section className="section" id="living" style={{ background: 'var(--c-cream-2)' }}>
      <div className="container section-center">
        <span className="eyebrow">Customised Living Options</span>
        <h2>Living options, tailored to every stage</h2>
        <div className="divider" />
        <div className="options-grid">
          {options.map((opt) => (
            <div key={opt.title} className="option-card">
              <div className="option-image" style={{ backgroundImage: `url(${opt.image})` }} />
              <div className="option-body" style={{ textAlign: 'left' }}>
                <h3>{opt.title}</h3>
                <p style={{ color: 'var(--c-muted)', fontSize: 15 }}>{opt.description}</p>
                <ul className="option-features">
                  {opt.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/#contact" className="btn btn-outline" style={{ color: 'var(--c-gold-dark)', borderColor: 'var(--c-gold-dark)' }}>
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
