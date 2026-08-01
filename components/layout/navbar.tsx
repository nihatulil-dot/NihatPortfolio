"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Trading Lab", href: "#trading-lab" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Blur navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition hover:text-blue-500"
        >
          NhatQt<span className="text-blue-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}