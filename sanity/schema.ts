import { type SchemaTypeDefinition } from "sanity";

import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import imageGalleryType from "./schemaTypes/gallery";
import { heroType } from "./schemaTypes/hero";
import pageType from "./schemaTypes/page";
import post from "./schemaTypes/post";
import { promotionType } from "./schemaTypes/promotionType";
import textWithIllustrationType from "./schemaTypes/textWithIllu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    imageGalleryType,
    category,
    blockContent,
    promotionType,
    pageType,
    textWithIllustrationType,
    heroType,
  ],
};
