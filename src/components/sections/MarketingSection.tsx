import { FC, useState } from 'react';

const MarketingSection: FC = () => {
  const [activeTab, setActiveTab] = useState('facebook');

  const facebookCampaigns = [
    { name: 'Paternity Testing Awareness', status: 'active', spend: 450, reach: 12500, clicks: 340, conversions: 23 },
    { name: 'Immigration DNA Services', status: 'active', spend: 380, reach: 9800, clicks: 280, conversions: 18 },
    { name: 'Legal DNA Testing', status: 'paused', spend: 220, reach: 5600, clicks: 156, conversions: 11 },
  ];

  const radioSchedule = [
    { station: '97.1 The Ticket', time: 'Morning Drive (6-9 AM)', frequency: '3x weekly', cost: 850 },
    { station: '105.1 The Bounce', time: 'Afternoon (2-6 PM)', frequency: '2x weekly', cost: 620 },
    { station: 'WWJ 950', time: 'News Breaks', frequency: 'Daily', cost: 1200 },
  ];

  const adSuggestions = [
    {
      platform: 'Facebook',
      headline: 'Need DNA Testing? Results in 3-5 Days',
      body: 'AABB accredited. Court-admissible results. Serving Detroit metro families for 15+ years.',
      targetAudience: 'Parents 25-45, Detroit metro, Family law interests',
    },
    {
      platform: 'Radio',
      headline: '30-second spot',
      body: 'When you need answers about paternity, immigration, or legal matters, First Choice DNA delivers accurate, confidential results. Call today for same-day appointments.',
      targetAudience: 'General Detroit market, Drive time listeners',
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Marketing Automation
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Facebook & radio advertising management</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-[#0d1d35] rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('facebook')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'facebook'
              ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-300'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Facebook Ads
        </button>
        <button
          onClick={() => setActiveTab('radio')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'radio'
              ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-300'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Radio Stations
        </button>
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'suggestions'
              ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-300'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          AI Suggestions
        </button>
      </div>

      {/* Facebook Tab */}
      {activeTab === 'facebook' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
              <p className="text-xs text-slate-500 uppercase">Total Spend</p>
              <p className="text-2xl font-bold text-white mt-1">$1,050</p>
              <p className="text-xs text-slate-400">This month</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
              <p className="text-xs text-slate-500 uppercase">Total Reach</p>
              <p className="text-2xl font-bold text-cyan-400 mt-1">27.9K</p>
              <p className="text-xs text-emerald-400">+15% vs last month</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
              <p className="text-xs text-slate-500 uppercase">Conversions</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">52</p>
              <p className="text-xs text-slate-400">$20.19 per conversion</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
              <p className="text-xs text-slate-500 uppercase">CTR</p>
              <p className="text-2xl font-bold text-teal-400 mt-1">2.8%</p>
              <p className="text-xs text-emerald-400">Above average</p>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
            <h3 className="text-lg font-semibold text-white mb-4">Active Campaigns</h3>
            <div className="space-y-3">
              {facebookCampaigns.map((campaign) => (
                <div key={campaign.name} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                      <div>
                        <p className="text-sm font-medium text-white">{campaign.name}</p>
                        <p className="text-xs text-slate-500 capitalize">{campaign.status}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 md:gap-6 text-center">
                      <div>
                        <p className="text-xs text-slate-500">Spend</p>
                        <p className="text-sm font-semibold text-white">${campaign.spend}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Reach</p>
                        <p className="text-sm font-semibold text-cyan-400">{(campaign.reach / 1000).toFixed(1)}K</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Clicks</p>
                        <p className="text-sm font-semibold text-white">{campaign.clicks}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Conv.</p>
                        <p className="text-sm font-semibold text-emerald-400">{campaign.conversions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Radio Tab */}
      {activeTab === 'radio' && (
        <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <h3 className="text-lg font-semibold text-white mb-4">Radio Advertising Schedule</h3>
          <div className="space-y-4">
            {radioSchedule.map((slot) => (
              <div key={slot.station} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-700/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{slot.station}</p>
                      <p className="text-xs text-slate-400">{slot.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Frequency</p>
                      <p className="text-sm font-medium text-cyan-300">{slot.frequency}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500">Monthly Cost</p>
                      <p className="text-sm font-medium text-white">${slot.cost}</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/30 transition-all">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">Total Monthly Radio Budget</p>
                <p className="text-xs text-slate-400">3 stations, mixed dayparts</p>
              </div>
              <p className="text-2xl font-bold text-cyan-300">$2,670</p>
            </div>
          </div>
        </div>
      )}

      {/* AI Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-4">
          <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-lg font-semibold text-white">AI-Generated Ad Content</h3>
            </div>
            <div className="space-y-4">
              {adSuggestions.map((ad, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-cyan-500/20 text-cyan-300">{ad.platform}</span>
                    <span className="text-xs text-slate-500">{ad.headline}</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-3 leading-relaxed">{ad.body}</p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-cyan-900/30">
                    <p className="text-xs text-slate-500">Target: {ad.targetAudience}</p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/30">
                        Use This Ad
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-slate-700/50 text-slate-300 text-xs font-medium hover:bg-slate-700">
                        Regenerate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingSection;
