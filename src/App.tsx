
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DashboardVisual } from './components/DashboardVisual';
import { WalkthroughSection } from './components/WalkthroughSection';
import { StatBar } from './components/StatBar';
import { Footer } from './components/Footer';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── Fixed full-page background layers (never affect layout or sticky) ── */}
      <div className="fixed inset-0 bg-slate-950 -z-30" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-20 pointer-events-none" />
      {/* Ambient glow orbs — fixed so they look good at every scroll position */}
      <div className="fixed top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[40%] left-[10%] w-[600px] h-[400px] bg-cyan-800/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[5%] right-[5%] w-[500px] h-[350px] bg-violet-800/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* ── Page content — plain div, no overflow clipping ── */}
      <div className="relative text-slate-200">

        {/* Sticky navbar */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/[0.06] bg-slate-950/70 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg tracking-widest text-white">SPECTER-ARC</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Protocol</a>
            <a href="#walkthrough" className="hover:text-white transition-colors">How It Works</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex px-5 py-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Request Access
          </a>
        </nav>

        <main>
          <HeroSection />
          <DashboardVisual activeStep={activeStep} />
          <StatBar />
          <div id="walkthrough">
            <WalkthroughSection activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
