import { defineField, defineType } from "sanity";

const expertisesType = defineType({
  name: "expertises",
  type: "object",
  title: "Expertises",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
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
      name: "link",
      type: "url",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});

export default expertisesType;
