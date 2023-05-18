export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        title: 'Author',
        name: 'author',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags',
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        title: 'Content',
        name: 'content',
        type: 'array',
        of: [{type: 'block'}],
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
    ],
  }
  