import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, CLIENT_SERVICES_CONFIG } from '../data/clientAssets';

export default function Navbar({ activePage, onNavigate, onOpenConsultation, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    { id: 'projects', name: 'Portfolio' },
    { id: 'services', name: '10 Services', hasDropdown: true },
    { id: '3d-house', name: '3D House' },
    { id: 'photo-vault', name: '72 Photos' },
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
      {/* ─── TOP BAR (Desktop Only) ─────────────────────────────────────────── */}
      <div className="w-full bg-[#341910] border-b border-[#CFB291]/15 hidden md:flex items-center justify-between py-2 px-6 lg:px-10 z-50 relative">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CFB291] animate-pulse flex-shrink-0" />
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#FCFCF6]">
            Interior Design &amp; Specialized Fabrication Studio
          </span>
          <span className="text-[#CFB291]/25 text-[10px] select-none">•</span>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#CFB291]/80">
            Kerala&nbsp;•&nbsp;Tamil Nadu&nbsp;•&nbsp;Karnataka
          </span>
        </div>

        <div className="flex items-center gap-5 whitespace-nowrap">
          <a
            href="tel:916282549008"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-[#FCFCF6] hover:text-[#CFB291] transition-colors duration-200"
          >
            <Phone className="w-2.5 h-2.5 text-[#CFB291]" />
            <span>+91 6282 549008</span>
          </a>
          <span className="text-[#CFB291]/20 text-[10px] select-none">|</span>
          <a
            href="tel:918848023041"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-[#FCFCF6] hover:text-[#CFB291] transition-colors duration-200"
          >
            <Phone className="w-2.5 h-2.5 text-[#CFB291]" />
            <span>+91 8848 023041</span>
          </a>
          <span className="text-[#CFB291]/20 text-[10px] select-none">|</span>
          <a
            href="https://www.instagram.com/hyzin.interior/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] tracking-[0.18em] uppercase text-[#FCFCF6] hover:text-[#E1306C] transition-colors duration-200"
          >
            <span>@hyzin.interior</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#CFB291]" />
          </a>
        </div>
      </div>

      {/* ─── MAIN HEADER (100% Solid & Visible on Mobile & Desktop) ────────── */}
      <header
        className={`sticky top-0 z-50 w-full border-b border-[#CFB291]/25 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#341910]/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] py-3 sm:py-3.5'
            : 'bg-[#341910]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">

          {/* ── LOGO ── */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none text-left shrink-0 cursor-pointer select-none"
          >
            {/* Emblem */}
            <img
              src={BRAND_ASSETS.logoBadge}
              alt="HYZIN Logo Emblem"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain border border-[#CFB291]/40 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
            />

            {/* Text lockup */}
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-2xl font-black tracking-[0.16em] sm:tracking-[0.2em] text-[#FCFCF6] uppercase font-sans">
                  HYZIN
                </span>
                <span className="text-[11px] sm:text-sm font-bold tracking-[0.18em] text-[#CFB291] uppercase">
                  INTERIOR
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#CFB291]/75 font-medium mt-0.5">
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
                          ? 'text-[#CFB291]'
                          : 'text-[#CFB291] hover:text-[#FCFCF6]'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#CFB291]/70 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {(isActive || servicesDropdownOpen) && (
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#CFB291]" />
                      )}
                    </button>

                    {/* ── SERVICES MEGA DROPDOWN ── */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 w-[480px] bg-[#341910] border border-[#CFB291]/30 shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-5 transition-all duration-300 transform z-50 ${
                        servicesDropdownOpen
                          ? 'opacity-100 translate-y-2 pointer-events-auto visible'
                          : 'opacity-0 translate-y-5 pointer-events-none invisible'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#CFB291]/20">
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-bold text-[#CFB291]">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CFB291] animate-pulse" />
                          10 CERTIFIED CLIENT SERVICES
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {CLIENT_SERVICES_CONFIG.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => handleServiceClick(srv.id)}
                            className="p-2.5 text-left bg-[#45241A] hover:bg-[#5A3122] border border-transparent hover:border-[#CFB291]/35 text-[#FCFCF6] hover:text-[#CFB291] transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
                          >
                            <span className="flex-shrink-0 text-[10px] font-bold text-[#CFB291] bg-[#341910] px-1.5 py-0.5 border border-[#CFB291]/25 font-mono">
                              {srv.number}
                            </span>
                            <span className="text-[11px] font-semibold truncate">
                              {srv.title}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#CFB291]/20 flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.16em] uppercase text-[#F5F5DC]">
                          Original Client Work
                        </span>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="px-4 py-1.5 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors shadow-md cursor-pointer"
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
                    isActive ? 'text-[#CFB291]' : 'text-[#CFB291] hover:text-[#FCFCF6]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#CFB291] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ── DESKTOP CTA BUTTON ── */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-300 shadow-md group whitespace-nowrap cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* ── MOBILE MENU TOGGLE BUTTON (Clear, Styled, High-Contrast) ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm bg-[#45241A] border border-[#CFB291]/35 text-[#FCFCF6] hover:text-[#CFB291] hover:border-[#CFB291] focus:outline-none transition-all cursor-pointer flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#CFB291]" />
            ) : (
              <Menu className="w-5 h-5 text-[#FCFCF6]" />
            )}
          </button>

        </div>

        {/* ─── MOBILE NAVIGATION DRAWER (Attached directly under header) ──── */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 w-full bg-[#341910] border-b border-[#CFB291]/30 shadow-2xl z-50 animate-fadeIn overflow-y-auto max-h-[calc(100vh-64px)]">
            <div className="p-4 sm:p-6 space-y-4">

              {/* 2-Column Quick Nav Links */}
              <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.14em] font-semibold">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;

                  if (link.hasDropdown) {
                    return (
                      <button
                        key={link.id}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`py-3 px-3.5 text-left flex items-center justify-between transition-all border ${
                          isActive || mobileServicesOpen
                            ? 'bg-[#5A3122] text-[#CFB291] border-[#CFB291] font-bold shadow-md'
                            : 'bg-[#45241A] text-[#FCFCF6] border-[#CFB291]/20 hover:border-[#CFB291]/50'
                        }`}
                      >
                        <span className="truncate">{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#CFB291] flex-shrink-0 transition-transform duration-300 ${
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
                      className={`py-3 px-3.5 text-left flex items-center justify-between transition-all border ${
                        isActive
                          ? 'bg-[#5A3122] text-[#CFB291] border-[#CFB291] font-bold shadow-md'
                          : 'bg-[#45241A] text-[#FCFCF6] border-[#CFB291]/20 hover:border-[#CFB291]/50'
                      }`}
                    >
                      <span className="truncate">{link.name}</span>
                      <span className="text-[10px] text-[#CFB291]">{isActive ? '●' : '→'}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile 10 Services Accordion */}
              {mobileServicesOpen && (
                <div className="p-3.5 bg-[#45241A] border border-[#CFB291]/35 space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-[#CFB291]/20">
                    <span className="text-[10px] font-bold text-[#CFB291] uppercase tracking-[0.2em] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#CFB291]" />
                      <span>10 Client Disciplines</span>
                    </span>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-[10px] text-[#FCFCF6] hover:text-[#CFB291] font-bold uppercase tracking-wider underline"
                    >
                      Open Specs Page →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
                    {CLIENT_SERVICES_CONFIG.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => handleServiceClick(srv.id)}
                        className="p-2 text-left bg-[#341910] border border-[#CFB291]/15 hover:border-[#CFB291]/50 flex items-center gap-2 text-xs text-[#FCFCF6] hover:text-[#CFB291] transition-colors"
                      >
                        <span className="text-[10px] text-[#CFB291] font-bold px-1.5 py-0.5 bg-[#45241A] border border-[#CFB291]/25 font-mono">
                          {srv.number}
                        </span>
                        <span className="truncate font-medium">{srv.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile CTA: Start Your Project */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#CFB291] hover:bg-[#FCFCF6] text-[#341910] font-bold text-center tracking-[0.2em] text-xs uppercase transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Direct Studio Phone & Instagram Links */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium pt-1">
                <a
                  href="tel:916282549008"
                  className="py-2.5 px-2 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center gap-1.5 text-[#FCFCF6] hover:text-[#CFB291]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CFB291]" />
                  <span>Line 1</span>
                </a>
                <a
                  href="tel:918848023041"
                  className="py-2.5 px-2 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center gap-1.5 text-[#FCFCF6] hover:text-[#CFB291]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CFB291]" />
                  <span>Line 2</span>
                </a>
              </div>

              <div className="text-center pt-2 border-t border-[#CFB291]/15">
                <span className="text-[10px] text-[#CFB291]/70 uppercase tracking-[0.2em]">
                  Kerala • Tamil Nadu • Karnataka
                </span>
              </div>

            </div>
          </div>
        )}

      </header>

      {/* Dimmed backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
        />
      )}
    </>
  );
}
