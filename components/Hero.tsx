import React, { useState } from 'react';
import { PlayCircle, ShieldAlert, Target, FileSearch, Info, X, Lightbulb, Settings, Users, Brain, Zap, CheckCircle2, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Acquisition Intelligence v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Prevent Bad Deals. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Own the Intelligence.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-8">
            DealGuard AI is the only platform that evaluates SaaS acquisitions with the precision, insight, and foresight of an entire M&A team — <span className="text-white font-medium">instantly</span>.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <a 
              href="https://youtu.be/CjiUJmlKTUw?si=0AfcbnTu40u7-NTL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Video
            </a>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
            >
              <Info className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              About this app
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-1" />
              <p className="text-sm text-slate-300">Detect hidden risks and red flags before committing capital.</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <Target className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <p className="text-sm text-slate-300">Analyze competitors, positioning, and failure probabilities.</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <FileSearch className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <p className="text-sm text-slate-300">Generate actionable, investor-ready intelligence reports.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800 shrink-0 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-bold text-white tracking-tight">DealGuard AI Intelligence Deck</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              
              {/* Vision */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Product Vision</h3>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 leading-relaxed text-slate-300">
                  <p className="mb-4">
                    DealGuard AI is an <span className="text-white font-semibold italic underline decoration-blue-500/50">Acquisition Intelligence System</span> designed to become the analytical brain behind every SaaS acquisition decision.
                  </p>
                  <p className="mb-4">
                    Instead of relying on surface-level metrics and founder optimism, DealGuard AI replicates the thinking of:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <TrendingUp className="w-4 h-4" />, text: "A seasoned SaaS investor" },
                      { icon: <FileSearch className="w-4 h-4" />, text: "An M&A analyst" },
                      { icon: <Cpu className="w-4 h-4" />, text: "A CTO conducting technical due diligence" },
                      { icon: <ShieldAlert className="w-4 h-4" />, text: "A risk expert anticipating failure" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-400 bg-slate-900/50 p-3 rounded-xl">
                        <span className="text-blue-400">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-white font-medium border-l-2 border-blue-500 pl-4">
                    The result: Acquisition decisions based on reality, not assumptions. DealGuard AI does not merely collect data — it questions it, stress-tests it, and judges it.
                  </p>
                </div>
              </section>

              {/* How it Works */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">How It Works</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Input Acquisition Data",
                      content: "Users input metrics, descriptions, founder claims, and tech stack summaries. The system states assumptions and highlights uncertainty even with incomplete data.",
                      color: "text-blue-400"
                    },
                    {
                      step: "2",
                      title: "Multi-Layer Analysis",
                      content: "Parallel modules analyze Financial Integrity, Technical Health, Claim Consistency, and Failure Scenarios, including UX evaluation via screenshots.",
                      color: "text-indigo-400"
                    },
                    {
                      step: "3",
                      title: "Strategic Intelligence Report",
                      content: "Receive a professional report with Risk Scores (0-100), hidden red flags, failure probabilities, and clear valuation guidance.",
                      color: "text-purple-400"
                    },
                    {
                      step: "4",
                      title: "Confident Decisions",
                      content: "Decisions are made based on logic, simulations, and conservative, reality-based analysis. Faster, safer, and defensible results.",
                      color: "text-emerald-400"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-slate-950/30 border border-slate-800 rounded-2xl relative overflow-hidden group">
                      <div className={`text-4xl font-black absolute -top-2 -right-2 opacity-5 ${item.color}`}>{item.step}</div>
                      <h4 className={`text-lg font-bold mb-3 ${item.color}`}>{item.step}. {item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Target Audience */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Target Audience</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { 
                      title: "SaaS Acquisition Marketplaces", 
                      points: ["Higher deal close rates", "Protected buyer trust", "New revenue streams via certification"]
                    },
                    { 
                      title: "SaaS Investors & Holding Companies", 
                      points: ["Avoiding bad deals", "Negotiating from strength", "Lower-risk portfolios"]
                    },
                    { 
                      title: "Venture Studios & Private Equity Firms", 
                      points: ["Accelerated due diligence", "Standardized evaluation quality", "System-based decisions"]
                    }
                  ].map((target, idx) => (
                    <div key={idx} className="p-6 bg-slate-800/20 border border-slate-700/50 rounded-2xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {target.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {target.points.map((p, pidx) => (
                          <span key={pidx} className="text-xs bg-slate-950 px-3 py-1 rounded-full text-slate-400 border border-slate-800">{p}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ownership & Moat */}
              <section className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-3xl border border-blue-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white tracking-tight">Why DealGuard AI Should Be Owned, Not Just Used</h3>
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed italic">
                  DealGuard AI goes beyond public data, builds proprietary intelligence memory, and improves with every evaluated deal. It becomes embedded in the strategic infrastructure of its owner.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    Controlling the decision layer
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                    Unreplicable competitive advantage
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <div className="text-center pt-8 border-t border-slate-800">
                <div className="inline-flex items-center gap-2 text-rose-500 font-black text-xl uppercase tracking-tighter mb-4 animate-pulse">
                  <Zap className="fill-rose-500" />
                  Strategic Conclusion
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto leading-tight">
                  DealGuard AI is not a tool. It is a <span className="text-blue-500">Decision Engine</span>. 
                  And whoever owns the decision layer… <span className="underline decoration-blue-500 underline-offset-4">owns the market</span>.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-10 px-8 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};