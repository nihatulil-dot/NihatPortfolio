"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 12 : 18, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.82, 0.94] : [0.88, 1]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex
        h-[42rem]
        items-center
        justify-center
        overflow-visible
        px-2
        md:h-[52rem]
        md:px-8
      "
    >
      <div
        className="relative w-full py-10 md:py-20"
        style={{
          perspective: "1200px",
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />

        <Card
          rotate={rotate}
          scale={scale}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}

export const Header = ({
  translate,
  titleComponent,
}: HeaderProps) => {
  return (
    <motion.div
      style={{
        y: translate,
      }}
      className="
        relative
        z-20
        mx-auto
        max-w-4xl
        text-center
      "
    >
      {titleComponent}
    </motion.div>
  );
};

interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}

export const Card = ({
  rotate,
  scale,
  children,
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformOrigin: "center top",
        boxShadow:
          "0 0 #0000004d, 0 12px 25px #0000004a, 0 40px 40px #00000042, 0 90px 60px #00000026",
      }}
      className="
        relative
        z-10
        mx-auto
        mt-[-4rem]
        h-[22rem]
        w-full
        max-w-5xl
        rounded-[28px]
        border-4
        border-[#3f3f46]
        bg-[#18181b]
        p-2
        md:mt-[-6rem]
        md:h-[34rem]
        md:p-4
      "
    >
      <div
        className="
          h-full
          w-full
          overflow-hidden
          rounded-[20px]
          border
          border-zinc-700
          bg-[#05070B]
        "
      >
        {children}
      </div>
    </motion.div>
  );
};