import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B0F19] text-white pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Info (2 Columns on large) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-white p-1 flex items-center justify-center">
                <img
                  src="/images/brand/logo.png"
                  alt="Tampa Painting Deco Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  Tampa Painting Deco
                </span>
                <span className="text-[11px] text-[#1EA0B8] font-medium block">
                  Tampa painting deco LLC
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm mb-6">
              Premier residential and commercial painting, cabinet spray lacquering, and custom decorative finishes across the greater Tampa Bay metropolitan area.
            </p>

            {/* Social Link */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/el.fahd.9469"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
                aria-label="Visit Tampa Painting Deco on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <span className="text-xs text-slate-400 font-medium">
                Follow our daily project stories on Facebook
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interior Painting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cabinet Refinishing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Exterior Weather Shield</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Drywall & Patch Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Decorative Textures</a>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Tampa Service Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>South Tampa & Hyde Park</li>
              <li>Downtown & Channelside</li>
              <li>Carrollwood & Northdale</li>
              <li>Brandon & Riverview</li>
              <li>St. Petersburg & Clearwater</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1EA0B8] shrink-0 mt-0.5" />
                <a href="tel:8135553326" className="text-white font-semibold hover:underline">
                  (813) 555-DECO
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1EA0B8] shrink-0 mt-0.5" />
                <span>Tampa, Florida 33606</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1EA0B8] shrink-0 mt-0.5" />
                <span>Mon - Sat: 7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Tampa Painting Deco LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed & Insured Florida Contractor</span>
            </span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
