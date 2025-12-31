import React from 'react';
import { DollarSign, Code, FileCheck, TrendingDown, Scale, Swords, Eye, BrainCircuit } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
    <div className="mb-4 p-3 bg-slate-950 rounded-lg w-fit group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            DealGuard AI: <br />
            <span className="text-blue-500">The Acquisition Intelligence Engine</span>
          </h2>
          <p className="text-lg text-slate-400">
            DealGuard AI combines the expertise of a SaaS investor, M&A analyst, CTO auditor, and risk specialist into a single AI-powered system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<DollarSign className="text-emerald-400" />} 
            title="Financial Integrity" 
            desc="Detect inflated metrics, hidden churn, and non-recurring revenue for realistic financial risk scores." 
          />
          <FeatureCard 
            icon={<Code className="text-indigo-400" />} 
            title="Technical Health" 
            desc="Evaluate scalability, security, maintainability, and code quality to identify technical debt." 
          />
          <FeatureCard 
            icon={<FileCheck className="text-cyan-400" />} 
            title="Claim Consistency" 
            desc="Compare founder statements directly with actual data points to flag inconsistencies instantly." 
          />
          <FeatureCard 
            icon={<TrendingDown className="text-rose-400" />} 
            title="Business Stress Test" 
            desc="Simulate outcomes under scenarios like founder exit or marketing stop to predict failure probability." 
          />
          <FeatureCard 
            icon={<Scale className="text-amber-400" />} 
            title="Valuation Sanity" 
            desc="Compare metrics against real-time market norms to justify (or dispute) the acquisition price." 
          />
          <FeatureCard 
            icon={<Swords className="text-orange-400" />} 
            title="Competitive War Engine" 
            desc="Analyze competitors, market gaps, and generate actionable strategies to win post-acquisition." 
          />
          <FeatureCard 
            icon={<Eye className="text-purple-400" />} 
            title="Visual Product Judgment" 
            desc="Assess UI/UX screenshots to determine product readiness, modernity, and true market fit." 
          />
          <FeatureCard 
            icon={<BrainCircuit className="text-blue-400" />} 
            title="Intelligence Memory" 
            desc="Store all analyses for historical trend tracking, pattern recognition, and strategic foresight." 
          />
        </div>
      </div>
    </section>
  );
};