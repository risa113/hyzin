import React, { useState } from 'react';
import { Activity, ArrowUpRight, CheckCircle2, Filter, Layers, Zap } from 'lucide-react';

export default function OpportunityEngineView({ tasks, setTasks }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  // Convert Low=1, Medium=2, High=3 for formula calculation
  const scoreVal = (val) => {
    if (val === 'High') return 3;
    if (val === 'Medium') return 2;
    return 1;
  };

  const opportunitiesWithScore = tasks.map(t => {
    const impactNum = scoreVal(t.impact);
    const intentNum = scoreVal(t.intent || 'High');
    const confNum = scoreVal(t.confidence || 'High');
    const effortNum = scoreVal(t.effort);
    const calculatedScore = ((impactNum * intentNum * confNum) / effortNum).toFixed(1);

    return {
      ...t,
      score: calculatedScore
    };
  }).sort((a, b) => b.score - a.score);

  const categories = ['All', 'GBP', 'Website', 'Keywords', 'Reviews', 'Backlinks', 'Citations', 'Content'];

  const filtered = opportunitiesWithScore.filter(o => {
    const catMatch = filterCategory === 'All' || o.category === filterCategory;
    const prioMatch = filterPriority === 'All' || o.priority === filterPriority;
    return catMatch && prioMatch;
  });

  const handleConvertToTask = (oppId) => {
    setTasks(tasks.map(t => t.id === oppId ? { ...t, status: 'Ready' } : t));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-400" />
            Central Opportunity Engine
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Audit findings prioritized using practical revenue math. 
            Formula: <code className="text-amber-300 bg-slate-950 px-1.5 py-0.5 rounded">Priority Score = (Impact × Revenue Intent × Confidence) ÷ Effort</code>.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span>Total Opportunities: <strong className="text-white">{tasks.length}</strong></span>
          <span>•</span>
          <span>P1 High Priority: <strong className="text-amber-400">{tasks.filter(t => t.priority === 'P1').length}</strong></span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-300 shrink-0">Area:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition shrink-0 ${
                filterCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-slate-300">Priority:</span>
          {['All', 'P1', 'P2', 'P3'].map(prio => (
            <button
              key={prio}
              onClick={() => setFilterPriority(prio)}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
                filterPriority === prio
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {prio}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities List Grid */}
      <div className="space-y-3">
        {filtered.map(opp => (
          <div key={opp.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 text-xs font-black rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {opp.priority} Opportunity
                </span>
                <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-slate-950 text-emerald-400 border border-slate-800">
                  Calculated Score: {opp.score}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded bg-slate-800 text-slate-300">
                  {opp.category}
                </span>
                <span className="text-xs text-slate-500">Source: {opp.source}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {opp.status === 'Backlog' ? (
                  <button
                    onClick={() => handleConvertToTask(opp.id)}
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition flex items-center gap-1"
                  >
                    <Zap className="w-3.5 h-3.5" /> Move to Ready Sprint
                  </button>
                ) : (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Task Status: {opp.status}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">{opp.title}</h3>
              <p className="text-xs text-slate-300">{opp.description}</p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs pt-2 border-t border-slate-800/80 bg-slate-950/50 p-2.5 rounded-xl">
              <div>
                <span className="text-[10px] text-slate-500 block">Impact</span>
                <span className="font-bold text-emerald-400">{opp.impact}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Revenue Intent</span>
                <span className="font-bold text-amber-400">{opp.intent || 'High'}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Confidence</span>
                <span className="font-bold text-blue-400">{opp.confidence || 'High'}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Effort</span>
                <span className="font-bold text-purple-400">{opp.effort}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Target Keyword</span>
                <span className="font-medium text-slate-300 truncate block">{opp.keyword || 'N/A'}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
