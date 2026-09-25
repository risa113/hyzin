import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from 'lucide-react';
import { BRAND_ASSETS, CLIENT_SERVICES_CONFIG } from '../data/clientAssets';

export default function Navbar({ activePage, onNavigate, onOpenConsultation, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown-container')) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: '3d-house', name: '3D House' },
    { id: 'photo-vault', name: '72 Photos' },
    { id: 'services', name: '10 Services', hasDropdown: true },
    { id: 'projects', name: 'Portfolio' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);
    onNavigate('services');
    if (onSelectService) {
      onSelectService(serviceId);
    }
  };

  return (
    <>
      {/* ─── TOP BAR — Desktop Only ─────────────────────────────────────────── */}
      <div className="w-full bg-[#0A0A0B] border-b border-[#C9A84C]/15 hidden md:flex items-center justify-between py-2 px-6 lg:px-10 z-50 relative">
        {/* Left: Studio Identity */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse flex-shrink-0" />
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#F2EDE4]">
            Interior Design &amp; Specialized Fabrication Studio
          </span>
          <span className="text-[#C9A84C]/25 text-[10px] select-none">•</span>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]/80">
            Kerala&nbsp;•&nbsp;Tamil Nadu&nbsp;•&nbsp;Karnataka
          </span>
        </div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-5 whitespace-nowrap">
          <a
            href="tel:916282549008"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-[#F2EDE4] hover:text-[#C9A84C] transition-colors duration-200 group"
          >
            <Phone className="w-2.5 h-2.5 text-[#C9A84C] group-hover:scale-110 transition-transform" />
            <span>+91 6282 549008</span>
          </a>
          <span className="text-[#C9A84C]/20 text-[10px] select-none">|</span>
          <a
            href="tel:918848023041"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-[#F2EDE4] hover:text-[#C9A84C] transition-colors duration-200 group"
          >
            <Phone className="w-2.5 h-2.5 text-[#C9A84C] group-hover:scale-110 transition-transform" />
            <span>+91 8848 023041</span>
          </a>
          <span className="text-[#C9A84C]/20 text-[10px] select-none">|</span>
          <a
            href="https://www.instagram.com/hyzin.interior/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] tracking-[0.18em] uppercase text-[#F2EDE4] hover:text-[#E1306C] transition-colors duration-200 group"
          >
            <span>@hyzin.interior</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#C9A84C] group-hover:text-[#E1306C] transition-colors" />
          </a>
        </div>
      </div>

      {/* ─── MAIN HEADER ────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full overflow-visible transition-all duration-500 border-b border-[#C9A84C]/20 ${
          isScrolled
            ? 'bg-[#0A0A0B]/98 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] py-4'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-6">

          {/* ── LOGO ── */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3.5 focus:outline-none text-left shrink-0 whitespace-nowrap cursor-pointer"
          >
            {/* Badge emblem */}
            <div className="relative">
              <img
                src={BRAND_ASSETS.logoBadge}
                alt="HYZIN Logo Emblem"
                className="w-11 h-11 object-contain border border-[#C9A84C]/35 group-hover:border-[#C9A84C]/70 shadow-[0_0_20px_rgba(201,168,76,0.08)] group-hover:shadow-[0_0_28px_rgba(201,168,76,0.2)] group-hover:scale-105 transition-all duration-400"
              />
            </div>

            {/* Text lockup */}
            <div className="flex flex-col leading-none gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F2EDE4] group-hover:text-[#F2EDE4] transition-colors duration-300 uppercase">
                  HYZIN
                </span>
                <span className="text-base sm:text-lg font-semibold tracking-[0.18em] text-[#C9A84C] uppercase">
                  INTERIOR
                </span>
              </div>
              <span className="text-[9px] tracking-[0.32em] uppercase text-[#C9A84C]/70 font-medium">
                Interiors &amp; Fabrication
              </span>
            </div>
          </button>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative services-dropdown-container py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      className={`relative flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 py-1 cursor-pointer ${
                        isActive || servicesDropdownOpen
                          ? 'text-[#C9A84C]'
                          : 'text-[#C9A84C] hover:text-[#F2EDE4]'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#C9A84C]/70 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {/* Active underline */}
                      {(isActive || servicesDropdownOpen) && (
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9A84C]" />
                      )}
                    </button>

                    {/* ── SERVICES MEGA DROPDOWN ── */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 w-[480px] bg-[#0A0A0B] border border-[#C9A84C]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-5 transition-all duration-300 transform z-50 ${
                        servicesDropdownOpen
                          ? 'opacity-100 translate-y-2 pointer-events-auto visible'
                          : 'opacity-0 translate-y-5 pointer-events-none invisible'
                      }`}
                    >
                      {/* Dropdown header label */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C9A84C]/20">
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-bold text-[#C9A84C]">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                          10 CERTIFIED CLIENT SERVICES | ZERO SHORTCUTS
                        </span>
                      </div>

                      {/* Service grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {CLIENT_SERVICES_CONFIG.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => handleServiceClick(srv.id)}
                            className="p-2.5 text-left bg-[#141416] hover:bg-[#1C1C20] border border-transparent hover:border-[#C9A84C]/35 text-[#F2EDE4] hover:text-[#C9A84C] transition-all duration-200 flex items-center gap-2.5 group/item cursor-pointer"
                          >
                            <span className="flex-shrink-0 text-[10px] font-bold text-[#C9A84C] bg-[#0A0A0B] px-1.5 py-0.5 border border-[#C9A84C]/25 font-mono">
                              {srv.number}
                            </span>
                            <span className="text-[11px] font-semibold tracking-[0.04em] truncate group-hover/item:text-[#C9A84C] transition-colors">
                              {srv.title}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Dropdown footer */}
                      <div className="mt-4 pt-3 border-t border-[#C9A84C]/20 flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-[#8B7355]">
                          Original Kerala Assets &amp; Works
                        </span>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="px-4 py-1.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 shadow-[0_4px_16px_rgba(201,168,76,0.25)] cursor-pointer"
                        >
                          View Full Specs →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-[11px] uppercase tracking-[0.18em] font-semibold py-1 transition-colors duration-300 group whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#C9A84C]' : 'text-[#C9A84C] hover:text-[#F2EDE4]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#C9A84C] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ── CTA BUTTON ── */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.2)] hover:shadow-[0_4px_32px_rgba(201,168,76,0.35)] group whitespace-nowrap cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* ── MOBILE MENU TOGGLE ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F2EDE4] hover:text-[#C9A84C] focus:outline-none cursor-pointer transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ─── MOBILE NAVIGATION DRAWER ─────────────────────────────────────── */}
        <div
          className={`lg:hidden fixed inset-x-0 top-full bg-[#0A0A0B]/98 backdrop-blur-2xl border-b border-[#C9A84C]/20 transition-all duration-300 overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.9)] ${
            mobileMenuOpen ? 'max-h-[82vh] py-5 opacity-100 pointer-events-auto' : 'max-h-0 py-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-5 space-y-3">

            {/* Nav grid */}
            <div className="grid grid-cols-2 gap-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;

                if (link.hasDropdown) {
                  return (
                    <button
                      key={link.id}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`py-2.5 px-3 text-left flex items-center justify-between transition-all border ${
                        isActive || mobileServicesOpen
                          ? 'bg-[#141416] text-[#C9A84C] border-[#C9A84C]/60 font-bold'
                          : 'bg-[#141416] text-[#F2EDE4] border-[#C9A84C]/15 hover:border-[#C9A84C]/50'
                      }`}
                    >
                      <span className="truncate">{link.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`py-2.5 px-3 text-left flex items-center justify-between transition-all border ${
                      isActive
                        ? 'bg-[#141416] text-[#C9A84C] border-[#C9A84C]/60 font-bold'
                        : 'bg-[#141416] text-[#F2EDE4] border-[#C9A84C]/15 hover:border-[#C9A84C]/50'
                    }`}
                  >
                    <span className="truncate">{link.name}</span>
                    <span className="text-[10px] text-[#C9A84C]">{isActive ? '●' : '→'}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile services accordion */}
            {mobileServicesOpen && (
              <div className="bg-[#0A0A0B] border border-[#C9A84C]/30 p-4 space-y-2">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#C9A84C]/20">
                  <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.24em] flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                    All 10 Client Services
                  </span>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-[10px] text-[#F2EDE4] hover:text-[#C9A84C] font-bold uppercase tracking-wider transition-colors"
                  >
                    Open Page →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-56 overflow-y-auto pr-1">
                  {CLIENT_SERVICES_CONFIG.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleServiceClick(srv.id)}
                      className="p-2 text-left bg-[#141416] border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 flex items-center gap-2 text-[11px] text-[#F2EDE4] hover:text-[#C9A84C] transition-colors cursor-pointer"
                    >
                      <span className="flex-shrink-0 text-[10px] text-[#C9A84C] font-bold bg-[#0A0A0B] px-1.5 py-0.5 border border-[#C9A84C]/25 font-mono">
                        {srv.number}
                      </span>
                      <span className="truncate font-medium">{srv.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile CTA + contact row */}
            <div className="pt-2 border-t border-[#C9A84C]/15 space-y-2">
              {/* Full-width gold CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold text-center tracking-[0.25em] text-[11px] uppercase transition-colors duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(201,168,76,0.3)] cursor-pointer"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Phone + Instagram */}
              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-medium">
                <a
                  href="tel:916282549008"
                  className="py-2 px-2 bg-[#141416] border border-[#C9A84C]/15 flex items-center justify-center gap-1.5 text-[#F2EDE4] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all"
                >
                  <Phone className="w-3 h-3 text-[#C9A84C]" />
                  <span className="tracking-wider">+91 6282 549008</span>
                </a>
                <a
                  href="https://ig.me/m/hyzin.interior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 bg-[#E1306C]/10 border border-[#E1306C]/25 text-[#E1306C] font-semibold flex items-center justify-center gap-1 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 transition-all tracking-wider"
                >
                  <span>Instagram DM</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
