import React from 'react';

export function ComicSection() {
  return (
    <section className="relative w-full py-[100px] bg-[var(--color-accent-yellow)] border-y-4 border-[var(--color-primary)] overflow-hidden">
      {/* Halftone background */}
      <div 
        className="absolute inset-0 opacity-15" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--color-primary) 3px, transparent 3px)', 
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 8px 8px'
        }}
      ></div>
      
      <div className="max-w-[1200px] w-full mx-auto px-[48px] max-[900px]:px-[24px] max-[600px]:px-[12px] relative z-10">
        {/* Section Title */}
        <div className="flex justify-center mb-[80px] relative">
          <div className="bg-white border-4 border-[var(--color-primary)] px-[32px] py-[16px] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] -rotate-2 relative z-10">
            <h2 className="font-display text-[64px] max-[900px]:text-[48px] max-[600px]:text-[36px] text-[var(--color-vending-red)] uppercase leading-none m-0">
              The Dirty Process
            </h2>
          </div>
          
          {/* Starburst Action Bubble */}
          <div 
            className="absolute -top-10 -right-4 min-[900px]:-right-12 bg-[var(--color-accent-lime)] w-[120px] h-[120px] flex items-center justify-center z-20 transition-transform hover:scale-110 hover:rotate-12 cursor-default" 
            style={{ 
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              filter: 'drop-shadow(4px 4px 0px var(--color-primary))'
            }}
          >
            {/* Inner border hack for clip-path */}
            <div 
              className="absolute inset-[4px] bg-[var(--color-accent-lime)] flex items-center justify-center"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            >
              <span className="font-display text-[20px] text-[var(--color-primary)] rotate-12 mt-2">POW!</span>
            </div>
          </div>
        </div>

        {/* Comic Panels Grid */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-[32px] min-[900px]:gap-[40px]">
          
          {/* Panel 1 */}
          <div className="bg-white border-4 border-[var(--color-primary)] p-[24px] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="absolute -top-5 -left-5 bg-[var(--color-purple)] text-white font-display text-[24px] px-[16px] py-[8px] border-4 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] rotate-[-5deg] z-10">
              STEP 1
            </div>
            <div className="h-[250px] w-full border-4 border-[var(--color-primary)] mb-[24px] overflow-hidden relative bg-[#f0f8ff]">
              <img 
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop" 
                alt="Ice and soda" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-[#2196f3] mix-blend-screen opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              {/* Action Text Overlay */}
              <div className="absolute bottom-4 right-4 font-display text-[32px] text-white drop-shadow-[2px_2px_0px_#222] -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                CRACK!
              </div>
            </div>
            <h3 className="font-display text-[40px] text-[var(--color-primary)] leading-none mb-[12px] uppercase">The Base</h3>
            <p className="font-sans text-[18px] text-[var(--color-primary-light)] font-bold leading-snug">
              We start with a mountain of pebble ice and your favorite classic soda. The perfect canvas for flavor!
            </p>
          </div>

          {/* Panel 2 */}
          <div className="bg-white border-4 border-[var(--color-primary)] p-[24px] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col min-[900px]:mt-[40px]">
            <div className="absolute -top-5 -left-5 bg-[var(--color-vending-red)] text-white font-display text-[24px] px-[16px] py-[8px] border-4 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] rotate-[3deg] z-10">
              STEP 2
            </div>
            <div className="h-[250px] w-full border-4 border-[var(--color-primary)] mb-[24px] overflow-hidden relative bg-[#fff0f5]">
              <img 
                src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop" 
                alt="Syrup pouring" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-[#e91e63] mix-blend-screen opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              {/* Action Text Overlay */}
              <div className="absolute top-4 right-4 font-display text-[32px] text-white drop-shadow-[2px_2px_0px_#222] rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                SPLASH!
              </div>
            </div>
            <h3 className="font-display text-[40px] text-[var(--color-primary)] leading-none mb-[12px] uppercase">The Flavor</h3>
            <p className="font-sans text-[18px] text-[var(--color-primary-light)] font-bold leading-snug">
              We hit it with our signature flavor syrups. Coconut, peach, mango, you name it.
            </p>
          </div>

          {/* Panel 3 */}
          <div className="bg-white border-4 border-[var(--color-primary)] p-[24px] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="absolute -top-5 -left-5 bg-[var(--color-accent-lime)] text-[var(--color-primary)] font-display text-[24px] px-[16px] py-[8px] border-4 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] rotate-[-3deg] z-10">
              STEP 3
            </div>
            <div className="h-[250px] w-full border-4 border-[var(--color-primary)] mb-[24px] overflow-hidden relative bg-[#fffff0]">
              <img 
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop" 
                alt="Cream pouring" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-[var(--color-orange)] mix-blend-screen opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              {/* Action Text Overlay */}
              <div className="absolute bottom-4 left-4 font-display text-[32px] text-white drop-shadow-[2px_2px_0px_#222] -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                SWOOSH!
              </div>
            </div>
            <h3 className="font-display text-[40px] text-[var(--color-primary)] leading-none mb-[12px] uppercase">The Cream</h3>
            <p className="font-sans text-[18px] text-[var(--color-primary-light)] font-bold leading-snug">
              Topped off with rich sweet cream or a squeeze of fresh lime. That's what makes it DIRTY!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
