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
    { id: 'about', name: 'About' },
    { id: 'services', name: '10 Disciplines', hasDropdown: true },
    { id: 'projects', name: 'Portfolio (50+)' },
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
      <div className="w-full bg-[#111215] border-b border-white/[0.08] text-[10px] uppercase tracking-[0.25em] text-[#C4BCB1] py-2 px-4 sm:px-8 hidden md:flex items-center justify-between z-40 relative">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4B584] animate-pulse"></span>
          <span className="font-mono text-[#FAF8F5]">Interior Architecture & Specialized Fabrication</span>
          <span className="text-white/20">•</span>
          <span className="text-[#C4BCB1]/80">Kerala • Tamil Nadu • Karnataka</span>
        </div>
        <div className="flex items-center space-x-6 text-[10px]">
          <a
            href="tel:916282549008"
            className="flex items-center space-x-1.5 text-[#FAF8F5] hover:text-[#D4B584] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D4B584]" />
            <span className="font-mono">+91 6282549008</span>
          </a>
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-black/[0.08] shadow-md shadow-black/5 py-3'
            : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-black/[0.04] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Real Brand Emblem Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-3 focus:outline-none text-left"
          >
            <img
              src={BRAND_ASSETS.logoBadge}
              alt="HYZIN Logo Emblem"
              className="w-10 h-10 object-contain rounded border border-[#C5A065]/30 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.18em] text-[#1E1D1B] group-hover:text-[#9E8255] transition-colors duration-300">
                HYZIN INTERIOR
              </span>
              <span className="text-[9px] uppercase tracking-[0.32em] text-[#8C8275] -mt-0.5 font-mono">
                Interiors & Fabrication
              </span>
            </div>
          </button>

          {/* Desktop Navigation across 5 Dedicated Pages + Services Dropdown */}
          <nav className="hidden lg:flex items-center space-x-7 text-[12px] uppercase tracking-[0.2em] font-medium text-[#524D46]">
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
                      className={`flex items-center space-x-1.5 py-1 transition-colors duration-300 ${
                        isActive ? 'text-[#1E1D1B] font-semibold' : 'hover:text-[#1E1D1B]'
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
                      <div className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] mb-3 pb-2 border-b border-black/[0.06] flex items-center justify-between">
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
                            <span className="font-mono text-[10px] text-[#9E8255]">{srv.number}</span>
                            <span className="font-medium text-[#1E1D1B] group-hover/item:text-[#9E8255] transition-colors">{srv.title}</span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-[#8C8275] font-mono">
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
                  className={`relative py-1 transition-colors duration-300 group ${
                    isActive ? 'text-[#1E1D1B] font-semibold' : 'hover:text-[#1E1D1B]'
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
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium text-white bg-[#1E1D1B] hover:bg-[#9E8255] transition-all duration-300 shadow-sm flex items-center space-x-2 group"
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

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-black/[0.1] transition-all duration-300 overflow-y-auto max-h-[85vh] ${
            mobileMenuOpen ? 'py-6 opacity-100 shadow-2xl block' : 'max-h-0 py-0 opacity-0 hidden'
          }`}
        >
          <div className="px-6 flex flex-col space-y-4 text-sm uppercase tracking-[0.22em]">
            <div className="text-[10px] text-[#8C8275] pb-2 border-b border-black/[0.08] flex items-center justify-between font-mono">
              <span>Kerala • Tamil Nadu • Karnataka</span>
              <span>+91 6282549008</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-2 text-left flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#9E8255] font-bold' : 'text-[#1E1D1B] hover:text-[#9E8255]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs">{isActive ? '●' : '→'}</span>
                </button>
              );
            })}

            {/* Mobile 10 Services Fast List */}
            <div className="pt-2 pb-2 border-t border-black/[0.06]">
              <span className="text-[10px] font-mono text-[#9E8255] block mb-2 tracking-widest">
                OUR 10 SERVICES
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                {CLIENT_SERVICES_CONFIG.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(s.id)}
                    className="text-left text-[#524D46] hover:text-[#9E8255] py-1 truncate"
                  >
                    {s.number}. {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-black/[0.08] flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#1E1D1B] text-white font-semibold text-center tracking-[0.2em] text-xs hover:bg-[#9E8255] transition-colors flex items-center justify-center space-x-2"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#635E58] pt-2">
                <a href="tel:916282549008" className="flex items-center space-x-2 hover:text-[#9E8255]">
                  <Phone className="w-3.5 h-3.5 text-[#9E8255]" />
                  <span>+91 6282549008</span>
                </a>
                <a
                  href="https://www.instagram.com/hyzin.interior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9E8255]"
                >
                  @hyzin.interior
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
