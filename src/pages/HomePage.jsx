import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import AnimaticHeroSlider from '../components/AnimaticHeroSlider';
import { projectsData } from '../data/projectsData';
import { materialsData } from '../data/materialsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramShowcase from '../components/InstagramShowcase';

export default function HomePage({ onNavigate, onSelectProject, onOpenConsultation }) {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="animate-page-enter">
      {/* 1. Multi-Slide Animatic Hero */}
      <AnimaticHeroSlider
        onOpenConsultation={onOpenConsultation}
        onExploreWork={() => onNavigate('projects')}
      />

      {/* 2. Water / Glass Light Reflection Editorial Intro */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-4">
                <span>01 / ABOUT HYZIN</span>
                <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl text-[#1E1D1B] font-normal leading-[1.12]">
                WE DESIGN SPACES <br />
                <span className="italic font-light text-[#9E8255]">WITH CHARACTER.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#524D46] font-light leading-relaxed">
                HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics, functionality, comfort, and personality. From concept to completion, we transform ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
              </p>

              {/* Water & Glass Reflective Quote Card */}
              <div className="mt-8 p-6 sm:p-8 bg-white border-l-2 border-[#9E8255] shadow-lg shadow-black/5 relative animatic-reflection">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E8255] font-mono block mb-2">
                  OUR PHILOSOPHY
                </span>
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1E1D1B] italic leading-snug">
                  “Good interiors don’t simply look beautiful. They make everyday life better.”
                </blockquote>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1E1D1B] hover:text-[#9E8255] font-semibold transition-colors"
                >
                  <span>DISCOVER OUR ARCHITECTURAL ETHOS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Architectural Image with Mirror Reflection */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden border border-black/10 shadow-2xl bg-white animatic-reflection">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="HYZIN Architectural Living"
                  className="w-full h-[440px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-black/5 shadow-md">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#9E8255] block">
                    REGIONAL ATELIER
                  </span>
                  <span className="font-serif text-base text-[#1E1D1B] block">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Featured Sanctuaries Carousel / Preview */}
      <section className="py-24 bg-[#F4EFEB] border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/[0.08] pb-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
                SELECTED PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E1D1B]">
                Curated Sanctuaries
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E8255] hover:text-[#1E1D1B] font-mono transition-colors"
            >
              <span>VIEW ALL {projectsData.length} COMMISSIONS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="group cursor-pointer bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden animatic-reflection">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-md text-[9px] uppercase font-mono tracking-wider text-[#1E1D1B]">
                    {p.type}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#1E1D1B] text-white text-[9px] uppercase font-mono tracking-wider">
                    {p.state}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-1">
                      {p.location} • {p.year}
                    </span>
                    <h3 className="font-serif text-xl text-[#1E1D1B] group-hover:text-[#9E8255] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#9E8255]">
                    <span>EXPLORE CASE STUDY</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 5. Sensory Material Archive Teaser */}
      <section className="py-24 bg-[#FAF8F5] border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
                AUTHENTIC MATERIALITY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1E1D1B]">
                The Sensory Library
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-4 md:mt-0 text-xs uppercase font-mono tracking-widest text-[#9E8255] hover:text-[#1E1D1B]"
            >
              EXPLORE ALL SPECIMENS & SERVICES →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {materialsData.map((m) => (
              <div key={m.id} className="p-5 bg-white border border-black/10 shadow-sm">
                <div className="aspect-video overflow-hidden mb-4 bg-stone-100">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] uppercase font-mono text-[#9E8255] block">
                  {m.category}
                </span>
                <h4 className="font-serif text-lg text-[#1E1D1B] mt-1">{m.name}</h4>
                <p className="text-xs text-[#7A746B] mt-1 line-clamp-2">{m.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials & Instagram */}
      <TestimonialsSection />
      <InstagramShowcase />

      {/* 7. Quick Consultation Callout */}
      <section className="py-20 bg-[#1E1D1B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#D4B584] block mb-3">
            COMMENCEMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] mb-4">
            Have a space in mind? Let’s sculpt it together.
          </h2>
          <p className="text-sm sm:text-base text-[#D4CFCE] font-light max-w-xl mx-auto mb-8">
            Accepting residential, penthouse, and commercial commissions across Kerala, Tamil Nadu, and Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              RESERVE SPATIAL BRIEF
            </button>
            <a
              href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 hover:border-[#D4B584] text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-mono transition-colors"
            >
              WHATSAPP DIRECT (+91 6282549008)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
