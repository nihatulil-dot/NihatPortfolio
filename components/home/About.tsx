"use client"

import { SplineScene } from "@/components/ui/splite"

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center">

        <div className="flex w-full flex-col lg:flex-row">

          {/* =========================
              LEFT — ABOUT ME
          ========================== */}
          <div className="relative z-10 flex w-full flex-col justify-center lg:w-1/2">

            <p className="mb-8 text-base font-medium uppercase tracking-[0.3em] text-neutral-400">
              About Me
            </p>

            <div className="max-w-2xl space-y-6">

              <p className="text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
                I'm a Data Science student interested in turning
                data into meaningful insights and building
                solutions that connect technology with
                real-world problems. My journey in Data Science
                has introduced me to programming, data analysis,
                visualization, and analytical thinking, allowing
                me to explore how data can be transformed into
                something useful and understandable.
              </p>

              <p className="text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
                I'm particularly interested in Business
                Intelligence and Data Visualization, where data
                can be transformed into clear information that
                helps people understand situations and make
                better decisions. Alongside that, I'm exploring
                quantitative approaches to financial markets,
                combining programming, statistics, and market
                data to understand how analytical strategies can
                be developed and evaluated.
              </p>

              <p className="text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
                Currently, I'm focused on continuously improving
                my technical and analytical skills through
                coursework, personal projects, and experimentation.
                I enjoy building things, learning from mistakes,
                and exploring new ideas. My goal is to create
                projects that don't just demonstrate technical
                skills, but also show how I approach problems,
                analyze data, and turn ideas into meaningful
                solutions.
              </p>

            </div>

          </div>


          {/* =========================
              RIGHT — 3D ROBOT
          ========================== */}
          <div className="relative h-[500px] w-full lg:h-[700px] lg:w-1/2">

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />

          </div>

        </div>

      </div>
    </section>
  )
}