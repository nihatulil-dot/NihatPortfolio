"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Background from "@/components/layout/Background";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import TradingLab from "@/components/home/TradingLab";
import Certificates from "@/components/home/Certificates";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
   return <LoadingScreen isLoading={loading} />;
  }

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <TradingLab />
      <Certificates />
      <Contact />
      <Footer />

      <Background />
    </>
  );
}