import React from 'react'

type ResidenceCard = {
  title: string
  description: string
  image: string
}

type LivingOptionsProps = {
  masterPlanEyebrow?: string
  masterPlanTitle?: string
  masterPlanBody?: string
  masterPlanImage?: string
  masterPlanPlaceholderLabel?: string
  masterPlanPlaceholderNote?: string
  residencesEyebrow?: string
  residencesTitleLineOne?: string
  residencesTitleLineTwo?: string
  residencesIntro?: string
  residences?: ResidenceCard[]
  floorplanNote?: string
}

const defaultResidences: ResidenceCard[] = [
  {
    title: 'Studio and compact layouts',
    description:
      'Thoughtfully planned homes for effortless upkeep, generous daylight and comfortable everyday movement.',
    image: '/media/site/residence-01.jpg',
  },
  {
    title: 'Spacious premium apartments',
    description:
      'Elegant living and dining zones shaped around senior-first circulation, privacy and warm material finishes.',
    image: '/media/site/residence-02.jpg',
  },
  {
    title: 'Details crafted for comfort',
    description:
      'Senior-first bathrooms, practical storage and calm interiors help every home feel dignified, safe and intuitive.',
    image: '/media/site/residence-03.jpg',
  },
]

export const LivingOptions: React.FC<LivingOptionsProps> = ({
  masterPlanEyebrow = 'The Master Plan',
  masterPlanTitle = 'Thoughtfully composed',
  masterPlanBody = 'A 2-acre gated estate where every residence opens to landscaped courts, walking loops and quiet greens. Curated zones balance privacy, community life and effortless wayfinding for residents of every age.',
  masterPlanImage = '/media/site/masterplan.jpg',
  masterPlanPlaceholderLabel = 'Site Layout',
  masterPlanPlaceholderNote = 'Plans can be inserted later',
  residencesEyebrow = 'The Residences',
  residencesTitleLineOne = 'Infinite comfort',
  residencesTitleLineTwo = 'Crafted for Comfort',
  residencesIntro = 'Senior-first design, luxury-first finish — every residence tailored for dignified independent living. Seven floor plans are planned across the community, with detailed floor plan pages to be added next.',
  residences = defaultResidences,
  floorplanNote = 'Floor plans page can be inserted later.',
}) => {
  return (
    <>
      <section className="section masterplan-section" id="masterplan">
        <div className="container masterplan-grid">
          <div className="masterplan-copy">
            <span className="eyebrow">{masterPlanEyebrow}</span>
            <h2>{masterPlanTitle}</h2>
            <div className="divider" />
            <p>{masterPlanBody}</p>
          </div>
          {masterPlanImage ? (
            <div className="masterplan-image-card">
              <img className="masterplan-image" src={masterPlanImage} alt={masterPlanPlaceholderLabel} />
            </div>
          ) : (
            <div className="masterplan-placeholder" aria-label="Site layout placeholder">
              <span className="masterplan-placeholder-label">{masterPlanPlaceholderLabel}</span>
              <p>{masterPlanPlaceholderNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section residences-section" id="residences">
        <div className="container section-center">
          <span className="eyebrow">{residencesEyebrow}</span>
          <h2>
            {residencesTitleLineOne}
            <br />
            {residencesTitleLineTwo}
          </h2>
          <div className="divider" />
          <p className="residences-intro">{residencesIntro}</p>
          <div className="residences-grid">
            {residences.map((residence) => (
              <article key={residence.title} className="residence-card">
                <div className="residence-image-wrap">
                  <img src={residence.image} alt={residence.title} className="residence-image" />
                </div>
                <div className="residence-body">
                  <h3>{residence.title}</h3>
                  <p>{residence.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
