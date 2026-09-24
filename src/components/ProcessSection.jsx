import { useState } from 'react';
import { Compass, Lightbulb, PenTool, Hammer, KeyRound, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "DISCOVERY & BRIEFING",
      subtitle: "Site Survey & Spatial Program",
      description: "We begin with a deep exploration of your daily rituals, aesthetic affinities, functional requirements, and family dynamics. We review site plans and establish clear budget frameworks.",
      deliverable: "Spatial Program & Feasibility Dossier"
    },
    {
      num: "02",
      icon: Lightbulb,
      title: "CONCEPTUAL DESIGN",
      subtitle: "Material Palettes & Layouts",
      description: "Our design team develops the overarching design narrative, mood boards, physical material palettes (stone, wood, metals), and schematic zoning layouts.",
      deliverable: "Design Vision & Material Board"
    },
    {
      num: "03",
      icon: PenTool,
      title: "TECHNICAL SPECIFICATION",
      subtitle: "Precision CAD Working Drawings",
      description: "Every joint, shadow gap, lighting conduit, and custom joinery section is translated into millimeter-precise CAD working drawings and structural engineering schematics.",
      deliverable: "100% Construction Drawing Package"
    },
    {
      num: "04",
      icon: Hammer,
      title: "SHOP FABRICATION & SITE BUILD",
      subtitle: "Workshop & Site Execution",
      description: "Sub-assemblies are pre-fabricated in our controlled aluminium, steel, and joinery workshops before undergoing clean, white-glove site installation by master craftsmen.",
      deliverable: "Verified Site Installation"
    },
    {
      num: "05",
      icon: KeyRound,
      title: "COMMISSIONING & HANDOVER",
      subtitle: "Final Styling & Turnkey Delivery",
      description: "Final styling, deep cleaning, art curation, and smart lighting commissioning before presenting your completed space with full warranty documentation.",
      deliverable: "Keys, Project Archive Dossier & Lifetime Support"
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#c5a065] font-medium mb-3">
              <span>THE INTERIOR & FABRICATION JOURNEY</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#faf6ee] font-bold tracking-tight">
              Process & Precision
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#9b9487] font-normal leading-relaxed max-w-sm">
            A disciplined five-stage methodology engineered to eliminate uncertainty and deliver pristine design fidelity.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 bg-[#121317] border cursor-pointer transition-all duration-500 flex flex-col justify-between group ${
                  isActive
                    ? 'border-[#d4b584] shadow-xl shadow-[#d4b584]/10 bg-[#161820]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl text-[#d4b584] font-bold">
                      {step.num}
                    </span>
                    <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#d4b584]' : 'text-[#716c64]'}`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl text-[#faf6ee] font-bold tracking-tight mb-1 group-hover:text-[#d4b584] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#918a7f] mb-4 font-medium">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#b8b0a2] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <span className="text-[9px] uppercase tracking-wider text-[#d4b584] font-semibold block mb-1">
                    DELIVERABLE
                  </span>
                  <span className="text-[11px] text-[#faf6ee] font-medium leading-tight block">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-transparent border border-[#d4b584] text-[#d4b584] hover:bg-[#d4b584] hover:text-[#0b0c0e] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>DISCUSS YOUR PROJECT TIMELINE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
