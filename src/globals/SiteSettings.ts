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
      label: 'Hero Banner',
      type: 'collapsible',
      fields: [
        {
          name: 'heroSlides',
          type: 'array',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'text' },
            { name: 'ctaText', type: 'text', defaultValue: 'Enquire Now' },
            { name: 'ctaLink', type: 'text', defaultValue: '#contact' },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
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
