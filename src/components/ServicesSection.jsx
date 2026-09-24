import { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Maximize2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ onOpenLightbox }) {
  const [activeService, setActiveService] = useState(0);

  const current = servicesData[activeService] || servicesData[0];

  const handleOpenImage = (img, title, serviceTitle) => {
    if (onOpenLightbox) {
      onOpenLightbox(current.gallery || [img], 0, title, serviceTitle);
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0C0D10] text-[#FAF8F5] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C5A065] font-medium mb-4">
              <span>SPECIALIZED FABRICATION & INTERIOR DESIGN</span>
              <span className="w-10 h-[1px] bg-[#D4B584]/50"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-bold tracking-tight">
              10 Specialized <span className="text-[#D4B584] font-bold">Disciplines.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 text-left lg:text-right">
            <span className="text-xs text-[#D4B584] uppercase tracking-widest block font-medium">
              100% In-House Workshop Fabrication
            </span>
            <p className="text-xs text-[#A39E96] mt-1 max-w-sm font-normal">
              Real client work delivered across Kerala, Tamil Nadu, and Karnataka with millimeter precision.
            </p>
          </div>
        </div>

        {/* Master 10 Services Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: 10 Service Cards List */}
          <div className="lg:col-span-6 space-y-3 max-h-[780px] overflow-y-auto pr-1 no-scrollbar">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveService(idx)}
                  className={`p-5 cursor-pointer border transition-all duration-300 rounded-sm relative group ${
                    isSelected
                      ? 'bg-[#16181F] border-[#D4B584] shadow-xl shadow-black/40 translate-x-1'
                      : 'bg-[#101115] border-white/5 hover:border-white/20 hover:bg-[#131419]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm border ${
                        isSelected ? 'text-[#D4B584] border-[#D4B584]/40 bg-[#D4B584]/10' : 'text-stone-400 border-white/10'
                      }`}>
                        {srv.number}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-[#FAF8F5]' : 'text-stone-300 group-hover:text-white'
                      }`}>
                        {srv.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'rotate-45 text-[#D4B584]' : 'text-stone-500 group-hover:text-stone-300'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-[#C4BCB1] font-light leading-relaxed mb-4">
                        {srv.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-[11px] text-[#E0DAD0]">
                            <Check className="w-3.5 h-3.5 text-[#D4B584] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4B584]">
                          {srv.gallery ? `${srv.gallery.length} REAL SITE PHOTOS` : 'VERIFIED CLIENT WORK'}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenImage(srv.image, srv.title, srv.title);
                          }}
                          className="text-[10px] uppercase font-mono tracking-widest text-white/80 hover:text-[#D4B584] flex items-center space-x-1"
                        >
                          <Maximize2 className="w-3 h-3 mr-1" />
                          <span>EXPAND PHOTO</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic High-Definition Client Showcase */}
          <div className="lg:col-span-6 relative min-h-[500px] lg:min-h-full flex flex-col">
            <div className="relative flex-1 w-full border border-white/10 overflow-hidden shadow-2xl bg-[#08080A] rounded-sm group">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.9] contrast-[1.05] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-black/30 pointer-events-none"></div>

              {/* Lightbox Trigger overlay button */}
              <button
                onClick={() => handleOpenImage(current.image, current.title, current.title)}
                className="absolute top-4 right-4 p-3 bg-black/60 hover:bg-[#D4B584] hover:text-black text-white rounded-full backdrop-blur-md border border-white/10 transition-all shadow-lg"
                title="View in Fullscreen Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Top Discipline Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-[#D4B584]/40 text-[10px] uppercase font-semibold tracking-wider text-[#D4B584]">
                  DISCIPLINE {current.number} • REAL CLIENT WORK
                </span>
              </div>

              {/* Bottom Information Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                <div className="flex items-center space-x-2 text-[10px] uppercase font-semibold tracking-wider text-[#D4B584] mb-1">
                  <Sparkles className="w-3 h-3 text-[#D4B584]" />
                  <span>ORIGINAL CLIENT SITE EXECUTION</span>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#FAF8F5]">
                  {current.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#C4BCB1] mt-2 font-normal line-clamp-2 leading-relaxed">
                  {current.tagline}
                </p>

                {/* Micro Thumbnail Strip */}
                {current.gallery && current.gallery.length > 1 && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center space-x-2 overflow-x-auto no-scrollbar">
                    {current.gallery.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => handleOpenImage(thumb, `${current.title} - View ${tIdx + 1}`, current.title)}
                        className="w-12 h-12 flex-shrink-0 border border-white/20 hover:border-[#D4B584] rounded overflow-hidden transition-all hover:scale-105"
                      >
                        <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
