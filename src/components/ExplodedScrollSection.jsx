import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  RotateCcw, 
  ArrowDown, 
  ChevronRight, 
  CheckCircle2, 
  Box
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/clientAssets';

// The 4 architectural breakdown phases tied to scroll progress
const STAGES = [
  {
    range: [0, 0.25],
    number: "01",
    tag: "ASSEMBLED SANCTUARY",
    title: "Harmonious Spatial Envelope",
    tagline: "Monolithic living & culinary sanctuary completely assembled.",
    description: "Artisanal vertical teak partition, warm 2700K ambient cove false ceiling, and seamless modular kitchen cabinetry aligned to millimeter tolerances.",
    specs: ["Seasoned Teakwood Slats", "Integrated Cove Diffusers", "High-Gloss European Acrylic", "Concealed Fastening"]
  },
  {
    range: [0.25, 0.55],
    number: "02",
    tag: "SUSPENDED ARCHITECTURE",
    title: "Ceiling & Illumination Lift",
    tagline: "Multi-tier gypsum ceiling and track luminaires detach upward.",
    description: "Revealing the engineered structural false ceiling suspension grid, concealed acoustic dampening, and indirect LED circadian channels.",
    specs: ["Zero-Crack Moisture Gypsum", "CRI 95+ Warm Luminaires", "Concealed AC / Ventilation", "Vibration-Isolated Hangers"]
  },
  {
    range: [0.55, 0.82],
    number: "03",
    tag: "MODULAR JOINERY",
    title: "Joinery & Island Expansion",
    tagline: "Central breakfast island, partition louvers & carcasses expand in 3D.",
    description: "Demonstrating how precision CNC-cut floral friezes, black anodized aluminium frameworks, and quartz countertops unite without visual clutter.",
    specs: ["Black Anodized 6063 Aluminium", "Blum Soft-Close Tandem Runners", "Heat-Resistant Quartz Slab", "Anti-Fingerprint Acrylic"]
  },
  {
    range: [0.82, 1.0],
    number: "04",
    tag: "SOVEREIGN WORKSHOP CRAFT",
    title: "Complete Exploded Anatomy",
    tagline: "Every individual structural layer exposed in suspended space.",
    description: "100% sovereign in-house workshop fabrication across Kerala. Zero outsourced dependencies, guaranteed coastal longevity and termite resilience.",
    specs: ["100% Termite-Proof Core", "PVD Rose Gold & Brass Trims", "Multi-Point Structural Fixings", "10-Year Comprehensive Warranty"]
  }
];

