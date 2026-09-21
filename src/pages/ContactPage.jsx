import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

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
      q: "What is the typical timeline for an architectural interior?",
      a: "Concept design and working drawings generally take 4–6 weeks. Turnkey execution varies based on scale: bespoke apartments (3–5 months), luxury residential villas and heritage manors (6–10 months). Every milestone is tied to strict timeline audits."
    },
    {
      q: "How can I book an on-site consultation?",
      a: "You can submit the consultation form below, or directly message our principal architect on WhatsApp at +91 6282549008. We will schedule a site visit or studio meeting within 24 to 48 hours."
    }
  ];

  return (
    <div className="animate-page-enter pt-12 pb-24 bg-[#FAF8F5]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-black/[0.08]">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono mb-4">
            <span>COMMISSION DIALOGUE</span>
            <span className="w-12 h-[1px] bg-[#9E8255]/40"></span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl text-[#1E1D1B] font-normal leading-[1.08] tracking-tight">
            Reserve a Private <span className="italic text-[#9E8255]">Spatial Brief.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#524D46] font-light leading-relaxed">
            Tell us about your property, architectural drawings, and lifestyle requirements. We accept a limited number of commissions per quarter to ensure obsessive attention to detail.
          </p>
        </div>
      </section>

      {/* Main Consultation Form Component */}
      <ConsultationForm
        prefilledProject={prefilledProject}
        selectedRegion={selectedRegion}
      />

      {/* Regional Atelier Addresses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black/[0.08]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
            REGIONAL DESKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
            Three Studios Across South India
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-black/10 shadow-sm">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-2">
              KERALA PRINCIPAL ATELIER
            </span>
            <h3 className="font-serif text-2xl text-[#1E1D1B] mb-2">Kochi Materials Studio</h3>
            <p className="text-xs text-[#736D66] font-mono mb-4">Panampilly Nagar / Marine Drive, Kochi</p>
            <p className="text-sm text-[#524D46] font-light leading-relaxed mb-6">
              Full-scale natural stone displays, Nilambur aged teak samples, and acoustic lighting lab.
            </p>
            <a href="tel:6282549008" className="text-xs font-mono text-[#9E8255] hover:underline flex items-center space-x-1">
              <span>+91 6282549008</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="p-8 bg-white border border-black/10 shadow-sm">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-2">
              KARNATAKA GUILD
            </span>
            <h3 className="font-serif text-2xl text-[#1E1D1B] mb-2">Bengaluru Private Cave</h3>
            <p className="text-xs text-[#736D66] font-mono mb-4">Lavelle Road / Indiranagar, Bengaluru</p>
            <p className="text-sm text-[#524D46] font-light leading-relaxed mb-6">
              Tailored for high-rise sky galleries, penthouses, and bespoke technology executive headquarters.
            </p>
            <a href="tel:6282549008" className="text-xs font-mono text-[#9E8255] hover:underline flex items-center space-x-1">
              <span>+91 6282549008</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="p-8 bg-white border border-black/10 shadow-sm">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E8255] block mb-2">
              TAMIL NADU ATELIER
            </span>
            <h3 className="font-serif text-2xl text-[#1E1D1B] mb-2">Chennai Modernist Guild</h3>
            <p className="text-xs text-[#736D66] font-mono mb-4">Boat Club Road / Poes Garden, Chennai</p>
            <p className="text-sm text-[#524D46] font-light leading-relaxed mb-6">
              Specializing in Chettinad courtyard modernism, ancestral manor preservation, and monolithic villas.
            </p>
            <a href="tel:6282549008" className="text-xs font-mono text-[#9E8255] hover:underline flex items-center space-x-1">
              <span>+91 6282549008</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#9E8255] font-mono block mb-2">
            FREQUENT INQUIRIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B]">
            Client Questions & Commission Protocol
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-black/10 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between font-serif text-xl text-[#1E1D1B] hover:text-[#9E8255] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9E8255]' : 'text-stone-400'}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#524D46] font-light leading-relaxed border-t border-black/5 pt-4 animate-fadeIn">
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
