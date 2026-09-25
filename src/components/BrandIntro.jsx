import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../data/clientAssets';

export default function BrandIntro({ onExploreServices, onOpenLightbox }) {
  const introImage = assetUrl('WhatsApp Image 2026-09-22 at 3.18.17 PM.jpeg');

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-4">
              <span>01 / ABOUT HYZIN</span>
              <span className="w-12 h-[1px] bg-[#C9A84C]/40"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2EDE4] tracking-tight leading-[1.15]">
              WE DESIGN SPACES WITH{' '}
              <span className="text-[#C9A84C] font-bold">CHARACTER.</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-[#C9A84C] font-normal leading-relaxed">
              HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics, functionality, comfort, and personality. From concept to completion, we transform ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#C9A84C] font-normal leading-relaxed">
              Operating with specialized in-house aluminium and steel fabrication workshops alongside bespoke interior joinery, our practice delivers turnkey interior and fabrication excellence across Kerala, Tamil Nadu, and Karnataka. Every detail is engineered for enduring permanence.
            </p>

            {/* Design Philosophy Callout */}
            <div className="mt-10 p-6 sm:p-8 bg-[#0A0A0B] border-l-2 border-[#C9A84C] relative">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium block mb-2">
                OUR PHILOSOPHY
              </span>
              <blockquote className="text-lg sm:text-xl text-[#F2EDE4] font-medium leading-relaxed">
                “Good interiors don’t simply look beautiful. They make everyday life better.”
              </blockquote>
            </div>

            <div className="mt-8">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C] hover:text-[#F2EDE4] font-semibold transition-colors"
              >
                <span>DISCOVER OUR 10 CORE DISCIPLINES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Original Client Photography */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(introImage, 0, 'HYZIN Precision Interior Woodcraft & Framing Site Execution', 'Craftsmanship')}
              className="relative group overflow-hidden border border-white/[0.08] shadow-2xl cursor-pointer"
            >
              <img
                src={introImage}
                alt="Interior Design by HYZIN"
                className="w-full h-[460px] sm:h-[560px] object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#0A0A0B]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] block font-medium">
                    ORIGINAL CLIENT WORK
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[#F2EDE4]">
                    Living Paneling & Ambient Cove
                  </span>
                </div>
                <div className="text-right font-medium text-[10px] text-[#C9A84C]">
                  <div>STUDIO DESK</div>
                  <div className="text-[#C9A84C]">+91 6282549008</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/20 pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
