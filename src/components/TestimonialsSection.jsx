import { Quote, ShieldCheck, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#3A2117] border-t border-[#C4A174]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C4A174] font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DISCRETION & ENDORSEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl text-[#EDE3D2] font-bold tracking-tight">
            Vetted by Discerning Patrons
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#C4A174] font-normal leading-relaxed">
            What our clients say. Stories from families, executives, and visionaries across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>

        {/* 3–4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-8 bg-[#4A2E22] border border-[#C4A174]/20 hover:border-[#C4A174]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between rounded-sm shadow-lg"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center space-x-1 text-[#C4A174] mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C4A174] text-[#C4A174]" />
                  ))}
                </div>

                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#C4A174]/40 mb-2.5 sm:mb-3" />

                <p className="text-xs sm:text-base text-[#EDE3D2] font-normal leading-relaxed mb-4 sm:mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#C4A174]/20">
                <span className="font-semibold text-xs sm:text-sm text-[#EDE3D2] block">
                  {item.clientName}
                </span>
                <span className="text-[11px] sm:text-xs text-[#C4A174] block font-medium mt-0.5">
                  {item.location}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#C4A174] block font-semibold mt-1 uppercase tracking-wider">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Discretion Assurance */}
        <div className="mt-8 sm:mt-12 text-center text-[10px] sm:text-xs text-[#C4A174]/60 font-medium uppercase tracking-wider sm:tracking-widest">
          PATRON PRIVACY HONORED • RESIDENTIAL COMMISSION ARCHIVES MAINTAINED UNDER STRICT CLIENT CONFIDENTIALITY
        </div>

      </div>
    </section>
  );
}
