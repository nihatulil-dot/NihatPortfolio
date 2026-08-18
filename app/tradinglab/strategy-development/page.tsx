"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Brain,
  Check,
  CircleDot,
  Gauge,
  Layers3,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import Container from "@/lib/container";
import Reveal from "@/components/animations/Reveal";

const indicators = [
  {
    name: "VWAP",
    role: "Market Context",
    description:
      "Helps identify whether price is trading above or below a volume-weighted reference price.",
  },
  {
    name: "Z-Score",
    role: "Statistical Context",
    description:
      "Measures how far price is from its reference mean in standard deviation units.",
  },
  {
    name: "Standard Deviation",
    role: "Volatility Context",
    description:
      "Provides information about price dispersion and helps describe the current market environment.",
  },
];

const developmentSteps = [
  {
    title: "Research Variables",
    description:
      "Define the market variables and indicators that will be investigated.",
    status: "complete",
  },
  {
    title: "Signal Framework",
    description:
      "Convert individual observations into explicit directional conditions.",
    status: "complete",
  },
  {
    title: "Confirmation Logic",
    description:
      "Require multiple conditions to align before considering an entry.",
    status: "complete",
  },
  {
    title: "ATR Risk Framework",
    description:
      "Use volatility to build adaptive stop-loss and take-profit distances.",
    status: "complete",
  },
  {
    title: "Entry Refinement",
    description:
      "Continue refining the conditions that define a valid trading setup.",
    status: "progress",
  },
  {
    title: "Historical Backtesting",
    description:
      "Evaluate the complete strategy against historical market data.",
    status: "pending",
  },
];

