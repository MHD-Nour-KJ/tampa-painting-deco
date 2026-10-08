import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle, ArrowRight, Paintbrush } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenQuote: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuote }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Living Room Accent Wall',
      subtitle: 'From dull faded drywall to contemporary deep teal designer finish',
      beforeImg: '/images/projects/living_room_before.jpg',
      afterImg: '/images/projects/living_room_after.jpg',
      beforeTags: ['Faded builder beige', 'Visible nail pops', 'Dull lighting bounce'],
      afterTags: ['Bespoke designer coat', 'Satin washable sheen', 'Immaculate trim lines'],
      timeframe: 'Completed in 1 day'
    },
    {
      title: 'Kitchen Cabinet Spraying',
      subtitle: 'From worn builder-grade honey oak to factory-grade ultra-smooth satin',
      beforeImg: '/images/projects/cabinet_before.jpg',
      afterImg: '/images/projects/cabinet_after.jpg',
      beforeTags: ['Yellowed varnish', 'Grease & surface wear', 'Outdated wood grain'],
      afterTags: ['Hardened urethane lacquer', 'Silky spray texture', '80% cheaper than remodel'],
      timeframe: 'Completed in 3 days'
    },
    {
      title: 'Drywall & Texture Smoothing',
      subtitle: 'Restoring damaged plaster and water-stained corners to seamless perfection',
      beforeImg: '/images/projects/drywall_before.jpg',
      afterImg: '/images/projects/drywall_after.jpg',
      beforeTags: ['Water blemishes', 'Stress fractures', 'Rough joint tape'],
      afterTags: ['Seamless feathering', 'Zero visible seams', 'Mold-resistant primer'],
      timeframe: 'Completed in 1 day'
    },
    {
      title: 'Modern Entryway Refresh',
      subtitle: 'Comprehensive trim, ceiling, and wall restoration with crisp contrast',
      beforeImg: '/images/projects/entry_before.jpg',
      afterImg: '/images/projects/entry_after.jpg',
      beforeTags: ['Scuffed baseboards', 'Uneven patch coats', 'Rough texture'],
      afterTags: ['Dustless sanded surface', 'Crisp ceiling borders', 'Color-matched durability'],
      timeframe: 'Completed in 2 days'
    }
  ];

  const currentProject = projects[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            See the before & after difference.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Drag the slider across actual projects completed by Tampa Painting Deco to see how professional prep and premium coatings revitalize any space.
          </p>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  setSliderPos(50);
                }}
                className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all ${
                  activeTab === idx
                    ? 'bg-[#111827] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-5 sm:p-8 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Visual Slider (Left/Main) */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-md group"
              >
                {/* After Image (Background layer) */}
                <img
                  src={currentProject.afterImg}
                  alt={`${currentProject.title} After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Clipped layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentProject.beforeImg}
                    alt={`${currentProject.title} Before`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
                  />
                  {/* Before Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Before
                  </div>
                </div>

                {/* After Badge */}
                <div className="absolute top-4 right-4 bg-[#1EA0B8] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  After
                </div>

                {/* Draggable Vertical Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center border-2 border-slate-200">
                    <MoveHorizontal className="w-5 h-5 text-[#1EA0B8]" />
                  </div>
                </div>
              </div>

              {/* Slider Hint */}
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500 font-medium">
                <MoveHorizontal className="w-4 h-4 text-slate-400" />
                <span>Drag left or right to compare</span>
              </div>
            </div>

            {/* Project Details & Value (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <span className="text-xs font-bold text-[#1EA0B8] mb-1 block">
                  {currentProject.timeframe}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {currentProject.subtitle}
                </p>

                {/* Comparison Details Breakdown */}
                <div className="space-y-4">
                  <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-4">
                    <span className="text-xs font-bold text-rose-900 block mb-2">
                      Original Condition
                    </span>
                    <ul className="space-y-1.5">
                      {currentProject.beforeTags.map((tag, i) => (
                        <li key={i} className="text-xs text-rose-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4">
                    <span className="text-xs font-bold text-emerald-900 block mb-2">
                      Tampa Painting Deco Finish
                    </span>
                    <ul className="space-y-1.5">
                      {currentProject.afterTags.map((tag, i) => (
                        <li key={i} className="text-xs text-emerald-800 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={onOpenQuote}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-md active:scale-95"
                >
                  <span>Get A Quote For Your Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
