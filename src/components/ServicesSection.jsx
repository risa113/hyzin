import { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Maximize2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ onOpenLightbox }) {
  const [activeService, setActiveService] = useState(0);

  const current = servicesData[activeService] || servicesData[0];

  const handleOpenImage = (img, title, serviceTitle, serviceObj = current) => {
    if (onOpenLightbox) {
      const allPhotos = [serviceObj.image, ...(serviceObj.gallery || [])];
      const startIdx = allPhotos.indexOf(img);
      onOpenLightbox(allPhotos, startIdx >= 0 ? startIdx : 0, title, serviceTitle);
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#341910] text-[#FCFCF6] relative overflow-hidden border-t border-[#CFB291]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#CFB291]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-4">
              <span>SPECIALIZED FABRICATION & INTERIOR DESIGN</span>
              <span className="w-10 h-[1px] bg-[#CFB291]/50"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#FCFCF6] font-bold tracking-tight">
              10 Specialized <span className="text-[#CFB291] font-bold">Disciplines.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 text-left lg:text-right">
            <span className="text-xs text-[#CFB291] uppercase tracking-widest block font-medium">
              100% In-House Workshop Fabrication
            </span>
            <p className="text-xs text-[#CFB291] mt-1 max-w-sm font-normal">
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
                      ? 'bg-[#5A3122] border-[#CFB291] shadow-xl shadow-black/40 translate-x-1'
                      : 'bg-[#45241A] border-[#CFB291]/15 hover:border-[#CFB291]/40 hover:bg-[#5A3122]/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm border ${
                        isSelected ? 'text-[#CFB291] border-[#CFB291]/50 bg-[#CFB291]/15' : 'text-[#CFB291] border-[#CFB291]/20'
                      }`}>
                        {srv.number}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-[#FCFCF6]' : 'text-[#FCFCF6]/90 group-hover:text-[#FCFCF6]'
                      }`}>
                        {srv.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'rotate-45 text-[#CFB291]' : 'text-[#CFB291] group-hover:text-[#FCFCF6]'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-[#CFB291]/20 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-[#CFB291] font-light leading-relaxed mb-4">
                        {srv.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-[11px] text-[#FCFCF6]">
                            <Check className="w-3.5 h-3.5 text-[#CFB291] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#CFB291]">
                          {srv.gallery ? `${srv.gallery.length + 1} REAL SITE PHOTOS` : 'VERIFIED CLIENT WORK'}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenImage(srv.image, srv.title, srv.title, srv);
                          }}
                          className="text-[10px] uppercase font-mono tracking-widest text-[#FCFCF6]/80 hover:text-[#CFB291] flex items-center space-x-1"
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

          {/* Right: Dynamic High-Definition Client Showcase with Slide-Right Pop Animation */}
          <div className="lg:col-span-6 relative min-h-[500px] lg:min-h-full flex flex-col">
            <div key={current.id} className="relative flex-1 w-full border border-[#CFB291]/20 overflow-hidden shadow-2xl bg-[#341910] rounded-sm group animate-slide-right-pop">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.9] contrast-[1.05] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#341910] via-transparent to-black/30 pointer-events-none"></div>

              {/* Lightbox Trigger overlay button */}
              <button
                onClick={() => handleOpenImage(current.image, current.title, current.title)}
                className="absolute top-4 right-4 p-3 bg-[#341910]/80 hover:bg-[#CFB291] hover:text-[#341910] text-[#FCFCF6] rounded-full backdrop-blur-md border border-[#CFB291]/20 transition-all shadow-lg"
                title="View in Fullscreen Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Top Discipline Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#341910]/80 backdrop-blur-md border border-[#CFB291]/40 text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]">
                  DISCIPLINE {current.number} • REAL CLIENT WORK
                </span>
              </div>

              {/* Bottom Information Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#341910]/90 backdrop-blur-md border border-[#CFB291]/20 rounded-sm">
                <div className="flex items-center space-x-2 text-[10px] uppercase font-semibold tracking-wider text-[#CFB291] mb-1">
                  <Sparkles className="w-3 h-3 text-[#CFB291]" />
                  <span>ORIGINAL CLIENT SITE EXECUTION</span>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#FCFCF6]">
                  {current.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#CFB291] mt-2 font-normal line-clamp-2 leading-relaxed">
                  {current.tagline}
                </p>

                {/* Micro Thumbnail Strip */}
                {current.gallery && current.gallery.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#CFB291]/20 flex items-center space-x-2 overflow-x-auto no-scrollbar">
                    {current.gallery.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => handleOpenImage(thumb, `${current.title} - View ${tIdx + 1}`, current.title)}
                        className="w-12 h-12 flex-shrink-0 border border-[#CFB291]/30 hover:border-[#CFB291] rounded overflow-hidden transition-all hover:scale-105"
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
