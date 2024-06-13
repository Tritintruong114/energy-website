export const revalidate = 0;
/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
import { getAboutpage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = async () => {
  const data = await getAboutpage();
  const { ourExperts, ourPhilosophy, promotion, hero } = data;

  console.log(hero);

  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
            <Heading as="h1" className="text-hero">
              {hero.heading}
            </Heading>
            <div>
              <p className="mb-4">{hero.tagline}</p>
              <Button variant="secondary">
                <Link href={promotion.link}>{promotion.title}</Link>
              </Button>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={hero.heroImage}
              alt="About us 1"
              width={450}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="text-section leading-none capitalize mb-24"
          >
            {ourPhilosophy.heading}
          </Heading>
          <div className="grid gap-4 sticky">
            {ourPhilosophy.philosophys.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl"
                >
                  <div>
                    <span>{item.tagline}</span>
                    <Heading as="h4" className="text-title leading-none">
                      {item.heading}
                    </Heading>
                  </div>
                  <p>{item.excerpt}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <div className="p-2 sm:p-4 bg-secondary-950">
        <NewLetter />
      </div>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="text-section leading-none capitalize mb-24"
          >
            A Team of Energy Experts
          </Heading>

          <div className="grid md:grid-cols-3 gap-4">
            {ourExperts.ourExperts.map((expert: any, index: number) => {
              return (
                <div
                  key={index}
                  className="col-span-1 relative h-[600px] rounded-xl overflow-hidden"
                >
                  <Image
                    src={expert.image}
                    alt="Member"
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                    <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                      <div className="flex justify-between items-center">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          {expert.heading}
                        </Heading>
                        <span>{expert.tagline}</span>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                        <li className="text-sub-title">{expert.excerpt}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default AboutUs;
