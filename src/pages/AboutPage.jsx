import { Phone } from 'lucide-react';
import RegionalStudios from '../components/RegionalStudios';
import WhyHyzin from '../components/WhyHyzin';
import { BRAND_ASSETS } from '../data/clientAssets';

export default function AboutPage({ onOpenConsultation, onSelectRegion, onOpenLightbox }) {
  return (
    <div className="animate-page-enter pt-12 pb-24 bg-[#FAF8F5]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-4">
            <span>ABOUT HYZIN INTERIOR</span>
            <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl text-[#1E1D1B] font-normal leading-[1.08] tracking-tight">
            Designing with <span className="italic text-[#9E8255]">Purpose</span> & Quiet Permanence.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#524D46] font-light leading-relaxed">
            HYZIN INTERIOR is an architectural interior and structural fabrication practice operating across Kerala, Tamil Nadu, and Karnataka. We sculpt private residences, modular joinery systems, and architectural metalwork that balance pure geometry, natural light, and authentic materiality.
          </p>
        </div>
      </section>

      {/* Philosophy Split Section with Official 3D Branding Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(BRAND_ASSETS.logo3D, 0, 'HYZIN Official 3D Gold Logo Wall', 'Branding')}
              className="relative overflow-hidden border border-black/10 shadow-xl bg-white animatic-reflection cursor-pointer group"
            >
              <img
                src={BRAND_ASSETS.logo3D}
                alt="HYZIN Official 3D Gold Logo Wall"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-black/5">
                <span className="font-serif italic text-xl text-[#1E1D1B] block">
                  “Good interiors don’t simply look beautiful. They make everyday life better.”
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] mt-2 block">
                  HYZIN CORE ARCHITECTURAL PRINCIPLE
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#524D46] font-light text-base leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
              Integrated Interior Architecture & Fabrication
            </h2>
            <p>
              Unlike conventional agencies that outsource critical elements to disparate vendors, HYZIN maintains full sovereign execution. We operate specialized workshops for architectural aluminium extrusion framing, custom stainless steel & MS metal fabrication, and computerized joinery.
            </p>
            <p>
              This seamless marriage of heavy structural engineering with delicate interior cabinetry ensures zero structural compromises: wall drops are millimeter-level aligned, suspended ceilings carry concealed acoustic channels, and steel security doors blend into minimalist paneling.
            </p>
            <p>
              Our turnkey execution methodology ensures that the initial 3D visualization is executed with 1:1 fidelity on-site—supervised directly by our senior leads.
            </p>

            {/* Credibility metric grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-black/10 font-mono text-xs">
              <div className="p-4 bg-white border border-black/5">
                <span className="font-serif text-3xl text-[#1E1D1B] block font-light">10</span>
                <span className="text-[#9E8255] uppercase text-[10px] mt-1 block">Core Disciplines</span>
              </div>
              <div className="p-4 bg-white border border-black/5">
                <span className="font-serif text-3xl text-[#1E1D1B] block font-light">50+</span>
                <span className="text-[#9E8255] uppercase text-[10px] mt-1 block">Delivered Works</span>
              </div>
              <div className="p-4 bg-white border border-black/5">
                <span className="font-serif text-3xl text-[#1E1D1B] block font-light">3 States</span>
                <span className="text-[#9E8255] uppercase text-[10px] mt-1 block">Kerala • TN • KA</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why HYZIN Pillars */}
      <WhyHyzin />

      {/* Three Regional Studios */}
      <RegionalStudios onSelectRegion={onSelectRegion} onOpenLightbox={onOpenLightbox} />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-10 sm:p-14 bg-white border border-black/10 shadow-lg">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
            Initiate a Private Spatial Dialogue
          </h3>
          <p className="mt-2 text-sm text-[#736D66] max-w-lg mx-auto">
            Discuss your upcoming architectural residence, modular installation, or fabrication project directly with our lead team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#1E1D1B] hover:bg-[#9E8255] text-white text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              START YOUR PROJECT
            </button>
            <a
              href="tel:6282549008"
              className="px-8 py-4 border border-black/20 hover:border-[#9E8255] text-[#1E1D1B] text-xs uppercase tracking-[0.25em] font-mono transition-colors flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#9E8255]" />
              <span>+91 6282549008</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
