import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CTASection } from '../components/CTASection';
import { UseCases } from '../components/UseCases';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';

export default function TestApp() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <UseCases />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
