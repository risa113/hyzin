import { ArrowRight, Sparkles, Box, Images } from 'lucide-react';
import AnimaticHeroSlider from '../components/AnimaticHeroSlider';
import ServicesSection from '../components/ServicesSection';
import CuratedWork from '../components/CuratedWork';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramShowcase from '../components/InstagramShowcase';
import SensoryLibrary from '../components/SensoryLibrary';
import SeoFaqSection from '../components/SeoFaqSection';
import StudioLocationSection from '../components/StudioLocationSection';
import { assetUrl } from '../data/clientAssets';

export default function HomePage({ onNavigate, onSelectProject, onOpenConsultation, onOpenLightbox }) {
  const editorialImage = assetUrl('WhatsApp Image 2026-09-22 at 3.15.08 PM.jpeg');

  return (
    <div className="animate-page-enter">
      {/* 1. Multi-Slide Animatic Hero with Client Projects */}
      <AnimaticHeroSlider
        onOpenConsultation={onOpenConsultation}
        onExploreWork={() => onNavigate('projects')}
        onOpenLightbox={onOpenLightbox}
      />

      {/* 2. 3D Interactive House Model Teaser Callout */}
      <section className="py-12 bg-[#FAF8F5] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1D1B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A065]/20 border border-[#C5A065]/40 text-[#D4B584] text-xs font-semibold tracking-wider uppercase mb-3">
                <Box className="w-3.5 h-3.5" /> 3D Interactive House Model
              </div>
              <h3 className="text-2xl sm:text-4xl text-[#FAF8F5] font-bold tracking-tight">
                Experience Our Work in <span className="text-[#C5A065]">3D Interactive Space</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#D4CFCE] font-normal leading-relaxed">
                Rotate 360°, switch between Day Sun, Night Cove Light, and Blueprint Wireframe modes, and inspect real client work hotspots across 6 room zones.
              </p>
            </div>
            <button
              onClick={() => onNavigate('3d-house')}
              className="relative z-10 px-8 py-4 rounded-2xl bg-[#C5A065] hover:bg-[#FAF0DC] text-[#111113] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <span>OPEN 3D HOUSE MODEL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Editorial Philosophy & Original Client Craftsmanship */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#9E8255] font-medium mb-4">
                <span>01 / ABOUT HYZIN</span>
                <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#1E1D1B] font-bold leading-[1.12] tracking-tight">
                WE DESIGN SPACES <br />
                <span className="text-[#9E8255] font-bold">WITH CHARACTER.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#524D46] font-normal leading-relaxed">
                HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics, functionality, comfort, and personality. From concept to completion, we transform ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
              </p>

              {/* Water & Glass Reflective Quote Card */}
              <div className="mt-8 p-6 sm:p-8 bg-white border-l-2 border-[#9E8255] shadow-lg shadow-black/5 relative animatic-reflection">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E8255] font-medium block mb-2">
                  OUR PHILOSOPHY
                </span>
                <blockquote className="text-lg sm:text-xl text-[#1E1D1B] font-medium leading-relaxed">
                  “Good interiors don’t simply look beautiful. They make everyday life better.”
                </blockquote>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1E1D1B] hover:text-[#9E8255] font-semibold transition-colors"
                >
                  <span>DISCOVER OUR DESIGN & FABRICATION ETHOS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Work Image with Original Client Work */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(editorialImage, 0, 'HYZIN Living & Fluted Wood Detailing', 'Paneling')}
                className="relative overflow-hidden border border-black/10 shadow-2xl bg-white animatic-reflection cursor-pointer group"
              >
                <img
                  src={editorialImage}
                  alt="HYZIN Living & Paneling"
                  className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-black/5 shadow-md">
                  <span className="text-[9px] uppercase tracking-wider text-[#9E8255] font-medium block">
                    ORIGINAL CLIENT WORK
                  </span>
                  <span className="text-base font-semibold text-[#1E1D1B] block">
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
      <section className="py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5DEC9] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A065]/15 border border-[#C5A065]/30 text-[#8C6D3B] text-xs font-semibold tracking-wider uppercase mb-3">
                <Images className="w-3.5 h-3.5 text-[#C5A065]" /> Master Photo Gallery (72 Photos)
              </div>
              <h3 className="text-2xl sm:text-3xl text-[#1E1D1B] font-bold tracking-tight">
                Browse All 72 Verified <span className="text-[#C5A065]">Kerala Client Photos</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666055] font-normal leading-relaxed">
                Filter by Kitchen Cabinet, Wall Drop, Paneling, Ceilings, Aluminium, Steel Doors, or Steel Fabrication with live search and high-res lightbox.
              </p>
            </div>
            <button
              onClick={() => onNavigate('photo-vault')}
              className="px-8 py-4 rounded-2xl bg-[#1E1D1B] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#C5A065] transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <span>OPEN PHOTO VAULT (72 PHOTOS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Curated Work with 10 Service Filters */}
      <CuratedWork
        onSelectProject={onSelectProject}
        onOpenLightbox={onOpenLightbox}
        onExploreAll={() => onNavigate('projects')}
      />

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
      <section className="py-20 bg-[#141416] text-white text-center border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#D4B584] block mb-3">
            COMMENCEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-bold tracking-tight mb-4">
            Have a space in mind? Let’s sculpt it together.
          </h2>
          <p className="text-sm sm:text-base text-[#D4CFCE] font-normal max-w-xl mx-auto mb-8">
            Accepting residential villas, apartments, and fabrication commissions across Kerala, Tamil Nadu, and Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] text-xs uppercase tracking-[0.25em] font-semibold transition-colors shadow-lg"
            >
              START YOUR PROJECT
            </button>
            <a
              href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 hover:border-[#D4B584] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              WHATSAPP DIRECT (+91 6282549008)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
