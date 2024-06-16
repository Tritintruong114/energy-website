import { defineField, defineType } from "sanity";

export const ourPhilosophy = defineType({
  name: "ourPhilosophy",
  type: "object",
  title: "Our Philosophy",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "promotion",
    }),
    defineField({
      name: "philosophys",
      type: "array",
      of: [
        defineField({
          name: "philosophy",
          type: "textWithIllustration",
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      type: "text",
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
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Our Philosophy",
      };
    },
  },
});
