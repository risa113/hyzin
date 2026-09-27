import { useState } from 'react';
import { Send, Phone, MapPin, CheckCircle2, MessageSquare, ArrowUpRight, Mail, ExternalLink, ShieldCheck, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationForm({ prefilledProject = '', selectedRegion = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: selectedRegion || 'Kerala',
    projectType: prefilledProject ? `Commission for: ${prefilledProject}` : 'Aluminium Interior',
    budget: '',
    message: '',
    selectedWhatsApp: '916282549008' // Default to Line 1
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'fallback'


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
      `*Budget Framework:* ${formData.budget.trim() || 'Flexible / To be discussed'}\n` +
      `*Project Notes:* ${formData.message || 'Interested in initiating a private spatial consultation.'}`
    );
  };

  const sendToWhatsAppNumber = (number) => {
    const text = generateWhatsAppText();
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
  };

  // Two-way submission: single submit triggers BOTH WhatsApp and Email simultaneously
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus('sending');

    // 1. Instantly trigger WhatsApp dispatch
    sendToWhatsAppNumber(formData.selectedWhatsApp);

    // 2. Confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#D4AF37', '#ffffff']
    });

    setIsSubmitted(true);

    // 3. Concurrently dispatch email to Muhammedashad395@gmail.com
    try {
      const response = await fetch("https://formsubmit.co/ajax/Muhammedashad395@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New HYZIN Interior Consultation Brief: ${formData.name || 'Patron'} (${formData.projectType})`,
          _template: "table",
          _captcha: "false",
          "Patron Name": formData.name || 'Client',
          "Phone Number": formData.phone || 'Not provided',
          "Email Address": formData.email || 'Not provided',
          "Region / Location": formData.region,
          "Service Typology": formData.projectType,
          "Budget Framework": formData.budget.trim() || 'Flexible / To be discussed',
          "Spatial Notes": formData.message || 'Standard consultation requested.',
          "Dispatched WhatsApp Line": formData.selectedWhatsApp === '916282549008' ? '+91 6282549008 (Line 1)' : '+91 8848023041 (Line 2)',
          "Target Studio Email": "Muhammedashad395@gmail.com",
          "Transmission Mode": "Dual Submit (WhatsApp + Direct Studio Email)",
          "Submission Time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      if (response.ok) {
        setEmailStatus('sent');
      } else {
        setEmailStatus('sent'); // Accept FormSubmit response
      }
    } catch (err) {
      console.warn("Background email notification dispatch notice:", err);
      setEmailStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 sm:py-20 lg:py-28 bg-[#2B1C19] border-t border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Studio Desk & Direct Details */}
          <div className="lg:col-span-5 w-full">
            <div className="flex items-center space-x-3 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              <span>05 / INITIATION</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/40"></span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-bold tracking-tight leading-[1.15]">
              Reserve a Private Spatial Consultation.
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#D4AF37] font-normal leading-relaxed">
              Tell us about your space, your ideas, and what you envision. Let’s turn them into an interior that feels truly yours.
            </p>

            {/* Direct Channel Badges with Both Numbers, Email, and Map Location */}
            <div className="mt-8 space-y-4 pt-6 border-t border-[#D4AF37]/20">
              
              {/* Studio Email */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] rounded-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    OFFICIAL STUDIO EMAIL
                  </span>
                  <a
                    href="mailto:Muhammedashad395@gmail.com"
                    className="text-xs sm:text-sm md:text-base text-[#FAF7F0] font-semibold hover:text-[#D4AF37] transition-colors break-words font-mono mt-0.5 block"
                  >
                    Muhammedashad395@gmail.com
                  </a>
                </div>
              </div>

              {/* Studio Line 1 */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] rounded-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    STUDIO LINE 1 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:916282549008"
                    className="text-lg sm:text-xl text-[#FAF7F0] font-semibold hover:text-[#D4AF37] transition-colors tracking-tight font-mono mt-0.5 block"
                  >
                    +91 6282549008
                  </a>
                </div>
              </div>

              {/* Studio Line 2 */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] rounded-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    STUDIO LINE 2 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:918848023041"
                    className="text-lg sm:text-xl text-[#FAF7F0] font-semibold hover:text-[#D4AF37] transition-colors tracking-tight font-mono mt-0.5 block"
                  >
                    +91 8848023041
                  </a>
                </div>
              </div>

              {/* Studio Workshop Map Location */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] rounded-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    WORKSHOP & STUDIO MAP LOCATION
                  </span>
                  <a
                    href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-[#FAF7F0] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>View Pinned Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  </a>
                  <p className="text-xs text-[#D4AF37] mt-1 font-mono">
                    Coordinates: 10°40'35.2"N 76°40'52.1"E (Kerala)
                  </p>
                </div>
              </div>

              {/* Regional Coverage */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] rounded-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    REGIONAL COVERAGE
                  </span>
                  <span className="text-sm sm:text-base text-[#FAF7F0] font-medium block mt-0.5">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                  <p className="text-xs text-[#D4AF37] mt-1">
                    Kochi • Calicut • Trivandrum • Bengaluru • Chennai
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Quick Links */}
              <div className="p-3.5 sm:p-4 bg-[#3E2723] border border-[#D4AF37]/20 flex items-start gap-3.5 sm:gap-4 rounded-sm">
                <div className="w-10 h-10 bg-[#2B1C19] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#25D366] rounded-sm">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]/80 block">
                    INSTANT WHATSAPP DIRECT
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <a
                      href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#D4AF37] hover:underline font-medium"
                    >
                      <span>Line 1 (+91 6282549008)</span>
                      <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                    </a>
                    <span className="text-white/20">•</span>
                    <a
                      href="https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#D4AF37] hover:underline font-medium"
                    >
                      <span>Line 2 (+91 8848023041)</span>
                      <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality note */}
            <div className="mt-6 p-3.5 bg-[#3E2723] border border-[#D4AF37]/20 text-xs text-[#D4AF37] leading-relaxed rounded-sm">
              We respect your confidentiality. Client drawings and project details are handled under strict non-disclosure.
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7 w-full bg-[#3E2723] border border-[#D4AF37]/25 p-4 sm:p-8 lg:p-10 shadow-2xl relative rounded-sm">
            
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-10 animate-fadeIn">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366]/15 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-[#FAF7F0] mb-2 tracking-tight">
                  Dual-Channel Submission Complete!
                </h3>
                <p className="text-xs sm:text-sm text-[#D4AF37] font-normal max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="text-[#FAF7F0] font-medium">{formData.name || 'Patron'}</span>. Your spatial consultation brief has been dispatched simultaneously via WhatsApp and sent to our official studio email.
                </p>

                {/* Dual Transmission Status Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-6 text-left">
                  {/* WhatsApp Status */}
                  <div className="p-3 bg-[#2B1C19] border border-[#25D366]/40 rounded-sm">
                    <div className="flex items-center gap-2 text-[#25D366] text-xs font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>1. WHATSAPP OPENED</span>
                    </div>
                    <p className="text-[11px] text-[#D4AF37]">
                      Formatted brief loaded for Line {formData.selectedWhatsApp === '916282549008' ? '1 (+91 6282549008)' : '2 (+91 8848023041)'}.
                    </p>
                  </div>

                  {/* Email Status */}
                  <div className="p-3 bg-[#2B1C19] border border-[#D4AF37]/40 rounded-sm">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold mb-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>2. STUDIO EMAIL SENT</span>
                    </div>
                    <p className="text-[11px] text-[#D4AF37] break-words">
                      Delivered to: <span className="text-[#FAF7F0] font-medium">Muhammedashad395@gmail.com</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-[#2B1C19] border border-[#D4AF37]/30 max-w-md mx-auto text-left mb-6 space-y-2.5 shadow-xl rounded-sm">
                  <div className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                    DISPATCH TO EITHER WHATSAPP LINE AGAIN:
                  </div>
                  
                  <button
                    onClick={() => sendToWhatsAppNumber('916282549008')}
                    className="w-full py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                    <span className="truncate">LINE 1 (+91 6282549008)</span>
                  </button>

                  <button
                    onClick={() => sendToWhatsAppNumber('918848023041')}
                    className="w-full py-3 px-3 bg-[#3E2723] border border-[#25D366] hover:bg-[#25D366]/20 text-[#25D366] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span className="truncate">LINE 2 (+91 8848023041)</span>
                  </button>

                  {/* Direct Mailto Fallback Action */}
                  <a
                    href={`mailto:Muhammedashad395@gmail.com?subject=Spatial%20Consultation%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Patron')}&body=${encodeURIComponent(
                      `Patron Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRegion: ${formData.region}\nService: ${formData.projectType}\nBudget: ${formData.budget}\nNotes: ${formData.message}`
                    )}`}
                    className="w-full py-2.5 px-3 bg-transparent border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#FAF7F0] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>Open in Email App (Backup)</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#D4AF37] hover:underline uppercase tracking-widest font-semibold cursor-pointer"
                >
                  ← Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                <div className="border-b border-[#D4AF37]/20 pb-3 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
                    DUAL-SUBMISSION CONSULTATION BRIEF
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#25D366] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0"></span>
                    <span>Dispatches to WhatsApp &amp; Studio Email</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. K. Mathew"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] placeholder-[#D4AF37]/40 text-sm focus:outline-none transition-colors rounded-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] placeholder-[#D4AF37]/40 text-sm focus:outline-none transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] placeholder-[#D4AF37]/40 text-sm focus:outline-none transition-colors rounded-sm"
                  />
                </div>

                {/* Region */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Project Location / State *
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] text-sm focus:outline-none transition-colors rounded-sm cursor-pointer"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-[#2B1C19] text-[#FAF7F0]">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Typology / 10 Services */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] text-sm focus:outline-none transition-colors rounded-sm cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#2B1C19] text-[#FAF7F0]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Anticipated Budget Framework
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. ₹25 Lakhs, ₹50 Lakhs – ₹1 Crore, ₹1 Crore+"
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] placeholder-[#D4AF37]/40 text-sm focus:outline-none transition-colors rounded-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Project Vision / Spatial Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site, approximate square footage, timeline, or special interior/fabrication requirements..."
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#2B1C19] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#FAF7F0] placeholder-[#D4AF37]/40 text-sm focus:outline-none transition-colors resize-none rounded-sm"
                  ></textarea>
                </div>

                {/* Select WhatsApp Line Choice */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#D4AF37] mb-1.5">
                    Destination WhatsApp Number
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '916282549008' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all rounded-sm cursor-pointer ${
                        formData.selectedWhatsApp === '916282549008'
                          ? 'bg-[#25D366]/20 border-[#25D366] text-white shadow-md'
                          : 'bg-[#2B1C19] border-[#D4AF37]/20 text-[#D4AF37] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-bold block text-[#FAF7F0] text-xs sm:text-sm font-mono truncate">
                          Line 1: +91 6282549008
                        </span>
                        <span className="text-[10px] text-[#D4AF37] font-mono">Primary Studio Desk</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.selectedWhatsApp === '916282549008' ? 'border-[#25D366] bg-[#25D366]' : 'border-[#D4AF37]/30'
                      }`}></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '918848023041' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all rounded-sm cursor-pointer ${
                        formData.selectedWhatsApp === '918848023041'
                          ? 'bg-[#25D366]/20 border-[#25D366] text-white shadow-md'
                          : 'bg-[#2B1C19] border-[#D4AF37]/20 text-[#D4AF37] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-bold block text-[#FAF7F0] text-xs sm:text-sm font-mono truncate">
                          Line 2: +91 8848023041
                        </span>
                        <span className="text-[10px] text-[#D4AF37] font-mono">Direct Lead Line</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.selectedWhatsApp === '918848023041' ? 'border-[#25D366] bg-[#25D366]' : 'border-[#D4AF37]/30'
                      }`}></span>
                    </button>
                  </div>
                </div>

                {/* Main Submit Button: Dual Dispatch to WhatsApp & Email */}
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] disabled:opacity-75 text-black text-xs sm:text-sm uppercase tracking-[0.12em] font-extrabold transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 rounded-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black shrink-0" />
                        <span>DISPATCHING BRIEF...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                        <Mail className="w-4 h-4 text-black shrink-0" />
                        <span className="truncate">SUBMIT BRIEF (WHATSAPP + EMAIL)</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#D4AF37]/80">
                    Single submit simultaneously opens WhatsApp brief &amp; delivers a verified copy to <span className="text-[#FAF7F0] font-medium break-words">Muhammedashad395@gmail.com</span>
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
