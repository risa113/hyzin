import { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Maximize2, Layers, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ onOpenLightbox }) {
  const [activeService, setActiveService] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const current = servicesData[activeService] || servicesData[0];
  const allCurrentPhotos = [current.image, ...(current.gallery || [])];
  const displayedPhoto = allCurrentPhotos[selectedPhotoIndex] || current.image;

  const handleSelectService = (idx) => {
    setActiveService(idx);
    setSelectedPhotoIndex(0);
  };

  const handleOpenLightbox = (photoIdx = selectedPhotoIndex) => {
    if (onOpenLightbox) {
      onOpenLightbox(allCurrentPhotos, photoIdx, current.title, `Discipline ${current.number}`);
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#2B1C19] text-[#FAF7F0] relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#D4AF37]/20 pb-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span>SPECIALIZED FABRICATION & ARCHITECTURAL INTERIOR DESIGN</span>
              <span className="w-10 h-[1px] bg-[#D4AF37]/40 hidden sm:inline-block"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-extrabold tracking-tight leading-[1.1]">
              10 Specialized <span className="text-[#D4AF37]">Disciplines.</span>
            </h2>
          </div>

          <div className="mt-4 lg:mt-0 text-left lg:text-right">
            <span className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-semibold block">
              100% In-House Workshop Execution
            </span>
            <p className="text-xs text-[#D4AF37]/80 mt-1 max-w-sm font-normal">
              Millimeter-precision joinery, aluminium extrusion, and structural metal fabrication across South India.
            </p>
          </div>
        </div>

        {/* 10 Discipline Quick Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar select-none">
          {servicesData.map((srv, idx) => {
            const isSelected = activeService === idx;
            return (
              <button
                key={srv.id}
                onClick={() => handleSelectService(idx)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 flex items-center space-x-2 border flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D4AF37] text-[#2B1C19] border-[#D4AF37] shadow-lg font-bold'
                    : 'bg-[#3E2723] text-[#FAF7F0]/85 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:text-[#FAF7F0]'
                }`}
              >
                <span className={`text-[10px] ${isSelected ? 'text-[#2B1C19]' : 'text-[#D4AF37]'}`}>
                  {srv.number}
                </span>
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Master Showcase: Split Feature Stage */}
        <div className="bg-[#3E2723] border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden">
          
          {/* Subtle ghost chapter number in background */}
          <div className="absolute right-4 top-2 text-[120px] sm:text-[180px] font-black text-[#D4AF37]/5 select-none pointer-events-none leading-none">
            {current.number}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Discipline Specifications & Scope */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#2B1C19] border border-[#D4AF37]/40 text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>DISCIPLINE {current.number} • REAL CLIENT WORK</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#FAF7F0] tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D4AF37] mt-2 font-medium italic">
                  “{current.tagline}”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#FAF7F0]/80 leading-relaxed font-light">
                {current.description}
              </p>

              {/* 4 Deliverables Matrix */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-3 font-semibold">
                  DELIVERABLE SPECIFICATIONS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#2B1C19]/70 border border-[#D4AF37]/15 flex items-start space-x-2.5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#FAF7F0]/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => handleOpenLightbox(selectedPhotoIndex)}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md flex items-center space-x-2"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>VIEW ALL {allCurrentPhotos.length} PHOTOS (FULLSCREEN)</span>
                </button>

                <a
                  href={`https://wa.me/916282549008?text=${encodeURIComponent(`Hi HYZIN Interior, I am interested in inquiring about Discipline ${current.number}: ${current.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#FAF7F0] hover:text-[#D4AF37] text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center space-x-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>INQUIRE ON WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column: High-Res Interactive Gallery Viewer */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Featured Photo Box */}
              <div
                onClick={() => handleOpenLightbox(selectedPhotoIndex)}
                className="relative w-full h-[360px] sm:h-[440px] border border-[#D4AF37]/30 overflow-hidden shadow-2xl bg-[#2B1C19] group cursor-pointer"
              >
                <img
                  key={displayedPhoto}
                  src={displayedPhoto}
                  alt={`${current.title} preview`}
                  className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.92] contrast-[1.05] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19] via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#2B1C19]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] uppercase font-mono tracking-widest text-[#FAF7F0]">
                    PHOTO {selectedPhotoIndex + 1} OF {allCurrentPhotos.length}
                  </span>
                </div>

                {/* Top Right Zoom Lightbox Trigger */}
                <button
                  type="button"
                  aria-label="Expand fullscreen image"
                  className="absolute top-4 right-4 p-3 bg-[#2B1C19]/90 hover:bg-[#D4AF37] hover:text-[#2B1C19] text-[#FAF7F0] rounded-full backdrop-blur-md border border-[#D4AF37]/30 transition-all shadow-lg"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#2B1C19]/95 backdrop-blur-md border border-[#D4AF37]/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block">
                      VERIFIED CLIENT EXECUTION
                    </span>
                    <span className="text-sm font-bold text-[#FAF7F0] block">
                      {current.title}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37]/80 hidden sm:inline">
                    CLICK TO EXPAND ↗
                  </span>
                </div>
              </div>

              {/* Multi-Photo Thumbnail Filmstrip */}
              {allCurrentPhotos.length > 1 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-[#D4AF37]/70 px-1">
                    <span>REAL SITE PHOTOS FILMSTRIP</span>
                    <span>TOUCH TO SWITCH VIEW</span>
                  </div>

                  <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                    {allCurrentPhotos.map((photoUrl, pIdx) => {
                      const isActiveThumb = selectedPhotoIndex === pIdx;
                      return (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setSelectedPhotoIndex(pIdx)}
                          className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 border overflow-hidden transition-all duration-300 cursor-pointer ${
                            isActiveThumb
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105 shadow-md'
                              : 'border-[#D4AF37]/20 opacity-60 hover:opacity-100 hover:border-[#D4AF37]/60'
                          }`}
                        >
                          <img
                            src={photoUrl}
                            alt={`Thumbnail ${pIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {isActiveThumb && (
                            <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D4AF37]"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* 10 Disciplines Architectural Visual Gallery Grid */}
        <div className="border-t border-[#D4AF37]/20 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] block mb-1">
                ALL DISCIPLINES AT A GLANCE
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#FAF7F0]">
                Explore The Complete 10-Discipline Spectrum
              </h4>
            </div>
            <div className="text-xs text-[#D4AF37] hidden sm:block">
              Touch any discipline card to inspect full details
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={srv.id}
                  onClick={() => handleSelectService(idx)}
                  className={`group relative border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#4E342E] border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-xl scale-[1.02]'
                      : 'bg-[#3E2723] border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#4E342E]/60'
                  }`}
                >
                  {/* Photo Banner */}
                  <div className="relative h-28 sm:h-36 overflow-hidden bg-[#2B1C19]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-black/30"></div>
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-bold px-2 py-0.5 bg-[#2B1C19]/90 text-[#D4AF37] border border-[#D4AF37]/30">
                      {srv.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                        isSelected ? 'text-[#FAF7F0]' : 'text-[#FAF7F0]/90 group-hover:text-[#D4AF37]'
                      }`}>
                        {srv.title}
                      </h5>
                      <p className="text-[11px] text-[#D4AF37]/80 mt-1 line-clamp-2 leading-relaxed">
                        {srv.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between text-[10px] text-[#D4AF37] font-mono">
                      <span>{1 + (srv.gallery?.length || 0)} PHOTOS</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isSelected ? 'rotate-45 text-[#D4AF37]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
