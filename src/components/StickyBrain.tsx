"use client";

import React from "react";
import { motion } from "framer-motion";

export const StickyBrain = () => {
    // We animate the items in sequentially when the section hits the viewport
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5 // Slower stagger for more pronounced "one by one" effect
            }
        }
    };

    const item: any = {
        hidden: { opacity: 0, y: 80 }, // Start further down for a larger float-up
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <section className="relative h-screen min-h-[800px] bg-black text-white w-full overflow-hidden flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                {/* Background ambient glow behind orb */}
                <div className="absolute inset-0 z-0 bg-mesh-dark opacity-30 pointer-events-none"></div>

                {/* Left Side: Staggered Text Stack */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-20 w-full md:w-1/2 flex flex-col justify-center space-y-12 md:space-y-16 py-12 border-l-2 border-white/10 pl-8 md:pl-16"
                >

                    {/* Item 1 */}
                    <motion.div variants={item} className="pr-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                            Understand<br />
                            <span className="text-gray-500">Everything.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-md leading-relaxed">
                            DORA processes your entire context locally. No cloud. No latency.
                        </p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div variants={item} className="pr-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                            Reason<br />
                            <span className="text-accent-green">Faster.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-md leading-relaxed">
                            Leveraging 4-bit quantization for 60+ tokens/sec on consumer hardware.
                        </p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div variants={item} className="pr-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                            Execute<br />
                            <span className="text-apple-blue">Perfectly.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-md leading-relaxed">
                            Terminal integration and script execution turn thought into action instantly.
                        </p>
                    </motion.div>

                </motion.div>

                {/* Right Side: The Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                    >
                        <div className="absolute inset-0 animate-pulse-slow">
                            <img
                                src="/3d_images/orb.png"
                                alt="DORA Core"
                                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_80px_rgba(0,102,204,0.6)]"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
