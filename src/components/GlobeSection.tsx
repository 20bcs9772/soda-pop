import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Earth } from './Earth';

export function GlobeSection() {
  return (
    <section className="relative w-full h-[100vh] bg-[var(--color-purple)] border-y-4 border-[var(--color-primary)] overflow-hidden flex flex-col">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--color-bg) 2px, transparent 2px), linear-gradient(90deg, var(--color-bg) 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Scrolling Banner */}
      <div className="relative w-full h-[120px] min-[900px]:h-[200px] flex items-center justify-center z-20 shrink-0 border-[var(--color-primary)]">
        <div className="absolute w-[150%] bg-[var(--color-accent-lime)] rotate-[3deg] flex items-center py-[12px] min-[900px]:py-[16px] border-y-4 border-[var(--color-primary)] shadow-[0_8px_0_0_rgba(34,34,34,1)]">
          <div className="flex whitespace-nowrap animate-[marquee-reverse_30s_linear_infinite]">
            {[...Array(40)].map((_, i) => (
              <span key={i} className="font-display font-bold text-[64px] min-[900px]:text-[96px] text-[var(--color-primary)] uppercase leading-none tracking-normal">OPEN NOW! 🗓️&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full relative flex items-center">
        <div className="max-w-[1200px] w-full mx-auto relative z-10 px-[48px] max-[900px]:px-[24px] max-[600px]:px-[12px] pointer-events-none">
          <div className="inline-block bg-white border-4 border-[var(--color-primary)] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] p-6 max-[600px]:p-4 -rotate-2 pointer-events-auto min-[900px]:-translate-x-[40px]">
            <h2 className="font-display text-[56px] min-[900px]:text-[110px] max-[600px]:text-[40px] max-[400px]:text-[32px] text-[var(--color-primary)] uppercase leading-[0.95] tracking-normal font-bold m-0">
              SNACKS FROM<br />ALL OVER THE<br />
              <span className="text-[var(--color-vending-red)]">GLOBE</span>
            </h2>
          </div>
        </div>

        <div className="absolute right-[-30vw] min-[900px]:right-[-15vw] top-[40vh] min-[900px]:top-[10vh] w-[120vw] h-[120vw] min-[900px]:w-[75vw] min-[900px]:h-[75vw] min-w-[500px] min-h-[500px] min-[900px]:min-w-[700px] min-[900px]:min-h-[700px] cursor-grab active:cursor-grabbing z-0 opacity-90 min-[900px]:opacity-100 drop-shadow-[16px_16px_0px_rgba(34,34,34,0.5)]">
          <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 3, 5]} intensity={2} />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
