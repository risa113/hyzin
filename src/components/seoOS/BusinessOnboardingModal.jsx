import React, { useState } from 'react';
import { X, Plus, Trash2, CheckCircle2, Building2, Wrench, Target, Flag } from 'lucide-react';

export default function BusinessOnboardingModal({ isOpen, onClose, businessContext, onSave }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('info');
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(businessContext)));

  const handleInfoChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, [field]: value }
    }));
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index][field] = value;
    setFormData(prev => ({ ...prev, services: updatedServices }));
  };

  const addService = () => {
    const newService = {
      id: `srv-${Date.now()}`,
      name: "New Custom Service",
      description: "Service description and specification.",
      targetKeyword: "service keyword location",
      targetLocation: formData.businessInfo.city || "Kochi",
      priority: "P2",
      websiteUrl: formData.businessInfo.website || "https://hyzin.in",
      gbpService: true,
      conversionType: "Phone Call"
    };
    setFormData(prev => ({ ...prev, services: [...prev.services, newService] }));
  };

  const removeService = (index) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleMarketChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      targetMarket: { ...prev.targetMarket, [field]: value }
    }));
  };

  const handleGoalToggle = (goal) => {
    const current = formData.businessGoals || [];
    const updated = current.includes(goal)
      ? current.filter(g => g !== goal)
      : [...current, goal];
    setFormData(prev => ({ ...prev, businessGoals: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const allPossibleGoals = [
    "Phone calls",
    "WhatsApp leads",
    "Website leads",
    "Store visits",
    "Appointment bookings",
    "Quote requests",
    "Online sales",
    "Brand visibility"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/50 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              Business Context Setup
            </h2>
            <p className="text-xs text-slate-400">Configure permanent business profile & target preferences used across all SEO audits.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-6 gap-2">
          {[
            { id: 'info', label: '1. Business Info', icon: Building2 },
            { id: 'services', label: `2. Services (${formData.services.length})`, icon: Wrench },
            { id: 'market', label: '3. Target Market', icon: Target },
            { id: 'goals', label: '4. Business Goals', icon: Flag }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-amber-400 text-amber-400 bg-amber-400/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: BUSINESS INFO */}
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Business Name</label>
                <input
                  type="text"
                  value={formData.businessInfo.name}
                  onChange={(e) => handleInfoChange('name', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Website URL</label>
                <input
                  type="url"
                  value={formData.businessInfo.website}
                  onChange={(e) => handleInfoChange('website', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">GBP Listing URL</label>
                <input
                  type="url"
                  value={formData.businessInfo.gbpUrl}
                  onChange={(e) => handleInfoChange('gbpUrl', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Phone Number</label>
                <input
                  type="text"
                  value={formData.businessInfo.phone}
                  onChange={(e) => handleInfoChange('phone', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email</label>
                <input
                  type="email"
                  value={formData.businessInfo.email}
                  onChange={(e) => handleInfoChange('email', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Street Address</label>
                <input
                  type="text"
                  value={formData.businessInfo.address}
                  onChange={(e) => handleInfoChange('address', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">City</label>
                <input
                  type="text"
                  value={formData.businessInfo.city}
                  onChange={(e) => handleInfoChange('city', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">State / Province</label>
                <input
                  type="text"
                  value={formData.businessInfo.state}
                  onChange={(e) => handleInfoChange('state', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">ZIP / PIN Code</label>
                <input
                  type="text"
                  value={formData.businessInfo.zip}
                  onChange={(e) => handleInfoChange('zip', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Industry</label>
                <input
                  type="text"
                  value={formData.businessInfo.industry}
                  onChange={(e) => handleInfoChange('industry', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">GBP Primary Category</label>
                <input
                  type="text"
                  value={formData.businessInfo.primaryCategory}
                  onChange={(e) => handleInfoChange('primaryCategory', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Founded Year</label>
                <input
                  type="text"
                  value={formData.businessInfo.foundedYear}
                  onChange={(e) => handleInfoChange('foundedYear', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}

          {/* TAB 2: UNLIMITED SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Add all services offered by the business to enable keyword & service audit engines.</p>
                <button
                  type="button"
                  onClick={addService}
                  className="flex items-center gap-1 text-xs font-medium bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-3 py-1.5 rounded-lg transition"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Service
                </button>
              </div>

              {formData.services.map((srv, idx) => (
                <div key={srv.id || idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 relative">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-xs font-bold text-amber-400 uppercase">Service #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeService(idx)}
                      className="text-slate-500 hover:text-rose-400 p-1 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Service Name</label>
                      <input
                        type="text"
                        value={srv.name}
                        onChange={(e) => handleServiceChange(idx, 'name', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Target Keyword</label>
                      <input
                        type="text"
                        value={srv.targetKeyword}
                        onChange={(e) => handleServiceChange(idx, 'targetKeyword', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Target Location</label>
                      <input
                        type="text"
                        value={srv.targetLocation}
                        onChange={(e) => handleServiceChange(idx, 'targetLocation', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Service Description</label>
                      <input
                        type="text"
                        value={srv.description}
                        onChange={(e) => handleServiceChange(idx, 'description', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Priority</label>
                        <select
                          value={srv.priority}
                          onChange={(e) => handleServiceChange(idx, 'priority', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                        >
                          <option value="P1">P1 - High Revenue</option>
                          <option value="P2">P2 - Medium</option>
                          <option value="P3">P3 - Supporting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Conversion Type</label>
                        <input
                          type="text"
                          value={srv.conversionType}
                          onChange={(e) => handleServiceChange(idx, 'conversionType', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: TARGET MARKET */}
          {activeTab === 'market' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Primary Target City</label>
                <input
                  type="text"
                  value={formData.targetMarket.primaryCity}
                  onChange={(e) => handleMarketChange('primaryCity', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Customer Type (B2B / B2C / Hybrid)</label>
                <input
                  type="text"
                  value={formData.targetMarket.b2bOrB2C}
                  onChange={(e) => handleMarketChange('b2bOrB2C', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Target Customer Persona</label>
                <input
                  type="text"
                  value={formData.targetMarket.targetCustomerType}
                  onChange={(e) => handleMarketChange('targetCustomerType', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white"
                />
              </div>
            </div>
          )}

          {/* TAB 4: BUSINESS GOALS */}
          {activeTab === 'goals' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Select primary business conversion goals to calibrate priority calculations.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {allPossibleGoals.map(goal => {
                  const isSelected = (formData.businessGoals || []).includes(goal);
                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => handleGoalToggle(goal)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between transition ${
                        isSelected
                          ? 'border-amber-400/80 bg-amber-400/10 text-white'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{goal}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer Submit */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" /> Save Business Context
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
