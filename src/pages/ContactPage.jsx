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
    <div className="animate-page-enter bg-[#3A2117]">

      {/* ── 01 PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="w-full bg-[#3A2117] pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-16 border-b border-[#C4A174]/20">
        <div className="max-w-[1400px] mx-auto">

          {/* Chapter label */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="block w-8 sm:w-12 h-[1px] bg-[#C4A174]/50" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C4A174]">
              Commission Dialogue
            </span>
            <span className="block w-8 sm:w-12 h-[1px] bg-[#C4A174]/50" />
          </div>

          {/* Editorial heading */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#EDE3D2] uppercase">
              Reserve a Private
            </h1>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#C4A174] uppercase mt-1">
              Spatial Brief.
            </h1>
          </div>

          {/* Subtext */}
          <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base text-[#EDE3D2]/70 leading-relaxed font-light">
            Tell us about your property, design ideas, and lifestyle requirements.
            We accept a limited number of commissions per quarter to ensure obsessive
            attention to every material and spatial detail.
          </p>

          {/* Gold hairline divider */}
          <div className="mt-10 sm:mt-12 w-full h-[1px] bg-gradient-to-r from-[#C4A174]/40 via-[#C4A174]/10 to-transparent" />
        </div>
      </section>

      {/* ── 02 CONSULTATION FORM ───────────────────────────────────────── */}
      <ConsultationForm
        prefilledProject={prefilledProject}
        selectedRegion={selectedRegion}
      />

      {/* ── STUDIO LOCATION (embedded as-is) ──────────────────────────── */}
      <StudioLocationSection />

      {/* ── 03 REGIONAL ATELIERS ───────────────────────────────────────── */}
      <section className="w-full bg-[#4A2E22] py-16 sm:py-24 lg:py-32 border-t border-[#C4A174]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#C4A174]">
              03 — Studio Desks
            </span>
            <span className="flex-1 h-[1px] bg-[#C4A174]/20" />
          </div>

          {/* Section heading */}
          <div className="max-w-2xl mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#EDE3D2] uppercase leading-[1.05]">
              Direct Studio Desks<br />
              <span className="text-[#C4A174]">Across South India.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm text-[#EDE3D2]/60 leading-relaxed font-light">
              Official Studio Email:{' '}
              <a
                href="mailto:Muhammedashad395@gmail.com"
                className="text-[#C4A174] hover:text-[#EDE3D2] transition-colors duration-200 underline underline-offset-4 break-words"
              >
                Muhammedashad395@gmail.com
              </a>
            </p>
          </div>

          {/* Three sharp architectural cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#C4A174]/20">

            {/* Kerala Card */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#C4A174]/20 bg-[#3A2117] hover:bg-[#4A2E22] transition-colors duration-300">
              <div>
                {/* Region label */}
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C4A174] block mb-4 sm:mb-6">
                  Kerala Principal Atelier &amp; Workshop
                </span>
                {/* Location name */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#EDE3D2] tracking-tight uppercase mb-2 sm:mb-3">
                  Kerala Design<br className="hidden sm:inline" /> &amp; Fabrication
                </h3>
                {/* Coordinates */}
                <p className="text-[11px] tracking-[0.15em] text-[#C4A174]/70 font-medium mb-4 sm:mb-6">
                  10°40′35.2″N &nbsp;76°40′52.1″E
                </p>
                {/* Description */}
                <p className="text-sm text-[#EDE3D2]/60 font-light leading-relaxed">
                  Full-scale natural stone displays, aluminium interior sections,
                  modular cabinetry mockups, and acoustic lighting laboratory.
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 sm:my-8 h-[1px] bg-[#C4A174]/20 w-full" />

              {/* Contact links */}
              <div className="space-y-3">
                <a
                  href="tel:916282549008"
                  className="flex items-center gap-2 text-xs tracking-[0.12em] font-semibold text-[#C4A174] hover:text-[#EDE3D2] transition-colors duration-200 uppercase"
                >
                  <span>+91 6282 549 008</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] font-medium text-[#EDE3D2]/70 hover:text-[#C4A174] transition-colors duration-200 break-words"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#C4A174]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] font-semibold text-[#EDE3D2]/80 hover:text-[#C4A174] transition-colors duration-200"
                >
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#C4A174]" />
                  <span>Open Google Maps Location</span>
                </a>
              </div>
            </div>

            {/* Karnataka Card */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#C4A174]/20 bg-[#3A2117] hover:bg-[#4A2E22] transition-colors duration-300">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C4A174] block mb-4 sm:mb-6">
                  Karnataka Guild
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#EDE3D2] tracking-tight uppercase mb-2 sm:mb-3">
                  Bengaluru<br className="hidden sm:inline" /> Private Atelier
                </h3>
                <p className="text-[11px] tracking-[0.15em] text-[#C4A174]/70 font-medium mb-4 sm:mb-6">
                  Lavelle Road &nbsp;/&nbsp; Indiranagar, Bengaluru
                </p>
                <p className="text-sm text-[#EDE3D2]/60 font-light leading-relaxed">
                  Tailored for high-rise sky galleries, penthouses, and bespoke
                  technology executive residences across Bengaluru.
                </p>
              </div>

              <div className="my-6 sm:my-8 h-[1px] bg-[#C4A174]/20 w-full" />

              <div className="space-y-3">
                <a
                  href="tel:918848023041"
                  className="flex items-center gap-2 text-xs tracking-[0.12em] font-semibold text-[#C4A174] hover:text-[#EDE3D2] transition-colors duration-200 uppercase"
                >
                  <span>+91 8848 023 041</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] font-medium text-[#EDE3D2]/70 hover:text-[#C4A174] transition-colors duration-200 break-words"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#C4A174]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Tamil Nadu Card */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#3A2117] hover:bg-[#4A2E22] transition-colors duration-300">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C4A174] block mb-4 sm:mb-6">
                  Tamil Nadu Atelier
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#EDE3D2] tracking-tight uppercase mb-2 sm:mb-3">
                  Chennai<br className="hidden sm:inline" /> Modernist Guild
                </h3>
                <p className="text-[11px] tracking-[0.15em] text-[#C4A174]/70 font-medium mb-4 sm:mb-6">
                  Boat Club Road &nbsp;/&nbsp; Poes Garden, Chennai
                </p>
                <p className="text-sm text-[#EDE3D2]/60 font-light leading-relaxed">
                  Specializing in Chettinad courtyard modernism, ancestral manor
                  preservation, and monolithic villas along the Coromandel Coast.
                </p>
              </div>

              <div className="my-6 sm:my-8 h-[1px] bg-[#C4A174]/20 w-full" />

              <div className="space-y-3">
                <a
                  href="tel:916282549008"
                  className="flex items-center gap-2 text-xs tracking-[0.12em] font-semibold text-[#C4A174] hover:text-[#EDE3D2] transition-colors duration-200 uppercase"
                >
                  <span>+91 6282 549 008</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
                <a
                  href="mailto:Muhammedashad395@gmail.com"
                  className="flex items-center gap-2 text-xs tracking-[0.08em] font-medium text-[#EDE3D2]/70 hover:text-[#C4A174] transition-colors duration-200 break-words"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#C4A174]" />
                  <span>Muhammedashad395@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 04 FAQ ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#3A2117] py-16 sm:py-24 lg:py-32 border-t border-[#C4A174]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">

          {/* Section label */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase font-semibold text-[#C4A174]">
              04 — Frequent Inquiries
            </span>
            <span className="flex-1 h-[1px] bg-[#C4A174]/20" />
          </div>

          {/* Section heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#EDE3D2] uppercase leading-[1.05]">
              Client Questions &amp;<br />
              <span className="text-[#C4A174]">Commission Protocol.</span>
            </h2>
          </div>

          {/* Accordion list */}
          <div className="max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border-b border-[#C4A174]/20 transition-colors duration-300 ${
                    index === 0 ? 'border-t border-[#C4A174]/20' : ''
                  } ${isOpen ? 'bg-[#4A2E22]' : 'bg-transparent'}`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-5 sm:py-7 px-3 sm:px-4 text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    {/* Index + question */}
                    <div className="flex items-start gap-3 sm:gap-5">
                      <span className="text-[10px] tracking-[0.25em] text-[#C4A174]/60 font-semibold mt-0.5 flex-shrink-0 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#EDE3D2] group-hover:text-[#C4A174] transition-colors duration-200 leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 text-[#C4A174]'
                          : 'text-[#C4A174]/50 group-hover:text-[#C4A174]'
                      }`}
                    />
                  </button>

                  {/* Answer panel */}
                  {isOpen && (
                    <div className="pb-6 sm:pb-8 pl-8 sm:pl-14 pr-4 sm:pr-8 animate-fadeIn">
                      {/* Gold left accent bar */}
                      <div className="border-l-2 border-[#C4A174] pl-4 sm:pl-6">
                        <p className="text-sm sm:text-base text-[#EDE3D2]/80 font-light leading-relaxed">
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
