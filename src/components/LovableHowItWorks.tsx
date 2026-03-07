"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mic, Sparkles, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";

export const LovableHowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [step, setStep] = useState(0);
    const [typed, setTyped] = useState("");

    const transcription = "Listen DORA, send a WhatsApp to John saying I'll be 10 minutes late.";

    useEffect(() => {
        if (!isInView) return;

        let isActive = true;
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runSequence = async () => {
            while (isActive) {
                // Step 0: Idle
                setStep(0);
                setTyped("");
                await delay(1500);
                if (!isActive) break;

                // Step 1: Listening
                setStep(1);
                await delay(1000);
                if (!isActive) break;

                // Step 2: Transcribing
                setStep(2);
                await new Promise<void>((resolve) => {
                    let i = 0;
                    const interval = setInterval(() => {
                        if (!isActive) {
                            clearInterval(interval);
                            resolve();
                            return;
                        }
                        if (i < transcription.length) {
                            setTyped(transcription.slice(0, i + 1));
                            i++;
                        } else {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 30);
                });
                if (!isActive) break;

                await delay(800);
                if (!isActive) break;

                // Step 3: Processing
                setStep(3);
                await delay(2500);
                if (!isActive) break;

                // Step 4: Success
                setStep(4);
                await delay(4000); // Hold on success state before restarting
            }
        };

        runSequence();

        return () => {
            isActive = false;
        };
    }, [isInView]);

    return (
        <section ref={ref} className="py-32 px-6 bg-black relative flex flex-col items-center overflow-hidden border-t border-white/5">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-apple-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center z-10 mb-20 relative"
            >
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Mic className="w-5 h-5 text-accent-green animate-pulse" />
                    <span className="text-accent-green font-bold uppercase tracking-[0.2em] text-sm">Invisible Autonomy</span>
                </div>
                <h2 className="text-[clamp(2.5rem,6vw,80px)] font-black tracking-tighter text-white mb-6 leading-[0.9]">
                    Just speak<br />Listen DORA
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                    No complex UI. No terminals. Just say "Listen DORA" and let the world's most advanced AI assistant handle the rest.
                </p>
            </motion.div>

            {/* Siri-style Desktop Widget Container */}
            <div className="w-full max-w-3xl h-[400px] flex items-center justify-center relative z-10 perspective-[1000px]">

                {/* The Floating Dynamic Island / Widget */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={
                        isInView ? {
                            scale: step >= 1 ? 1 : 0.8,
                            opacity: 1,
                            y: 0,
                            width: step === 0 ? "180px" : step >= 4 ? "280px" : "600px",
                            height: step === 0 ? "60px" : step >= 4 ? "72px" : "120px",
                            borderRadius: step === 0 ? "60px" : step >= 4 ? "36px" : "30px",
                        } : {}
                    }
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="backdrop-blur-3xl bg-white/5 border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col items-center justify-center relative"
                >

                    {/* Inner Content Switcher */}
                    <AnimatePresence mode="wait">

                        {/* State 0: Idle */}
                        {step === 0 && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-6 h-6 rounded-full bg-apple-blue shadow-[0_0_20px_rgba(0,102,204,0.8)]"></div>
                                <span className="text-white/70 font-medium tracking-wide">DORA Idle</span>
                            </motion.div>
                        )}

                        {/* State 1 & 2: Listening & Transcribing */}
                        {(step === 1 || step === 2) && (
                            <motion.div
                                key="listening"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full px-8 flex flex-col items-center gap-4"
                            >
                                {/* Active Pulsing Orb */}
                                <div className="relative w-12 h-12 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-apple-blue/30 rounded-full animate-ping"></div>
                                    <div className="absolute inset-0 bg-apple-blue/50 rounded-full blur-[10px]"></div>
                                    <div className="relative w-6 h-6 bg-apple-blue rounded-full shadow-[0_0_30px_rgba(0,102,204,1)]"></div>
                                </div>
                                {/* Transcription Text */}
                                <p className="text-white text-xl md:text-2xl font-medium tracking-tight text-center min-h-[32px]">
                                    "{typed}"<span className="animate-pulse text-apple-blue">|</span>
                                </p>
                            </motion.div>
                        )}

                        {/* State 3: Reasoning / Processing */}
                        {step === 3 && (
                            <motion.div
                                key="processing"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
                                <p className="text-purple-400 font-medium tracking-widest uppercase text-sm animate-pulse">
                                    Autonomously Executing...
                                </p>
                            </motion.div>
                        )}

                        {/* State 4: Success Status Pill */}
                        {step === 4 && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="flex items-center gap-4 px-6"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-accent-green" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-white font-bold text-lg">Message Sent</span>
                                    <span className="text-white/50 text-sm">WhatsApp • John</span>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </motion.div>

                {/* Background decorative apps floating up (simulating a desktop view) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-[-100px] flex items-end justify-center gap-4 opacity-30 blur-[2px] pointer-events-none"
                >
                    <div className="w-24 h-16 bg-white/10 rounded-xl border border-white/5 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white/40" />
                    </div>
                    <div className="w-32 h-24 bg-white/10 rounded-xl border border-white/5"></div>
                    <div className="w-24 h-16 bg-white/10 rounded-xl border border-white/5"></div>
                </motion.div>

            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="mt-16 z-10"
            >
                <a href="/download" className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get DORA for Desktop</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:text-black transition-all" />
                    <div className="absolute inset-0 bg-accent-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </a>
            </motion.div>

        </section>
    );
};
