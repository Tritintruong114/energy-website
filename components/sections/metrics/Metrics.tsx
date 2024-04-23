import {
  Container,
  Heading,
  Renewable,
  SaveEnergy,
  Section,
  SubTitle,
  User,
} from "@/components";

export const Metrics = () => {
  return (
    <Section className="bg-[#FFF7ED] rounded-3xl">
      <Container>
        <SubTitle subTitle="Metrics" className="text-primary-950" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-section leading-none">
              Key to clean future
            </Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 items-start p-8 bg-primary-300 rounded-3xl">
              <Renewable />
              <div className="flex flex-col gap-6">
                <Heading as="h3" className="text-title leading-none">
                  5,000 Mwh
                </Heading>
                <Heading as="h4" className="text-sub-title">
                  Renewable Energy Generated
                </Heading>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <User />
                <div>
                  <Heading as="h3" className="text-title leading-none">
                    5,000 Mwh
                  </Heading>
                  <h4 className="text-sub-title leading-none mt-4">
                    Renewable Energy Generated
                  </h4>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                <SaveEnergy />
                <div>
                  <Heading as="h3" className="text-title leading-none">
                    5,000 Mwh
                  </Heading>
                  <Heading as="h4" className="text-sub-title leading-none mt-4">
                    Renewable Energy Generated
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
