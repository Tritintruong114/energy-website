export const revalidate = 0;

import { SERVICES } from "@/constant/services";
import { ContentType, getServicesPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const ServicesPage = async () => {
  const data = await getServicesPage(SERVICES.PATH);

  const { Content, Heading, Gallery, CallToAction, Video, FormContact } = data;

  return (
    <section
      id="section"
      className="py-24  relative w-full justify-center flex items-center bg-black"
    >
      {" "}
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>{Heading}</h1>
        </div>
        <div className="md:grid sm:grid-cols-2 xl:grid-cols-3 gap-3 grid grid-cols-1">
          {Content.map((element: ContentType, index: number) => {
            return (
              <div
                key={index}
                className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border"
              >
                <div>
                  <h2 className="text-xl font-bebas font-bold leading-none">
                    {element.heading}
                  </h2>
                </div>
                <div className="text-sm">{element.excerpt}</div>
                <Link
                  href={CallToAction.link}
                  target="_blank"
                  className="text-white border-2 border-white py-3 font-bebas  text-xl text-x text-center hover:bg-white hover:text-black duration-300"
                >
                  {CallToAction.title}
                </Link>
              </div>
            );
          })}

          <div className="col-span-1 md:col-span-3">
            <Marquee className="h-full w-full" loop={50}>
              {Gallery.imageUrls?.map((image: ImageType, index: number) => {
                return (
                  <div className="h-[450px] aspect-auto w-full" key={index}>
                    <Image
                      src={image.url}
                      alt="Images"
                      width={450}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
