import React from 'react';
import { Fingerprint, TrendingUp, History, Lock, Award } from 'lucide-react';

export const USP: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why DealGuard AI Can’t Be Replicated</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Unlike other SaaS tools, DealGuard AI doesn’t just summarize data — it generates intelligence that informs high-stakes decisions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700">
          <Fingerprint className="w-10 h-10 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Unmatched Risk Insight</h3>
          <p className="text-slate-400">Deep scanning algorithms detect red flags that standard due diligence checklists miss entirely.</p>
        </div>
        
        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700">
          <TrendingUp className="w-10 h-10 text-emerald-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Actionable Strategy</h3>
          <p className="text-slate-400">We don't just tell you what's wrong; we provide a roadmap to outperform competitors post-close.</p>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700">
          <History className="w-10 h-10 text-purple-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Intelligence Memory</h3>
          <p className="text-slate-400">Enterprise-grade historical tracking ensures you spot trends over time, not just snapshots.</p>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700">
          <Lock className="w-10 h-10 text-amber-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Buyer Protection</h3>
          <p className="text-slate-400">Significantly reduce legal exposure and protect buyer trust with evidence-based verification.</p>
        </div>

        <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 flex flex-col justify-center items-center text-center">
          <Award className="w-12 h-12 text-white mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Enable New Revenue Streams</h3>
          <p className="text-slate-300 max-w-lg">
            Use DealGuard to power "Verified Listings", certified tiers, and premium buyer reports. Monetize trust.
          </p>
        </div>
      </div>
    </section>
  );
};