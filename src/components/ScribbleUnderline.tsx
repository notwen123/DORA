"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScribbleUnderline({
    children,
    className,
    scribbleColor = "text-accent-green",
    variant = "curve"
}: {
    children: React.ReactNode;
    className?: string;
    scribbleColor?: string;
    variant?: "curve" | "straight";
}) {
    const pathVariants = {
        curve: "M2.00025 6.99997C2.00025 6.99997 101.5 0.49997 197.5 5.49997",
        straight: "M2 7C40 6 160 5 198 6" // Slightly imperfect straight line
    };

    return (
        <span className={cn("relative inline-block", className)}>
            <span className="relative z-10">{children}</span>
            <motion.svg
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("absolute -bottom-2 left-0 w-full h-3 z-0", scribbleColor)}
                preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
                <motion.path
                    d={pathVariants[variant]}
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </motion.svg>
        </span>
    );
}
