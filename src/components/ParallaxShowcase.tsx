import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Shield, Droplets, Clock, ArrowRight } from 'lucide-react';

interface ParallaxShowcaseProps {
  onOpenQuote: () => void;
}

export const ParallaxShowcase: React.FC<ParallaxShowcaseProps> = ({ onOpenQuote }) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate relative scroll position when section is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Translate background smoothly
        setOffsetY((progress - 0.5) * 80);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[540px] sm:h-[620px] overflow-hidden flex items-center justify-center my-12"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none transition-transform ease-out will-change-transform"
        style={{
          transform: `translateY(${offsetY}px)`,
          backgroundImage: `url('/images/projects/modern_entryway_paint.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%'
        }}
      />

      {/* Subtle clean gradient for text legibility without muddying the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A7F3D0]" />
          <span>The Tampa Bay Standard</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          Transforming Florida Homes <br className="hidden sm:inline" />
          One Room At A Time.
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 font-normal leading-relaxed mb-10 drop-shadow-xs">
          From historic bungalows in Ybor to modern residences in South Tampa, we combine artisan techniques with commercial-grade durability that withstands heat and moisture.
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-left">
            <div className="flex items-center gap-2 text-[#A7F3D0] mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold">Licensed & Insured</span>
            </div>
            <p className="text-xs text-slate-200 font-medium">
              Full coverage protection on every job site.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-left">
            <div className="flex items-center gap-2 text-[#93C5FD] mb-1">
              <Droplets className="w-4 h-4" />
              <span className="text-xs font-bold">Low-VOC Paints</span>
            </div>
            <p className="text-xs text-slate-200 font-medium">
              Odor-free, family-safe Sherwin-Williams & Benjamin Moore.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-left">
            <div className="flex items-center gap-2 text-[#FBCFE8] mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold">On-Time Finish</span>
            </div>
            <p className="text-xs text-slate-200 font-medium">
              Guaranteed schedules with daily clean-ups.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenQuote}
          className="inline-flex items-center gap-2 bg-[#1EA0B8] hover:bg-[#167c8f] text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span>Claim Your Free In-Home Estimate</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
