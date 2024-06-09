import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ourExpertsType = defineType({
  name: "ourExperts",
  type: "object",
  title: "Our Experts",
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
      name: "ourExperts",
      type: "array",
      of: [
        defineField({
          name: "Expert",
          type: "textWithIllustration",
        }),
      ],
    }),
    defineField({
      name: "slider",
      type: "gallery",
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Our Experts",
        media: image || DocumentTextIcon,
      };
    },
  },
});
