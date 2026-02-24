import { FC, useState } from 'react';

const GrowthSection: FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1');

  const growthIdeas = [
    {
      title: 'Mobile DNA Collection Service',
      category: 'Service Expansion',
      timeline: 'Q1 2024',
      impact: 'High',
      effort: 'Medium',
      description: 'Launch mobile collection service visiting homes, offices, and law firms. Reduces friction for clients and differentiates from competitors.',
      steps: ['Hire 2 certified collectors', 'Purchase mobile collection kits', 'Partner with rideshare for logistics', 'Marketing campaign launch'],
      projectedRevenue: '+$45K/year',
    },
    {
      title: 'Law Firm Partnership Program',
      category: 'B2B Growth',
      timeline: 'Q1-Q2 2024',
      impact: 'High',
      effort: 'Low',
      description: 'Create exclusive partnership tier for family law firms with volume discounts, priority processing, and dedicated account management.',
      steps: ['Design partnership tiers', 'Create sales materials', 'Outreach to top 20 firms', 'Onboard first 5 partners'],
      projectedRevenue: '+$80K/year',
    },
    {
      title: 'Immigration DNA Express Service',
      category: 'Premium Offering',
      timeline: 'Q2 2024',
      impact: 'Medium',
      effort: 'Low',
      description: 'Offer expedited 24-48 hour processing for immigration cases at premium pricing. High demand due to visa timeline pressures.',
      steps: ['Negotiate rush processing with lab', 'Set premium pricing ($799)', 'Update website and marketing', 'Train staff on new service'],
      projectedRevenue: '+$35K/year',
    },
    {
      title: 'Grandparent & Sibling Testing Campaign',
      category: 'Marketing',
      timeline: 'Q2 2024',
      impact: 'Medium',
      effort: 'Medium',
      description: 'Targeted marketing for relationship testing beyond paternity. Underserved market with emotional appeal.',
      steps: ['Develop emotional ad creative', 'Target audience research', 'Facebook/Instagram campaign', 'Landing page optimization'],
      projectedRevenue: '+$25K/year',
    },
    {
      title: 'Corporate Wellness DNA Program',
      category: 'New Market',
      timeline: 'Q3 2024',
      impact: 'Medium',
      effort: 'High',
      description: 'Partner with employers to offer genetic health screening as employee benefit. Emerging corporate wellness trend.',
      steps: ['Develop B2B pricing model', 'Create corporate presentation', 'Target 50 local employers', 'Pilot with 3 companies'],
      projectedRevenue: '+$60K/year',
    },
    {
      title: 'Ancestry DNA Verification Service',
      category: 'Service Expansion',
      timeline: 'Q3-Q4 2024',
      impact: 'Low',
      effort: 'Low',
      description: 'Offer legal verification of consumer ancestry test results for estate and tribal enrollment cases.',
      steps: ['Research legal requirements', 'Partner with ancestry labs', 'Create verification protocol', 'Launch marketing'],
      projectedRevenue: '+$15K/year',
    },
  ];

  const quarterlyGoals = {
    Q1: [
      { goal: 'Launch mobile collection service', status: 'in-progress' },
      { goal: 'Onboard 5 law firm partners', status: 'not-started' },
      { goal: 'Increase Facebook ad spend by 25%', status: 'completed' },
      { goal: 'Hire 1 additional staff member', status: 'in-progress' },
    ],
    Q2: [
      { goal: 'Launch immigration express service', status: 'not-started' },
      { goal: 'Reach 200 law firms contacted', status: 'not-started' },
      { goal: 'Expand radio advertising', status: 'not-started' },
      { goal: 'Website redesign launch', status: 'not-started' },
    ],
    Q3: [
      { goal: 'Corporate wellness pilot program', status: 'not-started' },
      { goal: 'Open second collection location', status: 'not-started' },
      { goal: 'Reach $50K monthly revenue', status: 'not-started' },
      { goal: 'Implement CRM system', status: 'not-started' },
    ],
    Q4: [
      { goal: 'Launch ancestry verification service', status: 'not-started' },
      { goal: 'Year-end marketing push', status: 'not-started' },
      { goal: 'Strategic planning for 2025', status: 'not-started' },
      { goal: 'Staff bonus program', status: 'not-started' },
    ],
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Growth Strategy & Ideas
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">AI-generated growth opportunities for the next year</p>
      </div>

      {/* Revenue Projection */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-cyan-400 uppercase tracking-wider mb-1">Projected Additional Revenue</p>
            <p className="text-3xl md:text-4xl font-bold text-white">+$260,000</p>
            <p className="text-sm text-slate-400 mt-1">if all growth initiatives implemented</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-xl bg-[#0a1628]/50">
              <p className="text-2xl font-bold text-emerald-400">6</p>
              <p className="text-xs text-slate-500">Growth Ideas</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#0a1628]/50">
              <p className="text-2xl font-bold text-cyan-400">12</p>
              <p className="text-xs text-slate-500">Months Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Ideas */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">AI-Generated Growth Opportunities</h3>
        <div className="space-y-4">
          {growthIdeas.map((idea, index) => (
            <details key={index} className="group rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-700/50 transition-all">
              <summary className="p-4 cursor-pointer list-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30 flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-cyan-400">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{idea.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded text-xs bg-cyan-500/20 text-cyan-400">{idea.category}</span>
                        <span className="text-xs text-slate-500">{idea.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-semibold text-emerald-400">{idea.projectedRevenue}</p>
                      <p className="text-xs text-slate-500">projected</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-cyan-900/30 mt-2">
                <p className="text-sm text-slate-400 mb-4">{idea.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Impact:</span>
                    <span className={`text-xs font-medium ${
                      idea.impact === 'High' ? 'text-emerald-400' :
                      idea.impact === 'Medium' ? 'text-cyan-400' : 'text-slate-400'
                    }`}>{idea.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Effort:</span>
                    <span className={`text-xs font-medium ${
                      idea.effort === 'Low' ? 'text-emerald-400' :
                      idea.effort === 'Medium' ? 'text-amber-400' : 'text-red-400'
                    }`}>{idea.effort}</span>
                  </div>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-xs text-slate-500">Revenue:</span>
                    <span className="text-xs font-medium text-emerald-400">{idea.projectedRevenue}</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#0d1d35]/50 border border-cyan-900/20">
                  <p className="text-xs text-slate-500 uppercase mb-2">Implementation Steps</p>
                  <div className="space-y-2">
                    {idea.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-500">
                          {i + 1}
                        </div>
                        <span className="text-sm text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm font-medium hover:bg-cyan-500/30 transition-all">
                  Start This Initiative
                </button>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Quarterly Roadmap */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">2024 Quarterly Roadmap</h3>

        {/* Quarter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuarter(q)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                selectedQuarter === q
                  ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-cyan-700/50'
              }`}
            >
              {q} 2024
            </button>
          ))}
        </div>

        {/* Goals List */}
        <div className="space-y-3">
          {quarterlyGoals[selectedQuarter as keyof typeof quarterlyGoals].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                item.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400' :
                'bg-slate-700/50 text-slate-500'
              }`}>
                {item.status === 'completed' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : item.status === 'in-progress' ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                )}
              </div>
              <span className={`text-sm ${item.status === 'completed' ? 'text-slate-500 line-through' : 'text-white'}`}>
                {item.goal}
              </span>
              <span className={`ml-auto text-xs px-2 py-1 rounded ${
                item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                item.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400' :
                'bg-slate-700/50 text-slate-500'
              }`}>
                {item.status.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
