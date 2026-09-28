import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Grid, 
  Filter, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  ChevronDown,
  Layers,
  Image as ImageIcon,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { ALL_KERALA_PHOTOS } from '../data/clientAssets';

export default function MasterPhotoVault({ onOpenLightbox, onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(16);

  const categories = [
    { id: 'All', label: 'All Work (72)' },
    { id: 'Kitchen Cabinet', label: 'Kitchen Cabinet' },
    { id: 'Wall Drop', label: 'Wall Drop & Wardrobe' },
    { id: 'Loft', label: 'Loft Storage' },
    { id: 'Paneling', label: 'Paneling & Partitions' },
    { id: 'Ceiling', label: 'Ceiling & Cove' },
    { id: 'Aluminium Interior', label: 'Aluminium Interior' },
    { id: 'Steel Fabrication', label: 'Steel Railings' },
    { id: 'MS Fabrication', label: 'MS Security Grills' },
    { id: 'Steel Doors', label: 'Steel Doors' },
    { id: 'Accessories', label: 'Sanitary Accessories' }
  ];

  // Filtered photos calculation
  const filteredPhotos = useMemo(() => {
    return ALL_KERALA_PHOTOS.filter((photo) => {
      const matchesCategory = selectedCategory === 'All' || photo.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        photo.title.toLowerCase().includes(q) ||
        photo.location.toLowerCase().includes(q) ||
        photo.category.toLowerCase().includes(q) ||
        photo.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  const handleOpenPhoto = (index) => {
    const list = filteredPhotos.map(p => p.url);
    const targetPhoto = filteredPhotos[index];
    onOpenLightbox(list, index, targetPhoto.title, targetPhoto.category);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#3A2117] relative overflow-hidden" id="photo-vault">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C4A174_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#C4A174]/15 border border-[#C4A174]/30 text-[#C4A174] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A174]" /> Master Photo Gallery (72 Client Photos)
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDE3D2] mb-3 sm:mb-4">
            Complete Kerala Client <span className="text-[#C4A174]">Work Archive</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4A174] leading-relaxed">
            Browse all 72 authentic on-site photos of our completed luxury modular kitchens, wall drops, fluted paneling, ceiling cove lighting, and structural steel works across Kerala.
          </p>
        </div>

        {/* Filter Bar & Live Search Controls */}
        <div className="bg-[#4A2E22] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-xl border border-[#C4A174]/20 mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            
            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#C4A174] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, acrylic, fluted, quartz..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#3A2117] border border-[#C4A174]/20 text-xs text-[#EDE3D2] placeholder-[#C4A174]/60 focus:outline-none focus:border-[#C4A174] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C4A174] hover:text-[#EDE3D2]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="text-[11px] sm:text-xs text-[#C4A174] font-medium flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C4A174]" />
              <span>Showing <strong className="text-[#EDE3D2]">{filteredPhotos.length}</strong> of 72 client photos</span>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#C4A174]/20 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleCount(16);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#C4A174] text-[#3A2117] font-bold shadow-md'
                    : 'bg-[#3A2117] text-[#C4A174] hover:bg-[#704936] hover:text-[#EDE3D2] border border-[#C4A174]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 72 Photo Grid Showcase with Slide-Right Pop on Filter Switch */}
        {displayedPhotos.length > 0 ? (
          <div key={`${selectedCategory}-${searchQuery}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 animate-slide-right-pop">
            {displayedPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => handleOpenPhoto(idx)}
                className="group relative bg-[#4A2E22] rounded-3xl overflow-hidden border border-[#C4A174]/20 shadow-md hover:border-[#C4A174]/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                style={{ transitionDelay: `${(idx % 8) * 60}ms` }}
              >
                {/* Image Container with Hover Zoom & Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#3A2117]">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2117]/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-[#EDE3D2] text-xs font-medium flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C4A174]" /> Click for Fullscreen Lightbox
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#3A2117]/80 backdrop-blur-md border border-[#C4A174]/30 text-[#C4A174] text-[10px] font-semibold tracking-wide">
                    {photo.category}
                  </div>

                  {/* Location Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#3A2117]/90 backdrop-blur-md border border-[#C4A174]/20 text-[#EDE3D2] text-[10px] font-bold shadow">
                    <MapPin className="w-3 h-3 text-[#C4A174]" />
                    {photo.location.split(',')[0]}
                  </div>
                </div>

                {/* Card Description Footer */}
                <div className="p-4 bg-[#4A2E22]">
                  <h3 className="text-sm font-semibold text-[#EDE3D2] group-hover:text-[#C4A174] transition-colors line-clamp-1 mb-2">
                    {photo.title}
                  </h3>

                  {/* Keyword Tags */}
                  <div className="flex flex-wrap gap-1">
                    {photo.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-[#3A2117] border border-[#C4A174]/20 text-[10px] text-[#C4A174] font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#4A2E22] rounded-3xl border border-[#C4A174]/20">
            <ImageIcon className="w-12 h-12 text-[#C4A174] mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-[#EDE3D2] tracking-tight">No client photos matched your search</h3>
            <p className="text-xs text-[#C4A174] mt-1">Try clearing your search query or selecting another category tab.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#C4A174] text-[#3A2117] text-xs font-bold hover:bg-[#EDE3D2] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More / Show All Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(filteredPhotos.length)}
              className="px-8 py-3.5 rounded-2xl bg-[#C4A174] text-[#3A2117] text-xs font-bold uppercase tracking-widest hover:bg-[#EDE3D2] transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto"
            >
              <span>Load All {filteredPhotos.length} Authentic Photos</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
