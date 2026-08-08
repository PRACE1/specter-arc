
import { motion } from 'framer-motion';

// Expo ease-out — the Framer Motion signature curve
const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-center items-center px-6 text-center z-10">

      {/* ── Change 1: ONE giant cinematic statement ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: expo }}
        className="w-full max-w-5xl"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: expo }}
          className="inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-mono tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          NODE ACTIVE — ARC MAINNET
        </motion.div>

        {/* THE headline — cinematic, viewport-filling */}
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tighter mb-10">
          <span className="block text-white">AI receives</span>
          <span className="block text-white">invoice.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">
            AI pays invoice.
          </span>
          <span className="block text-white/40 text-[clamp(1.5rem,4vw,3.5rem)] font-semibold mt-6 tracking-normal leading-snug">
            Zero humans. Zero UI. Pure programmable money.
          </span>
        </h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: expo }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#walkthrough"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-10 py-5 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold rounded-xl transition-colors shadow-[0_0_40px_rgba(139,92,246,0.4)] text-base cursor-pointer"
          >
            Deploy Node →
          </motion.a>
          <motion.a
            href="https://docs.arc.io"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white/70 font-semibold rounded-xl transition-colors hover:bg-white/[0.04] text-base cursor-pointer"
          >
            View Arc Docs
          </motion.a>
        </motion.div>

        {/* Trust logos — minimal, bottom of viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: expo }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <p className="text-xs font-mono text-zinc-600 tracking-[0.2em] uppercase mr-2">Built on</p>
          {['Arc Network', 'USDC / Circle', 'Ethereum EVM', 'OpenAI SDK'].map((name) => (
            <span key={name} className="text-zinc-600 text-xs tracking-wide">
              {name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
