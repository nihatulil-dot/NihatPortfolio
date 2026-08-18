"use client";

import React from "react";
import Container from "@/lib/container";
import FadeUp from "@/components/animations/FadeUp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  Code2,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    title: "Quant Trading Platform",
    description:
      "End-to-end quantitative trading platform for strategy development, market analysis, backtesting, portfolio management, and performance evaluation.",
    status: "In Development",
    number: "01",
    icon: TrendingUp,
  },
  {
    title: "Personal Projects",
    description:
      "A collection of personal projects focused on data science, automation, programming, and continuous learning.",
    status: "Coming Soon",
    number: "02",
    icon: Code2,
  },
  {
    title: "Web Design",
    description:
      "Modern web interfaces and responsive UI designs created while learning frontend development and building personal applications.",
    status: "Coming Soon",
    number: "03",
    icon: Globe,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Container>

        {/* =====================================================
            PROJECT SHOWCASE
        ===================================================== */}

        <FadeUp delay={0.15}>
          <ContainerScroll
            titleComponent={
              <div className="mb-12">

                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-blue-500/50" />

                  <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                    Selected Work
                  </span>

                  <span className="h-px w-12 bg-blue-500/50" />
                </div>

                <h3 className="text-4xl font-bold text-white md:text-6xl">
                  Things I&apos;m{" "}
                  <span className="text-blue-500">
                    Building
                  </span>
                </h3>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                  Explore my current work across quantitative
                  research, data science, programming, and web
                  development.
                </p>

              </div>
            }
          >

            {/* =================================================
                LARGE PROJECT SCREEN
            ================================================= */}

            <div className="relative h-full w-full overflow-hidden bg-[#05070B]">

              {/* BACKGROUND GRID */}

              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(59,130,246,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.07) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* BLUE AMBIENT GLOW */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[700px]
                  w-[700px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/[0.06]
                  blur-[140px]
                "
              />

              {/* CONTENT */}

              <div className="relative z-10 flex h-full flex-col p-7 md:p-10 lg:p-12">

                {/* =================================================
                    TOP BAR
                ================================================= */}

                <div className="flex items-center justify-between border-b border-zinc-800 pb-5">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-blue-500/30
                        bg-blue-500/10
                      "
                    >
                      <Sparkles
                        size={18}
                        className="text-blue-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-white">
                        Nihat&apos;s Projects
                      </p>

                      <p className="mt-0.5 text-[9px] text-zinc-600">
                        SELECTED WORK / 2026
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

                    <span className="hidden text-[9px] uppercase tracking-wider text-zinc-500 sm:block">
                      Portfolio System
                    </span>

                  </div>

                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================= */}

                <div className="flex flex-1 items-center py-8">

                  <div className="grid w-full gap-5 md:grid-cols-3">

                    {projects.map((project) => {
                      const Icon = project.icon;

                      return (
                        <ProjectShowcase
                          key={project.title}
                          project={project}
                          Icon={Icon}
                        />
                      );
                    })}

                  </div>

                </div>

                {/* =================================================
                    BOTTOM BAR
                ================================================= */}

                <div className="flex items-center justify-between border-t border-zinc-800 pt-5">

                  <div className="flex items-center gap-3">

                    <div className="flex gap-1">
                      <span className="h-1 w-6 rounded-full bg-blue-500" />
                      <span className="h-1 w-2 rounded-full bg-zinc-800" />
                      <span className="h-1 w-2 rounded-full bg-zinc-800" />
                    </div>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                      03 Featured Projects
                    </span>

                  </div>

                  <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Scroll to Explore
                  </span>

                </div>

              </div>

            </div>

          </ContainerScroll>
        </FadeUp>

      </Container>
    </section>
  );
}


/* =============================================================
   PROJECT SHOWCASE CARD
============================================================= */

function ProjectShowcase({
  project,
  Icon,
}: {
  project: (typeof projects)[number];
  Icon: React.ElementType;
}) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[320px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950/80
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-blue-500/50
        hover:bg-zinc-900
        md:min-h-[360px]
        md:p-7
      "
    >

      {/* CARD GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition
          duration-500
          group-hover:bg-blue-500/20
        "
      />

      {/* NUMBER + STATUS */}

      <div className="flex items-center justify-between">

        <span className="font-mono text-[10px] text-zinc-700">
          / {project.number}
        </span>

        <span
          className="
            rounded-full
            border
            border-zinc-800
            px-3
            py-1.5
            text-[8px]
            uppercase
            tracking-wider
            text-zinc-600
          "
        >
          {project.status}
        </span>

      </div>

      {/* ICON */}

      <div
        className="
          mt-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          border
          border-blue-500/20
          bg-blue-500/10
          text-blue-400
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:border-blue-500/50
          group-hover:bg-blue-500/15
        "
      >
        <Icon size={23} />
      </div>

      {/* TITLE */}

      <h4
        className="
          mt-6
          text-xl
          font-semibold
          leading-tight
          text-white
          transition
          duration-300
          group-hover:text-blue-400
          md:text-2xl
        "
      >
        {project.title}
      </h4>

      {/* DESCRIPTION */}

      <p className="mt-4 text-sm leading-6 text-zinc-500 md:text-[15px]">
        {project.description}
      </p>

      {/* BOTTOM */}

      <div className="mt-auto flex items-center justify-between pt-8">

        <div className="flex items-center gap-1.5">

          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

          <span className="text-[8px] uppercase tracking-wider text-zinc-600">
            Project
          </span>

        </div>

        <span className="text-sm text-zinc-700 transition group-hover:text-blue-400">
          →
        </span>

      </div>

    </div>
  );
}