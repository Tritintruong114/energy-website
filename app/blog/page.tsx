export const revalidate = 0;

import { getPosts, Post } from "@/sanity/queries/posts";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const postsData: Post[] = await getPosts();

  return (
    <section
      id="section"
      className="py-24 sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>Our Blogs</h1>
        </div>
        <div className="grid justify-between w-full gap-6 grid-cols-1 sm:grid-cols-3">
          {postsData.map((post, index) => {
            return (
              <Link key={index} href={`blog/${post.slug?.current}` || ""}>
                <div className="w-full col-span-1 group shrink-0 border border-white px-3 py-2">
                  <div className="flex flex-col mb-6">
                    <h2 className="text-white text-xl">{post.title}</h2>

                    <div className="flex justify-between w-full">
                      <span className="text-white text-sm">{post.author}</span>
                      <span className="text-white text-sm">
                        {post.publishedAt}
                      </span>
                    </div>
                  </div>
                  <div className="h-[250px] w-full relative overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title || ""}
                      width={320}
                      height={450}
                      className="absolute w-full group-hover:scale-110 duration-300 h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
