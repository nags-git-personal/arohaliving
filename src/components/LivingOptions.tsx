import React from 'react'
import Link from 'next/link'

const options = [
  {
    title: 'Independent Living',
    description: 'Private, fully-serviced residences for active seniors who value freedom with the reassurance of on-call care.',
    features: ['1 & 2 BHK serviced apartments', 'Housekeeping & linen service', 'All meals included', 'Community events & outings'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Assisted Living',
    description: 'Personalised support with daily activities while preserving the dignity and independence of every resident.',
    features: ['Trained care attendants', 'Medication management', 'Mobility & bath assistance', 'Personalised care plans'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Memory Care',
    description: 'A specialised, secure environment for residents living with dementia — led by certified memory-care professionals.',
    features: ['Secure neighbourhood', 'Cognitive therapy sessions', '1:6 caregiver ratio', 'Sensory gardens'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  },
]

export const LivingOptions: React.FC = () => {
  return (
    <section className="section" id="living" style={{ background: 'var(--c-cream-2)' }}>
      <div className="container section-center">
        <span className="eyebrow">Residences &amp; Care</span>
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
