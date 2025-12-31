import React from 'react';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Enterprise-Grade Intelligence You Can Rely On</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          DealGuard AI provides brutal honesty, unbiased analysis, and conservative inference. Every report is designed for professional investors and acquisition experts who cannot afford to be wrong.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">100%</span>
            <span className="text-sm text-slate-500 uppercase tracking-wide">Evidence Based</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">Zero</span>
            <span className="text-sm text-slate-500 uppercase tracking-wide">Bias or Incentive</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">24/7</span>
            <span className="text-sm text-slate-500 uppercase tracking-wide">Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
};