import { Check, Container, Heading, Section, SubTitle } from "@/components";
import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="About us" />
        <div className="grid xl:grid-cols-2 gap-12 md:gap-36">
          <div className="flex justify-center flex-col gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
              Committed to a sustainable future
            </Heading>
            <p className="text-white">
              As a pioneering force in the green energy sector, we ve been at
              the forefront of the transition to clean, renewable power sources.
              Our mission is simple yet profound: to create a world where energy
              is not only abundant but also environmentally responsible. We
              believe that by harnessing the power of nature, we can power the
              world and protect it simultaneously.
            </p>
            <ul className="mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4">
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Check item
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel />
          </div>
        </div>
      </Container>
    </Section>
  );
};
