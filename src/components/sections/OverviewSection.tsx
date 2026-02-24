import { FC } from 'react';
import StatCard from '../StatCard';
import AgentCard from '../AgentCard';

const OverviewSection: FC = () => {
  const stats = [
    { label: 'Results Sent Today', value: '24', change: '+12%', positive: true },
    { label: 'Law Firms Contacted', value: '156', change: '+8%', positive: true },
    { label: 'Phone Calls Handled', value: '47', change: '+23%', positive: true },
    { label: 'Market Score', value: '94', change: '+5', positive: true },
  ];

  const agents = [
    {
      name: 'Results Delivery Agent',
      status: 'active' as const,
      description: 'Automatically sends DNA test results to clients via email with personalized messaging and follow-up scheduling.',
      lastAction: 'Sent results to Johnson family - 2 min ago',
    },
    {
      name: 'Pricing Intelligence Agent',
      status: 'active' as const,
      description: 'Monitors competitor pricing across Michigan DNA testing market and suggests optimal pricing strategies.',
      lastAction: 'Updated pricing matrix - 15 min ago',
    },
    {
      name: 'Law Firm Outreach Agent',
      status: 'active' as const,
      description: 'Identifies and cold emails family law firms in Detroit metro area with partnership opportunities.',
      lastAction: 'Emailed 12 firms in Wayne County - 1 hr ago',
    },
    {
      name: 'Marketing Automation Agent',
      status: 'active' as const,
      description: 'Manages Facebook ad campaigns and coordinates with local radio stations for promotional spots.',
      lastAction: 'Scheduled radio ad on 97.1 - 3 hrs ago',
    },
    {
      name: 'Phone Handler Agent',
      status: 'idle' as const,
      description: 'AI-powered phone system that handles inquiries, schedules appointments, and provides test information.',
      lastAction: 'Waiting for next call',
    },
    {
      name: 'Market Intelligence Agent',
      status: 'active' as const,
      description: 'Tracks industry trends, regulatory changes, and market opportunities in the DNA testing sector.',
      lastAction: 'Generated weekly trends report - 5 hrs ago',
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Automation Command Center
          </span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          AI agents working 24/7 to grow First Choice DNA
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 100} />
        ))}
      </div>

      {/* Active Agents */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Active AI Agents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agents.map((agent, index) => (
            <AgentCard key={agent.name} {...agent} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          {['Run All Agents', 'Generate Report', 'Send Bulk Results', 'Update Pricing'].map((action) => (
            <button
              key={action}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
