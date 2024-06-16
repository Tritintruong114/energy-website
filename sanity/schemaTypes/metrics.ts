import { defineField, defineType } from "sanity";

export const metricsType = defineType({
  name: "metrics",
  type: "object",
  title: "Metrics",
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
      name: "Metrics",
      type: "array",
      of: [
        defineField({
          name: "metric",
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
        subtitle: "Metrics",
      };
    },
  },
});
