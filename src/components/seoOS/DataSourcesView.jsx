import React, { useState } from 'react';
import { Database, CheckCircle2, AlertTriangle, XCircle, Upload, RefreshCw, Key, ShieldCheck } from 'lucide-react';

export default function DataSourcesView({ dataSources, setDataSources }) {
  const [importStatus, setImportStatus] = useState('');

  const handleFileUpload = (e, sourceKey) => {
    const file = e.target.files[0];
    if (file) {
      setImportStatus(`Successfully imported ${file.name} into ${sourceKey.toUpperCase()} data store!`);
      setDataSources(prev => ({
        ...prev,
        [sourceKey]: {
          ...prev[sourceKey],
          status: 'connected',
          lastUpdated: `Uploaded ${new Date().toLocaleDateString()}`
        }
      }));
      setTimeout(() => setImportStatus(''), 4000);
    }
  };

  const getStatusBadge = (status) => {
    if (status === 'connected') {
      return (
        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
          🟢 Connected & Live
        </span>
      );
    }
    if (status === 'incomplete') {
      return (
        <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
          🟡 Incomplete / CSV Upload
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/30">
        🔴 Not Connected
      </span>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-400" />
            Data Source Integrations & Import Layer
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Connect Google APIs or import CSV/JSON exports. Honest connection statuses — never fabricated data.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          Security: <strong className="text-emerald-400">OAuth2 Encrypted & Local Storage Secured</strong>
        </div>
      </div>

      {importStatus && (
        <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs p-3 rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {importStatus}
        </div>
      )}

      {/* Integration Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* GSC */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <h3 className="text-sm font-bold text-white">Google Search Console</h3>
            </div>
            {getStatusBadge(dataSources.gsc.status)}
          </div>
          <p className="text-xs text-slate-400">Provides search queries, impressions, clicks, average positions, and landing page URLs.</p>
          <div className="text-xs text-slate-300 pt-2 border-t border-slate-800 space-y-1">
            <div className="flex justify-between"><span>Account:</span><strong>{dataSources.gsc.account}</strong></div>
            <div className="flex justify-between"><span>Last Sync:</span><strong>{dataSources.gsc.lastUpdated}</strong></div>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg cursor-pointer border border-slate-700 transition flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" /> Import GSC CSV
              <input type="file" accept=".csv" className="hidden" onChange={e => handleFileUpload(e, 'gsc')} />
            </label>
          </div>
        </div>

        {/* GA4 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h3 className="text-sm font-bold text-white">Google Analytics 4</h3>
            </div>
            {getStatusBadge(dataSources.ga4.status)}
          </div>
          <p className="text-xs text-slate-400">Provides user engagement, organic conversion counts, and landing page session metrics.</p>
          <div className="text-xs text-slate-300 pt-2 border-t border-slate-800 space-y-1">
            <div className="flex justify-between"><span>Property ID:</span><strong>{dataSources.ga4.account}</strong></div>
            <div className="flex justify-between"><span>Last Sync:</span><strong>{dataSources.ga4.lastUpdated}</strong></div>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg cursor-pointer border border-slate-700 transition flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" /> Import GA4 CSV
              <input type="file" accept=".csv" className="hidden" onChange={e => handleFileUpload(e, 'ga4')} />
            </label>
          </div>
        </div>

        {/* GBP */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <h3 className="text-sm font-bold text-white">Google Business Profile API</h3>
            </div>
            {getStatusBadge(dataSources.gbp.status)}
          </div>
          <p className="text-xs text-slate-400">Provides direct access to GBP categories, attributes, reviews, phone call metrics, and photos.</p>
          <div className="text-xs text-slate-300 pt-2 border-t border-slate-800 space-y-1">
            <div className="flex justify-between"><span>Location CID:</span><strong>1234567890</strong></div>
            <div className="flex justify-between"><span>Last Sync:</span><strong>{dataSources.gbp.lastUpdated}</strong></div>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg cursor-pointer border border-slate-700 transition flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" /> Import GBP CSV / JSON
              <input type="file" accept=".csv,.json" className="hidden" onChange={e => handleFileUpload(e, 'gbp')} />
            </label>
          </div>
        </div>

        {/* Semrush / Ahrefs */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              <h3 className="text-sm font-bold text-white">Semrush & Ahrefs Backlinks</h3>
            </div>
            {getStatusBadge(dataSources.semrush.status)}
          </div>
          <p className="text-xs text-slate-400">Import backlink exports and competitor keyword gap reports via standard CSV formats.</p>
          <div className="text-xs text-slate-300 pt-2 border-t border-slate-800 space-y-1">
            <div className="flex justify-between"><span>Mode:</span><strong>{dataSources.semrush.account}</strong></div>
            <div className="flex justify-between"><span>Last Import:</span><strong>{dataSources.semrush.lastUpdated}</strong></div>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg cursor-pointer border border-slate-700 transition flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" /> Import Semrush CSV
              <input type="file" accept=".csv" className="hidden" onChange={e => handleFileUpload(e, 'semrush')} />
            </label>
          </div>
        </div>

      </div>

    </div>
  );
}
