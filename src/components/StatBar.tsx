import { motion } from 'framer-motion';

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: '142', label: 'Invoices Processed', color: 'text-[#06B6D4]' },
  { value: '$24,530', label: 'USDC Settled On-Chain', color: 'text-[#8B5CF6]' },
  { value: '0', label: 'Human Approvals Required', color: 'text-emerald-400' },
  { value: '< 3s', label: 'Avg. Settlement Time', color: 'text-yellow-400' },
];

export function StatBar() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: expo }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.9, ease: expo }}
            className="flex flex-col items-center justify-center py-8 px-4 bg-zinc-900/60 backdrop-blur-md text-center"
          >
            <p className={`text-3xl lg:text-4xl font-extrabold font-mono mb-2 ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.12em] leading-relaxed">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
