import { useState } from 'react';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function CuratedWork({ onSelectProject, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'ALL DISCIPLINES' },
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

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#090A0D] text-[#FAF8F5] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#D4B584] font-mono mb-3">
              <span>AUTHENTIC PORTFOLIO SURVEY</span>
              <span className="w-8 h-[1px] bg-[#D4B584]/50"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal tracking-tight">
              Selected Work & <span className="italic font-light text-[#D4B584]">Fabrication.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B3ACA0] font-light max-w-xl">
              Original on-site photographs of bespoke residential interiors, architectural aluminium systems, and precision metal fabrication delivered across South India.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-left md:text-right">
            <span className="font-mono text-xs text-[#D4B584] uppercase tracking-widest block">
              {filteredProjects.length} Verified Commissions
            </span>
            <span className="text-[11px] text-[#716C64] uppercase tracking-wider font-mono">
              Kerala • Tamil Nadu • Karnataka
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-all duration-300 border ${
                activeFilter === cat.id
                  ? 'bg-[#D4B584] text-[#0A0A0C] border-[#D4B584] shadow-md shadow-[#D4B584]/20 font-semibold'
                  : 'bg-transparent text-[#9E978D] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const colSpanClass = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const heightClass = isWide ? 'h-[440px] sm:h-[500px]' : 'h-[380px] sm:h-[460px]';

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden bg-[#121318] border border-white/10 transition-all duration-500 hover:border-[#D4B584]/60 ${colSpanClass}`}
              >
                {/* Image Container with Zoom */}
                <div className={`relative w-full ${heightClass} overflow-hidden cursor-pointer`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    onClick={() => {
                      if (onOpenLightbox) {
                        onOpenLightbox(project.gallery || [project.heroImage], 0, project.title, project.category);
                      } else if (onSelectProject) {
                        onSelectProject(project);
                      }
                    }}
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/30 to-black/30 group-hover:via-[#090A0D]/50 transition-all duration-500 pointer-events-none"></div>

                  {/* Top Tag Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-[#D4B584]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-white flex items-center space-x-1">
                      <MapPin className="w-2.5 h-2.5 text-[#D4B584]" />
                      <span>{project.state}</span>
                    </span>
                  </div>

                  {/* Expand button hover indicator */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenLightbox) {
                        onOpenLightbox(project.gallery || [project.heroImage], 0, project.title, project.category);
                      }
                    }}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#D4B584] hover:text-black text-white border border-white/10 backdrop-blur-md transition-all shadow-lg"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4B584] font-mono mb-1.5 flex items-center space-x-2">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal leading-tight group-hover:text-[#D4B584] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#C4BCB1] font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.concept}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject && onSelectProject(project)}
                        className="text-[11px] uppercase tracking-[0.25em] text-[#D4B584] font-mono flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                      >
                        <span>VIEW SPECIFICATIONS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] text-stone-400 uppercase font-mono">
                        {project.gallery ? `${project.gallery.length} Photos` : 'Original Asset'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
