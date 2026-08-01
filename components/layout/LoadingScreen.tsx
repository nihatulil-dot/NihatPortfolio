"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

interface Dot {
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // generate random dots cuma sekali, di client, biar ga hydration mismatch
    const generated = Array.from({ length: 12 }, () => ({
      width: Math.random() * 5 + 2,
      height: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    setDots(generated);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(14px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#05070B]"
        >
          {/* ================= GRID ================= */}
          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]"
          />

          {/* ================= NOISE ================= */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')]" />

          {/* ================= GLOW ================= */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[180px]"
          />

          {/* Glow 2 */}
          <motion.div
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-[20%] top-[25%] h-[300px] w-[300px] rounded-full bg-cyan-500 blur-[120px]"
          />

          {/* Glow 3 */}
          <motion.div
            animate={{
              scale: [0.9, 1.2, 0.9],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute right-[18%] bottom-[20%] h-[260px] w-[260px] rounded-full bg-indigo-500 blur-[120px]"
          />

          {/* ================= CONTENT ================= */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
            {/* ================= SMALL LABEL ================= */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 text-sm uppercase tracking-[0.8em] text-blue-400 md:text-base"
            >
              WELCOME TO
            </motion.p>

            {/* ================= MAIN TITLE ================= */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-center text-6xl font-black leading-none tracking-tight text-white md:text-8xl lg:text-[8rem]"
            >
              MY
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-2 bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 bg-clip-text text-center text-7xl font-black leading-none tracking-tight text-transparent md:text-9xl lg:text-[10rem]"
            >
              WEB
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="-mt-3 bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-center text-5xl font-black tracking-tight text-transparent md:text-8xl lg:text-[8rem]"
            >
              PORTFOLIO
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 max-w-xl text-center text-zinc-400 md:text-lg"
            >
              Data Science Student  • Quantitative Trader
            </motion.p>

            {/* ================= PROGRESS BAR ================= */}
            <div className="mt-14 w-[280px] overflow-hidden rounded-full bg-zinc-800 md:w-[420px]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
                className="h-[5px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]"
              />
            </div>

            {/* ================= LOADING ================= */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-5 text-xs uppercase tracking-[0.6em] text-zinc-500"
            >
              Initializing Experience...
            </motion.p>

            {/* ================= SCAN LINE ================= */}
            <motion.div
              animate={{
                y: ["-120%", "120%"],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent blur-xl"
            />

            {/* ================= FLOATING DOTS ================= */}
            {dots.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cyan-400/70"
                style={{
                  width: dot.width,
                  height: dot.height,
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  delay: dot.delay,
                }}
              />
            ))}

            {/* ================= BOTTOM LABEL ================= */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.6 }}
              className="absolute bottom-10 text-xs tracking-[0.5em] uppercase text-zinc-600"
            >
              © 2026 Muhammad Nihat Ulil Amri
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}