import React, { useState } from 'react';
import { X, Check, Phone, MessageSquare, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Interior Painting'
}) => {
  const [service, setService] = useState(preselectedService);
  const [roomCount, setRoomCount] = useState('2-3 Rooms');
  const [timeline, setTimeline] = useState('Within 2 weeks');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: 'South Tampa',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Rough transparent estimate ranges for Tampa Bay
  const getEstimate = () => {
    if (service.includes('Cabinet')) return '$1,400 - $2,800';
    if (service.includes('Exterior')) return '$2,200 - $4,500';
    if (service.includes('Texture') || service.includes('Venetian')) return '$900 - $1,800';
    if (roomCount === '1 Room') return '$350 - $650';
    if (roomCount === '2-3 Rooms') return '$850 - $1,600';
    if (roomCount === 'Full Home') return '$2,800 - $5,400';
    return '$500 - $1,200';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] text-xs font-bold text-[#1EA0B8] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Get an instant estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Transparent ballpark pricing tailored to Tampa Bay properties.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Service Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#1EA0B8] focus:ring-1 focus:ring-[#1EA0B8]"
                >
                  <option value="Interior Painting">Interior Painting (Walls & Trims)</option>
                  <option value="Kitchen Cabinet Lacquer">Kitchen Cabinet Spraying</option>
                  <option value="Exterior Weather Shield">Exterior Stucco & Siding</option>
                  <option value="Decorative Textures">Decorative Accent & Limewash</option>
                  <option value="Drywall & Crack Repair">Drywall Repair & Texture Patch</option>
                </select>
              </div>

              {/* Scope Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Project Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 Room', '2-3 Rooms', 'Full Home'].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setRoomCount(option)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        roomCount === option
                          ? 'bg-[#111827] text-white border-[#111827]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Instant Estimate Box */}
              <div className="bg-gradient-to-r from-[#E6F7FA] to-[#D1FAE5] rounded-2xl p-4 border border-[#1EA0B8]/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block">
                    Estimated Range (Labor & Prep)
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#111827]">
                    {getEstimate()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold text-emerald-800 bg-white/70 px-2 py-1 rounded-full inline-block">
                    ✓ Free In-Person Confirmation
                  </span>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="First & Last Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#1EA0B8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(813) 000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#1EA0B8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tampa Neighborhood
                </label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-hidden"
                >
                  <option value="South Tampa">South Tampa</option>
                  <option value="Tampa Downtown & Channelside">Tampa Downtown & Channelside</option>
                  <option value="Carrollwood / North Tampa">Carrollwood / North Tampa</option>
                  <option value="Brandon / Riverview">Brandon / Riverview</option>
                  <option value="St. Petersburg">St. Petersburg</option>
                  <option value="Clearwater">Clearwater</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white text-sm font-bold py-3.5 rounded-full transition-all shadow-md active:scale-95"
              >
                <span>Schedule Free Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Direct Calling */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold text-slate-600">
              <span>Prefer to talk directly?</span>
              <a
                href="tel:8135553326"
                className="inline-flex items-center gap-1.5 text-[#1EA0B8] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(813) 555-DECO</span>
              </a>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
              Request Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you, {formData.name || 'neighbor'}! Our master estimator will review your {service} request for {formData.neighborhood} and call you at {formData.phone || 'your number'} within 2 hours.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto mb-8 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Shield className="w-4 h-4 text-[#1EA0B8]" />
                <span>Zero obligations or pressure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-[#1EA0B8]" />
                <span>Exact on-site price guarantee</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-[#111827] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full hover:bg-black transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
