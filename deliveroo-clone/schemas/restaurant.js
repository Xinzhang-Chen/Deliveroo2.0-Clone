import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating for the restaurant (from 1 to 5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
  ],
})
