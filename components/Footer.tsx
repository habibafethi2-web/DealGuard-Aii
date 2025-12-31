import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Inspirational Text */}
        <div className="mb-12 text-center">
          <p className="text-slate-300 text-lg md:text-xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-80">
            "DealGuard AI is a chance for any company to move forward and become better. The best choice is to seize this chance and be better."
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-slate-600" />
            <span className="text-slate-500 font-bold">DealGuard AI</span>
          </div>
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} DealGuard AI. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};