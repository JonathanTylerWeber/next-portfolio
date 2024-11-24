"use client";

import Marquee from "./Marquee";
import Image from "next/image";
import { FlipText } from "./FlipText";
import portfolioNew from "../../public/portfolioNew.png";

export default function Header() {
  return (
    <>
      <div className="h-screen w-screen bg-[#76ABAE] relative">
        {/* Image Container */}
        <div className="h-full w-full flex justify-center overflow-hidden relative">
          <div
            className="
              relative
              h-full
              w-full
              flex
              justify-center
              overflow-visible
              lg:overflow-hidden
            "
          >
            <div
              className="
                absolute
                bottom-0
                h-[calc(90vh)]
                w-auto
                xl:static
                xl:h-full
                xl:w-full
              "
            >
              <Image
                src={portfolioNew}
                alt="portfolio image"
                priority
                className="
                  object-bottom
                  object-cover
                  w-full
                  h-full
                  lg:object-contain
                "
              />
            </div>
          </div>
        </div>

        {/* Desktop Text */}
        <div className="hidden xl:block absolute right-12 top-[40%] z-10">
          <FlipText hoverText="Located &nbsp;in &nbsp;Chengdu, &nbsp;China">
            Junior &nbsp;Full &nbsp;Stack &nbsp;Developer
          </FlipText>
        </div>

        {/* Mobile Text */}
        <div className=" xl:hidden absolute bottom-14 text-2xl sm:text-3xl md:text-4xl left-1/2 transform -translate-x-1/2 flex justify-center whitespace-nowrap">
          <p>Junior Full Stack Developer</p>
        </div>

        {/* Marquee */}
        <div className="absolute w-full z-10 bottom-32 xl:bottom-0">
          <Marquee />
        </div>
      </div>
    </>
  );
}
