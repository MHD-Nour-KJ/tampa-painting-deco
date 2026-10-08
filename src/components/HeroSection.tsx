import React from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

interface HeroSectionProps {
  onSearch?: (service: string, location: string) => void;
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-30 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Main Display Headline (Matching Reference 1 Typography & Proportions) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.14] mb-3 sm:mb-4">
          Painting & Deco Experts at <br className="hidden sm:inline" />
          Your{' '}
          <span className="inline-flex items-center align-middle mx-1 relative -top-0.5 sm:-top-1">
            <svg
              className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 inline-block text-[#1EA0B8] stroke-current stroke-[2.2] fill-none transition-transform hover:scale-110 duration-300"
              viewBox="0 0 28 28"
            >
              <path
                d="M4 12.5L14 3.5l10 9V23a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12.5z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M19 8V5h-3v2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M10 25v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="10" r="1.5" className="fill-[#1EA0B8] stroke-none" />
            </svg>
          </span>{' '}
          Door
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-7">
          Expert home painting and decorative finishes delivered to your doorstep. Get reliable, certified craftsmanship with ease. Fast, clean, and tailored to your space across Tampa Bay.
        </p>

        {/* Clean Direct Call to Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-7 sm:mb-9">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="tel:8135553326"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-slate-200/90 shadow-xs hover:shadow-md transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#1EA0B8]" />
            <span>(813) 555-DECO</span>
          </a>
        </div>
      </div>

      {/* 3 Prominent Hero Cards (Matching Reference Image 1 Layout & Proportions) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {/* Card 1: Fast booking, instant help (Full Height Craftsman Portrait) */}
          <div
            onClick={onOpenQuote}
            className="group relative h-[380px] sm:h-[410px] lg:h-[440px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
          >
            <img
              src="/images/projects/hero_card_1.jpg"
              alt="Skilled master craftsman painting fine decorative trim in workshop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Bottom floating pill label without darkening the photo */}
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg border border-white/60 pointer-events-auto">
                <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight">
                  Fast booking, instant help
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-white/60 flex items-center justify-center text-slate-900 group-hover:bg-[#111827] group-hover:text-white transition-all duration-300 pointer-events-auto group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Card 2: Two Vertically Stacked Cards (Service Photo + 98% Satisfaction Card) */}
          <div className="flex flex-col gap-3.5 sm:gap-4 h-[380px] sm:h-[410px] lg:h-[440px]">
            {/* Top Sub-Card: Skilled Experts Photo */}
            <div
              onClick={onOpenQuote}
              className="flex-1 relative rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <img
                src="/images/projects/hero_card_2.jpg"
                alt="Friendly painting specialist consulting with homeowner in modern kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-lg border border-white/60 pointer-events-auto">
                  <span className="font-bold text-xs text-slate-900 tracking-tight">
                    Skilled experts, reliable service
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-lg border border-white/60 flex items-center justify-center text-slate-900 group-hover:bg-[#111827] group-hover:text-white transition-all duration-300 pointer-events-auto group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Bottom Sub-Card: 98% Customer Satisfaction Metric Card */}
            <div
              onClick={onOpenQuote}
              className="relative rounded-[22px] sm:rounded-[26px] px-5 py-3.5 sm:py-4 bg-[#2563EB] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-between shrink-0"
            >
              <div className="flex items-center gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                    src="/images/projects/living_room_after.jpg"
                    alt="Verified homeowner review"
                  />
                  <img
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                    src="/images/brand/logo-badge.jpg"
                    alt="Tampa Painting Deco certified badge"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold leading-none tracking-tight">
                    98%
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-blue-100 font-medium mt-0.5">
                    + Customer satisfaction
                  </span>
                </div>
              </div>

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-white group-hover:text-[#2563EB] transition-colors">
                <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white group-hover:text-[#2563EB] transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 3: Safe, easy, on-demand (Full Height Craftsman Inspection Portrait) */}
          <div
            onClick={onOpenQuote}
            className="group relative h-[380px] sm:h-[410px] lg:h-[440px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
          >
            <img
              src="/images/projects/hero_card_3.jpg"
              alt="Craftsman examining smooth painted wall with color swatches"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Bottom floating pill label without darkening the photo */}
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg border border-white/60 pointer-events-auto">
                <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight">
                  Safe, easy, on-demand
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-white/60 flex items-center justify-center text-slate-900 group-hover:bg-[#111827] group-hover:text-white transition-all duration-300 pointer-events-auto group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
