"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Brain,
  ChartCandlestick,
  CircleDot,
  Database,
  FlaskConical,
  LineChart,
  Sigma,
  ShieldCheck,
  Target,
  TrendingUp,
  Activity,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type SignalType = "bullish" | "bearish" | "neutral";

interface Interpretation {
  type: SignalType;
  title: string;
  description: string;
}

interface ResearchMethod {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  howItWorks: string;
  why: string;
  interpretation: Interpretation[];
}

/* =========================================================
   RESEARCH METHODS
========================================================= */

const researchMethods: ResearchMethod[] = [
  {
    id: "01",
    icon: ChartCandlestick,
    title: "VWAP",
    subtitle: "Volume Weighted Average Price",
    category: "PRICE & VOLUME",
    description:
      "VWAP measures the average traded price weighted by volume. It provides context about where the current price stands relative to the price level where most trading activity has taken place.",
    howItWorks:
      "Instead of treating every price equally, VWAP gives more weight to prices where greater trading volume occurred. This makes it useful for understanding the relationship between price and market participation.",
    why:
      "VWAP can help identify whether price is trading above, below, or around a volume-weighted reference level. In this research framework, it is mainly used as one component of directional analysis rather than as a standalone trading system.",
    interpretation: [
      {
        type: "bullish",
        title: "Price above VWAP",
        description:
          "Price is trading above the volume-weighted average, which can support a bullish market interpretation.",
      },
      {
        type: "bearish",
        title: "Price below VWAP",
        description:
          "Price is trading below the volume-weighted average, which can support a bearish market interpretation.",
      },
      {
        type: "neutral",
        title: "Price near VWAP",
        description:
          "Price is close to VWAP, suggesting that the market may currently be relatively balanced.",
      },
    ],
  },

  {
    id: "02",
    icon: Sigma,
    title: "Z-SCORE",
    subtitle: "Statistical Price Deviation",
    category: "STATISTICAL ANALYSIS",
    description:
      "Z-Score measures how far the current price is from its average in terms of standard deviations.",
    howItWorks:
      "The current price is compared with its historical mean and standard deviation. The resulting value shows whether price is relatively close to its average or experiencing an unusually large deviation.",
    why:
      "Z-Score transforms price movement into a statistical measurement. This allows abnormal deviations to be evaluated using a consistent numerical framework instead of relying only on visual interpretation.",
    interpretation: [
      {
        type: "bullish",
        title: "Positive deviation",
        description:
          "A positive Z-Score means price is above its mean. The larger the value, the further price has moved away from the average.",
      },
      {
        type: "bearish",
        title: "Negative deviation",
        description:
          "A negative Z-Score means price is below its mean. A large negative deviation indicates that price has moved significantly below its average.",
      },
      {
        type: "neutral",
        title: "Z-Score near zero",
        description:
          "A value close to zero means price is relatively close to its statistical mean.",
      },
    ],
  },

  {
    id: "03",
    icon: Activity,
    title: "STANDARD DEVIATION",
    subtitle: "Price Dispersion & Volatility",
    category: "STATISTICAL VOLATILITY",
    description:
      "Standard deviation measures how widely price values are distributed around their average. It provides a statistical view of market variability.",
    howItWorks:
      "When price moves closely around its average, standard deviation tends to remain lower. When price movements become more dispersed, standard deviation increases.",
    why:
      "Understanding price dispersion helps identify whether the market is relatively calm or experiencing expanding movement. This information can be useful when evaluating the reliability of a setup and the surrounding market conditions.",
    interpretation: [
      {
        type: "bullish",
        title: "Expanding movement",
        description:
          "Increasing standard deviation indicates that price movement is becoming more dispersed and volatility is expanding.",
      },
      {
        type: "bearish",
        title: "High variability",
        description:
          "High dispersion can increase uncertainty and may require more careful position and risk management.",
      },
      {
        type: "neutral",
        title: "Low dispersion",
        description:
          "Low standard deviation indicates that price is moving relatively close to its average.",
      },
    ],
  },

  {
    id: "04",
    icon: Gauge,
    title: "ATR",
    subtitle: "Average True Range",
    category: "VOLATILITY & RISK",
    description:
      "ATR measures the average range of price movement over a selected period. Unlike directional indicators, ATR does not tell whether the market is bullish or bearish.",
    howItWorks:
      "ATR is calculated from True Range values over a specific period. The resulting value represents the typical magnitude of price movement under current market conditions.",
    why:
      "ATR has two important roles in this research framework. First, it helps measure current market volatility. Second, it can be used to dynamically determine Stop Loss and Take Profit distances based on that volatility.",
    interpretation: [
      {
        type: "bullish",
        title: "Higher ATR",
        description:
          "A higher ATR means the market is experiencing larger price movements. It does not automatically mean the market is bullish.",
      },
      {
        type: "bearish",
        title: "Lower ATR",
        description:
          "A lower ATR indicates relatively quiet price movement. This can occur during consolidation or low-volatility market conditions.",
      },
      {
        type: "neutral",
        title: "No directional bias",
        description:
          "ATR measures volatility, not direction. Rising ATR can occur during both bullish and bearish movements.",
      },
    ],
  },
];

