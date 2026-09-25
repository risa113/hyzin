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
    <div className="animate-page-enter bg-[#5A3122]">

      {/* ─── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#341910] border-b border-[#CFB291]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-28">

          {/* Two-column header layout */}
          <div className="grid grid-cols-12 gap-8 items-end">

            {/* LEFT — Main editorial heading (8/12) */}
            <div className="col-span-12 lg:col-span-8">

              {/* Badge pill */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 bg-[#45241A] border border-[#CFB291]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#CFB291] animate-pulse flex-shrink-0"></span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#FCFCF6]">
                  50+ AUTHENTIC COMMISSIONS COMPLETED
                </span>
              </div>

              {/* Giant editorial heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
                <span className="block text-[#FCFCF6]">50+ SELECTED WORKS &</span>
                <span className="block text-[#CFB291]">SANCTUARIES.</span>
              </h1>

              {/* Subtext */}
              <p className="mt-8 text-sm sm:text-base text-[#FCFCF6]/60 font-normal leading-relaxed max-w-2xl">
                Spaces designed with intention. An extensive registry of 50+ private residences,
                bespoke modular kitchens, wall drops, fluted paneling, and structural fabrications
                delivered across Kerala, Tamil Nadu, and Karnataka.
              </p>
            </div>

            {/* RIGHT — Toggle + location (4/12) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={() => setShowRegistry(!showRegistry)}
                className="group inline-flex items-center space-x-3 px-7 py-4 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300 shadow-lg shadow-[#CFB291]/20"
              >
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>{showRegistry ? 'VIEW PHOTO GALLERY' : 'BROWSE 50+ REGISTRY INDEX'}</span>
              </button>

              {/* Location text */}
              <div className="flex flex-col items-start lg:items-end gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/60 font-semibold">
                  Locations Served
                </span>
                <span className="text-[12px] text-[#CFB291] font-medium tracking-wider">
                  Kochi • Bengaluru • Chennai • Coimbatore • Calicut
                </span>
              </div>
            </div>
          </div>

          {/* ─── FILTER PILLS (gallery view only) ─────────────────── */}
          {!showRegistry && (
            <div className="mt-16 pt-8 border-t border-[#CFB291]/10">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/50 font-semibold mb-5">
                Filter by Discipline
              </span>
              <div className="flex items-center flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-300 border ${
                      activeFilter === cat.id
                        ? 'bg-[#CFB291] text-[#341910] border-[#CFB291] shadow-md shadow-[#CFB291]/20'
                        : 'bg-transparent text-[#CFB291] border-[#CFB291]/25 hover:border-[#CFB291]/60 hover:text-[#FCFCF6] hover:bg-[#CFB291]/5'
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
        <section className="w-full bg-[#5A3122]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20">

            {/* Section label */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/60 font-semibold">
                01 — COMMISSION REGISTRY
              </span>
              <div className="flex-1 h-px bg-[#CFB291]/15"></div>
            </div>

            <div className="bg-[#45241A] border border-[#CFB291]/20 shadow-2xl">

              {/* Table header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-8 pb-0">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#FCFCF6] font-bold tracking-tight">
                    Official 50+ Verified Work<br className="hidden sm:block" /> Commission Registry
                  </h3>
                  <p className="text-[11px] text-[#CFB291]/70 mt-2 uppercase tracking-[0.2em]">
                    Verified residential, modular joinery &amp; fabrication projects across South India
                  </p>
                </div>

                {/* Search input */}
                <div className="relative w-full sm:w-80 flex-shrink-0">
                  <Search className="w-4 h-4 text-[#CFB291] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search city, type, or project..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#341910] border border-[#CFB291]/20 text-xs text-[#FCFCF6] placeholder-[#CFB291]/40 focus:outline-none focus:border-[#CFB291] transition-colors"
                  />
                </div>
              </div>

              <div className="h-px bg-[#CFB291]/20 mx-8 mt-8 mb-0"></div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[#CFB291] border-b border-[#CFB291]/15">
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
                        className={`border-b border-[#CFB291]/8 hover:bg-[#341910] transition-colors duration-200 ${
                          idx % 2 === 0 ? 'bg-transparent' : 'bg-[#341910]/30'
                        }`}
                      >
                        <td className="py-4 px-6 text-[#CFB291] font-bold text-[11px]">
                          {item.id < 10 ? `0${item.id}` : item.id}
                        </td>
                        <td className="py-4 px-4 text-sm font-semibold text-[#FCFCF6]">{item.name}</td>
                        <td className="py-4 px-4 text-[#CFB291] text-[11px]">{item.location}</td>
                        <td className="py-4 px-4 text-[#CFB291]/70 uppercase text-[10px] tracking-wider">{item.type}</td>
                        <td className="py-4 px-4 text-[#CFB291] text-[11px]">{item.area}</td>
                        <td className="py-4 px-4 text-[#CFB291]/60 text-[11px]">{item.year}</td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={onOpenConsultation}
                            className="text-[10px] uppercase tracking-[0.2em] text-[#CFB291] hover:text-[#FCFCF6] font-semibold transition-colors border border-[#CFB291]/30 hover:border-[#CFB291] px-3 py-1.5"
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
              <div className="px-8 py-5 border-t border-[#CFB291]/15 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#CFB291]/50">
                  {filteredRegistry.length} entries displayed
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#CFB291]/40">
                  HYZIN INTERIOR — VERIFIED COMMISSION ARCHIVE
                </span>
              </div>
            </div>
          </div>
        </section>

      ) : (

        /* ─── GALLERY VIEW ──────────────────────────────────────────── */
        <section className="w-full bg-[#5A3122]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20">

            {/* Section label */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/60 font-semibold">
                02 — FEATURED WORKS
              </span>
              <div className="flex-1 h-px bg-[#CFB291]/15"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/40 font-semibold whitespace-nowrap">
                {filteredProjects.length} Projects
              </span>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-[#45241A] border border-[#CFB291]/15 hover:border-[#CFB291]/50 transition-all duration-500 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:shadow-[#CFB291]/5"
                >
                  {/* ── Tall image area (h-96) ── */}
                  <div
                    onClick={() => {
                      const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                      onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                    }}
                    className="relative h-96 overflow-hidden bg-[#341910] cursor-pointer flex-shrink-0"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#341910] via-[#341910]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>

                    {/* Top-left: Project type badge — sharp corners */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-block px-3 py-1.5 bg-[#341910]/90 border border-[#CFB291]/25 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-[0.2em] text-[#FCFCF6]">
                        {project.type}
                      </span>
                    </div>

                    {/* Top-right: Location badge — sharp corners */}
                    <div className="absolute top-5 right-5">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#341910]/90 border border-[#CFB291]/25 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-[0.2em] text-[#FCFCF6]">
                        <MapPin className="w-2.5 h-2.5 text-[#CFB291] flex-shrink-0" />
                        <span>{project.state}</span>
                      </span>
                    </div>

                    {/* Bottom overlay: project meta + title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#CFB291] mb-2 font-semibold">
                        {project.location} &nbsp;•&nbsp; {project.year} &nbsp;•&nbsp; {project.area}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#FCFCF6] group-hover:text-[#CFB291] transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Card bottom: concept + CTAs ── */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#45241A]">
                    <p className="text-[12px] sm:text-[13px] text-[#FCFCF6]/50 font-normal leading-relaxed line-clamp-3">
                      {project.concept}
                    </p>

                    <div className="mt-6 pt-5 border-t border-[#CFB291]/15 flex items-center justify-between">
                      {/* VIEW CASE STUDY CTA */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group/btn inline-flex items-center space-x-2 px-5 py-2.5 bg-transparent border border-[#CFB291]/40 hover:bg-[#CFB291] hover:border-[#CFB291] transition-all duration-300"
                      >
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CFB291] group-hover/btn:text-[#341910] transition-colors">
                          VIEW CASE STUDY
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#CFB291] group-hover/btn:text-[#341910] transition-colors" />
                      </button>

                      {/* Photo count */}
                      <button
                        onClick={() => {
                          const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                          onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                        }}
                        className="text-[10px] uppercase tracking-[0.15em] text-[#CFB291]/60 hover:text-[#CFB291] font-semibold transition-colors"
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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-[#CFB291]/15"></div>
      </div>

      {/* ─── BEFORE / AFTER SLIDER ──────────────────────────────────── */}
      <BeforeAfterSlider onOpenLightbox={onOpenLightbox} />

      {/* ─── GOLD HAIRLINE DIVIDER ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-[#CFB291]/15"></div>
      </div>

      {/* ─── COMMISSION CALLOUT ─────────────────────────────────────── */}
      <section className="w-full bg-[#341910]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-28">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#CFB291]/60 font-semibold">
              03 — BEGIN YOUR COMMISSION
            </span>
            <div className="flex-1 h-px bg-[#CFB291]/15"></div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-12 gap-10 items-center">

            {/* LEFT: Stats + Heading */}
            <div className="col-span-12 lg:col-span-8">
              {/* Editorial stats row */}
              <div className="flex flex-wrap gap-10 mb-10">
                {[
                  { value: '50+', label: 'Commissions Delivered' },
                  { value: '3', label: 'States Served' },
                  { value: '7+', label: 'Design Disciplines' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#CFB291] leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#FCFCF6]/40 font-semibold mt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#FCFCF6] font-extrabold tracking-tight leading-tight">
                Commission Your<br />
                <span className="text-[#CFB291]">Custom Interior Space</span>
              </h3>

              <p className="mt-5 text-sm text-[#FCFCF6]/50 font-normal max-w-xl leading-relaxed">
                Join over 50+ discerning patrons across Kerala, Tamil Nadu, and Karnataka
                who trusted HYZIN INTERIOR to craft their most personal spaces.
              </p>

              {/* Left-border gold quote accent */}
              <blockquote className="mt-8 pl-5 border-l-2 border-[#CFB291] text-[13px] text-[#FCFCF6]/40 italic leading-relaxed max-w-lg">
                "Every detail is considered. Every material is intentional. Every space is singular."
              </blockquote>
            </div>

            {/* RIGHT: CTA */}
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex flex-col items-center justify-center w-56 h-56 bg-[#CFB291] hover:bg-[#FCFCF6] transition-colors duration-300 shadow-2xl shadow-[#CFB291]/20"
              >
                <ArrowUpRight className="w-8 h-8 text-[#341910] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#341910] text-center leading-relaxed">
                  START YOUR<br />PROJECT
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
