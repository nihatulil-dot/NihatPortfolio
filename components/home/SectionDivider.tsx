"use client";

import { motion } from "framer-motion";

const items = [
  "DATA",
  "DESIGN",
  "DEVELOPMENT",
  "TRADING",
  "CREATIVE TECHNOLOGY",
];

const text = items.join("   ✦   ");

export default function SectionDivider() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-7 md:py-9">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      {/* Moving track */}
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex min-w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* GROUP 1 */}
          <div className="flex shrink-0 items-center">
            <DividerText />
            <DividerText />
          </div>

          {/* GROUP 2 */}
          <div className="flex shrink-0 items-center">
            <DividerText />
            <DividerText />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DividerText() {
  return (
    <div className="flex items-center px-8 md:px-12">
      <span
        className="
          text-sm
          font-semibold
          tracking-[0.35em]
          text-transparent
          bg-gradient-to-r
          from-cyan-300
          via-white
          to-purple-400
          bg-clip-text
          md:text-base
        "
      >
        {text}
      </span>

      {/* Decorative star */}
      <span className="ml-8 text-cyan-300/80 text-sm md:ml-12 md:text-base">
        ✦
      </span>
    </div>
  );
}