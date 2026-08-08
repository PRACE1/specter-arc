import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { TerminalSimulator } from './TerminalSimulator';
import { Activity, ShieldCheck, Zap, Lock } from 'lucide-react';

// Expo ease — same curve everywhere
const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DashboardVisual({ activeStep = 0 }: { activeStep?: number }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-4 px-6 pb-32">

      {/* ── Change 2: section label with breathing room ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: expo }}
        className="text-xs font-mono text-zinc-600 uppercase tracking-[0.25em] mb-10 text-center"
      >
        Live Node Dashboard
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* 1. Network Metrics Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: expo }}
          className="glass-panel-premium p-8 rounded-2xl flex flex-col h-full border border-white/[0.08] border-b-white/[0.15]"
        >
          <div className="flex items-center gap-3 mb-8 text-zinc-300 font-semibold tracking-[0.15em] shrink-0">
            <Activity className="text-[#06B6D4]" size={18} />
            <h2 className="uppercase text-xs font-mono">Network Metrics</h2>
          </div>

          <div className="flex flex-col flex-1 justify-between gap-6">
            <div className="flex flex-col">
              <p className="tracking-[0.15em] uppercase text-zinc-500 font-mono text-xs mb-2 leading-relaxed">
                Total Value Verified (USDC)
              </p>
              <h3 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-6">
                $<AnimatedCounter value={24530.50} decimals={2} triggerBump={activeStep === 3} />
              </h3>
            </div>

            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4 items-end mt-auto shrink-0">
              <div>
                <p className="tracking-[0.15em] uppercase text-zinc-500 font-mono text-[10px] mb-2">Corporate Actions</p>
                <p className="text-2xl font-mono text-zinc-200">
                  <AnimatedCounter value={142} />
                </p>
              </div>
              <div className="text-right">
                <p className="tracking-[0.15em] uppercase text-zinc-500 font-mono text-[10px] mb-2">Network Congestion</p>
                <p className="text-2xl font-mono text-[#06B6D4] glow-text-cyan">Low</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Agentic Executor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.12, ease: expo }}
          className="glass-panel-premium p-8 rounded-2xl flex flex-col h-full border border-white/[0.08] border-b-white/[0.15]"
        >
          <div className="flex items-center gap-3 mb-6 text-zinc-300 font-semibold tracking-[0.15em] shrink-0">
            <Zap className="text-[#8B5CF6]" size={18} />
            <h2 className="uppercase text-xs font-mono">Agentic Executor</h2>
          </div>
          <p className="text-sm text-zinc-500 mb-10 leading-relaxed shrink-0">
            Initiate algorithmic corporate action sequence.
          </p>

          <div className="flex flex-col gap-4 mt-auto">
            <button className="w-full py-5 px-6 rounded-xl bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Execute USDC Micro-Transaction
            </button>
            <button className="w-full py-5 px-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.06] text-zinc-400 font-semibold tracking-wide transition-all">
              Audit Ledger
            </button>
          </div>
        </motion.div>

        {/* 3. Arc Wallet Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.24, ease: expo }}
          className="glass-panel-premium p-8 rounded-2xl flex flex-col h-full border border-white/[0.08] border-b-white/[0.15]"
        >
          <div className="flex items-center gap-3 mb-6 text-zinc-300 font-semibold tracking-[0.15em] shrink-0">
            <ShieldCheck className="text-[#06B6D4]" size={18} />
            <h2 className="uppercase text-xs font-mono">Arc Wallet Status</h2>
          </div>

          <div className={`flex-1 flex flex-col items-center justify-center gap-6 rounded-xl border border-white/[0.08] bg-black/40 p-6 relative mt-auto transition-colors duration-700 ${activeStep === 2 ? 'bg-green-950/40' : ''}`}>
            {activeStep === 2 && (
              <div className="absolute inset-0 z-0 pointer-events-none rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent w-[200%] animate-shimmer" />
              </div>
            )}
            <div className={`absolute inset-0 pointer-events-none rounded-xl transition-colors duration-700 ${activeStep === 2 ? 'bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]'}`} />

            <div className="relative z-10">
              <motion.div
                animate={{ scale: activeStep === 2 ? [1, 1.5, 1] : [1, 1.2, 1], opacity: activeStep === 2 ? [0.5, 1, 0.5] : [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: activeStep === 2 ? 0.5 : 2.5, ease: 'easeInOut' }}
                className={`absolute inset-0 rounded-full blur-xl transition-colors duration-700 ${activeStep === 2 ? 'bg-green-500' : 'bg-[#06B6D4]'}`}
              />
              <div className={`relative z-10 p-4 rounded-full border transition-colors duration-700 ${activeStep === 2 ? 'bg-green-500/20 border-green-500/50' : 'bg-[#06B6D4]/10 border-[#06B6D4]/30'}`}>
                <Lock className={`w-10 h-10 transition-colors duration-700 ${activeStep === 2 ? 'text-green-400 glow-text-green' : 'text-[#06B6D4] glow-text-cyan'}`} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: activeStep === 2 ? 0.5 : 3.5 }}
              className="text-center z-10"
            >
              <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-700 ${activeStep === 2 ? 'text-green-400' : 'text-zinc-100'}`}>
                {activeStep === 2 ? 'VALIDATING SIGNATURE...' : 'Cryptographically Secured'}
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Terminal — more breathing room */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: expo }}
        className="mt-16"
      >
        <TerminalSimulator activeStep={activeStep} />
      </motion.div>
    </section>
  );
}
