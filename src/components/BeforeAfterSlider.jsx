import { useState, useRef, useEffect, useCallback } from 'react';
import { SplitSquareHorizontal, Sparkles } from 'lucide-react';
import { BEFORE_AFTER_PAIRS } from '../data/clientAssets';

export default function BeforeAfterSlider({ onOpenLightbox }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const currentPair = BEFORE_AFTER_PAIRS[activeTab] || BEFORE_AFTER_PAIRS[0];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#4E342E] border-t border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-[#D4AF37]/20 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ON-SITE TRANSFORMATION RIGOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-bold tracking-tight">
              Before & After Handover
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-[#D4AF37] font-normal leading-relaxed max-w-xl">
              Authentic on-site transformations. Compare raw site execution with our finalized, precision-crafted handovers.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-medium text-xs text-[#D4AF37]">
            PAIR 0{activeTab + 1} OF 0{BEFORE_AFTER_PAIRS.length}
          </div>
        </div>

        {/* Transformation Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {BEFORE_AFTER_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold transition-all duration-300 border whitespace-nowrap flex-shrink-0 ${
                activeTab === idx
                  ? 'bg-[#D4AF37] text-[#2B1C19] border-[#D4AF37] shadow-md'
                  : 'bg-[#3E2723] text-[#D4AF37] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#FAF7F0]'
              }`}
            >
              {pair.title}
            </button>
          ))}
        </div>

        {/* Comparison Viewer with Slide-Right Pop Animation */}
        <div
          key={activeTab}
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full h-[360px] sm:h-[520px] lg:h-[660px] border border-[#D4AF37]/20 shadow-2xl overflow-hidden cursor-ew-resize select-none bg-[#2B1C19] rounded-sm animate-slide-right-pop"
        >
          {/* After Image (Background Layer - 100% width) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentPair.afterImage}
              alt="After HYZIN Execution"
              className="w-full h-full object-cover object-center"
            />
            {/* After Tag */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#D4AF37] text-[#2B1C19] text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-lg">
              <span className="hidden sm:inline">HYZIN FINISHED </span>(AFTER)
            </div>
          </div>

          {/* Before Image (Foreground Clipped Layer with clip-path polygon) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <img
              src={currentPair.beforeImage}
              alt="Before On-Site Construction"
              className="w-full h-full object-cover object-center filter grayscale-[25%] brightness-[0.85]"
            />
            {/* Before Tag */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#2B1C19]/90 text-[#FAF7F0] text-[9px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest border border-[#D4AF37]/30 shadow-lg">
              <span className="hidden sm:inline">RAW ON-SITE </span>(BEFORE)
            </div>
          </div>

          {/* Interactive Divider Line & Handle */}
          <div
            className="absolute inset-y-0 w-[2px] bg-white shadow-2xl z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#2B1C19] border-2 border-[#D4AF37] text-white flex items-center justify-center shadow-2xl">
              <SplitSquareHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            </div>
          </div>

          {/* Bottom Information Overlay */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 bg-[#2B1C19]/95 backdrop-blur-md border border-[#D4AF37]/20 text-[#FAF7F0] z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pointer-events-none rounded-sm">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37] block">
                {currentPair.category} • {currentPair.location}
              </span>
              <p className="text-xs sm:text-sm text-[#D4AF37] font-normal mt-0.5 line-clamp-2 sm:line-clamp-none">
                {currentPair.description}
              </p>
            </div>
            {onOpenLightbox && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox([currentPair.beforeImage, currentPair.afterImage], 1, currentPair.title, currentPair.category);
                }}
                className="text-[10px] sm:text-[11px] font-semibold text-[#D4AF37] hover:text-[#FAF7F0] uppercase tracking-wider flex-shrink-0 pointer-events-auto underline"
              >
                View High-Res Lightbox ↗
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
