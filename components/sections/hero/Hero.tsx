export const revalidate = 0;

import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getHomepage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Hero = async () => {
  const data = await getHomepage();
  const { hero, gallery, promotion } = data;

  return (
    <Section className="bg-secondary-950 h-fit flex flex-col gap-32">
      <Container className="h-1/2 flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="text-white">
            <Heading as="h1" className="text-hero leading-none">
              {hero.heading}
            </Heading>
          </div>
          <div className="mt-10 xl:mt-0">
            <p className="text-base text-white mb-10">{hero.tagline}</p>
            <Button variant="secondary">
              <Link href={promotion.link}>{promotion.title}</Link>
            </Button>
          </div>
        </div>
      </Container>
      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill>
          <div className="flex justify-center gap-6 items-start mx-3">
            {gallery.imageUrls.map((item: any) => {
              return (
                <>
                  <Image
                    src={item.url}
                    alt="Hero Image"
                    width={450}
                    height={250}
                  />
                </>
              );
            })}
          </div>
        </Marquee>
      </div>
    </Section>
  );
};

export { Hero };
