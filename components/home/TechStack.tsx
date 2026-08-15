"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type TechItem = {
  id: string;
  name: string;
  logo: string;
  color: string;
};

/* =========================================================
   CUSTOM CENTER ICONS
========================================================= */

function ComputerIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="12.5" rx="1.5" />
      <line x1="8" y1="20.5" x2="16" y2="20.5" />
      <line x1="12" y1="16.5" x2="12" y2="20.5" />
    </svg>
  );
}

function CandlestickIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
      <line x1="5" y1="3" x2="5" y2="21" stroke={color} strokeWidth="1" opacity="0.6" />
      <rect x="3" y="9" width="4" height="7" rx="0.5" fill="#4ADE80" />
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="1" opacity="0.6" />
      <rect x="10" y="5" width="4" height="9" rx="0.5" fill="#F87171" />
      <line x1="19" y1="4" x2="19" y2="19" stroke={color} strokeWidth="1" opacity="0.6" />
      <rect x="17" y="11" width="4" height="6" rx="0.5" fill="#4ADE80" />
    </svg>
  );
}

/* =========================================================
   LOGO HELPER
========================================================= */

function Logo({ src, alt, color }: { src: string; alt: string; color: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="pointer-events-none absolute inset-[10px] rounded-full opacity-25 blur-[8px]"
        style={{ backgroundColor: color }}
      />
      <img src={src} alt={alt} draggable={false} loading="lazy" className="relative z-10 h-[30px] w-[30px] object-contain" />
    </div>
  );
}

/* =========================================================
   PROGRAMMING / DATA
========================================================= */

