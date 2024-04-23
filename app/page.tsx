export const revalidate = 0;

import { getHomepage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default async function Home() {
  const data = await getHomepage();

  const { Hero, Content, Expertises, Gallery, SectionImageOverlay } = data;

  return (
    <main className="no-scrollbar w-screen">
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src={Hero.heroImage}
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
              Explore
            </button>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none font-bebas text-white">
                {Hero.heading}
              </h2>
              <p className="text-white text-lg">{Hero.tagline} </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
            <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
              <p className="uppercase text-xl">{Content.heading}</p>
              <p>{Content.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
              <p className="text-base">{Content.excerpt}</p>
              <Link href="/works">
                <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden h-fit relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="w-full h-fit">
            <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
              {SectionImageOverlay.heading}
            </h3>
            <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
              <Image
                src={SectionImageOverlay.imageOverlay}
                alt=""
                width={320}
                height={320}
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
              See Our Works
            </button>
          </div>
          <div className="w-full h-full items-center justify-center">
            <Marquee className="w-full h-full" autoFill speed={15}>
              <div className="flex">
                {Gallery.imageUrls.map((image: ImageType, index: number) => {
                  return (
                    <div key={index} className="sm:w-[33vw] h-full">
                      <Image
                        src={image.url}
                        alt=""
                        width={320}
                        height={320}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden sm:py-24 py-6 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bebas">Our Expertise</h2>
          </div>
          <div className="w-full h-full gap-6 flex flex-col sm:flex-row justify-between items-center">
            {Expertises.map((expertise: any, index: number) => {
              return (
                <Link
                  key={index}
                  href="/works"
                  className="h-full w-full border-2 border-black p-6 group sm:w-1/2 flex items-center justify-center flex-col"
                >
                  <span className="text-2xl relative z-10 text-black font-bebas ">
                    {expertise.heading}
                  </span>
                  <div className="h-full sm:h-[60vh] w-full overflow-hidden">
                    <Image
                      src={expertise.url}
                      alt=""
                      width={320}
                      height={320}
                      className=" group-hover:scale-105 duration-300 h-full w-full object-cover"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
