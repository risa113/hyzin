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
    <div className="animate-page-enter pt-12 pb-24 bg-[#1C1C20]">
      {/* Page Header with 50+ Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#C9A84C]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#0A0A0B] border border-[#C9A84C]/20 text-[#F2EDE4] text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
              <span>50+ AUTHENTIC COMMISSIONS COMPLETED</span>
            </div>

            <h1 className="text-4xl sm:text-6xl text-[#F2EDE4] font-extrabold leading-[1.12] tracking-tight">
              50+ Selected Work & <span className="text-[#C9A84C]">Sanctuaries.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#C9A84C] font-normal leading-relaxed">
              Spaces designed with intention. An extensive registry of 50+ private residences, bespoke modular kitchens, wall drops, fluted paneling, and structural fabrications delivered across Kerala, Tamil Nadu, and Karnataka.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end">
            <button
              onClick={() => setShowRegistry(!showRegistry)}
              className="px-5 py-2.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase tracking-widest font-bold transition-colors shadow-lg flex items-center space-x-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#0A0A0B]" />
              <span>{showRegistry ? 'VIEW PHOTO GALLERY' : 'BROWSE 50+ REGISTRY INDEX'}</span>
            </button>
            <span className="text-[11px] text-[#C9A84C] font-medium mt-2">
              Kochi • Bengaluru • Chennai • Coimbatore • Calicut
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        {!showRegistry && (
          <div className="mt-12 flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 sm:px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-300 border ${
                  activeFilter === cat.id
                    ? 'bg-[#C9A84C] text-[#0A0A0B] border-[#C9A84C] shadow-md'
                    : 'bg-[#141416] text-[#C9A84C] border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:text-[#F2EDE4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* View Mode A: Complete 50+ Commission Registry Table */}
      {showRegistry ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
          <div className="bg-[#141416] border border-[#C9A84C]/20 shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#C9A84C]/20">
              <div>
                <h3 className="text-2xl sm:text-3xl text-[#F2EDE4] font-bold tracking-tight">
                  Official 50+ Verified Work Commission Registry
                </h3>
                <p className="text-xs sm:text-sm text-[#C9A84C] mt-1 font-normal">
                  Showing all verified residential, modular joinery, and fabrication projects across South India.
                </p>
              </div>

              {/* Search Registry Input */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-[#C9A84C] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city, type, or project..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#0A0A0B] border border-[#C9A84C]/20 text-xs text-[#F2EDE4] placeholder-[#C9A84C]/60 focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
            </div>

            {/* Registry Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#C9A84C]/20 text-[#C9A84C] uppercase tracking-wider pb-3 font-semibold">
                    <th className="py-3 px-3">#</th>
                    <th className="py-3 px-3">Project Title</th>
                    <th className="py-3 px-3">Location</th>
                    <th className="py-3 px-3">Typology / Discipline</th>
                    <th className="py-3 px-3">Scale</th>
                    <th className="py-3 px-3">Year</th>
                    <th className="py-3 px-3 text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C9A84C]/10">
                  {filteredRegistry.map((item) => (
                    <tr key={item.id} className="hover:bg-[#0A0A0B]/50 transition-colors">
                      <td className="py-3.5 px-3 text-[#C9A84C] font-semibold">{item.id < 10 ? `0${item.id}` : item.id}</td>
                      <td className="py-3.5 px-3 text-sm font-semibold text-[#F2EDE4]">{item.name}</td>
                      <td className="py-3.5 px-3 text-[#C9A84C]">{item.location}</td>
                      <td className="py-3.5 px-3 text-[#C9A84C]/80 uppercase">{item.type}</td>
                      <td className="py-3.5 px-3 text-[#C9A84C]">{item.area}</td>
                      <td className="py-3.5 px-3 text-[#C9A84C]/80">{item.year}</td>
                      <td className="py-3.5 px-3 text-right">
                        <button
                          onClick={onOpenConsultation}
                          className="text-[10px] uppercase text-[#C9A84C] hover:text-[#F2EDE4] hover:underline font-semibold"
                        >
                          Commission →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        /* View Mode B: Detailed Photo Gallery */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#141416] border border-[#C9A84C]/20 shadow-lg hover:border-[#C9A84C]/60 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container with animatic light sweep */}
                <div 
                  onClick={() => {
                    const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                    onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                  }}
                  className="relative h-72 sm:h-80 overflow-hidden animatic-reflection bg-[#0A0A0B] cursor-pointer"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#0A0A0B]/90 border border-[#C9A84C]/20 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest text-[#F2EDE4] shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span className="px-2.5 py-1 bg-[#0A0A0B] border border-[#C9A84C]/20 text-[#F2EDE4] text-[10px] uppercase font-mono tracking-widest flex items-center space-x-1">
                      <MapPin className="w-2.5 h-2.5 text-[#C9A84C]" />
                      <span>{project.state}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-[#F2EDE4]">
                    <div className="text-[10px] uppercase tracking-wider text-[#C9A84C] mb-1 font-semibold">
                      {project.location} • {project.year} • {project.area}
                    </div>
                    <h3 className="text-xl sm:text-2xl text-[#F2EDE4] font-bold group-hover:text-[#C9A84C] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#C9A84C] font-normal leading-relaxed line-clamp-3">
                    {project.concept}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#C9A84C]/20 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold flex items-center space-x-1.5 hover:text-[#F2EDE4] transition-colors"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        const allPhotos = Array.from(new Set([project.heroImage, ...(project.gallery || [])]));
                        onOpenLightbox && onOpenLightbox(allPhotos, 0, project.title, project.type);
                      }}
                      className="text-[10px] text-[#C9A84C] font-medium hover:text-[#C9A84C] transition-colors"
                    >
                      {1 + (project.gallery?.length || 0)} Photos ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Before / After Transformation Rigor (Raw Site vs Finished HYZIN Interior) */}
      <BeforeAfterSlider onOpenLightbox={onOpenLightbox} />

      {/* Commission Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-10 sm:p-14 bg-[#0A0A0B] border border-[#C9A84C]/20 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] uppercase text-[#C9A84C] tracking-widest block mb-1 font-semibold">
              50+ COMMISSIONS DELIVERED
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#F2EDE4] font-bold tracking-tight">
              Commission Your Custom Interior Space
            </h3>
            <p className="mt-2 text-sm text-[#C9A84C] font-normal max-w-lg">
              Join over 50+ discerning patrons across Kerala, Tamil Nadu, and Karnataka.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase tracking-[0.25em] font-bold whitespace-nowrap transition-colors shadow-lg"
          >
            START YOUR PROJECT
          </button>
        </div>
      </section>
    </div>
  );
}
