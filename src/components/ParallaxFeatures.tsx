"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScribbleUnderline } from "./ScribbleUnderline";
import { FileText, Mail, BrainCircuit, ArrowUpRight, LucideIcon } from "lucide-react";

type Feature = {
    id: string;
    badge: string;
    headline: string;
    description: string;
    icon: LucideIcon;
};

const doraFeatures: Feature[] = [
    {
        id: "analysis",
        badge: "Deep Context",
        headline: "Instant Financial Formatting.",
        description: "Drop a raw SEC filing or PDF report on DORA. Within seconds, it formats the data, analyzes trends, and provides a concise executive summary ready for your next meeting.",
        icon: FileText
    },
    {
        id: "drafting",
        badge: "Autonomous Drafts",
        headline: "Zero-Click Email Replies.",
        description: "DORA reads incoming threads, understands the context of your project, and drafts professional replies in your tone of voice. Just review and send.",
        icon: Mail
    },
    {
        id: "code",
        badge: "Local Intelligence",
        headline: "Code Without the Cloud.",
        description: "Generate Python scripts, React components, or complex SQL queries completely offline. DORA utilizes your machine's GPU to ensure your proprietary logic never leaves your desk.",
        icon: BrainCircuit
    }
];

// Alternating Vertical Dash Line Pattern (Light Mode)
function DashPattern() {
    return (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                    <pattern id="dash-pattern-vertical" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        {/* Vertical Accent Dash */}
                        <line x1="10" y1="0" x2="10" y2="10" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                        {/* Vertical Black Dash */}
                        <line x1="10" y1="20" x2="10" y2="30" stroke="#000000" strokeWidth="4" strokeLinecap="round" />

                        {/* Second Column Staggered */}
                        <line x1="30" y1="0" x2="30" y2="10" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                        <line x1="30" y1="20" x2="30" y2="30" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dash-pattern-vertical)" />
            </svg>
        </div>
    );
}

function Card({ feature, index }: { feature: Feature; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isTextRight = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity }}
            className={`relative w-full flex flex-col md:flex-row items-center gap-8 ${isTextRight ? '' : 'md:flex-row-reverse'}`}
        >
            {/* ICON / IMAGE SIDE */}
            <div className="flex flex-1 justify-center items-center p-4 md:p-8">
                <motion.div
                    className="relative w-full max-w-md aspect-square rounded-[3rem] bg-black border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <feature.icon className="w-32 h-32 text-white group-hover:text-orange-500 transition-colors duration-500 relative z-10" strokeWidth={1} />
                </motion.div>
            </div>

            {/* CONTENT SIDE (Light Glassmorphism) */}
            <div className={`relative min-h-[320px] rounded-[3rem] overflow-hidden bg-white/70 backdrop-blur-xl border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-center ${'w-full md:w-3/5'}`}>

                <div className={`relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-center ${isTextRight ? 'items-end text-right' : 'items-start text-left'}`}>

                    {/* Badge */}
                    <span className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-black text-black mb-6 tracking-widest uppercase">
                        {feature.badge}
                    </span>

                    <h3 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tighter max-w-xl">
                        <ScribbleUnderline variant="straight" scribbleColor="text-orange-500" className="text-black inline-block">
                            {feature.headline.split('.')[0]}
                        </ScribbleUnderline>.
                    </h3>

                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                        {feature.description}
                    </p>

                    <button className={`mt-8 flex items-center gap-2 text-black font-bold hover:text-orange-500 transition-colors text-sm uppercase tracking-widest ${isTextRight ? 'flex-row-reverse' : 'flex-row'}`}>
                        <span>See Scenario</span>
                        <ArrowUpRight strokeWidth={3} className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function ParallaxFeatures() {
    return (
        <div className="w-full bg-[#f8f9fa] pt-40 pb-40 relative z-10 -mt-1">
            {/* Alternating Dash Grid */}
            <DashPattern />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* SECTION HEADER */}
                <motion.div
                    className="mb-32 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[clamp(3rem,8vw,80px)] font-black text-black tracking-tighter mb-6 leading-none">
                        The <ScribbleUnderline scribbleColor="text-orange-500" className="text-black italic">Autonomous</ScribbleUnderline> Advantage.
                    </h2>
                    <p className="text-gray-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
                        Three specific ways DORA transforms your workflow, entirely on-device.
                    </p>
                </motion.div>

                {/* SCROLLING CARDS */}
                <div className="flex flex-col gap-24 relative z-10 w-full">
                    {doraFeatures.map((feature, index) => (
                        <Card key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>

            {/* BOTTOM CURVED TRANSITION */}
            <div className="absolute left-0 bottom-0 w-full h-20 md:h-32 z-20 pointer-events-none translate-y-px">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-full drop-shadow-[0_-15px_15px_rgba(0,0,0,0.1)]"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#000000"
                        d="M0,0 Q720,320 1440,0 L1440,320 L0,320 Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
