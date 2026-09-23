import React, { useState } from 'react';
import SeoOSLayout from '../components/seoOS/SeoOSLayout';
import MainDashboardView from '../components/seoOS/MainDashboardView';
import CompetitorManagerView from '../components/seoOS/CompetitorManagerView';
import OpportunityEngineView from '../components/seoOS/OpportunityEngineView';
import AuditModulesView from '../components/seoOS/AuditModulesView';
import ActionCenterView from '../components/seoOS/ActionCenterView';
import ExecutionRoadmapView from '../components/seoOS/ExecutionRoadmapView';
import PromptLibraryView from '../components/seoOS/PromptLibraryView';
import ReportsExportView from '../components/seoOS/ReportsExportView';
import DataSourcesView from '../components/seoOS/DataSourcesView';

import { 
  initialBusinessContext, 
  initialCompetitors, 
  initialDataSources, 
  initialActionTasks 
} from '../data/seoOS/initialState';
import BusinessOnboardingModal from '../components/seoOS/BusinessOnboardingModal';

export default function SeoOSPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [businessContext, setBusinessContext] = useState(initialBusinessContext);
  const [competitors, setCompetitors] = useState(initialCompetitors);
  const [dataSources, setDataSources] = useState(initialDataSources);
  const [tasks, setTasks] = useState(initialActionTasks);
  const [isEditContextOpen, setIsEditContextOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <MainDashboardView 
            businessContext={businessContext}
            competitors={competitors}
            tasks={tasks}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        );
      case 'business':
        return (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Permanent Business Context</h2>
                <p className="text-xs text-slate-400">Stored baseline parameters automatically utilized by all 20 audit engines.</p>
              </div>
              <button
                onClick={() => setIsEditContextOpen(true)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl"
              >
                Edit Business Context
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold uppercase text-[10px] block">Business Information</span>
                <p><strong>Name:</strong> {businessContext.businessInfo.name}</p>
                <p><strong>Website:</strong> {businessContext.businessInfo.website}</p>
                <p><strong>Phone:</strong> {businessContext.businessInfo.phone}</p>
                <p><strong>Address:</strong> {businessContext.businessInfo.address}, {businessContext.businessInfo.city}, {businessContext.businessInfo.state} - {businessContext.businessInfo.zip}</p>
                <p><strong>Industry:</strong> {businessContext.businessInfo.industry}</p>
                <p><strong>Primary Category:</strong> {businessContext.businessInfo.primaryCategory}</p>
                <p><strong>Secondary Categories:</strong> {businessContext.businessInfo.secondaryCategories.join(", ")}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold uppercase text-[10px] block">Registered Services ({businessContext.services.length})</span>
                <ul className="space-y-1">
                  {businessContext.services.map(s => (
                    <li key={s.id} className="border-b border-slate-900 pb-1">
                      <strong className="text-white">{s.name}</strong> ({s.priority}) — Keyword: <em className="text-amber-300">{s.targetKeyword}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <BusinessOnboardingModal
              isOpen={isEditContextOpen}
              onClose={() => setIsEditContextOpen(false)}
              businessContext={businessContext}
              onSave={(updated) => setBusinessContext(updated)}
            />
          </div>
        );
      case 'competitors':
        return (
          <CompetitorManagerView
            competitors={competitors}
            setCompetitors={setCompetitors}
            businessContext={businessContext}
          />
        );
      case 'audits':
        return (
          <AuditModulesView
            businessContext={businessContext}
            competitors={competitors}
          />
        );
      case 'opportunities':
        return (
          <OpportunityEngineView
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      case 'action-center':
        return (
          <ActionCenterView
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      case 'roadmap':
        return (
          <ExecutionRoadmapView
            tasks={tasks}
          />
        );
      case 'prompt-library':
        return (
          <PromptLibraryView
            onRunAudit={() => setActiveTab('audits')}
            onCreateTask={() => setActiveTab('action-center')}
          />
        );
      case 'reports':
        return (
          <ReportsExportView
            businessContext={businessContext}
            competitors={competitors}
            tasks={tasks}
          />
        );
      case 'data-sources':
        return (
          <DataSourcesView
            dataSources={dataSources}
            setDataSources={setDataSources}
          />
        );
      default:
        return (
          <MainDashboardView 
            businessContext={businessContext}
            competitors={competitors}
            tasks={tasks}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        );
    }
  };

  return (
    <SeoOSLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      businessContext={businessContext}
      setBusinessContext={setBusinessContext}
      dataSources={dataSources}
    >
      {renderActiveView()}
    </SeoOSLayout>
  );
}
