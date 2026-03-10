"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import DownloadButtons from "@/components/download/DownloadButtons";
import UpdateTimeline from "@/components/download/UpdateTimeline";
import Footer from "@/components/Footer";
import { Meteors } from "@/components/ui/Meteors";
import LogoField from "@/components/LogoField";
import { ScribbleUnderline } from "@/components/ScribbleUnderline";

export default function DownloadPage() {
    return (
        <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
            <Navigation />

            {/* Atmospheric Background */}
            <Meteors number={30} className="z-0 opacity-50" />
            <LogoField count={15} className="absolute inset-0 z-0 opacity-10" />

            {/* Cinematic Header */}
            <section className="relative pt-48 pb-32 px-6 text-center flex flex-col items-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute inset-x-0 top-0 h-64 bg-orange-500/10 blur-[100px] -z-10 rounded-full"></div>
                    <h1 className="text-[clamp(3rem,12vw,140px)] font-black tracking-tighter leading-[0.85] mb-8">
                        Get DORA<br />for <ScribbleUnderline scribbleColor="text-orange-500">Desktop</ScribbleUnderline>.
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto leading-tight">
                        The world's most advanced autonomous desktop assistant, running 100% locally on your machine.
                    </p>
                </motion.div>

                {/* Hero Bottom Transition (SVG) */}
                <div className="absolute left-0 bottom-0 w-full h-20 md:h-32 z-20 pointer-events-none translate-y-px">
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full h-full drop-shadow-[0_-15px_15px_rgba(0,0,0,0.1)]"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#050505"
                            d="M0,0 Q720,320 1440,0 L1440,320 L0,320 Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Download Hub */}
            <DownloadButtons />

            {/* Version Table / Technical Grid */}
            <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div>
                        <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600 mb-6">Latest Version</h5>
                        <p className="text-3xl font-black">1.2.4-STABLE</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600 mb-6">Engine</h5>
                        <p className="text-3xl font-black italic">DORA Core</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600 mb-6">Privacy Level</h5>
                        <p className="text-3xl font-black text-orange-500">100% On-Device</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray-600 mb-6">Build Hash</h5>
                        <p className="text-3xl font-black text-gray-400 font-mono text-sm break-all">8af2e1c9d09a0173d09a</p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <UpdateTimeline />

            {/* Full Site Footer */}
            <Footer />
        </main>
    );
}
