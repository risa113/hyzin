import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Maximize2, Play, Pause, Sparkles } from 'lucide-react';
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
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0E11] select-none"
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
              className={`w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] ${
                idx === currentSlide ? 'animate-ken-burns' : ''
              }`}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-[#0D0E11]/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E11]/90 via-[#0D0E11]/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Location & Discipline Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-[#D4B584]/40 shadow-sm mb-6 animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4B584] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#FAF8F5] font-mono font-medium">
              {active.locationTag}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#FAF8F5] leading-[1.05] tracking-tight drop-shadow-md transition-all duration-500">
            {active.title}{' '}
            <span className="italic font-light text-[#D4B584] font-serif">
              {active.emphasis}
            </span>{' '}
            {active.titleEnd}
          </h1>

          {/* Supporting Statement */}
          <p className="mt-6 text-base sm:text-xl text-[#DCD6CE] font-light leading-relaxed max-w-2xl transition-all duration-500">
            {active.tagline}
          </p>

          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4B584] font-mono font-medium">
            {active.badge}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 group"
            >
              <span>COMMISSION YOUR SPACE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-center space-x-3"
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
      <div className="relative z-20 w-full border-t border-white/10 bg-[#0D0E11]/90 backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Visual Slide Thumbnails Preview Bar */}
          <div className="flex items-center gap-3 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`relative flex items-center gap-2 p-1.5 rounded-xl border transition-all ${
                  idx === currentSlide 
                    ? 'bg-white/15 border-[#D4B584] shadow-md scale-105' 
                    : 'bg-black/30 border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <div className="w-10 h-7 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={s.image} alt={s.service} className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-mono text-white/90 whitespace-nowrap hidden md:inline pr-1">
                  0{idx + 1}. {s.service}
                </span>
              </button>
            ))}
          </div>

          {/* Controls & Auto Play Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-colors shadow-sm rounded-xl"
              title={isPlaying ? 'Pause Auto Slide' : 'Play Auto Slide'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#D4B584]" />}
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 bg-white/5 hover:bg-[#D4B584] hover:text-black border border-white/10 text-white transition-colors shadow-sm rounded-xl"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-white/5 hover:bg-[#D4B584] hover:text-black border border-white/10 text-white transition-colors shadow-sm rounded-xl"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 4 Credibility Metric Counters */}
        <div className="border-t border-white/[0.06] py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-white">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-white/10 pl-4 sm:pl-6 first:border-l-0"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-light tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#D4B584] font-medium mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-[#8C867D] tracking-wider hidden sm:block">
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
