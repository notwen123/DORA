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
}

const ScenarioCard = ({ title, subtitle, icon, tag, className, dark }: ScenarioProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "rounded-[3rem] p-12 flex flex-col h-[700px] transition-transform duration-700 hover:scale-[1.02]",
                dark ? "bg-apple-gray text-white" : "bg-apple-silver text-black",
                className
            )}
        >
            <div className="flex justify-between items-start mb-12">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", dark ? "bg-white/10" : "bg-black/5")}>
                    {icon}
                </div>
                <span className={cn("text-[11px] font-bold uppercase tracking-[0.2em]", dark ? "text-gray-500" : "text-gray-400")}>
                    {tag}
                </span>
            </div>
            <div className="mt-auto">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                    {title}
                </h3>
                <p className={cn("text-xl font-medium leading-relaxed max-w-sm", dark ? "text-gray-400" : "text-gray-500")}>
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
};

export default ScenarioCard;
