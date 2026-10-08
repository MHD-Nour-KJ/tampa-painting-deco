import React from 'react';
import { Check, Clock, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const BentoMetricsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {/* Box 1 (Left): The secret to happy customers? Speed and reliability */}
          <div className="md:col-span-5 bg-[#FAFBFD] rounded-[30px] p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#1EA0B8] mb-2 block">
                The Customer Promise
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
                The secret to happy customers? Speed and reliability.
              </h3>
            </div>
            <div className="pt-8">
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Instant estimates, clean work sites, every time.
              </p>
            </div>
          </div>

          {/* Right Bento Grid Container */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {/* Box 2 (Blue): 48 Neighborhoods + Green Doodle */}
            <div className="relative overflow-hidden bg-[#2563EB] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[190px] shadow-sm">
              <div className="relative z-10">
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tight block leading-none">
                  48
                </span>
                <p className="text-xs sm:text-sm text-blue-100 font-medium mt-3 max-w-[200px]">
                  That's how many neighborhoods we're serving (and counting!)
                </p>
              </div>
            </div>

            {/* Box 4 (Pink): 2k+ Homes Revitalized */}
            <div className="bg-[#FCE7F3] text-[#831843] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[190px] shadow-xs">
              <div>
                <span className="text-5xl sm:text-6xl font-extrabold tracking-tight block leading-none">
                  2k+
                </span>
                <p className="text-xs sm:text-sm text-[#9D174D] font-medium mt-3">
                  Homes Revitalized
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#831843]">
                <Award className="w-4 h-4 text-[#DB2777]" />
                <span>Verified projects across Florida</span>
              </div>
            </div>

            {/* Box 3 (Warm Coral): 24/7 Available anytime */}
            <div className="relative overflow-hidden bg-[#FB923C] text-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[190px] shadow-sm">
              <div className="relative z-10">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight block leading-none">
                  24/7
                </span>
                <p className="text-xs sm:text-sm text-orange-100 font-medium mt-3">
                  Available anytime, anywhere you need us
                </p>
              </div>
            </div>

            {/* Box 5 (Mint / Emerald): Top-rated pros, fast response */}
            <div className="bg-[#A7F3D0] text-[#065F46] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[190px] shadow-xs">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                Top-rated pros, fast response, & fair pricing
              </h4>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#047857]">
                <Check className="w-4 h-4 text-[#059669]" />
                <span>Zero hidden fees or surprises</span>
              </div>
            </div>
          </div>

          {/* Box 6 (Bottom Full Row or Wide Dark Card): Trust over everything */}
          <div className="md:col-span-12 relative overflow-hidden bg-[#2D0F1E] text-white rounded-[30px] p-8 sm:p-10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative z-10 max-w-md">
              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                Trust over everything
              </h4>
              <p className="text-xs sm:text-sm text-rose-200/80 font-normal">
                Every technician is background checked, trained in dustless masking, and dedicated to leaving your home spotless.
              </p>
            </div>

            {/* Bullet points (Exact match to reference Image 3) */}
            <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-rose-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                <span>Safety-first approach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                <span>Verified pros only</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                <span>Customer-first mindset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
