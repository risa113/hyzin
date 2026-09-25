import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function SeoFaqSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What makes HYZIN INTERIOR the top choice for interior design in Kerala & South India?",
      a: "HYZIN INTERIOR combines in-house precision factory fabrication with bespoke interior architecture. We provide 10 specialized services—ranging from rose gold acrylic kitchen cabinets and wall drop wardrobes to 100% waterproof aluminium cabinetry and SS 304 glass balustrade staircases—servicing residences across Kerala, Tamil Nadu, and Karnataka."
    },
    {
      q: "What is a 'Wall Drop' wardrobe and why is it recommended for modern bedrooms?",
      a: "A Wall Drop wardrobe is a custom floor-to-ceiling recessed wardrobe suite engineered with vertical gold trim profiles, hidden display niches, and overhead hydraulic loft storage. It maximizes vertical bedroom height while maintaining a sleek, flush aesthetic without bulky handles."
    },
    {
      q: "Why choose Aluminium Interiors for kitchens and utility areas in Kerala?",
      a: "Kerala's tropical climate demands humidity-resistant materials. Our powder-coated and black anodized aluminium interior cabinets are 100% waterproof, zero-termite, fire-rated, and will never swell or decay over decades of heavy kitchen use."
    },
    {
      q: "How does the 3D Interactive House Model consultation process work?",
      a: "Our clients can inspect their prospective home in full 3D directly on our website! You can rotate the structure 360°, preview lighting atmospheres (Day Sun, 2700K Cove Light, Blueprint Mode), and examine real client hotspots before site execution begins."
    },
    {
      q: "What locations across Kerala, Tamil Nadu, and Karnataka do you serve?",
      a: "We execute turnkey interior projects and fabrication commissions in Kochi, Calicut, Trivandrum, Thrissur, Ernakulam, Kottayam, Palakkad, Wayanad, Malappuram, Kannur, Coimbatore, Chennai, and Bengaluru."
    },
    {
      q: "How can I request a site visit or instant cost estimate for my home?",
      a: "Simply share your architectural plan or inspiration photos with our studio team via WhatsApp (+91 6282549008) or Instagram DM (@hyzin.interior). We provide itemized material specifications and transparent BOQ estimates within 24 hours."
    }
  ];

  return (
    <section className="py-24 bg-[#2B1C19] border-t border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EXPERT INTERIOR & FABRICATION KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-bold tracking-tight">
            FREQUENTLY ASKED <span className="text-[#D4AF37] font-bold">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D4AF37] font-normal leading-relaxed">
            Everything you need to know about material selection, installation timelines, and bespoke fabrication for your residential project in Kerala.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#3E2723] border-[#D4AF37]/50 shadow-xl'
                    : 'bg-[#3E2723]/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg sm:text-xl text-[#FAF7F0] font-semibold tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-[#D4AF37] text-[#2B1C19] rotate-180' : 'bg-[#2B1C19] text-[#FAF7F0]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#D4AF37] font-normal leading-relaxed border-t border-[#D4AF37]/20 pt-4 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Badges & Keyword Strip */}
        <div className="mt-16 pt-12 border-t border-[#D4AF37]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#3E2723] border border-[#D4AF37]/20 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <h4 className="font-mono text-sm text-[#FAF7F0] font-bold uppercase tracking-wider">Turnkey Execution</h4>
            <p className="text-xs text-[#D4AF37] mt-1 font-normal">From raw site framing to white-glove handover in 35 days.</p>
          </div>

          <div className="p-6 bg-[#3E2723] border border-[#D4AF37]/20 rounded-xl">
            <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <h4 className="font-mono text-sm text-[#FAF7F0] font-bold uppercase tracking-wider">10-Year Craft Warranty</h4>
            <p className="text-xs text-[#D4AF37] mt-1 font-normal">Guaranteed hardware, moisture protection, and structural integrity.</p>
          </div>

          <div className="p-6 bg-[#3E2723] border border-[#D4AF37]/20 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-sm text-[#FAF7F0] font-bold uppercase tracking-wider">Ready to Start?</h4>
              <p className="text-xs text-[#D4AF37] mt-1 font-normal">Book your 3D consultation & BOQ cost estimate today.</p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-4 py-2.5 px-4 bg-[#D4AF37] hover:bg-[#FAF7F0] text-[#2B1C19] text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>RESERVE BRIEF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
