import { defineField, defineType } from "sanity";

const projectType = defineType({
  name: "project",
  type: "object",
  title: "Project Information",
  fields: [
    defineField({
      name: "projectname",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
    }),
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});

export default projectType;
