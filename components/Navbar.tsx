import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-brand-dark/90 border-slate-800 backdrop-blur-md py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight text-white">DealGuard AI</span>
        </div>
        <div className="flex items-center gap-6">
          {/* Navigation items removed as requested */}
        </div>
      </div>
    </nav>
  );
};