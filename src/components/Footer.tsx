import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.05] mt-20 overflow-hidden">
      {/* Glow behind CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono text-zinc-600 tracking-[0.25em] uppercase mb-4">Early Access Open</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Ready to deploy your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">
              autonomous treasury node?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Join the waitlist. No account. No sales call. Just your node address and a config file.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white font-bold rounded-lg shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all text-base"
            >
              Request Early Access →
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 border border-white/[0.12] text-zinc-300 font-semibold rounded-lg hover:bg-white/[0.04] transition-all text-base"
            >
              View on GitHub
            </motion.a>
          </div>

          {/* Footer links */}
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-600 flex-wrap">
            <a href="#" className="hover:text-zinc-400 transition-colors">Protocol</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Security</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Docs</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Twitter / X</a>
          </div>
          <p className="text-zinc-700 text-xs mt-8 font-mono">© 2026 Specter-Arc Protocol. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
