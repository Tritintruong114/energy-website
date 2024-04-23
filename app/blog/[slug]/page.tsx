export const revalidate = 0;

import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { getDetailPost } from "@/sanity/queries/posts";
import { PortableTextComponents } from "@portabletext/react";
import { default as imageUrlBuilder } from "@sanity/image-url";

import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
const componentsTest: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl mb-6 leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="sm:h-[45vh] aspect-auto w-full h-[33vh]  mb-6">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-400 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold underline text-yellow-300"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await getDetailPost(slug);

  return (
    <section
      id="section"
      className="py-24 sm:py-24 relative w-full justify-center flex items-center bg-black"
    >
      <div
        id="container"
        className=" px-6 sm:px-24 w-full h-full flex flex-col items-center"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row text-white border-b-white border-b-2 pb-5 justify-between items-start sm:items-center">
            <div>
              <p>{data.author}</p>
              <p>{data.publishedAt}</p>
            </div>
            <div className="flex flex-wrap">
              {data.categories.map((category: string, index: number) => {
                return (
                  <p
                    className="border-2 border-white rounded-full px-6 py-2"
                    key={index}
                  >
                    {category}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-6xl text-white font-bebas leading-none">
              {data.title}
            </h1>
          </div>
          <div className="aspect-auto h-[45vh] sm:h-auto w-full">
            <Image
              src={data.imageUrl}
              alt={data.slug.current || ""}
              width={420}
              height={600}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="text-white w-full sm:w-[60vw] flex justify-center items-start flex-col">
          <PortableText value={data.body} components={componentsTest} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
