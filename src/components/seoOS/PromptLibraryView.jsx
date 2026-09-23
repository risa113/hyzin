import React, { useState } from 'react';
import { BookOpen, Copy, Play, Plus, Search, Check } from 'lucide-react';
import { promptLibrary } from '../../data/seoOS/promptLibraryData';

export default function PromptLibraryView({ onRunAudit, onCreateTask }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (promptText, id) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPrompts = promptLibrary.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            Agency SEO Prompt Library (20 Master Prompts)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Production-ready SEO engineering prompts calibrated for Google Business Profile, local keyword gaps, and technical SEO.
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search 20 prompts..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Prompts List */}
      <div className="space-y-4">
        {filteredPrompts.map(p => (
          <div key={p.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">{p.title}</h3>
                <p className="text-xs text-amber-400 font-medium">{p.purpose}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(p.prompt, p.id)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" /> {copiedId === p.id ? 'Copied!' : 'Copy Prompt'}
                </button>
                <button
                  onClick={() => onRunAudit()}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" /> Run Audit
                </button>
              </div>
            </div>

            {/* Required Data & Frequency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-400">
              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase">Required Data</span>
                <span className="text-slate-300">{p.requiredData}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase">Recommended Frequency</span>
                <span className="text-slate-300">{p.recommendedFrequency}</span>
              </div>
            </div>

            {/* Prompt Code Block */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 relative">
              <pre className="text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
                {p.prompt}
              </pre>
            </div>

            {/* Expected Output & Related Task */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 pt-1">
              <span>Expected Output: <strong className="text-slate-200">{p.expectedOutput}</strong></span>
              <span>Related Task: <strong className="text-emerald-400">{p.relatedTask}</strong></span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
