import { useState } from 'react';
import { MessageSquare, ArrowUpRight, Phone, X, Send } from 'lucide-react';
import { instagramProfile } from '../data/instagramData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function FloatingWhatsApp({ onOpenConsultation }) {
  const [showOptions, setShowOptions] = useState(false);

  const whatsapp1 = "https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";
  const whatsapp2 = "https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";

  return (
    <>
      {/* Floating Desktop & Tablet Popover Menu */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end space-y-3">
        {showOptions && (
          <div className="bg-[#111216] border border-[#d4b584]/40 shadow-2xl p-4 rounded-xl w-80 animate-fadeIn text-left text-white space-y-3 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#d4b584]">
                DIRECT STUDIO CHAT CHANNELS
              </span>
              <button
                onClick={() => setShowOptions(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href={whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#171921] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] transition-colors rounded-lg flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold block text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp Line 1: +91 6282549008
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Primary Studio Desk</span>
              </div>
            </a>

            <a
              href={whatsapp2}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#171921] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] transition-colors rounded-lg flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold block text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp Line 2: +91 8848023041
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Direct Lead Line</span>
              </div>
            </a>

            {/* Instagram DM Option */}
            <a
              href={instagramProfile.dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#171921] hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C] transition-colors rounded-lg flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C]">
                <Send className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold block text-white group-hover:text-[#E1306C] transition-colors flex items-center space-x-1">
                  <span>Instagram Direct DM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Send photos & reels @hyzin.interior</span>
              </div>
            </a>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-[#0e0f12]/95 backdrop-blur-md border border-white/10 shadow-2xl text-[11px] font-mono text-[#ded8cd] uppercase tracking-wider hidden md:flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>WhatsApp & Instagram Desk</span>
          </div>

          <button
            onClick={() => setShowOptions(!showOptions)}
            className="group relative flex items-center justify-center w-14 h-14 bg-[#14151a] hover:bg-[#1a1c22] border-2 border-[#d4b584] shadow-[0_4px_25px_rgba(212,181,132,0.3)] transition-all duration-300 hover:scale-105"
            title="Direct Chat & Instagram DM with HYZIN Team"
          >
            {/* Subtle accent pulse */}
            <div className="absolute inset-0 bg-[#d4b584]/20 animate-ping rounded-none -z-10 opacity-75 pointer-events-none"></div>

            {/* Icon */}
            <div className="flex items-center justify-center text-[#d4b584]">
              <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>
          </button>
        </div>
      </aside>

      {/* Sticky Mobile Quick Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0e0f13]/95 backdrop-blur-xl border-t border-white/10 p-2 sm:hidden flex flex-col space-y-1.5">
        <div className="flex items-center gap-1.5">
          <a
            href={whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 bg-[#16171d] border border-[#25D366]/60 text-[#25D366] text-[10px] uppercase font-mono tracking-wider flex items-center justify-center space-x-1 rounded-sm"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>

          <a
            href={instagramProfile.dmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 bg-[#16171d] border border-[#E1306C]/60 text-[#E1306C] text-[10px] uppercase font-mono tracking-wider flex items-center justify-center space-x-1 rounded-sm"
          >
            <Send className="w-3 h-3" />
            <span>Insta DM</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="flex-1 py-2 bg-[#d4b584] text-[#0a0a0c] text-[10px] uppercase font-bold tracking-wider flex items-center justify-center space-x-1 rounded-sm"
          >
            <span>Reserve</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </>
  );
}
