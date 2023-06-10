import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lineBreak',
  type: 'object',
  title: 'Line Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      title: 'Break style',
      readOnly: true,
      initialValue: '----------------',
    }),
  ],
})
