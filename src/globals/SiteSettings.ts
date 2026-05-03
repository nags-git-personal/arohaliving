import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Global Settings',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'The Park by Aroha',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Where Graceful Ageing Meets Modern Comfort',
    },
    {
      label: 'Contact',
      type: 'collapsible',
      fields: [
        { name: 'phone', type: 'text', defaultValue: '+91 99667 74288' },
        { name: 'email', type: 'email', defaultValue: 'hello@arohaliving.com' },
        { name: 'address', type: 'textarea', defaultValue: 'The Park by Aroha\nMedchal, Hyderabad\nTelangana, India' },
        { name: 'whatsapp', type: 'text', defaultValue: '+919966774288' },
      ],
    },
    {
      label: 'Social Links',
      type: 'collapsible',
      fields: [
        { name: 'facebook', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
    {
      label: 'Navigation',
      type: 'collapsible',
      fields: [
        {
          name: 'navLinks',
          type: 'array',
          defaultValue: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/#about' },
            { label: 'Facilities', href: '/#amenities' },
            { label: 'Residences', href: '/#residences' },
            { label: 'Contact', href: '/#contact' },
          ],
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
        { name: 'navCtaLabel', type: 'text', defaultValue: 'Enquire' },
        { name: 'navCtaLink', type: 'text', defaultValue: '/#contact' },
      ],
    },
    {
      label: 'Footer',
      type: 'collapsible',
      fields: [
        {
          name: 'footerAbout',
          type: 'textarea',
          defaultValue:
            'A sanctuary of wellness, care and vibrant community life crafted for the most cherished chapter of your story.',
        },
        { name: 'footerExploreHeading', type: 'text', defaultValue: 'Explore' },
        {
          name: 'footerExploreLinks',
          type: 'array',
          defaultValue: [
            { label: 'About Us', href: '/#about' },
            { label: 'Facilities', href: '/#amenities' },
            { label: 'Master Plan', href: '/#masterplan' },
            { label: 'Residences', href: '/#residences' },
            { label: 'Contact Us', href: '/#contact' },
          ],
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
        { name: 'footerCareHeading', type: 'text', defaultValue: 'Care' },
        {
          name: 'footerCareItems',
          type: 'array',
          defaultValue: [
            { label: 'Active Adult Community' },
            { label: 'Care-ready support' },
            { label: 'Wellness and engagement' },
            { label: 'Medical and safety services' },
            { label: 'Customised daily living' },
          ],
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        { name: 'footerContactHeading', type: 'text', defaultValue: 'Contact' },
        {
          name: 'footerBottomLeft',
          type: 'text',
          defaultValue: 'Aroha Living. All rights reserved.',
        },
        {
          name: 'footerBottomRight',
          type: 'text',
          defaultValue: "Designed with care for life's finest years.",
        },
      ],
    },
    {
      label: 'Contact Section',
      type: 'collapsible',
      fields: [
        { name: 'contactEyebrow', type: 'text', defaultValue: 'Begin the Conversation' },
        {
          name: 'contactTitle',
          type: 'text',
          defaultValue: 'Visit us — experience it for yourself',
        },
        {
          name: 'contactIntro',
          type: 'textarea',
          defaultValue:
            'Words can only describe so much. Come spend an afternoon with us, share a meal, meet our residents, and feel the warmth of Aroha for yourself.',
        },
        { name: 'contactCallLabel', type: 'text', defaultValue: 'Call Us' },
        { name: 'contactEmailLabel', type: 'text', defaultValue: 'Email Us' },
        { name: 'contactWhatsappLabel', type: 'text', defaultValue: 'WhatsApp' },
        { name: 'contactVisitLabel', type: 'text', defaultValue: 'Visit Us' },
        { name: 'contactHoursLabel', type: 'text', defaultValue: 'Hours' },
        {
          name: 'contactHoursValue',
          type: 'text',
          defaultValue: 'Visits by appointment · 9am – 7pm daily',
        },
        { name: 'contactImage', type: 'upload', relationTo: 'media' },
        {
          name: 'contactImageUrl',
          type: 'text',
          defaultValue: '/media/site/image6.png',
        },
      ],
    },
    {
      label: 'SEO',
      type: 'collapsible',
      fields: [
        {
          name: 'seoTitle',
          type: 'text',
          defaultValue: 'Aroha Living — Premium Senior Living Community',
        },
        {
          name: 'seoDescription',
          type: 'textarea',
          defaultValue:
            'A sanctuary of wellness, care and vibrant community life. Thoughtfully designed residences, 24/7 medical care, gourmet dining and a dignified retirement experience.',
        },
        {
          name: 'seoKeywords',
          type: 'text',
          defaultValue: 'senior living, retirement home, assisted living, independent living, memory care, Aroha Living',
        },
        {
          name: 'ogTitle',
          type: 'text',
          defaultValue: 'Aroha Living — Where every sunrise feels like a celebration',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          defaultValue:
            'A premium senior living community blending warmth of home, resort-grade amenities and 24/7 care.',
        },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
        {
          name: 'ogImageUrl',
          type: 'text',
          defaultValue: '/media/site/image%201.png',
        },
      ],
    },
    {
      label: 'Hero Banner',
      type: 'collapsible',
      fields: [
        {
          name: 'heroBrandTitle',
          type: 'text',
          defaultValue: 'The Park',
        },
        {
          name: 'heroBrandCaption',
          type: 'text',
          defaultValue: 'by Aroha',
        },
        {
          name: 'heroMeta',
          type: 'text',
          defaultValue: '147 Premium Residences · Medchal · Hyderabad · Launching Soon',
        },
        {
          name: 'heroSlides',
          type: 'array',
          defaultValue: [
            {
              heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
              subheading: 'A Luxury Technology-Enabled Senior Living Community',
              caption: 'A premium lifestyle, beautifully lived',
              imageUrl: '/media/site/image%201.png',
            },
            {
              heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
              subheading: 'A Luxury Technology-Enabled Senior Living Community',
              caption: 'Warm company in elegant surroundings',
              imageUrl: '/media/site/image2.png',
            },
            {
              heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
              subheading: 'A Luxury Technology-Enabled Senior Living Community',
              caption: 'Wellness and confidence every day',
              imageUrl: '/media/site/image3.png',
            },
            {
              heading: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
              subheading: 'A Luxury Technology-Enabled Senior Living Community',
              caption: 'A vibrant next chapter with style',
              imageUrl: '/media/site/image4.png',
            },
          ],
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'Where Graceful Ageing Meets <em>Modern Comfort</em>',
            },
            {
              name: 'subheading',
              type: 'text',
              defaultValue: 'A Luxury Technology-Enabled Senior Living Community',
            },
            { name: 'caption', type: 'text', defaultValue: 'Medchal, Hyderabad' },
            { name: 'ctaText', type: 'text', defaultValue: 'Enquire Now' },
            { name: 'ctaLink', type: 'text', defaultValue: '#contact' },
            { name: 'image', type: 'upload', relationTo: 'media' },
            {
              name: 'imageUrl',
              type: 'text',
              admin: {
                description: 'Optional external image URL. Used when no media upload is selected.',
              },
            },
          ],
        },
      ],
    },
    {
      label: 'Aroha Promise',
      type: 'collapsible',
      fields: [
        { name: 'promiseEyebrow', type: 'text', defaultValue: 'The Aroha Promise' },
        {
          name: 'promiseHeading',
          type: 'textarea',
          defaultValue: 'An ascent to a higher\nquality of life',
        },
        {
          name: 'promiseBody',
          type: 'textarea',
          defaultValue:
            'Aroha symbolises an ascent — a graceful rise into a life free from worries of maintenance, loneliness and safety. The Park by Aroha is a thoughtfully designed technology-enabled senior living community of 147 premium residences in serene Medchal, set within two acres of landscaped gardens.',
        },
        {
          name: 'promiseStats',
          type: 'array',
          defaultValue: [
            { value: '147', label: 'Premium residences' },
            { value: '2', label: 'Acres of landscaped greens' },
            { value: '24/7', label: 'Care-ready support ecosystem' },
          ],
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      label: 'Care-Led Community',
      type: 'collapsible',
      fields: [
        { name: 'careEyebrow', type: 'text', defaultValue: 'Care-Led Community' },
        {
          name: 'careHeading',
          type: 'textarea',
          defaultValue: 'A community shaped by\nexperience and care',
        },
        {
          name: 'careBody',
          type: 'textarea',
          defaultValue:
            'The Park by Aroha is envisioned as a thoughtfully designed active adult community, with the flexibility to seamlessly evolve into assisted living as residents’ needs change over time. Supported by experienced healthcare and service professionals, and backed by Anvayaa Elder Care, one of India’s most trusted elder care service providers, the community offers an environment where independence, reassurance, and dignity remain in perfect balance.',
        },
        { name: 'partnerLabel', type: 'text', defaultValue: 'Explore Anvayaa Elder Care' },
        { name: 'partnerUrl', type: 'text', defaultValue: 'https://www.anvayaa.com/' },
        { name: 'careMainImage', type: 'upload', relationTo: 'media' },
        {
          name: 'careMainImageUrl',
          type: 'text',
          defaultValue: '/media/site/image5.png',
        },
        { name: 'careAccentImage', type: 'upload', relationTo: 'media' },
        {
          name: 'careAccentImageUrl',
          type: 'text',
          defaultValue: '/media/site/image6.png',
        },
        { name: 'careAccentLabel', type: 'text', defaultValue: 'Anvayaa partner network' },
        { name: 'careBadgeTitle', type: 'text', defaultValue: 'Active Adult' },
        { name: 'careBadgeMeta', type: 'text', defaultValue: 'Care-ready by design' },
      ],
    },
    {
      label: 'Mission & Vision',
      type: 'collapsible',
      fields: [
        { name: 'missionEyebrow', type: 'text', defaultValue: 'Mission' },
        {
          name: 'missionTitle',
          type: 'text',
          defaultValue: 'A trusted community that adapts with every resident',
        },
        {
          name: 'missionBody',
          type: 'textarea',
          defaultValue:
            'To create a technology-enabled active adult community where seniors enjoy freedom, social connection and premium daily living, with the confidence that tailored support can grow with them over time.',
        },
        { name: 'visionEyebrow', type: 'text', defaultValue: 'Vision' },
        {
          name: 'visionTitle',
          type: 'text',
          defaultValue: "India's benchmark for graceful ageing",
        },
        {
          name: 'visionBody',
          type: 'textarea',
          defaultValue:
            'To shape communities where senior living feels aspirational, safe and deeply human — blending hospitality, healthcare readiness and thoughtful design into a new standard for later life in India.',
        },
      ],
    },
    {
      label: 'Facilities & Services',
      type: 'collapsible',
      fields: [
        { name: 'facilitiesEyebrow', type: 'text', defaultValue: 'Facilities & Services' },
        { name: 'facilitiesTitle', type: 'text', defaultValue: 'Four dimensions of thoughtful living' },
        {
          name: 'facilitiesIntro',
          type: 'textarea',
          defaultValue:
            'The Park by Aroha brings together engaging daily life, care readiness, senior-first safety and deeply personalised comfort within one integrated active adult community.',
        },
        {
          name: 'facilityCategories',
          type: 'array',
          defaultValue: [
            {
              title: 'Recreation & Engagement',
              subtitle: 'Days designed to feel meaningful',
              intro: 'An ever-changing calendar of wellness, culture and connection — so every day at The Park offers something to look forward to.',
              icon: 'sun',
              items: [
                { title: 'Yoga, Meditation & Cultural Activities', description: 'Daily yoga and wellness sessions alongside cultural programmes nurture both physical health and emotional well-being.' },
                { title: 'Community Outreach', description: 'Residents are invited to share their skills through outreach programmes, fostering a sense of purpose and connection.' },
                { title: 'Indoor Games, Gym & Walking Track', description: 'From indoor games to a senior-friendly gym and serene walking tracks, fitness and leisure support an active, balanced lifestyle.' },
                { title: 'Outdoor Activities & Amphitheatre', description: 'Beautiful outdoor spaces and an amphitheatre host events, performances and gatherings, creating a vibrant social environment.' },
                { title: 'Labyrinth for Cognitive Wellness', description: 'A thoughtfully designed labyrinth offers a meditative walking experience that supports mental clarity and cognitive stimulation.' },
                { title: 'Reflexology Track', description: 'A circular nature-cure track of pebble, sand and water surfaces gently stimulates pressure points, improving circulation and well-being.' },
                { title: 'Spiritual Accessibility', description: 'A nearby ISKCON temple and dedicated prayer rooms allow residents to nurture their spiritual practices with ease.' },
                { title: 'Multipurpose & Media Rooms', description: 'Spaces designed for movies, events and group activities ensure there is always something to look forward to.' },
              ],
            },
            {
              title: 'Medical & Health',
              subtitle: 'Care that is always within reach',
              intro: 'A complete continuum of medical support — from daily wellness to emergency response — discreetly woven into the rhythm of community life.',
              icon: 'heart',
              items: [
                { title: 'On-call Doctors & In-house Nursing', description: 'Qualified doctors and trained nursing staff, supported by emergency treatment infrastructure, ensure timely attention for routine and urgent needs alike.' },
                { title: 'Ambulance On Site', description: 'A dedicated ambulance is stationed within the premises for swift response and quick access to nearby hospitals and critical care.' },
                { title: 'Physiotherapy Services', description: 'On-site physiotherapy specialists help residents improve mobility, manage pain and maintain an active lifestyle through personalised therapy programmes.' },
                { title: 'Diagnostic Services', description: 'Regular health check-ups and diagnostics are easily accessible, supporting early detection and continuous monitoring of health conditions.' },
                { title: 'Digitised Medical Records', description: 'All health records are securely digitised, enabling seamless tracking of medical history, medications and treatments for informed, efficient care.' },
                { title: 'Smart Emergency Sensors', description: 'Optional in-home sensors can be installed to detect unusual activity or emergencies, adding a quiet layer of technology-enabled safety.' },
              ],
            },
            {
              title: 'Building & Safety',
              subtitle: 'Safety, woven into every detail',
              intro: 'Every corner of The Park is engineered around the way seniors actually live — quietly removing risk, while preserving independence and dignity in daily routines.',
              badge: 'Safety First · 6 layers of built-in protection',
              icon: 'shield',
              items: [
                { title: 'Anti-skid Flooring & Guide Rails', description: 'Every corner is designed with safety in mind. Anti-skid flooring minimises the risk of slips, while strategically placed guide rails offer continuous support so residents can move confidently and independently.' },
                { title: 'Grab Bars & Wide Doorways', description: 'Bathrooms are thoughtfully fitted with ergonomically placed grab bars and extra-wide doorways, wheelchair accessible and designed for ease, comfort and dignity.' },
                { title: '24/7 Security & CCTV', description: 'Round-the-clock security personnel and comprehensive CCTV surveillance keep the community secure. Residents and families enjoy lasting peace of mind.' },
                { title: 'Wide Corridors & Open Spaces', description: 'Spacious corridors and open layouts encourage easy navigation and effortless mobility, while creating natural settings for casual strolls and friendly encounters.' },
                { title: 'In-room Panic Buttons', description: 'Each residence is equipped with emergency panic buttons, so help is always just one press away, day or night.' },
                { title: 'Fire Hazard Protection', description: 'Advanced fire safety systems, alarms, extinguishers and rehearsed evacuation protocols are integrated throughout the property for maximum protection.' },
              ],
            },
            {
              title: 'Customized Living',
              subtitle: 'Comfort, exactly the way you like it',
              intro: 'From dietician-curated meals to in-room dining and quiet sanitised surrounds — daily living at The Park is shaped around personal preference and considered respect.',
              icon: 'home',
              items: [
                { title: 'Nutritious, Home-Style Dining', description: 'Freshly prepared meals that feel like home, balanced for taste and nutrition so residents enjoy every bite.' },
                { title: 'Dietician-supported Meal Planning', description: 'Personalised meal plans cater to individual health needs, ensuring the right nutrition for every lifestyle and condition.' },
                { title: 'Modern Restaurant with Separate Veg & Non-Veg Kitchens', description: 'Dedicated kitchen and dining spaces respect dietary preferences with quiet dignity, alongside private dining spaces for guests and family.' },
                { title: 'Room Dining Options', description: 'Residents may enjoy meals in the comfort of their own homes whenever they prefer privacy or convenience.' },
                { title: 'Filtered Drinking Water', description: 'Clean, safe and purified drinking water is available throughout the community.' },
                { title: 'Sanitised Living Environment', description: 'High standards of hygiene and sanitation across all spaces promote a safe and healthy living atmosphere.' },
                { title: 'Guest Suites', description: 'Luxuriously furnished guest suites make visiting family and friends feel completely at home.' },
                { title: 'Daily Convenience Services', description: 'A grocery store, laundry service, salon and other on-site essentials are planned to cater to everyday needs with ease.' },
              ],
            },
          ],
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
            { name: 'intro', type: 'textarea', required: true },
            { name: 'badge', type: 'text' },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Heart', value: 'heart' },
                { label: 'Shield', value: 'shield' },
                { label: 'Utensils', value: 'utensils' },
                { label: 'Dumbbell', value: 'dumbbell' },
                { label: 'Book', value: 'book' },
                { label: 'Leaf', value: 'leaf' },
                { label: 'Wifi', value: 'wifi' },
                { label: 'Bus', value: 'bus' },
                { label: 'Users', value: 'users' },
                { label: 'Star', value: 'star' },
                { label: 'Sun', value: 'sun' },
                { label: 'Home', value: 'home' },
              ],
              defaultValue: 'star',
            },
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Master Plan',
      type: 'collapsible',
      fields: [
        { name: 'masterPlanEyebrow', type: 'text', defaultValue: 'The Master Plan' },
        { name: 'masterPlanTitle', type: 'text', defaultValue: 'Thoughtfully composed' },
        {
          name: 'masterPlanBody',
          type: 'textarea',
          defaultValue:
            'A 2-acre gated estate where every residence opens to landscaped courts, walking loops and quiet greens. Curated zones balance privacy, community life and effortless wayfinding for residents of every age.',
        },
        { name: 'masterPlanImage', type: 'upload', relationTo: 'media' },
        { name: 'masterPlanImageUrl', type: 'text', defaultValue: '/media/site/masterplan.jpg' },
        { name: 'masterPlanPlaceholderLabel', type: 'text', defaultValue: 'Site Layout' },
        { name: 'masterPlanPlaceholderNote', type: 'text', defaultValue: 'Plans can be inserted later' },
      ],
    },
    {
      label: 'Residences',
      type: 'collapsible',
      fields: [
        { name: 'residencesEyebrow', type: 'text', defaultValue: 'The Residences' },
        { name: 'residencesTitleLineOne', type: 'text', defaultValue: 'Infinite comfort' },
        { name: 'residencesTitleLineTwo', type: 'text', defaultValue: 'Crafted for Comfort' },
        {
          name: 'residencesIntro',
          type: 'textarea',
          defaultValue:
            'Senior-first design, luxury-first finish — every residence tailored for dignified independent living. Seven floor plans are planned across the community, with detailed floor plan pages to be added next.',
        },
        {
          name: 'residenceCards',
          type: 'array',
          defaultValue: [
            {
              title: 'Studio and compact layouts',
              description: 'Thoughtfully planned homes for effortless upkeep, generous daylight and comfortable everyday movement.',
              imageUrl: '/media/site/residence-01.jpg',
            },
            {
              title: 'Spacious premium apartments',
              description: 'Elegant living and dining zones shaped around senior-first circulation, privacy and warm material finishes.',
              imageUrl: '/media/site/residence-02.jpg',
            },
            {
              title: 'Details crafted for comfort',
              description: 'Senior-first bathrooms, practical storage and calm interiors help every home feel dignified, safe and intuitive.',
              imageUrl: '/media/site/residence-03.jpg',
            },
          ],
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imageUrl', type: 'text' },
          ],
        },
        {
          name: 'floorplanNote',
          type: 'text',
          defaultValue: 'Floor plans page can be inserted later.',
        },
      ],
    },
    {
      label: 'Walkthrough Video',
      type: 'collapsible',
      fields: [
        {
          name: 'walkthroughVideo',
          type: 'upload',
          relationTo: 'media',
          label: 'Video File (MP4 recommended)',
          admin: {
            description: 'Upload the site walkthrough video. It will play muted and looped on the homepage.',
          },
        },
        {
          name: 'walkthroughVideoTitle',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Experience The Park by Aroha',
        },
        {
          name: 'walkthroughVideoCaption',
          type: 'textarea',
          label: 'Section Caption',
          defaultValue:
            'Take a virtual walk through our beautifully designed community in Medchal, Hyderabad — explore the lush surroundings, elegant apartments, and vibrant amenities.',
        },
      ],
    },
  ],
}
