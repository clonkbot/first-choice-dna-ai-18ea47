import { FC } from 'react';

interface AgentCardProps {
  name: string;
  status: 'active' | 'idle' | 'paused';
  description: string;
  lastAction: string;
  delay?: number;
}

const AgentCard: FC<AgentCardProps> = ({ name, status, description, lastAction, delay = 0 }) => {
  const statusColors = {
    active: 'bg-emerald-400',
    idle: 'bg-amber-400',
    paused: 'bg-slate-400',
  };

  const statusLabels = {
    active: 'Active',
    idle: 'Idle',
    paused: 'Paused',
  };

  return (
    <div
      className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30 hover:border-cyan-700/50 transition-all duration-300 group animate-slideUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-semibold text-white">{name}</h4>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${statusColors[status]} ${status === 'active' ? 'animate-pulse' : ''}`} />
              <span className="text-xs text-slate-500">{statusLabels[status]}</span>
            </div>
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-cyan-900/30 transition-colors">
          <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      <p className="text-xs md:text-sm text-slate-400 mb-3 leading-relaxed">{description}</p>
      <div className="pt-3 border-t border-cyan-900/30">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{lastAction}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
