import { useState } from 'react';
import { Send, Phone, MapPin, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationForm({ prefilledProject = '', selectedRegion = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: selectedRegion || 'Kerala',
    projectType: prefilledProject ? `Commission for: ${prefilledProject}` : 'Aluminium Interior',
    budget: '₹50 Lakhs – ₹1 Crore',
    message: '',
    selectedWhatsApp: '916282549008' // Default to Line 1
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '₹15 Lakhs – ₹30 Lakhs',
    '₹30 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1 Crore',
    '₹1 Crore+'
  ];

  const projectTypes = [
    'Aluminium Interior',
    'Wall Drop (Wardrobes & Closets)',
    'Kitchen Cabinet (Modular Kitchen)',
    'Loft Conversion & Storage',
    'Custom Accessories & Fixtures',
    'Ceiling Works (Gypsum & Grid)',
    'Wall Paneling & Fluted Surfaces',
    'Steel Doors & Security Systems',
    'Steel Fabrication & Railings',
    'MS Fabrication & Heavy Framing',
    'Full Turnkey Residential Villa',
    'Full Turnkey Apartment / Commercial'
  ];

  const regions = [
    'Kerala (Kochi, Calicut, Trivandrum, Thrissur, Wayanad)',
    'Tamil Nadu (Chennai, Coimbatore, Madurai)',
    'Karnataka (Bengaluru, Mysuru, Mangaluru)'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppText = () => {
    return encodeURIComponent(
      `*HYZIN INTERIOR — Consultation Brief*\n\n` +
      `*Patron Name:* ${formData.name || 'Client'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Region / Location:* ${formData.region}\n` +
      `*Service Required:* ${formData.projectType}\n` +
      `*Budget Framework:* ${formData.budget}\n` +
      `*Project Notes:* ${formData.message || 'Interested in initiating a private spatial consultation.'}`
    );
  };

  const sendToWhatsAppNumber = (number) => {
    const text = generateWhatsAppText();
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4b584', '#c5a065', '#ffffff']
    });

    // DIRECTLY open WhatsApp on form submit to chosen number!
    sendToWhatsAppNumber(formData.selectedWhatsApp);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Studio Desk & Direct Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] text-[#c5a065] font-mono mb-3">
              <span>05 / INITIATION</span>
              <span className="w-8 h-[1px] bg-[#c5a065]/40"></span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#faf6ee] font-normal tracking-tight leading-[1.1]">
              Reserve a Private Spatial Consultation.
            </h2>

            <p className="mt-6 text-base text-[#bbb1a2] font-light leading-relaxed">
              Tell us about your space, your ideas, and what you envision. Let’s turn them into an interior that feels truly yours.
            </p>

            {/* Direct Channel Badges with Both Numbers */}
            <div className="mt-10 space-y-6 pt-6 border-t border-white/[0.08]">
              {/* Studio Line 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    STUDIO LINE 1 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:916282549008"
                    className="font-serif text-xl sm:text-2xl text-[#faf6ee] hover:text-[#d4b584] transition-colors"
                  >
                    +91 6282549008
                  </a>
                </div>
              </div>

              {/* Studio Line 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    STUDIO LINE 2 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:918848023041"
                    className="font-serif text-xl sm:text-2xl text-[#faf6ee] hover:text-[#d4b584] transition-colors"
                  >
                    +91 8848023041
                  </a>
                </div>
              </div>

              {/* Regional Coverage */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    REGIONAL COVERAGE
                  </span>
                  <span className="font-serif text-lg text-[#faf6ee] block">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                  <p className="text-xs text-[#a39f97] mt-0.5">
                    Kochi • Calicut • Trivandrum • Bengaluru • Chennai
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Quick Links */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    INSTANT WHATSAPP DIRECT
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-[#d4b584] hover:underline"
                    >
                      <span>Line 1 (+91 6282549008)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <a
                      href="https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-[#d4b584] hover:underline"
                    >
                      <span>Line 2 (+91 8848023041)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality note */}
            <div className="mt-8 p-4 bg-[#111216] border border-white/[0.04] text-[11px] text-[#7d786f] font-mono leading-relaxed">
              We respect your confidentiality. Client drawings and project details are handled under strict non-disclosure.
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7 bg-[#111216] border border-white/[0.08] p-8 sm:p-12 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#faf6ee] mb-2">
                  Sending Brief to WhatsApp
                </h3>
                <p className="text-sm text-[#b5aca0] font-light max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <span className="text-[#faf6ee] font-medium">{formData.name || 'Patron'}</span>. Your spatial consultation brief has been formatted and opened in WhatsApp.
                </p>

                <div className="p-6 bg-[#16181f] border border-[#d4b584]/30 max-w-md mx-auto text-left mb-8 space-y-3">
                  <div className="text-xs font-mono text-[#d4b584] uppercase tracking-wider mb-2">
                    DISPATCH TO EITHER WHATSAPP LINE:
                  </div>
                  
                  <button
                    onClick={() => sendToWhatsAppNumber('916282549008')}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>SEND TO WHATSAPP LINE 1 (+91 6282549008)</span>
                  </button>

                  <button
                    onClick={() => sendToWhatsAppNumber('918848023041')}
                    className="w-full py-3 bg-[#1E1D1B] border border-[#25D366] hover:bg-[#25D366]/20 text-[#25D366] font-semibold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SEND TO WHATSAPP LINE 2 (+91 8848023041)</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#8e887e] hover:text-[#d4b584] uppercase tracking-widest font-mono"
                >
                  ← Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-white/[0.06] pb-4 mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#d4b584]">
                    DIRECT WHATSAPP CONSULTATION FORM
                  </span>
                  <span className="text-[10px] text-[#25D366] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    Direct WhatsApp Dispatch
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. K. Mathew"
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Region */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Project Location / State *
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-[#0a0a0c] text-white">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Typology / 10 Services */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Service Required *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0a0a0c] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Anticipated Budget Framework
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`py-2.5 px-2 text-[10px] font-mono uppercase tracking-wider text-center border transition-all ${
                          formData.budget === opt
                            ? 'bg-[#d4b584] text-[#0a0a0c] font-semibold border-[#d4b584]'
                            : 'bg-[#0a0a0c] text-[#a39f97] border-white/10 hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Project Vision / Spatial Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site, approximate square footage, timeline, or special interior/fabrication requirements..."
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Select WhatsApp Line Choice */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Destination WhatsApp Number
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '916282549008' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all ${
                        formData.selectedWhatsApp === '916282549008'
                          ? 'bg-[#25D366]/15 border-[#25D366] text-white'
                          : 'bg-[#0a0a0c] border-white/10 text-[#a39f97] hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs">
                        <span className="font-bold block text-white">Line 1: +91 6282549008</span>
                        <span className="text-[10px] text-[#a39f97] font-mono">Primary Studio Desk</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        formData.selectedWhatsApp === '916282549008' ? 'border-[#25D366] bg-[#25D366]' : 'border-white/30'
                      }`}></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '918848023041' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all ${
                        formData.selectedWhatsApp === '918848023041'
                          ? 'bg-[#25D366]/15 border-[#25D366] text-white'
                          : 'bg-[#0a0a0c] border-white/10 text-[#a39f97] hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs">
                        <span className="font-bold block text-white">Line 2: +91 8848023041</span>
                        <span className="text-[10px] text-[#a39f97] font-mono">Direct Lead Line</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        formData.selectedWhatsApp === '918848023041' ? 'border-[#25D366] bg-[#25D366]' : 'border-white/30'
                      }`}></span>
                    </button>
                  </div>
                </div>

                {/* Main Submit & Dual WhatsApp Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.3)] flex items-center justify-center space-x-2 rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>SEND BRIEF TO WHATSAPP DIRECT</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
