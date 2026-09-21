import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export default function BrandIntro({ onExploreServices }) {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0d0e10] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c5a065]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-4">
              <span>01 / ABOUT HYZIN</span>
              <span className="w-12 h-[1px] bg-[#c5a065]/40"></span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#fbf8f3] tracking-tight leading-[1.12]">
              WE DESIGN SPACES WITH{' '}
              <span className="italic text-[#d4b584] font-serif">CHARACTER.</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-[#ccc5b8] font-light leading-relaxed">
              HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics, functionality, comfort, and personality. From concept to completion, we transform ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#a39c90] font-light leading-relaxed">
              Serving the discerning architectural landscape across Kerala, Tamil Nadu, and Karnataka, our practice approaches each residence as a bespoke living portrait of the individuals who inhabit it. We reject generic trends in favor of enduring materiality, tactile serenity, and seamless spatial flow.
            </p>

            {/* Architectural Philosophy Callout */}
            <div className="mt-10 p-6 sm:p-8 bg-[#131418] border-l-2 border-[#c5a065] relative">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a065] font-mono block mb-2">
                OUR PHILOSOPHY
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#f3ece2] italic leading-snug">
                “Good interiors don’t simply look beautiful. They make everyday life better.”
              </blockquote>
            </div>

            <div className="mt-8">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#d4b584] hover:text-[#faf2e3] transition-colors"
              >
                <span>DISCOVER OUR CAPABILITIES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-white/[0.08] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural Interior by HYZIN"
                className="w-full h-[460px] sm:h-[560px] object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#0e0f12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a065] block font-mono">
                    REGIONAL PRACTICE
                  </span>
                  <span className="font-serif text-base sm:text-lg text-[#f7f2ea]">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                </div>
                <div className="text-right font-mono text-[10px] text-[#a39e94]">
                  <div>STUDIO DESK</div>
                  <div className="text-[#d4b584]">+91 6282549008</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#c5a065]/20 pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
