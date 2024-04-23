import { Heading, Linkedln, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

export const OurExpert = () => {
  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle="Our experts" />
        <div>
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="text-section leading-none text-white">
              Meet our experts{" "}
            </Heading>
            <p className="text-neutral-400">
              Our team boasts top green energy experts, driving innovation in
              sustainability.
            </p>
          </div>
          <div className="mt-20">
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-sub-title">
                    Jenny Wilson
                  </Heading>
                  <p className="text-neutral-500">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-sub-title">
                    Jenny Wilson
                  </Heading>
                  <p className="text-neutral-500">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-sub-title">
                    Jenny Wilson
                  </Heading>
                  <p className="text-neutral-500">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-sub-title">
                    Jenny Wilson
                  </Heading>
                  <p className="text-neutral-500">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-sub-title">
                    Jenny Wilson
                  </Heading>
                  <p className="text-neutral-500">
                    Senior Sustainability Consultant
                  </p>
                </div>
                <Link href="/">
                  <Linkedln />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