const programmingStack: TechItem[] = [
  { id: "python", name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { id: "go", name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", color: "#00ADD8" },
  { id: "javascript", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { id: "typescript", name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { id: "react", name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#FFFFFF" },
  { id: "numpy", name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#4D77CF" },
  { id: "pandas", name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#FFFFFF" },
  { id: "mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { id: "postgresql", name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { id: "powerbi", name: "Power BI", logo: "/icons/powerbi.png", color: "#F2C811" },
  { id: "git", name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { id: "github", name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#FFFFFF" },
];

/* =========================================================
   TRADING
========================================================= */

const tradingStack: TechItem[] = [
  { id: "tradingview", name: "TradingView", logo: "https://cdn.simpleicons.org/tradingview/2962FF", color: "#2962FF" },
  { id: "mt5", name: "MetaTrader 5", logo: "/icons/mt5.png", color: "#00AEEF" },
  { id: "exness", name: "Exness", logo: "/icons/exness.png", color: "#FFFFFF" },
  { id: "fxreplay", name: "FX Replay", logo: "/icons/fxreplay.png", color: "#5CA9FF" },
  { id: "neubro", name: "Neubro AI", logo: "/icons/neubroai.webp", color: "#9B87F5" },
];

/* =========================================================
   METEOR
========================================================= */

type Meteor = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  duration: number;
  size: number;
  angle: number;
};

function generateMeteors(count: number): Meteor[] {
  return Array.from({ length: count }, (_, index) => {
    const side = Math.floor(Math.random() * 4);
    let startX = 0;
    let startY = 0;

    if (side === 0) { startX = -20 - Math.random() * 80; startY = Math.random() * 120; }
    if (side === 1) { startX = 120 + Math.random() * 80; startY = Math.random() * 120; }
    if (side === 2) { startX = Math.random() * 120; startY = -20 - Math.random() * 80; }
    if (side === 3) { startX = Math.random() * 120; startY = 120 + Math.random() * 80; }

    const angle = Math.random() * Math.PI * 2;
    const radius = 5 + Math.random() * 35;
    const endX = 50 + Math.cos(angle) * radius;
    const endY = 50 + Math.sin(angle) * radius;

    return {
      id: index,
      startX, startY, endX, endY,
      delay: Math.random() * 1.4,
      duration: 1.1 + Math.random() * 0.8,
      size: 1.5 + Math.random() * 2.5,
      angle,
    };
  });
}

function MeteorField({ active }: { active: boolean }) {
  // dikurangin lagi dari 15 ke 10 - meteor itu paling berat krn box-shadow + posisi berubah tiap saat
  const meteors = useMemo(() => generateMeteors(10), []);

  return (
    <AnimatePresence>
      {active &&
        meteors.map((meteor) => (
          <motion.div
            key={meteor.id}
            className="pointer-events-none absolute z-20 will-change-transform"
            initial={{ left: `${meteor.startX}%`, top: `${meteor.startY}%`, opacity: 0, scale: 0.2 }}
            animate={{
              left: `${meteor.endX}%`,
              top: `${meteor.endY}%`,
              opacity: [0, 1, 1, 0],
              scale: [0.2, 1, 1.1, 0],
              rotate: meteor.angle,
            }}
            transition={{ duration: meteor.duration, delay: meteor.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-full bg-sky-200"
              style={{
                width: meteor.size * 2,
                height: meteor.size * 2,
                boxShadow: `0 0 10px rgba(125,211,252,0.8)`,
              }}
            />
            <div className="absolute right-[70%] top-1/2 h-[2px] w-[45px] -translate-y-1/2 rounded-full bg-gradient-to-l from-sky-300 via-blue-500/60 to-transparent" />
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

/* =========================================================
   ORBIT (ring dekoratif kosong TIDAK ikut animasi rotate lagi)
========================================================= */

function Orbit({
  size,
  duration,
  children,
  dashed,
  animated = true,
}: {
  size: number;
  duration: number;
  children?: React.ReactNode;
  dashed?: boolean;
  animated?: boolean;
}) {
  const baseStyle = {
    width: size,
    height: size,
    marginLeft: -size / 2,
    marginTop: -size / 2,
    border: dashed ? "1px dashed rgba(96,165,250,.16)" : "1px solid rgba(96,165,250,.1)",
  };

  // ring kosong (ga ada logo di dalemnya) ga perlu animasi rotate - hemat resource
  if (!animated) {
    return (
      <div className="absolute left-1/2 top-1/2 rounded-full" style={baseStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full will-change-transform"
      style={baseStyle}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PLANET / LOGO
========================================================= */

function Planet({ item, angle, radius, delay }: { item: TechItem; angle: number; radius: number; delay: number }) {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-30"
      style={{ x, y, marginLeft: -34, marginTop: -34 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.7, type: "spring", stiffness: 150, damping: 16 }}
    >
      <motion.div
        className="absolute inset-[-10px] rounded-full blur-[8px]"
        style={{ background: item.color }}
        animate={{ opacity: [0.06, 0.2, 0.06], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full border border-white/[0.14] bg-[#070A12]/95 shadow-[inset_0_0_18px_rgba(255,255,255,.03)] backdrop-blur-xl"
        whileHover={{ scale: 1.2, borderColor: "rgba(147,197,253,.5)", boxShadow: `0 0 30px ${item.color}55` }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
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

type RingConfig = { size: number; populated: boolean; dashed?: boolean };

/* =========================================================
   SOLAR SYSTEM
========================================================= */

function SolarSystem({
  title,
  subtitle,
  items,
  variant,
  active,
}: {
  title: string;
  subtitle: string;
  items: TechItem[];
  variant: "programming" | "trading";
  active: boolean;
}) {
  const programming = variant === "programming";
  const accent = programming ? "#38BDF8" : "#A78BFA";

  const rings: RingConfig[] = programming
    ? [
        { size: 190, populated: false },
        { size: 300, populated: true },
        { size: 400, populated: false, dashed: true },
        { size: 500, populated: true, dashed: true },
      ]
    : [
        { size: 210, populated: false },
        { size: 340, populated: true },
        { size: 460, populated: false, dashed: true },
      ];

  const populatedRings = rings
    .map((ring, index) => ({ ...ring, index }))
    .filter((r) => r.populated);

  const groups: TechItem[][] = populatedRings.map(() => []);
  items.forEach((item, i) => {
    const groupIdx = i % populatedRings.length;
    groups[groupIdx].push(item);
  });

  return (
    <motion.div
      className="relative flex min-h-[700px] flex-1 items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      {/* LABEL */}
      <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 text-center">
        <motion.div
          className="text-sm font-semibold uppercase tracking-[0.35em] md:text-base"
          style={{ color: accent }}
          initial={{ opacity: 0, y: -10 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 1.1 }}
        >
          {title}
        </motion.div>

        <motion.div
          className="mt-2 text-xs tracking-wide text-white/30 md:text-sm"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.3 }}
        >
          {subtitle}
        </motion.div>
      </div>

      {/* SYSTEM */}
      <div className="relative h-[560px] w-[560px]">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] will-change-transform"
          style={{ background: accent }}
          animate={active ? { opacity: [0.05, 0.2, 0.05], scale: [0.85, 1.1, 0.85] } : { opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* CORE */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-50 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-[#060910]"
          style={{ borderColor: `${accent}55` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75, type: "spring", stiffness: 140, damping: 14 }}
        >
          <motion.div
            className="absolute inset-[-18px] rounded-full blur-[13px] will-change-transform"
            style={{ background: accent }}
            animate={{ opacity: [0.1, 0.32, 0.1], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative">
            {programming ? <ComputerIcon color={accent} /> : <CandlestickIcon color={accent} />}
          </div>
        </motion.div>

        {/* RINGS */}
        {rings.map((ring, ringIndex) => {
          const populatedData = populatedRings.find((r) => r.index === ringIndex);
          const groupItems = populatedData ? groups[populatedRings.indexOf(populatedData)] : [];
          const isPopulated = !!populatedData;

          return (
            <Orbit
              key={ringIndex}
              size={ring.size}
              duration={30 + ringIndex * 10}
              dashed={ring.dashed}
              animated={isPopulated} // ring kosong ga ikut rotate
            >
              {groupItems.map((item, itemIndex) => {
                const angle = (itemIndex / groupItems.length) * Math.PI * 2 + ringIndex * 0.5;
                return (
                  <Planet
                    key={item.id}
                    item={item}
                    angle={angle}
                    radius={ring.size / 2}
                    delay={1.35 + ringIndex * 0.15 + itemIndex * 0.08}
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
   MAIN
========================================================= */

export default function TechStack() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [spawned, setSpawned] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          setSpawned(true);
          observer.disconnect(); // stop observing setelah sekali kedetect, ga perlu cek terus
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tech-stack" className="relative min-h-screen overflow-hidden bg-transparent py-28">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.025] blur-[80px] will-change-transform"
          animate={visible ? { scale: [0.9, 1.08, 0.9], opacity: [0.3, 0.7, 0.3] } : { opacity: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[1px] w-[1px] rounded-full bg-sky-300"
            style={{ left: `${(index * 37) % 100}%`, top: `${(index * 61) % 100}%` }}
            animate={visible ? { opacity: [0.04, 0.3, 0.04] } : { opacity: 0 }}
            transition={{ duration: 2.5 + (index % 4), repeat: Infinity, delay: (index % 7) * 0.25, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* METEORS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <MeteorField active={spawned} />
      </div>

      {/* CONTENT */}
      <div className="relative z-40 mx-auto max-w-[1550px] px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mx-auto mb-6 max-w-[700px] text-xs font-medium uppercase tracking-[0.35em] text-white/40 sm:text-sm md:text-base">
            The technologies, tools, and platforms that build my ecosystem.
          </p>

          <h2
            className="text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px]"
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

        {/* SOLAR SYSTEMS */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-0">
          <SolarSystem title="PROGRAMMING & DATA" subtitle="Building the system" items={programmingStack} variant="programming" active={visible} />

          <div className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-sky-400/25 to-transparent lg:block" />

          <SolarSystem title="TRADING ECOSYSTEM" subtitle="Analyzing the market" items={tradingStack} variant="trading" active={visible} />
        </div>
      </div>
    </section>
  );
}