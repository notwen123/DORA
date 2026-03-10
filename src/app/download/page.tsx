"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import DownloadButtons from "@/components/download/DownloadButtons";
import UpdateTimeline from "@/components/download/UpdateTimeline";

export default function DownloadPage() {
    return (
        <main className="relative min-h-screen bg-black text-white">
            <Navigation />

            {/* Cinematic Header */}
            <section className="pt-48 pb-20 px-6 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute inset-x-0 top-0 h-64 bg-orange-500/20 blur-[100px] -z-10 rounded-full"></div>
                    <h1 className="text-[clamp(3rem,12vw,140px)] font-black tracking-tighter leading-[0.85] mb-8">
                        Get DORA<br />for Desktop.
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto leading-tight">
                        The world's most advanced autonomous desktop assistant, running 100% locally on your machine.
                    </p>
                </motion.div>
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

            {/* Simple Footer */}
            <footer className="py-20 px-6 border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                            <span className="text-black font-black text-sm">D</span>
                        </div>
                        <span className="font-bold tracking-tighter uppercase text-xs">Dora Intelligence</span>
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">OSS License</a>
                    </div>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Global Build v1.2.4</p>
                </div>
            </footer>
        </main>
    );
}
