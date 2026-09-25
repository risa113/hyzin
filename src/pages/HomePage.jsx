import { ArrowRight, Sparkles, Box, Images } from 'lucide-react';
import AnimaticHeroSlider from '../components/AnimaticHeroSlider';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramShowcase from '../components/InstagramShowcase';
import SensoryLibrary from '../components/SensoryLibrary';
import SeoFaqSection from '../components/SeoFaqSection';
import StudioLocationSection from '../components/StudioLocationSection';
import { assetUrl } from '../data/clientAssets';

/* ─────────────────────────────────────────────
   Gold Marquee Ticker — keyframe injected once
───────────────────────────────────────────── */
const marqueeStyles = `
  @keyframes hyzin-marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .hyzin-marquee-track {
    display: flex;
    width: max-content;
    animation: hyzin-marquee 28s linear infinite;
  }
  .hyzin-marquee-track:hover {
    animation-play-state: paused;
  }
`;

export default function HomePage({ onNavigate, onSelectProject, onOpenConsultation, onOpenLightbox }) {
  const editorialImage = assetUrl('WhatsApp Image 2026-09-22 at 3.21.55 PM.jpeg');

  const TICKER_TEXT =
    'INTERIOR DESIGN \u2022 METAL FABRICATION \u2022 KERALA \u2022 TAMIL NADU \u2022 KARNATAKA \u2022 TURNKEY EXCELLENCE \u2022\u00A0\u00A0\u00A0\u00A0';

  return (
    <div className="animate-page-enter">
      {/* Inject marquee keyframe once */}
      <style>{marqueeStyles}</style>

      {/* ═══════════════════════════════════════════
          1. ANIMATIC HERO SLIDER
      ═══════════════════════════════════════════ */}
      <AnimaticHeroSlider
        onOpenConsultation={onOpenConsultation}
        onExploreWork={() => onNavigate('projects')}
        onOpenLightbox={onOpenLightbox}
      />

      {/* ═══════════════════════════════════════════
          2. GOLD MARQUEE TICKER
      ═══════════════════════════════════════════ */}
      <div className="w-full bg-[#0A0A0B] border-y border-[#C9A84C]/25 overflow-hidden py-4 select-none">
        <div className="hyzin-marquee-track">
          {/* Duplicate text block so the animation loops seamlessly */}
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-[#C9A84C] text-[11px] sm:text-[13px] uppercase tracking-[0.35em] font-semibold pr-0"
              aria-hidden={i === 1}
            >
              {Array(12).fill(TICKER_TEXT).join('')}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          3. EDITORIAL PHILOSOPHY / ABOUT SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 bg-[#1C1C20] relative overflow-hidden border-b border-[#C9A84C]/15">
        {/* Subtle background texture line */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* ── Left Column: Editorial Text ── */}
            <div className="lg:col-span-7 relative">
              {/* Ghost chapter number */}
              <div
                className="absolute -top-10 -left-4 sm:-left-8 text-[160px] sm:text-[200px] font-black leading-none select-none pointer-events-none"
                style={{ color: '#C9A84C', opacity: 0.06 }}
                aria-hidden="true"
              >
                01
              </div>

              {/* Chapter label */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-semibold">
                  01 — PHILOSOPHY
                </span>
                <span className="flex-1 max-w-[80px] h-[1px] bg-[#C9A84C]/30" />
              </div>

              {/* Main Headline */}
              <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F2EDE4] leading-[1.05] tracking-tight mb-6">
                WE DESIGN SPACES<br />
                <span className="text-[#C9A84C]">WITH CHARACTER.</span>
              </h2>

              {/* Sub-paragraph */}
              <p className="relative z-10 text-sm sm:text-base text-[#8B7355] leading-relaxed max-w-xl mb-10">
                HYZIN INTERIOR creates thoughtfully designed spaces that balance aesthetics,
                functionality, comfort, and personality. From concept to completion, we transform
                ordinary spaces into environments that feel intentional, timeless, and uniquely yours.
              </p>

              {/* Quote Block — gold left-border */}
              <div className="relative z-10 border-l-2 border-[#C9A84C] pl-6 py-2 mb-10 bg-[#141416] pr-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold block mb-2">
                  OUR PHILOSOPHY
                </span>
                <blockquote className="text-lg sm:text-xl text-[#F2EDE4] font-medium leading-relaxed italic">
                  "Good interiors don't simply look beautiful.<br />
                  They make everyday life better."
                </blockquote>
              </div>

              {/* CTA Link */}
              <button
                onClick={() => onNavigate('about')}
                className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-[10px] uppercase tracking-[0.3em] font-black transition-colors duration-300"
              >
                DISCOVER OUR DESIGN &amp; FABRICATION ETHOS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* ── Right Column: Editorial Image ── */}
            <div className="lg:col-span-5">
              <div
                onClick={() =>
                  onOpenLightbox &&
                  onOpenLightbox(
                    editorialImage,
                    0,
                    'HYZIN Living Room Feature Wall Louver Paneling',
                    'Paneling'
                  )
                }
                className="relative overflow-hidden border border-[#C9A84C]/25 shadow-2xl bg-[#141416] cursor-pointer group"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A84C] z-10" />

                <img
                  src={editorialImage}
                  alt="HYZIN Living & Paneling — Original Client Work"
                  className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-[#0A0A0B]/10 to-transparent" />

                {/* Overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#C9A84C]/20 bg-[#0A0A0B]/80 backdrop-blur-sm">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-[#C9A84C] font-semibold block mb-1">
                    ORIGINAL CLIENT WORK
                  </span>
                  <span className="text-base font-bold text-[#F2EDE4] block tracking-wide">
                    Kerala · Tamil Nadu · Karnataka
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. 3D HOUSE CALLOUT — FULL-BLEED EDITORIAL BANNER
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#0A0A0B] border-b border-[#C9A84C]/20 relative overflow-hidden">
        {/* Decorative vertical gold lines */}
        <div className="absolute left-[38%] top-0 bottom-0 w-[1px] bg-[#C9A84C]/8 hidden lg:block pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">

            {/* Left: Dramatic text block */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <Box className="w-4 h-4 text-[#C9A84C]" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C9A84C] font-semibold">
                  3D INTERACTIVE HOUSE MODEL
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F2EDE4] leading-[1.05] tracking-tight mb-5">
                EXPERIENCE<br />
                <span className="text-[#C9A84C]">OUR WORK</span><br />
                IN 3D
              </h3>

              <p className="text-sm text-[#8B7355] leading-relaxed max-w-md">
                Rotate 360°, switch between Day Sun, Night Cove Light, and Blueprint Wireframe modes.
                Inspect real client work hotspots across 6 room zones — before you commission a single tile.
              </p>
            </div>

            {/* Right: CTA block with decorative elements */}
            <div className="flex-shrink-0 flex flex-col items-start lg:items-end gap-6">
              {/* Stat badges */}
              <div className="flex gap-8 text-center lg:text-right">
                <div>
                  <div className="text-3xl font-black text-[#C9A84C]">360°</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-[#8B7355] mt-1">Rotation</div>
                </div>
                <div className="w-[1px] bg-[#C9A84C]/20" />
                <div>
                  <div className="text-3xl font-black text-[#C9A84C]">6</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-[#8B7355] mt-1">Room Zones</div>
                </div>
                <div className="w-[1px] bg-[#C9A84C]/20" />
                <div>
                  <div className="text-3xl font-black text-[#C9A84C]">3</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-[#8B7355] mt-1">Light Modes</div>
                </div>
              </div>

              {/* Gold CTA Button */}
              <button
                onClick={() => onNavigate('3d-house')}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-[10px] uppercase tracking-[0.35em] font-black transition-all duration-300 shadow-[0_0_40px_rgba(201,168,76,0.15)] hover:shadow-[0_0_60px_rgba(201,168,76,0.3)]"
              >
                OPEN 3D HOUSE MODEL
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom gold hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          5. SERVICES SECTION (keep as-is)
      ═══════════════════════════════════════════ */}
      <ServicesSection onOpenLightbox={onOpenLightbox} />

      {/* ═══════════════════════════════════════════
          6. STATS BAR — FULL-WIDTH EDITORIAL STRIP
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#0A0A0B] border-y border-[#C9A84C]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C9A84C]/20">

            {[
              { number: '50+', label: 'Commissions', sub: 'Completed Projects' },
              { number: '10',  label: 'Disciplines', sub: 'Core Design Services' },
              { number: '3',   label: 'States',       sub: 'KL · TN · KA' },
              { number: '1:1', label: 'Fidelity',     sub: 'Design to Delivery' },
            ].map(({ number, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center py-12 px-6 text-center group hover:bg-[#141416] transition-colors duration-300"
              >
                <span className="text-5xl sm:text-6xl font-black text-[#C9A84C] leading-none tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {number}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#F2EDE4] mt-2 uppercase tracking-[0.15em]">
                  {label}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#8B7355] mt-1">
                  {sub}
                </span>
              </div>
            ))}

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          7. PHOTO VAULT CALLOUT — EDITORIAL
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#141416] border-b border-[#C9A84C]/15 relative overflow-hidden">
        {/* Decorative horizontal gold thread */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-[#C9A84C]/5 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 relative">

            {/* Ghost large number — left anchor */}
            <div
              className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 text-[180px] sm:text-[220px] font-black leading-none select-none pointer-events-none hidden lg:block"
              style={{ color: '#C9A84C', opacity: 0.05 }}
              aria-hidden="true"
            >
              72
            </div>

            {/* Left section: ghost number visible on mobile */}
            <div className="flex-shrink-0 relative">
              <div
                className="text-[100px] sm:text-[140px] font-black leading-none text-[#C9A84C] lg:hidden"
                style={{ opacity: 0.12 }}
                aria-hidden="true"
              >
                72
              </div>
              <div className="lg:pl-8">
                <div className="flex items-center gap-4 mb-5">
                  <Images className="w-4 h-4 text-[#C9A84C]" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C9A84C] font-semibold">
                    MASTER PHOTO GALLERY
                  </span>
                </div>
                <div className="text-[80px] sm:text-[100px] font-black leading-none text-[#C9A84C] hidden lg:block mb-2">
                  72
                </div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-[#8B7355] hidden lg:block">
                  VERIFIED CLIENT PHOTOS
                </div>
              </div>
            </div>

            {/* Right section: text and CTA */}
            <div className="flex-1 relative z-10">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F2EDE4] leading-[1.05] tracking-tight mb-5">
                BROWSE ALL<br />
                <span className="text-[#C9A84C]">72 VERIFIED</span><br />
                CLIENT PHOTOS
              </h3>

              <p className="text-sm text-[#8B7355] leading-relaxed max-w-lg mb-8">
                Filter by Kitchen Cabinet, Wall Drop, Paneling, Ceilings, Aluminium, Steel Doors,
                or Steel Fabrication — with live search and high-res lightbox. Every photo is an
                original from a real Kerala, Tamil Nadu, or Karnataka project.
              </p>

              {/* Filter tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['Kitchen', 'Paneling', 'Ceilings', 'Steel Doors', 'Aluminium', 'Wall Drop'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#C9A84C]/25 text-[#8B7355] text-[9px] uppercase tracking-[0.25em] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onNavigate('photo-vault')}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-[10px] uppercase tracking-[0.35em] font-black transition-all duration-300"
              >
                OPEN PHOTO VAULT — 72 PHOTOS
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. BEFORE / AFTER TRANSFORMATION SLIDER (keep as-is)
      ═══════════════════════════════════════════ */}
      <BeforeAfterSlider onOpenLightbox={onOpenLightbox} />

      {/* ═══════════════════════════════════════════
          9. SENSORY LIBRARY (keep as-is)
      ═══════════════════════════════════════════ */}
      <SensoryLibrary onOpenLightbox={onOpenLightbox} />

      {/* ═══════════════════════════════════════════
          10. TESTIMONIALS (keep as-is)
      ═══════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════
          11. SEO FAQ (keep as-is)
      ═══════════════════════════════════════════ */}
      <SeoFaqSection onOpenConsultation={onOpenConsultation} />

      {/* ═══════════════════════════════════════════
          12. INSTAGRAM SHOWCASE (keep as-is)
      ═══════════════════════════════════════════ */}
      <InstagramShowcase onOpenLightbox={onOpenLightbox} />

      {/* ═══════════════════════════════════════════
          13. STUDIO LOCATION (keep as-is)
      ═══════════════════════════════════════════ */}
      <StudioLocationSection onOpenConsultation={onOpenConsultation} />

      {/* ═══════════════════════════════════════════
          14. FINAL CTA — DRAMATIC CLOSING SECTION
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#0A0A0B] relative overflow-hidden">
        {/* Top gold hairline */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        {/* Dramatic background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Ghosted giant text backdrop */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[220px] sm:text-[320px] font-black leading-none whitespace-nowrap select-none"
            style={{ color: '#C9A84C', opacity: 0.025, letterSpacing: '-0.05em' }}
          >
            HYZIN
          </div>
          {/* Vertical gold thread left */}
          <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-gradient-to-b from-[#C9A84C]/20 via-[#C9A84C]/5 to-transparent" />
          {/* Vertical gold thread right */}
          <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-gradient-to-b from-[#C9A84C]/20 via-[#C9A84C]/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-40 text-center">

          {/* Section label */}
          <div className="flex items-center justify-center gap-5 mb-10">
            <span className="w-16 h-[1px] bg-[#C9A84C]/40" />
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] font-semibold">
              COMMENCEMENT
            </span>
            <span className="w-16 h-[1px] bg-[#C9A84C]/40" />
          </div>

          {/* Massive headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#F2EDE4] leading-[1.0] tracking-tight mb-4">
            HAVE A SPACE
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight mb-4">
            <span className="text-[#C9A84C]">IN MIND?</span>
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F2EDE4] leading-[1.1] tracking-tight mb-12">
            LET'S SCULPT IT TOGETHER.
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#8B7355] max-w-2xl mx-auto leading-relaxed mb-14">
            Accepting residential villas, apartments, and fabrication commissions across Kerala,
            Tamil Nadu, and Karnataka. Every project begins with a single conversation.
          </p>

          {/* Gold horizontal rule before buttons */}
          <div className="w-24 h-[1px] bg-[#C9A84C]/30 mx-auto mb-12" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary: Gold fill */}
            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-4 px-10 py-5 bg-[#C9A84C] hover:bg-[#F2EDE4] text-[#0A0A0B] text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300 shadow-[0_0_50px_rgba(201,168,76,0.2)] hover:shadow-[0_0_80px_rgba(201,168,76,0.4)]"
            >
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary: Ghost border */}
            <a
              href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-5 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#F2EDE4] hover:text-[#C9A84C] text-[10px] uppercase tracking-[0.35em] font-black transition-all duration-300"
            >
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP DIRECT
            </a>
          </div>

          {/* Bottom tagline */}
          <p className="mt-16 text-[9px] uppercase tracking-[0.5em] text-[#2A2A30] font-semibold">
            HYZIN INTERIOR · KERALA · TAMIL NADU · KARNATAKA · EST. EXCELLENCE
          </p>

        </div>

        {/* Bottom gold hairline */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </section>

    </div>
  );
}
