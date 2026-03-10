"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MessageSquare, Code, Shield, Infinity, Zap, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import VantaHero from "@/components/VantaHero";
import ParallaxFeatures from "@/components/ParallaxFeatures";
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

      {/* CadPay-Inspired Parallax Glass Scenarios */}
      <ParallaxFeatures />

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
            DORA <br /> MOST <ScribbleUnderline className="text-white">PRIVATE</ScribbleUnderline> DIGITAL ASSISTANT
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
            Your data learns who you are. Not who we are. DORA runs 100% locally on your machine, using your GPU to think. Your audio, your text, and your files never leave your device. Period.
          </p>

          <div className="flex flex-wrap justify-center gap-16 pt-16 border-t border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">0kb</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Cloud Storage</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-orange-500 mb-2">Local</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Execution</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-apple-blue mb-2">Pure</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Privacy</span>
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
