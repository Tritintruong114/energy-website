import { defineField, defineType } from "sanity";

export const jobInformationType = defineType({
  name: "jobInformation",
  type: "document",
  title: "Job Information",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
