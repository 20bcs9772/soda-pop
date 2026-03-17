import React from 'react';
import { HeroSection } from './components/HeroSection';
import { DirtySodaSection } from './components/DirtySodaSection';
import { GlobeSection } from './components/GlobeSection';
import { CTASection } from './components/CTASection';
import { TestimonialSection } from './components/TestimonialSection';
import { ComicSection } from './components/ComicSection';
import VendingMachine from './components/VendingMachine';

export default function App() {
  return (
    <main className="bg-[var(--color-bg)] overflow-hidden">
      <HeroSection />
      <DirtySodaSection />
      <ComicSection />
      <VendingMachine />
      <GlobeSection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
