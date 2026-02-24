import { FC } from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'results', label: 'Client Results', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'pricing', label: 'Competitive Pricing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'outreach', label: 'Law Firm Outreach', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'marketing', label: 'Marketing', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' },
  { id: 'phone', label: 'Phone Handler', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { id: 'trends', label: 'Market Trends', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'growth', label: 'Growth Ideas', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

const Sidebar: FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-[#0d1d35] to-[#0a1628] border-r border-cyan-900/30 p-6 flex flex-col z-40">
      {/* Logo */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent tracking-tight">
              First Choice DNA
            </h1>
            <p className="text-[10px] text-cyan-600 uppercase tracking-[0.2em]">AI Automation Suite</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-900/20'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {activeSection === item.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-r" />
            )}
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${activeSection === item.id ? 'text-cyan-400' : 'group-hover:scale-110'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
            <span>{item.label}</span>
            {activeSection === item.id && (
              <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            )}
          </button>
        ))}
      </nav>

      {/* Status indicator */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-medium">System Active</span>
        </div>
        <p className="text-[11px] text-slate-500">All automation agents running smoothly</p>
      </div>
    </aside>
  );
};

export default Sidebar;
