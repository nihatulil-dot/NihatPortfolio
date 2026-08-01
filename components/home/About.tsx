import Container from "@/lib/container";
import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";


export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Hi I'm{" "}
                <span className="font-medium text-white">
                  Muhammad Nihat Ulil Amri
                </span>
                , a Data Science student at Telkom University with a
                strong interest in data analytics and data-driven
                decision-making. My career goal is to become a Business
                Intelligence Analyst who transforms data into valuable business
                insights.
              </p>

              <p>
                Currently, I am learning Quantitative Trading (Quant Trading), a
                data-driven approach to trading that combines statistics,
                mathematics, and programming to develop and evaluate trading
                strategies objectively. Through this journey, I continue to
                strengthen my skills in data analysis, programming,
                problem-solving, and analytical thinking—abilities that are
                equally valuable in the field of Business Intelligence.
              </p>

              <p>
                I believe that the best way to learn is by building real
                projects. That's why I continuously explore new technologies,
                create practical solutions, and expand my technical expertise to
                grow as a data professional.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}