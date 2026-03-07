"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Force the 3D Canvas to only render on the client side to avoid Next.js SSR crashes
const Scene = dynamic(() => import("./StickyBrainScene"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center border border-white/10 glass-panel rounded-full shadow-[0_0_100px_rgba(0,102,204,0.2)]">
            <div className="text-white/30 text-xs font-bold tracking-widest uppercase mb-2">Loading 3D Engine</div>
            <div className="w-8 h-8 rounded-full border-t-2 border-apple-blue animate-spin"></div>
        </div>
    )
});

export const StickyBrain = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // We track scroll progress through this entire section length
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Animate texts based on scroll progress: smooth contiguous transitions
    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 1, 1, 0]);

    const brainScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const brainRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section ref={sectionRef} className="relative h-[400vh] bg-black w-full">

            {/* The Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* mesh gradient background */}
                <div className="absolute inset-0 bg-mesh-dark opacity-50"></div>

                {/* Central 3D Orb Asset */}
                <motion.div
                    style={{ scale: brainScale, rotate: brainRotate }}
                    className="absolute z-10 w-96 h-96 md:w-[500px] md:h-[500px]"
                >
                    <Scene />
                </motion.div>

                {/* Story/Text Layers */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">

                    <motion.div style={{ opacity: text1Opacity }} className="absolute md:left-20">
                        <h2 className="text-cinematic-header text-white">Understand.<br /><span className="text-gray-500">Everything.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md">DORA processes your entire context locally. No cloud. No latency.</p>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity }} className="absolute md:right-20 md:text-right w-full md:w-auto">
                        <h2 className="text-cinematic-header text-white">Reason.<br /><span className="text-accent-green">Faster.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md ml-auto">Leveraging Mistral-Small at 4-bit quantization for 60+ tokens/sec on consumer hardware.</p>
                    </motion.div>

                    <motion.div style={{ opacity: text3Opacity }} className="absolute md:left-20 bottom-1/4">
                        <h2 className="text-cinematic-header text-white">Execute.<br /><span className="text-apple-blue">Perfectly.</span></h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-md">Terminal integration. Script execution. DORA bridges the gap between thought and action.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
