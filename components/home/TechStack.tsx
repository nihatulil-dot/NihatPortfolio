import Container from "@/lib/container";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";


const techStacks = [
  {
    title: "Programming",
    skills: ["Python", "TypeScript", "SQL"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Quantitative Trading",
    skills: [
      "Finance Basics",
      "Backtesting",
      "Technical Analysis",
      "Trading View",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
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
            Technologies I use to build projects.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {techStacks.map((stack, index) => (
            <FadeUp
              key={stack.title}
              delay={index * 0.15}
            >
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                <h3 className="text-2xl font-semibold">
                  {stack.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </Container>
    </section>
  );
}