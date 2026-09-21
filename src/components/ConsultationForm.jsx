import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationForm({ prefilledProject = '', selectedRegion = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: selectedRegion || 'Kerala',
    projectType: prefilledProject ? `Commission for: ${prefilledProject}` : 'Luxury Residential Villa',
    budget: '₹50 Lakhs – ₹1 Crore',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '₹30 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1 Crore',
    '₹1 Crore – ₹2.5 Crores',
    '₹2.5 Crores+'
  ];

  const projectTypes = [
    'Luxury Residential Villa',
    'Penthouse / Apartment Interior',
    'Ancestral / Heritage Manor',
    'Full Turnkey Execution',
    'Modular Kitchen & Joinery',
    'Commercial HQ / Hospitality'
  ];

  const regions = [
    'Kerala (Kochi, Calicut, Trivandrum, Wayanad)',
    'Tamil Nadu (Chennai, Coimbatore, Madurai)',
    'Karnataka (Bengaluru, Mysuru, Mangaluru)'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4b584', '#c5a065', '#ffffff']
      });
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*HYZIN INTERIOR — Consultation Brief*\n\n` +
      `*Patron Name:* ${formData.name || 'Private Client'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Region / State:* ${formData.region}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      `*Notes:* ${formData.message || 'Interested in initiating a private spatial consultation.'}`
    );
    window.open(`https://wa.me/916282549008?text=${text}`, '_blank');
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

            {/* Direct Channel Badges */}
            <div className="mt-10 space-y-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    DIRECT STUDIO LINE
                  </span>
                  <a
                    href="tel:6282549008"
                    className="font-serif text-2xl text-[#faf6ee] hover:text-[#d4b584] transition-colors"
                  >
                    +91 6282549008
                  </a>
                  <p className="text-xs text-[#a39f97] mt-0.5">
                    Available Mon – Sat, 9:30 AM – 7:30 PM IST
                  </p>
                </div>
              </div>

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
                    Kochi • Bengaluru • Chennai • Calicut • Coimbatore
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#14151a] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#d4b584]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#7d786f] block">
                    INSTANT WHATSAPP DIRECT
                  </span>
                  <a
                    href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20design%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-[#d4b584] hover:underline flex items-center space-x-1 mt-0.5"
                  >
                    <span>Connect with Principal Architect on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="mt-8 p-4 bg-[#111216] border border-white/[0.04] text-[11px] text-[#7d786f] font-mono leading-relaxed">
              We respect your confidentiality. Client drawings and architectural details are handled under strict non-disclosure.
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7 bg-[#111216] border border-white/[0.08] p-8 sm:p-12 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#d4b584]/10 border border-[#d4b584] text-[#d4b584] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#faf6ee] mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#b5aca0] font-light max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <span className="text-[#faf6ee] font-medium">{formData.name || 'Patron'}</span>. Our principal studio lead for {formData.region} will review your spatial brief and reach out within 24 hours.
                </p>

                <div className="p-6 bg-[#16181f] border border-[#d4b584]/30 max-w-md mx-auto text-left mb-8">
                  <div className="text-xs font-mono text-[#d4b584] uppercase tracking-wider mb-2">
                    FAST-TRACK YOUR COMMENCEMENT:
                  </div>
                  <p className="text-xs text-[#ded8cd] font-light mb-4">
                    Send your project brief directly to the principal architect’s private WhatsApp for immediate review:
                  </p>
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>DISPATCH BRIEF ON WHATSAPP (+91 6282549008)</span>
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
                    SPATIAL INQUIRY FORM
                  </span>
                  <span className="text-[10px] text-[#7a746a] font-mono">
                    Direct Studio Desk
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

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#a8a195] mb-2">
                    Project Typology
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
                    placeholder="Describe your site, approximate square footage, timeline, or special architectural requirements..."
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 focus:border-[#d4b584] text-[#faf6ee] text-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-[#d4b584] hover:bg-[#faf0dc] text-[#0c0d10] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_4px_25px_rgba(212,181,132,0.25)] flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'PROCESSING BRIEF...' : 'SEND ENQUIRY'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-4 px-6 border border-emerald-600/60 bg-emerald-950/20 hover:bg-emerald-900/40 text-emerald-400 text-xs uppercase tracking-[0.2em] font-mono transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP DIRECT</span>
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
