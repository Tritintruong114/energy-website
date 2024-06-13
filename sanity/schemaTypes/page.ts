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
        // Sections
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "solutions",
          type: "solutions",
        }),
        defineArrayMember({
          name: "promotion",
          type: "promotion",
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
        defineArrayMember({
          name: "job",
          type: "job",
        }),
        defineArrayMember({
          name: "price",
          type: "price",
        }),

        //  Elements
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
        defineArrayMember({
          name: "priceInformation",
          type: "priceInformation",
        }),
      ],
    }),
  ],
});
export default pageType;
