import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const StrategicImpact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Marketplace Decisions
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              For platforms like <span className="text-white font-semibold">Acquire.com</span>, DealGuard AI increases close rates, enhances buyer confidence, and reduces costly post-acquisition mistakes. We turn diligence from a bottleneck into a competitive advantage.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                "Close deals faster with absolute confidence",
                "Protect your reputation and ecosystem trust",
                "Maximize transaction value for buyers and sellers",
                "Build an acquisition moat no competitor can match"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-xl text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
             {/* Visual Metaphor for "Moat" */}
             <div className="relative w-full max-w-md aspect-square">
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px]"></div>
               <div className="relative z-10 bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="h-2 w-1/3 bg-slate-700 rounded"></div>
                    <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                    <div className="h-32 bg-slate-800 rounded-xl border border-dashed border-slate-600 flex items-center justify-center text-slate-500 text-sm">
                      Trusted Analysis Layer
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-800">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-bold">Deal Velocity</span>
                      <span className="text-emerald-400">+45%</span>
                    </div>
                    <div className="flex items-center justify-between text-white mt-2">
                      <span className="font-bold">Dispute Rate</span>
                      <span className="text-emerald-400">-80%</span>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};