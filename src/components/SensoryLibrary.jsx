import { useState } from 'react';
import { Info } from 'lucide-react';
import { materialsData } from '../data/materialsData';

export default function SensoryLibrary() {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section id="materials" className="py-24 sm:py-32 bg-[#0a0a0d] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
              <span>03 / ARCHITECTURAL ARCHIVE</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight">
              The Sensory Library
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#aba395] font-light max-w-md">
            Physical manifestation over superficial trends. Every surface is chosen for tactile resonance, acoustic softness, and perpetual endurance.
          </p>
        </div>

        {/* 4 Swatches Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsData.map((item) => {
            const isSelected = selectedMaterial.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedMaterial(item)}
                className={`group cursor-pointer bg-[#121317] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#d4b584] shadow-xl shadow-[#d4b584]/10 -translate-y-1'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  {/* Swatch Image */}
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[9px] uppercase font-mono tracking-widest text-[#d4b584]">
                      {item.category}
                    </span>
                  </div>

                  {/* Swatch Content */}
                  <div className="p-6">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#8a8479] mb-1">
                      {item.origin}
                    </div>
                    <h3 className="font-serif text-xl text-[#faf6ee] font-normal group-hover:text-[#d4b584] transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#a8a195] font-light leading-relaxed line-clamp-2">
                      {item.finish}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-[#c5a065]">
                  <span>{isSelected ? 'ACTIVE SELECTION' : 'EXPLORE SPECS'}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Swatch Detailed Breakdown */}
        {selectedMaterial && (
          <div className="mt-12 p-8 sm:p-10 bg-[#14151a] border border-[#c5a065]/30 relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a065]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#d4b584] font-mono mb-2">
                  <Info className="w-3.5 h-3.5" />
                  <span>MATERIAL SPECIFICATION • {selectedMaterial.category}</span>
                </div>
                <h4 className="font-serif text-3xl sm:text-4xl text-[#faf6ee] mb-4">
                  {selectedMaterial.name}
                </h4>
                <p className="text-base text-[#ccc5b8] font-light leading-relaxed mb-6">
                  {selectedMaterial.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 bg-black/40 border border-white/[0.06]">
                    <span className="text-[#8e887e] block">PROVENANCE</span>
                    <span className="text-[#faf6ee]">{selectedMaterial.origin}</span>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.06]">
                    <span className="text-[#8e887e] block">SURFACE FINISH</span>
                    <span className="text-[#faf6ee]">{selectedMaterial.finish}</span>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.06]">
                    <span className="text-[#8e887e] block">TYPICAL APPLICATION</span>
                    <span className="text-[#faf6ee]">{selectedMaterial.application}</span>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.06]">
                    <span className="text-[#8e887e] block">TACTILE NOTE</span>
                    <span className="text-[#d4b584]">{selectedMaterial.tactileNote}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs h-64 border border-white/10 overflow-hidden shadow-2xl relative">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center py-1.5 bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#e8dfd2] tracking-widest uppercase">
                    AUTHENTIC PHYSICAL SPECIMEN
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
