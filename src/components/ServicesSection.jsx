import { useState } from 'react';
import { ArrowUpRight, Check, Compass, Eye, Shield, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ onSelectService }) {
  const [activeService, setActiveService] = useState(0);

  const geometryPillars = [
    {
      num: "01",
      title: "Tactile Granite & Permanence",
      sub: "Massive natural materials that age gracefully over generations.",
      text: "We avoid fragile superficial laminates. Instead, we anchor spaces with flamed Kerala granite, honed travertine, and quarter-sawn solid hardwoods that develop rich character with age."
    },
    {
      num: "02",
      title: "Spatial Whispering & Shadows",
      sub: "Lighting choreography designed to calm the senses.",
      text: "Great interiors respect shadow as deeply as light. We sculpt indirect coves, low-glare 2700K micro-luminaires, and daylight light-wells that shift gently throughout the diurnal rhythm."
    },
    {
      num: "03",
      title: "Artisanal Millwork & Craft",
      sub: "Concealed joinery and bespoke ergonomic proportions.",
      text: "Every wardrobe edge, kitchen pocket door, and acoustic ceiling baffle is engineered to millimeter tolerances by master craftsmen, eliminating visual clutter completely."
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0d0e11] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: The Geometry of Quietness (Pillars from Reference Image) */}
        <div className="mb-24 sm:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/[0.08] pb-8 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono block mb-2">
                ARCHITECTURAL METHODOLOGY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight">
                The Geometry of Quietness.
              </h2>
            </div>
            <p className="mt-4 lg:mt-0 text-sm sm:text-base text-[#a39f97] font-light max-w-md">
              Rejecting sterile maximalism. We sculpt environments through structural discipline, honest materials, and acoustic stillness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {geometryPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-[#131418] border border-white/[0.08] hover:border-[#d4b584]/50 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#c5a065] mb-6">
                    <span>{pillar.num} / FOUNDATION</span>
                    <span className="w-6 h-[1px] bg-[#c5a065]/40"></span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#fbf7ef] mb-3 group-hover:text-[#d4b584] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#9b9386] mb-4 font-mono">
                    {pillar.sub}
                  </p>
                  <p className="text-sm text-[#bab1a3] font-light leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#787268] uppercase font-mono">
                  <span>DISCIPLINE</span>
                  <span>HYZIN GUILD</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What We Create (Full Editorial Services Layout) */}
        <div>
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
            <span>OUR DISCIPLINES</span>
            <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight mb-4">
            WHAT WE CREATE
          </h2>

          <p className="text-base text-[#aba395] font-light max-w-2xl mb-12">
            Comprehensive spatial disciplines delivered with uncompromised craft across Kerala, Tamil Nadu, and Karnataka.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Interactive Service List */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              {servicesData.map((srv, index) => {
                const isSelected = activeService === index;
                return (
                  <div
                    key={srv.number}
                    onClick={() => setActiveService(index)}
                    className={`p-6 cursor-pointer border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#15161b] border-[#d4b584] shadow-lg shadow-[#d4b584]/5'
                        : 'bg-[#0f1013] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs text-[#c5a065]">
                          {srv.number}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-[#f7f2ea]">
                          {srv.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'rotate-45 text-[#d4b584]' : 'text-[#716c64]'
                        }`}
                      />
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-white/[0.08] animate-fadeIn">
                        <p className="text-sm text-[#c5bdb0] font-light leading-relaxed mb-4">
                          {srv.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {srv.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs text-[#ded8cd]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a065]"></span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Dynamic High-Res Service Showcase */}
            <div className="lg:col-span-6 relative min-h-[460px] lg:min-h-full">
              <div className="relative w-full h-full min-h-[460px] border border-white/10 overflow-hidden shadow-2xl bg-[#0a0a0c]">
                <img
                  src={servicesData[activeService].image}
                  alt={servicesData[activeService].title}
                  className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.88] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4b584] block mb-1">
                    SERVICE DISCIPLINE {servicesData[activeService].number}
                  </span>
                  <h4 className="font-serif text-2xl text-[#faf6ee]">
                    {servicesData[activeService].title}
                  </h4>
                  <p className="text-xs text-[#c5bdb0] mt-1 font-light">
                    {servicesData[activeService].tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
