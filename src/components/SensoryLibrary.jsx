import { useState } from 'react';
import { Info } from 'lucide-react';
import { materialsData } from '../data/materialsData';

export default function SensoryLibrary() {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section id="materials" className="py-24 sm:py-32 bg-[#341910] border-t border-[#CFB291]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#CFB291]/20 pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-4">
              <span>03 / MATERIAL ARCHIVE</span>
              <span className="w-8 h-[1px] bg-[#CFB291]/40"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#FCFCF6] font-bold tracking-tight">
              The Sensory Library
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#CFB291] font-normal leading-relaxed max-w-md">
            Physical manifestation over superficial trends. Every surface is chosen for tactile resonance, acoustic softness, and perpetual endurance.
          </p>
        </div>

        {/* 4 Swatches Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsData.map((item, idx) => {
            const isSelected = selectedMaterial.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedMaterial(item)}
                style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
                className={`group cursor-pointer bg-[#45241A] border transition-all duration-500 overflow-hidden flex flex-col justify-between reveal-up rounded-sm shadow-md ${
                  isSelected
                    ? 'border-[#CFB291] shadow-xl shadow-[#CFB291]/20 -translate-y-1'
                    : 'border-[#CFB291]/20 hover:border-[#CFB291]/40'
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#45241A] via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#341910]/80 backdrop-blur-md border border-[#CFB291]/20 text-[9px] uppercase font-semibold tracking-wider text-[#CFB291]">
                      {item.category}
                    </span>
                  </div>

                  {/* Swatch Content */}
                  <div className="p-6">
                    <div className="text-[10px] uppercase font-medium tracking-wider text-[#CFB291] mb-1">
                      {item.origin}
                    </div>
                    <h3 className="text-lg sm:text-xl text-[#FCFCF6] font-bold tracking-tight group-hover:text-[#CFB291] transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#CFB291] font-normal leading-relaxed line-clamp-2">
                      {item.finish}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#CFB291]/20 flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-[#CFB291]">
                  <span>{isSelected ? 'ACTIVE SELECTION' : 'EXPLORE SPECS'}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Swatch Detailed Breakdown with Slide-Right Pop Animation */}
        {selectedMaterial && (
          <div key={selectedMaterial.id} className="mt-12 p-8 sm:p-10 bg-[#45241A] border border-[#CFB291]/30 rounded-xl relative overflow-hidden animate-slide-right-pop shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFB291]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#CFB291] font-medium mb-2">
                  <Info className="w-3.5 h-3.5" />
                  <span>MATERIAL SPECIFICATION • {selectedMaterial.category}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl text-[#FCFCF6] font-bold tracking-tight mb-4">
                  {selectedMaterial.name}
                </h4>
                <p className="text-base text-[#CFB291] font-normal leading-relaxed mb-6">
                  {selectedMaterial.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-[#341910] border border-[#CFB291]/20 rounded">
                    <span className="text-[#CFB291] block">PROVENANCE</span>
                    <span className="text-[#FCFCF6] font-medium">{selectedMaterial.origin}</span>
                  </div>
                  <div className="p-3 bg-[#341910] border border-[#CFB291]/20 rounded">
                    <span className="text-[#CFB291] block">SURFACE FINISH</span>
                    <span className="text-[#FCFCF6] font-medium">{selectedMaterial.finish}</span>
                  </div>
                  <div className="p-3 bg-[#341910] border border-[#CFB291]/20 rounded">
                    <span className="text-[#CFB291] block">TYPICAL APPLICATION</span>
                    <span className="text-[#FCFCF6] font-medium">{selectedMaterial.application}</span>
                  </div>
                  <div className="p-3 bg-[#341910] border border-[#CFB291]/20 rounded">
                    <span className="text-[#CFB291] block">TACTILE NOTE</span>
                    <span className="text-[#CFB291] font-medium">{selectedMaterial.tactileNote}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs h-64 border border-[#CFB291]/20 rounded overflow-hidden shadow-2xl relative">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#341910]/20"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center py-1.5 bg-[#341910]/80 backdrop-blur-md text-[10px] font-mono text-[#FCFCF6] tracking-widest uppercase">
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
