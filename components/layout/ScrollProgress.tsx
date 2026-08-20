"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 35,
    mass: 0.15,
  });

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-[2px]
        w-full
        origin-left
        bg-blue-500
        will-change-transform
      "
      style={{
        scaleX,
      }}
    />
  );
}