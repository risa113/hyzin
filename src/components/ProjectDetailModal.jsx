import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Share2 } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onCommissionProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Prevent background body scroll while modal is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const allImages = Array.from(new Set([
    project.heroImage,
    ...(project.gallery || [])
  ].filter(Boolean)));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex justify-center items-start sm:p-4 md:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop click closer */}
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#341910] border border-[#CFB291]/20 shadow-2xl my-auto overflow-hidden">
        
        {/* Sticky Close & Bar */}
        <div className="sticky top-0 z-30 bg-[#341910]/95 backdrop-blur-md border-b border-[#CFB291]/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#CFB291]"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-mono font-semibold">
              PROJECT ARCHIVE / CASE STUDY
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Project link copied to clipboard.');
                }
              }}
              className="p-2 text-[#CFB291] hover:text-[#CFB291] transition-colors"
              title="Share Project"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#CFB291] hover:text-[#FCFCF6] bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Banner with Main Selected Image */}
        <div className="relative w-full h-[400px] sm:h-[520px] bg-black overflow-hidden">
          <img
            src={allImages[activeImageIndex] || project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#341910] via-transparent to-black/40"></div>

          {/* Metadata Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#341910]/90 backdrop-blur-md border border-[#CFB291]/20 text-[10px] uppercase font-mono tracking-widest text-[#CFB291] font-semibold">
                {project.type}
              </span>
              <span className="px-3 py-1 bg-[#341910]/90 backdrop-blur-md border border-[#CFB291]/20 text-[10px] uppercase font-mono tracking-widest text-[#FCFCF6]">
                {project.location}
              </span>
              <span className="px-3 py-1 bg-[#341910]/90 backdrop-blur-md border border-[#CFB291]/20 text-[10px] uppercase tracking-wider text-[#CFB291] font-medium">
                {project.area} • Completed {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl text-[#FCFCF6] font-bold tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Gallery Thumbnails Carousel */}
        <div className="px-6 sm:px-10 py-4 bg-[#45241A] border-b border-[#CFB291]/20 flex items-center space-x-3 overflow-x-auto">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 overflow-hidden border transition-all ${
                activeImageIndex === idx
                  ? 'border-[#CFB291] scale-105 shadow-md shadow-[#CFB291]/20'
                  : 'border-[#CFB291]/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Case Study Details Body */}
        <div className="p-6 sm:p-10 space-y-12">
          
          {/* Section 1: The Concept */}
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-2">
              <span>01</span>
              <span className="w-6 h-[1px] bg-[#CFB291]/40"></span>
              <span>THE CONCEPT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl text-[#FCFCF6] font-bold tracking-tight mb-4">
              Spatial Intent & Design Narrative
            </h3>
            <p className="text-base sm:text-lg text-[#CFB291] font-normal leading-relaxed">
              {project.concept}
            </p>
          </div>

          {/* Section 2: Spatial Highlights */}
          <div className="bg-[#45241A] p-6 sm:p-8 border border-[#CFB291]/20 shadow-xl">
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-3">
              <span>02</span>
              <span className="w-6 h-[1px] bg-[#CFB291]/40"></span>
              <span>THE SPACE & CHOREOGRAPHY</span>
            </div>
            <h4 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight mb-6">
              Key Spatial Interventions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {project.spaceHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#CFB291] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#FCFCF6] font-normal leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Materials & Detailing */}
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-3">
              <span>03</span>
              <span className="w-6 h-[1px] bg-[#CFB291]/40"></span>
              <span>MATERIALS & TACTILE DETAILS</span>
            </div>
            <h4 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight mb-6">
              Curated Material Palette
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.materials.map((mat, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#45241A] border border-[#CFB291]/20 flex flex-col justify-between hover:border-[#CFB291]/50 transition-colors shadow-md"
                >
                  <span className="text-base sm:text-lg text-[#FCFCF6] font-bold tracking-tight">
                    {mat.name}
                  </span>
                  <span className="text-xs text-[#CFB291] mt-1 font-normal">
                    {mat.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Client Narrative / Patron Experience */}
          {project.clientReview && (
            <div className="p-6 sm:p-8 bg-[#45241A] border-l-2 border-[#CFB291] relative shadow-lg">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#CFB291] font-semibold block mb-2">
                PATRON TESTIMONIAL
              </span>
              <p className="text-base sm:text-lg text-[#FCFCF6] font-normal leading-relaxed">
                “{project.clientReview}”
              </p>
              <span className="block mt-4 text-xs font-semibold uppercase tracking-wider text-[#CFB291]">
                — {project.patron} ({project.location})
              </span>
            </div>
          )}

          {/* Bottom Conversion Callout */}
          <div className="pt-8 border-t border-[#CFB291]/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight">
                HAVE A SPACE IN MIND?
              </h5>
              <p className="text-sm text-[#CFB291] mt-1 font-normal">
                Let’s create your private sanctuary together across Kerala, Tamil Nadu, or Karnataka.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onCommissionProject(project.title);
              }}
              className="px-8 py-4 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] text-xs uppercase tracking-[0.25em] font-bold transition-colors flex items-center space-x-3 whitespace-nowrap shadow-xl"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
