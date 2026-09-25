import React from 'react';
import House3DViewer from '../components/House3DViewer';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function House3DPage({ onOpenLightbox, onOpenConsultation, onNavigate }) {
  return (
    <div className="animate-page-enter pt-12 pb-20 bg-[#1C1C20]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#C9A84C]/20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" /> 3D Interactive House Model
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#F2EDE4] font-extrabold leading-[1.12] tracking-tight">
            3D Interactive <span className="text-[#C9A84C]">House Showcase.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#C9A84C] font-normal leading-relaxed">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#141416] rounded-3xl p-8 sm:p-12 border border-[#C9A84C]/20 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl text-[#F2EDE4] font-bold tracking-tight mb-6">
            Key Highlights of Our 3D Interactive House Model
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F2EDE4]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" /> 360° Free Camera Orbit
              </div>
              <p className="text-xs text-[#C9A84C] leading-relaxed">
                Drag with mouse or finger to freely rotate, zoom, and pan around every angle of the house model.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F2EDE4]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" /> Day, Night & Blueprint Modes
              </div>
              <p className="text-xs text-[#C9A84C] leading-relaxed">
                Experience natural sunlight shadows, warm evening cove lighting in internal rooms, or structural wireframe blueprints.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F2EDE4]">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" /> Real Project Hotspots
              </div>
              <p className="text-xs text-[#C9A84C] leading-relaxed">
                Click interactive pins on the Kitchen, Master Wardrobe, Paneling, Stair Balustrade, Steel Door, or Ceiling to view actual photos.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#C9A84C]/20 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('photo-vault')}
              className="px-6 py-3 rounded-2xl bg-[#C9A84C] text-[#0A0A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#F2EDE4] transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Explore All 72 Client Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-2xl bg-[#0A0A0B] border border-[#C9A84C]/40 text-[#F2EDE4] text-xs font-bold uppercase tracking-wider hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              Book Project Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
