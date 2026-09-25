import { ArrowRight, Sparkles, Box, Images } from 'lucide-react';
import AnimaticHeroSlider from '../components/AnimaticHeroSlider';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramShowcase from '../components/InstagramShowcase';
import SensoryLibrary from '../components/SensoryLibrary';
import SeoFaqSection from '../components/SeoFaqSection';
import StudioLocationSection from '../components/StudioLocationSection';
import { assetUrl } from '../data/clientAssets';

export default function HomePage({ onNavigate, onSelectProject, onOpenConsultation, onOpenLightbox }) {
  const editorialImage = assetUrl('WhatsApp Image 2026-09-22 at 3.21.55 PM.jpeg');

  return (
    <div className="animate-page-enter">
      {/* 1. Multi-Slide Animatic Hero with Client Projects */}
      <AnimaticHeroSlider
        onOpenConsultation={onOpenConsultation}
        onExploreWork={() => onNavigate('projects')}
        onOpenLightbox={onOpenLightbox}
      />

      {/* 2. 3D Interactive House Model Teaser Callout */}
      <section className="py-12 bg-[#141416] border-b border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0B] text-[#F2EDE4] border border-[#C9A84C]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-3">
                <Box className="w-3.5 h-3.5" /> 3D Interactive House Model
              </div>
              <h3 className="text-2xl sm:text-4xl text-[#F2EDE4] font-bold tracking-tight">
                Experience Our Work in <span className="text-[#C9A84C]">3D Interactive Space</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#C9A84C] font-normal leading-relaxed">
                Rotate 360°, switch between Day Sun, Night Cove Light, and Blueprint Wireframe modes, and inspect real client work hotspots across 6 room zones.
              </p>
            </div>
            <button
              onClick={() => onNavigate('3d-house')}
              className="relative z-10 px-8 py-4 rounded-2xl bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <span>OPEN 3D HOUSE MODEL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Editorial Philosophy & Original Client Craftsmanship */}
      <section className="py-24 sm:py-32 bg-[#1C1C20] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-4">
                <span>01 / ABOUT HYZIN</span>
                <span className="w-12 h-[1px] bg-[#C9A84C]/40"></span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-bold leading-[1.12] tracking-tight">
                WE DESIGN SPACES <br />
                <span className="text-[#C9A84C] font-bold">WITH CHARACTER.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#C9A84C] font-normal leading-relaxed">
                HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics, functionality, comfort, and personality. From concept to completion, we transform ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
              </p>

              {/* Water & Glass Reflective Quote Card */}
              <div className="mt-8 p-6 sm:p-8 bg-[#141416] border-l-2 border-[#C9A84C] shadow-lg shadow-black/20 relative animatic-reflection border border-[#C9A84C]/20">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium block mb-2">
                  OUR PHILOSOPHY
                </span>
                <blockquote className="text-lg sm:text-xl text-[#F2EDE4] font-medium leading-relaxed">
                  “Good interiors don’t simply look beautiful. They make everyday life better.”
                </blockquote>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#F2EDE4] hover:text-[#C9A84C] font-semibold transition-colors"
                >
                  <span>DISCOVER OUR DESIGN & FABRICATION ETHOS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Work Image with Original Client Work */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(editorialImage, 0, 'HYZIN Living Room Feature Wall Louver Paneling', 'Paneling')}
                className="relative overflow-hidden border border-[#C9A84C]/20 shadow-2xl bg-[#141416] animatic-reflection cursor-pointer group"
              >
                <img
                  src={editorialImage}
                  alt="HYZIN Living & Paneling"
                  className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0A0B]/90 backdrop-blur-md border border-[#C9A84C]/20 shadow-md">
                  <span className="text-[9px] uppercase tracking-wider text-[#C9A84C] font-medium block">
                    ORIGINAL CLIENT WORK
                  </span>
                  <span className="text-base font-semibold text-[#F2EDE4] block">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. The 10 Core Services Interactive Showcase */}
      <ServicesSection onOpenLightbox={onOpenLightbox} />

      {/* 5. 72-Photo Client Gallery Banner */}
      <section className="py-12 bg-[#141416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0B] border border-[#C9A84C]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-3">
                <Images className="w-3.5 h-3.5 text-[#C9A84C]" /> Master Photo Gallery (72 Photos)
              </div>
              <h3 className="text-2xl sm:text-3xl text-[#F2EDE4] font-bold tracking-tight">
                Browse All 72 Verified <span className="text-[#C9A84C]">Kerala Client Photos</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#C9A84C] font-normal leading-relaxed">
                Filter by Kitchen Cabinet, Wall Drop, Paneling, Ceilings, Aluminium, Steel Doors, or Steel Fabrication with live search and high-res lightbox.
              </p>
            </div>
            <button
              onClick={() => onNavigate('photo-vault')}
              className="px-8 py-4 rounded-2xl bg-[#C9A84C] text-[#0A0A0B] text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#F2EDE4] transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <span>OPEN PHOTO VAULT (72 PHOTOS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>



      {/* 7. Authentic On-Site Before / After Transformation Slider */}
      <BeforeAfterSlider onOpenLightbox={onOpenLightbox} />

      {/* 8. Material Specimens */}
      <SensoryLibrary onOpenLightbox={onOpenLightbox} />

      {/* 9. Testimonials & FAQs */}
      <TestimonialsSection />
      <SeoFaqSection onOpenConsultation={onOpenConsultation} />
      <InstagramShowcase onOpenLightbox={onOpenLightbox} />

      {/* 10. Studio Workshop & Official Map Location */}
      <StudioLocationSection onOpenConsultation={onOpenConsultation} />

      {/* 11. Quick Consultation Callout */}
      <section className="py-20 bg-[#0A0A0B] text-[#F2EDE4] text-center border-t border-[#C9A84C]/20">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C9A84C] block mb-3">
            COMMENCEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#F2EDE4] font-bold tracking-tight mb-4">
            Have a space in mind? Let’s sculpt it together.
          </h2>
          <p className="text-sm sm:text-base text-[#C9A84C] font-normal max-w-xl mx-auto mb-8">
            Accepting residential villas, apartments, and fabrication commissions across Kerala, Tamil Nadu, and Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase tracking-[0.25em] font-bold transition-colors shadow-lg"
            >
              START YOUR PROJECT
            </button>
            <a
              href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#F2EDE4] hover:text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              WHATSAPP DIRECT (+91 6282549008)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
