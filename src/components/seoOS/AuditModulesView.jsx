import React, { useState } from 'react';
import { Search, Play, ShieldCheck, CheckCircle2, Copy, FileText, ChevronRight, Table } from 'lucide-react';
import { 
  runGbpCategoryAudit, 
  runGbpAttributesAudit, 
  runCompetitorReviewTeardown, 
  runReviewResponseStrategy, 
  runGbpPostsStrategy, 
  runGbpServicesOptimization, 
  runGbpDescriptionOptimization, 
  runGbpPhotoAudit, 
  runKeywordGapAudit, 
  runGscAnalysis, 
  runMoneyPageAudit, 
  runServiceCityPageBuilder, 
  runReviewSentimentAnalysis, 
  runCompetitorBacklinkAudit, 
  runLocalCitationAudit, 
  runLocalSearchIntentMapping, 
  runContentGapAnalysis, 
  runEntityOptimization, 
  runCompetitorPostingPatternAnalysis, 
  runMonthlySeoReport 
} from '../../data/seoOS/auditEngines';
import { initialGscData, initialCitations } from '../../data/seoOS/initialState';

export default function AuditModulesView({ businessContext, competitors }) {
  const [selectedAuditId, setSelectedAuditId] = useState('gbp-category');
  const [copiedId, setCopiedId] = useState(null);

  const auditsList = [
    { id: 'gbp-category', title: '1. GBP Category Audit', runner: () => runGbpCategoryAudit(businessContext, competitors) },
    { id: 'gbp-attributes', title: '2. GBP Attributes Audit', runner: () => runGbpAttributesAudit(businessContext) },
    { id: 'competitor-reviews', title: '3. Competitor Review Teardown', runner: () => runCompetitorReviewTeardown(businessContext, competitors) },
    { id: 'review-responses', title: '4. Review Response Strategy', runner: () => runReviewResponseStrategy() },
    { id: 'gbp-posts', title: '5. GBP Posts 8-Week Strategy', runner: () => runGbpPostsStrategy(businessContext) },
    { id: 'gbp-services-opt', title: '6. GBP Services Optimization', runner: () => runGbpServicesOptimization(businessContext) },
    { id: 'gbp-description-opt', title: '7. GBP Description (3 Versions)', runner: () => runGbpDescriptionOptimization(businessContext) },
    { id: 'gbp-photo-audit', title: '8. GBP Photo & Media Audit', runner: () => runGbpPhotoAudit(businessContext, competitors) },
    { id: 'keyword-gap', title: '9. Keyword Gap Audit', runner: () => runKeywordGapAudit(initialGscData) },
    { id: 'gsc-analysis', title: '10. GSC Performance Sprint', runner: () => runGscAnalysis(initialGscData) },
    { id: 'money-page-audit', title: '11. Money Page Audit', runner: () => runMoneyPageAudit() },
    { id: 'service-city-builder', title: '12. Service + City Page Builder', runner: () => runServiceCityPageBuilder(businessContext) },
    { id: 'review-sentiment', title: '13. Review Sentiment Analysis', runner: () => runReviewSentimentAnalysis() },
    { id: 'competitor-backlinks', title: '14. Competitor Backlink Audit', runner: () => runCompetitorBacklinkAudit() },
    { id: 'citation-audit', title: '15. Local Citation Audit', runner: () => runLocalCitationAudit(initialCitations) },
    { id: 'search-intent-mapping', title: '16. Search Intent Mapping', runner: () => runLocalSearchIntentMapping() },
    { id: 'content-gap', title: '17. Content Gap Analysis', runner: () => runContentGapAnalysis() },
    { id: 'entity-optimization', title: '18. Entity Optimization', runner: () => runEntityOptimization(businessContext) },
    { id: 'competitor-post-patterns', title: '19. Competitor Post Patterns', runner: () => runCompetitorPostingPatternAnalysis(competitors) },
    { id: 'monthly-report', title: '20. Executive Monthly Report', runner: () => runMonthlySeoReport(businessContext) }
  ];

  const currentAuditObj = auditsList.find(a => a.id === selectedAuditId) || auditsList[0];
  const auditResult = currentAuditObj.runner();

  const copyText = (text, id) => {
    navigator.clipboard.writeText(typeof text === 'object' ? JSON.stringify(text, null, 2) : text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* Sidebar Navigation for 20 Audit Engines */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 h-fit">
        <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 px-2">20 Audit Engine Modules</h3>
        <div className="space-y-1">
          {auditsList.map(a => (
            <button
              key={a.id}
              onClick={() => setSelectedAuditId(a.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                selectedAuditId === a.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="truncate">{a.title}</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Active Audit Output Workspace */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* Module Title Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-400" />
              {auditResult.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Executed with 4-tier verified data standard. No generic recommendations.
            </p>
          </div>
          <button
            onClick={() => copyText(auditResult, 'full')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg border border-slate-700 transition flex items-center gap-1.5"
          >
            <Copy className="w-3.5 h-3.5" /> {copiedId === 'full' ? 'Copied Full Output!' : 'Copy Audit Output'}
          </button>
        </div>

        {/* 4-Tier Data Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 border border-emerald-500/30 p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Verified Data</span>
            <p className="text-xs text-slate-200">{auditResult.verifiedData}</p>
          </div>
          <div className="bg-slate-900/80 border border-blue-500/30 p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">User Provided</span>
            <p className="text-xs text-slate-200">{auditResult.userProvided}</p>
          </div>
          <div className="bg-slate-900/80 border border-purple-500/30 p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">Analysis</span>
            <p className="text-xs text-slate-200">{auditResult.analysis}</p>
          </div>
          <div className="bg-slate-900/80 border border-amber-500/30 p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wide">Recommendation</span>
            <p className="text-xs text-slate-200">{auditResult.recommendation}</p>
          </div>
        </div>

        {/* Structured Results Table or Custom Render depending on Audit ID */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          
          {/* Audit #1 Table */}
          {auditResult.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-slate-300">
                    <th className="p-3">Category Name</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Business Has?</th>
                    <th className="p-3">Competitor Freq</th>
                    <th className="p-3">Relevance</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {auditResult.table.map((row, idx) => (
                    <tr key={idx} className={row.businessHas === 'NO' ? 'bg-rose-500/10' : ''}>
                      <td className="p-3 font-bold text-white">{row.category}</td>
                      <td className="p-3">{row.role}</td>
                      <td className="p-3 font-bold">{row.businessHas}</td>
                      <td className="p-3">{row.compFreq}</td>
                      <td className="p-3 text-amber-400">{row.relevance}</td>
                      <td className="p-3 font-bold text-emerald-400">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Audit #3 Language Bank */}
          {auditResult.languageBank && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-amber-400 uppercase">Customer Language Bank (Extracted from Competitor Reviews)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(auditResult.languageBank).map(([key, phrases]) => (
                  <div key={key} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">{key} Phrases</span>
                    <ul className="list-disc list-inside text-xs text-slate-200 space-y-0.5">
                      {phrases.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audit #5 Calendar */}
          {auditResult.calendar && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase">8-Week GBP Posting Schedule</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {auditResult.calendar.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400">{item.week} ({item.date})</span>
                      <span className="text-[10px] text-slate-400">{item.location}</span>
                    </div>
                    <h5 className="text-xs font-bold text-white">{item.topic}</h5>
                    <p className="text-xs text-slate-300">{item.suggestedCopy}</p>
                    <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                      <span>CTA: <strong className="text-emerald-400">{item.cta}</strong></span>
                      <span>Photo: <strong className="text-slate-300">{item.imageIdea}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audit #7 Versions */}
          {auditResult.versions && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase">3 Optimized GBP Descriptions (Max 750 Chars)</h4>
              {auditResult.versions.map((v, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{v.type}</span>
                    <button
                      onClick={() => copyText(v.text, `ver-${i}`)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> {copiedId === `ver-${i}` ? 'Copied!' : 'Copy Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">{v.text}</p>
                  <span className="text-[10px] text-slate-500 block">Length: {v.text.length} / 750 chars</span>
                </div>
              ))}
            </div>
          )}

          {/* Fallback JSON view for complex outputs */}
          {!auditResult.table && !auditResult.languageBank && !auditResult.calendar && !auditResult.versions && (
            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 overflow-x-auto font-mono">
              {JSON.stringify(auditResult, null, 2)}
            </pre>
          )}

        </div>

      </div>

    </div>
  );
}
