"use client";

import { motion } from "framer-motion";
import Container from "@/lib/container";
import { Mail } from "lucide-react";

export default function Footer() {
  const techStack = [
    {
      name: "Python",
      src: "https://cdn.simpleicons.org/python",
    },
    {
      name: "Pandas",
      src: "https://cdn.simpleicons.org/pandas",
    },
    {
      name: "NumPy",
      src: "https://cdn.simpleicons.org/numpy",
    },
    {
      name: "JavaScript",
      src: "https://cdn.simpleicons.org/javascript",
    },
    {
      name: "TypeScript",
      src: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "React",
      src: "https://cdn.simpleicons.org/react",
    },
    {
      name: "Next.js",
      src: "https://cdn.simpleicons.org/nextdotjs/white",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.simpleicons.org/tailwindcss",
    },
    {
      name: "Git",
      src: "https://cdn.simpleicons.org/git",
    },
    {
      name: "GitHub",
      src: "https://cdn.simpleicons.org/github/white",
    },
    {
      name: "SQL",
      src: "https://cdn.simpleicons.org/mysql",
    },
    {
      name: "Jupyter",
      src: "https://cdn.simpleicons.org/jupyter",
    },
  ];

  const marqueeItems = [...techStack, ...techStack];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#05070B]"
    >
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -z-10
          h-[400px]
          w-[400px]
          -translate-x-1/2
          translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      {/* =====================================================
          TECH STACK MARQUEE
          PALING ATAS
      ===================================================== */}

      <div className="relative w-full overflow-hidden py-4">
        {/* GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-20
            w-[60%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[70px]
          "
        />

        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-r
            from-[#05070B]
            to-transparent
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-l
            from-[#05070B]
            to-transparent
          "
        />

        {/* MOVING LOGOS */}

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="
                mx-4
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900/80
                p-2.5
                opacity-70
                transition-all
                duration-300
                hover:scale-110
                hover:border-blue-500/60
                hover:opacity-100
              "
              title={tech.name}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-7 w-7 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Container>
        <div className="flex flex-col items-center gap-8 py-12 text-center">
          {/* TITLE */}

          <div>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Let's{" "}
              <span className="text-blue-500">
                Collaborate
              </span>
            </h2>

            <p className="mt-3 max-w-md text-zinc-400">
              Open for data science projects, quant research, or just a chat about markets.
            </p>
          </div>

          {/* CONTACT BUTTONS */}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* WHATSAPP */}

            <a
              href="https://wa.me/6281337488085"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900/60
                px-5
                py-3
                text-sm
                text-zinc-300
                transition
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              +62 813 3748 8085
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/nhat.uiel"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900/60
                px-5
                py-3
                text-sm
                text-zinc-300
                transition
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />

                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                />

                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                />
              </svg>

              @nhat.uiel
            </a>

            {/* EMAIL */}

            <a
              href="mailto:afzainizam.nf11@gmail.com"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900/60
                px-5
                py-3
                text-sm
                text-zinc-300
                transition
                hover:border-blue-500
                hover:text-blue-400
              "
            >
              <Mail size={16} />

              nihatulil@gmail.com
            </a>
          </div>
        </div>
      </Container>

      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="border-t border-zinc-800/80">
        <Container>
          <div className="flex flex-col items-center gap-5 py-7 text-center">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-zinc-600">
              <span className="h-px w-8 bg-zinc-800" />

              Built with data & curiosity

              <span className="h-px w-8 bg-zinc-800" />
            </div>

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Muhammad Nihat Ulil Amri.
              All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}