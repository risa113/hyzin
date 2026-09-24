import { MapPin, Mail, Phone, MessageSquare, ExternalLink, Clock, Compass, ShieldCheck } from 'lucide-react';

export default function StudioLocationSection({ onOpenConsultation }) {
  const mapUrl = "https://maps.app.goo.gl/FNC3ixVjpjQppRfm9";
  const embedMapUrl = "https://maps.google.com/maps?q=10.6764307,76.6811311&hl=en&z=15&output=embed";

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0a0a0d] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a065]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#c5a065]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#c5a065] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#c5a065]" />
              <span>ATELIER & WORKSHOP LOCATION</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#faf6ee] font-bold tracking-tight leading-[1.15]">
              Visit Our Main Studio & <br className="hidden sm:inline" />
              <span className="text-[#d4b584]">Fabrication Workshop</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#bbb1a2] font-normal leading-relaxed">
              Experience material palettes, live fabrication mockups, aluminium interior profiles, and structural steel craftsmanship in person.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#d4b584] hover:bg-[#faedd0] text-[#0d0e10] text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg shadow-[#d4b584]/20"
            >
              <MapPin className="w-4 h-4 text-black" />
              <span>OPEN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>

        {/* Map & Location Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#14151a] shadow-2xl relative min-h-[380px] sm:min-h-[460px] flex flex-col">
            <div className="p-4 bg-[#111216] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#faf6ee]">
                  LIVE PINPOINT COORDINATES: 10°40'35.2"N 76°40'52.1"E
                </span>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#d4b584] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="flex-1 w-full h-full min-h-[320px] relative">
              <iframe
                title="HYZIN Interior Studio & Workshop Location"
                src={embedMapUrl}
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>

              {/* Float Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#0e0f14]/90 backdrop-blur-md border border-white/15 shadow-xl text-left pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4b584] block mb-1">
                  MAIN STUDIO & WORKSHOP
                </span>
                <p className="text-xs text-[#faf6ee] font-medium leading-snug">
                  HYZIN INTERIOR — Specialized Aluminium & Interior Fabrication Studio
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#25D366] font-medium">
                  <MapPin className="w-3 h-3 text-[#25D366]" />
                  <span>Verified Google Maps Location</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Contact & Verification Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#111216] border border-white/[0.08] p-6 sm:p-8 rounded-2xl shadow-xl">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a065]/15 border border-[#c5a065]/30 text-[#d4b584] text-[10px] uppercase tracking-wider font-semibold mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4b584]" /> Official Client Desk
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#faf6ee] tracking-tight mb-3">
                Connect Directly with Our Principals
              </h3>

              <p className="text-xs sm:text-sm text-[#aba395] leading-relaxed mb-6">
                Whether you wish to visit our fabrication workshop, inspect material samples, or coordinate a site consultation across South India, our studio desk is at your service.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4">
                
                {/* Official Studio Email */}
                <div className="p-3.5 bg-[#171821] border border-white/[0.06] rounded-xl flex items-start space-x-3.5 hover:border-[#d4b584]/40 transition-colors">
                  <div className="w-9 h-9 bg-[#20222e] rounded-lg flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7d786f] font-semibold block">
                      OFFICIAL STUDIO EMAIL
                    </span>
                    <a
                      href="mailto:Muhammedashad395@gmail.com"
                      className="text-sm font-semibold text-[#faf6ee] hover:text-[#d4b584] transition-colors break-all"
                    >
                      Muhammedashad395@gmail.com
                    </a>
                  </div>
                </div>

                {/* Studio Phone Line 1 */}
                <div className="p-3.5 bg-[#171821] border border-white/[0.06] rounded-xl flex items-start space-x-3.5 hover:border-[#d4b584]/40 transition-colors">
                  <div className="w-9 h-9 bg-[#20222e] rounded-lg flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7d786f] font-semibold block">
                      STUDIO LINE 1 (CALL / WHATSAPP)
                    </span>
                    <a
                      href="tel:916282549008"
                      className="text-sm font-semibold text-[#faf6ee] hover:text-[#d4b584] transition-colors"
                    >
                      +91 6282549008
                    </a>
                  </div>
                </div>

                {/* Studio Phone Line 2 */}
                <div className="p-3.5 bg-[#171821] border border-white/[0.06] rounded-xl flex items-start space-x-3.5 hover:border-[#d4b584]/40 transition-colors">
                  <div className="w-9 h-9 bg-[#20222e] rounded-lg flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7d786f] font-semibold block">
                      STUDIO LINE 2 (CALL / WHATSAPP)
                    </span>
                    <a
                      href="tel:918848023041"
                      className="text-sm font-semibold text-[#faf6ee] hover:text-[#d4b584] transition-colors"
                    >
                      +91 8848023041
                    </a>
                  </div>
                </div>

                {/* Hours & Visiting Policy */}
                <div className="p-3.5 bg-[#171821] border border-white/[0.06] rounded-xl flex items-start space-x-3.5">
                  <div className="w-9 h-9 bg-[#20222e] rounded-lg flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7d786f] font-semibold block">
                      STUDIO & WORKSHOP HOURS
                    </span>
                    <p className="text-xs text-[#faf6ee] font-medium">
                      Monday – Saturday: 9:00 AM – 7:30 PM
                    </p>
                    <p className="text-[11px] text-[#8e887e] mt-0.5">
                      Sunday by prior appointment for bespoke client briefs.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#1b1c22] border border-[#d4b584]/40 hover:border-[#d4b584] text-[#d4b584] text-xs uppercase tracking-wider font-semibold rounded-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I%20would%20like%20to%20visit%20your%20workshop%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs uppercase tracking-wider font-bold rounded-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
