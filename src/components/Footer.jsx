import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
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
    <footer className="bg-[#0A0A0B] text-[#C9A84C] border-t border-[#C9A84C]/20 pt-10 pb-12 sm:pt-16 sm:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOBILE COMPACT FOOTER (Visible on Mobile only: sm:hidden) */}
        <div className="block sm:hidden space-y-6 pb-8 border-b border-[#C9A84C]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <img
                src={BRAND_ASSETS.logoBadge}
                alt="HYZIN Logo"
                className="w-7 h-7 rounded-full object-cover border border-[#C9A84C]/40"
              />
              <span className="text-lg font-bold tracking-wider text-[#F2EDE4]">
                HYZIN INTERIOR
              </span>
            </div>
            <a
              href="https://www.instagram.com/hyzin.interior/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#141416] border border-[#C9A84C]/20 rounded text-[#C9A84C] flex items-center space-x-1 text-[10px] font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@hyzin</span>
            </a>
          </div>

          <p className="text-[11px] text-[#C9A84C] font-normal leading-snug">
            Interior Design & Specialized Fabrication • Kerala • Tamil Nadu • Karnataka
          </p>

          {/* Quick Key Links Grid */}
          <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-medium tracking-wider">
            <button
              onClick={() => handleNav('3d-house')}
              className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#C9A84C] text-left rounded font-bold"
            >
              3D House Model →
            </button>
            <button
              onClick={() => handleNav('photo-vault')}
              className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left rounded"
            >
              72 Photos Vault →
            </button>
            <button
              onClick={() => handleNav('services')}
              className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left rounded"
            >
              10 Services →
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left rounded"
            >
              Contact Brief →
            </button>
          </div>

          {/* Call & CTA Row */}
          <div className="pt-2 space-y-2">
            <button
              onClick={onOpenConsultation}
              className="w-full py-3 bg-[#C9A84C] text-[#0A0A0B] font-bold uppercase tracking-widest text-[10px] rounded-sm flex items-center justify-center space-x-1"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-center">
              <a href="tel:916282549008" className="p-2 bg-[#141416] border border-[#C9A84C]/20 rounded text-[#F2EDE4] flex items-center justify-center gap-1">
                <Phone className="w-3 h-3 text-[#C9A84C]" />
                <span>Line 1</span>
              </a>
              <a href="tel:918848023041" className="p-2 bg-[#141416] border border-[#C9A84C]/20 rounded text-[#F2EDE4] flex items-center justify-center gap-1">
                <Phone className="w-3 h-3 text-[#C9A84C]" />
                <span>Line 2</span>
              </a>
            </div>

            <div className="space-y-1.5 pt-1">
              <a href="mailto:Muhammedashad395@gmail.com" className="p-2 bg-[#141416] border border-[#C9A84C]/20 rounded text-[#F2EDE4] text-[10px] font-medium flex items-center justify-center gap-1.5 break-all">
                <Mail className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <span>Muhammedashad395@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#141416] border border-[#C9A84C]/20 rounded text-[#C9A84C] text-[10px] font-medium flex items-center justify-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <span>Studio Workshop on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP FULL FOOTER (Visible on Tablets & Desktops: hidden sm:block) */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#C9A84C]/20">
            
            {/* Brand Col */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={BRAND_ASSETS.logoBadge}
                  alt="HYZIN Logo"
                  className="w-8 h-8 rounded-full object-cover border border-[#C9A84C]/40"
                />
                <h3 className="text-2xl font-bold tracking-[0.12em] text-[#F2EDE4]">
                  HYZIN INTERIOR
                </h3>
              </div>
              <p className="text-xs uppercase font-medium tracking-widest text-[#C9A84C] mb-4">
                Interior Design & Specialized Metal Fabrication
              </p>
              <p className="text-sm text-[#C9A84C] font-normal leading-relaxed max-w-sm">
                Creating quiet grandeur and sculpted spaces across Kerala, Tamil Nadu, and Karnataka. From raw site framing to turnkey white-glove handover.
              </p>
              <div className="mt-6 italic text-sm font-medium text-[#F2EDE4]">
                “Good interiors don’t simply look beautiful. They make everyday life better.”
              </div>
            </div>

            {/* 10 Core Services Col */}
            <div className="lg:col-span-3">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#C9A84C] block mb-4">
                10 CORE SERVICES
              </span>
              <ul className="space-y-2 text-xs text-[#F2EDE4]/90">
                {CLIENT_SERVICES_CONFIG.map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => handleNav('services')}
                      className="hover:text-[#C9A84C] transition-colors flex items-center space-x-2 text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C]"></span>
                      <span>{srv.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5-Page Navigation Links */}
            <div className="lg:col-span-2">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#C9A84C] block mb-4">
                EXPLORE
              </span>
              <ul className="space-y-3 text-xs uppercase tracking-wider font-medium text-[#F2EDE4]/90">
                <li>
                  <button onClick={() => handleNav('home')} className="hover:text-[#C9A84C] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('3d-house')} className="hover:text-[#F2EDE4] text-[#C9A84C] font-bold transition-colors">
                    3D House Model
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('photo-vault')} className="hover:text-[#C9A84C] transition-colors">
                    72 Photos Vault
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('projects')} className="hover:text-[#C9A84C] transition-colors">
                    Selected Work
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-[#C9A84C] transition-colors">
                    10 Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-[#C9A84C] transition-colors">
                    About & Ethos
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#C9A84C] transition-colors">
                    Contact & Brief
                  </button>
                </li>
              </ul>

              <div className="mt-6 text-xs text-[#C9A84C]">
                DIRECT STUDIO DESK: <br />
                <div className="space-y-1.5 mt-1.5">
                  <a href="tel:916282549008" className="text-[#F2EDE4] hover:text-[#C9A84C] text-xs font-medium flex items-center space-x-1.5">
                    <Phone className="w-3 h-3 text-[#C9A84C]" />
                    <span>+91 6282549008 (Line 1)</span>
                  </a>
                  <a href="tel:918848023041" className="text-[#F2EDE4] hover:text-[#C9A84C] text-xs font-medium flex items-center space-x-1.5">
                    <Phone className="w-3 h-3 text-[#C9A84C]" />
                    <span>+91 8848023041 (Line 2)</span>
                  </a>
                  <a href="mailto:Muhammedashad395@gmail.com" className="text-[#F2EDE4] hover:text-[#C9A84C] text-xs font-medium flex items-center space-x-1.5 break-all">
                    <Mail className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                    <span>Muhammedashad395@gmail.com</span>
                  </a>
                  <a href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline text-xs font-medium flex items-center space-x-1.5 pt-0.5">
                    <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                    <span>Studio & Workshop Location</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Social & Brief Initiation */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#C9A84C] block mb-4">
                  VISUAL DISPATCH
                </span>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/hyzin.interior/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#141416] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 flex items-center justify-between group transition-all rounded"
                  >
                    <div className="flex items-center space-x-3">
                      <InstagramIcon className="w-5 h-5 text-[#C9A84C]" />
                      <div>
                        <span className="font-medium text-[#F2EDE4] block">@hyzin.interior</span>
                        <span className="text-[10px] text-[#C9A84C]">14.8k Followers • Daily Stories</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C9A84C] group-hover:text-[#C9A84C] transition-colors" />
                  </a>

                  <a
                    href="https://ig.me/m/hyzin.interior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#141416]/60 border border-[#C9A84C]/30 hover:border-[#C9A84C] text-[#C9A84C] text-[10px] uppercase tracking-wider flex items-center justify-between group transition-all rounded font-medium"
                  >
                    <span>Send Instagram DM</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A84C] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold uppercase tracking-widest text-[11px] transition-colors shadow-lg shadow-[#C9A84C]/10"
                >
                  START YOUR PROJECT
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Micro Row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-[#C9A84C]/70 font-medium gap-2 text-center sm:text-left">
          <div>
            © 2026 HYZIN INTERIOR. Original Client Work.
          </div>
          <div className="flex items-center space-x-3">
            <span>KERALA • TAMIL NADU • KARNATAKA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
