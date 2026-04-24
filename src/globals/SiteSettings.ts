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
      defaultValue: 'Aroha Living',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Redefining Retirement. Celebrating Life.',
    },
    {
      label: 'Contact',
      type: 'collapsible',
      fields: [
        { name: 'phone', type: 'text', defaultValue: '+91-XXXXXXXXXX' },
        { name: 'email', type: 'email', defaultValue: 'info@arohaliving.com' },
        { name: 'address', type: 'textarea', defaultValue: 'Hyderabad, Telangana, India' },
        { name: 'whatsapp', type: 'text', defaultValue: '+91XXXXXXXXXX' },
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
  ],
}
