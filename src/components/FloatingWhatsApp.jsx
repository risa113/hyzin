import { useState } from 'react';
import { MessageSquare, ArrowUpRight, Phone, X } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenConsultation }) {
  const [showOptions, setShowOptions] = useState(false);

  const whatsapp1 = "https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";
  const whatsapp2 = "https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project.";

  return (
    <>
      {/* Floating Desktop & Tablet Popover Menu */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end space-y-3">
        {showOptions && (
          <div className="bg-[#111216] border border-[#d4b584]/40 shadow-2xl p-4 rounded-xl w-72 animate-fadeIn text-left text-white space-y-3 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#d4b584]">
                SELECT WHATSAPP LINE
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
                  Line 1: +91 6282549008
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
                  Line 2: +91 8848023041
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Direct Lead Line</span>
              </div>
            </a>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-[#0e0f12]/95 backdrop-blur-md border border-white/10 shadow-2xl text-[11px] font-mono text-[#ded8cd] uppercase tracking-wider hidden md:flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>WhatsApp Direct Desk</span>
          </div>

          <button
            onClick={() => setShowOptions(!showOptions)}
            className="group relative flex items-center justify-center w-14 h-14 bg-[#14151a] hover:bg-[#1a1c22] border-2 border-[#25D366] shadow-[0_4px_25px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105"
            title="Direct WhatsApp Consultation with HYZIN Team"
          >
            {/* Subtle green accent pulse */}
            <div className="absolute inset-0 bg-[#25D366]/20 animate-ping rounded-none -z-10 opacity-75 pointer-events-none"></div>

            {/* SVG WhatsApp icon */}
            <svg className="w-6 h-6 fill-[#25D366] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
        </div>
      </aside>

      {/* Sticky Mobile Quick Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0e0f13]/95 backdrop-blur-xl border-t border-white/10 p-2 sm:hidden flex flex-col space-y-1.5">
        <div className="flex items-center gap-2">
          <a
            href={whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-[#16171d] border border-[#25D366]/60 text-[#25D366] text-[10px] uppercase font-mono tracking-wider flex items-center justify-center space-x-1 rounded-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WA Line 1</span>
          </a>

          <a
            href={whatsapp2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-[#16171d] border border-[#25D366]/60 text-[#25D366] text-[10px] uppercase font-mono tracking-wider flex items-center justify-center space-x-1 rounded-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WA Line 2</span>
          </a>
        </div>

        <button
          onClick={onOpenConsultation}
          className="w-full py-2.5 bg-[#d4b584] text-[#0a0a0c] text-[11px] uppercase font-semibold tracking-wider flex items-center justify-center space-x-1 rounded-sm"
        >
          <span>RESERVE BRIEF FORM</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
}
