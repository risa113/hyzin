export default function WhyHyzin() {
  const points = [
    {
      title: "PERSONALIZED DESIGN",
      sub: "Bespoke to your personal rituals",
      desc: "Every project is designed around the specific people who inhabit the space. We do not repeat cookie-cutter templates or impose arbitrary styles."
    },
    {
      title: "FUNCTION FIRST",
      sub: "Ergonomics over superficiality",
      desc: "True luxury is intuitive ease. Storage is generous yet invisible, acoustics are soothing, and movement flows effortlessly from chamber to chamber."
    },
    {
      title: "DETAIL MATTERS",
      sub: "Millimeter-level precision rigor",
      desc: "Proportions, shadow gaps, tactile transitions between stone and timber, and glare-free lighting angles are obsessed over down to the millimeter."
    },
    {
      title: "COMPLETE EXECUTION",
      sub: "Single-point sovereign responsibility",
      desc: "From initial concept sketches to sourcing overseas slabs and final white-glove styling, our dedicated studio supervises the entire execution lifecycle."
    },
    {
      title: "TIMELESS AESTHETICS",
      sub: "Immune to short-lived digital fads",
      desc: "We reject gaudy chrome and disposable trends. Our palettes of travertine, solid aged teak, and hand-loomed textiles will feel just as majestic twenty years from now."
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title Sticky Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-3">
              <span>04 / THE HYZIN CODE</span>
              <span className="w-8 h-[1px] bg-[#C9A84C]/40"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-bold tracking-tight">
              WHY HYZIN
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#C9A84C] font-normal leading-relaxed">
              We operate not as a commercial contractor, but as a dedicated interior & fabrication atelier committed to enduring quality, intellectual restraint, and profound client discretion.
            </p>
          </div>

          {/* Right Column: Editorial Minimalist Cards */}
          <div className="lg:col-span-8 space-y-6">
            {points.map((p, index) => (
              <div
                key={p.title}
                className="p-8 sm:p-10 bg-[#141416] border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-[#C9A84C] font-semibold mb-2">
                  <span>0{index + 1} / FOUNDATION</span>
                  <span className="text-[10px] text-[#C9A84C]/80 uppercase font-medium">{p.sub}</span>
                </div>

                <h3 className="text-xl sm:text-2xl text-[#F2EDE4] font-bold tracking-tight group-hover:text-[#C9A84C] transition-colors">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#C9A84C] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
