import { Heading, Linkedln, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getHomepage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

export const OurExpert = async () => {
  const data = await getHomepage();
  const { ourExperts } = data;
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={ourExperts.tagline} />
        <div>
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="text-section leading-none text-white">
              {ourExperts.heading}
            </Heading>
            <p className="text-neutral-400">{ourExperts.excerpt}</p>
          </div>
          <div className="mt-20">
            {ourExperts.ourExperts.map((expert: any, index: number) => {
              return (
                <div
                  key={index}
                  className="py-8 border-b flex gap-12 items-center border-neutral-700"
                >
                  <div className="h-[90px] w-[90px] shrink-0 relative">
                    <Image
                      src={expert.image}
                      alt="Expert Image"
                      width={90}
                      height={90}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                      <Heading as="h3" className="text-sub-title">
                        {expert.heading}
                      </Heading>
                      <p className="text-neutral-500">{expert.tagline}</p>
                    </div>
                    <Link target="_blank" href={expert.link}>
                      <Linkedln />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
