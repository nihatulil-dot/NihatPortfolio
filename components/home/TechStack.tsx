"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type TechItem = {
  id: string;
  name: string;
  logo: string;
  color: string;
};

type OrbitProps = {
  size: number;
  children?: React.ReactNode;
  dashed?: boolean;
  animated?: boolean;
  duration?: number;
};

/* =========================================================
   UTILS

   Framer Motion renders x/y transforms with slightly different
   floating point precision on the server vs. the client (server
   emits full JS float precision, client rounds through its own
   motion-value formatter). That mismatch is what was causing the
   hydration warning. Rounding to a fixed precision *before*
   handing the numbers to `motion.div` guarantees the server and
   client always compute the exact same string.
========================================================= */

function round(value: number, precision = 4) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

/* =========================================================
   CENTER ICONS
========================================================= */

function ComputerIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="36"
      height="36"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="4" width="19" height="12.5" rx="1.5" />
      <line x1="8" y1="20.5" x2="16" y2="20.5" />
      <line x1="12" y1="16.5" x2="12" y2="20.5" />
    </svg>
  );
}

function CandlestickIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
      <line
        x1="5"
        y1="3"
        x2="5"
        y2="21"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />

      <rect x="3" y="9" width="4" height="7" rx="0.5" fill="#4ADE80" />

      <line
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />

      <rect x="10" y="5" width="4" height="9" rx="0.5" fill="#F87171" />

      <line
        x1="19"
        y1="4"
        x2="19"
        y2="19"
        stroke={color}
        strokeWidth="1"
        opacity="0.6"
      />

      <rect x="17" y="11" width="4" height="6" rx="0.5" fill="#4ADE80" />
    </svg>
  );
}

/* =========================================================
   LOGO
========================================================= */

function Logo({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Static glow — no infinite animation */}
      <div
        className="pointer-events-none absolute inset-[10px] rounded-full opacity-[0.10] blur-[7px]"
        style={{ backgroundColor: color }}
      />

      <img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="relative z-10 h-[30px] w-[30px] object-contain"
      />
    </div>
  );
}

/* =========================================================
   PROGRAMMING / DATA
========================================================= */

const programmingStack: TechItem[] = [
  {
    id: "python",
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    id: "go",
    name: "Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    color: "#00ADD8",
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    id: "react",
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#FFFFFF",
  },
  {
    id: "numpy",
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#4D77CF",
  },
  {
    id: "pandas",
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#FFFFFF",
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
  },
  {
    id: "powerbi",
    name: "Power BI",
    logo: "/icons/powerbi.png",
    color: "#F2C811",
  },
  {
    id: "git",
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    id: "github",
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#FFFFFF",
  },
];

/* =========================================================
   TRADING
========================================================= */

const tradingStack: TechItem[] = [
  {
    id: "tradingview",
    name: "TradingView",
    logo: "https://cdn.simpleicons.org/tradingview/2962FF",
    color: "#2962FF",
  },
  {
    id: "mt5",
    name: "MetaTrader 5",
    logo: "/icons/mt5.png",
    color: "#00AEEF",
  },
  {
    id: "exness",
    name: "Exness",
    logo: "/icons/exness.png",
    color: "#FFFFFF",
  },
  {
    id: "fxreplay",
    name: "FX Replay",
    logo: "/icons/fxreplay.png",
    color: "#5CA9FF",
  },
  {
    id: "neubro",
    name: "Neubro AI",
    logo: "/icons/neubroai.webp",
    color: "#9B87F5",
  },
];

/* =========================================================
   ORBIT
========================================================= */

