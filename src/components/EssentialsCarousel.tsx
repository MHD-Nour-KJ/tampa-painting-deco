import React, { useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface EssentialsCarouselProps {
  onSelectService: (serviceName: string) => void;
}

export const EssentialsCarousel: React.FC<EssentialsCarouselProps> = ({ onSelectService }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const essentials = [
    {
      title: 'Painting Services',
      tabColor: 'bg-[#92400E] text-white',
      image: '/images/projects/hero_craftsman_accent.jpg',
      desc: 'Full-room walls, ceilings, baseboards & interior trims'
    },
    {
      title: 'Exterior Coating',
      tabColor: 'bg-[#2563EB] text-white',
      image: '/images/projects/exterior_patio_coating.jpg',
      desc: 'Weatherproof stucco sealing, fascias & patio walls'
    },
    {
      title: 'Wall Prep & Patch',
      tabColor: 'bg-[#DB2777] text-white',
      image: '/images/projects/wall_before_after_before.jpg',
      desc: 'Skim coating, nail pop repair & texture matching'
    },
    {
      title: 'Drywall Repair',
      tabColor: 'bg-[#EA580C] text-white',
      image: '/images/projects/kitchen_finish_split_after.jpg',
      desc: 'Crack restoration, water stain sealing & smoothing'
    },
    {
      title: 'Kitchen & Bath Lacquer',
      tabColor: 'bg-[#0284C7] text-white',
      image: '/images/projects/cabinet_split_after.jpg',
      desc: 'Ultra-durable moisture-resistant cabinet finishes'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Matching Image 3 Top) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1EA0B8]" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Painting & decor essentials
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="hidden md:block max-w-md text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-right">
              Explore Tampa Painting Deco essentials: expert painting, exterior protection, drywall smoothing, and cabinet refinishing. Fast, reliable doorstep service.
            </p>
            {/* Carousel Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Cards Row / Carousel (Matching Image 3 Top) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {essentials.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectService(item.title)}
              className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px] bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Colored Top Header Tab */}
              <div className={`${item.tabColor} px-4 py-2 text-xs font-bold tracking-tight text-center truncate`}>
                {item.title}
              </div>

              {/* Image Area with Zoom & Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center text-slate-800 group-hover:bg-[#111827] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="p-3.5 bg-white">
                <p className="text-xs text-slate-600 font-medium line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
