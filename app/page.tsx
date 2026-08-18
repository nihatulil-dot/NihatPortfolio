"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Background from "@/components/layout/Background";

import ScrollProgress from "@/components/layout/ScrollProgress";

import Hero from "@/components/home/Hero";
import SectionDivider from "@/components/home/SectionDivider";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import TradingLab from "@/components/home/TradingLab";
import Certificates from "@/components/home/Certificates";

import Footer from "@/components/home/Footer";




export default function Home() {

  useEffect(() => {
  const shouldScroll =
    sessionStorage.getItem("scrollToTradingLab");

  if (shouldScroll === "true") {
    sessionStorage.removeItem("scrollToTradingLab");

    const timer = setTimeout(() => {
      document
        .getElementById("trading-lab")
        ?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
    }, 100);

    return () => clearTimeout(timer);
  }
}, []);
 
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        {/* HOME */}
        <Hero />

        {/* MOVING TEXT DIVIDER */}
        <SectionDivider />

        {/* ABOUT ME */}
        <About />

        {/* TECH STACK */}
        <TechStack />

        {/* PROJECTS */}
        <Projects />

        {/* TRADING LAB */}
        <TradingLab />

        {/* CERTIFICATES */}
        <Certificates />

        {/* FOOTER */}
        <Footer />
      </main>

      <Background />
    </>
  );
}