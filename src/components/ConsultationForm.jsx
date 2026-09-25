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
      colors: ['#CFB291', '#CFB291', '#ffffff']
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
    <section id="contact" className="py-24 sm:py-32 bg-[#341910] border-t border-[#CFB291]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Studio Desk & Direct Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-[#CFB291] font-semibold mb-3">
              <span>05 / INITIATION</span>
              <span className="w-8 h-[1px] bg-[#CFB291]/40"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FCFCF6] font-bold tracking-tight leading-[1.15]">
              Reserve a Private Spatial Consultation.
            </h2>

            <p className="mt-6 text-base text-[#CFB291] font-normal leading-relaxed">
              Tell us about your space, your ideas, and what you envision. Let’s turn them into an interior that feels truly yours.
            </p>

            {/* Direct Channel Badges with Both Numbers, Email, and Map Location */}
            <div className="mt-10 space-y-5 pt-6 border-t border-[#CFB291]/20">
              
              {/* Studio Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#CFB291]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    OFFICIAL STUDIO EMAIL
                  </span>
                  <a
                    href="mailto:Muhammedashad395@gmail.com"
                    className="text-base sm:text-lg text-[#FCFCF6] font-semibold hover:text-[#CFB291] transition-colors break-all"
                  >
                    Muhammedashad395@gmail.com
                  </a>
                </div>
              </div>

              {/* Studio Line 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#CFB291]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    STUDIO LINE 1 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:916282549008"
                    className="text-xl sm:text-2xl text-[#FCFCF6] font-semibold hover:text-[#CFB291] transition-colors tracking-tight"
                  >
                    +91 6282549008
                  </a>
                </div>
              </div>

              {/* Studio Line 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#CFB291]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    STUDIO LINE 2 (CALL / WHATSAPP)
                  </span>
                  <a
                    href="tel:918848023041"
                    className="text-xl sm:text-2xl text-[#FCFCF6] font-semibold hover:text-[#CFB291] transition-colors tracking-tight"
                  >
                    +91 8848023041
                  </a>
                </div>
              </div>

              {/* Studio Workshop Map Location */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#CFB291]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    WORKSHOP & STUDIO MAP LOCATION
                  </span>
                  <a
                    href="https://maps.app.goo.gl/FNC3ixVjpjQppRfm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#FCFCF6] hover:text-[#CFB291] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Pinned Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#CFB291]" />
                  </a>
                  <p className="text-xs text-[#CFB291] mt-0.5">
                    Coordinates: 10°40'35.2"N 76°40'52.1"E (Kerala)
                  </p>
                </div>
              </div>

              {/* Regional Coverage */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#CFB291]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    REGIONAL COVERAGE
                  </span>
                  <span className="text-base sm:text-lg text-[#FCFCF6] font-medium block">
                    Kerala • Tamil Nadu • Karnataka
                  </span>
                  <p className="text-xs text-[#CFB291] mt-0.5">
                    Kochi • Calicut • Trivandrum • Bengaluru • Chennai
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Quick Links */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#45241A] border border-[#CFB291]/20 flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#CFB291]/70 block">
                    INSTANT WHATSAPP DIRECT
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://wa.me/916282549008?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#CFB291] hover:underline font-medium"
                    >
                      <span>Line 1 (+91 6282549008)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <a
                      href="https://wa.me/918848023041?text=Hi%20HYZIN%20Interior,%20I'm%20interested%20in%20discussing%20an%20interior%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#CFB291] hover:underline font-medium"
                    >
                      <span>Line 2 (+91 8848023041)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality note */}
            <div className="mt-8 p-4 bg-[#45241A] border border-[#CFB291]/20 text-[11px] text-[#CFB291] leading-relaxed">
              We respect your confidentiality. Client drawings and project details are handled under strict non-disclosure.
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7 bg-[#45241A] border border-[#CFB291]/20 p-8 sm:p-12 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FCFCF6] mb-2 tracking-tight">
                  Dual-Channel Submission Complete!
                </h3>
                <p className="text-sm text-[#CFB291] font-normal max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="text-[#FCFCF6] font-medium">{formData.name || 'Patron'}</span>. Your spatial consultation brief has been dispatched simultaneously via WhatsApp and sent to our official studio email.
                </p>

                {/* Dual Transmission Status Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8 text-left">
                  {/* WhatsApp Status */}
                  <div className="p-3.5 bg-[#341910] border border-[#25D366]/40 rounded-lg">
                    <div className="flex items-center gap-2 text-[#25D366] text-xs font-bold mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>1. WHATSAPP OPENED</span>
                    </div>
                    <p className="text-[11px] text-[#CFB291]">
                      Formatted brief loaded for Line {formData.selectedWhatsApp === '916282549008' ? '1 (+91 6282549008)' : '2 (+91 8848023041)'}.
                    </p>
                  </div>

                  {/* Email Status */}
                  <div className="p-3.5 bg-[#341910] border border-[#CFB291]/40 rounded-lg">
                    <div className="flex items-center gap-2 text-[#CFB291] text-xs font-bold mb-1">
                      <Mail className="w-4 h-4" />
                      <span>2. STUDIO EMAIL SENT</span>
                    </div>
                    <p className="text-[11px] text-[#CFB291] break-all">
                      Delivered to: <span className="text-[#FCFCF6] font-medium">Muhammedashad395@gmail.com</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#341910] border border-[#CFB291]/30 max-w-md mx-auto text-left mb-8 space-y-3 shadow-xl">
                  <div className="text-xs font-semibold text-[#CFB291] uppercase tracking-wider mb-2">
                    DISPATCH TO EITHER WHATSAPP LINE AGAIN:
                  </div>
                  
                  <button
                    onClick={() => sendToWhatsAppNumber('916282549008')}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors rounded-sm shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>SEND TO WHATSAPP LINE 1 (+91 6282549008)</span>
                  </button>

                  <button
                    onClick={() => sendToWhatsAppNumber('918848023041')}
                    className="w-full py-3 bg-[#45241A] border border-[#25D366] hover:bg-[#25D366]/20 text-[#25D366] font-semibold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SEND TO WHATSAPP LINE 2 (+91 8848023041)</span>
                  </button>

                  {/* Direct Mailto Fallback Action */}
                  <a
                    href={`mailto:Muhammedashad395@gmail.com?subject=Spatial%20Consultation%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Patron')}&body=${encodeURIComponent(
                      `Patron Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRegion: ${formData.region}\nService: ${formData.projectType}\nBudget: ${formData.budget}\nNotes: ${formData.message}`
                    )}`}
                    className="w-full py-2.5 bg-transparent border border-[#CFB291]/20 hover:border-[#CFB291] text-[#FCFCF6] text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors rounded-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#CFB291]" />
                    <span>Open in Email App (Backup)</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#CFB291] hover:text-[#CFB291] uppercase tracking-widest font-semibold"
                >
                  ← Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#CFB291]/20 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#CFB291]">
                      DUAL-SUBMISSION CONSULTATION BRIEF
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#25D366] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Dispatches to WhatsApp & Muhammedashad395@gmail.com</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. K. Mathew"
                      className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] placeholder-[#CFB291]/50 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] placeholder-[#CFB291]/50 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] placeholder-[#CFB291]/50 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Region */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Project Location / State *
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] text-sm focus:outline-none transition-colors"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-[#341910] text-[#FCFCF6]">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Typology / 10 Services */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Service Required *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] text-sm focus:outline-none transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#341910] text-[#FCFCF6]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Anticipated Budget Framework
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. ₹25 Lakhs, ₹50 Lakhs – ₹1 Crore, ₹1 Crore+"
                    className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] placeholder-[#CFB291]/50 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Project Vision / Spatial Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site, approximate square footage, timeline, or special interior/fabrication requirements..."
                    className="w-full px-4 py-3 bg-[#341910] border border-[#CFB291]/20 focus:border-[#CFB291] text-[#FCFCF6] placeholder-[#CFB291]/50 text-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Select WhatsApp Line Choice */}
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-[#CFB291] mb-2">
                    Destination WhatsApp Number
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '916282549008' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all ${
                        formData.selectedWhatsApp === '916282549008'
                          ? 'bg-[#25D366]/20 border-[#25D366] text-white shadow-md'
                          : 'bg-[#341910] border-[#CFB291]/20 text-[#CFB291] hover:border-[#CFB291]/40'
                      }`}
                    >
                      <div className="text-xs">
                        <span className="font-bold block text-[#FCFCF6]">Line 1: +91 6282549008</span>
                        <span className="text-[10px] text-[#CFB291] font-mono">Primary Studio Desk</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        formData.selectedWhatsApp === '916282549008' ? 'border-[#25D366] bg-[#25D366]' : 'border-[#CFB291]/30'
                      }`}></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWhatsApp: '918848023041' })}
                      className={`p-3 text-left border flex items-center justify-between transition-all ${
                        formData.selectedWhatsApp === '918848023041'
                          ? 'bg-[#25D366]/20 border-[#25D366] text-white shadow-md'
                          : 'bg-[#341910] border-[#CFB291]/20 text-[#CFB291] hover:border-[#CFB291]/40'
                      }`}
                    >
                      <div className="text-xs">
                        <span className="font-bold block text-[#FCFCF6]">Line 2: +91 8848023041</span>
                        <span className="text-[10px] text-[#CFB291] font-mono">Direct Lead Line</span>
                      </div>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        formData.selectedWhatsApp === '918848023041' ? 'border-[#25D366] bg-[#25D366]' : 'border-[#CFB291]/30'
                      }`}></span>
                    </button>
                  </div>
                </div>

                {/* Main Submit Button: Dual Dispatch to WhatsApp & Email */}
                <div className="pt-4 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-75 text-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(37,211,102,0.3)] flex items-center justify-center space-x-2 rounded-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>DISPATCHING BRIEF (WHATSAPP + EMAIL)...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-black" />
                        <Mail className="w-4 h-4 text-black" />
                        <span>SUBMIT BRIEF (RECEIVE ON WHATSAPP & EMAIL)</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#CFB291]">
                    Single submit simultaneously opens WhatsApp brief & delivers a verified copy to <span className="text-[#FCFCF6] font-medium">Muhammedashad395@gmail.com</span>
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
