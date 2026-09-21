import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About & Ethos' },
    { id: 'projects', name: 'Selected Work' },
    { id: 'services', name: 'Services & Materials' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Regional Coordinates Bar */}
      <div className="w-full bg-[#181716] border-b border-white/[0.08] text-[10px] uppercase tracking-[0.25em] text-[#C4BCB1] py-2 px-4 sm:px-8 hidden md:flex items-center justify-between z-40 relative">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A065] animate-pulse"></span>
          <span className="font-mono text-[#EFEBE3]">Kerala • Tamil Nadu • Karnataka</span>
          <span className="text-white/20">|</span>
          <span className="text-white/40">Coordinates: 10.0261° N, 76.3125° E</span>
        </div>
        <div className="flex items-center space-x-6 text-[10px]">
          <a
            href="tel:6282549008"
            className="flex items-center space-x-1.5 text-[#EFEBE3] hover:text-[#C5A065] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C5A065]" />
            <span>+91 6282549008</span>
          </a>
          <a
            href="https://www.instagram.com/hyzin.interior/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A065] transition-colors flex items-center space-x-1 text-[#EFEBE3]"
          >
            <span>@hyzin.interior</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Main Floating Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-black/[0.08] shadow-md shadow-black/5 py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/[0.04] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col items-start focus:outline-none text-left"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#1E1D1B] group-hover:text-[#9E8255] transition-colors duration-300">
              HYZIN INTERIOR
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#8C8275] -mt-0.5">
              Interior Design Studio
            </span>
          </button>

          {/* Desktop Navigation across 5 Dedicated Pages */}
          <nav className="hidden lg:flex items-center space-x-8 text-[12px] uppercase tracking-[0.2em] font-medium text-[#524D46]">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
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
          className={`lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-black/[0.1] transition-all duration-400 overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen py-8 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <div className="px-6 flex flex-col space-y-4 text-sm uppercase tracking-[0.22em]">
            <div className="text-[10px] text-[#8C8275] pb-2 border-b border-black/[0.08] flex items-center justify-between font-mono">
              <span>Kerala • Tamil Nadu • Karnataka</span>
              <span>10.0261° N, 76.3125° E</span>
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

            <div className="pt-4 border-t border-black/[0.08] flex flex-col space-y-3">
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
                <a href="tel:6282549008" className="flex items-center space-x-2 hover:text-[#9E8255]">
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
