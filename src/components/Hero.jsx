import { ArrowRight, ChevronDown } from 'lucide-react';
import { statsData } from '../data/testimonialsData';
import { assetUrl } from '../data/clientAssets';

export default function Hero({ onOpenConsultation, onExploreWork }) {
  const heroBg = assetUrl('WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg');

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#09090b]">
      {/* Cinematic Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury Interior Space by HYZIN INTERIOR"
          className="w-full h-full object-cover object-center animate-slow-zoom filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Gradients to blend smoothly with dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Overline Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-none border border-[#c5a065]/30 bg-black/40 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a065]"></span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#e0d6c5] font-medium">
              Interior Design & Specialized Fabrication • South India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#fbf8f3] drop-shadow-2xl">
            Quiet Grandeur.{' '}
            <span className="italic font-light text-[#d4b584] block sm:inline font-serif">
              Sculpted
            </span>{' '}
            Spaces.
          </h1>

          {/* Supporting Statement */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-[#d4cfc5] font-light leading-relaxed max-w-2xl">
            Thoughtfully designed spaces for modern living. We balance spatial purity, raw materiality, and effortless comfort to craft environments that feel timeless and uniquely yours.
          </p>

          {/* Service Area Pill Line */}
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#a39f97] font-medium">
            Residential • Commercial • Turnkey Interiors
          </p>

          {/* Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onOpenConsultation}
              className="group px-8 py-4 bg-[#d4b584] hover:bg-[#faf0dc] text-[#0d0e10] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_4px_25px_rgba(212,181,132,0.25)] flex items-center justify-center space-x-3"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-8 py-4 border border-white/20 hover:border-[#d4b584] text-[#f4efe6] hover:text-[#d4b584] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-sm bg-black/30 flex items-center justify-center space-x-3"
            >
              <span>VIEW SELECTED WORK</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Credibility Bar & Scroll Indicator */}
      <div className="relative z-10 w-full border-t border-white/[0.08] bg-black/50 backdrop-blur-md mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-white/[0.1] pl-4 sm:pl-6 first:border-l-0"
              >
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#faf4e8] font-light tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4b584] font-medium mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-[#8e887e] tracking-wider mt-0.5 hidden sm:block">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pb-3 pt-1">
          <a
            href="#about"
            className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#a39f97] hover:text-[#d4b584] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#c5a065]" />
          </a>
        </div>
      </div>
    </section>
  );
}
