"use client";

import { motion } from "motion/react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
  const variants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
