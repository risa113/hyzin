import { useState } from 'react';
import { ArrowUpRight, Check, Compass, Eye, Shield, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SensoryLibrary from '../components/SensoryLibrary';
import ProcessSection from '../components/ProcessSection';

export default function ServicesPage({ onOpenConsultation }) {
  const [activeService, setActiveService] = useState(0);

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
      title: "Artisanal Millwork & Craft",
      sub: "Concealed joinery and tailored ergonomic balance.",
      text: "Every wardrobe edge, kitchen pocket door, and acoustic ceiling baffle is engineered to millimeter tolerances by master craftsmen, eliminating visual clutter completely."
    }
  ];

  return (
    <div className="animate-page-enter pt-12 pb-24 bg-[#FAF8F5]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-black/[0.08]">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-4">
            <span>SERVICES & DISCIPLINES</span>
            <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl text-[#1E1D1B] font-normal leading-[1.08] tracking-tight">
            What We <span className="italic text-[#9E8255]">Create.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#524D46] font-light leading-relaxed">
            From comprehensive residential interior architecture and turnkey execution to custom modular kitchens and wardrobe systems across Kerala, Tamil Nadu, and Karnataka.
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
            Three core architectural foundations that govern every blueprint we draw.
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

      {/* Interactive Services Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="lg:col-span-6 space-y-4">
            {servicesData.map((srv, idx) => {
              const isSelected = activeService === idx;
              return (
                <div
                  key={srv.number}
                  onClick={() => setActiveService(idx)}
                  className={`p-6 cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-[#9E8255] shadow-lg'
                      : 'bg-[#F4EFEB] border-black/5 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs text-[#9E8255]">{srv.number}</span>
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

          <div className="lg:col-span-6 relative min-h-[460px]">
            <div className="relative w-full h-full min-h-[460px] border border-black/10 overflow-hidden shadow-2xl bg-white animatic-reflection">
              <img
                src={servicesData[activeService].image}
                alt={servicesData[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-black/5 shadow-md">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-1">
                  DISCIPLINE {servicesData[activeService].number}
                </span>
                <h4 className="font-serif text-2xl text-[#1E1D1B]">
                  {servicesData[activeService].title}
                </h4>
                <p className="text-xs text-[#666057] mt-1 font-light">
                  {servicesData[activeService].tagline}
                </p>
              </div>
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
