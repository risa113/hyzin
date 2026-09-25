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
      {/* Top Regional Coordinates Bar */}
      <div className="w-full bg-[#0A0A0B] border-b border-[#C9A84C]/20 text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] py-2 px-4 sm:px-8 hidden md:flex items-center justify-between z-40 relative">
        <div className="flex items-center space-x-3 whitespace-nowrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
          <span className="font-medium text-[#F2EDE4]">Interior Design & Specialized Fabrication Studio</span>
          <span className="text-[#C9A84C]/30">•</span>
          <span className="text-[#C9A84C]/80">Kerala • Tamil Nadu • Karnataka</span>
        </div>
        <div className="flex items-center space-x-4 text-[10px] whitespace-nowrap font-medium">
          <a
            href="tel:916282549008"
            className="flex items-center space-x-1 text-[#F2EDE4] hover:text-[#C9A84C] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C9A84C]" />
            <span>+91 6282549008</span>
          </a>
          <span className="text-[#C9A84C]/30">|</span>
          <a
            href="tel:918848023041"
            className="flex items-center space-x-1 text-[#F2EDE4] hover:text-[#C9A84C] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C9A84C]" />
            <span>+91 8848023041</span>
          </a>
          <span className="text-[#C9A84C]/30">|</span>
          <a
            href="https://www.instagram.com/hyzin.interior/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A84C] transition-colors flex items-center space-x-1 text-[#F2EDE4]"
          >
            <span>@hyzin.interior</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#C9A84C]" />
          </a>
        </div>
      </div>

      {/* Main Floating Header - MUST BE overflow-visible to show 10 Services dropdown */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full overflow-visible transition-all duration-300 relative ${
          isScrolled
            ? 'bg-[#141416]/98 backdrop-blur-xl border-b border-[#C9A84C]/20 shadow-md shadow-black/20 py-3'
            : 'bg-[#141416]/95 backdrop-blur-md border-b border-[#C9A84C]/15 py-3.5'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo with Real Brand Emblem Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-3 focus:outline-none text-left shrink-0 whitespace-nowrap cursor-pointer"
          >
            <img
              src={BRAND_ASSETS.logoBadge}
              alt="HYZIN Logo Emblem"
              className="w-10 h-10 object-contain rounded border border-[#C9A84C]/40 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-bold tracking-[0.14em] text-[#F2EDE4] group-hover:text-[#C9A84C] transition-colors duration-300">
                HYZIN INTERIOR
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#C9A84C] -mt-0.5 font-medium">
                Interiors & Fabrication
              </span>
            </div>
          </button>

          {/* Desktop Navigation across 5 Dedicated Pages + Services Dropdown */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 text-[11px] xl:text-[12px] uppercase tracking-[0.15em] xl:tracking-[0.18em] font-semibold text-[#C9A84C] whitespace-nowrap">
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
                      className={`flex items-center space-x-1.5 py-1 transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                        isActive || servicesDropdownOpen
                          ? 'text-[#F2EDE4] font-bold border-b-2 border-[#C9A84C]'
                          : 'hover:text-[#F2EDE4]'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#C9A84C] transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown for 10 Client Services */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 w-[460px] sm:w-[500px] bg-[#0A0A0B] border border-[#C9A84C]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 rounded-2xl transition-all duration-300 transform z-50 ${
                        servicesDropdownOpen
                          ? 'opacity-100 translate-y-2 pointer-events-auto visible'
                          : 'opacity-0 translate-y-4 pointer-events-none invisible'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#C9A84C] mb-3 pb-2 border-b border-[#C9A84C]/20 flex items-center justify-between">
                        <span className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
                          <span>10 CERTIFIED CLIENT SERVICES</span>
                        </span>
                        <span className="text-[9px] text-[#C9A84C]">ZERO SHORTCUTS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {CLIENT_SERVICES_CONFIG.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => handleServiceClick(srv.id)}
                            className="p-2.5 text-left rounded-lg bg-[#141416]/60 hover:bg-[#1C1C20] border border-transparent hover:border-[#C9A84C]/40 text-[#F2EDE4] hover:text-[#C9A84C] transition-all flex items-center space-x-2.5 group/item cursor-pointer"
                          >
                            <span className="font-bold text-[10px] text-[#C9A84C] bg-[#0A0A0B] px-1.5 py-0.5 rounded border border-[#C9A84C]/30">
                              {srv.number}
                            </span>
                            <span className="font-semibold text-[11px] truncate group-hover/item:text-[#C9A84C] transition-colors">
                              {srv.title}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#C9A84C]/20 flex items-center justify-between text-xs text-[#C9A84C]">
                        <span>Original Kerala Assets & Works</span>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="px-3 py-1.5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] font-bold rounded text-[10px] uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                        >
                          View Full Specs Page →
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
                  className={`relative py-1 transition-colors duration-300 group whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#F2EDE4] font-bold' : 'hover:text-[#F2EDE4]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A84C] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-4 xl:px-5 py-2.5 text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-bold text-[#0A0A0B] bg-[#C9A84C] hover:bg-[#F2EDE4] transition-all duration-300 shadow-md flex items-center space-x-2 group whitespace-nowrap rounded-sm cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F2EDE4] hover:text-[#C9A84C] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-full bg-[#0A0A0B]/98 backdrop-blur-2xl border-b border-[#C9A84C]/20 transition-all duration-300 overflow-y-auto max-h-[80vh] shadow-2xl ${
            mobileMenuOpen ? 'py-4 opacity-100 block' : 'max-h-0 py-0 opacity-0 hidden'
          }`}
        >
          <div className="px-5 space-y-3">
            
            {/* Quick 2-Column Key Navigation Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-semibold">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;

                if (link.hasDropdown) {
                  return (
                    <button
                      key={link.id}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`py-2.5 px-3 rounded text-left flex items-center justify-between transition-all border ${
                        isActive || mobileServicesOpen
                          ? 'bg-[#1C1C20] text-[#C9A84C] border-[#C9A84C] font-bold'
                          : 'bg-[#141416] text-[#F2EDE4] border-[#C9A84C]/20 hover:border-[#C9A84C]'
                      }`}
                    >
                      <span className="truncate">{link.name}</span>
                      <span className="text-[10px]">{mobileServicesOpen ? '▲' : '▼'}</span>
                    </button>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`py-2.5 px-3 rounded text-left flex items-center justify-between transition-all border ${
                      isActive
                        ? 'bg-[#1C1C20] text-[#C9A84C] border-[#C9A84C] font-bold'
                        : 'bg-[#141416] text-[#F2EDE4] border-[#C9A84C]/20 hover:border-[#C9A84C]'
                    }`}
                  >
                    <span className="truncate">{link.name}</span>
                    <span className="text-[10px]">{isActive ? '●' : '→'}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile 10 Services Dropdown Accordion */}
            {mobileServicesOpen && (
              <div className="p-3 bg-[#141416] border border-[#C9A84C]/40 rounded-xl space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-[#C9A84C]/20">
                  <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
                    <span>ALL 10 CLIENT SERVICES</span>
                  </span>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-[10px] text-[#F2EDE4] hover:text-[#C9A84C] underline font-bold"
                  >
                    Open Page →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
                  {CLIENT_SERVICES_CONFIG.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleServiceClick(srv.id)}
                      className="p-2 text-left bg-[#0A0A0B] border border-[#C9A84C]/15 hover:border-[#C9A84C] rounded flex items-center space-x-2 text-xs text-[#F2EDE4] hover:text-[#C9A84C] transition-colors"
                    >
                      <span className="text-[10px] text-[#C9A84C] font-bold bg-[#141416] px-1 py-0.5 rounded">{srv.number}</span>
                      <span className="truncate text-[11px] font-medium">{srv.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Bar & Phone Links */}
            <div className="pt-2 border-t border-[#C9A84C]/20 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#C9A84C] text-[#0A0A0B] font-bold text-center tracking-[0.2em] text-xs hover:bg-[#F2EDE4] transition-colors flex items-center justify-center space-x-2 rounded-sm shadow-md"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-[#C9A84C]">
                <a
                  href="tel:916282549008"
                  className="py-1.5 px-2 bg-[#141416] border border-[#C9A84C]/20 rounded flex items-center justify-center space-x-1 text-[#F2EDE4] hover:text-[#C9A84C]"
                >
                  <Phone className="w-3 h-3 text-[#C9A84C]" />
                  <span>+91 6282549008</span>
                </a>
                <a
                  href="https://ig.me/m/hyzin.interior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] font-semibold rounded flex items-center justify-center space-x-1 hover:bg-[#E1306C]/20"
                >
                  <span>Instagram DM ↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}


