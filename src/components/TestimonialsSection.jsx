import { Quote, ShieldCheck, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#09090c] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DISCRETION & ENDORSEMENT</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight">
            Vetted by Discerning Patrons
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a8a195] font-light leading-relaxed">
            What our clients say. Stories from families, executives, and visionaries across Kerala, Tamil Nadu, and Karnataka.
          </p>
        </div>

        {/* 3–4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#121317] border border-white/[0.08] hover:border-[#d4b584]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-[#d4b584] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4b584]" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#c5a065]/40 mb-3" />

                <p className="font-serif text-lg text-[#f2ece2] italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-medium text-sm text-[#faf6ee] block">
                  {item.clientName}
                </span>
                <span className="text-xs text-[#a39f97] block font-mono mt-0.5">
                  {item.location}
                </span>
                <span className="text-[10px] text-[#c5a065] block font-mono mt-1 uppercase tracking-wider">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Discretion Assurance */}
        <div className="mt-12 text-center text-xs text-[#6e685e] font-mono uppercase tracking-widest">
          PATRON PRIVACY HONORED • RESIDENTIAL COMMISSION ARCHIVES MAINTAINED UNDER STRICT CLIENT CONFIDENTIALITY
        </div>

      </div>
    </section>
  );
}