function Orbit({
  size,
  children,
  dashed = false,
  animated = false,
  duration = 45,
}: OrbitProps) {
  const style = {
    width: size,
    height: size,
    marginLeft: -size / 2,
    marginTop: -size / 2,
    border: dashed
      ? "1px dashed rgba(96,165,250,.13)"
      : "1px solid rgba(96,165,250,.09)",
  };

  if (!animated) {
    return (
      <div className="absolute left-1/2 top-1/2 rounded-full" style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full will-change-transform"
      style={style}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PLANET
========================================================= */

function Planet({
  item,
  angle,
  radius,
  delay,
}: {
  item: TechItem;
  angle: number;
  radius: number;
  delay: number;
}) {
  // Rounded so the server-rendered transform string and the
  // client-hydrated transform string are byte-for-byte identical.
  const x = round(Math.cos(angle) * radius);
  const y = round(Math.sin(angle) * radius);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-30 will-change-transform"
      style={{
        x,
        y,
        marginLeft: -34,
        marginTop: -34,
      }}
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.55,
        ease: "easeOut",
      }}
    >
      {/* Static subtle glow */}
      <div
        className="pointer-events-none absolute inset-[-5px] rounded-full opacity-[0.08] blur-[6px]"
        style={{ background: item.color }}
      />

      <motion.div
        className="
          relative
          flex
          h-[70px]
          w-[70px]
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.14]
          bg-[#070A12]
          shadow-[inset_0_0_18px_rgba(255,255,255,.03)]
        "
        whileHover={{
          scale: 1.12,
          borderColor: "rgba(147,197,253,.45)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
        }}
      >
        <div className="absolute inset-[5px] rounded-full border border-white/[0.05]" />

        <Logo src={item.logo} alt={item.name} color={item.color} />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   RING CONFIG
========================================================= */

type RingConfig = {
  size: number;
  populated: boolean;
  dashed?: boolean;
  animated?: boolean;
};

/* =========================================================
   SOLAR SYSTEM
========================================================= */

function SolarSystem({
  title,
  subtitle,
  items,
  variant,
  active,
  rotating,
}: {
  title: string;
  subtitle: string;
  items: TechItem[];
  variant: "programming" | "trading";
  active: boolean;
  rotating: boolean;
}) {
  const programming = variant === "programming";

  const accent = programming ? "#38BDF8" : "#A78BFA";

  /*
   * Hanya orbit yang membawa logo yang bergerak.
   * Ring dekoratif tetap static.
   */
  const rings: RingConfig[] = programming
    ? [
        { size: 190, populated: false, animated: false },
        { size: 300, populated: true, animated: true },
        { size: 400, populated: false, dashed: true, animated: false },
        { size: 500, populated: true, dashed: true, animated: true },
      ]
    : [
        { size: 210, populated: false, animated: false },
        { size: 340, populated: true, animated: true },
        { size: 460, populated: false, dashed: true, animated: false },
      ];

  const populatedRings = rings
    .map((ring, index) => ({ ...ring, index }))
    .filter((ring) => ring.populated);

  const groups: TechItem[][] = populatedRings.map(() => []);

  items.forEach((item, index) => {
    const groupIndex = index % populatedRings.length;
    groups[groupIndex].push(item);
  });

  return (
    <motion.div
      className="
        relative
        flex
        min-h-[700px]
        flex-1
        items-center
        justify-center
      "
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.65 }}
    >
      {/* LABEL */}

      <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 text-center">
        <motion.div
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            md:text-base
          "
          style={{ color: accent }}
          initial={{ opacity: 0, y: -8 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {title}
        </motion.div>

        <motion.div
          className="
            mt-2
            text-xs
            tracking-wide
            text-white/30
            md:text-sm
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      </div>

      {/* SYSTEM */}

      <div className="relative h-[560px] w-[560px]">
        {/* Static ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[230px]
            w-[230px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-[0.07]
            blur-[55px]
          "
          style={{ background: accent }}
        />

        {/* CORE */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            z-50
            flex
            h-[110px]
            w-[110px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-2
            bg-[#060910]
          "
          style={{ borderColor: `${accent}55` }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={
            active
              ? { scale: 1, opacity: 1 }
              : { scale: 0.85, opacity: 0 }
          }
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        >
          {/* Static core glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[-12px]
              rounded-full
              opacity-[0.12]
              blur-[12px]
            "
            style={{ background: accent }}
          />

          <div className="relative">
            {programming ? (
              <ComputerIcon color={accent} />
            ) : (
              <CandlestickIcon color={accent} />
            )}
          </div>
        </motion.div>

        {/* RINGS */}

        {rings.map((ring, ringIndex) => {
          const populatedData = populatedRings.find(
            (item) => item.index === ringIndex
          );

          const groupItems = populatedData
            ? groups[populatedRings.indexOf(populatedData)]
            : [];

          return (
            <Orbit
              key={ringIndex}
              size={ring.size}
              duration={48 + ringIndex * 8}
              dashed={ring.dashed}
              animated={rotating && Boolean(ring.animated)}
            >
              {groupItems.map((item, itemIndex) => {
                const angle =
                  (itemIndex / groupItems.length) * Math.PI * 2 +
                  ringIndex * 0.5;

                return (
                  <Planet
                    key={item.id}
                    item={item}
                    angle={angle}
                    radius={ring.size / 2}
                    delay={0.6 + ringIndex * 0.1 + itemIndex * 0.05}
                  />
                );
              })}
            </Orbit>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN TECH STACK
========================================================= */

export default function TechStack() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // `visible` = sticky, drives the one-time entrance fade/slide-in.
  // `inView`  = toggles on every scroll in/out, only used to
  //             pause/resume the infinite orbit rotation so it
  //             doesn't spin forever off-screen and eat GPU.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = Boolean(entry?.isIntersecting);
        setInView(intersecting);
        if (intersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
        py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/[0.025]
            blur-[70px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          max-w-[1550px]
          px-6
          lg:px-10
        "
      >
        {/* HEADER */}

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="
              mx-auto
              mb-6
              max-w-[700px]
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/40
              sm:text-sm
              md:text-base
            "
          >
            The technologies, tools, and platforms that build my ecosystem.
          </p>

          <h2
            className="
              text-6xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              sm:text-7xl
              md:text-8xl
              lg:text-[120px]
              xl:text-[140px]
            "
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #bfe3ff 22%, #60a5fa 48%, #8b5cf6 72%, #d946ef 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tech Stack
          </h2>
        </motion.div>

        {/* ===================================================
            SOLAR SYSTEMS
        =================================================== */}

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-0">
          <SolarSystem
            title="PROGRAMMING & DATA"
            subtitle="Building the system"
            items={programmingStack}
            variant="programming"
            active={visible}
            rotating={inView}
          />

          {/* Divider */}

          <div
            className="
              hidden
              w-px
              self-stretch
              bg-gradient-to-b
              from-transparent
              via-sky-400/25
              to-transparent
              lg:block
            "
          />

          <SolarSystem
            title="TRADING ECOSYSTEM"
            subtitle="Analyzing the market"
            items={tradingStack}
            variant="trading"
            active={visible}
            rotating={inView}
          />
        </div>
      </div>
    </section>
  );
}