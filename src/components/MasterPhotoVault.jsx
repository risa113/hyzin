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
    <section className="py-20 bg-[#5A3122] relative overflow-hidden" id="photo-vault">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#CFB291_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CFB291]/15 border border-[#CFB291]/30 text-[#CFB291] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#CFB291]" /> Master Photo Gallery (72 Client Photos)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FCFCF6] mb-4">
            Complete Kerala Client <span className="text-[#CFB291]">Work Archive</span>
          </h2>
          <p className="text-base text-[#CFB291] leading-relaxed">
            Browse all 72 authentic on-site photos of our completed luxury modular kitchens, wall drops, fluted paneling, ceiling cove lighting, and structural steel works across Kerala.
          </p>
        </div>

        {/* Filter Bar & Live Search Controls */}
        <div className="bg-[#45241A] rounded-3xl p-4 sm:p-6 shadow-xl border border-[#CFB291]/20 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#CFB291] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, acrylic, fluted, quartz, rose gold..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#341910] border border-[#CFB291]/20 text-xs text-[#FCFCF6] placeholder-[#CFB291]/60 focus:outline-none focus:border-[#CFB291] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#CFB291] hover:text-[#FCFCF6]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="text-xs text-[#CFB291] font-medium flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#CFB291]" />
              Showing <span className="font-bold text-[#FCFCF6]">{filteredPhotos.length}</span> of 72 authentic client photos
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="mt-4 pt-4 border-t border-[#CFB291]/20 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#CFB291] text-[#341910] font-bold shadow-lg scale-105'
                    : 'bg-[#341910] text-[#CFB291] hover:bg-[#5A3122] hover:text-[#FCFCF6] border border-[#CFB291]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 72 Photo Grid Showcase with Slide-Right Pop on Filter Switch */}
        {displayedPhotos.length > 0 ? (
          <div key={`${selectedCategory}-${searchQuery}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-right-pop">
            {displayedPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => handleOpenPhoto(idx)}
                className="group relative bg-[#45241A] rounded-3xl overflow-hidden border border-[#CFB291]/20 shadow-md hover:border-[#CFB291]/50 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between reveal-up"
                style={{ transitionDelay: `${(idx % 8) * 60}ms` }}
              >
                {/* Image Container with Hover Zoom & Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#341910]">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#341910]/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-[#FCFCF6] text-xs font-medium flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#CFB291]" /> Click for Fullscreen Lightbox
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#341910]/80 backdrop-blur-md border border-[#CFB291]/30 text-[#CFB291] text-[10px] font-semibold tracking-wide">
                    {photo.category}
                  </div>

                  {/* Location Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#341910]/90 backdrop-blur-md border border-[#CFB291]/20 text-[#FCFCF6] text-[10px] font-bold shadow">
                    <MapPin className="w-3 h-3 text-[#CFB291]" />
                    {photo.location.split(',')[0]}
                  </div>
                </div>

                {/* Card Description Footer */}
                <div className="p-4 bg-[#45241A]">
                  <h3 className="text-sm font-semibold text-[#FCFCF6] group-hover:text-[#CFB291] transition-colors line-clamp-1 mb-2">
                    {photo.title}
                  </h3>

                  {/* Keyword Tags */}
                  <div className="flex flex-wrap gap-1">
                    {photo.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-[#341910] border border-[#CFB291]/20 text-[10px] text-[#CFB291] font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#45241A] rounded-3xl border border-[#CFB291]/20">
            <ImageIcon className="w-12 h-12 text-[#CFB291] mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-[#FCFCF6] tracking-tight">No client photos matched your search</h3>
            <p className="text-xs text-[#CFB291] mt-1">Try clearing your search query or selecting another category tab.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#CFB291] text-[#341910] text-xs font-bold hover:bg-[#FCFCF6] transition-colors"
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
              className="px-8 py-3.5 rounded-2xl bg-[#CFB291] text-[#341910] text-xs font-bold uppercase tracking-widest hover:bg-[#FCFCF6] transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto"
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
