import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'I needed an interior refresh for my home office and living room, and Tampa Painting Deco did it in just 1 day. The process was super easy, clean, and the walls look completely brand new!',
      author: 'Priya Sharma',
      location: 'South Tampa, FL',
      avatarImg: '/images/testimonials/priya_sharma.jpg'
    },
    {
      quote:
        'We saved over $8,000 by refinishing our kitchen cabinets instead of replacing them. The factory spray finish is so smooth and durable against kids and humidity. True masters of their craft.',
      author: 'Elena Vance',
      location: 'Clearwater Beach, FL',
      avatarImg: '/images/testimonials/elena_vance.jpg'
    },
    {
      quote:
        'Fast response, crystal clear estimate, and zero mess left behind. They repaired drywall settling cracks that other painters refused to touch and blended the texture flawlessly.',
      author: 'David Rodriguez',
      location: 'Carrollwood, FL',
      avatarImg: '/images/testimonials/david_rodriguez.jpg'
    }
  ];

  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Minimalist Header Matching Imagined Concept */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-700 flex items-center justify-center gap-2">
            <span className="text-slate-400">•</span>
            <span>People like you trust our service</span>
            <span className="text-slate-400">•</span>
          </p>
        </div>

        {/* Wide Dark Testimonial Card */}
        <div className="bg-[#0B1120] text-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clean Layered Fanning Cards (Matching Reference Exactly) */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative w-48 h-60 sm:w-56 sm:h-72">
                {/* Layered Card 3 (Back Periwinkle/Blue) */}
                <div
                  className="absolute top-0 bottom-3.5 inset-x-0 rounded-2xl bg-[#5D72E4] origin-bottom-left transform translate-x-10 sm:translate-x-12 rotate-[10deg] shadow-lg transition-transform duration-300 z-0"
                  aria-hidden="true"
                />

                {/* Layered Card 2 (Middle Rose/Pink) */}
                <div
                  className="absolute top-0 bottom-2 inset-x-0 rounded-2xl bg-[#F4A6BA] origin-bottom-left transform translate-x-5 sm:translate-x-6 rotate-[5deg] shadow-md transition-transform duration-300 z-10"
                  aria-hidden="true"
                />

                {/* Layered Card 1 (Front Photo Card) */}
                <div className="relative z-20 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10">
                  <img
                    key={current.avatarImg}
                    src={current.avatarImg}
                    alt={current.author}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Clean Editorial Quote, Author & Controls */}
            <div className="md:col-span-7 flex flex-col justify-between min-h-[220px] sm:min-h-[250px]">
              {/* Quote */}
              <div className="mb-6 sm:mb-8">
                <blockquote
                  key={`quote-${activeIndex}`}
                  className="text-lg sm:text-xl lg:text-2xl font-normal text-slate-100 leading-relaxed tracking-normal transition-opacity duration-300"
                >
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Bottom Row: Author details on left, Controls on right */}
              <div className="flex items-end justify-between pt-2">
                {/* Author Info */}
                <div key={`author-${activeIndex}`} className="flex flex-col transition-opacity duration-300">
                  <span className="text-base sm:text-lg font-medium text-white tracking-normal">
                    {current.author}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5">
                    {current.location}
                  </span>
                </div>

                {/* Circular Arrow Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-all duration-200 active:scale-95 border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#5D72E4] hover:bg-[#4d62d6] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-[#5D72E4]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
