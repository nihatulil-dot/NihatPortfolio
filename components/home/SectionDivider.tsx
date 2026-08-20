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
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-20
          w-[60%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.03]
          blur-[45px]
        "
      />

      {/* Moving text */}
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center"
          animate={{
            x: ["0px", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {/* SET 1 */}
          <div className="flex shrink-0 items-center">
            <DividerText />
            <DividerText />
          </div>

          {/* SET 2 */}
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
    <div className="flex shrink-0 items-center px-8 md:px-12">
      <span
        className="
          bg-gradient-to-r
          from-cyan-300
          via-white
          to-purple-400
          bg-clip-text
          text-sm
          font-semibold
          tracking-[0.35em]
          text-transparent
          md:text-base
        "
      >
        {text}
      </span>

      <span
        className="
          ml-8
          text-sm
          text-cyan-300/80
          md:ml-12
          md:text-base
        "
      >
        ✦
      </span>
    </div>
  );
}