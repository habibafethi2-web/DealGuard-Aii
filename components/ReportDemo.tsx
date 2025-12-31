import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip
} from 'recharts';

const data = [
  { subject: 'Financial Health', A: 85, fullMark: 100 },
  { subject: 'Tech Stack', A: 45, fullMark: 100 },
  { subject: 'Market Fit', A: 90, fullMark: 100 },
  { subject: 'Legal/Comp', A: 70, fullMark: 100 },
  { subject: 'Scalability', A: 60, fullMark: 100 },
  { subject: 'User Sentiment', A: 88, fullMark: 100 },
];

const churnData = [
  { month: 'Jan', stated: 2.1, actual: 2.3 },
  { month: 'Feb', stated: 2.0, actual: 2.5 },
  { month: 'Mar', stated: 1.9, actual: 4.8 }, // Spike
];

export const ReportDemo: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">Sample Strategic Intelligence Report</h2>
            <p className="text-slate-400 mb-8">
              This sample shows how DealGuard AI evaluates a SaaS company (hypothetical demo) to produce actionable insights:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Risk Scores for financial, technical, and operational health",
                "Identification of hidden red flags and critical weaknesses",
                "Competitive positioning and potential threats",
                "Recommended acquisition strategy or caution signals"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
              View Full Report Example →
            </button>
          </div>

          <div className="order-1 lg:order-2 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden">
            {/* UI Header */}
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold text-white">DealGuard Audit: <span className="text-slate-400 font-normal">SaaS_Target_Alpha</span></h3>
                <p className="text-xs text-slate-500">Generated: Just now</p>
              </div>
              <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold rounded">
                CAUTION: TECH DEBT
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Overall Deal Score</p>
                <div className="text-3xl font-bold text-white">72<span className="text-sm text-slate-500 font-normal">/100</span></div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-500 mb-2">Failure Probability (12mo)</p>
                <div className="text-3xl font-bold text-red-400">High</div>
              </div>
            </div>

            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Target"
                    dataKey="A"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 p-3 bg-red-950/20 border border-red-900/30 rounded text-xs text-red-200">
              <strong>Alert:</strong> Technical assessment indicates significant refactoring required. Stated churn (1.9%) diverges from payment processor data (4.8%) in March.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};