"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function HeroReveal({
  children,
  delay = 0,
}: HeroRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}