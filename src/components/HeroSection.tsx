import React, { useState } from 'react';
import { Search, MapPin, ArrowUpRight, Star, CheckCircle2, Paintbrush, Home, Users } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (service: string, location: string) => void;
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onOpenQuote }) => {
  const [location, setLocation] = useState('Tampa, FL');
  const [serviceQuery, setServiceQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(serviceQuery, location);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-white">
      {/* Whimsical Left Illustration Element (Matching Reference Image 1) */}
      <div className="hidden lg:flex absolute left-4 xl:left-12 top-32 z-10 animate-float items-center pointer-events-none">
        <div className="relative">
          {/* Stylized vector character with sign */}
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            {/* Body */}
            <circle cx="50" cy="30" r="16" fill="#111827" />
            <path d="M46 22C46 16 54 16 54 22C54 28 46 28 46 22Z" fill="#FBBF24" />
            <path d="M38 52C38 46 62 46 62 52L66 110H34L38 52Z" fill="#047857" />
            <path d="M38 110L32 170H42L48 110" fill="#111827" />
            <path d="M58 110L64 170H54L48 110" fill="#111827" />
            {/* Arm holding board */}
            <path d="M62 60L90 48" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
            {/* The board she holds */}
            <rect x="75" y="24" width="70" height="42" rx="8" fill="#3B82F6" />
            <rect x="82" y="32" width="22" height="6" rx="3" fill="#FFFFFF" />
            <rect x="82" y="44" width="45" height="4" rx="2" fill="#93C5FD" />
            <rect x="82" y="52" width="35" height="4" rx="2" fill="#93C5FD" />
            <circle cx="132" cy="45" r="8" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Whimsical Right Illustration Element (Matching Reference Image 1) */}
      <div className="hidden lg:flex absolute right-6 xl:right-14 top-40 z-10 animate-float-delayed items-center pointer-events-none">
        <div className="relative">
          {/* Stylized vector character with laptop */}
          <svg width="130" height="170" viewBox="0 0 130 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            <circle cx="68" cy="90" r="42" fill="#D1FAE5" />
            {/* Person sitting */}
            <circle cx="70" cy="40" r="14" fill="#111827" />
            <path d="M60 60C60 54 80 54 80 60L86 105H54L60 60Z" fill="#F87171" />
            {/* Cross-legged pants */}
            <path d="M50 105C42 120 70 145 92 135C102 128 85 110 70 105H50Z" fill="#3B82F6" />
            {/* Laptop */}
            <rect x="42" y="85" width="34" height="22" rx="3" fill="#111827" />
            <rect x="36" y="105" width="46" height="4" rx="2" fill="#94A3B8" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20">
        {/* Main Display Headline (Matching Image 1) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-[1.12] mb-5">
          Painting & Deco Experts at <br className="hidden sm:inline" />
          Your{' '}
          <span className="inline-flex items-center align-middle mx-1 relative">
            <span className="inline-block relative">
              <svg className="w-10 h-10 sm:w-14 sm:h-14 inline-block text-[#1EA0B8] stroke-current stroke-[2.2] fill-none" viewBox="0 0 24 24">
                <path d="M3 10.5L12 3l9 7.5v10a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20.5v-10z" />
                <path d="M9 22V12h6v10" />
                <circle cx="12" cy="7.5" r="1.5" className="fill-[#1EA0B8]" />
              </svg>
            </span>
          </span>{' '}
          Door
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-9 sm:mb-12">
          Expert home painting and decorative finishes delivered to your doorstep. Get reliable, certified craftsmanship with ease. Fast, clean, and tailored to your space across Tampa Bay.
        </p>

        {/* Interactive Search / Booking Bar (Matching Image 1) */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-3xl mx-auto bg-white rounded-full sm:rounded-full p-2 sm:p-2.5 shadow-xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 transition-shadow hover:shadow-2xl"
        >
          {/* Location Selector */}
          <div className="w-full sm:w-auto flex items-center gap-2.5 px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-slate-200">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-xs sm:text-sm font-semibold text-slate-800 bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="Tampa, FL">Tampa, FL</option>
              <option value="South Tampa">South Tampa</option>
              <option value="St. Petersburg">St. Petersburg</option>
              <option value="Clearwater">Clearwater</option>
              <option value="Brandon">Brandon</option>
              <option value="Carrollwood">Carrollwood</option>
            </select>
          </div>

          {/* Service Search Input */}
          <div className="w-full flex-1 flex items-center px-3 py-1 sm:py-0">
            <input
              type="text"
              value={serviceQuery}
              onChange={(e) => setServiceQuery(e.target.value)}
              placeholder="What service are you looking for? (e.g. Interior, Cabinets, Accent Wall)"
              className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-hidden"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all shrink-0 active:scale-95 shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* 3 Feature Cards Row (Matching Image 1) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 1: Fast booking, instant help */}
          <div
            onClick={onOpenQuote}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src="/images/projects/hero_card_1.jpg"
              alt="Professional craftsman finished interior accent wall"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
              <div className="w-full flex items-center justify-between text-white">
                <span className="font-bold text-base sm:text-lg tracking-tight">
                  Fast booking, instant help
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Skilled experts & 98% satisfaction badge */}
          <div
            onClick={onOpenQuote}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <img
              src="/images/projects/hero_card_2.jpg"
              alt="Skilled painting experts interior finish"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Top Text Overlay */}
            <div className="relative z-10 p-5 bg-gradient-to-b from-black/70 via-black/20 to-transparent">
              <span className="text-white font-bold text-base sm:text-lg drop-shadow-xs">
                Skilled experts, reliable service
              </span>
            </div>

            {/* Bottom 98% Satisfaction Badge (Exact match to reference image 1) */}
            <div className="relative z-10 p-4">
              <div className="bg-[#4F46E5] text-white rounded-2xl p-3.5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="/images/projects/living_room_after.jpg"
                      alt="Customer review avatar"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="/images/brand/logo-badge.jpg"
                      alt="Verified badge"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold leading-none tracking-tight">
                      98%
                    </span>
                    <span className="text-[10px] text-blue-100 font-medium">
                      Customer satisfaction
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Safe, easy, on-demand */}
          <div
            onClick={onOpenQuote}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src="/images/projects/hero_card_3.jpg"
              alt="Quality decorative wall inspection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
              <div className="w-full flex items-center justify-between text-white">
                <span className="font-bold text-base sm:text-lg tracking-tight">
                  Safe, easy, on-demand
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
