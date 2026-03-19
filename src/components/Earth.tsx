import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Earth() {
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);
  const earthRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    new THREE.TextureLoader().load(
      "/earth.jpg",
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        setTexture(tex);
      }
    );
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
    </mesh>
  );
}
