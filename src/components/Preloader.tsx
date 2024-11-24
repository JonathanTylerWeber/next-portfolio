"use client";

import React, { useEffect, useState, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [isActive, setIsActive] = useState(true); // Start with isActive true
  const [showTitle, setShowTitle] = useState(false); // State to control title animation

  useEffect(() => {
    const delayChildren = setTimeout(() => {
      setShowChildren(true);
    }, 500);

    const titleDelay = setTimeout(() => {
      setShowTitle(true);
    }, 0);

    const transitionOut = setTimeout(() => {
      setIsActive(false);
    }, 2700); // Slide up transition duration + delay

    return () => {
      clearTimeout(delayChildren);
      clearTimeout(titleDelay);
      clearTimeout(transitionOut);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#191f25] z-[6000] transition-transform duration-500 ease-in-out grid place-items-center ${
          isActive
            ? "translate-y-0 pointer-events-auto"
            : "translate-y-[-100%] pointer-events-none"
        }`}
      >
        <p
          className={`absolute text-white text-3xl md:text-5xl lg:text-6xl text-center font-kanit opacity-0 ${
            showTitle
              ? "w-[11ch] animate-typing-blink whitespace-nowrap overflow-hidden border-r-[3px] border-solid opacity-100"
              : ""
          }`}
        >
          Hi I&apos;m Jonathan
        </p>
      </div>
      {showChildren && children}
    </div>
  );
};

export default PageTransition;
