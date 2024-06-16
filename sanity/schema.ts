import { type SchemaTypeDefinition } from "sanity";

import { aboutUsType } from "./schemaTypes/aboutUs";
import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import { heroType } from "./schemaTypes/hero";
import imageGalleryType from "./schemaTypes/imageGallery";
import jobType from "./schemaTypes/job";
import { jobInformationType } from "./schemaTypes/jobInformation";
import { metricsType } from "./schemaTypes/metrics";
import { ourExpertsType } from "./schemaTypes/ourExpert";
import { ourPhilosophy } from "./schemaTypes/ourPhilosophy";
import pageType from "./schemaTypes/page";
import post from "./schemaTypes/post";
import priceType from "./schemaTypes/price";
import { priceInformationType } from "./schemaTypes/pricInformation";
import { promotionType } from "./schemaTypes/promotion";
import { solutionsType } from "./schemaTypes/solutions";
import { testimonialsType } from "./schemaTypes/testimonials";
import textWithIllustrationType from "./schemaTypes/textWithIllu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    heroType,
    jobType,
    priceType,
    priceInformationType,
    category,
    blockContent,
    pageType,
    textWithIllustrationType,
    promotionType,
    imageGalleryType,
    jobInformationType,
    ourPhilosophy,
    aboutUsType,
    solutionsType,
    metricsType,
    ourExpertsType,
    testimonialsType,
  ],
};
