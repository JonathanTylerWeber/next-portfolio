"use client";

import Marquee from "./Marquee";
import Image from "next/image";
import { FlipText } from "./FlipText";
import useIsMobile from "@/hooks/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="h-screen w-screen bg-[#76ABAE] relative">
        {/* desktop image */}
        {!isMobile && (
          <div className="h-full w-full flex justify-center overflow-hidden relative">
            <Image
              src="/portfolioNew.png"
              alt="portfolio image"
              priority
              width={900}
              height={900}
              className="object-contain object-bottom"
            />
          </div>
        )}

        {/* mobile image */}
        {isMobile && (
          <div className="h-full w-full flex justify-center overflow-visible relative">
            <div className="h-[calc(90vh)] w-auto absolute bottom-0 ">
              <Image
                src="/portfolioNew.png"
                alt="portfolio image"
                priority
                width={750}
                height={750}
                className="object-bottom object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="absolute right-12 top-[40%] z-10">
            <FlipText hoverText="Located &nbsp;in &nbsp;Chengdu, &nbsp;China">
              Junior &nbsp;Full &nbsp;Stack &nbsp;Developer
            </FlipText>
          </div>
        )}

        {isMobile && (
          <div className="absolute bottom-14 text-2xl sm:text-3xl md:text-4xl left-1/2 transform -translate-x-1/2 flex justify-center whitespace-nowrap">
            <p>Junior Full Stack Developer</p>
          </div>
        )}

        <div
          className={`absolute w-full z-10 ${
            isMobile ? "bottom-32" : "bottom-0"
          }`}
        >
          <Marquee />
        </div>
      </div>
    </>
  );
}
