'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';

const LOGO_TYPES = ['dora', 'kaspa', 'cadpay'] as const;

interface LogoItem {
    id: number;
    type: typeof LOGO_TYPES[number];
    top: number;
    left: number;
    size: number;
    opacity: number;
    rotation: number;
    driftDuration: number;
    driftX: number;
    driftY: number;
}

const LogoFieldContent = React.memo(function LogoFieldContentInner({ count, className }: { count: number; className: string }) {
    const [items, setItems] = useState<LogoItem[]>([]);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);

        const newItems: LogoItem[] = [];
        const maxAttempts = 500;

        for (let i = 0; i < count; i++) {
            let attempt = 0;
            let added = false;

            while (attempt < maxAttempts && !added) {
                const size = Math.random() * (40 - 20) + 20;
                const top = Math.random() * 95;
                const left = Math.random() * 95;

                let overlapping = false;
                for (const existing of newItems) {
                    const dx = existing.left - left;
                    const dy = existing.top - top;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const minDistance = 6;

                    if (dist < minDistance) {
                        overlapping = true;
                        break;
                    }
                }

                if (!overlapping) {
                    newItems.push({
                        id: i,
                        type: LOGO_TYPES[Math.floor(Math.random() * LOGO_TYPES.length)],
                        top,
                        left,
                        size,
                        opacity: Math.random() * (0.3 - 0.1) + 0.1,
                        rotation: Math.random() * 360,
                        driftDuration: Math.random() * (30 - 20) + 20,
                        driftX: Math.random() * (20 - 5) + 5 * (Math.random() > 0.5 ? 1 : -1),
                        driftY: Math.random() * (20 - 5) + 5 * (Math.random() > 0.5 ? 1 : -1),
                    });
                    added = true;
                }
                attempt++;
            }
        }
        setItems(newItems);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [count, mouseX, mouseY]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {items.map((item) => (
                <DriftingLogo
                    key={item.id}
                    item={item}
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            ))}
        </div>
    );
});

function DriftingLogo({ item, mouseX, mouseY }: { item: LogoItem; mouseX: any; mouseY: any }) {
    const radius = 0.15;

    const x = useTransform(mouseX, (mX: number) => {
        const itemX = item.left / 100;
        const dist = mX - itemX;
        if (Math.abs(dist) < radius) {
            const force = (radius - Math.abs(dist)) / radius;
            return dist * -1 * force * 50;
        }
        return 0;
    });

    const y = useTransform(mouseY, (mY: number) => {
        const itemY = item.top / 100;
        const dist = mY - itemY;
        if (Math.abs(dist) < radius) {
            const force = (radius - Math.abs(dist)) / radius;
            return dist * -1 * force * 50;
        }
        return 0;
    });

    const smoothX = useSpring(x, { damping: 30, stiffness: 100 });
    const smoothY = useSpring(y, { damping: 30, stiffness: 100 });

    return (
        <motion.div
            className="absolute pointer-events-auto mix-blend-screen will-change-transform"
            style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                x: smoothX,
                y: smoothY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [item.opacity, item.opacity * 1.2, item.opacity],
                scale: 1,
                translateX: [0, item.driftX, 0],
                translateY: [0, item.driftY, 0],
                rotate: [item.rotation, item.rotation + 45, item.rotation],
            }}
            transition={{
                opacity: { duration: 5, repeat: Infinity },
                scale: { duration: 0.8 },
                translateX: { duration: item.driftDuration, repeat: Infinity },
                translateY: { duration: item.driftDuration * 1.5, repeat: Infinity },
                rotate: { duration: item.driftDuration * 2, repeat: Infinity }
            }}
            whileHover={{
                scale: 1.5,
                opacity: 0.8,
                zIndex: 50,
                transition: { duration: 0.3 }
            }}
        >
            {item.type === 'dora' && (
                <div style={{ width: item.size, height: item.size }} className="relative">
                    <Image src="/icon.svg" alt="DORA" fill sizes="(max-width: 768px) 50px, 80px" className="object-contain grayscale opacity-60" />
                </div>
            )}
            {item.type === 'kaspa' && (
                <div style={{ width: item.size, height: item.size }} className="relative">
                    <Image src="/kaspa-icon.png" alt="Kaspa" fill sizes="(max-width: 768px) 50px, 80px" className="opacity-30 object-contain" />
                </div>
            )}
            {item.type === 'cadpay' && (
                <div
                    style={{ width: item.size, height: item.size }}
                    className="rounded-lg bg-orange-500/5 flex items-center justify-center backdrop-blur-[1px] border border-orange-500/5"
                >
                    <span className="font-black italic text-orange-500/30" style={{ fontSize: item.size * 0.6 }}>C</span>
                </div>
            )}
        </motion.div>
    );
}

export default function LogoField({ count = 20, className = '' }: { count?: number; className?: string }) {
    return <LogoFieldContent count={count} className={className} />;
}
