import { type SchemaTypeDefinition } from "sanity";

import { aboutUsType } from "./schemaTypes/aboutUs";
import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import imageGalleryType from "./schemaTypes/gallery";
import { heroType } from "./schemaTypes/hero";
import { metricsType } from "./schemaTypes/metrics";
import { ourExpertsType } from "./schemaTypes/ourExpert";
import pageType from "./schemaTypes/page";
import post from "./schemaTypes/post";
import { promotionType } from "./schemaTypes/promotionType";
import { solutionsType } from "./schemaTypes/solutions";
import { testimonialsType } from "./schemaTypes/testimonials";
import textWithIllustrationType from "./schemaTypes/textWithIllu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    heroType,
    pageType,
    aboutUsType,
    metricsType,
    blockContent,
    ourExpertsType,
    promotionType,
    solutionsType,
    imageGalleryType,
    testimonialsType,
    textWithIllustrationType,
  ],
};
