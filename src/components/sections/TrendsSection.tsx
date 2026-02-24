import { FC } from 'react';

const TrendsSection: FC = () => {
  const marketTrends = [
    {
      title: 'Rising Demand for Immigration DNA Testing',
      impact: 'high',
      description: 'USCIS processing times increasing, driving more demand for DNA testing in immigration cases. Consider expanding AABB-accredited services.',
      action: 'Increase immigration DNA marketing by 25%',
      date: 'Jan 15, 2024',
    },
    {
      title: 'New Michigan Child Support Guidelines',
      impact: 'medium',
      description: 'Updated state guidelines may increase paternity testing requirements. Family courts expected to order more DNA tests.',
      action: 'Partner with 5 additional family law firms',
      date: 'Jan 12, 2024',
    },
    {
      title: 'At-Home DNA Kit Market Growing',
      impact: 'medium',
      description: 'Consumer DNA testing market expanding. Opportunity to offer at-home collection kits with legal chain of custody.',
      action: 'Launch at-home legal collection kit service',
      date: 'Jan 10, 2024',
    },
    {
      title: 'Competitor Price Decrease Alert',
      impact: 'low',
      description: 'Detroit DNA Center reduced paternity test pricing by 10%. Current pricing still competitive due to service quality.',
      action: 'Monitor but maintain current pricing',
      date: 'Jan 8, 2024',
    },
  ];

  const industryNews = [
    { headline: 'AABB Updates Accreditation Standards for 2024', source: 'AABB News', date: 'Jan 14' },
    { headline: 'Michigan Family Courts See 15% Increase in DNA Orders', source: 'Detroit Legal Review', date: 'Jan 12' },
    { headline: 'New USCIS DNA Testing Requirements for Immigrant Visas', source: 'Immigration Weekly', date: 'Jan 10' },
    { headline: 'DNA Testing Industry Expected to Grow 12% in 2024', source: 'Market Research Today', date: 'Jan 8' },
  ];

  const metrics = [
    { label: 'Market Position', value: '#2', sublabel: 'in Detroit Metro', change: 'stable' },
    { label: 'Industry Growth', value: '+12%', sublabel: 'YoY projected', change: 'up' },
    { label: 'Demand Index', value: '94', sublabel: 'out of 100', change: 'up' },
    { label: 'Competition', value: '8', sublabel: 'active competitors', change: 'stable' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Market Trends & Intelligence
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">AI-curated insights for First Choice DNA</p>
      </div>

      {/* Market Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
            <p className="text-xs text-slate-500 uppercase">{metric.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-slate-400">{metric.sublabel}</p>
              {metric.change === 'up' && <span className="text-emerald-400 text-xs">↑</span>}
              {metric.change === 'down' && <span className="text-red-400 text-xs">↓</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Key Trends */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">Key Market Trends</h3>
        <div className="space-y-4">
          {marketTrends.map((trend, index) => (
            <div key={index} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-700/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${
                      trend.impact === 'high' ? 'bg-emerald-500/20 text-emerald-400' :
                      trend.impact === 'medium' ? 'bg-cyan-500/20 text-cyan-400' :
                      'bg-slate-700/50 text-slate-400'
                    }`}>
                      {trend.impact} impact
                    </span>
                    <span className="text-xs text-slate-500">{trend.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{trend.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{trend.description}</p>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-cyan-900/20 border border-cyan-800/30">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-xs text-cyan-300">{trend.action}</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/30 transition-all whitespace-nowrap">
                  Take Action
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry News */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <h3 className="text-lg font-semibold text-white mb-4">Industry News Feed</h3>
        <div className="space-y-3">
          {industryNews.map((news, index) => (
            <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#0a1628]/50 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-[#0a1628] flex items-center justify-center flex-shrink-0 border border-cyan-900/30">
                <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2">{news.headline}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500">{news.source}</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-slate-500">{news.date}</span>
                </div>
              </div>
              <svg className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Report */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Weekly Intelligence Report</h3>
            <p className="text-sm text-slate-400 mt-1">Comprehensive market analysis delivered every Monday</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-slate-800/50 border border-cyan-900/30 text-slate-300 text-sm font-medium hover:border-cyan-700/50 transition-all">
              View Last Report
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Generate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsSection;
