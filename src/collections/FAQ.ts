import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: { useAsTitle: 'question', group: 'Content' },
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'textarea', required: true },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Pricing', value: 'pricing' },
        { label: 'Amenities', value: 'amenities' },
        { label: 'Admission', value: 'admission' },
      ],
      defaultValue: 'general',
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
