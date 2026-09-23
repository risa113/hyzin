import React, { useState } from 'react';
import { 
  Building2, Gauge, Users, Search, Activity, CheckSquare, 
  Calendar, BookOpen, FileSpreadsheet, Database, Edit3, ShieldAlert, Globe
} from 'lucide-react';
import BusinessOnboardingModal from './BusinessOnboardingModal';

export default function SeoOSLayout({ 
  activeTab, 
  setActiveTab, 
  businessContext, 
  setBusinessContext, 
  dataSources, 
  children 
}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // 7 Internal Audit Scores (Clearly labeled as internal audit scores per Section 6 & 34)
  const healthScores = [
    { label: "Local SEO Health", score: 78, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { label: "GBP Health", score: 82, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { label: "Website SEO Health", score: 74, color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    { label: "Review Health", score: 88, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { label: "Authority Health", score: 68, color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
    { label: "Citation Health", score: 79, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
    { label: "Content Health", score: 71, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" }
  ];

  const mainNavItems = [
    { id: 'dashboard', label: 'Main Dashboard', icon: Gauge },
    { id: 'business', label: 'Business Context', icon: Building2 },
    { id: 'competitors', label: 'Competitors', icon: Users },
    { id: 'audits', label: '20 Audit Engines', icon: Search },
    { id: 'opportunities', label: 'Opportunity Engine', icon: Activity },
    { id: 'action-center', label: 'Action Center (Kanban)', icon: CheckSquare },
    { id: 'roadmap', label: '12-Week Plan', icon: Calendar },
    { id: 'prompt-library', label: 'Prompt Library', icon: BookOpen },
    { id: 'reports', label: 'Reports & Export', icon: FileSpreadsheet },
    { id: 'data-sources', label: 'Data Sources', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top OS Banner */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              SEO
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white tracking-wide">Local SEO Operating System</h1>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Agency Command Center
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span>Client: <strong className="text-slate-200">{businessContext.businessInfo.name}</strong></span>
                <span>•</span>
                <span>Location: <strong className="text-slate-200">{businessContext.businessInfo.city}</strong></span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  🟢 GSC & GBP Connected
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-400 rounded-lg border border-slate-700 transition"
            >
              <Edit3 className="w-3.5 h-3.5" /> Edit Business Context
            </button>
            <a
              href="#home"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition shadow-md shadow-amber-500/20"
            >
              <Globe className="w-3.5 h-3.5" /> Client Website
            </a>
          </div>
        </div>
      </header>

      {/* Persistent Business Context Bar */}
      <section className="bg-slate-900/40 border-b border-slate-800/80 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-300 overflow-x-auto gap-4 whitespace-nowrap">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Context:</span>
            <span>Industry: <strong className="text-white">{businessContext.businessInfo.industry}</strong></span>
            <span>Primary Cat: <strong className="text-amber-400">{businessContext.businessInfo.primaryCategory}</strong></span>
            <span>Main Services: <strong className="text-white">{businessContext.services.length} Registered</strong></span>
            <span>Conversion: <strong className="text-emerald-400">WhatsApp & Phone Calls</strong></span>
          </div>
          <div className="text-[11px] text-slate-400 italic flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            Scores are <strong>Internal Audit Scores</strong> (Not Google ranking scores)
          </div>
        </div>
      </section>

      {/* 7 Internal Health Metric Scores Bar */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {healthScores.map((hs, i) => (
            <div 
              key={i} 
              className={`p-3 rounded-xl border flex flex-col justify-between transition ${hs.color}`}
            >
              <span className="text-[11px] font-semibold text-slate-300">{hs.label}</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-black">{hs.score}</span>
                <span className="text-[10px] text-slate-400 uppercase">/100</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main OS Section Tabs Navigation */}
      <nav className="max-w-7xl mx-auto px-4 mt-2">
        <div className="flex items-center gap-1 border-b border-slate-800 overflow-x-auto pb-1 scrollbar-none">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-lg text-xs font-semibold whitespace-nowrap transition border-t-2 border-x border-b-0 ${
                  isActive
                    ? 'border-t-amber-400 border-x-slate-800 bg-slate-900 text-amber-400'
                    : 'border-t-transparent border-x-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main View Workspace Container */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer System Info */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>Local SEO Operating System v2.0 • Agency Production Ready • Data Last Updated: 2026-09-23 11:00 AM</p>
      </footer>

      {/* Business Context Modal */}
      <BusinessOnboardingModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        businessContext={businessContext}
        onSave={(updated) => setBusinessContext(updated)}
      />
    </div>
  );
}
