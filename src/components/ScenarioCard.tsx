"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScenarioProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    tag: string;
    className?: string;
    dark?: boolean;
    image?: string;
}

const ScenarioCard = ({ title, subtitle, icon, tag, className, dark, image }: ScenarioProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "rounded-[3rem] p-12 flex flex-col h-[700px] transition-transform duration-700 hover:scale-[1.02] overflow-hidden relative group",
                dark ? "bg-apple-gray text-white" : "bg-apple-silver text-black",
                className
            )}
        >
            <div className="flex justify-between items-start mb-12 relative z-10">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", dark ? "bg-white/10" : "bg-black/5")}>
                    {icon}
                </div>
                <span className={cn("text-[11px] font-bold uppercase tracking-[0.2em]", dark ? "text-gray-500" : "text-gray-400")}>
                    {tag}
                </span>
            </div>

            <div className="mt-auto relative z-10 w-full md:w-3/5">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                    {title}
                </h3>
                <p className={cn("text-xl font-medium leading-relaxed max-w-sm", dark ? "text-gray-400" : "text-gray-500")}>
                    {subtitle}
                </p>
            </div>

            {/* Render Image if provided, clipping to bottom right with a fade up animation */}
            {image && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-10 -right-10 w-3/4 h-3/4 md:w-2/3 md:h-2/3 z-0 pointer-events-none"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain object-bottom right-0 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

export default ScenarioCard;
