'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScribbleUnderline } from './ScribbleUnderline';

type Feature = {
    id: string;
    headline: string;
    description: string;
    fullDescription: string;
    image: string;
};

const spaceOneFeatures: Feature[] = [
    {
        id: 'architecture',
        headline: 'Managed AI, Zero Setup.',
        description: 'SpaceOne routes every request to a managed provider — no API keys, no local model wrangling.',
        fullDescription: 'Install SpaceOne, sign in, and start building. Provider abstraction lives behind the product boundary, and a managed failure is always surfaced as a managed failure — it never silently falls back to a local model.',
        image: '/features/blockdag-diagram.png'
    },
    {
        id: 'performance',
        headline: 'Fast When Simple, Deep When Complex.',
        description: 'Quick edits get an instant answer. Complex refactors get planning, execution, and verification.',
        fullDescription: '"Rename this variable" should never trigger a seven-stage agent workflow. "Refactor authentication and add tests" legitimately needs one. SpaceOne adapts the ceremony to the task instead of forcing every request through the same pipeline.',
        image: '/features/throughput.png'
    },
    {
        id: 'security',
        headline: 'Your Code Never Feeds Ads.',
        description: 'Your code powers the agent. Your code does not power the advertising system.',
        fullDescription: 'Source, diffs, terminal output, and AI reasoning are protected surfaces, off-limits to ad targeting. Advertising funds free managed AI without ever touching what you build.',
        image: '/features/utxo.png'
    },
    {
        id: 'ecosystem',
        headline: 'Terminal, Browser, and MCP — Built In.',
        description: 'SpaceOne extends the terminal, Chromium browser, and MCP tooling you already rely on.',
        fullDescription: 'The agent respects existing security boundaries, confirmation flows, and shell behavior. Browser automation and MCP tools become part of the agent\'s evidence system, not a bolted-on side panel.',
        image: '/features/tokens.png'
    },
    {
        id: 'philosophy',
        headline: 'Verified, Not Just Generated.',
        description: 'A finished task is either COMPLETED or COMPLETED — NOT VERIFIED. SpaceOne always tells you which.',
        fullDescription: 'Type checks, linting, tests, and builds turn "done" into evidence. SpaceOne never claims verification it did not actually perform — the goal is developer trust, not a longer changelog.',
        image: '/features/pow.png'
    }
];

export default function CoreFeatures() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="w-full bg-[#fcfbf7] pt-40 pb-32 relative z-10 -mt-1">
            <DashPattern />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-4">
                        Why <ScribbleUnderline className="text-zinc-900 italic" scribbleColor="text-orange-500">SpaceOne?</ScribbleUnderline>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-zinc-700 text-base md:text-lg max-w-2xl mx-auto">
                        Build. Verify. Remember. Trust.
                    </motion.p>
                </motion.div>

                <div className="relative w-full mb-12">
                    <motion.div
                        className="flex flex-col gap-12 relative z-10 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardContainerVariants}
                    >
                        {spaceOneFeatures.map((feature, index) => (
                            <Card
                                key={feature.id}
                                feature={feature}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

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

function DashPattern() {
    return (
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                    <pattern id="dash-pattern-vertical" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <line x1="10" y1="0" x2="10" y2="10" stroke="#ff6600" strokeWidth="4" strokeLinecap="round" />
                        <line x1="10" y1="20" x2="10" y2="30" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                        <line x1="30" y1="0" x2="30" y2="10" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                        <line x1="30" y1="20" x2="30" y2="30" stroke="#ff6600" strokeWidth="4" strokeLinecap="round" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dash-pattern-vertical)" />
            </svg>
        </div>
    );
}

function Card({
    feature,
    index,
}: {
    feature: Feature;
    index: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const isTextRight = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "relative w-full flex flex-col md:flex-row items-center gap-8",
                isTextRight ? "" : "md:flex-row-reverse"
            )}
        >
            <div className="flex flex-1 justify-center items-center p-4 md:p-8">
                <motion.div
                    className="relative w-full max-w-lg aspect-4/3 min-h-[200px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }}
                >
                    <Image
                        src={feature.image}
                        alt={feature.headline}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            <div className={cn(
                "relative min-h-[280px] rounded-[40px] overflow-hidden bg-white/60 backdrop-blur-md border border-orange-100 group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-center",
                "w-full md:w-3/5"
            )}>
                <div className={cn(
                    "relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-center",
                    isTextRight ? "items-end text-right" : "items-start text-left"
                )}>
                    <span className="inline-block px-3 py-1 bg-zinc-900/5 border border-zinc-900/10 rounded-full text-xs font-bold text-orange-600 mb-6 tracking-widest uppercase">
                        {feature.id === 'architecture' ? 'Architecture' :
                            feature.id === 'performance' ? 'Performance' :
                                feature.id === 'security' ? 'Security' :
                                    feature.id === 'ecosystem' ? 'Ecosystem' : 'Philosophy'}
                    </span>

                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight tracking-tight max-w-xl">
                        <ScribbleUnderline variant="straight" scribbleColor="text-orange-200" className="text-zinc-900">
                            {feature.headline}
                        </ScribbleUnderline>
                    </h3>

                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-lg">
                        {isExpanded ? feature.fullDescription : feature.description}
                    </p>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={cn(
                            "mt-6 flex items-center gap-2 text-zinc-900 font-semibold hover:text-orange-600 transition-colors text-sm",
                            isTextRight ? "flex-row-reverse" : "flex-row"
                        )}
                    >
                        <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
