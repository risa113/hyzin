import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/clientAssets';
import { statsData } from '../data/testimonialsData';

export default function AnimaticHeroSlider({ onOpenConsultation, onExploreWork, onOpenLightbox }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = HERO_SLIDES;

  // Auto-play timer with relaxed luxury duration (12 seconds)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

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
      className="relative min-h-[calc(100svh-64px)] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#2B1C19] select-none w-full max-w-full no-reveal"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Hardware-Accelerated Fade & Ken Burns Motion */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1400 ease-in-out overflow-hidden ${
              idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] ${
                idx === currentSlide ? 'animate-ken-burns' : ''
              }`}
            />
            {/* Cinematic Gradient Overlays in Coffee Brown */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19] via-[#4E342E]/40 to-[#2B1C19]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B1C19]/90 via-[#4E342E]/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Slide Content - Luxury Pop-Up Text Animation on Slide Change */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-28 lg:pt-36 pb-4 sm:pb-8 flex-1 flex flex-col justify-center">
        <div key={currentSlide} className="max-w-3xl">
          
          {/* Location & Discipline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-[#2B1C19]/80 backdrop-blur-md border border-[#D4AF37]/50 shadow-sm mb-3 sm:mb-6 animate-hero-pop">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FAF7F0] font-medium">
              {active.locationTag}
            </span>
          </div>

          {/* Editorial Headline with Bottom-to-Top Pop Up */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold text-[#FAF7F0] leading-[1.15] sm:leading-[1.1] tracking-tight drop-shadow-md animate-hero-pop delay-100">
            {active.title}{' '}
            <span className="text-[#D4AF37] font-extrabold">
              {active.emphasis}
            </span>{' '}
            {active.titleEnd}
          </h1>

          {/* Supporting Statement */}
          <p className="mt-2.5 sm:mt-6 text-xs sm:text-base lg:text-lg text-[#D4AF37] font-normal leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none animate-hero-pop delay-200">
            {active.tagline}
          </p>

          <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#D4AF37] font-medium animate-hero-pop delay-300">
            {active.badge}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-5 animate-hero-pop delay-400">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2.5 group rounded-sm"
            >
              <span>COMMISSION YOUR SPACE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-6 py-2.5 sm:px-8 sm:py-4 bg-[#3E2723]/80 hover:bg-[#4E342E] border border-[#D4AF37]/30 text-[#FAF7F0] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-center space-x-2.5 rounded-sm"
            >
              <span>EXPLORE ALL 10 DISCIPLINES</span>
            </button>
          </div>

        </div>
      </div>

      {/* 4 Credibility Metric Counters */}
      <div className="relative z-20 w-full max-w-full overflow-hidden border-t border-[#D4AF37]/20 bg-[#2B1C19]/95 backdrop-blur-md mt-4 sm:mt-12 py-3 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center text-white">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-[#D4AF37]/20 pl-3 sm:pl-6 first:border-l-0"
                >
                  <span className="text-lg sm:text-3xl text-[#FAF7F0] font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#D4AF37] font-medium mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[9px] text-[#D4AF37] tracking-wider hidden sm:block">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

    </section>
  );
}
