import { FC } from 'react';

const PhoneSection: FC = () => {
  const recentCalls = [
    { id: 1, caller: '(313) 555-0142', duration: '4:32', type: 'Inquiry', outcome: 'Appointment Set', time: '10:45 AM' },
    { id: 2, caller: '(248) 555-0198', duration: '2:15', type: 'Pricing Question', outcome: 'Info Sent', time: '10:23 AM' },
    { id: 3, caller: '(586) 555-0167', duration: '6:48', type: 'Immigration DNA', outcome: 'Appointment Set', time: '9:56 AM' },
    { id: 4, caller: '(734) 555-0134', duration: '1:45', type: 'Results Check', outcome: 'Transferred', time: '9:30 AM' },
    { id: 5, caller: '(313) 555-0189', duration: '3:22', type: 'Legal DNA', outcome: 'Follow-up Scheduled', time: '9:15 AM' },
  ];

  const callStats = {
    today: 47,
    avgDuration: '3:24',
    appointmentsSet: 12,
    transferRate: '8%',
  };

  const voiceSettings = [
    { name: 'Greeting Style', value: 'Professional & Warm', options: ['Professional & Warm', 'Formal', 'Casual Friendly'] },
    { name: 'Language', value: 'English + Spanish', options: ['English Only', 'English + Spanish', 'English + Arabic'] },
    { name: 'After Hours', value: 'Voicemail + SMS', options: ['Voicemail Only', 'Voicemail + SMS', 'Emergency Forward'] },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            AI Phone Handler
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Intelligent phone system for inquiries & appointments</p>
      </div>

      {/* Live Status */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-800/30">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-lg font-semibold text-emerald-400">Phone System Active</span>
        </div>
        <p className="text-sm text-slate-400 mt-2">AI assistant is ready to handle incoming calls 24/7</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Calls Today</p>
          <p className="text-2xl font-bold text-white mt-1">{callStats.today}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Avg Duration</p>
          <p className="text-2xl font-bold text-cyan-400 mt-1">{callStats.avgDuration}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Appointments</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{callStats.appointmentsSet}</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
          <p className="text-xs text-slate-500 uppercase">Transfer Rate</p>
          <p className="text-2xl font-bold text-teal-400 mt-1">{callStats.transferRate}</p>
        </div>
      </div>

      {/* Recent Calls */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Calls</h3>
        <div className="space-y-3">
          {recentCalls.map((call) => (
            <div key={call.id} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-700/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{call.caller}</p>
                    <p className="text-xs text-slate-500">{call.time} • {call.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                    {call.type}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    call.outcome === 'Appointment Set' ? 'bg-emerald-500/20 text-emerald-400' :
                    call.outcome === 'Transferred' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-slate-700/50 text-slate-300'
                  }`}>
                    {call.outcome}
                  </span>
                  <button className="p-2 rounded-lg hover:bg-cyan-900/30 transition-colors">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voice Settings */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <h3 className="text-lg font-semibold text-white mb-4">AI Voice Settings</h3>
        <div className="space-y-4">
          {voiceSettings.map((setting) => (
            <div key={setting.name} className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-[#0a1628]/50">
              <div>
                <p className="text-sm font-medium text-white">{setting.name}</p>
                <p className="text-xs text-slate-500">Current: {setting.value}</p>
              </div>
              <select className="px-4 py-2 rounded-lg bg-slate-800 border border-cyan-900/30 text-sm text-white focus:outline-none focus:border-cyan-500/50">
                {setting.options.map((opt) => (
                  <option key={opt} value={opt} selected={opt === setting.value}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Call Scripts */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">AI Response Scripts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Pricing Inquiries', 'Appointment Scheduling', 'Result Status', 'Immigration Questions'].map((script) => (
            <button key={script} className="p-4 rounded-xl bg-[#0a1628]/50 border border-cyan-900/30 hover:border-cyan-500/50 text-left transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{script}</span>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500 mt-1">Click to edit script</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
