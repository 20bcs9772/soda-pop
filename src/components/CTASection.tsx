import React from 'react';
import { Sparkles } from 'lucide-react';

export function CTASection() {
  const bubbles = Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 24 + 8;
    const left = Math.random() * 100;
    const delay = Math.random() * 4;
    const duration = Math.random() * 3 + 3;
    return (
      <div
        key={i}
        className="absolute rounded-full border-2 border-[var(--color-primary)] bg-white/40"
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          bottom: '-40px',
          animation: `fizz ${duration}s ease-in infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <section className="relative w-full border-t-4 border-[var(--color-primary)] flex flex-col overflow-hidden">
      <style>{`
        @keyframes fizz {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-400px) scale(1.2); opacity: 0; }
        }
      `}</style>

      {/* Top Half */}
      <div className="relative bg-[var(--color-blue)] py-[100px] px-[24px] flex flex-col items-center justify-center text-center z-10">
        {bubbles}
        
        <div className="relative z-20 flex flex-col items-center">
          <div className="bg-white border-4 border-[var(--color-primary)] px-[16px] py-[4px] rounded-full font-sans font-bold uppercase text-[14px] max-[600px]:text-[12px] mb-[32px] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] -rotate-2">
            100% Guarantee
          </div>
          
          <div className="relative inline-block">
            <Sparkles className="absolute -top-[30px] -left-[40px] text-[var(--color-accent-yellow)] fill-[var(--color-accent-yellow)]" size={48} strokeWidth={1.5} />
            <Sparkles className="absolute -bottom-[20px] -right-[50px] text-[var(--color-accent-lime)] fill-[var(--color-accent-lime)]" size={40} strokeWidth={1.5} />
            <Sparkles className="absolute top-[20px] -right-[30px] text-white fill-white" size={24} strokeWidth={1.5} />
            
            <h2 className="font-display text-[56px] md:text-[90px] max-[600px]:text-[48px] max-[400px]:text-[40px] text-[var(--color-primary)] uppercase leading-[0.9] m-0 drop-shadow-[4px_4px_0px_white]">
              Love it, or your<br/>money back.
            </h2>
          </div>
        </div>
      </div>

      {/* Wavy Divider & Floating Badge Container */}
      <div className="relative w-full h-[60px] bg-[var(--color-primary)] z-20">
        <svg className="absolute top-[-1px] left-0 w-full h-[60px]" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 0V24.8115C1440 24.8115 1339.42 73.0458 1195.91 73.0458C1052.4 73.0458 956.125 24.8115 812.618 24.8115C669.111 24.8115 572.836 73.0458 429.329 73.0458C285.822 73.0458 189.547 24.8115 46.0396 24.8115C21.6441 24.8115 0 28.1691 0 28.1691V0Z" fill="var(--color-blue)"/>
        </svg>

        {/* Floating Badge */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30 hidden md:flex w-[140px] h-[140px] bg-white rounded-full border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] items-center justify-center">
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="badgePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
              <text className="font-display text-[11.5px] uppercase tracking-widest" fill="var(--color-primary)">
                <textPath href="#badgePath" startOffset="0%">
                  STAY DIRTY • DRINK SODA • STAY DIRTY • DRINK SODA • 
                </textPath>
              </text>
            </svg>
          </div>
          {/* Soda Can Icon */}
          <div className="relative z-10 w-[32px] h-[48px] bg-[var(--color-vending-red)] border-4 border-[var(--color-primary)] rounded-[8px] flex flex-col items-center pt-[4px]">
            <div className="w-[12px] h-[4px] bg-[var(--color-primary)] rounded-full"></div>
            <div className="w-[20px] h-[4px] bg-[var(--color-primary)] rounded-full mt-[4px] opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="bg-[var(--color-primary)] py-[80px] px-[24px] relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[48px]">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-[48px] md:text-[64px] max-[600px]:text-[36px] text-white uppercase leading-none mb-[16px]">
              Enter your email here
            </h2>
            <p className="font-sans text-[20px] max-[600px]:text-[16px] text-[var(--color-primary-subtle)] font-bold">
              Be the first to know when we finally drop the controversial Pizza Soda.
            </p>
          </div>

          <div className="flex-1 w-full max-w-[500px]">
            <div className="relative mt-[20px]">
              {/* Label Pill */}
              <span className="absolute -top-[14px] left-[24px] bg-[var(--color-accent-lime)] text-[var(--color-primary)] text-[14px] font-bold px-[12px] py-[4px] border-4 border-[var(--color-primary)] rounded-full uppercase z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Email
              </span>
              
              <div className="flex shadow-[8px_8px_0px_0px_rgba(185,251,90,0.3)] rounded-[16px]">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-transparent border-4 border-[var(--color-primary)] border-r-0 rounded-l-[16px] px-[24px] py-[20px] max-[600px]:px-[16px] max-[600px]:py-[16px] text-white font-sans text-[18px] max-[600px]:text-[16px] focus:outline-none placeholder:text-[var(--color-primary-muted)] focus:bg-black/20 transition-colors" 
                />
                <button className="bg-[var(--color-accent-lime)] text-[var(--color-primary)] border-4 border-[var(--color-primary)] rounded-r-[16px] px-[32px] py-[20px] max-[600px]:px-[20px] max-[600px]:py-[16px] font-display text-[24px] max-[600px]:text-[20px] uppercase hover:bg-[var(--color-accent-lime-hover)] transition-colors shrink-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
