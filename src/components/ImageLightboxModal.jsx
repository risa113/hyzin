import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, onClose, images = [], initialIndex = 0, title = "", category = "" }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const [prevInitial, setPrevInitial] = useState(initialIndex);
  if (initialIndex !== prevInitial) {
    setPrevInitial(initialIndex);
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const toggleZoom = (e) => {
    if (e) e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3 text-white">
          <div className="w-2 h-2 rounded-full bg-[#D4B584] animate-pulse"></div>
          <div>
            <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#D4B584] block">
              {category || 'HYZIN ORIGINAL CLIENT WORK'}
            </span>
            <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#FAF8F5] line-clamp-1">
              {title || 'Project Specification'}
            </h4>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleZoom}
            className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 bg-white/10 hover:bg-[#D4B584] hover:text-[#111113] text-white rounded-full transition-colors"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-5xl max-h-[85vh] flex items-center justify-center overflow-hidden">
          {currentImg?.includes('.mp4') ? (
            <video
              src={currentImg}
              controls
              autoPlay
              loop
              playsInline
              className="max-h-[82vh] max-w-full rounded-sm shadow-2xl"
            />
          ) : (
            <img
              src={currentImg}
              alt={title}
              className={`max-h-[82vh] max-w-full object-contain transition-transform duration-300 rounded-sm shadow-2xl ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={toggleZoom}
            />
          )}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-[#D4B584] hover:text-[#111113] text-white backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-black/60 hover:bg-[#D4B584] hover:text-[#111113] text-white backdrop-blur-md rounded-full transition-all duration-300 shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Counter & Strip */}
      <div
        className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between z-50 bg-gradient-to-t from-black/80 via-black/40 to-transparent gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs text-[#D4B584] font-medium tracking-wider">
          IMAGE {currentIndex + 1} OF {images.length}
        </div>

        {images.length > 1 && (
          <div className="flex items-center space-x-2 overflow-x-auto max-w-md py-1 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex(idx);
                }}
                className={`w-12 h-12 flex-shrink-0 border-2 transition-all duration-300 rounded overflow-hidden ${
                  idx === currentIndex
                    ? 'border-[#D4B584] scale-105 shadow-md'
                    : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="text-[11px] text-stone-400 font-normal">
          Click image or zoom button to toggle 1.5x zoom
        </div>
      </div>
    </div>
  );
}
