import Container from "@/lib/container";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

import {
  SiGithub,
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiGit,
  SiTradingview,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbFileSpreadsheet } from "react-icons/tb";

const techStacks = [
  {
    name: "Python",
    icon: SiPython,
    color: "text-[#3776AB]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "SQL",
    icon: TbFileSpreadsheet,
    color: "text-[#4479A1]",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "text-[#150458]",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "text-[#4DABCF]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-[#4169E1]",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1]",
  },
  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    color: "text-[#F37626]",
  },
  {
    name: "Excel",
    icon: TbFileSpreadsheet,
    color: "text-[#217346]",
  },
  {
    name: "TradingView",
    icon: SiTradingview,
    color: "text-[#2962FF]",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-[#F05032]",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-[#007ACC]",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32">
      <Container>

        <Reveal>
          <p className="mb-6 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
            Tech Stack
          </p>

          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
           Tools and technologies I work with.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {techStacks.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <FadeUp
                key={tech.name}
                delay={index * 0.05}
              >
                <div className="group flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-900">

                  <Icon
                    size={38}
                    className={`${tech.color} transition duration-300 group-hover:scale-110`}
                  />

                  <span className="mt-4 text-sm font-medium text-zinc-300 transition group-hover:text-white">
                    {tech.name}
                  </span>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </Container>
    </section>
  );
}