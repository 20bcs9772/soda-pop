import React from 'react';

const reviews = [
  { name: "Sarah J.", text: "The Coconut Vanilla Dirty Soda changed my life. I'm here every Tuesday.", color: "var(--color-accent-lime)", rotation: "-2deg" },
  { name: "Mike T.", text: "Found snacks here I haven't seen since my trip to Tokyo. 10/10.", color: "var(--color-accent-yellow)", rotation: "3deg" },
  { name: "Elena R.", text: "It's loud, it's colorful, and the drinks are insanely good. My new favorite spot.", color: "var(--color-orange)", rotation: "-1deg" }
];

export function TestimonialSection() {
  return (
    <section className="relative w-full py-[100px] bg-[var(--color-bg-muted)] border-y-4 border-[var(--color-primary)] overflow-hidden">
      {/* Polka dot background */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>
      
      <div className="max-w-[1200px] w-full mx-auto px-[48px] max-[900px]:px-[24px] max-[600px]:px-[12px] relative z-10">
        
        <div className="flex justify-center mb-[80px]">
          <h2 className="font-display text-[64px] max-[900px]:text-[48px] max-[600px]:text-[36px] text-[var(--color-primary)] uppercase leading-none m-0 bg-[var(--color-accent-lime)] px-[32px] py-[16px] border-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] rotate-1 inline-block">
            Word On The Street
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-[48px] min-[900px]:gap-[32px] mt-[40px]">
          {reviews.map((review, i) => (
            <div key={i} className="relative flex flex-col items-center group" style={{ transform: `rotate(${review.rotation})` }}>
              
              {/* Decorative background circle */}
              <div 
                className="absolute -top-[20px] -right-[20px] w-[80px] h-[80px] rounded-full border-4 border-[var(--color-primary)] z-0 transition-transform duration-300 group-hover:scale-110" 
                style={{ backgroundColor: review.color, opacity: 1 }}
              ></div>

              {/* Speech Bubble */}
              <div className="bg-white border-4 border-[var(--color-primary)] rounded-[32px] p-[32px] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] relative z-10 w-full hover:-translate-y-2 transition-transform duration-300">
                <p className="font-sans text-[20px] text-[var(--color-primary)] font-bold leading-snug mb-[16px]">
                  "{review.text}"
                </p>
                <h4 className="font-display text-[24px] text-[var(--color-vending-red)] uppercase m-0">— {review.name}</h4>
                
                {/* Tail of the speech bubble */}
                <div className="absolute -bottom-[20px] left-[40px] w-[40px] h-[40px] overflow-hidden">
                  <div className="w-[40px] h-[40px] bg-white border-r-4 border-b-4 border-[var(--color-primary)] shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] origin-top-left -rotate-45 translate-y-[-20px] translate-x-[10px]"></div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
