"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { wrap } from "@motionone/utils";
import useIsMobile from "@/hooks/useIsMobile";
// import { useScrollContext } from "./ScrollContext";

export default function Marquee() {
  const { scrollY } = useScroll();

  const baseX = useMotionValue(0);
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("scrollY:", latest);
  });

  useEffect(() => {
    const unsubscribeVelocity = scrollVelocity.on("change", (latest) => {
      console.log("scrollVelocity:", latest);
    });

    const unsubscribeSmoothVelocity = smoothVelocity.on("change", (latest) => {
      console.log("smoothVelocity:", latest);
    });

    const unsubscribeVelocityFactor = velocityFactor.on("change", (latest) => {
      console.log("velocityFactor:", latest);
    });

    return () => {
      unsubscribeVelocity();
      unsubscribeSmoothVelocity();
      unsubscribeVelocityFactor();
    };
  }, [scrollVelocity, smoothVelocity, velocityFactor]);

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
}
