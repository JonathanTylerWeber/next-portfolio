"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";

import MagnetLink from "./MagnetLink";

const Footer: React.FC = () => {
  const githubLink = "https://github.com/JonathanTylerWeber";
  const linkedInLink = "https://www.linkedin.com/in/jonathantweber/";

  const [chinaTime, setChinaTime] = useState<string>("");

  useEffect(() => {
    const updateChinaTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Shanghai",
        hour: "2-digit",
        minute: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setChinaTime(formatter.format(new Date()));
    };

    updateChinaTime();
    const interval = setInterval(updateChinaTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Reference to the footer element
  const footerRef = useRef(null);

  // Use useScroll to track the scroll progress of the footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Map the scroll progress to the circle's height
  const circleHeight = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <footer
      className="relative bg-[#13191d] text-white py-8 z-0 min-h-screen flex flex-col justify-between overflow-hidden"
      ref={footerRef}
    >
      {/* Circle Overlay */}
      <motion.div
        style={{ height: circleHeight }}
        className="absolute top-0 left-0 w-full bg-[#222831] rounded-b-[75%] shadow-[0px_60px_50px_rgba(0,0,0,0.748)] z-30"
      ></motion.div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 flex-1 relative z-20">
        <div className="mt-32">
          <div className="flex items-center justify-center mb-4 md:mb-0 pb-32">
            <Image
              src="/profileCircle.png"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full"
            />
            <p className="ml-4 text-3xl md:text-6xl lg:text-8xl">
              Open for work
            </p>
          </div>
          <div className="flex justify-center items-center flex-col xl:flex-row pb-10">
            <Link
              href="mailto:jonathantweber@gmail.com"
              className="text-2xl md:text-5xl text-[#8bced2] hover:text-white mb-10 xl:mb-0 xl:pr-32"
            >
              jonathantweber@gmail.com
            </Link>
            <Link
              href="/contact"
              className="text-2xl md:text-5xl text-[#8bced2] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-32 pb-10 relative z-20">
        <div className="mb-6 md:mb-0">
          <p className="text-xl md:text-3xl text-gray-300 whitespace-nowrap">
            Local Time: {chinaTime} CST
          </p>
        </div>
        <div className="flex space-x-32 pt-20 lg:pt-0">
          <MagnetLink>
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl text-[#8bced2] hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </Link>
          </MagnetLink>
          <MagnetLink>
            <Link
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl text-[#8bced2] hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
          </MagnetLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
