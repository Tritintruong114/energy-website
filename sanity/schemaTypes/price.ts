import { defineField, defineType } from "sanity";

const priceType = defineType({
  name: "price",
  type: "object",
  title: "Price",
  fields: [
    defineField({
      name: "availablePlan",
      type: "array",
      of: [
        defineField({
          name: "priceInformation",
          type: "priceInformation",
        }),
      ],
    }),
  ],
});

export default priceType;
