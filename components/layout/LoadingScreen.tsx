"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

/* =========================================================
   2D ROBOT
========================================================= */

function LoadingRobot({ percent }: { percent: number }) {
  const isComplete = percent >= 100;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative h-[330px] w-[360px]"
    >
      <svg
        viewBox="0 0 360 330"
        className="h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* =================================================
              WHITE BODY
          ================================================= */}

          <linearGradient
            id="robotWhite"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f5f5f5" />
            <stop offset="100%" stopColor="#d6d6d6" />
          </linearGradient>

          {/* =================================================
              BLUE MATERIAL
          ================================================= */}

          <linearGradient
            id="robotBlue"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#c4e5ff" />
            <stop offset="30%" stopColor="#78bfff" />
            <stop offset="70%" stopColor="#4b91ef" />
            <stop offset="100%" stopColor="#3474d4" />
          </linearGradient>

          {/* =================================================
              SCREEN
          ================================================= */}

          <linearGradient
            id="screen"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* =================================================
              ORB
          ================================================= */}

          <radialGradient id="orb">
            <stop offset="0%" stopColor="#8df4ff" />
            <stop offset="35%" stopColor="#39bdf8" />
            <stop offset="70%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#312e81" />
          </radialGradient>

          {/* =================================================
              CHEST LIGHT
          ================================================= */}

          <radialGradient id="chestLight">
            <stop offset="0%" stopColor="#e0ffff" />
            <stop offset="45%" stopColor="#8befff" />
            <stop offset="100%" stopColor="#4bb9ee" />
          </radialGradient>

          {/* =================================================
              LOADING GLOW
          ================================================= */}

          <filter
            id="loadingGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* =================================================
              COMPLETE GLOW
          ================================================= */}

          <filter
            id="completeGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* =================================================
              SHADOW
          ================================================= */}

          <filter
            id="shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#000000"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* =====================================================
            FLOATING SHADOW
        ===================================================== */}

        <motion.ellipse
          cx="185"
          cy="305"
          rx="88"
          ry="9"
          fill="#22d3ee"
          opacity="0.13"
          animate={{
            rx: [82, 92, 82],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            WHOLE ROBOT
        ===================================================== */}

        <motion.g
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* ===================================================
              ANTENNA
          =================================================== */}

          <motion.g
            animate={{
              rotate: [-4, 4, -4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "184px 45px",
            }}
          >
            <line
              x1="184"
              y1="58"
              x2="184"
              y2="32"
              stroke="#8b9aaa"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <motion.circle
              cx="184"
              cy="23"
              r="10"
              fill="url(#robotBlue)"
              filter="url(#loadingGlow)"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.g>

          {/* ===================================================
              LEFT EAR
          =================================================== */}

          <ellipse
            cx="68"
            cy="117"
            rx="15"
            ry="27"
            fill="url(#robotBlue)"
          />

          {/* ===================================================
              RIGHT EAR
          =================================================== */}

          <ellipse
            cx="300"
            cy="117"
            rx="15"
            ry="27"
            fill="url(#robotBlue)"
          />

          {/* ===================================================
              LEFT ARM
          =================================================== */}

          <motion.g
            animate={{
              rotate: [0, -7, 5, -9, 4, -6, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeInOut",
              times: [
                0,
                0.16,
                0.31,
                0.47,
                0.63,
                0.79,
                1,
              ],
            }}
            style={{
              transformOrigin: "100px 193px",
            }}
          >
            <ellipse
              cx="103"
              cy="193"
              rx="28"
              ry="23"
              fill="url(#robotBlue)"
              transform="rotate(-18 103 193)"
            />

            <path
              d="
                M91 188
                C75 179
                61 169
                48 157
              "
              fill="none"
              stroke="url(#robotWhite)"
              strokeWidth="28"
              strokeLinecap="round"
            />

            <ellipse
              cx="48"
              cy="157"
              rx="27"
              ry="19"
              fill="url(#robotBlue)"
              transform="rotate(27 48 157)"
            />

            <path
              d="
                M76 180
                C65 173
                56 166
                49 159
              "
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* ORB */}

            <motion.g
              animate={{
                y: [0, -3, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <circle
                cx="31"
                cy="119"
                r="27"
                fill="url(#orb)"
                filter="url(#loadingGlow)"
              />

              <ellipse
                cx="31"
                cy="119"
                rx="43"
                ry="15"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                transform="rotate(25 31 119)"
              />

              <ellipse
                cx="31"
                cy="119"
                rx="43"
                ry="15"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                transform="rotate(-30 31 119)"
              />

              <ellipse
                cx="31"
                cy="119"
                rx="43"
                ry="15"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                transform="rotate(90 31 119)"
              />

              <circle
                cx="-7"
                cy="106"
                r="6"
                fill="#38bdf8"
              />

              <circle
                cx="67"
                cy="105"
                r="6"
                fill="#22d3ee"
              />

              <circle
                cx="34"
                cy="90"
                r="6"
                fill="#38bdf8"
              />

              <circle
                cx="15"
                cy="145"
                r="5"
                fill="#67e8f9"
              />
            </motion.g>
          </motion.g>

          {/* ===================================================
              RIGHT ARM
          =================================================== */}

          <g>
            <ellipse
              cx="274"
              cy="194"
              rx="28"
              ry="23"
              fill="url(#robotBlue)"
              transform="rotate(22 274 194)"
            />

            <path
              d="
                M285 201
                C299 214
                304 229
                307 246
              "
              fill="none"
              stroke="url(#robotWhite)"
              strokeWidth="28"
              strokeLinecap="round"
            />

            <ellipse
              cx="308"
              cy="249"
              rx="25"
              ry="18"
              fill="url(#robotBlue)"
              transform="rotate(55 308 249)"
            />

            <path
              d="
                M292 211
                C300 223
                303 236
                306 246
              "
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.45"
            />
          </g>

          {/* ===================================================
              BODY
          =================================================== */}

          <path
            d="
              M118 167
              C118 150 143 141 184 141
              C225 141 250 150 250 167

              L250 236

              C250 257 222 270 184 270
              C146 270 118 257 118 236

              Z
            "
            fill="url(#robotWhite)"
            stroke="#d4d4d8"
            strokeWidth="3"
            filter="url(#shadow)"
          />

          {/* ===================================================
              BLUE CHEST
          =================================================== */}

          <path
            d="
              M121 168
              C136 151 158 146 184 146
              C210 146 232 151 247 168

              L247 195

              C231 207 211 211 184 211
              C157 211 137 207 121 195

              Z
            "
            fill="url(#robotBlue)"
          />

          {/* ===================================================
              WHITE LOWER CHEST
          =================================================== */}

          <path
            d="
              M121 195
              C138 207 158 211 184 211
              C210 211 230 207 247 195

              L247 236

              C247 256 221 266 184 266
              C147 266 121 256 121 236

              Z
            "
            fill="url(#robotWhite)"
          />

          {/* ===================================================
              CHEST LIGHT
          =================================================== */}

          <circle
            cx="184"
            cy="176"
            r="22"
            fill="#dffcff"
            opacity="0.85"
          />

          <motion.circle
            cx="184"
            cy="176"
            r="14"
            fill="url(#chestLight)"
            filter="url(#loadingGlow)"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ===================================================
              HEAD
          =================================================== */}

          <motion.g
            animate={{
              rotate: [-0.7, 0.7, -0.7],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "184px 108px",
            }}
          >
            {/* HEAD SHADOW */}

            <rect
              x="69"
              y="54"
              width="230"
              height="122"
              rx="48"
              fill="#000000"
              opacity="0.15"
            />

            {/* HEAD */}

            <rect
              x="65"
              y="47"
              width="230"
              height="122"
              rx="48"
              fill="url(#robotWhite)"
              stroke="#d4d4d8"
              strokeWidth="3"
            />

            {/* HEAD HIGHLIGHT */}

            <path
              d="
                M95 61
                C135 48 232 50 269 68
              "
              fill="none"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* =================================================
                FACE SCREEN
            ================================================= */}

            <rect
              x="89"
              y="66"
              width="182"
              height="94"
              rx="31"
              fill="url(#screen)"
              stroke="#252525"
              strokeWidth="4"
            />

            {/* SCREEN INNER BORDER */}

            <rect
              x="95"
              y="72"
              width="170"
              height="82"
              rx="27"
              fill="none"
              stroke={
                isComplete
                  ? "#22c55e"
                  : "#38bdf8"
              }
              strokeWidth="1.5"
              opacity="0.45"
            />

            {/* =================================================
                SCREEN CORNERS
            ================================================= */}

            <path
              d="M101 82 L101 76 L108 76"
              fill="none"
              stroke={
                isComplete
                  ? "#4ade80"
                  : "#67e8f9"
              }
              strokeWidth="3"
            />

            <path
              d="M260 82 L260 76 L253 76"
              fill="none"
              stroke={
                isComplete
                  ? "#4ade80"
                  : "#67e8f9"
              }
              strokeWidth="3"
            />

            <path
              d="M101 143 L101 149 L108 149"
              fill="none"
              stroke={
                isComplete
                  ? "#4ade80"
                  : "#67e8f9"
              }
              strokeWidth="3"
            />

            <path
              d="M260 143 L260 149 L253 149"
              fill="none"
              stroke={
                isComplete
                  ? "#4ade80"
                  : "#67e8f9"
              }
              strokeWidth="3"
            />

            {/* =================================================
                PIXEL LOADING NUMBER
            ================================================= */}

            {!isComplete && (
              <motion.text
                x="180"
                y="124"
                textAnchor="middle"
                fill="#67e8f9"
                fontSize="32"
                fontWeight="900"
                letterSpacing="1"
                filter="url(#loadingGlow)"
                style={{
                  fontFamily:
                    '"Courier New", "Lucida Console", monospace',
                }}
              >
                {percent}%
              </motion.text>
            )}

            {/* =================================================
                COMPLETE
            ================================================= */}

            {isComplete && (
              <motion.text
                x="180"
                y="122"
                textAnchor="middle"
                fill="#4ade80"
                fontSize="23"
                fontWeight="900"
                letterSpacing="2"
                filter="url(#completeGlow)"
                animate={{
                  opacity: [1, 0.15, 1],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  fontFamily:
                    '"Courier New", "Lucida Console", monospace',
                }}
              >
                COMPLETE
              </motion.text>
            )}

            {/* =================================================
                STATUS DOT
            ================================================= */}

            <motion.circle
              cx="180"
              cy="145"
              r="3"
              fill={
                isComplete
                  ? "#4ade80"
                  : "#38bdf8"
              }
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}

/* =========================================================
   TEXT ANIMATION
========================================================= */

const textContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.12,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   LOADING SCREEN
========================================================= */

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  const [dots, setDots] = useState<Dot[]>([]);
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  /* =======================================================
     PARTICLES
  ======================================================= */

  useEffect(() => {
    const generated = Array.from(
      { length: 10 },
      () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      })
    );

    setDots(generated);
  }, []);

  /* =======================================================
     PROGRESS
  ======================================================= */

  useEffect(() => {
    if (!isLoading) return;

    setPercent(0);
    setComplete(false);

    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      setPercent(current);

      if (current >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          setComplete(true);
        }, 150);
      }
    }, 32);

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-[#05070B]
          "
        >
          {/* =================================================
              GRID
          ================================================= */}

          <motion.div
            animate={{
              backgroundPosition: [
                "0px 0px",
                "60px 60px",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,#151b25_1px,transparent_1px),linear-gradient(to_bottom,#151b25_1px,transparent_1px)]
              bg-[size:60px_60px]
              opacity-60
            "
          />

          {/* =================================================
              NOISE
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-[url('/images/noise.png')]
              opacity-[0.025]
            "
          />

          {/* =================================================
              MAIN BLUE GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[35%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600
              blur-[120px]
            "
          />

          {/* =================================================
              CYAN GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[10%]
              top-[20%]
              h-[250px]
              w-[250px]
              rounded-full
              bg-cyan-500
              blur-[90px]
            "
          />

          {/* =================================================
              INDIGO GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 0.85, 1],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[10%]
              right-[10%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-indigo-600
              blur-[100px]
            "
          />

          {/* =================================================
              PARTICLES
          ================================================= */}

          {dots.map((dot, index) => (
            <motion.div
              key={index}
              className="
                absolute
                rounded-full
                bg-cyan-400
              "
              style={{
                width: dot.width,
                height: dot.height,
                left: `${dot.left}%`,
                top: `${dot.top}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.15, 0.8, 0.15],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
              }}
            />
          ))}

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-6
            "
          >
            {/* ROBOT */}

            <LoadingRobot percent={percent} />

            {/* =================================================
                TEXT
            ================================================= */}

            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="
                flex
                flex-col
                items-center
              "
            >
              <motion.p
                variants={textItem}
                className="
                  mb-4
                  text-center
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-cyan-400
                  sm:text-base
                "
              >
                HELLO, WELCOME TO
              </motion.p>

              <motion.h1
                variants={textItem}
                className="
                  text-center
                  text-5xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-6xl
                  md:text-7xl
                "
              >
                MY WEB
              </motion.h1>

              <motion.h1
                variants={textItem}
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-center
                  text-6xl
                  font-black
                  tracking-tight
                  text-transparent
                  sm:text-7xl
                  md:text-8xl
                "
              >
                PORTFOLIO
              </motion.h1>

              <motion.p
                variants={textItem}
                className="
                  mt-5
                  text-center
                  text-sm
                  text-zinc-500
                  md:text-base
                "
              >
                Data Science Student
                &nbsp; • &nbsp;
                Quantitative Trader
              </motion.p>
            </motion.div>

            {/* =================================================
                STATUS
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className={`
                mt-10
                text-[10px]
                uppercase
                tracking-[0.45em]
                transition-colors
                duration-300
                md:text-xs
                ${
                  complete
                    ? "text-green-400"
                    : "text-zinc-600"
                }
              `}
            >
              {complete
                ? "SYSTEM READY"
                : "Initializing Experience..."}
            </motion.p>

            {/* =================================================
                SCAN LINE
            ================================================= */}

            <motion.div
              animate={{
                y: ["-120%", "120%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-24
                w-full
                bg-gradient-to-b
                from-transparent
                via-cyan-400/10
                to-transparent
                blur-xl
              "
            />

            {/* =================================================
                FOOTER
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.4,
              }}
              transition={{
                delay: 1.5,
              }}
              className="
                absolute
                bottom-8
                text-center
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-zinc-600
              "
            >
              © 2026 Muhammad Nihat Ulil Amri
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}