import { useState } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { studiosData } from '../data/studiosData';
import { BRAND_ASSETS } from '../data/clientAssets';

export default function RegionalStudios({ onSelectRegion, onOpenLightbox }) {
  const [activeStudio, setActiveStudio] = useState(0);

  return (
    <section id="studios" className="py-24 sm:py-32 bg-[#0c0d10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official HYZIN Atelier & Branding Wall */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(BRAND_ASSETS.logo3D, 0, 'HYZIN Official 3D Atelier Branding Wall', 'Branding')}
              className="relative overflow-hidden border border-white/[0.08] shadow-2xl group cursor-pointer"
            >
              <img
                src={BRAND_ASSETS.logo3D}
                alt="HYZIN Official 3D Atelier Branding Wall"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Studio Stamp Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-md border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4b584] block mb-1">
                  OFFICIAL ATELIER & FABRICATION WORKSHOPS
                </span>
                <p className="font-serif text-xl text-[#faf6ee]">
                  Aluminium, Steel Fabrication & Bespoke Interior Joinery
                </p>
                <div className="mt-2 text-xs text-[#a39f97] font-mono">
                  Kerala • Tamil Nadu • Karnataka
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Regional Studios Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
              <span>REGIONAL PRESENCE</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight leading-tight">
              Three Regional Studios. <br />
              <span className="italic text-[#d4b584] font-serif">One Cohesive Vision.</span>
            </h2>

            <p className="mt-4 text-base text-[#aba395] font-light leading-relaxed">
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
                        ? 'bg-[#15161c] border-[#d4b584] shadow-lg shadow-[#d4b584]/5'
                        : 'bg-[#101115] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a065] block mb-1">
                          {studio.badge}
                        </span>
                        <h3 className="font-serif text-2xl text-[#f7f2ea]">
                          {studio.region}
                        </h3>
                        <p className="text-xs text-[#8e887e] font-mono mt-0.5">
                          {studio.location}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] text-[#716c64] hidden sm:block">
                          {studio.coordinates}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? 'rotate-45 text-[#d4b584]' : 'text-[#716c64]'
                          }`}
                        />
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-white/[0.08] animate-fadeIn text-sm">
                        <p className="text-[#ccc4b6] font-light leading-relaxed mb-4">
                          {studio.description}
                        </p>
                        <div className="text-xs text-[#a39f97] font-mono mb-4">
                          <span className="text-[#d4b584]">FOCUS: </span>
                          <span>{studio.focus}</span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                          <a
                            href="tel:6282549008"
                            className="text-xs uppercase font-mono tracking-wider text-[#d4b584] hover:text-white flex items-center space-x-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>+91 6282549008</span>
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectRegion(studio.state);
                            }}
                            className="px-4 py-2 bg-[#d4b584] hover:bg-[#faedd0] text-[#0d0e10] text-[10px] uppercase tracking-widest font-semibold"
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
