/* eslint-disable react/no-unescaped-entities */
export const revalidate = 0;

import { Button, Check, Container, Heading, Section } from "@/components";
import DynamicIcon from "@/components/elements/icons/IconComponent";
import { getPricingPage } from "@/sanity/queries/page";
import cx from "clsx";
import Link from "next/link";

const PricingPage = async () => {
  const data = await getPricingPage();

  const { hero, price, consultation } = data;

  return (
    <Section className="bg-white">
      <Container>
        <div>
          <Heading as="h1" className="text-hero">
            {hero.heading}
          </Heading>
          <p className="max-w-xl">{hero.tagline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 my-12 sm:my-24 gap-8">
          {price.availablePlan.map((item: any, index: number) => {
            const { plan, price, recommended, time, desc, cta, benefits } =
              item;
            return (
              <div
                key={index}
                className={cx(
                  "px-8 col-span-2 shadow-xl md:col-span-1  relative overflow-hidden pb-8 pt-14 rounded-3xl",
                  recommended === true
                    ? "border-none bg-secondary-950 text-white"
                    : "border-t-4 border-primary-300"
                )}
              >
                {recommended === true && (
                  <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                    Recommended
                  </p>
                )}
                <span className="mb-4 text-sub-title">{plan}</span>
                <Heading
                  as="h2"
                  className="text-features flex items-center gap-4"
                >
                  {price}
                  <span className="text-label text-neutral-500">{time}</span>
                </Heading>
                <p className="mt-6">{desc}</p>
                <Button
                  variant={recommended ? "tetriary-reversed" : "tetriary"}
                  className="w-full mt-8 py-4"
                >
                  <Link href={cta.link || "/"}>{cta.title} </Link>
                </Button>
                <div>
                  <Heading as="h4" className="my-4">
                    What's included
                  </Heading>
                  <ul className="grid gap-2">
                    {benefits.map((benefit: any, index: number) => {
                      return (
                        <li key={index} className="flex gap-2 items-center">
                          <Check /> {benefit}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-10 shadow-xl bg-primary-300 rounded-3xl flex md:flex-row items-center flex-col gap-4">
          <div>
            <DynamicIcon name={consultation.icon} />
          </div>
          <div className="">
            <Heading as="h3" className="font-medium text-label mb-2">
              {consultation.heading}
            </Heading>
            <p className="text-primary-9500">{consultation.excerpt}</p>
          </div>

          <Button variant="primary" className="shrink-0 bg-white h-fit">
            <Link href={consultation.cta.link}>{consultation.cta.title}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default PricingPage;
