import { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Maximize2, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function CuratedWork({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'ALL PORTFOLIO' },
    { id: 'Villas & Estates', label: 'VILLAS & ESTATES' },
    { id: 'Penthouses & Apartments', label: 'PENTHOUSES & APARTMENTS' },
    { id: 'Heritage & Boutique', label: 'HERITAGE & MANORS' },
    { id: 'Modular Kitchens & Systems', label: 'MODULAR KITCHENS' },
    { id: 'Commercial Architecture', label: 'COMMERCIAL' }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
              <span>SELECTED WORK</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight">
              The Curated Sanctuaries
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#a8a195] font-light max-w-xl">
              Spaces designed with intention. A curated survey of recent architectural residences, heritage manors, and bespoke interiors across South India.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <span className="font-mono text-xs text-[#d4b584] uppercase tracking-widest block">
              {filteredProjects.length} Architectural Commissions
            </span>
            <span className="text-[11px] text-[#716c64] uppercase tracking-wider">
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
                  ? 'bg-[#d4b584] text-[#0a0a0c] border-[#d4b584] shadow-md shadow-[#d4b584]/20'
                  : 'bg-transparent text-[#9e978d] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical editorial sizing pattern
            const isWide = idx % 5 === 0 || idx % 5 === 3;
            const colSpanClass = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const heightClass = isWide ? 'h-[440px] sm:h-[540px]' : 'h-[380px] sm:h-[480px]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer relative overflow-hidden bg-[#121316] border border-white/[0.08] transition-all duration-500 hover:border-[#d4b584]/50 ${colSpanClass}`}
              >
                {/* Image Container with Zoom */}
                <div className={`relative w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-black/30 group-hover:via-[#0a0a0c]/40 transition-all duration-500"></div>

                  {/* Top Tag Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-[#e8dfd2]">
                      {project.type}
                    </span>
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-[#d4b584] flex items-center space-x-1">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{project.state}</span>
                    </span>
                  </div>

                  {/* Expand button hover indicator */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#d4b584] text-[#0a0a0c] flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-[#d4b584] font-mono mb-1.5 flex items-center space-x-2">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#faf6ee] font-normal leading-tight group-hover:text-[#f4ead9] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#b8b0a2] font-light line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4b584] font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] text-[#716c64] uppercase font-mono">
                        {project.gallery.length} Images
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#111215] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div>
            <h4 className="font-serif text-2xl text-[#faf6ee]">
              Looking for a custom architectural solution in your region?
            </h4>
            <p className="text-sm text-[#a39f97] mt-1 font-light">
              We accept a limited number of residential and commercial commissions per cycle.
            </p>
          </div>
          <div className="mt-6 sm:mt-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#d4b584] hover:bg-[#faedd0] text-[#0e0f11] text-xs uppercase tracking-[0.22em] font-semibold transition-colors inline-block"
            >
              REQUEST REGIONAL COMMISSION
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
