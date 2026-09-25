import { Phone } from 'lucide-react';
import RegionalStudios from '../components/RegionalStudios';
import WhyHyzin from '../components/WhyHyzin';
import { BRAND_ASSETS } from '../data/clientAssets';

export default function AboutPage({ onOpenConsultation, onSelectRegion, onOpenLightbox }) {
  return (
    <div className="animate-page-enter bg-[#2B1C19]">

      {/* ─────────────────────────────────────────────────────────────
          01 — PAGE HERO HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19] pt-32 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Chapter label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-10 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              About Hyzin Interior
            </span>
            <span className="block w-10 h-[1px] bg-[#D4AF37]/50" />
          </div>

          {/* Giant hero heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#FAF7F0] leading-[1.05] tracking-tight uppercase max-w-5xl">
            Designing with Purpose &amp;<br />
            <span className="text-[#D4AF37]">Quiet Permanence.</span>
          </h1>

          {/* Gold hairline */}
          <div className="w-full h-[1px] bg-[#D4AF37]/20 mt-14 mb-10" />

          {/* Inline stats */}
          <div className="flex flex-wrap items-center gap-0 divide-x divide-[#D4AF37]/30">
            <div className="pr-10 sm:pr-16">
              <span className="block text-3xl sm:text-4xl font-bold text-[#FAF7F0] tracking-tight">50+</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1 font-semibold">Works Delivered</span>
            </div>
            <div className="px-10 sm:px-16">
              <span className="block text-3xl sm:text-4xl font-bold text-[#FAF7F0] tracking-tight">10</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1 font-semibold">Core Disciplines</span>
            </div>
            <div className="pl-10 sm:pl-16">
              <span className="block text-3xl sm:text-4xl font-bold text-[#FAF7F0] tracking-tight">3</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1 font-semibold">States Served</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02 — PHILOSOPHY SPLIT
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#4E342E] py-32 px-6 sm:px-10 lg:px-20 border-t border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">

            {/* LEFT — Text col */}
            <div className="lg:col-span-6 relative">

              {/* Ghost section number */}
              <span
                aria-hidden="true"
                className="absolute -top-10 -left-4 text-[clamp(7rem,16vw,14rem)] font-extrabold text-[#FAF7F0]/[0.03] leading-none select-none pointer-events-none"
              >
                01
              </span>

              {/* Section label */}
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-5">
                01 — Philosophy
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF7F0] leading-[1.08] tracking-tight uppercase mb-10">
                Integrated Design &amp;<br />Fabrication
              </h2>

              {/* Gold left-border quote line */}
              <div className="border-l-2 border-[#D4AF37]/60 pl-6 mb-10 space-y-6 text-[#FAF7F0]/70 text-base leading-[1.85]">
                <p>
                  Unlike conventional agencies that outsource critical elements to disparate vendors, HYZIN maintains full sovereign execution. We operate specialized workshops for modular aluminium extrusion framing, custom stainless steel &amp; MS metal fabrication, and computerized joinery.
                </p>
                <p>
                  This seamless marriage of heavy structural engineering with delicate interior cabinetry ensures zero structural compromises: wall drops are millimeter-level aligned, suspended ceilings carry concealed acoustic channels, and steel security doors blend invisibly into minimalist paneling.
                </p>
                <p>
                  Our turnkey execution methodology ensures that the initial 3D visualization is executed with 1:1 fidelity on-site — supervised directly by our senior leads from concept through to commissioning.
                </p>
              </div>

            </div>

            {/* RIGHT — 3D Logo image col */}
            <div className="lg:col-span-6">
              <div
                onClick={() => onOpenLightbox && onOpenLightbox(BRAND_ASSETS.logo3D, 0, 'HYZIN Official 3D Gold Logo Wall', 'Branding')}
                className="relative overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(201,168,76,0.08)] bg-[#3E2723] cursor-pointer group"
              >
                <img
                  src={BRAND_ASSETS.logo3D}
                  alt="HYZIN Official 3D Gold Logo Wall"
                  className="w-full h-[560px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C19]/95 via-[#2B1C19]/10 to-transparent pointer-events-none" />

                {/* Quote panel — sharp corners */}
                <div className="absolute bottom-0 left-0 right-0 p-7 bg-[#2B1C19]/90 backdrop-blur-sm border-t border-[#D4AF37]/20">
                  <p className="text-base sm:text-lg font-medium text-[#FAF7F0] leading-snug">
                    "Good interiors don't simply look beautiful.<br />They make everyday life better."
                  </p>
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] mt-3 font-semibold">
                    Hyzin Core Design Principle
                  </span>
                </div>

                {/* Hover gold rim flash */}
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-500 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03 — CREDENTIAL METRIC STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#3E2723] border-t border-[#D4AF37]/20 border-b border-b-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/20">

            {/* Metric 1 */}
            <div className="py-16 px-8 sm:px-12 flex flex-col justify-center group">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/60 font-semibold mb-4">
                Core Disciplines
              </span>
              <div className="flex items-end gap-4">
                <span className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-[#FAF7F0] leading-none tracking-tight">
                  10
                </span>
                <span className="text-[#D4AF37]/40 text-4xl font-thin mb-2">/</span>
              </div>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mt-5">
                Interior · Fabrication · Joinery &amp; More
              </span>
            </div>

            {/* Metric 2 */}
            <div className="py-16 px-8 sm:px-12 flex flex-col justify-center group">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/60 font-semibold mb-4">
                Delivered Works
              </span>
              <div className="flex items-end gap-4">
                <span className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-[#FAF7F0] leading-none tracking-tight">
                  50+
                </span>
                <span className="text-[#D4AF37]/40 text-4xl font-thin mb-2">/</span>
              </div>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mt-5">
                Residential · Commercial · Institutional
              </span>
            </div>

            {/* Metric 3 */}
            <div className="py-16 px-8 sm:px-12 flex flex-col justify-center group">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/60 font-semibold mb-4">
                States Served
              </span>
              <div className="flex items-end gap-4">
                <span className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-[#FAF7F0] leading-none tracking-tight">
                  3
                </span>
                <span className="text-[#D4AF37]/40 text-4xl font-thin mb-2">/</span>
              </div>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mt-5">
                Kerala · Tamil Nadu · Karnataka
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04 — WHY HYZIN PILLARS
      ───────────────────────────────────────────────────────────── */}
      <WhyHyzin />

      {/* ─────────────────────────────────────────────────────────────
          05 — REGIONAL STUDIOS
      ───────────────────────────────────────────────────────────── */}
      <RegionalStudios onSelectRegion={onSelectRegion} onOpenLightbox={onOpenLightbox} />

      {/* ─────────────────────────────────────────────────────────────
          06 — BOTTOM CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19] border-t border-[#D4AF37]/15 py-36 px-6 sm:px-10 lg:px-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Section label */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]/70 font-semibold mb-8">
            06 — Begin
          </p>

          {/* Gold hairline above */}
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mb-12" />

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#FAF7F0] leading-[1.06] tracking-tight uppercase max-w-4xl mb-6">
            Initiate a Private<br />
            <span className="text-[#D4AF37]">Spatial Dialogue.</span>
          </h2>

          <p className="text-base text-[#FAF7F0]/50 max-w-xl leading-relaxed mb-14">
            Discuss your upcoming interior design, modular installation, or fabrication project directly with our lead team. Every engagement begins with a private consultation — unhurried and confidential.
          </p>

          {/* CTA buttons — zero border-radius, architectural */}
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenConsultation}
              className="px-10 py-5 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-200 shadow-[0_0_40px_rgba(201,168,76,0.18)] hover:shadow-[0_0_60px_rgba(201,168,76,0.28)]"
            >
              Start Your Project
            </button>
            <a
              href="tel:6282549008"
              className="px-10 py-5 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#FAF7F0] hover:text-[#D4AF37] text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-200 flex items-center gap-3"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              +91&nbsp;6282&nbsp;549&nbsp;008
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
