"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/lib/container";

const projects = [
  {
    title: "Project Name 1",
    description: "Short description of the project and what it solves.",
    image: "/images/project1.png",
    link: "#",
  },
  {
    title: "Project Name 2",
    description: "Short description of the project and what it solves.",
    image: "/images/project2.png",
    link: "#",
  },
  {
    title: "Project Name 3",
    description: "Short description of the project and what it solves.",
    image: "/images/project3.png",
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // jeda tiap card muncul, biar ga barengan
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Portfolio() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px]" />

      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-3 text-zinc-400">
            A selection of things I've built and researched.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-blue-500/50"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}