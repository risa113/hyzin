import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Heart, MessageCircle, Send, Sparkles, Filter, CheckCircle2, Bookmark, X } from 'lucide-react';
import { instagramProfile } from '../data/instagramData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InstagramShowcase({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedStory, setSelectedStory] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const initialLimit = 6;

  // Handle escape key and body scroll lock when story modal is open
  useEffect(() => {
    if (!selectedStory) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedStory(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [selectedStory]);

  const categories = [
    'ALL',
    'Kitchen Cabinet',
    'Wall Drop',
    'Paneling',
    'Ceiling',
    'Aluminium Interior',
    'Steel Fabrication',
    'Steel Doors',
    'Accessories'
  ];

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const filteredPosts = activeCategory === 'ALL'
    ? instagramProfile.posts
    : instagramProfile.posts.filter(post => post.service === activeCategory);

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, initialLimit);

  const handlePostClick = (post) => {
    if (onOpenLightbox) {
      onOpenLightbox([post.image], 0, post.caption, post.service);
    } else {
      window.open(post.postUrl || instagramProfile.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#0A0A0B] border-t border-[#C9A84C]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Profile Card Header */}
        <div className="bg-[#141416]/90 backdrop-blur-md border border-[#C9A84C]/20 p-5 sm:p-7 rounded-2xl mb-8 sm:mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Handle & Badge Info */}
            <div className="flex items-start space-x-4">
              <div className="relative group cursor-pointer" onClick={() => window.open(instagramProfile.url, '_blank')}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#C9A84C] via-[#C9A84C] to-[#C9A84C] shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0A0A0B] p-0.5">
                    <img
                      src={instagramProfile.posts[0].image}
                      alt="HYZIN Profile"
                      className="w-full h-full object-cover rounded-full filter brightness-105"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#C9A84C] text-[#0A0A0B] rounded-full p-1 shadow">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-mono text-lg sm:text-2xl font-bold text-[#F2EDE4] tracking-wide">
                    {instagramProfile.handle}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-[#3897f0] fill-[#3897f0]/20" />
                  <span className="px-2 py-0.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-[10px] font-mono font-semibold uppercase">
                    Official Studio
                  </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-[#C9A84C] max-w-xl font-normal leading-relaxed">
                  {instagramProfile.bio}
                </p>

                {/* Follower Stats Row */}
                <div className="mt-3 flex items-center space-x-6 text-xs font-mono text-[#C9A84C]">
                  <div>
                    <span className="text-[#F2EDE4] font-bold">{instagramProfile.followers}</span> Followers
                  </div>
                  <div>
                    <span className="text-[#F2EDE4] font-bold">{instagramProfile.postsCount}</span> Posts
                  </div>
                  <div>
                    <span className="text-[#F2EDE4] font-bold">{instagramProfile.following}</span> Following
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={instagramProfile.dmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg flex items-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DM US ON INSTAGRAM</span>
              </a>

              <a
                href={instagramProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#F2EDE4] hover:text-[#C9A84C] text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>FOLLOW PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Instagram Story Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-[#C9A84C]/20">
            <div className="flex items-center space-x-2 mb-3 text-[10px] uppercase font-mono tracking-widest text-[#C9A84C]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>STUDIO STORY HIGHLIGHTS</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto pb-2 scrollbar-none">
              {instagramProfile.stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className="flex flex-col items-center space-y-1.5 min-w-[72px] group focus:outline-none"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#C9A84C] to-[#C9A84C] group-hover:from-[#F2EDE4] group-hover:to-[#C9A84C] transition-all">
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-full filter brightness-90 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#C9A84C] group-hover:text-[#F2EDE4] font-mono truncate max-w-[80px]">
                    {story.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[#C9A84C]/20 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-1">
              <Filter className="w-3.5 h-3.5" />
              <span>THE VISUAL CHRONICLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#F2EDE4] font-bold tracking-tight">
              LIVE INSTAGRAM FEED & GALLERY
            </h2>
          </div>

          {/* Service Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider rounded-md whitespace-nowrap transition-all font-semibold ${
                  activeCategory === cat
                    ? 'bg-[#C9A84C] text-[#0A0A0B] font-bold shadow-md'
                    : 'bg-[#141416] hover:bg-[#1C1C20] text-[#C9A84C] hover:text-[#F2EDE4] border border-[#C9A84C]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram Grid / Responsive Gallery with Slide-Right Pop on Filter Switch */}
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-slide-right-pop">
          {displayedPosts.map((post, idx) => (
            <div
              key={post.id}
              className="group bg-[#141416] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer reveal-up"
              style={{ transitionDelay: `${(idx % 6) * 75}ms` }}
              onClick={() => handlePostClick(post)}
            >
              {/* Image & Overlay */}
              <div className="relative aspect-square overflow-hidden bg-black/40">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Badge Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] uppercase font-mono tracking-wider font-semibold">
                  {post.service}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md text-[#F2EDE4]/80 group-hover:text-[#C9A84C]">
                  <Bookmark className="w-3.5 h-3.5" />
                </div>

                {/* Hover Content overlay */}
                <div className="absolute inset-0 bg-[#0A0A0B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-[#C9A84C] font-mono">
                    <span>{post.location}</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-xs text-[#F2EDE4]/90 line-clamp-4 font-normal leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[#C9A84C]/20">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 text-[#C9A84C]">
                        <Heart className="w-3.5 h-3.5 fill-[#C9A84C]" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[#F2EDE4]/80">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    <span className="text-[#C9A84C] text-[10px] uppercase font-semibold flex items-center space-x-1">
                      <span>EXPAND LIGHTBOX</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Micro Footer Card */}
              <div className="p-4 bg-[#0A0A0B] border-t border-[#C9A84C]/20 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-[#C9A84C] font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                  <span className="text-[#F2EDE4] font-medium">{post.service}</span>
                </div>

                <a
                  href={post.postUrl || instagramProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] text-[#C9A84C] font-mono tracking-wider uppercase hover:underline flex items-center space-x-1"
                >
                  <span>VIEW ON INSTAGRAM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Toggle to view all posts or show fewer */}
        {filteredPosts.length > initialLimit && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl bg-[#141416] hover:bg-[#1C1C20] border border-[#C9A84C]/50 text-[#F2EDE4] hover:text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>{showAll ? 'Show Fewer Posts' : `Show All ${filteredPosts.length} Posts`}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-45'}`} />
            </button>
          </div>
        )}

        {/* Story Modal Popup Teleported directly to document.body */}
        {selectedStory && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className="bg-[#0A0A0B] border border-[#C9A84C]/50 rounded-2xl max-w-sm w-full p-4 sm:p-5 text-[#F2EDE4] shadow-2xl relative animate-pop-up my-auto flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#C9A84C]/20 pb-3 flex-shrink-0">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-[#C9A84C] to-[#C9A84C] flex-shrink-0">
                    <img src={selectedStory.cover} alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#F2EDE4] leading-tight">{selectedStory.title}</h4>
                    <span className="text-[10px] text-[#C9A84C] font-mono">{selectedStory.tag} • {selectedStory.count} Clips</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-1.5 text-[#C9A84C] hover:text-[#F2EDE4] hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close story"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Story Visual Container with Responsive Bounded Height */}
              <div className="relative w-full h-[54vh] max-h-[460px] rounded-xl overflow-hidden bg-black flex-shrink-0 my-3.5 shadow-lg border border-[#C9A84C]/20">
                <img
                  src={selectedStory.cover}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/95 via-transparent to-black/40 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#F2EDE4]/90">
                    <span className="bg-[#0A0A0B]/80 px-2 py-0.5 rounded border border-[#C9A84C]/30">HYZIN ARCHIVE</span>
                    <span>{instagramProfile.handle}</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#F2EDE4]/90 font-normal mb-3 leading-relaxed">
                      Authentic on-site craftsmanship footage from our projects across Kerala, Tamil Nadu & Karnataka.
                    </p>
                    <a
                      href={instagramProfile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center space-x-2 rounded-lg transition-colors shadow-md"
                    >
                      <span>VIEW STORIES ON INSTAGRAM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom dismissal hint */}
              <div className="text-center text-[11px] text-[#C9A84C]/70 flex-shrink-0">
                Click outside or press Esc to close
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Live DM Callout Banner */}
        <div className="mt-10 sm:mt-12 bg-[#141416] border border-[#C9A84C]/30 rounded-2xl p-6 sm:p-7 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>INSTANT INSTAGRAM INQUIRY</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#F2EDE4] font-bold tracking-tight">
              Have an Instagram inspiration post or Reel?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#C9A84C] font-normal leading-relaxed">
              Send the photo or Reel directly to our Instagram DM <span className="text-[#C9A84C] font-semibold">@hyzin.interior</span> for an instant estimate, material feasibility, and 3D consultation!
            </p>
          </div>

          <a
            href={instagramProfile.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-xs uppercase font-bold tracking-widest rounded-xl transition-all shadow-xl whitespace-nowrap flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>SEND DM ON INSTAGRAM</span>
          </a>
        </div>

      </div>
    </section>
  );
}
