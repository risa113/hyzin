import React from 'react';
import { Calendar, CheckCircle2, Circle, Clock, ArrowRight, Zap } from 'lucide-react';

export default function ExecutionRoadmapView({ tasks }) {
  const weeks = [
    {
      weekRange: "WEEK 1",
      title: "Foundation & GBP Setup",
      tasks: [
        "Store persistent business context and services list",
        "Execute GBP Category Audit & add missing secondary categories",
        "Execute GBP Attributes Audit & enable online estimates"
      ]
    },
    {
      weekRange: "WEEK 2",
      title: "Competitor Teardown & Review Response Strategy",
      tasks: [
        "Run Competitor Review Teardown & build Customer Language Bank",
        "Deploy natural review response templates for 1-5 star reviews",
        "Formulate 8-Week GBP Posting Strategy"
      ]
    },
    {
      weekRange: "WEEK 3",
      title: "GBP Optimization & Photo Sprint",
      tasks: [
        "Audit existing GBP service descriptions and rewrite with location hooks",
        "Publish 3 optimized GBP description variants (750 chars)",
        "Execute Week 1-2 Photo Audit plan (Exterior & Team photos)"
      ]
    },
    {
      weekRange: "WEEK 4",
      title: "Keyword Gap & GSC Sprint",
      tasks: [
        "Identify Page 2 strike distance keywords in GSC",
        "Optimize title tags for high impression / low CTR terms",
        "Eliminate query cannibalization on homepage"
      ]
    },
    {
      weekRange: "WEEKS 5–6",
      title: "Money Pages & Hyper-Local Pages",
      tasks: [
        "Audit revenue-driving money pages for conversion elements",
        "Deploy Service + City pages (e.g. Aluminium Kitchen in Kakkanad)",
        "Translate review sentiment analysis into sales copywriting"
      ]
    },
    {
      weekRange: "WEEKS 7–8",
      title: "Backlinks, Citations & Intent Mapping",
      tasks: [
        "Execute Local Citation Audit & fix Justdial / TradeIndia NAP errors",
        "Acquire high-relevance local Kerala directory backlinks",
        "Map keywords across 5 local search intent funnel stages"
      ]
    },
    {
      weekRange: "WEEKS 9–10",
      title: "Content Gap & Entity Optimization",
      tasks: [
        "Publish educational buying guide (Aluminium vs Wood Kitchen Cost)",
        "Inject JSON-LD LocalBusiness & Organization entity schema",
        "Audit competitor GBP post frequency patterns"
      ]
    },
    {
      weekRange: "WEEKS 11–12",
      title: "Monthly Reporting & Sprint Review",
      tasks: [
        "Synthesize Executive Monthly SEO Report",
        "Measure GSC clicks, impressions & GBP call growth",
        "Identify winning strategies and plan next 12-week sprint"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            12-Week SEO Execution Engine
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Structured 90-day execution roadmap generated directly from audit outputs.
          </p>
        </div>
        <div className="px-3 py-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-xl text-xs font-bold">
          Sprint Status: Active (Week 2 of 12)
        </div>
      </div>

      {/* 12-Week Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeks.map((w, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="px-2.5 py-0.5 text-xs font-black rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {w.weekRange}
              </span>
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Scheduled
              </span>
            </div>

            <h3 className="text-sm font-bold text-white">{w.title}</h3>

            <ul className="space-y-2 text-xs text-slate-300">
              {w.tasks.map((taskText, taskIdx) => (
                <li key={taskIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{taskText}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
