import React from 'react';
import { AlertTriangle, XCircle, Clock } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Most SaaS acquisitions fail <span className="text-red-500">after</span> the deal closes.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Traditional marketplaces rely on surface-level metrics: MRR, ARR, and founder claims. Real failures happen after the acquisition: unexpected churn, technical debt, hidden dependencies, or overestimated valuations. Every mistake costs money, reputation, and trust.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Hidden risks often go unnoticed until it’s too late.
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <XCircle className="w-5 h-5 text-red-500" />
                Current tools lack strategic foresight and deep analysis.
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Clock className="w-5 h-5 text-slate-400" />
                Manual due diligence is slow, inconsistent, and error-prone.
              </li>
            </ul>
          </div>
          
          <div className="relative">
             {/* Abstract Representation of "The Blind Spot" */}
             <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur opacity-20"></div>
             <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8">
               <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">Traditional Due Diligence</p>
                    <p className="text-2xl font-bold text-white">Surface Level</p>
                  </div>
                  <span className="text-red-500 font-mono">DANGER</span>
               </div>
               
               <div className="space-y-3 font-mono text-sm">
                 <div className="flex justify-between text-emerald-500">
                   <span>Reported MRR</span>
                   <span>$42,000</span>
                 </div>
                 <div className="flex justify-between text-emerald-500">
                   <span>Growth Rate</span>
                   <span>+15%</span>
                 </div>
                 <div className="h-px bg-slate-800 my-2"></div>
                 <div className="flex justify-between text-red-400">
                   <span>Real Churn (Hidden)</span>
                   <span>12.4%</span>
                 </div>
                 <div className="flex justify-between text-red-400">
                   <span>Tech Debt Severity</span>
                   <span>Critical</span>
                 </div>
                 <div className="flex justify-between text-red-400">
                   <span>Single Key Dependency</span>
                   <span>Detected</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};