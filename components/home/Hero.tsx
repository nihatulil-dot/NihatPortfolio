"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import Container from "@/lib/container";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#070707]
      "
    >
      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* =====================================================
          MAIN AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/[0.07]
          blur-[110px]
        "
      />

      <Container>
        <div
          className="
            grid
            min-h-screen
            items-center
            gap-10
            lg:grid-cols-[1fr_auto_1fr]
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className={`${inter.className} mb-4 text-sm uppercase tracking-[0.5em] text-blue-500`}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
              className={`${spaceGrotesk.className} text-6xl font-bold leading-none text-white md:text-8xl`}
            >
              Muhammad
              <br />

              <span className="text-blue-500">
                Nihat
              </span>

              <br />

              Ulil Amri
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
              className="mt-8 space-y-3"
            >
              <p
                className={`${inter.className} text-2xl text-zinc-300`}
              >
                Data Science Student
              </p>

              <p
                className={`${inter.className} text-xl text-zinc-500`}
              >
                Quantitative Trader
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className={`${inter.className} mt-10 flex gap-5`}
            >
              <button
                className="
                  rounded-full
                  bg-blue-600
                  px-7
                  py-3
                  font-semibold
                  text-white
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500
                "
              >
                View my work
              </button>
            </motion.div>
          </motion.div>

          {/* =================================================
              CENTER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              z-30
              -mx-16
              flex
              justify-center
              lg:-mx-24
              lg:-translate-x-10
            "
          >
            <div className="relative z-20">
              <Image
                src="/images/profile.png"
                alt="Muhammad Nihat"
                width={720}
                height={860}
                priority
                sizes="
                  (max-width: 768px) 340px,
                  (max-width: 1024px) 440px,
                  520px
                "
                className="
                  w-[340px]
                  object-contain
                  drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                  md:w-[440px]
                  lg:w-[520px]
                "
              />
            </div>

            {/* Static photo glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-10
                -z-10
                h-[240px]
                w-[240px]
                rounded-full
                bg-blue-500/[0.12]
                blur-[90px]
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="relative text-right"
          >
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className={`${spaceGrotesk.className} relative z-10 text-6xl font-bold leading-none text-white md:text-8xl`}
            >
              BUILDING
            </motion.h2>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className={`${spaceGrotesk.className} relative z-10 mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-6xl font-bold leading-none text-transparent md:text-8xl`}
            >
              DATA
            </motion.h2>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className={`${spaceGrotesk.className} relative z-10 mt-2 text-6xl font-bold leading-none text-white md:text-8xl`}
            >
              SYSTEMS
            </motion.h2>

            {/* Watermark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="
                pointer-events-none
                absolute
                right-0
                top-1/2
                -z-10
                -translate-y-1/2
                select-none
                text-[14rem]
                font-black
                leading-none
                text-white
              "
            >
              01
            </motion.div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="
            mt-6
            h-px
            origin-left
            bg-gradient-to-r
            from-blue-500
            via-zinc-700
            to-transparent
          "
        />

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              h-14
              w-8
              justify-center
              rounded-full
              border
              border-zinc-600
            "
          >
            <div
              className="
                mt-2
                h-2
                w-2
                rounded-full
                bg-blue-500
              "
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}