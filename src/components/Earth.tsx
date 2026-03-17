import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Earth() {
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);
  const earthRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    new THREE.TextureLoader().load(
      "https://res.cloudinary.com/eclipse5137/image/upload/v1773567907/18921804_0zaq_ag24_210203_usg9ts.jpg",
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
