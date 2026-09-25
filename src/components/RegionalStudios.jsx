import { useState } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { studiosData } from '../data/studiosData';
import { BRAND_ASSETS } from '../data/clientAssets';

export default function RegionalStudios({ onSelectRegion, onOpenLightbox }) {
  const [activeStudio, setActiveStudio] = useState(0);

  return (
    <section id="studios" className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-[#C9A84C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official HYZIN Atelier & Branding Wall */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(BRAND_ASSETS.logo3D, 0, 'HYZIN Official 3D Atelier Branding Wall', 'Branding')}
              className="relative overflow-hidden border border-[#C9A84C]/20 shadow-2xl group cursor-pointer bg-[#141416]"
            >
              <img
                src={BRAND_ASSETS.logo3D}
                alt="HYZIN Official 3D Atelier Branding Wall"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/30 to-transparent"></div>

              {/* Studio Stamp Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A0B]/90 backdrop-blur-md border border-[#C9A84C]/20 shadow-xl">
                <span className="text-[10px] uppercase tracking-wider text-[#C9A84C] block mb-1 font-semibold">
                  OFFICIAL ATELIER & FABRICATION WORKSHOPS
                </span>
                <p className="text-lg sm:text-xl font-bold tracking-tight text-[#F2EDE4]">
                  Aluminium, Steel Fabrication & Bespoke Interior Joinery
                </p>
                <div className="mt-2 text-xs text-[#C9A84C] font-medium">
                  Kerala • Tamil Nadu • Karnataka
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Regional Studios Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-3">
              <span>REGIONAL PRESENCE</span>
              <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-bold tracking-tight leading-tight">
              Three Regional Studios. <br />
              <span className="text-[#C9A84C] font-bold">One Cohesive Vision.</span>
            </h2>

            <p className="mt-4 text-base text-[#C9A84C] font-normal leading-relaxed">
              With dedicated fabrication facilities and operational presence across South India, HYZIN delivers localized site vigilance alongside our singular standard of quiet design luxury.
            </p>

            {/* Interactive Studios Accordion List */}
            <div className="mt-8 space-y-4">
              {studiosData.map((studio, idx) => {
                const isActive = activeStudio === idx;
                return (
                  <div
                    key={studio.id}
                    onClick={() => setActiveStudio(idx)}
                    className={`p-6 cursor-pointer border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1C1C20] border-[#C9A84C] shadow-lg shadow-[#C9A84C]/10'
                        : 'bg-[#141416] border-[#C9A84C]/20 hover:border-[#C9A84C]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C9A84C] block mb-1 font-semibold">
                          {studio.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F2EDE4]">
                          {studio.region}
                        </h3>
                        <p className="text-xs text-[#C9A84C] font-medium mt-0.5">
                          {studio.location}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-medium text-[#C9A84C]/70 hidden sm:block">
                          {studio.coordinates}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? 'rotate-45 text-[#C9A84C]' : 'text-[#C9A84C]'
                          }`}
                        />
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-[#C9A84C]/20 animate-fadeIn text-sm">
                        <p className="text-[#F2EDE4] font-normal leading-relaxed mb-4">
                          {studio.description}
                        </p>
                        <div className="text-xs text-[#C9A84C] font-medium mb-4">
                          <span className="text-[#C9A84C] font-semibold">FOCUS: </span>
                          <span>{studio.focus}</span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#C9A84C]/10">
                          <a
                            href="tel:6282549008"
                            className="text-xs uppercase font-mono tracking-wider text-[#C9A84C] hover:text-[#F2EDE4] flex items-center space-x-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>+91 6282549008</span>
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectRegion(studio.state);
                            }}
                            className="px-4 py-2 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-[10px] uppercase tracking-widest font-bold shadow-md"
                          >
                            COMMISSION IN {studio.state.toUpperCase()}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
