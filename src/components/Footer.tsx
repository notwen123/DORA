"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, MessageSquare, Shield, Cpu, Globe, Rocket } from "lucide-react";

const Footer = () => {
    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Intelligence", href: "#tech" },
                { name: "Scenarios", href: "#scenarios" },
                { name: "Privacy", href: "#privacy" },
                { name: "Global Hub", href: "/download" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About DORA", href: "#" },
                { name: "Mission", href: "#" },
                { name: "Security", href: "#" },
                { name: "Contact", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "#" },
                { name: "Changelog", href: "/download" },
                { name: "API Reference", href: "#" },
                { name: "Community", href: "#" },
            ],
        },
    ];

    return (
        <footer className="relative bg-black border-t border-white/5 pt-32 pb-12 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-orange-500/5 blur-[120px] rounded-full -z-10 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                                <span className="text-black font-black text-2xl">D</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white uppercase">DORA Intelligence</span>
                        </div>
                        <p className="text-lg text-gray-500 font-medium max-w-sm leading-relaxed">
                            Transforming human-computer interaction through local-first, autonomous reasoning. The future is personal, private, and powerful.
                        </p>
                        <div className="flex gap-6 pt-4">
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/50">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm font-bold text-gray-500 hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
                    <div className="flex flex-wrap justify-center md:justify-start gap-8">
                        <span>© 2026 DORA INTELLIGENCE INC.</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            <span>Global Build</span>
                        </div>
                        <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">v1.2.4-STABLE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
