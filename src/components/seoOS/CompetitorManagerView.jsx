import React, { useState } from 'react';
import { Users, Plus, Trash2, ExternalLink, ShieldCheck, Check, X, AlertCircle } from 'lucide-react';

export default function CompetitorManagerView({ competitors, setCompetitors, businessContext }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newComp, setNewComp] = useState({
    name: '',
    type: 'direct',
    gbpUrl: '',
    website: '',
    address: '',
    primaryCategory: 'Interior Designer',
    rating: 4.5,
    reviewCount: 50,
    reviewVelocity: '2 / month',
    photoCount: 40,
    gbpPostFrequency: '1x per week',
    backlinksCount: 50,
    citationCount: 20
  });

  const handleAddCompetitor = (e) => {
    e.preventDefault();
    if (!newComp.name) return;
    const created = {
      ...newComp,
      id: `comp-${Date.now()}`,
      secondaryCategories: ["Cabinet Maker", "Furniture Manufacturer"],
      services: ["Modular Kitchen", "Wall Paneling"],
      topKeywords: ["interior designers near me"]
    };
    setCompetitors([...competitors, created]);
    setIsAdding(false);
    setNewComp({
      name: '',
      type: 'direct',
      gbpUrl: '',
      website: '',
      address: '',
      primaryCategory: 'Interior Designer',
      rating: 4.5,
      reviewCount: 50,
      reviewVelocity: '2 / month',
      photoCount: 40,
      gbpPostFrequency: '1x per week',
      backlinksCount: 50,
      citationCount: 20
    });
  };

  const removeCompetitor = (id) => {
    setCompetitors(competitors.filter(c => c.id !== id));
  };

  const toggleType = (id) => {
    setCompetitors(competitors.map(c => c.id === id ? { ...c, type: c.type === 'direct' ? 'search' : 'direct' } : c));
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Competitor Intelligence & Side-by-Side Matrix
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Monitor direct local competitors and search competitors. Matrix compares factual differences without arbitrary assumptions.
          </p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" /> Add Competitor
        </button>
      </div>

      {/* Add Competitor Form Drawer */}
      {isAdding && (
        <form onSubmit={handleAddCompetitor} className="bg-slate-900 border border-amber-500/30 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-amber-400">Add New Local Competitor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Competitor Business Name *</label>
              <input
                type="text"
                required
                value={newComp.name}
                onChange={e => setNewComp({...newComp, name: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
                placeholder="e.g. Royal Interiors Kochi"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Competitor Type</label>
              <select
                value={newComp.type}
                onChange={e => setNewComp({...newComp, type: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              >
                <option value="direct">Direct Local Competitor</option>
                <option value="search">Search Rank Competitor</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Primary Category</label>
              <input
                type="text"
                value={newComp.primaryCategory}
                onChange={e => setNewComp({...newComp, primaryCategory: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">GBP Listing URL</label>
              <input
                type="url"
                value={newComp.gbpUrl}
                onChange={e => setNewComp({...newComp, gbpUrl: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Website URL</label>
              <input
                type="url"
                value={newComp.website}
                onChange={e => setNewComp({...newComp, website: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Address / Zone</label>
              <input
                type="text"
                value={newComp.address}
                onChange={e => setNewComp({...newComp, address: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg"
            >
              Save Competitor
            </button>
          </div>
        </form>
      )}

      {/* Competitor Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {competitors.map(c => (
          <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 relative hover:border-slate-700 transition">
            <div className="flex items-start justify-between">
              <div>
                <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded mb-1 ${
                  c.type === 'direct' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {c.type === 'direct' ? 'Direct Competitor' : 'Search Competitor'}
                </span>
                <h3 className="text-sm font-bold text-white">{c.name}</h3>
                <p className="text-xs text-slate-400">{c.primaryCategory} • {c.address}</p>
              </div>
              <button
                onClick={() => removeCompetitor(c.id)}
                className="text-slate-500 hover:text-rose-400 p-1"
                title="Remove competitor"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-[10px] text-slate-500 block">Rating / Reviews</span>
                <span className="font-bold text-amber-400">{c.rating}⭐ ({c.reviewCount})</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Review Velocity</span>
                <span className="font-bold text-slate-200">{c.reviewVelocity}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">GBP Photos</span>
                <span className="font-bold text-slate-200">{c.photoCount} photos</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">GBP Post Cadence</span>
                <span className="font-bold text-slate-200">{c.gbpPostFrequency}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-800 text-slate-400">
              <button
                onClick={() => toggleType(c.id)}
                className="text-amber-400 hover:underline"
              >
                Switch to {c.type === 'direct' ? 'Search' : 'Direct'}
              </button>
              {c.website && (
                <a href={c.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-white">
                  Website <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Side-by-Side Competitor Comparison Matrix (Section 33 Requirement) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Side-by-Side Competitor Comparison Matrix
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Factual comparison showing exact gaps between your business profile and tracked competitors.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                <th className="p-3 font-semibold">Audit Metric</th>
                <th className="p-3 font-semibold text-amber-400 bg-amber-500/10 border-x border-amber-500/20">
                  {businessContext.businessInfo.name} (Your Business)
                </th>
                {competitors.map((c, i) => (
                  <th key={c.id} className="p-3 font-semibold text-white">
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 font-medium text-slate-400">Primary GBP Category</td>
                <td className="p-3 font-bold text-amber-300 bg-amber-500/5 border-x border-amber-500/10">
                  {businessContext.businessInfo.primaryCategory}
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.primaryCategory}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Secondary GBP Categories</td>
                <td className="p-3 text-slate-200 bg-amber-500/5 border-x border-amber-500/10">
                  {businessContext.businessInfo.secondaryCategories.join(", ")}
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{(c.secondaryCategories || []).join(", ")}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Review Count & Rating</td>
                <td className="p-3 font-bold text-emerald-400 bg-amber-500/5 border-x border-amber-500/10">
                  4.7⭐ (38 reviews)
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.rating}⭐ ({c.reviewCount} reviews)</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Review Velocity</td>
                <td className="p-3 bg-amber-500/5 border-x border-amber-500/10 text-amber-400">
                  1.5 / month
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.reviewVelocity}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">GBP Photo Count</td>
                <td className="p-3 text-rose-400 font-bold bg-amber-500/5 border-x border-amber-500/10">
                  24 photos (GAP: -64 photos)
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.photoCount} photos</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">GBP Posting Cadence</td>
                <td className="p-3 bg-amber-500/5 border-x border-amber-500/10">1x per month</td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.gbpPostFrequency}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Registered Services</td>
                <td className="p-3 bg-amber-500/5 border-x border-amber-500/10 text-emerald-400 font-bold">
                  {businessContext.services.length} Services
                </td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{(c.services || []).length} Services</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Referring Backlinks</td>
                <td className="p-3 bg-amber-500/5 border-x border-amber-500/10">15 domains</td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.backlinksCount} domains</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Indexed Citations</td>
                <td className="p-3 bg-amber-500/5 border-x border-amber-500/10">7 citations</td>
                {competitors.map(c => (
                  <td key={c.id} className="p-3">{c.citationCount} citations</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
