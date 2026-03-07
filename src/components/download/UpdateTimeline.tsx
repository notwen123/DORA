"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Circle, CheckCircle2 } from "lucide-react";

const events = [
    {
        version: "v1.2.4 (Current)",
        title: "The Voice-to-Action Update",
        date: "Mar 2024",
        description: "Launched the seamless desktop widget with real-time transcription and autonomous app execution.",
        status: "released",
    },
    {
        version: "v1.3.0",
        title: "Visual Context Engine",
        date: "Late Apr 2024",
        description: "Adding support for screen-aware reasoning. DORA will be able to see and interact with UI elements.",
        status: "active",
    },
    {
        version: "v2.0.0",
        title: "The Multi-Node Brain",
        date: "Q3 2024",
        description: "Distributed local reasoning across multiple machines for extreme performance.",
        status: "planned",
    },
];

const UpdateTimeline = () => {
    return (
        <div className="max-w-4xl mx-auto py-32 px-6">
            <div className="mb-20">
                <h2 className="text-[clamp(2.5rem,8vw,80px)] font-black tracking-tighter leading-none mb-6">
                    The Roadmap.<br /><span className="text-gray-500">Always Evolving.</span>
                </h2>
            </div>

            <div className="relative space-y-12">
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10"></div>

                {events.map((event, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative pl-20"
                    >
                        <div className="absolute left-[-4px] top-2 flex items-center justify-center bg-black">
                            {event.status === "released" ? (
                                <CheckCircle2 className="w-8 h-8 text-accent-green" />
                            ) : (
                                <Circle className={`w-8 h-8 ${event.status === "active" ? "text-apple-blue animate-pulse" : "text-gray-700"}`} strokeWidth={3} />
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                                {event.date}
                            </span>
                            <h4 className="text-2xl font-black tracking-tight">{event.title}</h4>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${event.status === "released" ? "border-accent-green/30 text-accent-green" :
                                event.status === "active" ? "border-apple-blue/30 text-apple-blue" : "border-gray-800 text-gray-600"
                                }`}>
                                {event.version}
                            </span>
                        </div>

                        <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl">
                            {event.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                whileHover={{ x: 10 }}
                className="mt-20 flex items-center gap-2 text-apple-blue font-bold text-lg"
            >
                View Full Changelog <ChevronRight className="w-5 h-5" />
            </motion.button>
        </div>
    );
};

export default UpdateTimeline;
