import { useState, useEffect } from 'react';
import { ArrowUpRight, MapPin, Maximize2, ChevronLeft, ChevronRight, LayoutGrid, Play, Pause, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function CuratedWork({ onSelectProject, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'slideshow'
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const categories = [
    { id: 'ALL', label: 'ALL SERVICES' },
    { id: 'Kitchen Cabinet', label: 'KITCHEN CABINET' },
    { id: 'Wall Drop', label: 'WALL DROP' },
    { id: 'Paneling', label: 'PANELING' },
    { id: 'Ceiling', label: 'CEILING' },
    { id: 'Aluminium Interior', label: 'ALUMINIUM INTERIOR' },
    { id: 'Steel Fabrication', label: 'STEEL FABRICATION' },
    { id: 'MS Fabrication', label: 'MS FABRICATION' },
    { id: 'Accessories', label: 'ACCESSORIES' },
    { id: 'Steel Doors', label: 'STEEL DOORS' }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter || p.type === activeFilter);

  // Auto-play for Slideshow mode
  useEffect(() => {
    let timer;
    if (viewMode === 'slideshow' && isPlaying && filteredProjects.length > 0) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [viewMode, isPlaying, filteredProjects.length]);

  // Reset slide index if filter changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeFilter]);

  const currentProject = filteredProjects[currentSlideIndex] || filteredProjects[0];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#2B1C19] text-[#FAF7F0] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Animatic Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-8 border-b border-[#D4AF37]/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-medium uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>AUTHENTIC CLIENT WORK SHOWCASE</span>
            </div>
            
            {/* Top-to-Bottom Animated Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-bold tracking-tight leading-[1.15] animate-slide-down">
              Selected Work & <span className="text-[#D4AF37] font-bold">Fabrication.</span>
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#D4AF37] font-normal max-w-2xl leading-relaxed animate-slide-down" style={{ animationDelay: '100ms' }}>
              Original on-site photography of bespoke residential interiors, modular aluminium suites, and precision metal fabrication commissioned across Kerala, Tamil Nadu, and Karnataka.
            </p>
          </div>

          {/* View Mode Switcher (Grid vs Slideshow) */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="bg-[#3E2723] border border-[#D4AF37]/20 p-1 rounded-lg flex items-center gap-1 shadow-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#D4AF37] text-[#2B1C19] font-bold shadow-md'
                    : 'text-[#D4AF37] hover:text-[#FAF7F0] hover:bg-white/5'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>PROPER GRID</span>
              </button>

              <button
                onClick={() => setViewMode('slideshow')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                  viewMode === 'slideshow'
                    ? 'bg-[#D4AF37] text-[#2B1C19] font-bold shadow-md'
                    : 'text-[#D4AF37] hover:text-[#FAF7F0] hover:bg-white/5'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>SLIDESHOW</span>
              </button>
            </div>

            <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-widest hidden sm:inline-block px-3 py-2 bg-[#3E2723] border border-[#D4AF37]/20 rounded-md">
              {filteredProjects.length} Works
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-mono font-medium whitespace-nowrap transition-all duration-300 border rounded-sm ${
                activeFilter === cat.id
                  ? 'bg-[#D4AF37] text-[#2B1C19] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#3E2723] text-[#D4AF37] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#FAF7F0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MODE 1: ANIMATIC INTERACTIVE SLIDESHOW */}
        {viewMode === 'slideshow' && currentProject && (
          <div className="bg-[#3E2723] border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-2xl relative mb-12 animate-page-enter">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[550px]">
              
              {/* Left Column: Full-Height Image Slider with Slide-Right Pop Animation */}
              <div className="lg:col-span-7 relative overflow-hidden bg-black group min-h-[380px] lg:min-h-[550px]">
                <img
                  key={currentProject.id}
                  src={currentProject.heroImage}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-1000 ease-out group-hover:scale-105 animate-slide-right-pop"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19] via-[#2B1C19]/20 to-transparent pointer-events-none"></div>

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 bg-[#2B1C19]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] rounded">
                    {currentProject.category}
                  </span>
                  <span className="px-3.5 py-1.5 bg-[#2B1C19]/80 backdrop-blur-md border border-[#D4AF37]/20 text-[11px] font-mono uppercase tracking-widest text-[#FAF7F0] flex items-center gap-1.5 rounded">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{currentProject.location}</span>
                  </span>
                </div>

                {/* Fullscreen Lightbox Trigger */}
                <button
                  onClick={() => {
                    if (onOpenLightbox) {
                      const projectImages = Array.from(new Set([currentProject.heroImage, ...(currentProject.gallery || [])]));
                      onOpenLightbox(projectImages, 0, currentProject.title, currentProject.category);
                    }
                  }}
                  className="absolute top-5 right-5 z-20 p-3 rounded-full bg-[#2B1C19]/80 hover:bg-[#D4AF37] hover:text-[#2B1C19] text-[#FAF7F0] border border-[#D4AF37]/20 backdrop-blur-md transition-all shadow-xl hover:scale-110"
                  title="Expand Fullscreen Lightbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Slideshow Progress Overlay */}
                <div className="absolute bottom-5 right-5 z-10">
                  <span className="font-mono text-xs text-[#D4AF37] bg-[#2B1C19]/90 px-4 py-2 border border-[#D4AF37]/20 rounded tracking-widest">
                    {String(currentSlideIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right Column: Slide-Right Pop Animated Content Box */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#3E2723] border-t lg:border-t-0 lg:border-l border-[#D4AF37]/20">
                <div key={currentProject.id} className="space-y-6 animate-slide-right-pop">
                  
                  {/* Top-to-Bottom Animated Category Subtitle */}
                  <div className="animate-slide-down flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                    <span>{currentProject.state}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span>{currentProject.year}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span>{currentProject.area}</span>
                  </div>

                  {/* Top-to-Bottom Animated Title */}
                  <h3 className="text-2xl sm:text-3xl text-[#FAF7F0] leading-tight font-bold animate-slide-down" style={{ animationDelay: '100ms' }}>
                    {currentProject.title}
                  </h3>

                  {/* Top-to-Bottom Animated Tagline & Concept */}
                  <p className="text-sm sm:text-base text-[#D4AF37] font-normal leading-relaxed animate-slide-down" style={{ animationDelay: '150ms' }}>
                    {currentProject.concept || currentProject.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  {currentProject.spaceHighlights && (
                    <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2 animate-slide-down" style={{ animationDelay: '200ms' }}>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] block mb-2">
                        COMMISSION HIGHLIGHTS:
                      </span>
                      {currentProject.spaceHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="text-xs text-[#D4AF37] flex items-start space-x-2">
                          <span className="text-[#D4AF37]">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Client Review quote */}
                  {currentProject.clientReview && (
                    <blockquote className="p-4 bg-[#2B1C19]/60 border-l-2 border-[#D4AF37] text-xs font-normal text-[#FAF7F0] leading-relaxed animate-slide-down" style={{ animationDelay: '250ms' }}>
                      {currentProject.clientReview}
                      <span className="block mt-1 font-semibold not-italic text-[10px] text-[#D4AF37] uppercase">
                        — {currentProject.patron || 'Private Patron'}
                      </span>
                    </blockquote>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      if (onOpenLightbox) {
                        const projectImages = Array.from(new Set([currentProject.heroImage, ...(currentProject.gallery || [])]));
                        onOpenLightbox(projectImages, 0, currentProject.title, currentProject.category);
                      } else if (onSelectProject) {
                        onSelectProject(currentProject);
                      }
                    }}
                    className="flex-1 py-3.5 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2 rounded-sm shadow-md"
                  >
                    <span>VIEW FULL GALLERY & SPECS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip Below Slider */}
            <div className="p-4 bg-[#2B1C19] border-t border-[#D4AF37]/20 flex items-center gap-3 overflow-x-auto no-scrollbar">
              {filteredProjects.map((proj, i) => (
                <button
                  key={proj.id}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-all ${
                    currentSlideIndex === i ? 'border-[#D4AF37] scale-105 opacity-100 shadow-lg' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-[#2B1C19]/90 text-[#FAF7F0] px-1">
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MODE 2: HIGH-PRECISION PROPER GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-page-enter">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative bg-[#3E2723] border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:border-[#D4AF37]/70 hover:-translate-y-1.5 flex flex-col justify-between reveal-up"
                style={{ transitionDelay: `${(idx % 6) * 75}ms` }}
              >
                {/* Image Container with Precise 16:11 Aspect Ratio */}
                <div
                  onClick={() => {
                    if (onOpenLightbox) {
                      const projectImages = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                      onOpenLightbox(projectImages, 0, project.title, project.category);
                    } else if (onSelectProject) {
                      onSelectProject(project);
                    }
                  }}
                  className="relative w-full aspect-[16/11] overflow-hidden cursor-pointer bg-black"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-95"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19] via-transparent to-black/40 group-hover:via-black/20 transition-all duration-500 pointer-events-none"></div>

                  {/* Top Category & Location Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-1 bg-[#2B1C19]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] rounded">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#2B1C19]/80 backdrop-blur-md border border-[#D4AF37]/20 text-[10px] uppercase font-mono tracking-wider text-[#FAF7F0] flex items-center gap-1 rounded">
                      <MapPin className="w-2.5 h-2.5 text-[#D4AF37]" />
                      <span>{project.state}</span>
                    </span>
                  </div>

                  {/* Expand Lightbox Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenLightbox) {
                        const projectImages = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                        onOpenLightbox(projectImages, 0, project.title, project.category);
                      }
                    }}
                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#2B1C19]/80 hover:bg-[#D4AF37] hover:text-[#2B1C19] text-[#FAF7F0] border border-[#D4AF37]/20 backdrop-blur-md transition-all shadow-lg hover:scale-110 opacity-90 group-hover:opacity-100"
                    title="View Fullscreen Lightbox"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Content with Top-to-Bottom Hover Animation */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top-to-Bottom Location Tag */}
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 flex items-center justify-between">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Top-to-Bottom Title Animation on hover */}
                    <h3
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-xl sm:text-2xl text-[#FAF7F0] font-bold leading-snug group-hover:text-[#D4AF37] transition-colors cursor-pointer group-hover:animate-slide-down-fast"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#D4AF37] font-normal line-clamp-2 leading-relaxed">
                      {project.concept || project.tagline}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <button
                      onClick={() => {
                        if (onOpenLightbox) {
                          const projectImages = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                          onOpenLightbox(projectImages, 0, project.title, project.category);
                        } else if (onSelectProject) {
                          onSelectProject(project);
                        }
                      }}
                      className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-1.5 font-bold group-hover:text-[#FAF7F0] transition-colors"
                    >
                      <span>VIEW SPECS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] text-[#D4AF37]/70 uppercase font-medium">
                      {project.gallery ? `${project.gallery.length} Photos` : 'Original Asset'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
