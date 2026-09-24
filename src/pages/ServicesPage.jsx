import { useState, useEffect } from 'react';
import { ArrowUpRight, Maximize2, CheckCircle2, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SensoryLibrary from '../components/SensoryLibrary';
import ProcessSection from '../components/ProcessSection';

export default function ServicesPage({
  onOpenConsultation,
  onOpenLightbox,
  activeServiceId,
  onClearActiveService
}) {
  const [activeService, setActiveService] = useState(0);

  // Sync active service if selected from Navbar mega dropdown or external link
  useEffect(() => {
    if (activeServiceId) {
      const idx = servicesData.findIndex((s) => s.id === activeServiceId);
      if (idx !== -1) {
        setActiveService(idx);
        setTimeout(() => {
          const el = document.getElementById('services-showcase');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [activeServiceId]);

  const selected = servicesData[activeService] || servicesData[0];

  const geometryPillars = [
    {
      num: "01",
      title: "Tactile Granite & Permanence",
      sub: "Natural mass that deepens in beauty over generations.",
      text: "We avoid fragile laminates and fake veneers. Instead, we anchor interiors with flamed Kerala granite, Italian travertine, and quarter-sawn hardwoods that endure coastal humidity."
    },
    {
      num: "02",
      title: "Spatial Whispering & Shadows",
      sub: "Lighting choreography designed to calm the senses.",
      text: "Great interiors celebrate darkness as deeply as light. We sculpt concealed indirect coves, low-glare 2700K micro-luminaires, and light-wells that shift with the day."
    },
    {
      num: "03",
      title: "In-House Metal & Wood Craft",
      sub: "Concealed joinery and tailored ergonomic balance.",
      text: "Every wardrobe edge, kitchen pocket door, steel security frame, and acoustic ceiling baffle is engineered to millimeter tolerances by master craftsmen, eliminating visual clutter completely."
    }
  ];

  return (
    <div className="animate-page-enter pt-12 pb-24 bg-[#4E342E]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 border-b border-[#C9B29B]/20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>THE 10 OFFICIAL CLIENT WORK DISCIPLINES</span>
            <span className="w-12 h-[1px] bg-[#D4AF37]/40"></span>
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#FAF7F0] font-extrabold leading-[1.12] tracking-tight">
            What We <span className="text-[#D4AF37]">Create.</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-[#C9B29B] font-normal leading-relaxed">
            Ten specialized services covering complete interior design, modular joinery, and structural metal fabrication across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>
      </section>

      {/* Immediate Interactive 10 Services Showcase - NEVER HIDDEN */}
      <section id="services-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        
        {/* Section Title & Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#C9B29B]/15 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
              DISCIPLINE CATALOGUE ({servicesData.length} TOTAL)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F0] font-bold tracking-tight">
              Explore All 10 Services
            </h2>
          </div>
          <div className="text-xs text-[#C9B29B] font-medium">
            Touch any discipline to inspect photography, deliverables, and specs
          </div>
        </div>

        {/* Quick Horizontal Jump Pills (Ultra-Responsive on Mobile & Desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-reveal">
          {servicesData.map((srv, idx) => {
            const isSelected = activeService === idx;
            return (
              <button
                key={srv.id || srv.number}
                onClick={() => setActiveService(idx)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center space-x-1.5 cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-[#D4AF37] text-[#2B1C19] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-105'
                    : 'bg-[#3E2723] text-[#FAF7F0] border-[#C9B29B]/20 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                <span className="text-[10px] opacity-80">{srv.number}</span>
                <span>{srv.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Layout: Service Cards List + Interactive Live Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Service Cards List */}
          <div className="lg:col-span-6 space-y-3">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={srv.number}
                  onClick={() => setActiveService(idx)}
                  className={`p-5 cursor-pointer border transition-all duration-300 rounded-lg ${
                    isSelected
                      ? 'bg-[#3E2723] border-[#D4AF37] shadow-xl ring-2 ring-[#D4AF37]/50'
                      : 'bg-[#3E2723]/60 border-[#C9B29B]/20 hover:border-[#D4AF37]/60 hover:bg-[#3E2723]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#D4AF37] text-[#2B1C19]' : 'bg-[#2B1C19] text-[#D4AF37] border border-[#D4AF37]/30'
                      }`}>
                        {srv.number}
                      </span>
                      <h3 className="text-base sm:text-lg text-[#FAF7F0] font-bold tracking-tight">
                        {srv.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'rotate-45 text-[#D4AF37] scale-125' : 'text-[#C9B29B]'
                      }`}
                    />
                  </div>

                  {/* Active Service Expanded Details */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-[#C9B29B]/20 animate-fadeIn">
                      <p className="text-sm text-[#C9B29B] font-normal leading-relaxed mb-4">
                        {srv.description}
                      </p>
                      
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                        Included Deliverables & Scope:
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-[#FAF7F0]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Mobile Inline Photos Trigger */}
                      <div className="lg:hidden pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const allPhotos = [srv.image, ...(srv.gallery || [])];
                            onOpenLightbox && onOpenLightbox(allPhotos, 0, srv.title, srv.title);
                          }}
                          className="px-3 py-1.5 bg-[#D4AF37] text-[#2B1C19] font-bold rounded text-xs flex items-center space-x-1.5 shadow"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View {1 + (srv.gallery?.length || 0)} Photos</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultation();
                          }}
                          className="text-xs text-[#D4AF37] hover:underline font-bold"
                        >
                          Commission Service →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Res Original Client Image & Service Detail Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-5">
            <div 
              onClick={() => {
                const allServicePhotos = [selected.image, ...(selected.gallery || [])];
                onOpenLightbox && onOpenLightbox(allServicePhotos, 0, selected.title, selected.title);
              }}
              className="relative w-full h-[380px] sm:h-[460px] border border-[#C9B29B]/20 rounded-xl overflow-hidden shadow-2xl bg-[#3E2723] animatic-reflection cursor-pointer group"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19]/95 via-[#2B1C19]/30 to-transparent"></div>
              
              <button 
                type="button"
                className="absolute top-4 right-4 p-2.5 bg-[#2B1C19]/80 backdrop-blur-md text-[#FAF7F0] rounded-full border border-[#D4AF37]/30 opacity-90 group-hover:opacity-100 transition-opacity"
                aria-label="Open fullscreen gallery"
              >
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#2B1C19]/95 backdrop-blur-md border border-[#C9B29B]/20 rounded-lg shadow-xl">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block mb-1 font-semibold">
                  DISCIPLINE {selected.number} • ORIGINAL CLIENT WORK
                </span>
                <h4 className="text-xl sm:text-2xl text-[#FAF7F0] font-bold tracking-tight">
                  {selected.title}
                </h4>
                <p className="text-xs text-[#C9B29B] mt-1 font-normal line-clamp-2">
                  {selected.tagline}
                </p>
                <div className="mt-3 pt-2 border-t border-[#C9B29B]/20 flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                  <span className="flex items-center space-x-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>TOUCH TO VIEW FULLSCREEN LIGHTBOX</span>
                  </span>
                  <span>{1 + (selected.gallery?.length || 0)} ORIGINAL PHOTOS</span>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            {selected.gallery && selected.gallery.length > 0 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {selected.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const allServicePhotos = [selected.image, ...(selected.gallery || [])];
                      onOpenLightbox && onOpenLightbox(allServicePhotos, i + 1, selected.title, selected.title);
                    }}
                    className="w-24 h-16 flex-shrink-0 border border-[#C9B29B]/25 rounded-md overflow-hidden cursor-pointer hover:border-[#D4AF37] transition-all hover:scale-105 shadow-sm"
                  >
                    <img src={img} alt="Service detail preview" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Action CTA */}
            <div className="p-6 bg-[#3E2723] border border-[#C9B29B]/20 rounded-xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase text-[#D4AF37] block font-bold tracking-wider">
                  READY TO COMMISSION?
                </span>
                <span className="text-base sm:text-lg font-bold text-[#FAF7F0]">
                  Inquire for {selected.title}
                </span>
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-xs uppercase tracking-widest font-bold transition-colors shadow-lg rounded-sm cursor-pointer"
              >
                START YOUR PROJECT
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Geometry Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#C9B29B]/20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block mb-2">
            DESIGN & FABRICATION METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-bold tracking-tight">
            The Geometry of Quietness
          </h2>
          <p className="mt-3 text-sm text-[#C9B29B] font-normal">
            Three core foundations that govern every interior and fabrication project we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {geometryPillars.map((p) => (
            <div key={p.num} className="p-8 bg-[#3E2723] border border-[#C9B29B]/20 shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300 rounded-xl">
              <span className="text-xs font-semibold text-[#D4AF37] block mb-4">
                {p.num} / FOUNDATION
              </span>
              <h3 className="text-xl sm:text-2xl text-[#FAF7F0] font-bold tracking-tight mb-2">{p.title}</h3>
              <p className="text-xs uppercase tracking-wider text-[#C9B29B]/80 mb-4 font-medium">{p.sub}</p>
              <p className="text-sm text-[#C9B29B] font-normal leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Sensory Library */}
      <SensoryLibrary />

      {/* Process Section */}
      <ProcessSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