/* =========================================================
   WORKFLOW
========================================================= */

const workflow = [
  {
    number: "01",
    title: "Collect",
    subtitle: "Market Data",
    description:
      "Collect and prepare price and volume data required for quantitative analysis.",
    icon: Database,
  },
  {
    number: "02",
    title: "Observe",
    subtitle: "Market Behavior",
    description:
      "Look for recurring market behavior, patterns, and conditions that are worth investigating.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Measure",
    subtitle: "Quantitative Analysis",
    description:
      "Translate observations into measurable variables using statistical and technical methods.",
    icon: Sigma,
  },
  {
    number: "04",
    title: "Hypothesize",
    subtitle: "Trading Idea",
    description:
      "Form a hypothesis about how specific market conditions may relate to a potential trading setup.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Confirm",
    subtitle: "Signal Alignment",
    description:
      "Compare multiple directional signals before considering an entry opportunity.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Manage",
    subtitle: "Risk Framework",
    description:
      "Use market volatility to determine appropriate Stop Loss and Take Profit distances.",
    icon: Target,
  },
];

/* =========================================================
   PRICE CHART VISUAL
========================================================= */

function PriceChart() {
  const candles = [
    { height: "h-12", bullish: true },
    { height: "h-16", bullish: true },
    { height: "h-10", bullish: false },
    { height: "h-20", bullish: true },
    { height: "h-14", bullish: true },
    { height: "h-24", bullish: true },
    { height: "h-16", bullish: false },
    { height: "h-28", bullish: true },
    { height: "h-20", bullish: true },
    { height: "h-32", bullish: true },
  ];

  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div
        className="
          absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="absolute left-6 right-6 top-[54%] border-t border-dashed border-blue-500/70" />

      <div className="absolute left-6 top-[48%] rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400">
        VWAP
      </div>

      <div className="absolute inset-x-10 bottom-8 top-8 flex items-center justify-between">
        {candles.map((candle, index) => (
          <div
            key={index}
            className="relative flex h-full w-3 items-center justify-center"
          >
            <div className="absolute h-full w-px bg-zinc-800" />

            <div
              className={`relative w-3 rounded-sm ${
                candle.bullish
                  ? "bg-emerald-400/70"
                  : "bg-red-400/70"
              } ${candle.height}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-6 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
        PRICE / VOLUME CONTEXT
      </div>
    </div>
  );
}

/* =========================================================
   Z-SCORE VISUAL
========================================================= */

function ZScoreVisual() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div
        className="
          absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="absolute left-8 right-8 top-1/2 border-t border-dashed border-zinc-700" />

      <span className="absolute right-8 top-[43%] text-[9px] uppercase tracking-[0.15em] text-zinc-600">
        MEAN
      </span>

      <svg
        viewBox="0 0 500 220"
        className="absolute inset-0 h-full w-full px-8 py-6"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 145 C 70 145, 80 70, 140 90 S 200 180, 260 120 S 330 20, 390 80 S 450 150, 500 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-500"
        />
      </svg>

      <div className="absolute left-8 top-6 text-xs text-zinc-600">
        +2σ
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-xs text-zinc-600">
        0
      </div>

      <div className="absolute bottom-6 left-8 text-xs text-zinc-600">
        -2σ
      </div>

      <div className="absolute bottom-4 right-6 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
        STATISTICAL DEVIATION
      </div>
    </div>
  );
}

/* =========================================================
   STANDARD DEVIATION VISUAL
========================================================= */

function StandardDeviationVisual() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div
        className="
          absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <svg
        viewBox="0 0 500 220"
        className="absolute inset-0 h-full w-full px-6 py-5"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 95 C 70 80, 120 105, 180 90 S 320 65, 500 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-zinc-600"
        />

        <path
          d="M 0 125 C 70 115, 120 135, 180 120 S 320 100, 500 75"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 7"
          className="text-blue-500"
        />

        <path
          d="M 0 155 C 70 150, 120 165, 180 150 S 320 135, 500 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-zinc-600"
        />
      </svg>

      <div className="absolute left-6 top-5 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        STANDARD DEVIATION CHANNEL
      </div>

      <div className="absolute bottom-5 right-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
        <span className="h-px w-5 bg-blue-500" />
        PRICE DISPERSION
      </div>
    </div>
  );
}

/* =========================================================
   ATR VISUAL
========================================================= */

function ATRVisual() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div
        className="
          absolute inset-0 opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Entry line */}
      <div className="absolute left-8 right-8 top-[52%] border-t border-dashed border-blue-500/70" />

      {/* Stop Loss */}
      <div className="absolute left-8 right-8 top-[76%] border-t border-dashed border-red-500/50" />

      {/* Take Profit */}
      <div className="absolute left-8 right-8 top-[25%] border-t border-dashed border-emerald-500/50" />

      {/* Price line */}
      <svg
        viewBox="0 0 500 220"
        className="absolute inset-0 h-full w-full px-8 py-7"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 145 C 70 135, 100 155, 150 120 S 220 100, 270 115 S 350 80, 410 65 S 460 45, 500 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-zinc-300"
        />
      </svg>

      {/* Labels */}
      <div className="absolute right-8 top-[20%] rounded bg-emerald-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-400">
        TAKE PROFIT
      </div>

      <div className="absolute right-8 top-[47%] rounded bg-blue-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-400">
        ENTRY
      </div>

      <div className="absolute right-8 top-[71%] rounded bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-red-400">
        STOP LOSS
      </div>

      <div className="absolute bottom-4 left-6 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
        ATR-BASED RISK DISTANCE
      </div>
    </div>
  );
}

/* =========================================================
   METHOD VISUAL
========================================================= */

function MethodVisual({ id }: { id: string }) {
  if (id === "01") return <PriceChart />;
  if (id === "02") return <ZScoreVisual />;
  if (id === "03") return <StandardDeviationVisual />;

  return <ATRVisual />;
}

/* =========================================================
   SIGNAL MODEL VISUAL
========================================================= */

function SignalModel() {
  const signals = [
    { label: "VWAP", value: "BULLISH", active: true },
    { label: "Z-SCORE", value: "BULLISH", active: true },
    { label: "STD DEV", value: "BULLISH", active: true },
  ];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            Directional Analysis
          </p>

          <p className="mt-2 text-xl font-bold text-zinc-200">
            Signal Confirmation
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5">
          <TrendingUp className="h-4 w-4 text-blue-500" />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-black/50 px-4 py-4"
          >
            <span className="text-sm font-medium text-zinc-400">
              {signal.label}
            </span>

            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {signal.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-blue-500/10 bg-blue-500/[0.03] p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
          Decision
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Multiple directional signals are aligned. The setup can move to the
          next stage: risk management.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   RISK MANAGEMENT VISUAL
========================================================= */

function RiskManagement() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            Volatility-Based Risk
          </p>

          <p className="mt-2 text-xl font-bold text-zinc-200">
            ATR determines distance
          </p>
        </div>

        <Gauge className="h-5 w-5 text-blue-500" />
      </div>

      <div className="mt-8 space-y-4 font-mono text-sm">
        <div className="rounded-xl border border-zinc-800 bg-black/50 p-5">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-red-400">
            Stop Loss
          </p>

          <p className="mt-3 leading-7 text-zinc-400">
            Entry Price − (ATR × SL Multiple)
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-black/50 p-5">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-emerald-400">
            Take Profit
          </p>

          <p className="mt-3 leading-7 text-zinc-400">
            Entry Price + (ATR × TP Multiple)
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-6 text-zinc-600">
        The exact multiples are strategy parameters and should be evaluated
        through testing rather than assumed to be universally optimal.
      </p>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function StrategyResearchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[150px]" />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-8"
        >
          <Link
  href="/#trading-lab"
  className="
    group inline-flex items-center gap-3
    rounded-xl
    border border-zinc-800
    bg-zinc-950/80
    px-3 py-2.5
    text-xs font-semibold
    tracking-[0.18em]
    text-zinc-500
    shadow-sm
    transition-all duration-300

    hover:border-blue-500/40
    hover:bg-blue-500/[0.06]
    hover:text-blue-400
    hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]

    active:scale-[0.97]
    active:border-blue-500/60
    active:bg-blue-500/10
  "
>
  <span
    className="
      flex h-9 w-9
      items-center justify-center
      rounded-lg
      border border-zinc-800
      bg-zinc-900
      text-zinc-500
      transition-all duration-300

      group-hover:-translate-x-0.5
      group-hover:border-blue-500/30
      group-hover:bg-blue-500/10
      group-hover:text-blue-400

      group-active:scale-95
    "
  >
    <ArrowLeft
      className="
        h-4 w-4
        transition-transform duration-300
        group-hover:-translate-x-1
      "
    />
  </span>

  <span className="transition-colors duration-300">
    BACK TO TRADING LAB
  </span>
</Link>
        </motion.header>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative pt-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" />
                Research Active
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-700">
                TRADING LAB / 01
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Strategy
              <span className="block text-zinc-600">Research.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
              Exploring market behavior, transforming observations into
              hypotheses, and evaluating them through quantitative analysis
              before moving into systematic strategy development.
            </p>
          </motion.div>

          {/* HERO STATS */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mt-16 grid
              overflow-hidden
              rounded-2xl
              border border-zinc-800
              bg-zinc-950
              sm:grid-cols-3
            "
          >
            <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                Research Focus
              </p>

              <p className="mt-3 font-semibold text-zinc-200">
                Market Behavior
              </p>
            </div>

            <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                Approach
              </p>

              <p className="mt-3 font-semibold text-zinc-200">
                Quantitative Analysis
              </p>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                Current Stage
              </p>

              <p className="mt-3 font-semibold text-blue-400">
                Research
              </p>
            </div>
          </motion.div>
        </section>

        {/* =====================================================
            SECTION 01
        ====================================================== */}

        <section className="mt-36">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
                01 / The Idea
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                It&apos;s not about finding the perfect indicator.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-zinc-400">
                The research starts with a simpler question:
                <span className="text-zinc-200">
                  {" "}
                  what is the market actually doing?
                </span>
              </p>

              <p className="mt-6 text-lg leading-9 text-zinc-500">
                Price movement contains multiple dimensions: volume,
                statistical deviation, price dispersion, and changing
                volatility. Instead of relying on one indicator, the goal is
                to understand how these different characteristics interact.
              </p>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex items-start gap-4">
                  <Brain className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                  <div>
                    <p className="font-semibold text-zinc-200">
                      Research Question
                    </p>

                    <p className="mt-2 leading-7 text-zinc-500">
                      &quot;Can multiple market characteristics provide
                      sufficiently consistent information to form a trading
                      decision and a corresponding risk framework?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 02
        ====================================================== */}

        <section className="mt-36">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
              02 / Research Architecture
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              From raw data to structured decision.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
              The research process separates directional analysis from
              volatility and risk management.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {[
              {
                icon: Database,
                title: "DATA",
                text: "Price & Volume",
              },
              {
                icon: LineChart,
                title: "OBSERVE",
                text: "Market Behavior",
              },
              {
                icon: Sigma,
                title: "MEASURE",
                text: "Statistics",
              },
              {
                icon: ShieldCheck,
                title: "CONFIRM",
                text: "Direction",
              },
              {
                icon: Target,
                title: "MANAGE",
                text: "Risk",
              },
            ].map((item, index, array) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 md:block"
                >
                  <div className="relative flex-1 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                    <Icon className="h-5 w-5 text-blue-500" />

                    <p className="mt-5 text-xs font-bold tracking-[0.2em] text-zinc-300">
                      {item.title}
                    </p>

                    <p className="mt-2 text-xs text-zinc-600">
                      {item.text}
                    </p>
                  </div>

                  {index < array.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-zinc-800 md:mx-auto md:mt-[-55px] md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SECTION 03
        ====================================================== */}

        <section className="mt-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
              03 / Research Methods
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Four perspectives for reading the market.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-500">
              Each method answers a different question. Directional tools are
              used for signal confirmation, while ATR is used to understand
              volatility and structure risk.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {researchMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.article
                  key={method.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="
                    overflow-hidden
                    rounded-3xl
                    border border-zinc-800
                    bg-zinc-950
                  "
                >
                  <div className="border-b border-zinc-800 p-6 md:p-8">
                    <div className="flex gap-5">
                      <div
                        className="
                          flex h-12 w-12 shrink-0
                          items-center justify-center
                          rounded-xl
                          border border-blue-500/20
                          bg-blue-500/5
                        "
                      >
                        <Icon className="h-5 w-5 text-blue-500" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs text-blue-500/60">
                            {method.id}
                          </span>

                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-700">
                            {method.category}
                          </span>
                        </div>

                        <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                          {method.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-600">
                          {method.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[1fr_0.9fr]">
                    <div className="p-6 md:p-8">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                          What is it?
                        </p>

                        <p className="mt-4 leading-8 text-zinc-400">
                          {method.description}
                        </p>
                      </div>

                      <div className="mt-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                          How does it work?
                        </p>

                        <p className="mt-4 leading-8 text-zinc-500">
                          {method.howItWorks}
                        </p>
                      </div>

                      <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/50 p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                          Why research it?
                        </p>

                        <p className="mt-3 leading-7 text-zinc-400">
                          {method.why}
                        </p>
                      </div>

                      {/* ATR EXTRA */}
                      {method.id === "04" && (
                        <div className="mt-5 rounded-2xl border border-blue-500/10 bg-blue-500/[0.025] p-5">
                          <div className="flex items-start gap-4">
                            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-500" />

                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                                Risk Management Application
                              </p>

                              <p className="mt-3 leading-7 text-zinc-400">
                                ATR can adapt the distance of Stop Loss and
                                Take Profit to current market volatility.
                                Instead of using a fixed price distance, the
                                risk boundary can scale with the market.
                              </p>

                              <div className="mt-5 space-y-3 font-mono text-xs">
                                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                                  <span className="text-red-400">
                                    Stop Loss
                                  </span>

                                  <span className="mx-3 text-zinc-700">
                                    =
                                  </span>

                                  <span className="text-zinc-400">
                                    Entry Price − (ATR × SL Multiple)
                                  </span>
                                </div>

                                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                                  <span className="text-emerald-400">
                                    Take Profit
                                  </span>

                                  <span className="mx-3 text-zinc-700">
                                    =
                                  </span>

                                  <span className="text-zinc-400">
                                    Entry Price + (ATR × TP Multiple)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-zinc-800 p-6 md:p-8 lg:border-l lg:border-t-0">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                        Visual Representation
                      </p>

                      <MethodVisual id={method.id} />

                      <div className="mt-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                          How to read it
                        </p>

                        <div className="mt-4 space-y-3">
                          {method.interpretation.map((item) => {
                            const isBullish = item.type === "bullish";
                            const isBearish = item.type === "bearish";

                            return (
                              <div
                                key={item.title}
                                className="flex gap-3 rounded-xl border border-zinc-800 bg-black/40 p-4"
                              >
                                <div
                                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                                    isBullish
                                      ? "bg-emerald-500/10 text-emerald-400"
                                      : isBearish
                                        ? "bg-red-500/10 text-red-400"
                                        : "bg-zinc-800 text-zinc-500"
                                  }`}
                                >
                                  {isBullish ? (
                                    <ArrowUp className="h-3.5 w-3.5" />
                                  ) : isBearish ? (
                                    <ArrowDown className="h-3.5 w-3.5" />
                                  ) : (
                                    <CircleDot className="h-3 w-3" />
                                  )}
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-zinc-300">
                                    {item.title}
                                  </p>

                                  <p className="mt-1 text-xs leading-6 text-zinc-600">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SECTION 04
        ====================================================== */}

        <section className="mt-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
              04 / Signal vs Risk
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Direction decides. Volatility sizes the risk.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-500">
              One of the key principles in this research framework is keeping
              directional analysis and risk management separate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SignalModel />
            <RiskManagement />
          </div>
        </section>

        {/* =====================================================
            SECTION 05
        ====================================================== */}

        <section className="mt-36">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
              05 / Decision Framework
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Separate the entry from the risk.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-500">
              The framework is divided into two different questions: should
              the trade exist, and if it does, how should the risk be
              structured?
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-zinc-800 p-7 md:border-b-0 md:border-r md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                  Question 01
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Should we enter?
                </h3>

                <p className="mt-4 leading-8 text-zinc-500">
                  Directional analysis uses multiple signals such as VWAP,
                  Z-Score, and Standard Deviation to evaluate whether the
                  market provides enough confirmation.
                </p>

                <div className="mt-7 rounded-xl border border-zinc-800 bg-black/50 p-4">
                  <p className="font-mono text-sm text-zinc-300">
                    Signal Confirmation
                  </p>

                  <p className="mt-2 text-xs text-zinc-600">
                    Multiple directional conditions must align.
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                  Question 02
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  How should we manage it?
                </h3>

                <p className="mt-4 leading-8 text-zinc-500">
                  ATR evaluates current volatility and can be used to
                  determine adaptive Stop Loss and Take Profit distances.
                </p>

                <div className="mt-7 rounded-xl border border-zinc-800 bg-black/50 p-4">
                  <p className="font-mono text-sm text-zinc-300">
                    ATR-Based Risk
                  </p>

                  <p className="mt-2 text-xs text-zinc-600">
                    Risk distance adapts to current market volatility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 06
        ====================================================== */}

        <section className="mt-36">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-500">
              06 / Research Workflow
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Research is not guesswork.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
              Every idea passes through several stages before it can become a
              systematic strategy.
            </p>
          </div>

          <div className="mt-14">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="
                    relative grid gap-5
                    border-b border-zinc-900
                    py-8
                    md:grid-cols-[80px_220px_1fr_50px]
                    md:items-center
                  "
                >
                  <span className="font-mono text-sm text-blue-500/50">
                    {item.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950">
                      <Icon className="h-4 w-4 text-blue-500" />
                    </div>

                    <div>
                      <p className="font-semibold text-zinc-200">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>

                  <ArrowRight className="hidden h-4 w-4 text-zinc-800 md:block" />
                </motion.div>
              );
            })}
          </div>
        </section>

        
        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="mt-28 border-t border-zinc-900 py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                Trading Lab / Strategy Research
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Quantitative research & systematic strategy exploration.
              </p>
            </div>

            <Link
              href="/#trading-lab"
              className="
                inline-flex items-center gap-2
                text-xs font-semibold
                uppercase tracking-[0.2em]
                text-zinc-600
                transition-colors
                hover:text-blue-400
              "
            >
              Trading Lab
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}