import { useState } from 'react';
import { MessageSquare, ArrowUpRight, X, Send, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { instagramProfile } from '../data/instagramData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function FloatingWhatsApp({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsapp1 = "https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";
  const whatsapp2 = "https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";
  const instagramUrl = instagramProfile.dmUrl || "https://ig.me/m/hyzin.interior";
  const emailUrl = "mailto:Muhammedashad395@gmail.com?subject=Interior%20Design%20Project%20Inquiry%20-%20HYZIN%20Interior&body=Hi%20HYZIN%20Interior%20Team,%0A%0AI%20am%20interested%20in%20discussing%20an%20interior%20design%20/%20fabrication%20project.%0A%0AProject%20Type:%0ALocation:%0AContact%20Number:";

  const handleChannelClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay when open (tap outside to close on mobile & desktop) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Expanded Multi-Channel Contact Panel (WhatsApp + Instagram + Mail) */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Direct studio channels"
          className="fixed z-50 bottom-20 sm:bottom-24 right-4 sm:right-6 left-4 sm:left-auto sm:w-96 max-w-sm sm:max-w-none mx-auto sm:mx-0 bg-[#111216]/98 backdrop-blur-2xl border border-[#d4b584]/50 shadow-[0_12px_45px_rgba(0,0,0,0.85)] p-4 sm:p-5 rounded-2xl text-left text-white animate-slide-down-fast"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#d4b584] block font-semibold">
                DIRECT STUDIO CHANNELS
              </span>
              <span className="text-xs text-[#FAF8F5] font-semibold">
                Connect with HYZIN Interior
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              aria-label="Close channels menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Unified Channels List */}
          <div className="space-y-2.5">
            {/* 1. WhatsApp Channel */}
            <div className="p-3 bg-[#171921] hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/70 rounded-xl transition-all group">
              <a
                href={whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleChannelClick}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Direct
                    </span>
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] font-semibold">
                      Instant
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-300 block truncate font-mono mt-0.5">
                    +91 6282549008
                  </span>
                  <span className="text-[9px] text-gray-400 block truncate">
                    Primary Studio Desk • Floor Plans & Quotes
                  </span>
                </div>
              </a>

              {/* Secondary WhatsApp Line Quick Trigger */}
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-gray-400 font-mono">Line 2: +91 8848023041</span>
                <a
                  href={whatsapp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleChannelClick}
                  className="text-[#25D366] hover:underline font-semibold flex items-center space-x-1"
                >
                  <span>Chat Line 2</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* 2. Instagram Direct Channel */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleChannelClick}
              className="p-3 bg-[#171921] hover:bg-[#E1306C]/15 border border-white/10 hover:border-[#E1306C]/70 rounded-xl flex items-center space-x-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E1306C]/20 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-[#E1306C] transition-colors flex items-center space-x-1">
                    <span>Instagram Direct DM</span>
                    <ArrowUpRight className="w-3 h-3 text-[#E1306C]" />
                  </span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#E1306C]/20 text-[#E1306C] font-semibold">
                    Reels & DM
                  </span>
                </div>
                <span className="text-[11px] text-gray-300 block truncate font-mono mt-0.5">
                  @hyzin.interior
                </span>
                <span className="text-[9px] text-gray-400 block truncate">
                  Send reels, design references & photos
                </span>
              </div>
            </a>

            {/* 3. Official Email / Mail Channel */}
            <a
              href={emailUrl}
              onClick={handleChannelClick}
              className="p-3 bg-[#171921] hover:bg-[#d4b584]/15 border border-white/10 hover:border-[#d4b584]/70 rounded-xl flex items-center space-x-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#d4b584]/20 border border-[#d4b584]/40 flex items-center justify-center text-[#d4b584] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-[#d4b584] transition-colors flex items-center space-x-1">
                    <span>Direct Email Desk</span>
                    <ArrowUpRight className="w-3 h-3 text-[#d4b584]" />
                  </span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#d4b584]/20 text-[#d4b584] font-semibold">
                    Official
                  </span>
                </div>
                <span className="text-[11px] text-gray-300 block truncate font-mono mt-0.5">
                  Muhammedashad395@gmail.com
                </span>
                <span className="text-[9px] text-gray-400 block truncate">
                  Send architectural blueprints & estimation requests
                </span>
              </div>
            </a>
          </div>

          {/* Quick Consultation CTA */}
          {onOpenConsultation && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-3 bg-[#d4b584] hover:bg-[#FAF0DC] text-[#0f1013] text-[11px] uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-md"
              >
                <span>BOOK FREE CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating Single Integration Contact Trigger (Available across mobile & desktop) */}
      <aside aria-label="Quick contact trigger" className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center space-x-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full border-2 transition-all duration-300 shadow-[0_6px_30px_rgba(212,181,132,0.35)] active:scale-95 ${
            isOpen
              ? 'bg-[#d4b584] text-[#111216] border-[#FAF8F5]'
              : 'bg-[#111216]/95 hover:bg-[#181920] text-white border-[#d4b584]'
          }`}
          title="Direct Contact via WhatsApp, Instagram or Email"
          aria-expanded={isOpen}
        >
          {/* Subtle accent halo pulse when closed */}
          {!isOpen && (
            <div className="absolute inset-0 bg-[#d4b584]/25 animate-ping rounded-full -z-10 opacity-75 pointer-events-none" />
          )}

          {isOpen ? (
            <>
              <X className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider">Close</span>
            </>
          ) : (
            <>
              {/* Channel Icons Cluster */}
              <div className="flex items-center -space-x-1.5 flex-shrink-0">
                <span className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <MessageSquare className="w-3.5 h-3.5" />
                </span>
                <span className="w-6 h-6 rounded-full bg-[#E1306C] text-white flex items-center justify-center shadow-sm">
                  <Send className="w-3 h-3" />
                </span>
                <span className="w-6 h-6 rounded-full bg-[#d4b584] text-[#111216] flex items-center justify-center shadow-sm">
                  <Mail className="w-3 h-3" />
                </span>
              </div>

              {/* Text Label */}
              <div className="flex flex-col text-left pr-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide leading-none">
                  Contact
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase font-mono tracking-wider text-[#d4b584] leading-tight">
                  3 Channels
                </span>
              </div>
            </>
          )}
        </button>
      </aside>
    </>
  );
}
