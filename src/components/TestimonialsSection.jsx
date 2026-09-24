import { Quote, ShieldCheck, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#4E342E] border-t border-[#C9B29B]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DISCRETION & ENDORSEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-bold tracking-tight">
            Vetted by Discerning Patrons
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#C9B29B] font-normal leading-relaxed">
            What our clients say. Stories from families, executives, and visionaries across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>

        {/* 3–4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 bg-[#3E2723] border border-[#C9B29B]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between reveal-up rounded-sm shadow-lg"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center space-x-1 text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-3" />

                <p className="text-base text-[#FAF7F0] font-normal leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#C9B29B]/20">
                <span className="font-semibold text-sm text-[#FAF7F0] block">
                  {item.clientName}
                </span>
                <span className="text-xs text-[#C9B29B] block font-medium mt-0.5">
                  {item.location}
                </span>
                <span className="text-[10px] text-[#D4AF37] block font-semibold mt-1 uppercase tracking-wider">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Discretion Assurance */}
        <div className="mt-12 text-center text-xs text-[#C9B29B]/60 font-medium uppercase tracking-widest">
          PATRON PRIVACY HONORED • RESIDENTIAL COMMISSION ARCHIVES MAINTAINED UNDER STRICT CLIENT CONFIDENTIALITY
        </div>

      </div>
    </section>
  );
}
