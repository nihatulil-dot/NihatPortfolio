import Container from "@/lib/container";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";

const projects = [
  {
    title: "Quant Trading Platform",
    description:
      "Building an end-to-end quantitative trading platform for strategy development, backtesting, market analysis, portfolio management, and performance evaluation.",
    status: "In Development",
  },

  {
    title: "Personal Projects",
    description:
      "A collection of personal projects focused on data science, automation, programming, and continuous learning. New projects will be added over time.",
    status: "Coming Soon",
  },

  {
    title: "Web Design",
    description:
      "Modern web interfaces and responsive UI designs created while learning frontend development and building personal applications.",
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>

        <Reveal>
          <p className="mb-6 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8">
          {projects.map((project, index) => (
            <FadeUp
              key={project.title}
              delay={index * 0.15}
            >
              <div
                className="
                  group
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/60
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
                "
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-2xl font-semibold transition group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <span
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-blue-500
                      px-4
                      py-2
                      text-sm
                      text-blue-400
                    "
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
                  {project.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </Container>
    </section>
  );
}