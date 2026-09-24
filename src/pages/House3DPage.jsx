import React from 'react';
import House3DViewer from '../components/House3DViewer';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function House3DPage({ onOpenLightbox, onOpenConsultation, onNavigate }) {
  return (
    <div className="animate-page-enter pt-12 pb-20 bg-[#FAF8F5]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-black/[0.08]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A065]/15 border border-[#C5A065]/30 text-[#8C6D3B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A065]" /> 3D Interactive House Model
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#1E1D1B] font-extrabold leading-[1.12] tracking-tight">
            3D Interactive <span className="text-[#C5A065]">House Showcase.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#524D46] font-normal leading-relaxed">
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
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DEC9] shadow-xl">
          <h3 className="text-2xl sm:text-3xl text-[#1E1D1B] font-bold tracking-tight mb-6">
            Key Highlights of Our 3D Interactive House Model
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A065]" /> 360° Free Camera Orbit
              </div>
              <p className="text-xs text-[#666055] leading-relaxed">
                Drag with mouse or finger to freely rotate, zoom, and pan around every angle of the house model.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A065]" /> Day, Night & Blueprint Modes
              </div>
              <p className="text-xs text-[#666055] leading-relaxed">
                Experience natural sunlight shadows, warm evening cove lighting in internal rooms, or structural wireframe blueprints.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A065]" /> Real Project Hotspots
              </div>
              <p className="text-xs text-[#666055] leading-relaxed">
                Click interactive pins on the Kitchen, Master Wardrobe, Paneling, Stair Balustrade, Steel Door, or Ceiling to view actual photos.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('photo-vault')}
              className="px-6 py-3 rounded-2xl bg-[#1E1D1B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A065] transition-colors flex items-center gap-2"
            >
              <span>Explore All 72 Client Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-2xl bg-[#C5A065]/15 text-[#8C6D3B] text-xs font-bold uppercase tracking-wider hover:bg-[#C5A065]/25 transition-colors"
            >
              Book Project Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
