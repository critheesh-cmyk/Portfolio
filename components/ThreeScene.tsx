'use client';

import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.45} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1.2, 4]} />
        <MeshDistortMaterial color="#7C3AED" emissive="#06B6D4" emissiveIntensity={0.6} roughness={0.15} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="h-full w-full">
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1.4} />
      <pointLight position={[-3, -2, -2]} color="#06B6D4" intensity={8} />
      <pointLight position={[2, 2, 2]} color="#EC4899" intensity={7} />
      <FloatingOrb />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}
