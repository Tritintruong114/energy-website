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
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "form",
          type: "form",
        }),
        defineArrayMember({
          name: "video",
          type: "video",
        }),
        defineArrayMember({
          name: "callToAction",
          type: "reference",
          to: [{ type: "promotion" }],
        }),
        defineArrayMember({
          name: "project",
          type: "project",
        }),
        defineArrayMember({
          name: "expertises",
          type: "expertises",
        }),
        defineArrayMember({
          name: "sectionImageOverlay",
          type: "sectionImageOverlay",
        }),
      ],
    }),
  ],
});
export default pageType;
