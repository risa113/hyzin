import { useState } from 'react';
import { ChevronDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';
import StudioLocationSection from '../components/StudioLocationSection';

export default function ContactPage({ prefilledProject = '', selectedRegion = '' }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Which regions do you actively serve?",
      a: "HYZIN operates dedicated operational presences across Kerala (Kochi, Calicut, Trivandrum, Wayanad), Tamil Nadu (Chennai, Coimbatore, Madurai), and Karnataka (Bengaluru, Mysuru, Mangaluru). We supervise on-site execution directly with senior architects."
    },
    {
      q: "Do you undertake complete Turnkey Execution?",
      a: "Yes. Our turnkey service covers 100% of the project lifecycle: civil modifications, electrical/plumbing coordination, HVAC, custom joinery, stone procurement, acoustic insulation, and white-glove styling. You interact with a single principal project director."
    },
    {
      q: "Can you collaborate with our existing structural architect?",
      a: "Absolutely. We routinely collaborate with leading civil and landscape architects across South India during early blueprint stages to ensure electrical, plumbing, ceiling heights, and material transitions are harmonized before civil casting begins."
    },
    {
      q: "What is the typical timeline for an interior & fabrication project?",
      a: "Concept design and working drawings generally take 4–6 weeks. Turnkey execution varies based on scale: bespoke apartments (3–5 months), luxury residential villas and heritage manors (6–10 months). Every milestone is tied to strict timeline audits."
    },
    {
      q: "How can I book an on-site consultation?",
      a: "You can submit the consultation form below, or directly message our principal team on WhatsApp at +91 6282549008. We will schedule a site visit or studio meeting within 24 to 48 hours."
    }
  ];

  return (
    <div className="animate-page-enter bg-[#2B1C19]">

      {/* ── 01 PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

          {/* Chapter label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-12 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37]">
              Commission Dialogue
            </span>
            <span className="block w-12 h-[1px] bg-[#D4AF37]/50" />
          </div>

          {/* Giant editorial heading */}
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-[#FAF7F0] uppercase">
              Reserve a Private
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-[#D4AF37] uppercase mt-1">
              Spatial Brief.
            </h1>
          </div>

          {/* Subtext */}
          <p className="mt-10 max-w-2xl text-base sm:text-lg text-[#FAF7F0]/60 leading-relaxed font-light">
            Tell us about your property, design ideas, and lifestyle requirements.
            We accept a limited number of commissions per quarter to ensure obsessive
            attention to every material and spatial detail.
          </p>

          {/* Gold hairline divider */}
          <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent" />
        </div>
      </section>

      {/* ── 02 CONSULTATION FORM ───────────────────────────────────────── */}
      <section className="w-full bg-[#2B1C19] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-14">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37]">
              02 — Consultation Form
            </span>
            <span className="flex-1 h-[1px] bg-[#D4AF37]/20" />
          </div>

          {/* Form container with gold border */}
          <div className="border border-[#D4AF37]/20 bg-[#3E2723] p-8 sm:p-12 lg:p-16">
            <ConsultationForm
              prefilledProject={prefilledProject}
              selectedRegion={selectedRegion}
            />
          </div>
        </div>
      </section>

      {/* ── STUDIO LOCATION (embedded as-is) ──────────────────────────── */}
      <StudioLocationSection />

      {/* ── 03 REGIONAL ATELIERS ───────────────────────────────────────── */}
      <section className="w-full bg-[#3E2723] py-32 border-t border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37]">
              03 — Studio Desks
            </span>
            <span className="flex-1 h-[1px] bg-[#D4AF37]/20" />
          </div>

          {/* Section heading */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF7F0] uppercase leading-[1.0]">
              Direct Studio Desks<br />
              <span className="text-[#D4AF37]">Across South India.</span>
            </h2>
            <p className="mt-6 text-sm text-[#FAF7F0]/50 leading-relaxed font-light">
              Official Studio Email:{' '}
              <a
                href="mailto:Muhammedashad395@gmail.com"
                className="text-[#D4AF37] hover:text-[#FAF7F0] transition-colors duration-200 underline underline-offset-4"
              >
                Muhammedashad395@gmail.com
              </a>
            </p>
          </div>

          {/* Three sharp architectural cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4AF37]/20">

            {/* Kerala Card */}
            <div className="flex flex-col justify-between p-10 lg:p-12 border-r border-[#D4AF37]/20 bg-[#2B1C19] hover:bg-[#3E2723] transition-colors duration-300">
              <div>
                {/* Region label */}
                <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37] block mb-6">
                  Kerala Principal Atelier &amp; Workshop
                </span>
                {/* Location name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] tracking-tight uppercase mb-3">
                  Kerala Design<br />&amp; Fabrication
                </h3>
                {/* Coordinates */}
                <p className="text-[11px] tracking-[0.15em] text-[#D4AF37]/70 font-medium mb-6">
                  10°40′35.2″N &nbsp;76°40′52.1″E
                </p>
                {/* Description */}
                <p className="text-sm text-[#FAF7F0]/50 font-light leading-relaxed">
                  Full-scale natural stone displays, aluminium interior sections,
                  modular cabinetry mockups, and acoustic lighting laboratory.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-[1px] bg-[#D4AF37]/20 w-full" />

              {/* Contact links */}
              <div className="space-y-3">
                <a
                  href="tel:916282549008"
                  className="flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-[#D4AF37] hover:text-[#FAF7F0] transition-colors duration-200 uppercase"
                >
                  <span>+91 6282 549 008</span>
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-[11px] tracking-[0.08em] font-medium text-[#FAF7F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Mail className="w-3 h-3 flex-shrink-0 text-[#D4AF37]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[11px] tracking-[0.08em] font-semibold text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <MapPin className="w-3 h-3 flex-shrink-0 text-[#D4AF37]" />
                  <span>Open Google Maps Location</span>
                </a>
              </div>
            </div>

            {/* Karnataka Card */}
            <div className="flex flex-col justify-between p-10 lg:p-12 border-r border-[#D4AF37]/20 bg-[#2B1C19] hover:bg-[#3E2723] transition-colors duration-300">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37] block mb-6">
                  Karnataka Guild
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] tracking-tight uppercase mb-3">
                  Bengaluru<br />Private Cave
                </h3>
                <p className="text-[11px] tracking-[0.15em] text-[#D4AF37]/70 font-medium mb-6">
                  Lavelle Road &nbsp;/&nbsp; Indiranagar, Bengaluru
                </p>
                <p className="text-sm text-[#FAF7F0]/50 font-light leading-relaxed">
                  Tailored for high-rise sky galleries, penthouses, and bespoke
                  technology executive headquarters across the Silicon Valley of India.
                </p>
              </div>

              <div className="my-8 h-[1px] bg-[#D4AF37]/20 w-full" />

              <div className="space-y-3">
                <a
                  href="tel:918848023041"
                  className="flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-[#D4AF37] hover:text-[#FAF7F0] transition-colors duration-200 uppercase"
                >
                  <span>+91 8848 023 041</span>
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-[11px] tracking-[0.08em] font-medium text-[#FAF7F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Mail className="w-3 h-3 flex-shrink-0 text-[#D4AF37]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Tamil Nadu Card */}
            <div className="flex flex-col justify-between p-10 lg:p-12 bg-[#2B1C19] hover:bg-[#3E2723] transition-colors duration-300">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37] block mb-6">
                  Tamil Nadu Atelier
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F0] tracking-tight uppercase mb-3">
                  Chennai<br />Modernist Guild
                </h3>
                <p className="text-[11px] tracking-[0.15em] text-[#D4AF37]/70 font-medium mb-6">
                  Boat Club Road &nbsp;/&nbsp; Poes Garden, Chennai
                </p>
                <p className="text-sm text-[#FAF7F0]/50 font-light leading-relaxed">
                  Specializing in Chettinad courtyard modernism, ancestral manor
                  preservation, and monolithic villas along the Coromandel Coast.
                </p>
              </div>

              <div className="my-8 h-[1px] bg-[#D4AF37]/20 w-full" />

              <div className="space-y-3">
                <a
                  href="tel:916282549008"
                  className="flex items-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-[#D4AF37] hover:text-[#FAF7F0] transition-colors duration-200 uppercase"
                >
                  <span>+91 6282 549 008</span>
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-[11px] tracking-[0.08em] font-medium text-[#FAF7F0]/50 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Mail className="w-3 h-3 flex-shrink-0 text-[#D4AF37]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 FAQ ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#4E342E] py-32 border-t border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#D4AF37]">
              04 — Frequent Inquiries
            </span>
            <span className="flex-1 h-[1px] bg-[#D4AF37]/20" />
          </div>

          {/* Section heading */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF7F0] uppercase leading-[1.0]">
              Client Questions &amp;<br />
              <span className="text-[#D4AF37]">Commission Protocol.</span>
            </h2>
          </div>

          {/* Accordion list */}
          <div className="max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border-b border-[#D4AF37]/20 transition-colors duration-300 ${
                    index === 0 ? 'border-t border-[#D4AF37]/20' : ''
                  } ${isOpen ? 'bg-[#3E2723]' : 'bg-transparent'}`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-8 px-0 text-left flex items-start justify-between gap-6 group"
                  >
                    {/* Index + question */}
                    <div className="flex items-start gap-6">
                      <span className="text-[10px] tracking-[0.25em] text-[#D4AF37]/50 font-semibold mt-1 flex-shrink-0 pt-[3px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-[#FAF7F0] group-hover:text-[#D4AF37] transition-colors duration-200 leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 text-[#D4AF37]'
                          : 'text-[#D4AF37]/50 group-hover:text-[#D4AF37]'
                      }`}
                    />
                  </button>

                  {/* Answer panel */}
                  {isOpen && (
                    <div className="pb-8 pl-14 pr-10 animate-fadeIn">
                      {/* Gold left accent bar */}
                      <div className="border-l-2 border-[#D4AF37] pl-6">
                        <p className="text-sm sm:text-base text-[#D4AF37] font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
