"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CinematicFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div
            ref={containerRef}
            style={{ scale, opacity }}
            className={`relative w-full overflow-hidden rounded-[2rem] md:rounded-[4rem] ${className}`}
        >
            {children}
        </motion.div>
    );
};
