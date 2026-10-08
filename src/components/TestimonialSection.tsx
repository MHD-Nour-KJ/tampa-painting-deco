import React, { useState } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'I needed an interior refresh for my home office and living room, and Tampa Painting Deco did it in just 1 day. The process was super easy, clean, and the walls look completely brand new!',
      author: 'Priya Sharma',
      location: 'South Tampa, FL',
      service: 'Interior Living & Office Painting',
      avatarImg: '/images/projects/decorative_texture_wall.jpg'
    },
    {
      quote:
        'We saved over $8,000 by refinishing our kitchen cabinets instead of replacing them. The factory spray finish is so smooth and durable against kids and humidity. True masters of their craft.',
      author: 'Marcus & Elena Vance',
      location: 'Clearwater Beach, FL',
      service: 'Full Kitchen Cabinet Lacquering',
      avatarImg: '/images/projects/cabinet_split_after.jpg'
    },
    {
      quote:
        'Fast response, crystal clear estimate, and zero mess left behind. They repaired drywall settling cracks that other painters refused to touch and blended the texture flawlessly.',
      author: 'David Rodriguez',
      location: 'Carrollwood, FL',
      service: 'Drywall Repair & Full Interior',
      avatarImg: '/images/projects/interior_dining_finish.jpg'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Pill (Matching Image 4 Top) */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-[#1EA0B8]" />
            <span>People like you trust our service</span>
            <Sparkles className="w-3.5 h-3.5 text-[#1EA0B8]" />
          </div>
        </div>

        {/* Wide Dark Testimonial Card (Matching Image 4 Top) */}
        <div className="bg-[#111827] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Avatar with Layered Colored Offset Backing Cards (Exact Match to Image 4) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64">
                {/* Layered Card 3 (Bottom Blue) */}
                <div
                  className="absolute inset-0 rounded-3xl bg-[#3B82F6] transform rotate-12 translate-x-6 translate-y-2 opacity-80"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Layered Card 2 (Middle Pink) */}
                <div
                  className="absolute inset-0 rounded-3xl bg-[#EC4899] transform rotate-6 translate-x-3 translate-y-1 opacity-90"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Layered Card 1 (Top Coral) */}
                <div
                  className="absolute inset-0 rounded-3xl bg-[#F97316] transform -rotate-2 -translate-x-1"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Foreground Photo */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <img
                    src={current.avatarImg}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Quote & Details */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Five Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-300 ml-2 font-medium">Verified Homeowner</span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed tracking-tight mb-8">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {current.author}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-normal">
                    {current.location} • <span className="text-[#1EA0B8] font-medium">{current.service}</span>
                  </span>
                </div>
              </div>

              {/* Prev / Next Circular Navigation Arrows (Bottom Right) */}
              <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#1EA0B8] hover:bg-[#167c8f] flex items-center justify-center text-white transition-all active:scale-95 shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
