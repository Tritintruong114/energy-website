"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousel() {
  return (
    <Carousel
      swipeable
      stopOnHover
      showStatus={false}
      interval={6000}
      showArrows={false}
      useKeyboardArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      centerSlidePercentage={90}
      className="h-full cursor-grabbing"
    >
      <div className="w-full h-[450px]  sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
      <div className="w-full h-[450px]  sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
      <div className="w-full h-[450px]  sm:h-[700px]">
        <Image
          src="/images/hero3.png"
          alt="About Us Image"
          width={420}
          className="w-full object-cover h-full rounded-3xl"
          height={530}
        />
      </div>
    </Carousel>
  );
}

export default AboutUsCarousel;