export default function StrategyDevelopmentPage() {
  const router = useRouter();

  const handleBack = () => {
    sessionStorage.setItem("scrollToTradingLab", "true");
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        {/* =====================================================
            BACK BUTTON
        ====================================================== */}

        <div className="pt-10">
          <button
            type="button"
            onClick={handleBack}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-zinc-700
              bg-zinc-900/80
              px-5
              py-3
              text-sm
              font-medium
              text-zinc-300
              transition-all
              duration-300
              hover:border-blue-500/50
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Trading Lab
          </button>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <Reveal>
          <section className="relative pt-24 md:pt-32">
            <div
              className="
                pointer-events-none
                absolute
                -right-40
                -top-32
                h-96
                w-96
                rounded-full
                bg-blue-500/[0.06]
                blur-[120px]
              "
            />

            <div className="relative max-w-4xl">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.06]
                  "
                >
                  <Brain className="h-5 w-5 text-blue-400" />
                </div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-blue-500
                  "
                >
                  Trading Lab / Strategy Development
                </p>
              </div>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-bold
                  tracking-tight
                  md:text-7xl
                "
              >
                Turning research into
                <span className="block text-zinc-500">
                  systematic trading rules.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-8
                  text-zinc-400
                  md:text-xl
                "
              >
                Strategy development is the process of transforming market
                observations and quantitative research into a structured
                trading framework that can be executed, evaluated, and
                improved consistently.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span
                  className="
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/[0.05]
                    px-4
                    py-2
                    text-sm
                    text-emerald-400
                  "
                >
                  ● In Progress
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-zinc-800
                    bg-zinc-950
                    px-4
                    py-2
                    text-sm
                    text-zinc-500
                  "
                >
                  Multi-Signal Framework
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-zinc-800
                    bg-zinc-950
                    px-4
                    py-2
                    text-sm
                    text-zinc-500
                  "
                >
                  ATR-Based Risk
                </span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            01 — THE CONCEPT
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-center
              "
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  01 / The Concept
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  What happens during strategy development?
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  Research tells us what might be useful. Development turns
                  those findings into explicit rules. The goal is to remove as
                  much ambiguity as possible from the decision-making process.
                </p>

                <p className="mt-5 leading-8 text-zinc-500">
                  Instead of saying “the market looks bullish,” the strategy
                  should define what bullish actually means, what conditions
                  must be satisfied, where risk is placed, and when the trade
                  should be closed.
                </p>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  md:p-8
                "
              >
                <div className="space-y-3">
                  {[
                    ["01", "Market Data", "Price + Volume"],
                    ["02", "Analysis", "Indicators + Statistics"],
                    ["03", "Confirmation", "Multiple conditions"],
                    ["04", "Execution", "Entry + Risk"],
                    ["05", "Evaluation", "Performance + Drawdown"],
                  ].map(([number, title, subtitle], index) => (
                    <div key={title}>
                      <div
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-zinc-800
                          bg-zinc-900/50
                          p-4
                        "
                      >
                        <span className="text-xs font-bold text-blue-500">
                          {number}
                        </span>

                        <div>
                          <p className="font-semibold">{title}</p>

                          <p className="mt-1 text-sm text-zinc-600">
                            {subtitle}
                          </p>
                        </div>
                      </div>

                      {index !== 4 && (
                        <div className="ml-8 h-3 border-l border-zinc-800" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            02 — FROM RESEARCH TO RULES
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                02 / From Research to Rules
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Research discovers.
                <span className="block text-zinc-500">
                  Development structures.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Research",
                  question: "What might be useful?",
                  description:
                    "Investigate indicators, statistical relationships, price behavior, and market conditions.",
                  icon: BarChart3,
                },
                {
                  title: "Development",
                  question: "How can it become a rule?",
                  description:
                    "Convert observations into measurable entry, confirmation, risk, and exit conditions.",
                  icon: Layers3,
                },
                {
                  title: "Testing",
                  question: "Does the rule actually work?",
                  description:
                    "Evaluate the complete framework against historical data before drawing conclusions.",
                  icon: Gauge,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      relative
                      rounded-3xl
                      border
                      border-zinc-800
                      bg-zinc-950
                      p-7
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-900
                      "
                    >
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>

                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-zinc-600">
                      Step 0{index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-blue-400">{item.question}</p>

                    <p className="mt-4 leading-7 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            03 — ANALYSIS LAYER
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                03 / Analysis Layer
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Multiple signals, different perspectives.
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Each variable describes a different aspect of market behavior.
                The development process combines these perspectives instead of
                relying on a single indicator.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {indicators.map((indicator, index) => (
                <div
                  key={indicator.name}
                  className="
                    group
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-600">
                      0{index + 1}
                    </span>

                    <CircleDot className="h-4 w-4 text-blue-500" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {indicator.name}
                  </h3>

                  <p className="mt-2 text-sm text-blue-400">
                    {indicator.role}
                  </p>

                  <p className="mt-5 leading-7 text-zinc-500">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            04 — SIGNAL CONFIRMATION
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[0.8fr_1.2fr]
                lg:items-center
              "
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  04 / Signal Confirmation
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  Avoid relying on one signal alone.
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  The current research framework uses confirmation across
                  multiple conditions. A directional setup becomes stronger
                  when several observations point in the same direction.
                </p>

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-blue-500/10
                    bg-blue-500/[0.03]
                    p-5
                  "
                >
                  <p className="text-sm leading-7 text-zinc-400">
                    <span className="font-semibold text-blue-400">
                      Research principle:
                    </span>{" "}
                    the confirmation threshold is a parameter to be tested,
                    not a claim that three signals will always produce a
                    profitable trade.
                  </p>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  md:p-10
                "
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ["VWAP", "BULLISH"],
                    ["Z-SCORE", "BULLISH"],
                    ["STD DEV", "BULLISH"],
                  ].map(([name, signal]) => (
                    <div
                      key={name}
                      className="
                        rounded-2xl
                        border
                        border-emerald-500/10
                        bg-emerald-500/[0.03]
                        p-5
                        text-center
                      "
                    >
                      <div
                        className="
                          mx-auto
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-emerald-500/20
                          bg-emerald-500/10
                        "
                      >
                        <Check className="h-5 w-5 text-emerald-400" />
                      </div>

                      <p className="mt-4 text-sm font-semibold">{name}</p>

                      <p className="mt-2 text-[10px] font-bold tracking-[0.2em] text-emerald-400">
                        {signal}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="my-8 flex justify-center">
                  <ArrowDown className="h-5 w-5 text-zinc-700" />
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.04]
                    p-6
                    text-center
                  "
                >
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-600">
                    Confirmation
                  </p>

                  <p className="mt-3 text-4xl font-bold text-blue-400">
                    3 / 3
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Directional conditions aligned
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-4
                      py-2
                      text-sm
                      text-blue-400
                    "
                  >
                    <TrendingUp className="h-4 w-4" />
                    Long Candidate
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            05 — DIRECTIONAL LOGIC
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                05 / Directional Logic
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                The same framework works in both directions.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div
                className="
                  rounded-3xl
                  border
                  border-emerald-500/10
                  bg-emerald-500/[0.02]
                  p-7
                "
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />

                  <h3 className="text-xl font-semibold">
                    Long Candidate
                  </h3>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "VWAP → Bullish",
                    "Z-Score → Bullish",
                    "Std. Dev. → Bullish",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        p-4
                      "
                    >
                      <span className="text-sm text-zinc-400">{item}</span>

                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-4">
                  <p className="text-sm leading-6 text-zinc-500">
                    Multiple bullish observations align to create a potential
                    long setup.
                  </p>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-red-500/10
                  bg-red-500/[0.02]
                  p-7
                "
              >
                <div className="flex items-center gap-3">
                  <TrendingDown className="h-5 w-5 text-red-400" />

                  <h3 className="text-xl font-semibold">
                    Short Candidate
                  </h3>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "VWAP → Bearish",
                    "Z-Score → Bearish",
                    "Std. Dev. → Bearish",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-zinc-800
                        bg-zinc-950
                        p-4
                      "
                    >
                      <span className="text-sm text-zinc-400">{item}</span>

                      <Check className="h-4 w-4 text-red-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-red-500/10 bg-red-500/[0.03] p-4">
                  <p className="text-sm leading-6 text-zinc-500">
                    Multiple bearish observations align to create a potential
                    short setup.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            06 — ATR RISK ENGINE
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[0.8fr_1.2fr]
                lg:items-center
              "
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  06 / ATR Risk Engine
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  ATR is not only a signal.
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  Average True Range can also be used as a volatility-based
                  distance for risk management. Instead of using the same
                  fixed stop distance in every market condition, the framework
                  allows the distance to adapt to current volatility.
                </p>

                <p className="mt-5 leading-8 text-zinc-500">
                  ATR does not predict whether price will rise or fall. It
                  measures the magnitude of recent price movement and can
                  therefore be used to structure adaptive risk distances.
                </p>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  md:p-10
                "
              >
                <div className="relative mx-auto max-w-xl">
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-full
                      -translate-x-1/2
                      border-l
                      border-dashed
                      border-zinc-800
                    "
                  />

                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-emerald-500/10
                        bg-emerald-500/[0.03]
                        p-5
                        text-center
                      "
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Take Profit
                      </p>

                      <p className="mt-2 text-lg font-bold text-emerald-400">
                        Entry + (ATR × TP Multiple)
                      </p>
                    </div>

                    <div className="flex h-10 items-center">
                      <ArrowDown className="h-5 w-5 text-zinc-700" />
                    </div>

                    <div
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-blue-500/20
                        bg-blue-500/[0.04]
                        p-5
                        text-center
                      "
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Entry
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        100.00
                      </p>
                    </div>

                    <div className="flex h-10 items-center">
                      <ArrowDown className="h-5 w-5 text-zinc-700" />
                    </div>

                    <div
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-red-500/10
                        bg-red-500/[0.03]
                        p-5
                        text-center
                      "
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        Stop Loss
                      </p>

                      <p className="mt-2 text-lg font-bold text-red-400">
                        Entry - (ATR × SL Multiple)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            ATR EXAMPLE
        ====================================================== */}

        <Reveal>
          <section className="mt-24">
            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-7
                md:p-10
              "
            >
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-blue-400" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  Example Parameters
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-4">
                {[
                  ["Entry Price", "100.00"],
                  ["ATR", "2.00"],
                  ["SL Multiple", "1.5×"],
                  ["TP Multiple", "3.0×"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      rounded-2xl
                      border
                      border-zinc-800
                      bg-black
                      p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                      {label}
                    </p>

                    <p className="mt-3 text-2xl font-bold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div
                  className="
                    rounded-2xl
                    border
                    border-red-500/10
                    bg-red-500/[0.02]
                    p-6
                  "
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-red-400" />

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                      Stop Loss
                    </p>
                  </div>

                  <p className="mt-4 font-mono text-lg text-zinc-300">
                    100 - (2 × 1.5) ={" "}
                    <span className="font-bold text-red-400">97</span>
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-emerald-500/10
                    bg-emerald-500/[0.02]
                    p-6
                  "
                >
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-emerald-400" />

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                      Take Profit
                    </p>
                  </div>

                  <p className="mt-4 font-mono text-lg text-zinc-300">
                    100 + (2 × 3) ={" "}
                    <span className="font-bold text-emerald-400">106</span>
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-zinc-600">
                These values are illustrative research parameters. The
                multipliers are not presented as optimized or validated
                settings until they have been evaluated through backtesting.
              </p>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            07 — COMPLETE STRATEGY FLOW
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                07 / Complete Strategy Flow
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                From market data to trade management.
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                The complete framework connects analysis, confirmation,
                execution, and risk management into one sequential process.
              </p>
            </div>

            <div
              className="
                mt-12
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
                md:p-10
              "
            >
              <div className="space-y-3">
                {[
                  {
                    title: "Market Data",
                    description:
                      "Price, volume, and market information.",
                  },
                  {
                    title: "Indicator Analysis",
                    description:
                      "VWAP, Z-Score, Standard Deviation, and ATR.",
                  },
                  {
                    title: "Signal Confirmation",
                    description:
                      "Multiple directional conditions must align.",
                  },
                  {
                    title: "Entry Decision",
                    description:
                      "A qualified setup becomes an executable candidate.",
                  },
                  {
                    title: "ATR Risk Engine",
                    description:
                      "Volatility-based SL and TP distances are calculated.",
                  },
                  {
                    title: "Trade Management",
                    description:
                      "Monitor the position according to predefined rules.",
                  },
                  {
                    title: "Exit",
                    description:
                      "Close through SL, TP, or another defined exit condition.",
                  },
                ].map((step, index) => (
                  <div key={step.title}>
                    <div
                      className="
                        group
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-black
                        p-5
                        transition-colors
                        hover:border-blue-500/20
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-zinc-800
                          bg-zinc-900
                          text-xs
                          font-bold
                          text-blue-400
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold">{step.title}</h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-600">
                          {step.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          ml-auto
                          h-4
                          w-4
                          shrink-0
                          text-zinc-800
                          transition-colors
                          group-hover:text-blue-500
                        "
                      />
                    </div>

                    {index !== 6 && (
                      <div className="ml-10 h-3 border-l border-zinc-800" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            08 — DEVELOPMENT STATUS
        ====================================================== */}

        <Reveal>
          <section className="mt-32">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[0.8fr_1.2fr]
              "
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                  08 / Development Status
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  The strategy is still being developed.
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  A strategy should not be considered complete simply because
                  the logic looks convincing on a chart. The next stage is to
                  test whether the rules remain useful across historical data
                  and different market conditions.
                </p>

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-blue-500/10
                    bg-blue-500/[0.03]
                    p-6
                  "
                >
                  <p className="text-sm leading-7 text-zinc-500">
                    The objective is not to create a strategy that looks
                    perfect. The objective is to create a strategy whose
                    assumptions can be measured, tested, challenged, and
                    improved.
                  </p>
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-7
                  md:p-10
                "
              >
                <div className="space-y-5">
                  {developmentSteps.map((step) => {
                    const complete = step.status === "complete";
                    const progress = step.status === "progress";

                    return (
                      <div
                        key={step.title}
                        className="
                          flex
                          gap-4
                          border-b
                          border-zinc-900
                          pb-5
                          last:border-0
                          last:pb-0
                        "
                      >
                        <div
                          className={`
                            mt-1
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${
                              complete
                                ? "border-emerald-500/20 bg-emerald-500/10"
                                : progress
                                  ? "border-blue-500/20 bg-blue-500/10"
                                  : "border-zinc-800 bg-zinc-900"
                            }
                          `}
                        >
                          {complete ? (
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                          ) : progress ? (
                            <CircleDot className="h-3.5 w-3.5 text-blue-400" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-semibold">{step.title}</h3>

                            <span
                              className={`
                                rounded-full
                                px-2.5
                                py-1
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                ${
                                  complete
                                    ? "bg-emerald-500/5 text-emerald-500"
                                    : progress
                                      ? "bg-blue-500/5 text-blue-400"
                                      : "bg-zinc-900 text-zinc-600"
                                }
                              `}
                            >
                              {complete
                                ? "Complete"
                                : progress
                                  ? "In Progress"
                                  : "Pending"}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-zinc-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            DEVELOPMENT PHILOSOPHY
        ====================================================== */}

        <Reveal>
          <section className="mt-32 pb-24">
            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-8
                text-center
                md:p-12
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">
                Development Philosophy
              </p>

              <h2
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-3xl
                  font-bold
                  tracking-tight
                  md:text-5xl
                "
              >
                A strategy is not finished when it looks good on a chart.
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  leading-8
                  text-zinc-500
                "
              >
                It becomes meaningful when its assumptions are translated into
                explicit rules, tested against data, evaluated under different
                conditions, and refined based on evidence.
              </p>
            </div>
          </section>
        </Reveal>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="border-t border-zinc-900 py-10">
          <div
            className="
              flex
              flex-col
              gap-4
              text-sm
              text-zinc-600
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>Strategy Development / Trading Lab</p>

            <Link
              href="/#trading-lab"
              className="
                group
                inline-flex
                items-center
                gap-2
                transition-colors
                hover:text-blue-400
              "
            >
              Back to Trading Lab

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </footer>
      </Container>
    </main>
  );
}