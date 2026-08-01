import { motion } from "framer-motion";

import Container from "@/lib/container";
import Reveal from "@/components/animations/Reveal";

import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 transition-all duration-500 hover:border-blue-500 md:p-16">

            <p className="mb-6 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Let's Build Something Great Together.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
              Whether it's data science, quantitative trading, web development,
              or simply exchanging ideas, I'm always open to new opportunities
              and meaningful collaborations.
            </p>

            <div className="mt-12 flex flex-col gap-5">

              <a
                href="mailto:nihatulil@gmail.com"
                className="group flex items-center gap-3 text-lg transition duration-300 hover:text-blue-400"
              >
                <FiMail
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                nihatulil@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-nihat-ulil-amri-83955b390/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg transition duration-300 hover:text-blue-400"
              >
                <FaLinkedin
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                LinkedIn
              </a>

              <a
                href="https://github.com/nihatulil-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg transition duration-300 hover:text-blue-400"
              >
                <FaGithub
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                GitHub
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="/CV.pdf"
                className="flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                <FiDownload size={18} />
                Download CV
              </a>

              <motion.a   
  whileHover={{
    y: -4,
    scale: 1.03,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 20,
  }}
  href="mailto:nihatulil@gmail.com"
  className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600"
>
  Send Email
               </motion.a>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}