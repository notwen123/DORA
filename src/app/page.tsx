"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MessageSquare, Code, Shield, Infinity, Zap, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import VantaHero from "@/components/VantaHero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { CinematicFrame } from "@/components/CinematicFrame";
import { StickyBrain } from "@/components/StickyBrain";
import { LovableHowItWorks } from "@/components/LovableHowItWorks";
import TrailerLoader from "@/components/TrailerLoader";
import { ScribbleUnderline } from "@/components/ScribbleUnderline";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">

      {/* THE MERGE & REVEAL LOADER */}
      <AnimatePresence mode="wait">
        {!hasLoaded && (
          <TrailerLoader onComplete={() => setHasLoaded(true)} />
        )}
      </AnimatePresence>

      <Navigation />

      {/* Hero Section */}
      <VantaHero />

      {/* CadPay-Inspired Atmospheric About Section */}
      <About />

      {/* Privacy Section */}
      <section id="privacy" className="py-48 px-6 bg-black flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          <h2 className="text-[clamp(2.5rem,8vw,90px)] font-black tracking-tighter mb-16 leading-[0.9]">
            YOUR CODE <br /> NEVER FEEDS <ScribbleUnderline className="text-white">ADS</ScribbleUnderline>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
            Your code powers the agent. Your code does not power the advertising system. Free managed AI, zero API keys to configure, and a hard boundary between what you build and what gets targeted.
          </p>

          <div className="flex flex-wrap justify-center gap-16 pt-16 border-t border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">0</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">API Keys Required</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-orange-500 mb-2">Free</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Managed AI</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-apple-blue mb-2">Isolated</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Ad Boundary</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The 100vh Cinematic Hero Section */}
      <StickyBrain />

      {/* The Lovable Terminal Workflow */}
      <LovableHowItWorks />

      <Footer />
    </main >
  );
}
