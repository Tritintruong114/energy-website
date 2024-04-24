import {
  ArrowUpRight,
  Button,
  Clock,
  Container,
  Heading,
  Location,
  Section,
  SubTitle,
} from "@/components";

const CareersPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Careers" />
        <div>
          <Heading className="text-hero text-white leading-none" as="h1">
            Join Our Team
          </Heading>
          <p className="text-neutral-300 mt-6">
            Our philosophy is simple – make the world a greener place.
          </p>
        </div>

        <div className="grid gap-14 mt-12 sm:mt-24">
          <div className="col-span-full">
            <Heading as="h3" className="text-white text-sub-title mb-8">
              Research and Development (R&D)
            </Heading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-primary-300 group hover:bg-white duration-300 col-span-1 px-8 py-6 rounded-3xl border-t-4 border-white hover:border-primary-300">
                <Heading as="h4" className="font-medium text-label">
                  Renewable Energy Researcher
                </Heading>
                <div className="flex gap-2 flex-wrap mt-4">
                  <span className="px-2 flex items-center group-hover:border-primary-300 gap-1 group-hover:bg-secondary-950 group-hover:text-white duration-300 py-1 border font-medium border-neutral-400 bg-white rounded-full">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="px-2 py-1 flex items-center group-hover:border-primary-300 gap-1 group-hover:bg-secondary-950 group-hover:text-white duration-300 border font-medium border-neutral-400 bg-white rounded-full">
                    <Clock />
                    Full-Time
                  </span>
                </div>
                <Button className="mt-6 flex items-center gap-1">
                  Apply <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <Heading as="h3" className="text-white text-sub-title mb-8">
              Engineering{" "}
            </Heading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-primary-300 group hover:bg-white duration-300 col-span-1 px-8 py-6 rounded-3xl border-t-4 border-white hover:border-primary-300">
                <Heading as="h4" className="font-medium text-label">
                  Renewable Energy Researcher
                </Heading>
                <div className="flex gap-2 flex-wrap mt-4">
                  <span className="px-2 flex items-center group-hover:border-primary-300 gap-1 group-hover:bg-secondary-950 group-hover:text-white duration-300 py-1 border font-medium border-neutral-400 bg-white rounded-full">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="px-2 py-1 flex items-center group-hover:border-primary-300 gap-1 group-hover:bg-secondary-950 group-hover:text-white duration-300 border font-medium border-neutral-400 bg-white rounded-full">
                    <Clock />
                    Full-Time
                  </span>
                </div>
                <Button className="mt-6 flex items-center gap-1">
                  Apply <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CareersPage;
