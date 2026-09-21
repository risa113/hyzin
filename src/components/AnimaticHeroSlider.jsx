import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { statsData } from '../data/testimonialsData';

export default function AnimaticHeroSlider({ onOpenConsultation, onExploreWork }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      title: "Quiet Grandeur.",
      emphasis: "Sculpted",
      titleEnd: "Spaces.",
      tagline: "Thoughtfully designed architectural sanctuaries for modern living.",
      locationTag: "THE BOLGATTY PAVILION • KOCHI, KERALA",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88",
      accent: "Residential • Turnkey • Waterfront"
    },
    {
      id: 2,
      title: "Where Light",
      emphasis: "Transcends",
      titleEnd: "Form.",
      tagline: "Suspended sky galleries sculpted with tactile dark oak and marble.",
      locationTag: "PENTHOUSE V • LAVELLE ROAD, BENGALURU",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
      accent: "Penthouses • Sky Sanctuaries • Private Guilds"
    },
    {
      id: 3,
      title: "Tactile Heritage.",
      emphasis: "Enduring",
      titleEnd: "Purity.",
      tagline: "Ancestral courtyard intelligence reinterpreted with monolithic stone.",
      locationTag: "CHETTINAD MANOR • CHENNAI & KARAIKUDI",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=88",
      accent: "Villas • Heritage Manors • Bespoke Joinery"
    },
    {
      id: 4,
      title: "Monolithic Calm.",
      emphasis: "Highland",
      titleEnd: "Retreat.",
      tagline: "Dry-stacked basalt walls anchored deeply into misty mountain canopies.",
      locationTag: "THE MONOLITH ESTATE • WAYANAD, KERALA",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=88",
      accent: "Villas • Highland Sanctuaries • Basalt Stone"
    },
    {
      id: 5,
      title: "Surgical Purity.",
      emphasis: "Artisanal",
      titleEnd: "Culinary.",
      tagline: "Zero-handle quarter-sawn teak millwork paired with Dekton ceramics.",
      locationTag: "MINIMALIST CULINARY SUITE • CALICUT, KERALA",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2200&q=88",
      accent: "Modular Kitchens • Blum Systems • Teak"
    }
  ];

  // Automatic slide advancement every 4.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 40) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -40) {
      handlePrev();
    }
  };

  const active = slides[currentSlide];

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF8F5] select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Automatic Smooth Fade & Ken Burns Movement */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.04] ${
                idx === currentSlide ? 'animate-ken-burns' : ''
              }`}
            />
            {/* Light luxury architectural atmospheric gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/30 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent"></div>
          </div>
        ))}

        {/* Specular Light Sweep */}
        <div className="absolute inset-0 pointer-events-none animatic-reflection z-20"></div>
      </div>

      {/* Main Slide Typography & Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Location / Commission Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-white/80 backdrop-blur-md border border-[#c5a065]/40 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a065] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#1E1D1B] font-mono font-medium">
              {active.locationTag}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#1A1918] leading-[1.05] tracking-tight drop-shadow-sm transition-all duration-500">
            {active.title}{' '}
            <span className="italic font-light text-[#9E8255] font-serif">
              {active.emphasis}
            </span>{' '}
            {active.titleEnd}
          </h1>

          {/* Supporting Statement */}
          <p className="mt-6 text-base sm:text-xl text-[#4A4641] font-light leading-relaxed max-w-2xl transition-all duration-500">
            {active.tagline}
          </p>

          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C8275] font-mono font-medium">
            {active.accent}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#1E1D1B] hover:bg-[#9E8255] text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg shadow-black/10 flex items-center justify-center space-x-3 group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-8 py-4 bg-white/80 hover:bg-white border border-[#C5A065]/50 text-[#1E1D1B] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-center space-x-3 hover:shadow-md"
            >
              <span>VIEW 50+ WORKS</span>
            </button>
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls & Automatic Timer */}
      <div className="relative z-20 w-full border-t border-black/[0.08] bg-[#FAF8F5]/90 backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Progress & Numbers */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 font-mono text-xs">
              <span className="text-[#9E8255] font-semibold">0{currentSlide + 1}</span>
              <div className="w-24 sm:w-36 h-[2.5px] bg-black/10 relative overflow-hidden">
                <div
                  key={currentSlide}
                  className="h-full bg-[#9E8255] transition-all duration-100 ease-linear"
                  style={{
                    width: '100%',
                    animation: 'autoSlideProgress 4.8s linear infinite'
                  }}
                ></div>
              </div>
              <span className="text-[#8C8275]">0{slides.length}</span>
            </div>

            {/* Slide Title Indicator */}
            <span className="text-xs uppercase font-mono tracking-wider text-[#635E58] hidden md:inline-block">
              {active.locationTag.split('•')[0]}
            </span>
          </div>

          {/* Interactive Arrow Controls & Quick Slide Dots */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 mr-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 transition-all duration-300 ${
                    i === currentSlide ? 'w-6 bg-[#9E8255]' : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="p-2.5 bg-white hover:bg-[#F4EFEB] border border-black/10 text-[#1E1D1B] transition-colors shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-white hover:bg-[#F4EFEB] border border-black/10 text-[#1E1D1B] transition-colors shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 4 Credibility Metric Counters */}
        <div className="border-t border-black/[0.06] py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-black/[0.08] pl-4 sm:pl-6 first:border-l-0"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#1E1D1B] font-light tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#9E8255] font-medium mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-[#7A746B] tracking-wider hidden sm:block">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes autoSlideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
