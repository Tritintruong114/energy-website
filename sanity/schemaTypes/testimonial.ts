import { defineField, defineType } from "sanity";

const testimonialType = defineType({
  name: "testimonial",
  type: "object",
  title: "Testimonial",
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
      name: "testimonial",
      type: "text",
    }),
    defineField({
      name: "customerName",
      type: "string",
    }),
    defineField({
      name: "customerCompany",
      type: "string",
    }),
    defineField({
      name: "customerImage",
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

export default testimonialType;
