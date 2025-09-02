'use client';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Shape() {
  // Definir colores una sola vez para mejor performance
  const blueColor = new THREE.Color('#0A84FF');
  
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color={blueColor}
          metalness={0.2}
          roughness={0.4}
          emissive={blueColor}
          emissiveIntensity={0.06}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHeroBg() {
  const groundColor = new THREE.Color('#0A84FF').multiplyScalar(0.04);
  
  return (
    <div className="absolute inset-0 -z-10" aria-hidden={true}>
      <Canvas 
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera position={[0, 0, 7]} makeDefault />
        
        {/* Iluminación */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[4, 6, 5]} 
          intensity={1.2}
          castShadow
        />
        
        {/* Forma principal */}
        <Shape />
        
        {/* Suelo/base */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -3, 0]}
          receiveShadow
        >
          <circleGeometry args={[18, 64]} />
          <meshBasicMaterial color={groundColor} />
        </mesh>
      </Canvas>
    </div>
  );
}