import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroSection() {
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const numeralRef = useRef<HTMLDivElement>(null);
  const drinkRef = useRef<HTMLImageElement>(null);
  const cup1Ref = useRef<HTMLImageElement>(null);
  const cup2Ref = useRef<HTMLImageElement>(null);
  const snackCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [heading1Ref.current, heading2Ref.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo(
        numeralRef.current,
        { scale: 0.8, opacity: 0, rotation: -15 },
        { scale: 1, opacity: 1, rotation: -5, duration: 0.8, ease: 'back.out(1.5)' }
      );

      gsap.fromTo(
        drinkRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        [cup1Ref.current, cup2Ref.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.5 }
      );

      gsap.to(cup1Ref.current, {
        y: 20,
        rotation: -10,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });

      gsap.to(cup2Ref.current, {
        y: -20,
        rotation: 25,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });

      gsap.fromTo(
        snackCardRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.5, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-[64px] overflow-x-hidden max-[900px]:py-8 max-[600px]:py-6 bg-[var(--color-bg)] relative border-b-4 border-[var(--color-primary)]">
      {/* Halftone background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="max-w-[1200px] w-full mx-auto px-[48px] max-[900px]:px-5 max-[600px]:px-4 max-[400px]:px-3 relative flex flex-col min-[901px]:flex-row items-start justify-between gap-0 min-[901px]:gap-0">
        {/* Mobile/tablet: back layer - very subtle blurry cups (z-0) */}
        <div className="hidden max-[900px]:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/drink-cup.webp"
            alt=""
            aria-hidden
            className="absolute w-20 max-[600px]:w-14 blur-[4px] opacity-30 -rotate-12 object-contain"
            style={{ top: '8%', right: '8%' }}
          />
          <img
            src="/grapefruit.png"
            alt=""
            aria-hidden
            className="absolute w-32 max-[600px]:w-24 blur-[4px] opacity-30 rotate-[20deg] object-contain"
            style={{ bottom: '20%', left: '-2%' }}
          />
        </div>

        {/* Left Column - desktop; on mobile: text block below the drink (order-2) */}
        <div className="relative z-10 w-full min-[901px]:w-1/2 order-2 min-[901px]:order-1 flex flex-col items-start min-w-0 max-[900px]:items-center max-[900px]:text-center mt-8 min-[901px]:mt-0">
          <div
            ref={numeralRef}
            className="absolute -top-12 -left-8 min-[901px]:-left-12 max-[900px]:left-1/2 max-[900px]:-translate-x-1/2 bg-[var(--color-accent-lime)] border-4 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] px-4 py-2 max-[900px]:z-10 min-[901px]:z-0 -rotate-6"
          >
            <span className="font-display text-[48px] max-[900px]:text-[36px] text-[var(--color-primary)] leading-none">
              #1
            </span>
          </div>
          
          <div className="relative z-10 mt-8">
            <h1
              ref={heading1Ref}
              className="font-display text-[60px] max-[900px]:text-[40px] max-[600px]:text-[32px] max-[400px]:text-[28px] text-[var(--color-bg)] uppercase leading-none font-bold relative z-10 inline-block bg-[var(--color-primary)] px-4 py-2 border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] -rotate-1"
            >
              YOUR ONE STOP
            </h1>
            <br />
            <h2
              ref={heading2Ref}
              className="font-display text-[120px] max-[900px]:text-[64px] max-[600px]:text-[48px] max-[400px]:text-[36px] text-[var(--color-accent-yellow)] uppercase leading-none mt-4 max-[900px]:mt-2 font-bold relative z-10 inline-block bg-[var(--color-primary)] px-4 py-2 border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] rotate-1 min-[901px]:whitespace-nowrap"
            >
              FLAVOR SHOP
            </h2>
          </div>

          <div className="bg-white border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] p-6 mt-[40px] max-[900px]:mt-6 max-[900px]:max-w-[420px] max-w-[500px] w-full relative">
            <div className="absolute -top-4 -right-4 bg-[var(--color-vending-red)] text-white font-display text-[20px] px-[12px] py-[4px] border-4 border-[var(--color-primary)] rotate-[10deg] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)]">
              NEW!
            </div>
            <p className="font-sans text-[18px] font-bold max-[900px]:text-[16px] max-[600px]:text-[15px] text-[var(--color-primary)] text-left min-[901px]:text-left max-[900px]:text-center leading-snug">
              Johnny's Dirty Soda And Exotic Snacks, It's A Mouthful But That's Kind Of What We Are All About. Welcome To Your One Stop Shop For Delicious Drinks And Snacks From All Over The World.
            </p>
          </div>

          <button
            className="mt-[40px] max-[900px]:mt-8 flex flex-row items-center justify-center gap-2 bg-[var(--color-accent-lime)] border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] px-[40px] py-[16px] max-[400px]:px-6 max-[400px]:py-4 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all duration-200 group cursor-pointer"
            aria-label="Order on DoorDash"
          >
            <span className="font-display text-[24px] max-[400px]:text-[20px] uppercase text-[var(--color-primary)] tracking-wide">Order Now</span>
          </button>
        </div>

        {/* Right Column - desktop: drink + cups; mobile: drink image first in stack (order-1), no overlay */}
        <div className="relative w-full min-[901px]:w-1/2 flex justify-center min-[901px]:justify-end pointer-events-none order-1 min-[901px]:order-2 max-[900px]:flex max-[900px]:items-center max-[900px]:justify-center max-[900px]:min-h-0">
          <div className="relative max-[900px]:z-0 min-[901px]:z-10">
            {/* Comic burst behind drink */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[260px] min-[901px]:w-[340px] bg-[var(--color-accent-yellow)] border-4 border-[var(--color-primary)] z-0"
              style={{
                clipPath:
                  'polygon(50% 0%, 63% 22%, 98% 32%, 70% 50%, 82% 82%, 50% 68%, 18% 82%, 30% 50%, 2% 32%, 37% 22%)',
              }}
            />
            <img
              ref={drinkRef}
              src="/drink-hero.png"
              alt="Johnny's Dirty Soda"
              className="relative z-0 min-[901px]:z-10 h-[560px] max-[900px]:h-[320px] max-[600px]:h-[260px] max-[400px]:h-[220px] max-[900px]:flex-shrink-0 w-auto object-contain -rotate-[10deg] min-[901px]:pointer-events-auto drop-shadow-2xl min-[901px]:-mt-[10px] min-[901px]:translate-x-[40px]"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = '/grapefruit.png'; }}
            />
          </div>

          {/* Desktop only: floating cups */}
          <img
            ref={cup1Ref}
            src="/drink-cup.webp"
            alt="Soda Cup"
            className="min-[901px]:block max-[900px]:hidden absolute z-20 w-[140px] drop-shadow-[8px_8px_0px_rgba(34,34,34,1)] -rotate-[15deg] pointer-events-auto object-contain"
            style={{ top: '-20px', right: '-40px' }}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = '/grapefruit.png'; }}
          />
          <img
            ref={cup2Ref}
            src="/grapefruit.png"
            alt="Soda Cup"
            className="min-[901px]:block max-[900px]:hidden absolute z-20 w-[240px] drop-shadow-[8px_8px_0px_rgba(34,34,34,1)] rotate-[20deg] pointer-events-auto object-contain"
            style={{ bottom: '20px', left: '-20px' }}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = '/grapefruit.png'; }}
          />
        </div>
      </div>
    </section>
  );
}
