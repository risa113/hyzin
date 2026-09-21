import { useState } from 'react';
import { Compass, Lightbulb, PenTool, Hammer, KeyRound, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Lifestyle Dialogue & Spatial Intent",
      description: "We begin with a deep exploration of your daily rituals, aesthetic affinities, functional requirements, and family dynamics. We review architectural drawings and establish clear budget frameworks.",
      deliverable: "Spatial Brief Document & Feasibility Matrix",
      icon: Compass
    },
    {
      num: "02",
      title: "CONCEPT",
      subtitle: "Mood, Materiality & Spatial Flow",
      description: "Our design team develops the overarching architectural narrative, mood boards, physical material palettes (stone, wood, metals), and schematic zoning layouts.",
      deliverable: "Curated Material Trays & Conceptual 3D Moodboards",
      icon: Lightbulb
    },
    {
      num: "03",
      title: "DESIGN",
      subtitle: "Millimeter Precision & 3D Visualization",
      description: "We draft comprehensive working blueprints, 3D photorealistic cinematic renders, custom joinery details, electrical schedules, and HVAC coordinates.",
      deliverable: "Cinematic 3D Visuals & Complete Execution Blueprints",
      icon: PenTool
    },
    {
      num: "04",
      title: "EXECUTE",
      subtitle: "Master Craftsmanship & On-Site Vigilance",
      description: "Our dedicated site engineers supervise every phase of civil modification, acoustic insulation, bespoke furniture carpentry, and quarry slab installation with zero deviation.",
      deliverable: "Weekly Photographic Progress Reports & Milestone Audits",
      icon: Hammer
    },
    {
      num: "05",
      title: "DELIVER",
      subtitle: "White-Glove Detailing & Sovereign Handover",
      description: "Final styling, deep cleaning, art curation, and smart lighting commissioning before presenting your completed architectural sanctuary with full warranty documentation.",
      deliverable: "Keys, Architectural Archive Dossier & Lifetime Support",
      icon: KeyRound
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
            <span>THE ARCHITECTURAL JOURNEY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight">
            FROM IDEA TO REALITY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#aba395] font-light leading-relaxed">
            A disciplined five-stage methodology engineered to eliminate uncertainty and deliver pristine architectural fidelity.
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
                    <span className="font-mono text-2xl text-[#d4b584] font-light">
                      {step.num}
                    </span>
                    <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#d4b584]' : 'text-[#716c64]'}`} />
                  </div>

                  <h3 className="font-serif text-2xl text-[#faf6ee] mb-1 group-hover:text-[#d4b584] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] uppercase font-mono tracking-wider text-[#918a7f] mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#b8b0a2] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#d4b584] block mb-1">
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
