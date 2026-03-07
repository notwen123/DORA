"use client";
import React from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls } from "@react-three/drei";
import { Model as OrbModel } from "./OrbSphereModel";

export default function StickyBrainScene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Environment preset="city" />
            <PresentationControls
                global={false}
                cursor={true}
                snap={true}
                speed={1}
                zoom={1}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
                <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
                    <OrbModel scale={1.5} />
                </Float>
            </PresentationControls>
        </Canvas>
    );
}
