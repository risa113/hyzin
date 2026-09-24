import { useState } from 'react';
import { ArrowUpRight, Heart, MessageCircle, Send, Sparkles, Filter, CheckCircle2, Bookmark } from 'lucide-react';
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

  const filteredPosts = activeCategory === 'ALL'
    ? instagramProfile.posts
    : instagramProfile.posts.filter(post => post.service === activeCategory);

  const handlePostClick = (post) => {
    if (onOpenLightbox) {
      onOpenLightbox(post.image, 0, post.caption, post.service);
    } else {
      window.open(post.postUrl || instagramProfile.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0d] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a065]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Profile Card Header */}
        <div className="bg-[#14151a]/80 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 rounded-2xl mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Handle & Badge Info */}
            <div className="flex items-start space-x-4">
              <div className="relative group cursor-pointer" onClick={() => window.open(instagramProfile.url, '_blank')}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0a0a0c] p-0.5">
                    <img
                      src={instagramProfile.posts[0].image}
                      alt="HYZIN Profile"
                      className="w-full h-full object-cover rounded-full filter brightness-105"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#d4b584] text-[#0a0a0c] rounded-full p-1 shadow">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-mono text-lg sm:text-2xl font-bold text-white tracking-wide">
                    {instagramProfile.handle}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-[#3897f0] fill-[#3897f0]/20" />
                  <span className="px-2 py-0.5 rounded-full bg-[#d4b584]/20 border border-[#d4b584]/40 text-[#d4b584] text-[10px] font-mono font-semibold uppercase">
                    Official Studio
                  </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-[#b5af9f] max-w-xl font-light leading-relaxed">
                  {instagramProfile.bio}
                </p>

                {/* Follower Stats Row */}
                <div className="mt-3 flex items-center space-x-6 text-xs font-mono text-[#a8a195]">
                  <div>
                    <span className="text-white font-bold">{instagramProfile.followers}</span> Followers
                  </div>
                  <div>
                    <span className="text-white font-bold">{instagramProfile.postsCount}</span> Posts
                  </div>
                  <div>
                    <span className="text-white font-bold">{instagramProfile.following}</span> Following
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
                className="px-5 py-3 rounded-lg bg-[#d4b584] hover:bg-[#faf0dc] text-[#0a0a0c] text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg flex items-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DM US ON INSTAGRAM</span>
              </a>

              <a
                href={instagramProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg border border-white/20 hover:border-[#d4b584] text-white hover:text-[#d4b584] text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>FOLLOW PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Instagram Story Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center space-x-2 mb-3 text-[10px] uppercase font-mono tracking-widest text-[#d4b584]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4b584]" />
              <span>STUDIO STORY HIGHLIGHTS</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto pb-2 scrollbar-none">
              {instagramProfile.stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className="flex flex-col items-center space-y-1.5 min-w-[72px] group focus:outline-none"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#d4b584] to-[#9e8255] group-hover:from-[#f09433] group-hover:to-[#bc1888] transition-all">
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-full filter brightness-90 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#c4bcb1] group-hover:text-white font-mono truncate max-w-[80px]">
                    {story.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a065] font-medium mb-1">
              <Filter className="w-3.5 h-3.5" />
              <span>THE VISUAL CHRONICLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#faf6ee] font-bold tracking-tight">
              LIVE INSTAGRAM FEED & GALLERY
            </h2>
          </div>

          {/* Service Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider rounded-md whitespace-nowrap transition-all font-semibold ${
                  activeCategory === cat
                    ? 'bg-[#d4b584] text-[#0a0a0c] font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-[#a8a195] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram 6-Grid / Responsive Gallery with Slide-Right Pop on Filter Switch */}
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-right-pop">
          {filteredPosts.map((post, idx) => (
            <div
              key={post.id}
              className="group bg-[#141519] border border-white/[0.08] hover:border-[#d4b584]/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer reveal-up"
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
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[#d4b584] text-[10px] uppercase font-mono tracking-wider font-semibold">
                  {post.service}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 backdrop-blur-md text-white/80 group-hover:text-[#d4b584]">
                  <Bookmark className="w-3.5 h-3.5" />
                </div>

                {/* Hover Content overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-[#d4b584] font-mono">
                    <span>{post.location}</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-xs text-white/90 line-clamp-4 font-light leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/20">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 text-[#d4b584]">
                        <Heart className="w-3.5 h-3.5 fill-[#d4b584]" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-white/80">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    <span className="text-[#d4b584] text-[10px] uppercase font-semibold flex items-center space-x-1">
                      <span>EXPAND LIGHTBOX</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Micro Footer Card */}
              <div className="p-4 bg-[#111216] border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-[#a8a195] font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b584]"></span>
                  <span className="text-white font-medium">{post.service}</span>
                </div>

                <a
                  href={post.postUrl || instagramProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] text-[#d4b584] font-mono tracking-wider uppercase hover:underline flex items-center space-x-1"
                >
                  <span>VIEW ON INSTAGRAM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Story Modal Popup (if clicked) */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#14151a] border border-[#d4b584]/40 rounded-2xl max-w-md w-full p-6 text-white space-y-4 shadow-2xl relative animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full p-[2px] bg-[#d4b584]">
                    <img src={selectedStory.cover} alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{selectedStory.title}</h4>
                    <span className="text-[10px] text-[#d4b584] font-mono">{selectedStory.tag} • {selectedStory.count} Clips</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-2 py-1 text-xs text-gray-400 hover:text-white bg-white/10 rounded"
                >
                  Close ✕
                </button>
              </div>

              <div className="aspect-[9/16] rounded-xl overflow-hidden relative bg-black">
                <img
                  src={selectedStory.cover}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-4 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-mono text-white/80">
                    <span>HYZIN STORY ARCHIVE</span>
                    <span>{instagramProfile.handle}</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/90 font-light mb-3">
                      Authentic on-site craftsmanship footage from our projects across Kerala, Tamil Nadu & Karnataka.
                    </p>
                    <a
                      href={instagramProfile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#d4b584] text-[#0a0a0c] text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center space-x-2 rounded-lg"
                    >
                      <span>VIEW STORIES ON INSTAGRAM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live DM Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#17181f] via-[#1a1c24] to-[#17181f] border border-[#d4b584]/30 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4b584]/15 border border-[#d4b584]/30 text-[#d4b584] text-xs font-semibold uppercase tracking-wider mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>INSTANT INSTAGRAM INQUIRY</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-tight">
              Have an Instagram inspiration post or Reel?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#b5af9f] font-normal leading-relaxed">
              Send the photo or Reel directly to our Instagram DM <span className="text-[#d4b584] font-medium">@hyzin.interior</span> for an instant estimate, material feasibility, and 3D consultation!
            </p>
          </div>

          <a
            href={instagramProfile.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#d4b584] hover:bg-[#faf0dc] text-[#0a0a0c] text-xs uppercase font-bold tracking-widest rounded-xl transition-all shadow-xl whitespace-nowrap flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>SEND DM ON INSTAGRAM</span>
          </a>
        </div>

      </div>
    </section>
  );
}
