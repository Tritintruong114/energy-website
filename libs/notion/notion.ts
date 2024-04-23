import "server-only";

import { Client } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_INTERNAL_INTEGRATION_TOKEN,
});

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
  });

  return response;
}
// export async function getPostById(id) {
//   const response = await notion.pages.retrieve({ page_id: id });
//   const pageWithProperties = response;

//   const title = pageWithProperties.properties.Name.title[0].plain_text;
//   const status = pageWithProperties.properties.Status; // Assuming status is a text property
//   const url = pageWithProperties.url;

//   const blockId = response.id;
//   const pageContent = await notion.blocks.children.list({
//     block_id: blockId,
//   });
//   return { response, title, status, url, pageContent };
// }

export const fetchPageBlocks = (id: string) => {
  return notion.blocks.children
    .list({ block_id: id })
    .then((res) => res.results as BlockObjectResponse[]);
};
