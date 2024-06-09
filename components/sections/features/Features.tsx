import { Container, Heading, Section, SubTitle } from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getHomepage } from "@/sanity/queries/page";
import Link from "next/link";

export const capitalized = (name: any) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
export const Features = async () => {
  const data = await getHomepage();
  const { solutions } = data;
  return (
    <Section className="bg-[#FFF7ED] rounded-3xl">
      <Container>
        <SubTitle subTitle={solutions.tagline} className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              {solutions.heading}
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 gap-8  xl:grid-cols-4">
            {solutions.solutions.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-6 items-start">
                  <DynamicIcon name={capitalized(item.icon)} />
                  <div>
                    <Heading as="h3" className="text-title leading-none mb-4">
                      {item.heading}
                    </Heading>
                    <p className="text-neutral-800">{item.excerpt}</p>
                  </div>
                  <button className="text-primary-950">
                    <Link href="/about-us">Read More</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
