import { Container, Ev, Heading, Section, SubTitle } from "@/components";

export const Features = () => {
  return (
    <Section className="bg-[#FFF7ED] rounded-3xl">
      <Container>
        <SubTitle subTitle="Solutions" className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              Key to clean future
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 gap-8  xl:grid-cols-4">
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <Heading as="h3" className="text-title leading-none mb-4">
                  EV charging
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950">Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
