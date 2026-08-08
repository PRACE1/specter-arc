import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const captions = [
  {
    id: 0,
    text: "Specter-Arc: A headless treasury node that pays invoices with zero human involvement.",
    duration: 3500,
    scrollTo: 0,
  },
  {
    id: 1,
    text: "The live dashboard shows real-time metrics — $24,530 USDC settled, 142 invoices processed, 0 human approvals.",
    duration: 4000,
    scrollTo: 500,
  },
  {
    id: 2,
    text: "The terminal is always live — intercepting invoices, verifying signatures, firing USDC payments autonomously.",
    duration: 4000,
    scrollTo: 900,
  },
  {
    id: 3,
    text: "Step 1: A vendor sends a JSON invoice directly to the Specter-Arc API. No email. No inbox.",
    duration: 3500,
    scrollTo: 1600,
  },
  {
    id: 4,
    text: "Step 2: The node cryptographically validates the invoice and verifies the sender's digital signature.",
    duration: 3500,
    scrollTo: 2400,
  },
  {
    id: 5,
    text: "Step 3: The built-in Arc wallet signs and fires a USDC transaction on-chain. Under 3 seconds. No permission asked.",
    duration: 4000,
    scrollTo: 3200,
  },
  {
    id: 6,
    text: "AI receives invoice. AI pays invoice. Zero humans. That's Specter-Arc.",
    duration: 4000,
    scrollTo: 0,
  },
];

export function DemoMode() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentCaption, setCurrentCaption] = useState<number | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startDemo = () => {
    setIsRunning(true);
    setCurrentCaption(null);

    let elapsed = 0;

    captions.forEach((caption, i) => {
      // Scroll
      const scrollT = setTimeout(() => {
        window.scrollTo({ top: caption.scrollTo, behavior: 'smooth' });
        setCurrentCaption(i);
      }, elapsed);
      timeoutsRef.current.push(scrollT);

      elapsed += caption.duration;

      // Hide caption just before next one
      const hideT = setTimeout(() => {
        setCurrentCaption(null);
      }, elapsed - 300);
      timeoutsRef.current.push(hideT);
    });

    // End demo
    const endT = setTimeout(() => {
      setIsRunning(false);
      setCurrentCaption(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, elapsed + 500);
    timeoutsRef.current.push(endT);
  };

  const stopDemo = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setIsRunning(false);
    setCurrentCaption(null);
  };

  useEffect(() => {
    return () => { timeoutsRef.current.forEach(clearTimeout); };
  }, []);

  return (
    <>
      {/* ── Demo trigger button — fixed bottom right ── */}
      <motion.button
        onClick={isRunning ? stopDemo : startDemo}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`fixed bottom-8 right-8 z-[100] flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm tracking-wide shadow-2xl transition-all duration-300 ${
          isRunning
            ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)]'
            : 'bg-[#8B5CF6] hover:bg-[#7c3aed] text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]'
        }`}
      >
        {isRunning ? (
          <>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Stop Demo
          </>
        ) : (
          <>
            <span className="text-base">▶</span>
            Demo Mode
          </>
        )}
      </motion.button>

      {/* ── Full-screen caption overlay ── */}
      <AnimatePresence>
        {currentCaption !== null && captions[currentCaption] && (
          <motion.div
            key={currentCaption}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: expo }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[99] max-w-2xl w-[90vw] pointer-events-none"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-white/[0.12] rounded-2xl px-8 py-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Progress bar */}
              <motion.div
                className="h-[2px] bg-[#8B5CF6] rounded-full mb-4 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: (captions[currentCaption]?.duration ?? 3000) / 1000 - 0.3, ease: 'linear' }}
              />
              <p className="text-white text-lg font-semibold leading-relaxed">
                {captions[currentCaption]?.text}
              </p>
              {/* Caption counter */}
              <p className="text-zinc-500 font-mono text-xs mt-3 tracking-widest">
                {currentCaption + 1} / {captions.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
