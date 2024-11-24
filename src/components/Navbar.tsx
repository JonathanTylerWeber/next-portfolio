"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { MdMoreHoriz } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import MagnetLink from "./MagnetLink";
import useIsMobile from "@/hooks/useIsMobile";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const githubLink = "https://github.com/JonathanTylerWeber";
  const linkedInLink = "https://www.linkedin.com/in/jonathantweber/";

  const sidenavRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(scrollY.get());
    };

    updateScrollPosition();

    const scrollListener = scrollY.on("change", updateScrollPosition);

    return () => {
      scrollListener();
    };
  }, [scrollY]);

  useEffect(() => {
    // Set window height on mount
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidenavRef.current &&
        !sidenavRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("body");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const showButton =
    !isMobile && scrollPosition > windowHeight ? true : isMobile ? true : false;

  return (
    <>
      {/* Main navbar */}
      <div className="absolute flex justify-between w-full p-12 z-30">
        <div className="flex items-center">
          <MagnetLink>
            <Link
              href="/"
              className={`text-3xl font-kanit text-white p-8 z-50 ${
                pathname === "/" ? "hover:text-black" : "hover:text-[#8bced2]"
              }`}
              onClick={pathname === "/" ? scrollToProjects : undefined}
            >
              {!isMobile && "Home"}
            </Link>
          </MagnetLink>
        </div>
        <div className="flex items-center">
          {!isMobile && (
            <>
              <MagnetLink>
                <Link
                  href="/about"
                  className={`text-3xl font-kanit text-white p-8 pr-14 z-50 ${
                    pathname === "/"
                      ? "hover:text-black"
                      : "hover:text-[#8bced2]"
                  }`}
                >
                  About
                </Link>
              </MagnetLink>
              <MagnetLink>
                <Link
                  href="/contact"
                  className={`text-3xl font-kanit text-white p-8 z-50 ${
                    pathname === "/"
                      ? "hover:text-black"
                      : "hover:text-[#8bced2]"
                  }`}
                >
                  Contact
                </Link>
              </MagnetLink>
            </>
          )}
        </div>
      </div>

      {/* Sidenav */}
      <div
        ref={sidenavRef}
        className={`fixed top-0 right-0 z-40 h-full w-full md:w-2/5 lg:w-1/3 xl:w-1/4 bg-[#191f25] text-white p-8 transition-transform duration-300 transform  ${
          isOpen
            ? "translate-x-0 shadow-[-8px_4px_25px_-1px_rgba(0,0,0,0.75)]"
            : "translate-x-full"
        }`}
      >
        <div className="mt-32 space-y-10 flex flex-col items-start">
          <p className="text-3xl text-gray-400 mb-4">Navigation</p>
          <hr className="w-full border-t-2 border-gray-400 mb-12" />

          <Link
            href="/"
            className="text-4xl text-white hover:text-[#8bced2] whitespace-nowrap"
            onClick={pathname === "/" ? scrollToProjects : undefined}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-4xl text-white hover:text-[#8bced2]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-4xl text-white hover:text-[#8bced2]"
          >
            Contact
          </Link>
        </div>
        <div className="flex mt-20 justify-around">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-6xl md:text-7xl m-5 hover:text-[#8bced2]" />
          </Link>

          <Link href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-6xl md:text-7xl m-5 hover:text-[#8bced2]" />
          </Link>
        </div>
      </div>

      {/* Navbar toggle button */}

      <AnimatePresence>
        {(showButton || isOpen) && (
          <motion.div
            ref={toggleButtonRef}
            className="fixed top-0 right-0 z-50 m-3 lg:m-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MagnetLink>
              <button
                aria-expanded={isOpen}
                aria-controls="sidenav"
                className={`relative bg-none border-none cursor-pointer pointer-events-auto rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-white text-black z-40 hover:bg-[#8bced2] hover:text-white`}
                onClick={toggleNavbar}
              >
                <MdMoreHoriz
                  className={`text-5xl lg:text-6xl transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </MagnetLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
