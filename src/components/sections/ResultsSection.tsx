import { FC, useState } from 'react';

const ResultsSection: FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('standard');

  const pendingResults = [
    { id: '001', client: 'Johnson Family', test: 'Paternity Test', status: 'Ready', email: 'johnson@email.com', date: '2024-01-15' },
    { id: '002', client: 'Maria Santos', test: 'Immigration DNA', status: 'Ready', email: 'msantos@email.com', date: '2024-01-15' },
    { id: '003', client: 'Williams Family', test: 'Sibling Test', status: 'Processing', email: 'williams@email.com', date: '2024-01-14' },
    { id: '004', client: 'Robert Chen', test: 'Grandparent Test', status: 'Ready', email: 'rchen@email.com', date: '2024-01-14' },
  ];

  const templates = [
    { id: 'standard', name: 'Standard Results', description: 'Professional email with PDF attachment' },
    { id: 'legal', name: 'Legal/Court', description: 'Formal documentation for legal proceedings' },
    { id: 'immigration', name: 'Immigration', description: 'AABB accredited results for USCIS' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Client Results Delivery
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Automated result delivery with personalized messaging</p>
      </div>

      {/* Email Templates */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <h3 className="text-lg font-semibold text-white mb-4">Email Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                selectedTemplate === template.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500/50'
                  : 'border-cyan-900/30 hover:border-cyan-700/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${selectedTemplate === template.id ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                <span className="text-sm font-medium text-white">{template.name}</span>
              </div>
              <p className="text-xs text-slate-400">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Pending Results Queue */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d1d35] to-[#0a1628] border border-cyan-900/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-white">Pending Results Queue</h3>
          <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            Send All Ready Results
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-cyan-900/30">
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Client</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Test Type</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-right py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingResults.map((result) => (
                <tr key={result.id} className="border-b border-cyan-900/20 hover:bg-cyan-900/10 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm font-medium text-white">{result.client}</p>
                      <p className="text-xs text-slate-500">{result.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-300">{result.test}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        result.status === 'Ready'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${result.status === 'Ready' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      {result.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400">{result.date}</td>
                  <td className="py-4 px-4 text-right">
                    <button
                      disabled={result.status !== 'Ready'}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        result.status === 'Ready'
                          ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'
                          : 'bg-slate-800/50 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      Send Result
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border border-cyan-800/30">
        <h3 className="text-lg font-semibold text-white mb-4">Automation Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#0a1628]/50">
            <div>
              <p className="text-sm font-medium text-white">Auto-send ready results</p>
              <p className="text-xs text-slate-500">Automatically send results when marked ready</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-cyan-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#0a1628]/50">
            <div>
              <p className="text-sm font-medium text-white">Follow-up reminders</p>
              <p className="text-xs text-slate-500">Send reminder if client hasn't viewed results</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-cyan-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
