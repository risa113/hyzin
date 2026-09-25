import { Phone } from 'lucide-react';
import RegionalStudios from '../components/RegionalStudios';
import WhyHyzin from '../components/WhyHyzin';
import { BRAND_ASSETS } from '../data/clientAssets';

export default function AboutPage({ onOpenConsultation, onSelectRegion, onOpenLightbox }) {
  return (
    <div className="animate-page-enter pt-12 pb-24 bg-[#1C1C20]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#C9A84C]/20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-4">
            <span>ABOUT HYZIN INTERIOR</span>
            <span className="w-12 h-[1px] bg-[#C9A84C]/40"></span>
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#F2EDE4] font-extrabold leading-[1.12] tracking-tight">
            Designing with <span className="text-[#C9A84C]">Purpose</span> & Quiet Permanence.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#C9A84C] font-normal leading-relaxed">
            HYZIN INTERIOR is an interior design and structural fabrication practice operating across Kerala, Tamil Nadu, and Karnataka. We sculpt private residences, modular joinery systems, and specialized metalwork that balance pure geometry, natural light, and authentic materiality.
          </p>
        </div>
      </section>

      {/* Philosophy Split Section with Official 3D Branding Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(BRAND_ASSETS.logo3D, 0, 'HYZIN Official 3D Gold Logo Wall', 'Branding')}
              className="relative overflow-hidden border border-[#C9A84C]/20 shadow-2xl bg-[#141416] animatic-reflection cursor-pointer group"
            >
              <img
                src={BRAND_ASSETS.logo3D}
                alt="HYZIN Official 3D Gold Logo Wall"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0A0A0B]/95 backdrop-blur-md border border-[#C9A84C]/20">
                <span className="text-lg sm:text-xl font-medium text-[#F2EDE4] block leading-snug">
                  “Good interiors don’t simply look beautiful. They make everyday life better.”
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C9A84C] mt-2 block">
                  HYZIN CORE DESIGN PRINCIPLE
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#C9A84C] font-normal text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F2EDE4] font-bold tracking-tight">
              Integrated Interior Design & Specialized Fabrication
            </h2>
            <p>
              Unlike conventional agencies that outsource critical elements to disparate vendors, HYZIN maintains full sovereign execution. We operate specialized workshops for modular aluminium extrusion framing, custom stainless steel & MS metal fabrication, and computerized joinery.
            </p>
            <p>
              This seamless marriage of heavy structural engineering with delicate interior cabinetry ensures zero structural compromises: wall drops are millimeter-level aligned, suspended ceilings carry concealed acoustic channels, and steel security doors blend into minimalist paneling.
            </p>
            <p>
              Our turnkey execution methodology ensures that the initial 3D visualization is executed with 1:1 fidelity on-site—supervised directly by our senior leads.
            </p>

            {/* Credibility metric grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C9A84C]/20 text-xs">
              <div className="p-4 bg-[#141416] border border-[#C9A84C]/20">
                <span className="text-2xl sm:text-3xl text-[#F2EDE4] block font-bold tracking-tight">10</span>
                <span className="text-[#C9A84C] uppercase text-[10px] font-semibold mt-1 block">Core Disciplines</span>
              </div>
              <div className="p-4 bg-[#141416] border border-[#C9A84C]/20">
                <span className="text-2xl sm:text-3xl text-[#F2EDE4] block font-bold tracking-tight">50+</span>
                <span className="text-[#C9A84C] uppercase text-[10px] font-semibold mt-1 block">Delivered Works</span>
              </div>
              <div className="p-4 bg-[#141416] border border-[#C9A84C]/20">
                <span className="text-2xl sm:text-3xl text-[#F2EDE4] block font-bold tracking-tight">3 States</span>
                <span className="text-[#C9A84C] uppercase text-[10px] font-semibold mt-1 block">Kerala • TN • KA</span>
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
        <div className="p-10 sm:p-14 bg-[#141416] border border-[#C9A84C]/20 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#F2EDE4] font-bold tracking-tight">
            Initiate a Private Spatial Dialogue
          </h3>
          <p className="mt-2 text-sm text-[#C9A84C] max-w-lg mx-auto font-normal">
            Discuss your upcoming interior design, modular installation, or fabrication project directly with our lead team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase tracking-[0.25em] font-semibold transition-colors shadow-lg"
            >
              START YOUR PROJECT
            </button>
            <a
              href="tel:6282549008"
              className="px-8 py-4 border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#F2EDE4] hover:text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>+91 6282549008</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
