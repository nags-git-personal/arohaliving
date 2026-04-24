import type { CollectionConfig } from 'payload'

export const Amenities: CollectionConfig = {
  slug: 'amenities',
  admin: { useAsTitle: 'title', group: 'Content' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Heart (Healthcare)', value: 'heart' },
        { label: 'Shield (Security)', value: 'shield' },
        { label: 'Utensils (Dining)', value: 'utensils' },
        { label: 'Dumbbell (Fitness)', value: 'dumbbell' },
        { label: 'Book (Library)', value: 'book' },
        { label: 'Leaf (Garden)', value: 'leaf' },
        { label: 'Wifi (Smart Home)', value: 'wifi' },
        { label: 'Bus (Transport)', value: 'bus' },
        { label: 'Users (Community)', value: 'users' },
        { label: 'Star (Luxury)', value: 'star' },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
