import { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Home, UtensilsCrossed, BedDouble } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState('living');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // 3 Fully Interior-to-Interior transformation pairs (INSIDE HOUSE TO INSIDE HOUSE)
  const roomTransformations = {
    living: {
      id: 'living',
      title: 'Living Room Sanctuary',
      beforeLabel: 'Standard Inside House (Before)',
      afterLabel: 'HYZIN Luxury Interior (After)',
      beforeDesc: 'Basic empty walls, standard flat lighting, plain flooring.',
      afterDesc: 'Travertine stone feature spine, acoustic timber baffles, circadian 2700K ambient illumination.',
      // High-res inside living room before (plain/standard interior room)
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80',
      // High-res inside living room after (stunning luxury interior living room by HYZIN)
      afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85'
    },
    kitchen: {
      id: 'kitchen',
      title: 'Culinary Island Suite',
      beforeLabel: 'Standard Inside House (Before)',
      afterLabel: 'HYZIN Luxury Interior (After)',
      beforeDesc: 'Standard builder cabinets, basic tiles, harsh overhead tubelight.',
      afterDesc: 'Waterfall marble island, quarter-sawn teak millwork, architectural black pendant lights.',
      // High-res inside kitchen before
      beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1800&q=80',
      // High-res inside kitchen after (luxury modern kitchen matching user reference)
      afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85'
    },
    bedroom: {
      id: 'bedroom',
      title: 'Master Bedroom Suite',
      beforeLabel: 'Standard Inside House (Before)',
      afterLabel: 'HYZIN Luxury Interior (After)',
      beforeDesc: 'Bare plain walls, uninspired layout, standard wardrobe.',
      afterDesc: 'Bouclé acoustic headboard walls, floating teak platform bed, mood cove illumination.',
      // High-res inside bedroom before
      beforeImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1800&q=80',
      // High-res inside bedroom after (luxury master suite)
      afterImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=85'
    }
  };

  const currentRoom = roomTransformations[activeTab];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Subtle auto-nudge on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderPosition(42);
      setTimeout(() => setSliderPosition(58), 600);
      setTimeout(() => setSliderPosition(50), 1200);
    }, 1200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-black/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-3">
            <Sparkles className="w-3 h-3" />
            <span>INSIDE HOME TRANSFORMATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1E1D1B] font-normal tracking-tight">
            Inside House: Before & <span className="italic text-[#9E8255]">After HYZIN</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#524D46] font-light leading-relaxed">
            Witness how the exact same interior room inside an ordinary house is sculpted into an ultra-luxury, high-end architectural haven.
          </p>

          {/* Room Selector Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EFEBE3] border border-black/10 rounded-none space-x-1">
            <button
              onClick={() => setActiveTab('living')}
              className={`px-4 sm:px-6 py-2 text-xs uppercase font-mono tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'living'
                  ? 'bg-[#1E1D1B] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#635E58] hover:text-[#1E1D1B]'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Living Room</span>
            </button>

            <button
              onClick={() => setActiveTab('kitchen')}
              className={`px-4 sm:px-6 py-2 text-xs uppercase font-mono tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'kitchen'
                  ? 'bg-[#1E1D1B] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#635E58] hover:text-[#1E1D1B]'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Kitchen & Island</span>
            </button>

            <button
              onClick={() => setActiveTab('bedroom')}
              className={`px-4 sm:px-6 py-2 text-xs uppercase font-mono tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'bedroom'
                  ? 'bg-[#1E1D1B] text-[#FAF8F5] font-semibold shadow-sm'
                  : 'text-[#635E58] hover:text-[#1E1D1B]'
              }`}
            >
              <BedDouble className="w-3.5 h-3.5" />
              <span>Master Bedroom</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Container Styled Exactly Like User's Reference */}
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            className="relative w-full h-[460px] sm:h-[600px] lg:h-[660px] select-none overflow-hidden border border-black/15 shadow-2xl cursor-ew-resize rounded-none bg-[#F3EFE8]"
          >
            {/* 1. AFTER (Inside Home Transformed by HYZIN - Right Side / Full Background) */}
            <img
              src={currentRoom.afterImage}
              alt="Inside Home After HYZIN Luxury Work"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter brightness-[0.98] contrast-[1.04]"
            />

            {/* Label: HYZIN Luxury Interior */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-[#1E1D1B]/95 backdrop-blur-md border border-[#D4B584] text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-[#D4B584] pointer-events-none shadow-xl z-10 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B584] animate-pulse"></span>
              <span>HYZIN LUXURY TRANSFORMATION (INSIDE)</span>
            </div>

            {/* 2. BEFORE (Standard Inside House - Left Side) - Clipped by Slider */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none transition-[clip-path] duration-75 ease-out"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentRoom.beforeImage}
                alt="Inside Home Before HYZIN Work"
                className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.8] contrast-[0.95]"
              />

              {/* Label: Standard Inside House */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-md border border-black/15 text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-[#524D46] shadow-lg">
                STANDARD INSIDE HOUSE (BEFORE)
              </div>
            </div>

            {/* 3. Central Vertical Gold Line with Circular Double-Arrow Handle (Exact Match to User Reference) */}
            <div
              className="absolute top-0 bottom-0 z-30 cursor-ew-resize transition-all duration-75 ease-out flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Continuous Vertical Gold Line */}
              <div className="absolute top-0 bottom-0 w-[2.5px] bg-[#C5A065] shadow-[0_0_12px_rgba(197,160,101,0.8)]"></div>

              {/* Circular Handle matching media_1789984365194.png */}
              <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#181716] border-[2.5px] border-[#C5A065] text-[#D4B584] flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto transform -translate-x-1/2 hover:scale-110 active:scale-95 transition-transform duration-200">
                {/* SVG Double Horizontal Arrows ↔ */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-[#D4B584] stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 8l-4 4 4 4" />
                  <path d="M17 8l4 4-4 4" />
                  <path d="M3 12h18" />
                </svg>
              </div>
            </div>

            {/* Bottom Room Comparison Summary Bar */}
            <div className="absolute bottom-6 inset-x-6 flex items-center justify-between z-10 pointer-events-none text-[10px] sm:text-[11px] font-mono tracking-wider">
              <span className="px-3 py-1.5 bg-white/90 text-[#333] backdrop-blur-sm shadow-md border border-black/10">
                {currentRoom.beforeDesc}
              </span>
              <span className="px-3 py-1.5 bg-[#1E1D1B] text-[#D4B584] font-semibold backdrop-blur-sm shadow-md border border-[#D4B584]/40">
                {currentRoom.afterDesc}
              </span>
            </div>
          </div>

          {/* Subtitle Drag Prompt */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-xs uppercase font-mono tracking-widest text-[#8C8275]">
            <span>←</span>
            <span>DRAG GOLD LINE TO SEE HOW HYZIN TRANSFORMS THIS ROOM INSIDE</span>
            <span>→</span>
          </div>
        </div>

      </div>
    </section>
  );
}
