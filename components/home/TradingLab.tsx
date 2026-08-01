import Container from "@/lib/container";
import { Brain, ChartCandlestick, FlaskConical } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const labs = [
  {
    icon: Brain,
    title: "Strategy Research",
    description:
      "Exploring quantitative trading ideas through statistical analysis, market observations, and systematic strategy development.",
    status: "Planning",
  },
  {
    icon: ChartCandlestick,
    title: "Backtesting",
    description:
      "Testing and evaluating trading strategies using historical market data to measure performance and risk.",
    status: "Coming Soon",
  },
  {
    icon: FlaskConical,
    title: "System Development",
    description:
      "Building a complete quantitative trading platform with automation, analytics, and portfolio management.",
    status: "In Progress",
  },
];

export default function TradingLab() {
  return (
    <section id="trading-lab" className="py-32">
      <Container>
        <Reveal>
        <p className="mb-6 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
          Trading Lab
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          Research, experimentation, and continuous improvement.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          This section documents my journey in quantitative trading, from
          researching trading strategies to building automated systems and
          evaluating them through backtesting.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {labs.map((lab) => {
            const Icon = lab.icon;

            return (
              <div
                key={lab.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon className="mb-6 h-10 w-10 text-blue-500" />

                <h3 className="text-2xl font-semibold">
                  {lab.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {lab.description}
                </p>

                <span className="mt-8 inline-block rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
                  {lab.status}
                </span>
              </div>
            );
          })}
        </div>
        </Reveal>
      </Container>
    </section>
  );
}