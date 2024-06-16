import { defineField, defineType } from "sanity";

const jobType = defineType({
  name: "job",
  type: "object",
  title: "Job Information",
  fields: [
    defineField({
      name: "department",
      type: "string",
    }),
    defineField({
      name: "available",
      type: "array",
      of: [
        defineField({
          name: "positions",
          type: "jobInformation",
        }),
      ],
    }),
  ],
});

export default jobType;
