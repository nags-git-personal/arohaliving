import React from 'react'

type VideoSectionProps = {
  videoUrl?: string | null
  title?: string | null
  caption?: string | null
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, title, caption }) => {
  if (!videoUrl) return null

  return (
    <section className="section video-section" id="video">
      <div className="container section-center">
        <span className="eyebrow">Walkthrough</span>
        <h2>{title || 'Experience The Park by Aroha'}</h2>
        <div className="divider" />
        <p className="video-section-intro">
          {caption ||
            'Take a virtual walk through our beautifully designed community in Medchal, Hyderabad — explore the lush surroundings, elegant apartments, and vibrant amenities that await you at The Park by Aroha.'}
        </p>
      </div>
      <div className="container">
        <div className="video-wrapper">
          <video
            src={videoUrl}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title || 'The Park by Aroha – Walkthrough Video'}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
