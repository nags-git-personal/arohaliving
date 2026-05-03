import React from 'react'

type Stat = {
  value: string
  label: string
}

type AboutProps = {
  promiseEyebrow?: string
  promiseHeading?: string
  promiseBody?: string
  promiseStats?: Stat[]
  careEyebrow?: string
  careHeading?: string
  careBody?: string
  partnerLabel?: string
  partnerUrl?: string
  mainImageUrl?: string
  accentImageUrl?: string
  accentLabel?: string
  badgeTitle?: string
  badgeMeta?: string
  missionEyebrow?: string
  missionTitle?: string
  missionBody?: string
  visionEyebrow?: string
  visionTitle?: string
  visionBody?: string
}

const defaultStats: Stat[] = [
  { value: '147', label: 'Premium residences' },
  { value: '2', label: 'Acres of landscaped greens' },
  { value: '24/7', label: 'Care-ready support ecosystem' },
]

const legacyCareBody =
  'The Park by Aroha is envisioned as an active adult community with the depth to evolve into assisted living whenever residents need it. The community is supported by seasoned healthcare and service professionals, creating a living environment where independence, reassurance and dignity stay in balance.'

const defaultCareBody =
  'The Park by Aroha is envisioned as a thoughtfully designed active adult community, with the flexibility to seamlessly evolve into assisted living as residents’ needs change over time. Supported by experienced healthcare and service professionals, and backed by Anvayaa Elder Care, one of India’s most trusted elder care service providers, the community offers an environment where independence, reassurance, and dignity remain in perfect balance.'

const renderMultiline = (text: string) =>
  text.split('\n').map((line, index) => (
    <React.Fragment key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </React.Fragment>
  ))

export const About: React.FC<AboutProps> = ({
  promiseEyebrow = 'The Aroha Promise',
  promiseHeading = 'An ascent to a higher\nquality of life',
  promiseBody = 'Aroha symbolises an ascent — a graceful rise into a life free from worries of maintenance, loneliness and safety. The Park by Aroha is a thoughtfully designed technology-enabled senior living community of 147 premium residences in serene Medchal, set within two acres of landscaped gardens.',
  promiseStats = defaultStats,
  careEyebrow = 'Care-Led Community',
  careHeading = 'A community shaped by\nexperience and care',
  careBody = defaultCareBody,
  partnerLabel = 'Explore Anvayaa Elder Care',
  partnerUrl = 'https://www.anvayaa.com/',
  mainImageUrl = '/media/site/image5.png',
  accentImageUrl = '/media/site/image6.png',
  accentLabel = 'Anvayaa partner network',
  badgeTitle = 'Active Adult',
  badgeMeta = 'Care-ready by design',
  missionEyebrow = 'Mission',
  missionTitle = 'A trusted community that adapts with every resident',
  missionBody = 'To create a technology-enabled active adult community where seniors enjoy freedom, social connection and premium daily living, with the confidence that tailored support can grow with them over time.',
  visionEyebrow = 'Vision',
  visionTitle = "India's benchmark for graceful ageing",
  visionBody = 'To shape communities where senior living feels aspirational, safe and deeply human — blending hospitality, healthcare readiness and thoughtful design into a new standard for later life in India.',
}) => {
  const resolvedCareBody = careBody === legacyCareBody ? defaultCareBody : careBody

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="promise-panel">
          <div className="promise-copy">
            <span className="eyebrow">{promiseEyebrow}</span>
            <h2>&ldquo;{renderMultiline(promiseHeading)}&rdquo;</h2>
            <div className="divider" />
            <p>{promiseBody}</p>
          </div>
          <ul className="about-features" aria-label="The Park by Aroha highlights">
            {promiseStats.map((stat) => (
              <li key={`${stat.value}-${stat.label}`}>
                <span className="feature-value">{stat.value}</span>
                <span className="feature-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-grid about-grid-secondary">
          <div className="about-content">
            <span className="eyebrow">{careEyebrow}</span>
            <h2>&ldquo;{renderMultiline(careHeading)}&rdquo;</h2>
            <div className="divider" />
            <p>{resolvedCareBody}</p>
            <a
              className="partner-link"
              href={partnerUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={partnerLabel}
            >
              <img
                className="partner-link-logo"
                src="/media/site/anvayaa-logo.svg"
                alt="Anvayaa Elder Care"
              />
              <span className="partner-link-copy">
                <span className="partner-link-label">{partnerLabel}</span>
                <span className="partner-link-url">anvayaa.com</span>
              </span>
            </a>
          </div>
          <div className="about-visual" aria-hidden>
            <div className="about-image-main">
              <img className="about-image-main-media" src={mainImageUrl} alt="" />
            </div>
            <div className="about-image-accent">
              <img className="about-image-accent-media" src={accentImageUrl} alt="" />
              <span className="about-image-accent-text">{accentLabel}</span>
            </div>
            <div className="about-badge">
              <span className="about-badge-word">{badgeTitle}</span>
              <span className="about-badge-meta">{badgeMeta}</span>
            </div>
          </div>
        </div>

        <div className="about-vm-grid">
          <div className="about-vm-card">
            <span className="eyebrow">{missionEyebrow}</span>
            <h3>{missionTitle}</h3>
            <p>{missionBody}</p>
          </div>
          <div className="about-vm-card">
            <span className="eyebrow">{visionEyebrow}</span>
            <h3>{visionTitle}</h3>
            <p>{visionBody}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
