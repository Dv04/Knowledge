// app/components/HeroCanvas.tsx
'use client';
/// <reference types="@react-three/fiber" />   /* ★ makes <mesh> & friends legal */

/// <reference types="three" />                /* optional but helps IntelliSense */

import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function SpinningCube() {
    return (
        <mesh rotation={[0.4, 0.2, 0.1]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhysicalMaterial
                roughness={0}
                metalness={0}
                transmission={1}   // glass-like
                ior={1.4}
                thickness={0.4}
                clearcoat={1}
                clearcoatRoughness={0}
                envMapIntensity={1.2}
                color="#14b8a6"
            />
        </mesh>
    );
}

export default function HeroCanvas() {
    return (
        <Canvas
            className="!h-full !w-full"
            camera={{ position: [0, 0, 6], fov: 42 }}
            gl={{ alpha: true, antialias: true }}
        >
            <Suspense fallback={null}>
                <Environment preset="city" />
                <SpinningCube />
                <ContactShadows opacity={0.35} blur={2.5} scale={10} far={6} />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2}
            />
        </Canvas>
    );
}