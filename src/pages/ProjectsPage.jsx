import { useState } from 'react';
import { ArrowUpRight, MapPin, Search, BookOpen } from 'lucide-react';
import { projectsData, completedWorksArchive50 } from '../data/projectsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function ProjectsPage({ onSelectProject, onOpenConsultation, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [showRegistry, setShowRegistry] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'ALL', label: 'ALL COMMISSIONS' },
    { id: 'Aluminium Interior', label: 'ALUMINIUM INTERIOR' },
    { id: 'Wall Drop & Wardrobe', label: 'WALL DROP & WARDROBE' },
    { id: 'Kitchen Cabinet', label: 'KITCHEN CABINET' },
    { id: 'Ceiling & Paneling', label: 'CEILING & PANELING' },
    { id: 'Steel & MS Fabrication', label: 'STEEL & MS FABRICATION' },
    { id: 'Turnkey Sanctuaries', label: 'TURNKEY SANCTUARIES' }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const filteredRegistry = completedWorksArchive50.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-page-enter bg-[#4E342E]">

      {/* ─── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19] border-b border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28">

          {/* Two-column header layout */}
          <div className="grid grid-cols-12 gap-8 items-end">

            {/* LEFT — Main editorial heading (8/12) */}
            <div className="col-span-12 lg:col-span-8">

              {/* Badge pill */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#3E2723] border border-[#D4AF37]/30 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse flex-shrink-0"></span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FAF7F0]">
                  50+ AUTHENTIC COMMISSIONS COMPLETED
                </span>
              </div>

              {/* Editorial heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.06] tracking-tight">
                <span className="block text-[#FAF7F0]">50+ SELECTED WORKS &amp;</span>
                <span className="block text-[#D4AF37]">SANCTUARIES.</span>
              </h1>

              {/* Subtext */}
              <p className="mt-6 sm:mt-8 text-sm sm:text-base text-[#FAF7F0]/60 font-normal leading-relaxed max-w-2xl font-light">
                Spaces designed with intention. An extensive registry of 50+ private residences,
                bespoke modular kitchens, wall drops, fluted paneling, and structural fabrications
                delivered across Kerala, Tamil Nadu, and Karnataka.
              </p>
            </div>

            {/* RIGHT — Toggle + location (4/12) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={() => setShowRegistry(!showRegistry)}
                className="w-full sm:w-auto group inline-flex items-center justify-center space-x-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>{showRegistry ? 'VIEW PHOTO GALLERY' : 'BROWSE 50+ REGISTRY INDEX'}</span>
              </button>

              {/* Location text */}
              <div className="flex flex-col items-start lg:items-end gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold">
                  Locations Served
                </span>
                <span className="text-[11px] sm:text-[12px] text-[#D4AF37] font-medium tracking-wider">
                  Kochi • Bengaluru • Chennai • Coimbatore • Calicut
                </span>
              </div>
            </div>
          </div>

          {/* ─── FILTER PILLS (gallery view only) ─────────────────── */}
          {!showRegistry && (
            <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#D4AF37]/10">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/50 font-semibold mb-3 sm:mb-5">
                Filter by Discipline
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-300 border cursor-pointer shrink-0 ${
                      activeFilter === cat.id
                        ? 'bg-[#D4AF37] text-[#2B1C19] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                        : 'bg-transparent text-[#D4AF37] border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-[#FAF7F0] hover:bg-[#D4AF37]/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── REGISTRY TABLE VIEW ───────────────────────────────────────── */}
      {showRegistry ? (
        <section className="w-full bg-[#4E342E]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20">

            {/* Section label */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold">
                01 — COMMISSION REGISTRY
              </span>
              <div className="flex-1 h-px bg-[#D4AF37]/15"></div>
            </div>

            <div className="bg-[#3E2723] border border-[#D4AF37]/20 shadow-2xl">

              {/* Table header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-8 pb-0">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F0] font-bold tracking-tight">
                    Official 50+ Verified Work<br className="hidden sm:block" /> Commission Registry
                  </h3>
                  <p className="text-[11px] text-[#D4AF37]/70 mt-2 uppercase tracking-[0.2em]">
                    Verified residential, modular joinery &amp; fabrication projects across South India
                  </p>
                </div>

                {/* Search input */}
                <div className="relative w-full sm:w-80 flex-shrink-0">
                  <Search className="w-4 h-4 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search city, type, or project..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#2B1C19] border border-[#D4AF37]/20 text-xs text-[#FAF7F0] placeholder-[#D4AF37]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="h-px bg-[#D4AF37]/20 mx-8 mt-8 mb-0"></div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[#D4AF37] border-b border-[#D4AF37]/15">
                      <th className="py-4 px-6 text-[10px] uppercase tracking-[0.25em] font-semibold">#</th>
                      <th className="py-4 px-4 text-[10px] uppercase tracking-[0.25em] font-semibold">Project Title</th>
                      <th className="py-4 px-4 text-[10px] uppercase tracking-[0.25em] font-semibold">Location</th>
                      <th className="py-4 px-4 text-[10px] uppercase tracking-[0.25em] font-semibold">Typology / Discipline</th>
                      <th className="py-4 px-4 text-[10px] uppercase tracking-[0.25em] font-semibold">Scale</th>
                      <th className="py-4 px-4 text-[10px] uppercase tracking-[0.25em] font-semibold">Year</th>
                      <th className="py-4 px-6 text-right text-[10px] uppercase tracking-[0.25em] font-semibold">Inquiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistry.map((item, idx) => (
                      <tr
                        key={item.id}
                        className={`border-b border-[#D4AF37]/8 hover:bg-[#2B1C19] transition-colors duration-200 ${
                          idx % 2 === 0 ? 'bg-transparent' : 'bg-[#2B1C19]/30'
                        }`}
                      >
                        <td className="py-4 px-6 text-[#D4AF37] font-bold text-[11px]">
                          {item.id < 10 ? `0${item.id}` : item.id}
                        </td>
                        <td className="py-4 px-4 text-sm font-semibold text-[#FAF7F0]">{item.name}</td>
                        <td className="py-4 px-4 text-[#D4AF37] text-[11px]">{item.location}</td>
                        <td className="py-4 px-4 text-[#D4AF37]/70 uppercase text-[10px] tracking-wider">{item.type}</td>
                        <td className="py-4 px-4 text-[#D4AF37] text-[11px]">{item.area}</td>
                        <td className="py-4 px-4 text-[#D4AF37]/60 text-[11px]">{item.year}</td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={onOpenConsultation}
                            className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF7F0] font-semibold transition-colors border border-[#D4AF37]/30 hover:border-[#D4AF37] px-3 py-1.5"
                          >
                            Commission →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer */}
              <div className="px-8 py-5 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/50">
                  {filteredRegistry.length} entries displayed
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/40">
                  HYZIN INTERIOR — VERIFIED COMMISSION ARCHIVE
                </span>
              </div>
            </div>
          </div>
        </section>

      ) : (

        /* ─── GALLERY VIEW ──────────────────────────────────────────── */
        <section className="w-full bg-[#4E342E]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20">

            {/* Section label */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold">
                02 — FEATURED WORKS
              </span>
              <div className="flex-1 h-px bg-[#D4AF37]/15"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/40 font-semibold whitespace-nowrap">
                {filteredProjects.length} Projects
              </span>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-[#3E2723] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
                >
                  {/* ── Tall image area (h-72 sm:h-80 lg:h-96) ── */}
                  <div
                    onClick={() => {
                      const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                      onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                    }}
                    className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-[#2B1C19] cursor-pointer flex-shrink-0"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19] via-[#2B1C19]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>

                    {/* Top-left: Project type badge */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                      <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#2B1C19]/90 border border-[#D4AF37]/25 backdrop-blur-sm text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[#FAF7F0]">
                        {project.type}
                      </span>
                    </div>

                    {/* Top-right: Location badge */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                      <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#2B1C19]/90 border border-[#D4AF37]/25 backdrop-blur-sm text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[#FAF7F0]">
                        <MapPin className="w-2.5 h-2.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{project.state}</span>
                      </span>
                    </div>

                    {/* Bottom overlay: project meta + title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] mb-1.5 sm:mb-2 font-semibold">
                        {project.location} &nbsp;•&nbsp; {project.year} &nbsp;•&nbsp; {project.area}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#FAF7F0] group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Card bottom: concept + CTAs ── */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-[#3E2723]">
                    <p className="text-[12px] sm:text-[13px] text-[#FAF7F0]/60 font-normal leading-relaxed line-clamp-3">
                      {project.concept}
                    </p>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between gap-2">
                      {/* VIEW CASE STUDY CTA */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group/btn inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-transparent border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-[#D4AF37] group-hover/btn:text-[#2B1C19] transition-colors">
                          VIEW CASE STUDY
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:text-[#2B1C19] transition-colors" />
                      </button>

                      {/* Photo count */}
                      <button
                        onClick={() => {
                          const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                          onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                        }}
                        className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#D4AF37]/70 hover:text-[#D4AF37] font-semibold transition-colors cursor-pointer shrink-0"
                      >
                        {1 + (project.gallery?.length || 0)} Photos ↗
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── GOLD HAIRLINE DIVIDER ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="h-px bg-[#D4AF37]/15"></div>
      </div>

      {/* ─── BEFORE / AFTER SLIDER ──────────────────────────────────── */}
      <BeforeAfterSlider onOpenLightbox={onOpenLightbox} />

      {/* ─── GOLD HAIRLINE DIVIDER ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="h-px bg-[#D4AF37]/15"></div>
      </div>

      {/* ─── COMMISSION CALLOUT ─────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28">

          {/* Section label */}
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-semibold">
              03 — BEGIN YOUR COMMISSION
            </span>
            <div className="flex-1 h-px bg-[#D4AF37]/15"></div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* LEFT: Stats + Heading */}
            <div className="col-span-12 lg:col-span-8">
              {/* Editorial stats row */}
              <div className="flex flex-wrap gap-6 sm:gap-10 mb-8 sm:mb-10">
                {[
                  { value: '50+', label: 'Commissions Delivered' },
                  { value: '3', label: 'States Served' },
                  { value: '7+', label: 'Design Disciplines' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl sm:text-5xl font-extrabold text-[#D4AF37] leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FAF7F0]/40 font-semibold mt-1.5 sm:mt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-extrabold tracking-tight leading-tight">
                Commission Your<br />
                <span className="text-[#D4AF37]">Custom Interior Space</span>
              </h3>

              <p className="mt-4 sm:mt-5 text-sm text-[#FAF7F0]/60 font-normal max-w-xl leading-relaxed font-light">
                Join over 50+ discerning patrons across Kerala, Tamil Nadu, and Karnataka
                who trusted HYZIN INTERIOR to craft their most personal spaces.
              </p>

              {/* Left-border gold quote accent */}
              <blockquote className="mt-6 sm:mt-8 pl-4 sm:pl-5 border-l-2 border-[#D4AF37] text-xs sm:text-[13px] text-[#FAF7F0]/50 italic leading-relaxed max-w-lg">
                "Every detail is considered. Every material is intentional. Every space is singular."
              </blockquote>
            </div>

            {/* RIGHT: CTA */}
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-56 h-auto sm:h-56 py-4 sm:py-0 px-6 sm:px-0 group inline-flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0 bg-[#D4AF37] hover:bg-[#FAF7F0] transition-colors duration-300 shadow-2xl shadow-[#D4AF37]/20 cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5 sm:w-8 sm:h-8 text-[#2B1C19] sm:mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-[#2B1C19] text-center leading-relaxed">
                  START YOUR<span className="hidden sm:inline"><br /></span> PROJECT
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
