import { ArrowUpRight, Phone } from 'lucide-react';
import { CLIENT_SERVICES_CONFIG, BRAND_ASSETS } from '../data/clientAssets';

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
    <footer className="bg-[#141416] text-[#A69F93] border-t border-white/[0.08] pt-16 pb-24 sm:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={BRAND_ASSETS.logoBadge}
                alt="HYZIN Logo"
                className="w-8 h-8 rounded-full object-cover border border-[#c5a065]/40"
              />
              <h3 className="font-cinzel text-2xl font-bold tracking-[0.2em] text-[#FAF8F5]">
                HYZIN INTERIOR
              </h3>
            </div>
            <p className="text-xs uppercase font-mono tracking-widest text-[#D4B584] mb-4">
              Interior Architecture & Structural Fabrication
            </p>
            <p className="text-sm text-[#C4BCB1] font-light leading-relaxed max-w-sm">
              Creating quiet grandeur and sculpted spaces across Kerala, Tamil Nadu, and Karnataka. From raw site framing to turnkey white-glove handover.
            </p>
            <div className="mt-6 font-serif italic text-base text-[#FAF8F5]">
              “Good interiors don’t simply look beautiful. They make everyday life better.”
            </div>
          </div>

          {/* 10 Core Services Col */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4B584] block mb-4">
              10 CORE SERVICES
            </span>
            <ul className="space-y-2 text-xs text-[#EAE5DC]">
              {CLIENT_SERVICES_CONFIG.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D4B584] transition-colors flex items-center space-x-2 text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A065]"></span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 5-Page Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4B584] block mb-4">
              EXPLORE
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-mono">
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

            <div className="mt-6 text-xs font-mono text-[#8C8275]">
              DIRECT STUDIO DESK: <br />
              <a href="tel:6282549008" className="text-[#FAF8F5] hover:text-[#D4B584] text-sm font-sans font-medium flex items-center space-x-1 mt-1">
                <Phone className="w-3.5 h-3.5 text-[#D4B584]" />
                <span>+91 6282549008</span>
              </a>
            </div>
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
                className="p-4 bg-[#1b1c20] border border-white/[0.08] hover:border-[#D4B584]/50 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <InstagramIcon className="w-5 h-5 text-[#D4B584]" />
                  <div>
                    <span className="font-medium text-white block">@hyzin.interior</span>
                    <span className="text-[10px] text-[#8C8275]">Daily On-Site Stories</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A69F93] group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-[#D4B584] hover:bg-[#FAF0DC] text-[#111113] font-semibold uppercase tracking-widest text-[11px] transition-colors shadow-lg shadow-[#D4B584]/10"
              >
                START YOUR PROJECT
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Micro Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A746B] font-mono">
          <div>
            © 2026 HYZIN INTERIOR. All Rights Reserved. Original Client Photography.
          </div>
          <div className="mt-3 sm:mt-0 flex items-center space-x-6">
            <span>KERALA • TAMIL NADU • KARNATAKA</span>
            <span>|</span>
            <span>+91 6282549008</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
