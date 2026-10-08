import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Sparkles, Paintbrush, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Interior Painting', href: '#services', desc: 'Walls, ceilings, trims & doors' },
    { name: 'Cabinet Refinishing', href: '#services', desc: 'Factory-smooth spray coatings' },
    { name: 'Exterior Weather Shield', href: '#services', desc: 'Florida heat & moisture protection' },
    { name: 'Decorative Textures', href: '#services', desc: 'Limewash, plaster & accent walls' },
    { name: 'Drywall & Crack Repair', href: '#services', desc: 'Flawless seamless patching' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center overflow-hidden p-1 group-hover:scale-105 transition-transform">
              <img
                src="/images/brand/logo.png"
                alt="Tampa Painting Deco Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to stylized icon if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-[#111827] tracking-tight leading-none flex items-center gap-1">
                Tampa Painting Deco
              </span>
              <span className="text-[11px] font-medium text-[#1EA0B8] tracking-normal mt-0.5">
                Tampa Bay, Florida
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#1EA0B8] transition-colors py-2"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  {serviceLinks.map((service, idx) => (
                    <a
                      key={idx}
                      href={service.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#1EA0B8] transition-colors">
                        {service.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{service.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="text-sm font-semibold text-slate-700 hover:text-[#1EA0B8] transition-colors"
            >
              About us
            </a>
            <a
              href="#before-after"
              className="text-sm font-semibold text-slate-700 hover:text-[#1EA0B8] transition-colors"
            >
              Before & After
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-slate-700 hover:text-[#1EA0B8] transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-700 hover:text-[#1EA0B8] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:8135553326"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1EA0B8]" />
              <span>(813) 555-DECO</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#111827] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 space-y-4 animate-in fade-in slide-in-from-top-3">
            <div className="space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                About us
              </a>
              <a
                href="#before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Before & After
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:8135553326"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 py-2.5 rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#1EA0B8]" />
                <span>Call (813) 555-DECO</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#1EA0B8] text-white text-sm font-semibold py-3 rounded-xl shadow-xs"
              >
                <span>Get an Instant Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
