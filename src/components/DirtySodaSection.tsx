import React from 'react';

export function DirtySodaSection() {
  return (
    <section className="relative w-full py-[64px] max-[900px]:py-12 max-[600px]:py-10 flex items-center justify-center overflow-x-hidden bg-[var(--color-bg-muted)] border-b-4 border-[var(--color-primary)]">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--color-primary) 2px, transparent 2px), linear-gradient(90deg, var(--color-primary) 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="max-w-[1200px] w-full mx-auto px-[48px] max-[900px]:px-6 max-[600px]:px-4 max-[400px]:px-3 relative flex flex-col min-[901px]:flex-row items-start justify-between">
        {/* Left Column */}
        <div className="relative w-full min-[901px]:w-1/2 flex flex-col items-start max-[900px]:items-center max-[900px]:text-center">
          <div className="absolute top-0 left-0 max-[900px]:left-1/2 max-[900px]:-translate-x-1/2 z-0 pointer-events-none">
            <span className="font-display text-[120px] min-[901px]:text-[280px] max-[600px]:text-[80px] max-[400px]:text-[60px] text-[var(--color-accent-yellow)] leading-[0.8] whitespace-nowrap select-none tracking-normal" style={{ WebkitTextStroke: '4px var(--color-primary)' }}>
              DIRTY SODA
            </span>
          </div>

          <div className="relative z-10 mt-[120px] min-[901px]:mt-[180px] max-[900px]:mt-[70px] max-[600px]:mt-12 bg-white border-4 border-[var(--color-primary)] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] p-4 -rotate-2 hover:rotate-0 transition-transform duration-300">
            <video
              src="/pour-drink.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[320px] h-[320px] max-[900px]:w-[260px] max-[900px]:h-[260px] max-[600px]:w-[200px] max-[600px]:h-[200px] object-cover border-4 border-[var(--color-primary)]"
              aria-label="Pouring dirty soda"
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-accent-yellow)] text-[var(--color-primary)] font-display text-[24px] px-[16px] py-[8px] border-4 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] rotate-[10deg]">
              FRESH!
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full min-[901px]:w-1/2 flex flex-col items-start min-[901px]:items-end mt-12 min-[901px]:mt-0 pt-[100px] min-[901px]:pt-[120px] max-[900px]:pt-8 max-[600px]:pt-6 max-[900px]:items-center">
          <div className="absolute left-0 min-[901px]:-left-[150px] top-0 min-[901px]:-top-[40px] max-[900px]:left-1/2 max-[900px]:-translate-x-1/2 z-20 pointer-events-none">
            <img
              src="/dirty-soda.png"
              alt="Red dirty soda with ice and cream"
              className="h-[400px] min-[901px]:h-[500px] max-[600px]:h-[260px] max-[400px]:h-[200px] w-auto object-contain drop-shadow-[12px_12px_0px_rgba(34,34,34,1)]"
              loading="lazy"
            />
          </div>

          <div className="relative z-30 flex flex-col items-start max-[900px]:items-center max-[900px]:text-center mt-[250px] min-[901px]:mt-[160px] max-[900px]:mt-[200px] max-[600px]:mt-[180px] max-[400px]:mt-[140px] w-full max-w-[420px] bg-white border-4 border-[var(--color-primary)] shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] p-8 max-[600px]:p-6 rotate-1">
            <h3 className="font-display text-[48px] max-[900px]:text-[36px] max-[600px]:text-[32px] max-[400px]:text-[28px] text-[var(--color-vending-red)] uppercase leading-none mb-[24px] max-[600px]:mb-4">
              Dirty Soda?<br />
              Let's Get Into It.
            </h3>
            <p className="font-sans font-bold text-[18px] max-[900px]:text-[17px] max-[600px]:text-[15px] max-[400px]:text-[14px] text-[var(--color-primary-muted)] leading-[1.5]">
              It's not what you think. Dirty soda means taking your standard Coke or Pepsi base and mixing in flavors like coconut, vanilla, or cherry—with sweet cream or lime to finish. The possibilities are truly endless!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
