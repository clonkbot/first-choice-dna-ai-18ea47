import { FC, useState } from 'react';

const OutreachSection: FC = () => {
  const [selectedCounty, setSelectedCounty] = useState('all');

  const counties = ['all', 'Wayne', 'Oakland', 'Macomb', 'Washtenaw', 'Livingston'];

  const lawFirms = [
    { name: 'Smith & Associates Family Law', county: 'Wayne', status: 'contacted', response: 'interested', lastContact: '2024-01-14' },
    { name: 'Detroit Family Legal Group', county: 'Wayne', status: 'scheduled', response: 'meeting', lastContact: '2024-01-15' },
    { name: 'Oakland Family Attorneys', county: 'Oakland', status: 'pending', response: null, lastContact: null },
    { name: 'Macomb Divorce Lawyers', county: 'Macomb', status: 'contacted', response: 'no response', lastContact: '2024-01-10' },
    { name: 'Sterling Heights Family Law', county: 'Macomb', status: 'pending', response: null, lastContact: null },
    { name: 'Ann Arbor Legal Services', county: 'Washtenaw', status: 'contacted', response: 'interested', lastContact: '2024-01-12' },
  ];

  const filteredFirms = selectedCounty === 'all' ? lawFirms : lawFirms.filter(f => f.county === selectedCounty);

  const stats = {
    totalFirms: 156,
    contacted: 89,
    interested: 34,
    meetings: 12,
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Law Firm Outreach
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Automated cold email campaigns to Detroit metro family law firms</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Total Firms</p>
          <p className="text-2xl font-bold text-white mt-1">{stats.totalFirms}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Contacted</p>
          <p className="text-2xl font-bold text-cyan-400 mt-1">{stats.contacted}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Interested</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{stats.interested}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Meetings Set</p>
          <p className="text-2xl font-bold text-teal-400 mt-1">{stats.meetings}</p>
        </div>
      </div>

      {/* Campaign Controls */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <h3 className="text-lg font-semibold text-white mb-4">Monthly Email Campaign</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
            <p className="text-xs text-slate-500 uppercase mb-2">Next Campaign</p>
            <p className="text-lg font-semibold text-white">February 1, 2024</p>
            <p className="text-xs text-slate-400 mt-1">67 firms queued</p>
          </div>
          <div className="flex-1 p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
            <p className="text-xs text-slate-500 uppercase mb-2">Email Template</p>
            <p className="text-lg font-semibold text-white">Partnership Proposal v3</p>
            <p className="text-xs text-slate-400 mt-1">38% open rate</p>
          </div>
          <div className="flex-1 p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30">
            <p className="text-xs text-slate-500 uppercase mb-2">Follow-up Sequence</p>
            <p className="text-lg font-semibold text-white">3 Emails, 7 Days</p>
            <p className="text-xs text-slate-400 mt-1">12% response rate</p>
          </div>
        </div>
        <button className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
          Launch Campaign Now
        </button>
      </div>

      {/* Firm List */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-white">Law Firm Database</h3>
          <div className="flex flex-wrap gap-2">
            {counties.map((county) => (
              <button
                key={county}
                onClick={() => setSelectedCounty(county)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCounty === county
                    ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-cyan-700/50'
                }`}
              >
                {county === 'all' ? 'All Counties' : county}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFirms.map((firm) => (
            <div key={firm.name} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-700/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">{firm.name}</p>
                  <p className="text-xs text-slate-500">{firm.county} County</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    firm.status === 'scheduled' ? 'bg-emerald-500/20 text-emerald-400' :
                    firm.status === 'contacted' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-slate-700/50 text-slate-400'
                  }`}>
                    {firm.status}
                  </span>
                  {firm.response && (
                    <span className={`text-xs ${
                      firm.response === 'interested' || firm.response === 'meeting' ? 'text-emerald-400' :
                      'text-slate-500'
                    }`}>
                      {firm.response}
                    </span>
                  )}
                  <button className="p-2 rounded-lg hover:bg-cyan-900/30 transition-colors">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachSection;
