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
    <div className="animate-page-enter pt-12 pb-24 bg-[#5A3122]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#CFB291]/20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium mb-4">
            <span>COMMISSION DIALOGUE</span>
            <span className="w-12 h-[1px] bg-[#CFB291]/40"></span>
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#FCFCF6] font-extrabold leading-[1.12] tracking-tight">
            Reserve a Private <span className="text-[#CFB291]">Spatial Brief.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#CFB291] font-normal leading-relaxed">
            Tell us about your property, design ideas, and lifestyle requirements. We accept a limited number of commissions per quarter to ensure obsessive attention to detail.
          </p>
        </div>
      </section>

      {/* Main Consultation Form Component */}
      <ConsultationForm
        prefilledProject={prefilledProject}
        selectedRegion={selectedRegion}
      />

      {/* Interactive Studio Workshop & Google Maps Location */}
      <StudioLocationSection />

      {/* Regional Atelier Addresses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#CFB291]/20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium block mb-2">
            REGIONAL DESKS & CONTACTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#FCFCF6] font-bold tracking-tight">
            Direct Studio Desks Across South India
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#CFB291]">
            Official Email: <a href="mailto:Muhammedashad395@gmail.com" className="font-semibold text-[#CFB291] hover:text-[#FCFCF6] underline">Muhammedashad395@gmail.com</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#45241A] border border-[#CFB291]/20 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291] block mb-2">
                KERALA PRINCIPAL ATELIER & WORKSHOP
              </span>
              <h3 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight mb-2">Kerala Design & Fabrication</h3>
              <p className="text-xs text-[#CFB291]/80 font-medium mb-4">Coordinates: 10°40'35.2"N 76°40'52.1"E</p>
              <p className="text-sm text-[#CFB291] font-normal leading-relaxed mb-6">
                Full-scale natural stone displays, aluminium interior sections, modular cabinetry mockups, and acoustic lighting lab.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#CFB291]/20">
              <a href="tel:916282549008" className="text-xs font-semibold text-[#CFB291] hover:text-[#FCFCF6] flex items-center space-x-1">
                <span>+91 6282549008</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="mailto:Muhammedashad395@gmail.com" className="text-xs font-medium text-[#CFB291] hover:text-[#CFB291] flex items-center space-x-1">
                <Mail className="w-3 h-3 text-[#CFB291]" />
                <span>Muhammedashad395@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#FCFCF6] hover:text-[#CFB291] flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-[#CFB291]" />
                <span>Open Google Maps Location</span>
              </a>
            </div>
          </div>

          <div className="p-8 bg-[#45241A] border border-[#CFB291]/20 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291] block mb-2">
                KARNATAKA GUILD
              </span>
              <h3 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight mb-2">Bengaluru Private Cave</h3>
              <p className="text-xs text-[#CFB291]/80 font-medium mb-4">Lavelle Road / Indiranagar, Bengaluru</p>
              <p className="text-sm text-[#CFB291] font-normal leading-relaxed mb-6">
                Tailored for high-rise sky galleries, penthouses, and bespoke technology executive headquarters.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#CFB291]/20">
              <a href="tel:918848023041" className="text-xs font-semibold text-[#CFB291] hover:text-[#FCFCF6] flex items-center space-x-1">
                <span>+91 8848023041</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="mailto:Muhammedashad395@gmail.com" className="text-xs font-medium text-[#CFB291] hover:text-[#CFB291] flex items-center space-x-1">
                <Mail className="w-3 h-3 text-[#CFB291]" />
                <span>Muhammedashad395@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="p-8 bg-[#45241A] border border-[#CFB291]/20 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291] block mb-2">
                TAMIL NADU ATELIER
              </span>
              <h3 className="text-xl sm:text-2xl text-[#FCFCF6] font-bold tracking-tight mb-2">Chennai Modernist Guild</h3>
              <p className="text-xs text-[#CFB291]/80 font-medium mb-4">Boat Club Road / Poes Garden, Chennai</p>
              <p className="text-sm text-[#CFB291] font-normal leading-relaxed mb-6">
                Specializing in Chettinad courtyard modernism, ancestral manor preservation, and monolithic villas.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#CFB291]/20">
              <a href="tel:916282549008" className="text-xs font-semibold text-[#CFB291] hover:text-[#FCFCF6] flex items-center space-x-1">
                <span>+91 6282549008</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="mailto:Muhammedashad395@gmail.com" className="text-xs font-medium text-[#CFB291] hover:text-[#CFB291] flex items-center space-x-1">
                <Mail className="w-3 h-3 text-[#CFB291]" />
                <span>Muhammedashad395@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-medium block mb-2">
            FREQUENT INQUIRIES
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#FCFCF6] font-bold tracking-tight">
            Client Questions & Commission Protocol
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-[#45241A] border border-[#CFB291]/20 shadow-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between text-lg sm:text-xl font-semibold text-[#FCFCF6] hover:text-[#CFB291] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#CFB291]' : 'text-[#CFB291]'}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#CFB291] font-normal leading-relaxed border-t border-[#CFB291]/20 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
