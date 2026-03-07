"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Apple, Monitor, Terminal as Linux, Download, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type OS = "mac" | "windows" | "linux" | "unknown";

const DownloadButtons = () => {
    const [os, setOs] = useState<OS>("unknown");

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("mac") !== -1) setOs("mac");
        else if (userAgent.indexOf("win") !== -1) setOs("windows");
        else if (userAgent.indexOf("linux") !== -1) setOs("linux");
    }, []);

    const downloads = [
        {
            id: "mac",
            name: "macOS",
            icon: <Apple className="w-6 h-6" />,
            version: "v1.2.4 (Stable)",
            filename: "DORA-1.2.4-arm64.dmg",
            size: "82MB",
            recommended: os === "mac",
        },
        {
            id: "windows",
            name: "Windows",
            icon: <Monitor className="w-6 h-6" />,
            version: "v1.2.4 (Stable)",
            filename: "DORA-Setup-1.2.4.exe",
            size: "94MB",
            recommended: os === "windows",
        },
        {
            id: "linux",
            name: "Linux",
            icon: <Linux className="w-6 h-6" />,
            version: "v1.2.4 (Beta)",
            filename: "DORA-1.2.4.AppImage",
            size: "78MB",
            recommended: os === "linux",
        },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {downloads.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                            "relative rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all duration-500",
                            item.recommended
                                ? "bg-white text-black scale-105 shadow-[0_20px_50px_rgba(255,255,255,0.1)] z-10"
                                : "bg-apple-gray text-white border border-white/5 opacity-80 hover:opacity-100"
                        )}
                    >
                        {item.recommended && (
                            <span className="absolute -top-4 bg-accent-green text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                Recommended for you
                            </span>
                        )}

                        <div className={cn("mb-8 w-16 h-16 rounded-2xl flex items-center justify-center", item.recommended ? "bg-black/5" : "bg-white/5")}>
                            {item.icon}
                        </div>

                        <h3 className="text-3xl font-black tracking-tight mb-2">{item.name}</h3>
                        <p className={cn("text-sm font-bold mb-8", item.recommended ? "text-gray-500" : "text-gray-400")}>
                            {item.version}
                        </p>

                        <div className="mt-auto w-full space-y-4">
                            <button className={cn(
                                "w-full py-4 rounded-full font-black flex items-center justify-center gap-2 transition-all active:scale-95 duration-300",
                                item.recommended ? "bg-black text-white hover:bg-accent-green hover:text-black" : "bg-white text-black hover:bg-accent-green hover:text-black"
                            )}>
                                <Download className="w-5 h-5" />
                                Download
                            </button>

                            <div className="flex justify-between items-center px-2 text-[10px] font-bold uppercase tracking-wider opacity-40">
                                <span>{item.filename}</span>
                                <span>{item.size}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-500 font-medium italic">
                    Other versions: <span className="text-white hover:underline cursor-pointer">ARM64</span>, <span className="text-white hover:underline cursor-pointer">x64</span>, <span className="text-white hover:underline cursor-pointer">Source (.zip)</span>
                </p>
            </motion.div>
        </div>
    );
};

export default DownloadButtons;
