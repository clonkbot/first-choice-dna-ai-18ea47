import { FC } from 'react';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  delay?: number;
}

const StatCard: FC<StatCardProps> = ({ label, value, change, positive, delay = 0 }) => {
  return (
    <div
      className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30 hover:border-cyan-700/50 transition-all duration-300 group animate-slideUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">{label}</span>
        <div className="flex items-end justify-between">
          <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
            {value}
          </span>
          <span
            className={`text-xs md:text-sm font-medium px-2 py-1 rounded-lg ${
              positive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
            }`}
          >
            {change}
          </span>
        </div>
      </div>
      <div className="mt-3 h-1 rounded-full bg-cyan-900/30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1000 group-hover:w-full"
          style={{ width: '70%' }}
        />
      </div>
    </div>
  );
};

export default StatCard;
