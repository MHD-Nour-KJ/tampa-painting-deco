import React from 'react';
import { Sparkles, ArrowRight, Paintbrush, Layers, ShieldCheck, Palette, Wand2 } from 'lucide-react';

interface TopServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const TopServicesSection: React.FC<TopServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'interior',
      title: 'Interior Living Spaces',
      desc: 'Transform your home with dustless prep, razor-sharp trim lines, and bespoke interior wall finishes tailored for you!',
      bgClass: 'bg-[#3E1225] text-white',
      descClass: 'text-rose-200/90',
      iconBg: 'bg-rose-500/20 text-rose-300',
      icon: Paintbrush
    },
    {
      id: 'cabinets',
      title: 'Cabinet Refinishing',
      desc: 'Get factory-smooth spray lacquering for kitchen & vanity cabinets at a fraction of replacement cost!',
      bgClass: 'bg-[#FCE7F3] text-[#831843]',
      descClass: 'text-[#9D174D]/90',
      iconBg: 'bg-pink-300/40 text-[#831843]',
      icon: Layers
    },
    {
      id: 'exterior',
      title: 'Exterior Weather Shield',
      desc: 'Protect Florida stucco, brick, and masonry from intense UV rays and coastal humidity with elastic weatherproof sealers!',
      bgClass: 'bg-[#1E40AF] text-white',
      descClass: 'text-blue-200/90',
      iconBg: 'bg-blue-400/20 text-blue-200',
      icon: ShieldCheck
    },
    {
      id: 'decorative',
      title: 'Decorative Textures',
      desc: 'Limewash, Venetian plaster, custom accent feature walls, and architectural wood trim detailing for timeless elegance!',
      bgClass: 'bg-[#A7F3D0] text-[#065F46]',
      descClass: 'text-[#047857]/90',
      iconBg: 'bg-emerald-300/40 text-[#065F46]',
      icon: Palette
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Image 2) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1EA0B8]" />
              <span>Popular</span>
              <span className="text-slate-300">|</span>
              <span>New</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Check out our top services for you.
            </h2>
          </div>

          <div className="max-w-md flex flex-col sm:items-start md:items-end gap-4">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-left md:text-right">
              Discover top on-demand services: interior living transformations, cabinet refinishing, exterior weatherproofing, and decorative accent finishes.
            </p>
            <button
              onClick={() => onSelectService('All Services')}
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Colored Service Cards Grid (Matching Image 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectService(item.title)}
                className={`${item.bgClass} rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
              >
                <div>
                  {/* Top Circle Icon */}
                  <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Description */}
                <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10">
                  <p className={`text-xs sm:text-sm leading-relaxed ${item.descClass} font-medium`}>
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold underline-offset-4 group-hover:underline">
                    <span>Learn details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
