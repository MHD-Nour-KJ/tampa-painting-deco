import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TopServicesSection } from './components/TopServicesSection';
import { EssentialsCarousel } from './components/EssentialsCarousel';
import { BentoMetricsSection } from './components/BentoMetricsSection';
import { ParallaxShowcase } from './components/ParallaxShowcase';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { TestimonialSection } from './components/TestimonialSection';
import { PopularServicesDirectory } from './components/PopularServicesDirectory';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Interior Painting');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName && typeof serviceName === 'string') {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleHeroSearch = (service: string, location: string) => {
    if (service.trim()) {
      setSelectedService(service);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans selection:bg-[#1EA0B8] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* Section 1: Hero (Matching Image 1) */}
        <HeroSection
          onSearch={handleHeroSearch}
          onOpenQuote={() => handleOpenQuote('General Inquiry')}
        />

        {/* Section 2: Top Services 4-Card Block (Matching Image 2) */}
        <TopServicesSection
          onSelectService={(service) => handleOpenQuote(service)}
        />

        {/* Section 3A: Essentials Carousel (Matching Image 3 Top) */}
        <EssentialsCarousel
          onSelectService={(service) => handleOpenQuote(service)}
        />

        {/* Section 3B: Bento Metrics & Trust (Matching Image 3 Bottom) */}
        <BentoMetricsSection />

        {/* Section 4: Full-width Screen Parallax Showcase */}
        <ParallaxShowcase
          onOpenQuote={() => handleOpenQuote('Complete Transformation')}
        />

        {/* Section 5: Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider
          onOpenQuote={() => handleOpenQuote('Before & After Restoration')}
        />

        {/* Section 6A: Testimonial Card with Layered Cards (Matching Image 4 Top) */}
        <TestimonialSection />

        {/* Section 6B: Popular Services Directory with Tabs (Matching Image 4 Bottom) */}
        <PopularServicesDirectory
          onSelectService={(service) => handleOpenQuote(service)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quote / Instant Estimator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* Floating Bottom Quick Action Bar on Mobile */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full shadow-2xl p-2 flex items-center justify-between gap-2">
        <a
          href="tel:8135553326"
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-full transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#1EA0B8]" />
          <span>Call Us</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#111827] text-white text-xs font-bold py-2.5 rounded-full shadow-md active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-[#1EA0B8]" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}
