import { type SchemaTypeDefinition } from "sanity";

import { aboutUsType } from "./schemaTypes/aboutUs";
import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import imageGalleryType from "./schemaTypes/gallery";
import { heroType } from "./schemaTypes/hero";
import jobType from "./schemaTypes/job";
import { jobInformationType } from "./schemaTypes/jobInformation";
import { metricsType } from "./schemaTypes/metrics";
import { ourExpertsType } from "./schemaTypes/ourExpert";
import { ourPhilosophy } from "./schemaTypes/ourPhilosophy";
import pageType from "./schemaTypes/page";
import post from "./schemaTypes/post";
import priceType from "./schemaTypes/price";
import { priceInformationType } from "./schemaTypes/priceInformation";
import { promotionType } from "./schemaTypes/promotionType";
import { solutionsType } from "./schemaTypes/solutions";
import { testimonialsType } from "./schemaTypes/testimonials";
import textWithIllustrationType from "./schemaTypes/textWithIllu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    jobType,
    category,
    heroType,
    pageType,
    priceType,
    aboutUsType,
    metricsType,
    blockContent,
    ourExpertsType,
    promotionType,
    solutionsType,
    ourPhilosophy,
    imageGalleryType,
    testimonialsType,
    jobInformationType,
    priceInformationType,
    textWithIllustrationType,
  ],
};
