"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { MdMoreHoriz } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import MagnetLink from "./MagnetLink";
import useIsMobile from "@/hooks/useIsMobile";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const githubLink = "https://github.com/JonathanTylerWeber";
  const linkedInLink = "https://www.linkedin.com/in/jonathantweber/";

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

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("recent");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const buttonOpacity =
    !isMobile && scrollPosition > window.innerHeight ? 1 : isMobile ? 1 : 0;
  const buttonScale =
    !isMobile && scrollPosition > window.innerHeight ? 1 : isMobile ? 1 : 0;

  return (
    <>
      {/* Main navbar */}
      <div className="absolute flex justify-between w-full p-12 z-30">
        <div className="flex items-center">
          <MagnetLink>
            <Link
              href="/"
              className={`text-3xl font-kanit text-white p-8 z-50 ${
                pathname === "/" ? "hover:text-black" : "hover:text-teal-400"
              }`}
              onClick={pathname === "/" ? scrollToProjects : undefined}
            >
              {!isMobile && "Jonathan Weber"}
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
                      : "hover:text-teal-400"
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
                      : "hover:text-teal-400"
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
        className={`fixed top-0 right-0 z-40 h-full w-full bg-[#191f25] text-white p-8 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-32 space-y-10">
          <p className="text-2xl text-gray-400 mb-4">Navigation</p>
          <hr className="border-t border-gray-600 mb-12" />
          <MagnetLink>
            <Link
              href="/"
              className={`text-5xl text-white pb-20 ${
                pathname === "/" ? "hover:text-black" : "hover:text-teal-400"
              }`}
              onClick={pathname === "/" ? scrollToProjects : undefined}
            >
              Jonathan Weber
            </Link>
          </MagnetLink>
          <MagnetLink>
            <Link
              href="/about"
              className={`text-5xl text-white pb-20 ${
                pathname === "/" ? "hover:text-black" : "hover:text-teal-400"
              }`}
            >
              About
            </Link>
          </MagnetLink>
          <MagnetLink>
            <Link
              href="/contact"
              className={`text-5xl text-white pb-20 ${
                pathname === "/" ? "hover:text-black" : "hover:text-teal-400"
              }`}
            >
              Contact
            </Link>
          </MagnetLink>
        </div>
        <div className="flex justify-center mt-20">
          <MagnetLink>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-7xl mx-16" />
            </a>
          </MagnetLink>
          <MagnetLink>
            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-7xl mx-16" />
            </a>
          </MagnetLink>
        </div>
      </div>

      {/* Navbar toggle button */}
      <div
        id="navbar-container"
        className={`fixed top-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <motion.button
          className={`${
            buttonOpacity ? "visible" : "invisible"
          } relative bg-none border-none cursor-pointer pointer-events-auto rounded-full w-16 h-16 m-6 flex items-center justify-center bg-white text-black z-40 hover:bg-teal-400 hover:text-white`}
          onClick={toggleNavbar}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: buttonScale, opacity: buttonOpacity }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MdMoreHoriz
            className={`text-5xl transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </motion.button>
      </div>
    </>
  );
}

export default Navbar;
