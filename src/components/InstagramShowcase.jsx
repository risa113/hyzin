import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { instagramProfile } from '../data/instagramData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


export default function InstagramShowcase() {
  return (
    <section className="py-24 bg-[#0a0a0d] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>THE VISUAL CHRONICLE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#faf6ee] font-normal tracking-tight">
              FOLLOW THE JOURNEY
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#a8a195] font-light">
              More spaces. More details. More inspiration. Curated daily on our official Instagram.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={instagramProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-[#d4b584] text-[#d4b584] hover:bg-[#d4b584] hover:text-[#0a0a0c] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 group"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 6-Grid Instagram Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramProfile.posts.map((post) => (
            <a
              key={post.id}
              href={instagramProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#141519] border border-white/[0.08] block"
            >
              <img
                src={post.image}
                alt="HYZIN Instagram Post"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#d4b584]">
                    {post.type}
                  </span>
                  <div className="flex items-center space-x-1 text-xs">
                    <Heart className="w-3 h-3 fill-[#d4b584] text-[#d4b584]" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="text-[11px] text-white/90 line-clamp-3 font-light leading-snug">
                  {post.caption}
                </p>

                <span className="text-[10px] text-[#d4b584] font-mono tracking-widest uppercase">
                  VIEW ON INSTAGRAM ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Brand Tagline Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8e887e] font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a065]"></span>
            <span className="text-[#faf6ee] font-semibold">{instagramProfile.handle}</span>
            <span>• {instagramProfile.followers} Discerning Design Observers</span>
          </div>
          <div className="mt-2 sm:mt-0 text-[#a8a195]">
            Serving Kerala • Tamil Nadu • Karnataka
          </div>
        </div>

      </div>
    </section>
  );
}
