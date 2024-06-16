import { defineField, defineType } from "sanity";

export const testimonialsType = defineType({
  name: "testimonials",
  type: "object",
  title: "Testimonials",
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
      name: "Testimonials",
      type: "array",
      of: [
        defineField({
          name: "testimonial",
          type: "textWithIllustration",
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
        subtitle: "Testimonials",
      };
    },
  },
});
