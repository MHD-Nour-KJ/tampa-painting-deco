import React, { useState } from 'react';
import { ArrowUpRight, Paintbrush, Layers, SprayCan, ShieldCheck, Ruler, Sparkles, Hammer, Droplet } from 'lucide-react';

interface PopularServicesDirectoryProps {
  onSelectService: (serviceName: string) => void;
}

export const PopularServicesDirectory: React.FC<PopularServicesDirectoryProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'popular' | 'top' | 'trending'>('popular');

  const tabData = {
    popular: [
      {
        name: 'Interior Wall Painting',
        desc: 'Bedrooms, halls, accent walls with zero drip masking',
        icon: Paintbrush,
        badge: 'Most Booked'
      },
      {
        name: 'Kitchen Cabinet Lacquering',
        desc: 'Ultra-durable factory satin spray finish',
        icon: SprayCan,
        badge: 'High Demand'
      },
      {
        name: 'Drywall Repair & Patching',
        desc: 'Holes, stress cracks & texture feathering',
        icon: Hammer,
        badge: 'Same-Day Service'
      },
      {
        name: 'Stucco & Exterior Sealing',
        desc: 'Elastomeric weatherproofing for Florida rain & sun',
        icon: ShieldCheck,
        badge: 'Guaranteed'
      },
      {
        name: 'Trim & Baseboard Enamel',
        desc: 'Semi-gloss durable finish on doors and crown moldings',
        icon: Ruler,
        badge: 'Precision'
      },
      {
        name: 'Ceiling Popcorn Removal',
        desc: 'Clean scrape and modern smooth skim coat',
        icon: Layers,
        badge: 'Modernizing'
      }
    ],
    top: [
      {
        name: 'Venetian Plaster & Texture',
        desc: 'Hand-troweled Italian marble plaster textures',
        icon: Sparkles,
        badge: 'Luxury Finish'
      },
      {
        name: 'Color Consultation & Matching',
        desc: 'On-site lighting check with large-format sample boards',
        icon: Droplet,
        badge: 'Expert Advice'
      },
      {
        name: 'Commercial Office Repaint',
        desc: 'After-hours low-odor fast turnaround repainting',
        icon: Paintbrush,
        badge: 'Commercial'
      },
      {
        name: 'Patio & Deck Staining',
        desc: 'Deep UV penetration stains for coastal weather',
        icon: ShieldCheck,
        badge: 'Exterior'
      },
      {
        name: 'High Ceiling Foyer Painting',
        desc: 'Two-story staging with professional safety scaffolding',
        icon: Layers,
        badge: 'Specialized'
      },
      {
        name: 'Cabinet Hardware Realignment',
        desc: 'New hinges, pulls & precise alignment with paint',
        icon: Hammer,
        badge: 'Hardware'
      }
    ],
    trending: [
      {
        name: 'Limewash Accent Finishes',
        desc: 'Organic chalky Roman limewash with natural breathability',
        icon: Sparkles,
        badge: 'Viral Design'
      },
      {
        name: 'Dark Moody Bedroom Walls',
        desc: 'Deep olive, charcoal & navy velvet matte finishes',
        icon: Paintbrush,
        badge: 'Modern Trend'
      },
      {
        name: 'Two-Tone Kitchen Islands',
        desc: 'Contrasting bold island lacquer with neutral perimeters',
        icon: SprayCan,
        badge: 'Popular'
      },
      {
        name: 'Garage Floor Epoxy Coating',
        desc: 'Industrial polyaspartic flake coating for vehicles',
        icon: ShieldCheck,
        badge: 'Durable'
      },
      {
        name: 'Shiplap & Board Batten Spray',
        desc: 'Uniform spray coverage over millwork seams',
        icon: Ruler,
        badge: 'Clean Lines'
      },
      {
        name: 'Brick Fireplace Whitewashing',
        desc: 'Light German schmear & masonry wash',
        icon: Layers,
        badge: 'Restoration'
      }
    ]
  };

  const currentList = tabData[activeTab];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFBFD] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs (Matching Image 4 Bottom) */}
        <div className="flex items-center gap-6 sm:gap-8 pb-8 mb-8 border-b border-slate-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('popular')}
            className={`text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors pb-2 border-b-2 ${
              activeTab === 'popular'
                ? 'text-[#2563EB] border-[#2563EB]'
                : 'text-slate-400 border-transparent hover:text-slate-700'
            }`}
          >
            Popular Services
          </button>
          <span className="text-slate-300 font-light">•</span>
          <button
            onClick={() => setActiveTab('top')}
            className={`text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors pb-2 border-b-2 ${
              activeTab === 'top'
                ? 'text-[#2563EB] border-[#2563EB]'
                : 'text-slate-400 border-transparent hover:text-slate-700'
            }`}
          >
            Top Skills
          </button>
          <span className="text-slate-300 font-light">•</span>
          <button
            onClick={() => setActiveTab('trending')}
            className={`text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors pb-2 border-b-2 ${
              activeTab === 'trending'
                ? 'text-[#2563EB] border-[#2563EB]'
                : 'text-slate-400 border-transparent hover:text-slate-700'
            }`}
          >
            Trending Skills
          </button>
        </div>

        {/* 2-Column List Grid of Service Items (Matching Image 4 Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectService(item.name)}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Service Icon inside soft container */}
                  <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-[#E6F7FA] text-slate-700 group-hover:text-[#1EA0B8] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Service Info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1EA0B8] transition-colors truncate">
                        {item.name}
                      </h4>
                      <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-normal truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Action Button Pill */}
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#111827] text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
