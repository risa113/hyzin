import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Maximize2, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/clientAssets';
import { statsData } from '../data/testimonialsData';

export default function AnimaticHeroSlider({ onOpenConsultation, onExploreWork, onOpenLightbox }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = HERO_SLIDES;

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
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
      className="relative min-h-[calc(100svh-64px)] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0E11] select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Hardware-Accelerated Fade & Ken Burns Motion */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
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
            {/* Cinematic Gradient Overlays - softened to prevent black void at top */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-[#0D0E11]/30 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E11]/85 via-[#0D0E11]/35 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-28 lg:pt-36 pb-4 sm:pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Location & Discipline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-black/60 backdrop-blur-md border border-[#D4B584]/40 shadow-sm mb-3 sm:mb-6 animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4B584] animate-pulse" />
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FAF8F5] font-medium">
              {active.locationTag}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold text-[#FAF8F5] leading-[1.15] sm:leading-[1.1] tracking-tight drop-shadow-md transition-all duration-500">
            {active.title}{' '}
            <span className="text-[#D4B584] font-extrabold">
              {active.emphasis}
            </span>{' '}
            {active.titleEnd}
          </h1>

          {/* Supporting Statement */}
          <p className="mt-2.5 sm:mt-6 text-xs sm:text-base lg:text-lg text-[#DCD6CE] font-normal leading-relaxed max-w-2xl transition-all duration-500 line-clamp-3 sm:line-clamp-none">
            {active.tagline}
          </p>

          <p className="mt-1.5 sm:mt-3 text-[10px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#D4B584] font-medium">
            {active.badge}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-5">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2.5 group rounded-sm"
            >
              <span>COMMISSION YOUR SPACE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-6 py-2.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-[#FAF8F5] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-center space-x-2.5 rounded-sm"
            >
              <span>EXPLORE ALL 10 DISCIPLINES</span>
            </button>

            {onOpenLightbox && (
              <button
                onClick={() => onOpenLightbox(slides.map(s => s.image), currentSlide, active.title, active.service)}
                className="hidden sm:inline-flex p-4 bg-black/40 hover:bg-[#D4B584] hover:text-black text-white/80 border border-white/10 transition-colors backdrop-blur-md"
                title="View Fullscreen High-Res Photo"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls & Interactive Thumbnails */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#0D0E11]/90 backdrop-blur-md mt-4 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Visual Slide Thumbnails Preview Bar */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full pb-1 scrollbar-none w-full sm:w-auto">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`relative flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-lg sm:rounded-xl border transition-all flex-shrink-0 ${
                  idx === currentSlide 
                    ? 'bg-white/15 border-[#D4B584] shadow-md scale-105' 
                    : 'bg-black/30 border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <div className="w-8 h-6 sm:w-10 sm:h-7 rounded-md sm:rounded-lg overflow-hidden flex-shrink-0">
                  <img src={s.image} alt={s.service} className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium text-white/90 whitespace-nowrap hidden sm:inline pr-1">
                  0{idx + 1}. {s.service}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Credibility Metric Counters */}
        <div className="border-t border-white/[0.06] py-3 sm:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center text-white">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-white/10 pl-3 sm:pl-6 first:border-l-0"
                >
                  <span className="text-lg sm:text-3xl text-[#FAF8F5] font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#D4B584] font-medium mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[9px] text-[#8C867D] tracking-wider hidden sm:block">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
