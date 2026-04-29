import type { CollectionConfig } from 'payload'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: { useAsTitle: 'name', group: 'Admin' },
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    { name: 'name', type: 'text', required: true, maxLength: 50 },
    { name: 'phone', type: 'text', required: true, maxLength: 20 },
    { name: 'email', type: 'email' },
    {
      name: 'interest',
      type: 'select',
      options: [
        { label: 'Active Adult Community', value: 'active-adult' },
        { label: 'Residence Details', value: 'residences' },
        { label: 'Wellness & Medical Services', value: 'wellness' },
        { label: 'Schedule a Visit', value: 'visit' },
        { label: 'General Enquiry', value: 'general' },
        { label: 'Other', value: 'other' },
      ],
    },
    { name: 'message', type: 'textarea', maxLength: 1000 },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: { position: 'sidebar' },
    },
  ],
}
