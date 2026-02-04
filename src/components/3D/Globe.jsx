
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';

const RotatingGlobe = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
                <meshStandardMaterial
                    color="#050505"
                    emissive="#a3e635"
                    emissiveIntensity={0.1}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

export const Globe = () => {
    return (
        <div className="w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-background to-transparent pointer-events-none" />
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#a3e635" />
                <RotatingGlobe />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};
