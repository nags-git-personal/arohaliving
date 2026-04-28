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
              <span className="about-badge-meta">ascent to life</span>
            </div>
          </div>
          <div className="about-content">
            <span className="eyebrow">About The Park by Aroha</span>
            <h2>An ascent to a higher quality of life.</h2>
            <div className="divider" />
            <p>
              Aroha is a group of passionate and experienced professionals and technocrats
              who have come together to create a premier senior living community in Hyderabad.
              <strong> The Park by Aroha</strong> is our first venture — a technology-enabled,
              integrated living community for seniors, nestled in the serene surroundings of
              Medchal, featuring 147 elegantly crafted apartments with spacious interiors,
              age-friendly features, and a vibrant environment.
            </p>
            <p>
              We are affiliated to <em>Anvaya Elder Care</em> — one of the premier organisations
              in the country catering to elder care services — ensuring the highest standards of
              compassionate, professional support for every resident.
            </p>
            <ul className="about-features" aria-label="Key highlights">
              <li>
                <span className="feature-value">147</span>
                <span className="feature-label">Elegant apartments</span>
              </li>
              <li>
                <span className="feature-value">24/7</span>
                <span className="feature-label">Medical &amp; nursing care</span>
              </li>
              <li>
                <span className="feature-value">100%</span>
                <span className="feature-label">Tech-enabled living</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="about-vm-grid">
          <div className="about-vm-card">
            <span className="eyebrow">Our Vision</span>
            <h3>India&apos;s benchmark for premium senior living</h3>
            <p>
              To build the Aroha brand as India&apos;s benchmark for premium senior living,
              defined by exceptional facilities, compassionate care, and dedicated service for elders.
            </p>
          </div>
          <div className="about-vm-card">
            <span className="eyebrow">Our Mission</span>
            <h3>A trusted network, across every stage of care</h3>
            <p>
              To create a trusted network of technology-enabled senior living communities across
              India, catering to every stage of senior care while ensuring safety, comfort,
              dignity, and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
