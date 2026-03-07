"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, MessageSquare, Code, Shield, Infinity, Zap, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import ThreeHero from "@/components/ThreeHero";
import ScenarioCard from "@/components/ScenarioCard";
import Footer from "@/components/Footer";
import { CinematicFrame } from "@/components/CinematicFrame";
import { StickyBrain } from "@/components/StickyBrain";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <CinematicFrame className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <ThreeHero />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-apple-blue font-bold uppercase tracking-[0.4em] mb-6 text-sm"
          >
            The Cinematic Standard
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-cinematic-hero text-white mb-8"
          >
            DORA<br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-medium leading-tight mb-12"
          >
            A private, autonomous intelligence designed to live on your machine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center gap-6"
          >
            <a href="/download" className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:bg-accent-green hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </CinematicFrame>

      {/* Scenarios Section */}
      <CinematicFrame className="py-32 px-6 bg-white text-black rounded-[4rem] -mt-10 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-32 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-400 mb-4">Capabilities</h2>
            <h3 className="text-[clamp(3rem,10vw,120px)] font-black tracking-tighter leading-none">
              Intelligence<br />
              <span className="text-gray-300">on the move.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScenarioCard
              tag="At your desk"
              title='"DORA, summarize my Slack messages."'
              subtitle="Extract critical action items from noise. DORA handles the triage, you handle the work."
              icon={<MessageSquare className="text-blue-500 w-8 h-8" />}
              className="bg-apple-silver"
              image="/3d_images/xl.png"
            />
            <ScenarioCard
              tag="In your code"
              title='"DORA, find where X is defined."'
              subtitle="Universal semantic search across all your local files and git repositories. Fast. Private. Precise."
              icon={<Code className="text-gray-800 w-8 h-8" />}
              dark
            />
            <ScenarioCard
              tag="Across your tools"
              title='"DORA, build and deploy the gateway."'
              subtitle="From terminal execution to cloud staging. DORA bridges the gap between intent and action."
              icon={<Terminal className="text-accent-green w-8 h-8" />}
              className="col-span-1 md:col-span-2 bg-black text-white"
              dark
            />
          </div>
        </div>
      </CinematicFrame>

      {/* Privacy Section */}
      <section id="privacy" className="py-48 px-6 bg-black flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <Shield className="text-apple-blue w-16 h-16 mx-auto mb-10" />
          <h2 className="text-[clamp(2.5rem,8vw,90px)] font-black tracking-tighter mb-10 leading-[0.9]">
            The most private<br />digital assistant.
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
              <span className="text-5xl font-black text-accent-green mb-2">Local</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Execution</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-apple-blue mb-2">Pure</span>
              <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Privacy</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Section replaced by Cinematic StickyBrain */}
      <StickyBrain />


      <Footer />
    </main>
  );
}
