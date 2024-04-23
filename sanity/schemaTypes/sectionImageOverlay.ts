import { defineField, defineType } from "sanity";

const sectionImageOverlay = defineType({
  name: "sectionImageOverlay",
  type: "object",
  title: "Image overlay text",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
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

export default sectionImageOverlay;
