import { FC } from 'react';

const PricingSection: FC = () => {
  const competitors = [
    { name: 'DNA Diagnostics', paternity: 299, legal: 450, immigration: 550, trend: 'stable' },
    { name: 'Genetics Lab MI', paternity: 275, legal: 425, immigration: 525, trend: 'up' },
    { name: 'Detroit DNA Center', paternity: 325, legal: 475, immigration: 575, trend: 'down' },
    { name: 'Metro Testing', paternity: 289, legal: 440, immigration: 540, trend: 'stable' },
  ];

  const yourPricing = { paternity: 249, legal: 399, immigration: 499 };

  const recommendations = [
    { test: 'Paternity Test', current: 249, suggested: 269, reason: 'Market average is $297. Room for $20 increase while staying competitive.' },
    { test: 'Legal DNA Test', current: 399, suggested: 419, reason: 'Premium positioning possible. Competitors average $448.' },
    { test: 'Immigration DNA', current: 499, suggested: 499, reason: 'Already well-positioned. AABB accreditation justifies premium.' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Competitive Pricing Intelligence
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Real-time competitor monitoring & pricing optimization</p>
      </div>

      {/* Your Pricing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(yourPricing).map(([test, price]) => (
          <div key={test} className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/30">
            <p className="text-xs text-cyan-400 uppercase tracking-wider mb-2">Your Price</p>
            <p className="text-sm font-medium text-white capitalize mb-1">{test.replace(/([A-Z])/g, ' $1').trim()} Test</p>
            <p className="text-3xl md:text-4xl font-bold text-white">${price}</p>
          </div>
        ))}
      </div>

      {/* Competitor Analysis */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">Competitor Price Tracking</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-cyan-900/30">
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Competitor</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Paternity</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Legal</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Immigration</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-cyan-500/30 bg-cyan-500/10">
                <td className="py-4 px-4 text-sm font-semibold text-cyan-300">First Choice DNA (You)</td>
                <td className="py-4 px-4 text-sm text-emerald-400 font-semibold">${yourPricing.paternity}</td>
                <td className="py-4 px-4 text-sm text-emerald-400 font-semibold">${yourPricing.legal}</td>
                <td className="py-4 px-4 text-sm text-emerald-400 font-semibold">${yourPricing.immigration}</td>
                <td className="py-4 px-4">
                  <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300">Leader</span>
                </td>
              </tr>
              {competitors.map((comp) => (
                <tr key={comp.name} className="border-b border-cyan-900/20 hover:bg-cyan-900/10 transition-colors">
                  <td className="py-4 px-4 text-sm text-slate-300">{comp.name}</td>
                  <td className="py-4 px-4 text-sm text-slate-400">${comp.paternity}</td>
                  <td className="py-4 px-4 text-sm text-slate-400">${comp.legal}</td>
                  <td className="py-4 px-4 text-sm text-slate-400">${comp.immigration}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 text-xs ${
                      comp.trend === 'up' ? 'text-red-400' : comp.trend === 'down' ? 'text-emerald-400' : 'text-slate-400'
                    }`}>
                      {comp.trend === 'up' && '↑'}
                      {comp.trend === 'down' && '↓'}
                      {comp.trend === 'stable' && '→'}
                      {comp.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-lg font-semibold text-white">AI Pricing Recommendations</h3>
        </div>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.test} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                <span className="text-sm font-medium text-white">{rec.test}</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">${rec.current}</span>
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className={`font-semibold ${rec.suggested > rec.current ? 'text-emerald-400' : 'text-cyan-300'}`}>
                    ${rec.suggested}
                  </span>
                  {rec.suggested > rec.current && (
                    <span className="text-xs text-emerald-400">+${rec.suggested - rec.current}</span>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-500">{rec.reason}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
          Apply Recommended Pricing
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
