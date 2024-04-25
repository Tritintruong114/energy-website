/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Button,
  Check,
  Container,
  Heading,
  SaveEnergy,
  Section,
} from "@/components";
import cx from "clsx";
import Link from "next/link";
import { useState } from "react";

const PricingPage = () => {
  const [recommended, setRecommended] = useState<boolean>(true);

  return (
    <Section className="bg-white">
      <Container>
        <div>
          <Heading as="h1" className="text-hero">
            Pricing
          </Heading>
          <p className="max-w-xl">
            Our pricing plans are simple and designed to cater to households and
            companies of various sizes. Choose a plan that suits your needs and
            budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 my-12 sm:my-24 gap-8">
          <div
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
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="text-features flex items-center gap-4">
              $59<span className="text-label text-neutral-500">per month</span>
            </Heading>
            <p className="mt-6">
              For small households or businesses with moderate energy
              consumption
            </p>
            <Button
              variant={recommended === true ? "tetriary-reversed" : "tetriary"}
              className="w-full mt-8 py-4"
            >
              <Link href="/">Get Started</Link>
            </Button>
            <div>
              <Heading as="h4" className="my-4">
                What's included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
          <div
            className={cx(
              "px-8 col-span-2 shadow-xl md:col-span-1  relative overflow-hidden pb-8 pt-14 rounded-3xl",
              recommended === false
                ? "border-none bg-secondary-950 text-white"
                : "border-t-4 border-primary-300"
            )}
          >
            {recommended === false && (
              <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                Recommended
              </p>
            )}
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="text-features flex items-center gap-4">
              $59<span className="text-label text-neutral-500">per month</span>
            </Heading>
            <p className="mt-6">
              For small households or businesses with moderate energy
              consumption
            </p>
            <Button
              variant={recommended === false ? "tetriary-reversed" : "tetriary"}
              className="w-full mt-8 py-4"
            >
              <Link href="/">Get Started</Link>
            </Button>
            <div>
              <Heading as="h4" className="my-4">
                What's included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
          <div
            className={cx(
              "px-8 col-span-2 shadow-xl md:col-span-1  relative overflow-hidden pb-8 pt-14 rounded-3xl",
              recommended === false
                ? "border-none bg-secondary-950 text-white"
                : "border-t-4 border-primary-300"
            )}
          >
            {recommended === false && (
              <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                Recommended
              </p>
            )}
            <span className="mb-4 text-sub-title">Basic</span>
            <Heading as="h2" className="text-features flex items-center gap-4">
              $59<span className="text-label text-neutral-500">per month</span>
            </Heading>
            <p className="mt-6">
              For small households or businesses with moderate energy
              consumption
            </p>
            <Button
              variant={recommended === false ? "tetriary-reversed" : "tetriary"}
              className="w-full mt-8 py-4"
            >
              <Link href="/">Get Started</Link>
            </Button>
            <div>
              <Heading as="h4" className="my-4">
                What's included
              </Heading>
              <ul className="grid gap-2">
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
                <li className="flex gap-2 items-center">
                  <Check /> Fixed amount of renewable energy supply
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-10 shadow-xl bg-primary-300 rounded-3xl flex md:flex-row items-center flex-col gap-4">
          <div>
            <SaveEnergy />
          </div>
          <div className="">
            <Heading as="h3" className="font-medium text-label mb-2">
              Not sure which plan to choose?
            </Heading>
            <p className="text-primary-9500">
              For assistance, please visit our Contact Us page or call our
              customer support hotline at (671) 555-0110. Our dedicated team is
              ready to help you on your journey to a greener, more sustainable
              future.
            </p>
          </div>

          <Button variant="primary" className="shrink-0 bg-white h-fit">
            <Link href="/">Book a free consultation</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default PricingPage;
