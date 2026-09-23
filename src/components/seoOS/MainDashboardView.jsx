import React from 'react';
import { 
  Zap, ArrowUpRight, CheckCircle, AlertTriangle, Info, ShieldCheck, 
  ExternalLink, Layers, FileText, Activity, Compass, TrendingUp
} from 'lucide-react';

export default function MainDashboardView({ businessContext, competitors, tasks, onNavigateTab }) {
  // Filter top priority tasks
  const topPriorityTasks = tasks.slice(0, 5);

  return (
    <div className="space-y-6">
      
      {/* Welcome & System Status Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h2 className="text-xl font-bold text-white">Local SEO Command Center</h2>
            </div>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Real-time audit overview for <strong className="text-amber-400">{businessContext.businessInfo.name}</strong>. 
              {competitors.length} competitors monitored in <strong className="text-white">{businessContext.businessInfo.city}</strong>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateTab('audits')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4" /> Run Full Audit (20 Modules)
            </button>
          </div>
        </div>
      </div>

      {/* Top Priority Opportunities (P1 Actions calculated via Priority formula) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              High-Impact Priority Opportunities (P1 Sprints)
            </h3>
            <p className="text-xs text-slate-400">Prioritized using formula: <code className="text-amber-300 bg-slate-950 px-1.5 py-0.5 rounded">Priority = (Impact × Revenue Intent × Confidence) ÷ Effort</code></p>
          </div>
          <button
            onClick={() => onNavigateTab('opportunities')}
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
          >
            View All Opportunities <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-3">
          {topPriorityTasks.map((t, idx) => (
            <div key={t.id || idx} className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-700 transition">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {t.priority} High Intent
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800 text-slate-300">
                    Source: {t.source}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-blue-500/10 text-blue-400">
                    Area: {t.category}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{t.title}</h4>
                <p className="text-xs text-slate-400">{t.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right text-xs">
                  <span className="block font-bold text-emerald-400">Impact: {t.impact}</span>
                  <span className="text-[11px] text-slate-400">Effort: {t.effort}</span>
                </div>
                <button
                  onClick={() => onNavigateTab('action-center')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg border border-slate-700 transition"
                >
                  Manage Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Data Tier Principle + Competitor Quick Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strict 4-Tier Data Principles */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Strict Data Integrity Standard
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Every audit recommendation in this system strictly separates information into 4 verified tiers to prevent hallucinated SEO data.
          </p>
          <div className="space-y-2.5">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs">
              <span className="font-bold text-emerald-400 block">🟢 Verified Data</span>
              <p className="text-slate-300">Directly retrieved from connected GSC, GA4, GBP API or validated crawls.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs">
              <span className="font-bold text-blue-400 block">🟦 User Provided</span>
              <p className="text-slate-300">Entered directly during business onboarding and service specification.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs">
              <span className="font-bold text-purple-400 block">🟪 Analysis</span>
              <p className="text-slate-300">Statistical pattern extractions and competitor gap formulas.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs">
              <span className="font-bold text-amber-400 block">🟨 Recommendation</span>
              <p className="text-slate-300">Prioritized tactical execution step for agency team implementation.</p>
            </div>
          </div>
        </div>

        {/* Competitor Overview Cards */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                Monitored Competitors ({competitors.length})
              </h3>
              <button
                onClick={() => onNavigateTab('competitors')}
                className="text-xs text-amber-400 hover:underline font-semibold"
              >
                Manage Competitors →
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Competitor metrics tracked in real-time across primary categories, review velocity, and photo count.
            </p>
            <div className="space-y-2">
              {competitors.map(c => (
                <div key={c.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{c.name}</span>
                    <span className="text-[11px] text-slate-400">{c.primaryCategory} • {c.address}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-amber-400">{c.rating}⭐ ({c.reviewCount} reviews)</span>
                    <span className="block text-[10px] text-slate-400">{c.gbpPostFrequency} posting</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Direct Competitors: {competitors.filter(c => c.type === 'direct').length}</span>
            <span>Search Competitors: {competitors.filter(c => c.type === 'search').length}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
