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
    <div className="animate-page-enter bg-[#341910]">

      {/* ─── 01 — PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="w-full bg-[#341910] pt-32 pb-24 border-b border-[#CFB291]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="w-3.5 h-3.5 text-[#CFB291]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#CFB291] font-semibold">
              — THE 10 OFFICIAL DISCIPLINES —
            </span>
            <span className="flex-1 max-w-[120px] h-[1px] bg-[#CFB291]/30" />
          </div>

          {/* Giant editorial heading */}
          <div className="mb-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-[-0.02em] text-[#FCFCF6] uppercase">
              WHAT WE
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-[-0.02em] text-[#CFB291] uppercase">
              CREATE.
            </h1>
          </div>

          {/* Subtext */}
          <p className="max-w-xl text-base sm:text-lg text-[#FCFCF6]/60 font-light leading-relaxed tracking-wide">
            Ten specialized disciplines covering complete interior design, modular joinery,
            and structural metal fabrication across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>
      </section>

      {/* ─── 02 — SERVICES SHOWCASE ────────────────────────────────────────────── */}
      <section
        id="services-showcase"
        className="w-full bg-[#5A3122] scroll-mt-24 py-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#CFB291]/15 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291] font-semibold block mb-2">
                01 — DISCIPLINE CATALOGUE &nbsp;·&nbsp; {servicesData.length} TOTAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FCFCF6] font-bold tracking-tight">
                Explore All 10 Services
              </h2>
            </div>
            <p className="text-[11px] text-[#CFB291]/70 font-medium uppercase tracking-[0.2em] max-w-xs text-right">
              Select any discipline to inspect photography, deliverables & specs
            </p>
          </div>

          {/* ── Horizontal pill filter (square corners, editorial) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-reveal">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <button
                  key={srv.id || srv.number}
                  onClick={() => setActiveService(idx)}
                  className={`px-4 py-2 text-[10px] font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0 border uppercase tracking-[0.15em] ${
                    isSelected
                      ? 'bg-[#CFB291] text-[#341910] border-[#CFB291] shadow-lg shadow-[#CFB291]/20'
                      : 'bg-transparent text-[#FCFCF6]/70 border-[#CFB291]/20 hover:border-[#CFB291]/60 hover:text-[#CFB291]'
                  }`}
                >
                  <span className="opacity-70">{srv.number}</span>
                  <span>{srv.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* ── Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT: Service card list */}
            <div className="lg:col-span-6 space-y-2">
              {servicesData.map((srv, idx) => {
                const isSelected = activeService === idx;
                return (
                  <div
                    key={srv.number}
                    onClick={() => setActiveService(idx)}
                    className={`px-6 py-5 cursor-pointer border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#45241A] border-[#CFB291] shadow-2xl shadow-[#CFB291]/10 ring-1 ring-[#CFB291]/30'
                        : 'bg-[#45241A]/50 border-[#CFB291]/15 hover:border-[#CFB291]/40 hover:bg-[#45241A]'
                    }`}
                  >
                    {/* Card header row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 tracking-[0.15em] uppercase ${
                          isSelected
                            ? 'bg-[#CFB291] text-[#341910]'
                            : 'bg-[#341910] text-[#CFB291] border border-[#CFB291]/30'
                        }`}>
                          {srv.number}
                        </span>
                        <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                          isSelected ? 'text-[#FCFCF6]' : 'text-[#FCFCF6]/80'
                        }`}>
                          {srv.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isSelected ? 'rotate-45 text-[#CFB291] scale-125' : 'text-[#CFB291]/50'
                        }`}
                      />
                    </div>

                    {/* Expanded details on selection */}
                    {isSelected && (
                      <div className="mt-5 pt-5 border-t border-[#CFB291]/20 animate-fadeIn">
                        <p className="text-sm text-[#FCFCF6]/70 font-light leading-relaxed mb-5">
                          {srv.description}
                        </p>

                        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#CFB291] mb-3">
                          Included Deliverables &amp; Scope
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                          {srv.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#FCFCF6]/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#CFB291] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Mobile lightbox + commission triggers */}
                        <div className="lg:hidden pt-2 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const allPhotos = [srv.image, ...(srv.gallery || [])];
                              onOpenLightbox && onOpenLightbox(allPhotos, 0, srv.title, srv.title);
                            }}
                            className="px-4 py-2 bg-[#CFB291] text-[#341910] font-bold text-[10px] uppercase tracking-[0.15em] flex items-center gap-1.5 shadow"
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
                            className="text-[10px] uppercase tracking-[0.2em] text-[#CFB291] hover:text-[#FCFCF6] font-bold transition-colors"
                          >
                            Commission →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Sticky large image showcase */}
            <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">

              {/* Hero image */}
              <div
                onClick={() => {
                  const allServicePhotos = [selected.image, ...(selected.gallery || [])];
                  onOpenLightbox && onOpenLightbox(allServicePhotos, 0, selected.title, selected.title);
                }}
                className="relative w-full h-[400px] sm:h-[500px] border border-[#CFB291]/20 overflow-hidden shadow-2xl bg-[#45241A] cursor-pointer group"
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#341910]/95 via-[#341910]/25 to-transparent" />

                {/* Expand icon */}
                <button
                  type="button"
                  className="absolute top-5 right-5 p-2.5 bg-[#341910]/80 backdrop-blur-md text-[#FCFCF6] border border-[#CFB291]/30 opacity-80 group-hover:opacity-100 transition-opacity"
                  aria-label="Open fullscreen gallery"
                >
                  <Maximize2 className="w-4 h-4 text-[#CFB291]" />
                </button>

                {/* Info overlay panel — sharp corners */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#341910]/95 backdrop-blur-md border border-[#CFB291]/20 shadow-xl">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#CFB291] block mb-1.5 font-semibold">
                    DISCIPLINE {selected.number} &nbsp;·&nbsp; ORIGINAL CLIENT WORK
                  </span>
                  <h4 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight">
                    {selected.title}
                  </h4>
                  <p className="text-xs text-[#FCFCF6]/60 mt-1.5 font-light line-clamp-2">
                    {selected.tagline}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#CFB291]/20 flex items-center justify-between text-[10px] text-[#CFB291] font-semibold uppercase tracking-[0.15em]">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>TOUCH TO VIEW FULLSCREEN</span>
                    </span>
                    <span>{1 + (selected.gallery?.length || 0)} ORIGINAL PHOTOS</span>
                  </div>
                </div>
              </div>

              {/* Gallery thumbnails strip */}
              {selected.gallery && selected.gallery.length > 0 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {selected.gallery.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        const allServicePhotos = [selected.image, ...(selected.gallery || [])];
                        onOpenLightbox && onOpenLightbox(allServicePhotos, i + 1, selected.title, selected.title);
                      }}
                      className="w-24 h-16 flex-shrink-0 border border-[#CFB291]/20 overflow-hidden cursor-pointer hover:border-[#CFB291] hover:scale-105 transition-all shadow-sm"
                    >
                      <img src={img} alt="Service detail preview" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {/* CTA block — sharp corners */}
              <div className="p-6 bg-[#45241A] border border-[#CFB291]/20 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#CFB291] block font-bold mb-1">
                    READY TO COMMISSION?
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#FCFCF6]">
                    Inquire for {selected.title}
                  </span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] text-[10px] uppercase tracking-[0.25em] font-bold transition-colors shadow-lg cursor-pointer"
                >
                  START YOUR PROJECT
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 — GEOMETRY PILLARS ─────────────────────────────────────────────── */}
      <section className="w-full bg-[#341910] py-32 border-t border-[#CFB291]/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#CFB291] font-semibold">
              02 — DESIGN &amp; FABRICATION METHODOLOGY
            </span>
            <span className="flex-1 max-w-[80px] h-[1px] bg-[#CFB291]/30" />
          </div>

          {/* Giant section heading */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#FCFCF6] font-bold tracking-tight leading-[1.05]">
              The Geometry of Quietness
            </h2>
            <p className="mt-4 text-sm text-[#FCFCF6]/50 font-light max-w-lg leading-relaxed">
              Three core foundations that govern every interior and fabrication project we deliver.
            </p>
          </div>

          {/* Gold hairline rule */}
          <div className="w-full h-[1px] bg-[#CFB291]/15 mb-16" />

          {/* Three pillar cards — SHARP CORNERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#CFB291]/15">
            {geometryPillars.map((p, idx) => (
              <div
                key={p.num}
                className={`p-10 bg-[#45241A] hover:bg-[#5A3122] transition-colors duration-300 ${
                  idx < geometryPillars.length - 1 ? 'border-r border-[#CFB291]/15' : ''
                }`}
              >
                {/* Numbered label in small gold caps */}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CFB291] block mb-6">
                  {p.num} / FOUNDATION
                </span>

                {/* Gold accent line */}
                <div className="w-10 h-[2px] bg-[#CFB291] mb-8" />

                {/* Large title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#FCFCF6] font-bold tracking-tight leading-tight mb-4">
                  {p.title}
                </h3>

                {/* Italic sub in bronze */}
                <p className="text-sm italic text-[#F5F5DC] mb-6 leading-relaxed">
                  {p.sub}
                </p>

                {/* Body text */}
                <p className="text-sm text-[#FCFCF6]/55 font-light leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 04 — SENSORY LIBRARY ──────────────────────────────────────────────── */}
      <SensoryLibrary />

      {/* ─── 05 — PROCESS SECTION ──────────────────────────────────────────────── */}
      <ProcessSection onOpenConsultation={onOpenConsultation} />

    </div>
  );
}
