import { defineField, defineType } from "sanity";

export const aboutUsType = defineType({
  name: "aboutUs",
  type: "object",
  title: "About Us",
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
      name: "excerpt",
      type: "text",
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
      name: "image",
      type: "image",
    }),
    defineField({
      name: "aboutUsImageLeft",
      type: "image",
    }),
    defineField({
      name: "aboutUsImageRight",
      type: "image",
    }),
    defineField({
      name: "solutions",
      type: "array",
      of: [
        defineField({
          name: "solution",
          type: "textWithIllustration",
        }),
      ],
    }),
    defineField({
      name: "aboutUsContentRight",
      type: "array",
      of: [
        defineField({
          name: "solution",
          type: "textWithIllustration",
        }),
        defineField({
          name: "image",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "aboutUsContentLeft",
      type: "array",
      of: [
        defineField({
          name: "solution",
          type: "textWithIllustration",
        }),
        defineField({
          name: "image",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "slider",
      type: "gallery",
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
        subtitle: "About Us",
      };
    },
  },
});
