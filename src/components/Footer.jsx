import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({ onNavigate, onOpenConsultation }) {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#181716] text-[#A69F93] border-t border-black/[0.08] pt-16 pb-24 sm:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <h3 className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#FAF8F5] mb-2">
              HYZIN INTERIOR
            </h3>
            <p className="text-xs uppercase font-mono tracking-widest text-[#D4B584] mb-4">
              Interior Design Studio • South India
            </p>
            <p className="text-sm text-[#C4BCB1] font-light leading-relaxed max-w-sm">
              Creating quiet grandeur and sculpted spaces across Kerala, Tamil Nadu, and Karnataka. From concept blueprint to turnkey white-glove handover.
            </p>
            <div className="mt-6 font-serif italic text-base text-[#FAF8F5]">
              “Designed for better living.”
            </div>
          </div>

          {/* Regional Studios Col */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4B584] block mb-4">
              REGIONAL COVERAGE
            </span>
            <ul className="space-y-3 font-light text-sm text-[#EAE5DC]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A065]"></span>
                <span>Kerala Atelier — Kochi & Calicut</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A065]"></span>
                <span>Karnataka Guild — Bengaluru & Mysuru</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A065]"></span>
                <span>Tamil Nadu Atelier — Chennai & Coimbatore</span>
              </li>
            </ul>

            <div className="mt-6 text-xs font-mono text-[#8C8275]">
              DIRECT DESK: <br />
              <a href="tel:6282549008" className="text-[#FAF8F5] hover:text-[#D4B584] text-sm font-sans font-medium">
                +91 6282549008
              </a>
            </div>
          </div>

          {/* 5-Page Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4B584] block mb-4">
              PAGES
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest font-mono">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About & Ethos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Services & Materials
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Social & Brief Initiation */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4B584] block mb-4">
                VISUAL DISPATCH
              </span>
              <a
                href="https://www.instagram.com/hyzin.interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#23211F] border border-white/[0.08] hover:border-[#D4B584]/50 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <InstagramIcon className="w-5 h-5 text-[#D4B584]" />
                  <div>
                    <span className="font-medium text-white block">@hyzin.interior</span>
                    <span className="text-[10px] text-[#8C8275]">Follow Daily Dispatches</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A69F93] group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] font-semibold uppercase tracking-widest text-[11px] transition-colors"
              >
                START YOUR PROJECT
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Micro Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A746B] font-mono">
          <div>
            © 2026 HYZIN INTERIOR. All Rights Reserved.
          </div>
          <div className="mt-3 sm:mt-0 flex items-center space-x-6">
            <span>KERALA • TAMIL NADU • KARNATAKA</span>
            <span>|</span>
            <span>10.0261° N, 76.3125° E</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
