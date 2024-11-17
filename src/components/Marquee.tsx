"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "@motionone/utils";
import useIsMobile from "@/hooks/useIsMobile";

const Marquee: React.FC = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -3 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const isMobile = useIsMobile();

  return (
    <div className="relative overflow-hidden whitespace-nowrap flex flex-wrap">
      <motion.div
        className={`flex whitespace-nowrap font-medium text-white ${
          isMobile ? "text-9xl" : "text-11xl"
        }`}
        style={{ x }}
      >
        <span>Jonathan Weber -&nbsp;</span>
        <span>Jonathan Weber -&nbsp;</span>
        <span>Jonathan Weber -&nbsp;</span>
        <span>Jonathan Weber -&nbsp;</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
