"use client";

import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export function Model(props: any) {
    const gltf = useLoader(GLTFLoader, '/3d/orb_sphere.glb');
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            // Gentle floating animation
            group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
            // Continuous slow rotation
            group.current.rotation.y += 0.005;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={gltf.scene} />
        </group>
    );
}

