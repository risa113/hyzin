import { ArrowRight, Compass, ShieldCheck, Award, MapPin } from 'lucide-react';
import RegionalStudios from '../components/RegionalStudios';
import WhyHyzin from '../components/WhyHyzin';
import { statsData } from '../data/testimonialsData';

export default function AboutPage({ onOpenConsultation, onSelectRegion }) {
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
            HYZIN INTERIOR is an architectural interior practice operating across Kerala, Tamil Nadu, and Karnataka. We sculpt private residences, waterfront villas, penthouses, and commercial spaces that balance pure geometry, natural light, and authentic materiality.
          </p>
        </div>
      </section>

      {/* Philosophy Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-black/10 shadow-xl bg-white animatic-reflection">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="HYZIN Design Philosophy"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
              Spaces Designed Around Human Rituals
            </h2>
            <p>
              We believe a home should be an antidote to the chaos of modern living. Every floor plan we develop begins with an honest study of movement, ventilation, morning sunlight, and acoustic calm.
            </p>
            <p>
              Instead of relying on fragile surface treatments or fleeting digital trends, our practice champions raw tactile honesty: hand-flamed local granite, quarter-sawn Nilambur teak, honed Italian travertine, and hand-loomed textiles woven by traditional artisans.
            </p>
            <p>
              Our turnkey execution methodology ensures that the initial 3D visualization is executed with 1:1 fidelity on-site—supervised directly by our senior architectural leads.
            </p>

            {/* Credibility metric grid */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-black/10 font-mono text-xs">
              <div className="p-4 bg-white border border-black/5">
                <span className="font-serif text-3xl text-[#1E1D1B] block font-light">4.9 ★</span>
                <span className="text-[#9E8255] uppercase text-[10px] mt-1 block">Patron Satisfaction</span>
              </div>
              <div className="p-4 bg-white border border-black/5">
                <span className="font-serif text-3xl text-[#1E1D1B] block font-light">3 States</span>
                <span className="text-[#9E8255] uppercase text-[10px] mt-1 block">Kerala • TN • Karnataka</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why HYZIN Pillars */}
      <WhyHyzin />

      {/* Three Regional Studios */}
      <RegionalStudios onSelectRegion={onSelectRegion} />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-10 sm:p-14 bg-white border border-black/10 shadow-lg">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
            Initiate a Private Spatial Dialogue
          </h3>
          <p className="mt-2 text-sm text-[#736D66] max-w-lg mx-auto">
            Discuss your upcoming architectural residence or commercial space with our studio leads.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#1E1D1B] hover:bg-[#9E8255] text-white text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
