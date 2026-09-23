import { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SensoryLibrary from '../components/SensoryLibrary';
import ProcessSection from '../components/ProcessSection';

export default function ServicesPage({ onOpenConsultation, onOpenLightbox }) {
  const [activeService, setActiveService] = useState(0);

  const selected = servicesData[activeService];

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
    <div className="animate-page-enter pt-12 pb-24 bg-[#FAF8F5]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-black/[0.08]">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-4">
            <span>THE 10 ARCHITECTURAL DISCIPLINES</span>
            <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl text-[#1E1D1B] font-normal leading-[1.08] tracking-tight">
            What We <span className="italic text-[#9E8255]">Create.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#524D46] font-light leading-relaxed">
            Ten specialized services covering complete interior architecture, modular joinery, and structural metal fabrication across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>
      </section>

      {/* Geometry Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
            ARCHITECTURAL METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1E1D1B]">
            The Geometry of Quietness
          </h2>
          <p className="mt-3 text-sm text-[#736D66] font-light">
            Three core foundations that govern every interior and fabrication project we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {geometryPillars.map((p) => (
            <div key={p.num} className="p-8 bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="font-mono text-xs text-[#9E8255] block mb-4">
                {p.num} / FOUNDATION
              </span>
              <h3 className="font-serif text-2xl text-[#1E1D1B] mb-2">{p.title}</h3>
              <p className="text-xs uppercase font-mono tracking-wider text-[#8C8275] mb-4">{p.sub}</p>
              <p className="text-sm text-[#666057] font-light leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 10 Services Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
            DISCIPLINE CATALOGUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
            Explore All 10 Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 10 Service Cards List */}
          <div className="lg:col-span-6 space-y-3">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={srv.number}
                  onClick={() => setActiveService(idx)}
                  className={`p-5 cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-[#9E8255] shadow-lg ring-1 ring-[#9E8255]'
                      : 'bg-[#F4EFEB] border-black/5 hover:border-black/20 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs text-[#9E8255] font-semibold">{srv.number}</span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#1E1D1B]">{srv.title}</h3>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-45 text-[#9E8255]' : 'text-stone-400'}`} />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-black/10 animate-fadeIn">
                      <p className="text-sm text-[#524D46] font-light leading-relaxed mb-4">
                        {srv.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {srv.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-[#1E1D1B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9E8255]"></span>
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

          {/* Right Column: High-Res Original Client Image & Service Detail Gallery */}
          <div className="lg:col-span-6 sticky top-28 space-y-6">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(selected.gallery, 0, selected.title, selected.title)}
              className="relative w-full h-[460px] border border-black/10 overflow-hidden shadow-2xl bg-white animatic-reflection cursor-pointer group"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              <button className="absolute top-4 right-4 p-2 bg-black/70 backdrop-blur-md text-white rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-black/5 shadow-md">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-1">
                  DISCIPLINE {selected.number} • ORIGINAL CLIENT WORK
                </span>
                <h4 className="font-serif text-2xl text-[#1E1D1B]">
                  {selected.title}
                </h4>
                <p className="text-xs text-[#666057] mt-1 font-light">
                  {selected.tagline}
                </p>
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-[#9E8255]">
                  <span>CLICK TO VIEW FULLSCREEN LIGHTBOX</span>
                  <span>{selected.gallery.length} IMAGES</span>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {selected.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => onOpenLightbox && onOpenLightbox(selected.gallery, i, selected.title, selected.title)}
                  className="w-24 h-16 flex-shrink-0 border border-black/10 overflow-hidden cursor-pointer hover:border-[#9E8255] transition-all hover:scale-105 shadow-sm"
                >
                  <img src={img} alt="Project detail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="p-6 bg-white border border-black/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#9E8255] block">READY TO COMMISSION?</span>
                <span className="font-serif text-lg text-[#1E1D1B]">Inquire for {selected.title}</span>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#1E1D1B] hover:bg-[#9E8255] text-white text-xs uppercase font-mono tracking-widest transition-colors"
              >
                START YOUR PROJECT
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* The Sensory Library */}
      <SensoryLibrary />

      {/* Process Section */}
      <ProcessSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
