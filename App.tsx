import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { USP } from './components/USP';
import { ReportDemo } from './components/ReportDemo';
import { StrategicImpact } from './components/StrategicImpact';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <USP />
        <ReportDemo />
        <StrategicImpact />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}