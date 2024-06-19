export const revalidate = 0;

import { Container, Heading, Section } from "@/components";
import { getBlogPage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const data = await getBlogPage();

  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="text-white">
          <Heading as="h1" className="text-hero leading-none">
            Our Latest Posts
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          {data.map((post: any, index: number) => {
            return (
              <div key={index} className="flex group flex-col gap-8">
                <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.mainImage}
                      alt="Blog A"
                      width={330}
                      height={330}
                      className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <Heading as="h3" className="text-white text-sub-title mb-4">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </Heading>
                    <p className="text-neutral-400 line-clamp-2">{post.desc}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.authorImage.image}
                        alt="Bruno"
                        height={40}
                        width={40}
                        className="h-[40px] object-cover rounded-full"
                      />
                      <span className="text-white">{post.name}</span>
                    </div>
                    <span className="text-white">{post.timeRead} min read</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;
