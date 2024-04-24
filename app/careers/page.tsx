import {
  ArrowUpRight,
  Button,
  Clock,
  Container,
  Heading,
  Location,
  Section,
} from "@/components";

const CareersPage = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <div>
          <Heading as="h1" className="text-hero text-white leading-none">
            Join our team
          </Heading>
          <p className="text-neutral-300 mt-6">
            Our philosophy is simple – make the world a greener place.
          </p>
        </div>

        <div className="grid gap-16 mt-12 sm:mt-24">
          <div>
            <Heading as="h3" className="text-white text-sub-title mb-8">
              Research and Development (R&D)
            </Heading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                <Heading className="text-label font-medium" as="h4">
                  Renewable Energy Researcher
                </Heading>

                <div className="flex gap-2 mt-4">
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Clock />
                    Full-time
                  </span>
                </div>
                <Button className="mt-6 flex items-center gap-1">
                  Apply <ArrowUpRight />
                </Button>
              </div>
              <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                <Heading className="text-label font-medium" as="h4">
                  Renewable Energy Researcher
                </Heading>

                <div className="flex gap-2 mt-4">
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Clock />
                    Full-time
                  </span>
                </div>
                <Button className="mt-6 flex items-center gap-1">
                  Apply <ArrowUpRight />
                </Button>
              </div>
              <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                <Heading className="text-label font-medium" as="h4">
                  Renewable Energy Researcher
                </Heading>

                <div className="flex gap-2 mt-4">
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Clock />
                    Full-time
                  </span>
                </div>
                <Button className="mt-6 flex items-center gap-1">
                  Apply <ArrowUpRight />
                </Button>
              </div>
              <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                <Heading className="text-label font-medium" as="h4">
                  Renewable Energy Researcher
                </Heading>

                <div className="flex gap-2 mt-4">
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Location />
                    San Francisco, US
                  </span>
                  <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                    <Clock />
                    Full-time
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
