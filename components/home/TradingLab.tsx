"use client";

import Link from "next/link";
import {
  Brain,
  ChartCandlestick,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/lib/container";
import Reveal from "@/components/animations/Reveal";

const labs = [
  {
    icon: Brain,
    title: "Strategy Research",
    description:
      "Exploring quantitative trading ideas through statistical analysis, market observations, and systematic strategy development.",
    status: "Planning",
    href: "/tradinglab/strategy-research",
    active: true,
  },
  {
    icon: ChartCandlestick,
    title: "Backtesting",
    description:
      "Testing and evaluating trading strategies using historical market data to measure performance and risk.",
    status: "Coming Soon",
    href: null,
    active: false,
  },
  {
    icon: FlaskConical,
    title: "Strategy Development",
    description:
      "Transforming researched strategies into a systematic trading framework with signal confirmation and dynamic risk management.",
    status: "In Progress",
    href: "/tradinglab/strategy-development",
    active: true,
  },
];

export default function TradingLab() {
  return (
    <section id="trading-lab" className="py-32">
      <Container>
        <Reveal>
          {/* =========================
              SECTION HEADER
          ========================== */}
          <div className="max-w-3xl">
            <p className="mb-6 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
              Trading Lab
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Research, experimentation, and continuous improvement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              This section documents my journey in quantitative trading, from
              researching trading strategies to building systematic systems
              and evaluating them through backtesting.
            </p>
          </div>

          {/* =========================
              LAB CARDS
          ========================== */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {labs.map((lab) => {
              const Icon = lab.icon;

              const card = (
                <div
                  className={`
                    group relative h-full overflow-hidden rounded-2xl
                    border border-zinc-800 bg-zinc-900/60 p-8
                    transition-all duration-300
                    ${
                      lab.active
                        ? "cursor-pointer hover:-translate-y-2 hover:border-blue-500/60 hover:bg-zinc-900"
                        : "cursor-default opacity-80"
                    }
                  `}
                >
                  {/* =========================
                      BACKGROUND GLOW
                  ========================== */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-40 w-40
                      rounded-full
                      bg-blue-500/5
                      blur-3xl
                      transition-all duration-500
                      group-hover:bg-blue-500/10
                    "
                  />

                  {/* =========================
                      ICON
                  ========================== */}
                  <div
                    className="
                      relative flex h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-zinc-800
                      bg-zinc-950
                      transition-all duration-300
                      group-hover:border-blue-500/30
                      group-hover:bg-blue-500/10
                    "
                  >
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>

                  {/* =========================
                      TITLE + ARROW
                  ========================== */}
                  <div className="relative mt-7 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {lab.title}
                    </h3>

                    {lab.active && (
                      <ArrowUpRight
                        className="
                          h-5 w-5 shrink-0
                          text-zinc-700
                          transition-all duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-blue-400
                        "
                      />
                    )}
                  </div>

                  {/* =========================
                      DESCRIPTION
                  ========================== */}
                  <p className="relative mt-4 leading-8 text-zinc-400">
                    {lab.description}
                  </p>

                  {/* =========================
                      STATUS
                  ========================== */}
                  <div className="relative mt-8">
                    <span
                      className={`
                        inline-flex rounded-full
                        border px-4 py-2 text-sm
                        ${
                          lab.status === "In Progress"
                            ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                            : lab.status === "Planning"
                              ? "border-blue-500/20 bg-blue-500/5 text-blue-400"
                              : "border-zinc-700 bg-zinc-900 text-zinc-500"
                        }
                      `}
                    >
                      {lab.status}
                    </span>
                  </div>

                  {/* =========================
                      CLICK INDICATOR
                  ========================== */}
                  {lab.active && (
                    <div
                      className="
                        pointer-events-none absolute
                        bottom-0 left-0
                        h-px w-0
                        bg-blue-500
                        transition-all duration-500
                        group-hover:w-full
                      "
                    />
                  )}
                </div>
              );

              {/* =========================
                  CLICKABLE CARD
              ========================== */}
              if (lab.active && lab.href) {
                return (
                  <Link
                    key={lab.title}
                    href={lab.href}
                    className="block h-full"
                  >
                    {card}
                  </Link>
                );
              }

              {/* =========================
                  DISABLED CARD
              ========================== */}
              return (
                <div key={lab.title} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}