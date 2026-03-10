"use client";

import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

export default function TrailerLoader({ onComplete }: { onComplete: () => void }) {
    // Triggers the removal of the component from the DOM
    useEffect(() => {
        // Reduced from 2200ms to 1800ms for a slightly snappier entrance that still feels cinematic
        const timer = setTimeout(() => {
            onComplete();
        }, 1800);
        return () => clearTimeout(timer);
    }, [onComplete]);

    // --- Animation Variants ---
    const containerVariants: Variants = {
        exit: {
            transition: { staggerChildren: 0.1 } // Stagger the logo fade and the door opening
        }
    };

    const topPanelVariants: Variants = {
        initial: { y: 0 },
        exit: {
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const bottomPanelVariants: Variants = {
        initial: { y: 0 },
        exit: {
            y: "100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const logoVariants: Variants = {
        initial: { opacity: 1, scale: 1 },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
            variants={containerVariants}
            initial="initial"
            exit="exit"
        >
            {/* 1. TOP PANEL (Black) */}
            <motion.div
                variants={topPanelVariants}
                className="absolute top-0 left-0 right-0 h-[50vh] bg-black border-b border-white/5"
            />

            {/* 2. BOTTOM PANEL (Black) */}
            <motion.div
                variants={bottomPanelVariants}
                className="absolute bottom-0 left-0 right-0 h-[50vh] bg-black border-t border-white/5"
            />

            {/* 3. CENTER LOGO CONTENT */}
            <motion.div
                variants={logoVariants}
                className="relative z-10 flex items-center gap-4"
            >
                {/* LOGO "D" - Slides in from Left */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)]"
                >
                    <span className="text-black font-black text-4xl sm:text-5xl select-none pt-1">
                        D
                    </span>
                </motion.div>

                {/* TEXT "DORA" - Slides in from Right */}
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                        DORA
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