export default function ExplodedScrollSection({ onOpenConsultation, onOpenLightbox }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollProgressRef = useRef(0);
  const animFrameRef = useRef(null);
  const autoPlayDirRef = useRef(1); // 1 = forward, -1 = reverse

  // Derive active stage directly from progress
  const activeStage = Math.max(0, STAGES.findIndex(s => progress >= s.range[0] && progress <= s.range[1]));
  const currentStageData = STAGES[activeStage] || STAGES[0];

  // Video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Scroll listener that calculates progress through the 260vh container
  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying) return; // If user toggled auto-play, let auto-play drive progress

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      let p = currentScroll / scrollableDistance;
      p = Math.max(0, Math.min(1, p));

      scrollProgressRef.current = p;
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  // High-performance requestAnimationFrame loop to scrub video smoothly
  useEffect(() => {
    const scrubLoop = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const duration = video.duration || 8;

        if (isPlaying) {
          // In Auto-Play mode, cycle progress back and forth
          let nextP = scrollProgressRef.current + 0.003 * autoPlayDirRef.current;
          if (nextP >= 1) {
            nextP = 1;
            autoPlayDirRef.current = -1;
          } else if (nextP <= 0) {
            nextP = 0;
            autoPlayDirRef.current = 1;
          }
          scrollProgressRef.current = nextP;
          setProgress(nextP);
        }

        const targetTime = scrollProgressRef.current * duration;
        const diff = targetTime - video.currentTime;

        // Smooth lerp easing for velvety scrub feel
        if (Math.abs(diff) > 0.02) {
          video.currentTime += diff * 0.28;
        }
      }

      animFrameRef.current = requestAnimationFrame(scrubLoop);
    };

    animFrameRef.current = requestAnimationFrame(scrubLoop);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying]);

  // Jump to specific milestone percentage
  const handleSeekToProgress = (targetP) => {
    setIsPlaying(false);
    scrollProgressRef.current = targetP;
    setProgress(targetP);

    // Also scroll the page smoothly so sticky container aligns
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const scrollableDistance = rect.height - window.innerHeight;
      window.scrollTo({
        top: containerTop + targetP * scrollableDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="exploded-view"
      className="relative min-h-[250vh] sm:min-h-[280vh] bg-[#090A0D] text-white border-t border-b border-white/[0.08]"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        
        {/* Background Video with Hardware Accelerated Video Scrubbing */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-black overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src={BRAND_ASSETS.explodedVideo}
            playsInline
            muted
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover sm:object-contain transition-opacity duration-500 filter brightness-[0.92] contrast-[1.04]"
          />

          {/* Vignette gradients to blend seamlessly into luxury dark interface */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#090A0D]/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/80 via-transparent to-[#090A0D]/80 pointer-events-none"></div>
        </div>

        {/* TOP STATUS BAR: Explosion HUD and Real-Time Telemetry */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#C5A065]/20 border border-[#C5A065]/40 flex items-center justify-center">
                <Box className="w-4 h-4 text-[#D4B584] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.25em] text-[#D4B584] font-semibold">
                    SPATIAL ANATOMY • EXPLODED VIEW
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-medium">
                    REAL-TIME SCROLL
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white/90">
                  Thrissur Living & Kitchen Partition Suite • 1:1 Architectural Deconstruction
                </h3>
              </div>
            </div>

            {/* Explosion Percentage Gauge & Interactive Mode Toggles */}
            <div className="flex items-center space-x-3">
              <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-2.5">
                <span className={`w-2 h-2 rounded-full ${progress > 0.05 ? 'bg-[#D4B584] animate-ping' : 'bg-white/40'}`}></span>
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#FAF5ED]">
                  {Math.round(progress * 100)}%
                </span>
                <span className="text-[10px] font-mono uppercase text-[#A39E96]">
                  {progress < 0.1 ? 'ASSEMBLED' : progress > 0.85 ? 'FULL EXPLOSION' : 'DECONSTRUCTING'}
                </span>
              </div>

              {/* Auto-Play / Manual Scrub Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${
                  isPlaying
                    ? 'bg-[#C5A065] text-black shadow-lg shadow-[#C5A065]/25 font-bold'
                    : 'bg-white/10 hover:bg-white/15 text-white/90 border border-white/10'
                }`}
                title={isPlaying ? "Switch to Scroll Scrub" : "Enable Auto-Cycle"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? 'AUTO PLAYING' : 'AUTO CYCLE'}</span>
              </button>

              {/* Reset to Assembled */}
              <button
                onClick={() => handleSeekToProgress(0)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#C4BCB1] hover:text-white border border-white/10 transition-colors"
                title="Reset to 0% Assembled"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Expand Fullscreen / Lightbox */}
              {onOpenLightbox && (
                <button
                  onClick={() => onOpenLightbox(BRAND_ASSETS.explodedVideo, 0, 'Spatial Exploded View Animatic', 'Exploded Architecture')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#C4BCB1] hover:text-white border border-white/10 transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* CENTER / MID VIEWPORT: Floating Dynamic Architectural Hotspot Cards */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Floating Commentary Glass Card */}
            <div className="lg:col-span-5 pointer-events-auto">
              <div className="p-6 sm:p-8 rounded-2xl bg-black/75 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 transition-all duration-500 animate-fadeIn">
                
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#C5A065]/20 border border-[#C5A065]/40 text-[#D4B584] text-[10px] font-mono uppercase tracking-widest font-semibold">
                    PHASE {currentStageData.number} / 04
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#A39F97] tracking-wider">
                    {currentStageData.tag}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF6ED] leading-tight mb-2">
                  {currentStageData.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D4CDC3] font-normal leading-relaxed mb-4">
                  {currentStageData.description}
                </p>

                {/* Micro Technical Specs Grid */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                  {currentStageData.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px] text-[#C4BCB1]">
                      <CheckCircle2 className="w-3 h-3 text-[#D4B584] flex-shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Consultation Trigger inside card */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#9E978D] tracking-wider">
                    IN-HOUSE FABRICATION
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs uppercase font-mono tracking-widest text-[#D4B584] hover:text-white flex items-center space-x-1 font-semibold transition-colors"
                  >
                    <span>COMMISSION WORK</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Side: Scroll Guidance Prompt (Appears when near top or bottom) */}
            <div className="lg:col-span-7 flex justify-end">
              {progress < 0.15 && !isPlaying && (
                <div className="inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-[#D4B584]/40 text-white animate-bounce pointer-events-auto">
                  <ArrowDown className="w-4 h-4 text-[#D4B584]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E0D6C5]">
                    Scroll down to explode the space
                  </span>
                </div>
              )}

              {progress > 0.88 && !isPlaying && (
                <div className="inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-emerald-500/40 text-white animate-pulse pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FAF5ED]">
                    Fully Exploded • Scroll up to re-assemble
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* BOTTOM TIMELINE CONTROLLER: Scrubber Bar & Milestones */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-2xl border border-white/10 shadow-2xl">
            
            {/* Interactive Scrubber Track */}
            <div className="relative mb-3">
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={progress}
                onChange={(e) => handleSeekToProgress(parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D4B584] focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #D4B584 0%, #C5A065 ${progress * 100}%, rgba(255,255,255,0.15) ${progress * 100}%, rgba(255,255,255,0.15) 100%)`
                }}
              />
            </div>

            {/* Milestone Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;
                const midPoint = (stage.range[0] + stage.range[1]) / 2;
                return (
                  <button
                    key={stage.number}
                    onClick={() => handleSeekToProgress(midPoint)}
                    className={`p-2 sm:p-2.5 rounded-lg text-left transition-all border ${
                      isActive 
                        ? 'bg-[#C5A065]/20 border-[#D4B584] text-white shadow-md' 
                        : 'bg-white/5 border-white/5 text-[#A39E96] hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase mb-0.5">
                      <span className={isActive ? 'text-[#D4B584] font-bold' : 'text-[#7D766E]'}>
                        PHASE {stage.number}
                      </span>
                      <span className="text-[9px] opacity-70">
                        {Math.round(stage.range[0] * 100)}%-{Math.round(stage.range[1] * 100)}%
                      </span>
                    </div>
                    <div className="text-xs font-semibold truncate text-[#FAF5ED]">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
