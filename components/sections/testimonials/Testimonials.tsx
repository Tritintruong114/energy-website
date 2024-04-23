"use client";
import { Heading, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const Testimonials = () => {
  const size = useWindScreenowSize();
  console.log(size.width);
  return (
    <Section className="bg-secondary-950 rounded-3xl">
      <Container className="flex flex-col items-center">
        <SubTitle subTitle="Testimonials" />

        <div className="flex w-full flex-col gap-4">
          <Heading as="h2" className="text-section leading-none text-white">
            What our customers say{" "}
          </Heading>
        </div>
        <div className="mt-24">
          <Carousel
            swipeable
            stopOnHover
            showThumbs={false}
            showStatus={false}
            interval={6000}
            showArrows={false}
            autoPlay
            emulateTouch
            showIndicators={false}
            centerMode
            centerSlidePercentage={size.width < 480 ? 18 : 20}
            infiniteLoop
            useKeyboardArrows
            className="cursor-grabbing sm:w-full duration-300"
          >
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300">
              <p className="text-left min-h-[180px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </p>
              <div className="flex gap-6 items-center sm:flex-row flex-col ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-black flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-black text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};
