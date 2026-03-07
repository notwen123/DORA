"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-[100] transition-all duration-500 py-4 px-6 md:px-12 flex justify-center",
                scrolled ? "py-2" : "py-4"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl w-full flex items-center justify-between transition-all duration-500 px-8 py-3",
                    scrolled
                        ? "glass-panel rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                        : "bg-transparent"
                )}
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent-green rounded-lg flex items-center justify-center">
                        <span className="text-black font-black text-xl">D</span>
                    </div>
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        DORA
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-widest uppercase text-gray-400">
                    <Link href="#overview" className="hover:text-white transition-colors">
                        Overview
                    </Link>
                    <Link href="#scenarios" className="hover:text-white transition-colors">
                        Scenarios
                    </Link>
                    <Link href="#privacy" className="hover:text-white transition-colors">
                        Privacy
                    </Link>
                    <Link href="#tech" className="hover:text-white transition-colors">
                        Intelligence
                    </Link>
                </div>

                <div>
                    <Link
                        href="/download"
                        className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-accent-green transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
