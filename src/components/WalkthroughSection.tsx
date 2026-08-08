import { motion } from 'framer-motion';

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface WalkthroughSectionProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export function WalkthroughSection({ activeStep, setActiveStep }: WalkthroughSectionProps) {
  const node1Active = activeStep === 1;
  const node1Done   = activeStep > 1;
  const node2Active = activeStep === 2;
  const node2Done   = activeStep > 2;
  const node3Active = activeStep === 3;
  const pipe1Lit    = activeStep >= 2;
  const pipe2Lit    = activeStep >= 3;

  return (
    <section className="w-full max-w-6xl mx-auto min-h-[300vh] relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-32 px-6 mt-8 border-t border-white/[0.04]">

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* ── Left sticky panel ── */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 h-[75vh] flex flex-col justify-center items-center bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md shadow-2xl rounded-2xl p-8 relative">
        <h3 className="absolute top-6 left-6 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          Live Execution Graph
        </h3>

        <div className="flex flex-col items-center w-full max-w-[280px] gap-0">

          {/* Node 1 */}
          <motion.div
            animate={{
              opacity: node1Done ? 0.55 : node1Active ? 1 : 0.25,
              scale:   node1Active ? 1.04 : 1,
              boxShadow: node1Active ? '0 0 40px rgba(239,68,68,0.35)' : node1Done ? '0 0 10px rgba(16,185,129,0.15)' : 'none',
            }}
            transition={{ duration: 0.8, ease: expo }}
            className={`w-full rounded-xl p-5 text-center relative z-10 backdrop-blur-md
              ${node1Active  ? 'bg-zinc-900/90 border border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]' : ''}
              ${node1Done    ? 'bg-zinc-900/90 border border-emerald-500/30' : ''}
              ${!node1Active && !node1Done ? 'bg-zinc-900/90 border border-white/[0.08]' : ''}
            `}
          >
            {node1Active && <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-red-500/40 to-transparent -z-10" />}
            <p className={`font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1 transition-colors duration-700 ${node1Active ? 'text-red-400' : node1Done ? 'text-emerald-400/50' : 'text-zinc-600'}`}>
              Incoming Payload
            </p>
            <p className={`text-sm font-semibold tracking-wide transition-colors duration-700 ${node1Done ? 'text-zinc-500' : 'text-zinc-200'}`}>
              (JSON Invoice)
            </p>
          </motion.div>

          {/* Pipeline 1 */}
          <svg width="4" height="64" className="flex-shrink-0 overflow-visible">
            <line x1="2" y1="0" x2="2" y2="64" stroke="#27272a" strokeWidth="2" />
            {pipe1Lit && (
              <line x1="2" y1="0" x2="2" y2="64" stroke="#06B6D4" strokeWidth="3"
                strokeDasharray="4 4" className="neon-pipeline"
                style={{ animation: 'dash 1.4s linear infinite' }} />
            )}
          </svg>

          {/* Node 2 */}
          <motion.div
            animate={{
              opacity: node2Done ? 0.55 : node2Active ? 1 : 0.25,
              scale:   node2Active ? 1.07 : 1,
              boxShadow: node2Active ? '0 0 50px rgba(6,182,212,0.45)' : 'none',
            }}
            transition={{ duration: 0.8, ease: expo }}
            className={`w-full rounded-xl p-5 text-center relative z-10 backdrop-blur-md
              ${node2Active ? 'bg-cyan-950/40 border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]' : 'bg-zinc-900/90 border border-white/[0.08]'}
            `}
          >
            {node2Active && (
              <>
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-cyan-500/30 to-transparent -z-10" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.35, 0.1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="absolute inset-0 bg-cyan-500 rounded-xl blur-xl -z-20"
                />
              </>
            )}
            <p className={`font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1 transition-colors duration-700 ${node2Active ? 'text-cyan-300' : 'text-zinc-600'}`}>
              Specter-Arc Core
            </p>
            <p className={`text-sm font-semibold tracking-wide transition-colors duration-700 ${node2Active ? 'text-white' : 'text-zinc-500'}`}>
              Cryptographic Validation
            </p>
          </motion.div>

          {/* Pipeline 2 */}
          <svg width="4" height="64" className="flex-shrink-0 overflow-visible">
            <line x1="2" y1="0" x2="2" y2="64" stroke="#27272a" strokeWidth="2" />
            {pipe2Lit && (
              <line x1="2" y1="0" x2="2" y2="64" stroke="#10b981" strokeWidth="3"
                strokeDasharray="4 4" className="neon-pipeline"
                style={{ animation: 'dash 1.4s linear infinite' }} />
            )}
          </svg>

          {/* Node 3 */}
          <motion.div
            animate={{
              opacity: node3Active ? 1 : 0.22,
              scale:   node3Active ? 1.04 : 1,
              boxShadow: node3Active ? '0 0 40px rgba(16,185,129,0.35)' : 'none',
            }}
            transition={{ duration: 0.8, ease: expo }}
            className={`w-full rounded-xl p-5 text-center relative z-10 bg-zinc-900/90 backdrop-blur-md
              ${node3Active ? 'border border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.3)]' : 'border border-white/[0.08]'}
            `}
          >
            {node3Active && <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-emerald-500/40 to-transparent -z-10" />}
            <p className={`font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1 transition-colors duration-700 ${node3Active ? 'text-emerald-400' : 'text-zinc-600'}`}>
              Blockchain Settlement
            </p>
            <p className={`text-sm font-semibold tracking-wide transition-colors duration-700 ${node3Active ? 'text-zinc-200' : 'text-zinc-600'}`}>
              USDC Unilateral Payout
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Right column: narrative steps with huge breathing room ── */}
      <div className="lg:col-span-7 flex flex-col pt-16">

        {/* Step 1 */}
        <motion.div
          onViewportEnter={() => setActiveStep(1)}
          viewport={{ margin: '-40% 0px -40% 0px', amount: 'some' }}
          className="min-h-[70vh] flex flex-col justify-center pb-24"
        >
          <p className={`text-xs font-mono tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${activeStep === 1 ? 'text-red-400' : 'text-zinc-700'}`}>
            Step 01
          </p>
          <h2 className={`text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.0] mb-8 transition-all duration-700 ${activeStep === 1 ? 'text-white' : 'text-zinc-600'}`}>
            The AI<br />gets a bill.
          </h2>
          <p className={`text-xl leading-relaxed max-w-lg transition-all duration-700 ${activeStep === 1 ? 'text-zinc-400' : 'text-zinc-700'}`}>
            No inbox. No human account-payable teams. A service sends an electronic bill directly to Specter-Arc's secure API.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          onViewportEnter={() => setActiveStep(2)}
          viewport={{ margin: '-40% 0px -40% 0px', amount: 'some' }}
          className="min-h-[70vh] flex flex-col justify-center pb-24"
        >
          <p className={`text-xs font-mono tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${activeStep === 2 ? 'text-cyan-400' : 'text-zinc-700'}`}>
            Step 02
          </p>
          <h2 className={`text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.0] mb-8 transition-all duration-700 ${activeStep === 2 ? 'text-white' : 'text-zinc-600'}`}>
            The AI reads<br />the fine print.
          </h2>
          <p className={`text-xl leading-relaxed max-w-lg transition-all duration-700 ${activeStep === 2 ? 'text-zinc-400' : 'text-zinc-700'}`}>
            The node checks the math and mathematically verifies the sender's cryptographic signature. If the rules match your config, it approves itself.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          onViewportEnter={() => setActiveStep(3)}
          viewport={{ margin: '-40% 0px -40% 0px', amount: 'some' }}
          className="min-h-[70vh] flex flex-col justify-center"
        >
          <p className={`text-xs font-mono tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${activeStep === 3 ? 'text-emerald-400' : 'text-zinc-700'}`}>
            Step 03
          </p>
          <h2 className={`text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.0] mb-8 transition-all duration-700 ${activeStep === 3 ? 'text-white' : 'text-zinc-600'}`}>
            Money moves<br />without permission.
          </h2>
          <p className={`text-xl leading-relaxed max-w-lg transition-all duration-700 ${activeStep === 3 ? 'text-zinc-400' : 'text-zinc-700'}`}>
            The built-in programmatic wallet signs a real blockchain payload and fires off digital dollars (USDC) over the Arc Network instantly.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
