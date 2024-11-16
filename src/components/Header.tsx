"use client";

import Marquee from "./Marquee";
import Image from "next/image";
import { FlipText } from "./FlipText";

export default function Header() {
  return (
    <>
      <div className="h-screen w-full bg-[#76ABAE] relative">
        <div className="h-full w-full flex justify-center items-end overflow-hidden pr-32">
          <Image
            src="/portfolio.png"
            alt="portfolio image"
            width={750}
            height={750}
            className="translate-y-40"
          />
        </div>

        <div className="absolute right-12 top-[40%] transform -translate-y-1/2 z-10">
          <FlipText hoverText="Located &nbsp;in &nbsp;Chengdu, &nbsp;China">
            Junior &nbsp;Full &nbsp;Stack &nbsp;Developer
          </FlipText>
        </div>

        <div className="absolute bottom-0 w-full z-10">
          <Marquee />
        </div>
      </div>
    </>
  );
}
