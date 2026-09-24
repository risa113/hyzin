import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from 'lucide-react';
import { BRAND_ASSETS, CLIENT_SERVICES_CONFIG } from '../data/clientAssets';

export default function Navbar({ activePage, onNavigate, onOpenConsultation, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate('services');
    if (onSelectService) {
      onSelectService(serviceId);
    }
  };

  return (
    <>
      {/* Top Regional Coordinates Bar */}
      <div className="w-full bg-[#111215] border-b border-white/[0.08] text-[10px] uppercase tracking-[0.2em] text-[#C4BCB1] py-2 px-4 sm:px-8 hidden md:flex items-center justify-between z-40 relative">
        <div className="flex items-center space-x-3 whitespace-nowrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4B584] animate-pulse"></span>
          <span className="font-medium text-[#FAF8F5]">Interior Design & Specialized Fabrication Studio</span>
          <span className="text-white/20">•</span>
          <span className="text-[#C4BCB1]/80">Kerala • Tamil Nadu • Karnataka</span>
        </div>
        <div className="flex items-center space-x-4 text-[10px] whitespace-nowrap font-medium">
          <a
            href="tel:916282549008"
            className="flex items-center space-x-1 text-[#FAF8F5] hover:text-[#D4B584] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D4B584]" />
            <span>+91 6282549008</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="tel:918848023041"
            className="flex items-center space-x-1 text-[#FAF8F5] hover:text-[#D4B584] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D4B584]" />
            <span>+91 8848023041</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://www.instagram.com/hyzin.interior/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4B584] transition-colors flex items-center space-x-1 text-[#FAF8F5]"
          >
            <span>@hyzin.interior</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#D4B584]" />
          </a>
        </div>
      </div>

      {/* Main Floating Header */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-black/[0.08] shadow-md shadow-black/5 py-3'
            : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-black/[0.04] py-3.5'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo with Real Brand Emblem Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-3 focus:outline-none text-left shrink-0 whitespace-nowrap"
          >
            <img
              src={BRAND_ASSETS.logoBadge}
              alt="HYZIN Logo Emblem"
              className="w-10 h-10 object-contain rounded border border-[#C5A065]/30 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-bold tracking-[0.14em] text-[#1E1D1B] group-hover:text-[#9E8255] transition-colors duration-300">
                HYZIN INTERIOR
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#8C8275] -mt-0.5 font-medium">
                Interiors & Fabrication
              </span>
            </div>
          </button>

          {/* Desktop Navigation across 5 Dedicated Pages + Services Dropdown */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 text-[11px] xl:text-[12px] uppercase tracking-[0.15em] xl:tracking-[0.18em] font-semibold text-[#524D46] whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative group py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center space-x-1 py-1 transition-colors duration-300 whitespace-nowrap ${
                        isActive ? 'text-[#1E1D1B] font-bold border-b-2 border-[#9E8255]' : 'hover:text-[#1E1D1B]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#9E8255] transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Mega Dropdown for 10 Client Services */}
                    <div
                      className={`absolute top-full -left-20 w-[480px] bg-white border border-black/10 shadow-2xl p-6 transition-all duration-300 transform ${
                        servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-semibold tracking-wider text-[#9E8255] mb-3 pb-2 border-b border-black/[0.06] flex items-center justify-between">
                        <span>10 CERTIFIED CLIENT SERVICES</span>
                        <span>ZERO SHORTCUTS</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {CLIENT_SERVICES_CONFIG.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => handleServiceClick(srv.id)}
                            className="p-2.5 text-left rounded hover:bg-[#FAF8F5] hover:text-[#9E8255] transition-colors flex items-center space-x-2.5 group/item"
                          >
                            <span className="font-semibold text-[10px] text-[#9E8255]">{srv.number}</span>
                            <span className="font-medium text-[#1E1D1B] group-hover/item:text-[#9E8255] transition-colors">{srv.title}</span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-[#8C8275]">
                        <span>Original Kerala Assets Showcase</span>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="text-[#9E8255] hover:underline font-semibold"
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
                  className={`relative py-1 transition-colors duration-300 group whitespace-nowrap ${
                    isActive ? 'text-[#1E1D1B] font-bold' : 'hover:text-[#1E1D1B]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#9E8255] transition-all duration-300 ${
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
              className="px-4 xl:px-5 py-2.5 text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-semibold text-white bg-[#1E1D1B] hover:bg-[#9E8255] transition-all duration-300 shadow-sm flex items-center space-x-2 group whitespace-nowrap rounded-sm"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E1D1B] hover:text-[#9E8255] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer (Short & Compact) */}
        <div
          className={`lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-black/[0.1] transition-all duration-300 overflow-hidden shadow-2xl ${
            mobileMenuOpen ? 'py-4 opacity-100 max-h-[420px] block' : 'max-h-0 py-0 opacity-0 hidden'
          }`}
        >
          <div className="px-5 space-y-3">
            
            {/* Quick 2-Column Key Navigation Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-semibold">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`py-2.5 px-3 rounded text-left flex items-center justify-between transition-all border ${
                      isActive
                        ? 'bg-[#1E1D1B] text-[#D4B584] border-[#1E1D1B] font-bold'
                        : 'bg-white/80 text-[#1E1D1B] border-black/10 hover:border-[#9E8255]'
                    }`}
                  >
                    <span className="truncate">{link.name}</span>
                    <span className="text-[10px]">{isActive ? '●' : '→'}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Action Bar & Phone Links */}
            <div className="pt-2 border-t border-black/[0.08] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#1E1D1B] text-white font-semibold text-center tracking-[0.2em] text-xs hover:bg-[#9E8255] transition-colors flex items-center justify-center space-x-2 rounded-sm"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-[#524D46]">
                <a
                  href="tel:916282549008"
                  className="py-1.5 px-2 bg-white/60 border border-black/5 rounded flex items-center justify-center space-x-1 hover:text-[#9E8255]"
                >
                  <Phone className="w-3 h-3 text-[#9E8255]" />
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
