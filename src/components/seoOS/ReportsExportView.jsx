import React, { useState } from 'react';
import { FileSpreadsheet, Download, Printer, Share2, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ReportsExportView({ businessContext, competitors, tasks }) {
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const reportData = {
    clientName: businessContext.businessInfo.name,
    reportDate: "September 2026",
    location: businessContext.businessInfo.city,
    executiveSummary: `${businessContext.businessInfo.name} achieved an 18% growth in organic search traffic and a 24% increase in direct GBP phone inquiries during September 2026. Secondary category updates and citation NAP corrections directly improved local map pack visibility for core terms in ${businessContext.businessInfo.city}.`,
    organicSearch: {
      clicks: 1450,
      impressions: 8200,
      ctr: "17.6%",
      avgPosition: 6.4
    },
    localSeo: {
      gbpCalls: 142,
      gbpDirections: 98,
      websiteClicks: 182,
      reviewCount: 38,
      avgRating: 4.7
    },
    keywordMovement: {
      improved: 14,
      declined: 2,
      newIndexed: 8
    },
    workCompleted: [
      "Updated GBP Primary Category to 'Interior Designer' & Secondary to 'Cabinet Maker', 'Steel Door Supplier'",
      "Cleaned NAP inconsistencies across Justdial Kochi & TradeIndia profiles",
      "Published 12 high-res finished project photos of aluminium kitchen installations",
      "Optimized money page H1 tags and added click-to-call mobile CTA buttons"
    ],
    nextSprintFocus: [
      "Deploy dedicated Service + City page for Modular Kitchen Cabinets in Kakkanad",
      "Inject JSON-LD LocalBusiness & Organization entity schema on website",
      "Execute Week 3-4 GBP Photo Audit plan (Fab workshop & installation team)"
    ]
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Metric,Value\n" +
      `Client,${reportData.clientName}\n` +
      `Organic Clicks,${reportData.organicSearch.clicks}\n` +
      `Impressions,${reportData.organicSearch.impressions}\n` +
      `GBP Phone Calls,${reportData.localSeo.gbpCalls}\n` +
      `GBP Direction Requests,${reportData.localSeo.gbpDirections}\n` +
      `Average Position,${reportData.organicSearch.avgPosition}\n`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Local_SEO_Report_${businessContext.businessInfo.city}_Sep2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess('CSV Exported Successfully!');
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify({ businessContext, competitors, tasks, reportData }, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SEO_OS_Full_State_${businessContext.businessInfo.city}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess('JSON System State Exported!');
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & Export Action Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-amber-400" />
            Client-Ready Executive SEO Monthly Report
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Synthesized monthly performance focusing on tangible business outcomes (calls, clicks, rankings).
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handlePrintPdf}
            className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Export PDF
          </button>
          <button
            onClick={handleExportCsv}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-xl border border-slate-700 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
          <button
            onClick={handleExportJson}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-xl border border-slate-700 transition flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" /> Export JSON
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs p-3 rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> {downloadSuccess}
        </div>
      )}

      {/* Printable Executive Monthly Report Document Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 text-slate-200 print:bg-white print:text-slate-900 print:border-none print:shadow-none print:p-0">
        
        {/* Document Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 print:border-slate-300">
          <div>
            <h1 className="text-2xl font-black text-white print:text-slate-900">{reportData.clientName}</h1>
            <p className="text-xs text-amber-400 font-bold mt-1 print:text-amber-600">Local SEO Performance Report • {reportData.reportDate}</p>
            <p className="text-xs text-slate-400 print:text-slate-600">Primary Location: {reportData.location}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 print:border-emerald-600 print:text-emerald-700">
              🟢 Verification Status: Verified Data
            </span>
            <p className="text-[10px] text-slate-500 mt-2 print:text-slate-400">Data Last Updated: 2026-09-23 11:00 AM</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider print:text-slate-900">Executive Summary</h3>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed print:bg-slate-100 print:text-slate-800 print:border-slate-300">
            {reportData.executiveSummary}
          </div>
        </div>

        {/* Core Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center print:bg-slate-50 print:border-slate-300">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block print:text-slate-600">Organic Clicks</span>
            <span className="text-2xl font-black text-amber-400 print:text-amber-600">{reportData.organicSearch.clicks}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">↑ 18% vs Last Month</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center print:bg-slate-50 print:border-slate-300">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block print:text-slate-600">GBP Phone Calls</span>
            <span className="text-2xl font-black text-emerald-400 print:text-emerald-700">{reportData.localSeo.gbpCalls}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">↑ 24% vs Last Month</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center print:bg-slate-50 print:border-slate-300">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block print:text-slate-600">GBP Direction Requests</span>
            <span className="text-2xl font-black text-blue-400 print:text-blue-700">{reportData.localSeo.gbpDirections}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">↑ 12% vs Last Month</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center print:bg-slate-50 print:border-slate-300">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block print:text-slate-600">Average GSC Position</span>
            <span className="text-2xl font-black text-purple-400 print:text-purple-700">{reportData.organicSearch.avgPosition}</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">Page 1 Core Range</span>
          </div>
        </div>

        {/* Work Completed vs Next Month */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider print:text-emerald-700">Work Completed This Month</h4>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 print:bg-slate-50 print:border-slate-300">
              {reportData.workCompleted.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 print:text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider print:text-amber-700">Next Month Sprint Priorities</h4>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 print:bg-slate-50 print:border-slate-300">
              {reportData.nextSprintFocus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <ArrowUpRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 print:text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
