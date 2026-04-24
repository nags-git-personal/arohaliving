import React from 'react'

export const About: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual" aria-hidden>
            <div className="about-image-main" />
            <div className="about-image-accent" />
            <div className="about-badge">
              <span className="about-badge-word">Aroha</span>
              <span className="about-badge-meta">means love</span>
            </div>
          </div>
          <div className="about-content">
            <span className="eyebrow">About Aroha Living</span>
            <h2>A home where every sunset is a gentle embrace.</h2>
            <div className="divider" />
            <p>
              Aroha Living is a thoughtfully curated senior community where residents
              rediscover the quiet joys of everyday life — unhurried mornings, shared
              laughter over chai, gardens that remember every footfall. Every residence is
              shaped with grace, dignity and independence at its heart.
            </p>
            <p>
              Our name — <em>Aroha</em> — means love. And it is precisely that spirit
              which fills every corridor, every bench under the neem tree, every
              conversation in our community.
            </p>
            <ul className="about-features" aria-label="What makes Aroha special">
              <li>
                <span className="feature-value">24/7</span>
                <span className="feature-label">Medical &amp; on-site care</span>
              </li>
              <li>
                <span className="feature-value">30+</span>
                <span className="feature-label">Wellness amenities</span>
              </li>
              <li>
                <span className="feature-value">100%</span>
                <span className="feature-label">Assisted-living ready</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
