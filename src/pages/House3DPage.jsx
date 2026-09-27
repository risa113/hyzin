import React from 'react';
import House3DViewer from '../components/House3DViewer';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function House3DPage({ onOpenLightbox, onOpenConsultation, onNavigate }) {
  return (
    <div className="animate-page-enter pt-16 sm:pt-24 pb-16 sm:pb-20 bg-[#3A2117]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-[#C4A174]/20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#C4A174]/15 border border-[#C4A174]/40 text-[#C4A174] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A174]" /> 3D Interactive House Model
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-[#EDE3D2] font-extrabold leading-[1.12] tracking-tight">
            3D Interactive <span className="text-[#C4A174]">House Showcase.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#C4A174] font-normal leading-relaxed">
            Orbit our 3D villa model in 360°, switch between Day Sun, Night Cove Light, and Blueprint Wireframe modes, and click 3D hotspots to inspect real Kerala client work.
          </p>
        </div>
      </section>

      {/* Main 3D House Viewer Canvas */}
      <House3DViewer
        onOpenLightbox={onOpenLightbox}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Feature Bullet Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-[#4A2E22] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#C4A174]/20 shadow-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#EDE3D2] font-bold tracking-tight mb-6">
            Key Highlights of Our 3D Interactive House Model
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#EDE3D2]">
                <CheckCircle2 className="w-4 h-4 text-[#C4A174] shrink-0" /> 360° Free Camera Orbit
              </div>
              <p className="text-xs text-[#C4A174] leading-relaxed">
                Drag with mouse or finger to freely rotate, zoom, and pan around every angle of the house model.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#EDE3D2]">
                <CheckCircle2 className="w-4 h-4 text-[#C4A174] shrink-0" /> Day, Night &amp; Blueprint Modes
              </div>
              <p className="text-xs text-[#C4A174] leading-relaxed">
                Experience natural sunlight shadows, warm evening cove lighting in internal rooms, or structural wireframe blueprints.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#EDE3D2]">
                <CheckCircle2 className="w-4 h-4 text-[#C4A174] shrink-0" /> Real Project Hotspots
              </div>
              <p className="text-xs text-[#C4A174] leading-relaxed">
                Click interactive pins on the Kitchen, Master Wardrobe, Paneling, Stair Balustrade, Steel Door, or Ceiling to view actual photos.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#C4A174]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('photo-vault')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C4A174] text-[#3A2117] text-xs font-bold uppercase tracking-wider hover:bg-[#EDE3D2] transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Explore All 72 Client Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#3A2117] border border-[#C4A174]/40 text-[#EDE3D2] text-xs font-bold uppercase tracking-wider hover:border-[#C4A174] hover:text-[#C4A174] transition-colors text-center cursor-pointer"
            >
              Book Project Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
