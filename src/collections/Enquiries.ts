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
    { name: 'name', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'email', type: 'email' },
    {
      name: 'interest',
      type: 'select',
      options: [
        { label: 'Independent Living', value: 'independent' },
        { label: 'Assisted Living', value: 'assisted' },
        { label: 'Memory Care', value: 'memory' },
        { label: 'Schedule a Visit', value: 'visit' },
        { label: 'General Enquiry', value: 'general' },
      ],
    },
    { name: 'message', type: 'textarea' },
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
