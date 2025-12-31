import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-blue-950 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Take Control of Every Acquisition</h2>
        <p className="text-xl text-blue-200 mb-10">
          Every acquisition decision carries risk. DealGuard AI ensures you make the right one — every time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-xl">
            Request Private Demo
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-blue-400 text-blue-100 hover:bg-blue-900/30 px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2">
            Schedule Strategic Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <p className="mt-8 text-sm text-slate-400">
          Reserved for serious marketplace operators and institutional investors.
        </p>
      </div>
    </section>
  );
};