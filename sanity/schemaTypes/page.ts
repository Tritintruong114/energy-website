import { defineArrayMember, defineField, defineType } from "sanity";

const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "promotion",
          type: "promotion",
        }),
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "job",
          type: "job",
        }),
        defineArrayMember({
          name: "solutions",
          type: "solutions",
        }),
        defineArrayMember({
          name: "price",
          type: "price",
        }),
        defineArrayMember({
          name: "priceInformation",
          type: "priceInformation",
        }),
        defineArrayMember({
          name: "aboutUs",
          type: "aboutUs",
        }),
        defineArrayMember({
          name: "metrics",
          type: "metrics",
        }),
        defineArrayMember({
          name: "testimonials",
          type: "testimonials",
        }),
        defineArrayMember({
          name: "ourExperts",
          type: "ourExperts",
        }),
        defineArrayMember({
          name: "ourPhilosophy",
          type: "ourPhilosophy",
        }),
      ],
    }),
  ],
});
export default pageType;
