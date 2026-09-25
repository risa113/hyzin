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
    <footer className="w-full">

      {/* ─────────────────────────────────────────────────────────────────────
          PRE-FOOTER CTA BAND — Full-bleed gold
      ───────────────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#C9A84C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">

            {/* Left — Headline */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0B] leading-tight">
                READY TO BEGIN YOUR PROJECT?
              </h2>
              <p className="mt-2 text-[#0A0A0B]/70 text-sm font-medium tracking-wide">
                Accepting commissions in Kerala, Tamil Nadu &amp; Karnataka.
              </p>
            </div>

            {/* Right — CTAs */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#0A0A0B] text-[#C9A84C] text-[11px] font-bold uppercase tracking-widest hover:bg-[#141416] transition-colors"
              >
                START YOUR PROJECT
              </button>
              <a
                href="https://wa.me/916282549008"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#0A0A0B] text-[#0A0A0B] text-[11px] font-bold uppercase tracking-widest hover:bg-[#0A0A0B]/10 transition-colors"
              >
                WHATSAPP US
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          MAIN FOOTER — Absolute Noir background
      ───────────────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#0A0A0B]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* ── MOBILE LAYOUT (hidden sm:hidden → block on mobile) ── */}
          <div className="block sm:hidden pt-10 pb-6 space-y-7 border-b border-[#C9A84C]/20">

            {/* Brand row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <img
                  src={BRAND_ASSETS.logoBadge}
                  alt="HYZIN Logo"
                  className="w-8 h-8 object-cover border border-[#C9A84C]/40"
                />
                <span className="text-lg font-bold tracking-wider text-[#F2EDE4]">
                  HYZIN INTERIOR
                </span>
              </div>
              <a
                href="https://www.instagram.com/hyzin.interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#141416] border border-[#C9A84C]/20 text-[#C9A84C] flex items-center space-x-1.5 text-[10px] font-medium"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@hyzin</span>
              </a>
            </div>

            <p className="text-[11px] text-[#C9A84C]/80 font-normal leading-snug tracking-wide">
              Interior Design &amp; Specialized Fabrication • Kerala • Tamil Nadu • Karnataka
            </p>

            {/* Quick key links grid */}
            <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold tracking-wider">
              <button
                onClick={() => handleNav('3d-house')}
                className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#C9A84C] text-left"
              >
                3D House Model →
              </button>
              <button
                onClick={() => handleNav('photo-vault')}
                className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left"
              >
                72 Photos Vault →
              </button>
              <button
                onClick={() => handleNav('services')}
                className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left"
              >
                10 Services →
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="p-2.5 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-left"
              >
                Contact Brief →
              </button>
            </div>

            {/* CTA + contact */}
            <div className="space-y-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-[#C9A84C] text-[#0A0A0B] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-1"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-center">
                <a href="tel:916282549008" className="p-2 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3 text-[#C9A84C]" />
                  <span>Line 1</span>
                </a>
                <a href="tel:918848023041" className="p-2 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3 text-[#C9A84C]" />
                  <span>Line 2</span>
                </a>
              </div>

              <div className="space-y-1.5 pt-0.5">
                <a href="mailto:Muhammedashad395@gmail.com" className="p-2 bg-[#141416] border border-[#C9A84C]/20 text-[#F2EDE4] text-[10px] font-medium flex items-center justify-center gap-1.5 break-all">
                  <Mail className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
                <a href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#141416] border border-[#C9A84C]/20 text-[#C9A84C] text-[10px] font-medium flex items-center justify-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                  <span>Studio Workshop on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (hidden on mobile, shown sm+) ── */}
          <div className="hidden sm:block pt-16 pb-8">

            {/* ── 4-COLUMN TOP GRID ── */}
            <div className="grid grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#C9A84C]/20">

              {/* COL 1 — Brand (4/12) */}
              <div className="col-span-12 md:col-span-5 lg:col-span-4">

                {/* Logo badge + wordmark */}
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={BRAND_ASSETS.logoBadge}
                    alt="HYZIN Logo"
                    className="w-10 h-10 object-cover border border-[#C9A84C]/40"
                  />
                  <h3 className="text-2xl font-bold tracking-[0.14em] text-[#F2EDE4] leading-none">
                    HYZIN INTERIOR
                  </h3>
                </div>

                {/* Sub-label in tiny gold caps */}
                <p className="text-[10px] uppercase font-semibold tracking-[0.28em] text-[#C9A84C] mb-5">
                  Interior Design &amp; Specialized Metal Fabrication
                </p>

                {/* Philosophy text */}
                <p className="text-[13px] text-[#F2EDE4]/60 font-normal leading-relaxed max-w-sm">
                  Creating quiet grandeur and sculpted spaces across Kerala, Tamil Nadu,
                  and Karnataka. From raw site framing to turnkey white-glove handover —
                  every detail resolved before the first cut.
                </p>

                {/* Italic quote with gold left border */}
                <div className="mt-6 pl-4 border-l-2 border-[#C9A84C]/50">
                  <p className="italic text-[13px] font-medium text-[#F2EDE4]/90 leading-snug">
                    "Good interiors don't simply look beautiful.<br />
                    They make everyday life better."
                  </p>
                </div>
              </div>

              {/* COL 2 — 10 Core Services (3/12) */}
              <div className="col-span-6 md:col-span-3 lg:col-span-3">
                <span className="text-[10px] uppercase font-semibold tracking-[0.28em] text-[#C9A84C] block mb-5">
                  10 CORE SERVICES
                </span>
                <ul className="space-y-2.5">
                  {CLIENT_SERVICES_CONFIG.map((srv) => (
                    <li key={srv.id}>
                      <button
                        onClick={() => handleNav('services')}
                        className="group flex items-center space-x-2.5 text-left w-full"
                      >
                        <span className="w-1 h-1 bg-[#C9A84C] flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-[12px] text-[#F2EDE4]/75 group-hover:text-[#C9A84C] transition-colors leading-snug">
                          {srv.title}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COL 3 — Navigation + Studio Desk (2/12) */}
              <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <span className="text-[10px] uppercase font-semibold tracking-[0.28em] text-[#C9A84C] block mb-5">
                  EXPLORE
                </span>
                <ul className="space-y-3">
                  {[
                    { label: 'Home',           pageId: 'home'        },
                    { label: '3D House Model', pageId: '3d-house'    },
                    { label: '72 Photos',      pageId: 'photo-vault' },
                    { label: 'Portfolio',      pageId: 'projects'    },
                    { label: '10 Services',    pageId: 'services'    },
                    { label: 'About',          pageId: 'about'       },
                    { label: 'Contact',        pageId: 'contact'     },
                  ].map(({ label, pageId }) => (
                    <li key={pageId}>
                      <button
                        onClick={() => handleNav(pageId)}
                        className="text-[12px] uppercase tracking-wider font-medium text-[#F2EDE4]/75 hover:text-[#C9A84C] transition-colors text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Studio Desk contact block */}
                <div className="mt-8">
                  <span className="text-[10px] uppercase font-semibold tracking-[0.28em] text-[#C9A84C] block mb-3">
                    DIRECT STUDIO DESK
                  </span>
                  <div className="space-y-2">
                    <a
                      href="tel:916282549008"
                      className="flex items-center space-x-2 text-[11px] text-[#F2EDE4]/75 hover:text-[#C9A84C] transition-colors font-medium"
                    >
                      <Phone className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                      <span>+91 6282 549 008</span>
                    </a>
                    <a
                      href="tel:918848023041"
                      className="flex items-center space-x-2 text-[11px] text-[#F2EDE4]/75 hover:text-[#C9A84C] transition-colors font-medium"
                    >
                      <Phone className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                      <span>+91 8848 023 041</span>
                    </a>
                    <a
                      href="mailto:Muhammedashad395@gmail.com"
                      className="flex items-start space-x-2 text-[11px] text-[#F2EDE4]/75 hover:text-[#C9A84C] transition-colors font-medium break-all"
                    >
                      <Mail className="w-3 h-3 text-[#C9A84C] flex-shrink-0 mt-px" />
                      <span>Muhammedashad395@gmail.com</span>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[11px] text-[#C9A84C] hover:underline transition-colors font-medium"
                    >
                      <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                      <span>Studio &amp; Workshop →</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* COL 4 — Social + CTA (3/12) */}
              <div className="col-span-12 md:col-span-12 lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.28em] text-[#C9A84C] block mb-5">
                    VISUAL DISPATCH
                  </span>

                  <div className="space-y-2">
                    {/* Instagram profile card */}
                    <a
                      href="https://www.instagram.com/hyzin.interior/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 bg-[#141416] border border-[#C9A84C]/25 hover:border-[#C9A84C]/60 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <InstagramIcon className="w-5 h-5 text-[#C9A84C]" />
                        <div>
                          <span className="text-[13px] font-semibold text-[#F2EDE4] block leading-tight">
                            @hyzin.interior
                          </span>
                          <span className="text-[10px] text-[#C9A84C]/70 tracking-wide">
                            14.8k Followers • Daily Stories
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Instagram DM link */}
                    <a
                      href="https://ig.me/m/hyzin.interior"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-4 py-3 bg-[#141416]/60 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C9A84C]">
                        Send Instagram DM
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Primary CTA button */}
                <div className="mt-8">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold uppercase tracking-widest text-[11px] transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#C9A84C]/10"
                  >
                    <span>START YOUR PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>{/* /4-col grid */}

            {/* ── BOTTOM ROW ── */}
            <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[10px] font-medium tracking-[0.12em] text-[#C9A84C]/70">
                © 2026 HYZIN INTERIOR. Original Client Work.
              </p>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#C9A84C]/70">
                KERALA&nbsp;•&nbsp;TAMIL NADU&nbsp;•&nbsp;KARNATAKA
              </p>
            </div>

          </div>{/* /desktop block */}

          {/* MOBILE bottom row */}
          <div className="block sm:hidden pt-5 pb-6 flex flex-col items-center gap-2 text-center">
            <p className="text-[10px] font-medium tracking-[0.12em] text-[#C9A84C]/70">
              © 2026 HYZIN INTERIOR. Original Client Work.
            </p>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#C9A84C]/70">
              KERALA • TAMIL NADU • KARNATAKA
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
