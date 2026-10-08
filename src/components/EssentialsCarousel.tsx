import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EssentialsCarouselProps {
  onSelectService: (serviceName: string) => void;
}

export const EssentialsCarousel: React.FC<EssentialsCarouselProps> = ({ onSelectService }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 5 core services matching reference layout, color blocking and craftsman imagery
  const essentials = [
    {
      title: 'Painting Services',
      tabBg: 'bg-[#7C2D12]',
      borderColor: 'border-[#7C2D12]',
      textColor: 'text-white',
      image: '/images/projects/essentials_1_painting.jpg'
    },
    {
      title: 'Exterior Coating',
      tabBg: 'bg-[#2563EB]',
      borderColor: 'border-[#2563EB]',
      textColor: 'text-white',
      image: '/images/projects/essentials_2_exterior.jpg'
    },
    {
      title: 'Wall Prep & Patch',
      tabBg: 'bg-[#FCE7F3]',
      borderColor: 'border-[#F472B6]',
      textColor: 'text-[#831843]',
      image: '/images/projects/essentials_3_prep.jpg'
    },
    {
      title: 'Drywall Repair',
      tabBg: 'bg-[#EA580C]',
      borderColor: 'border-[#EA580C]',
      textColor: 'text-white',
      image: '/images/projects/essentials_4_drywall.jpg'
    },
    {
      title: 'Kitchen & Bath Lacquer',
      tabBg: 'bg-[#0284C7]',
      borderColor: 'border-[#0284C7]',
      textColor: 'text-white',
      image: '/images/projects/essentials_5_lacquer.jpg'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching imagined reference layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-xs font-medium text-slate-700 shadow-2xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              <span>Our 5 Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#111827] tracking-tight leading-tight">
              Painting & decor essentials
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-left md:text-right">
              Explore Tampa Painting Deco essentials: expert painting, exterior protection, drywall smoothing, and cabinet refinishing. Fast, reliable doorstep service.
            </p>
          </div>
        </div>

        {/* Carousel container with floating side navigation chevrons */}
        <div className="relative">
          {/* Left chevron button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center transition-all border border-slate-200/80 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#1EA0B8]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Right chevron button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center transition-all border border-slate-200/80 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#1EA0B8]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* 5 Cards Row matching imagined reference card anatomy */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {essentials.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectService(item.title)}
                className={`snap-start shrink-0 w-[230px] sm:w-[250px] md:w-[260px] lg:w-auto lg:flex-1 bg-white rounded-[22px] overflow-hidden border-2 ${item.borderColor} shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col`}
              >
                {/* Top colored service tab */}
                <div className={`${item.tabBg} ${item.textColor} py-2.5 px-3 text-xs sm:text-sm font-semibold tracking-tight text-center truncate`}>
                  {item.title}
                </div>

                {/* Full-bleed portrait craftsman image */}
                <div className="relative h-[310px] sm:h-[340px] md:h-[370px] overflow-hidden bg-slate-100 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
