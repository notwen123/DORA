"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const StickyBrain = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // We track scroll progress through this entire section length
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Slower, smoother trigger timings (200vh total height)
    // The text will stay on screen longer and fade more gradually.
    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.45], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);

    // Orb scales up, rotates, and fades out beautifully right at the end to avoid blank space
    const brainScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
    const brainRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const brainOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[200vh] bg-black w-full">

            {/* The Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* mesh gradient background */}
                <div className="absolute inset-0 bg-mesh-dark opacity-50"></div>

                {/* Central 3D Orb Asset (Image Fallback) */}
                <motion.div
                    style={{ scale: brainScale, rotate: brainRotate, opacity: brainOpacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                >
                    <div className="relative w-full h-full animate-[pulse_6s_ease-in-out_infinite]">
                        <img
                            src="/3d_images/orb.png"
                            alt="DORA Intelligence Core"
                            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_60px_rgba(0,102,204,0.4)]"
                        />
                    </div>
                </motion.div>

                {/* Story/Text Layers */}
                <div className="absolute inset-0 z-20 w-full max-w-7xl mx-auto px-6 pointer-events-none">

                    <motion.div style={{ opacity: text1Opacity }} className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20">
                        <h2 className="text-cinematic-header text-white">Understand.<br /><span className="text-gray-500">Everything.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md">DORA processes your entire context locally. No cloud. No latency.</p>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity }} className="absolute top-1/2 -translate-y-1/2 right-6 md:right-20 text-right w-full md:w-auto">
                        <h2 className="text-cinematic-header text-white">Reason.<br /><span className="text-accent-green">Faster.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md ml-auto">Leveraging Mistral-Small at 4-bit quantization for 60+ tokens/sec on consumer hardware.</p>
                    </motion.div>

                    <motion.div style={{ opacity: text3Opacity }} className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20">
                        <h2 className="text-cinematic-header text-white">Execute.<br /><span className="text-apple-blue">Perfectly.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md">Terminal integration. Script execution. DORA bridges the gap between thought and action.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
