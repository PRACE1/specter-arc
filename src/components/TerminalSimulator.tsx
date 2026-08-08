import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "> Specter-Arc Node v1.0.4 initialized.",
  "> Connecting to Arc blockchain network... OK.",
  "> Awaiting cryptographic invoice payload...",
  "> Intercepted service invoice: #INV-9021... OK.",
  "> Unilateral verification complete.",
  "> Executing micro-transaction via Arc Wallet... SUCCESS (USDC sent).",
];

const heartbeatLogs = [
  "> Awaiting next invoice payload...",
  "> Block #18924 confirmed. Ledger synced.",
  "> Monitoring Arc mempool... active.",
  "> Intercepted invoice: #INV-9022... OK.",
  "> Signature verified: 0xA3f...91Bc",
  "> Executing: $312.00 USDC → vendor wallet... SUCCESS.",
  "> Block #18925 confirmed. Ledger synced.",
  "> Awaiting next invoice payload...",
  "> Health check: All systems nominal.",
  "> Intercepted invoice: #INV-9023... OK.",
  "> Unilateral approval — no human required.",
  "> Executing: $88.50 USDC → vendor wallet... SUCCESS.",
];

export function TerminalSimulator({ activeStep = 0 }: { activeStep?: number }) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Boot sequence — runs once
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isMounted = true;
    let currentLog = 0;

    const displayNextBoot = () => {
      if (!isMounted) return;
      if (currentLog < bootLogs.length) {
        const log = bootLogs[currentLog];
        setVisibleLogs(prev => [...prev, log]);
        currentLog++;
        timeoutId = setTimeout(displayNextBoot, Math.random() * 700 + 350);
      } else {
        setIsBooting(false);
      }
    };

    timeoutId = setTimeout(displayNextBoot, 800);
    return () => { isMounted = false; clearTimeout(timeoutId); };
  }, []);

  // Heartbeat loop — starts after boot
  useEffect(() => {
    if (isBooting) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    let isMounted = true;
    let idx = 0;

    const addHeartbeat = () => {
      if (!isMounted) return;
      setVisibleLogs(prev => {
        const next = [...prev, heartbeatLogs[idx % heartbeatLogs.length]];
        // Keep buffer capped at 30 lines so it doesn't grow forever
        return next.length > 30 ? next.slice(next.length - 30) : next;
      });
      idx++;
      timeoutId = setTimeout(addHeartbeat, Math.random() * 2200 + 1800);
    };

    timeoutId = setTimeout(addHeartbeat, 2000);
    return () => { isMounted = false; clearTimeout(timeoutId); };
  }, [isBooting]);

  // Inject walkthrough step log
  useEffect(() => {
    if (activeStep >= 1) {
      setVisibleLogs(prev => {
        if (!prev.includes("[SYSTEM]: Intercepting raw invoice data payload...")) {
          return [...prev, "[SYSTEM]: Intercepting raw invoice data payload..."];
        }
        return prev;
      });
    }
  }, [activeStep]);

  // Auto-scroll ONLY inside the terminal box — never touches page scroll
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleLogs]);

  return (
    <div className={`w-full max-w-4xl mx-auto mt-8 border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${activeStep >= 1 ? 'shadow-[0_0_60px_-10px_rgba(74,222,128,0.3)]' : ''}`}>
      {/* Titlebar */}
      <div className="bg-zinc-900/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-white/[0.05]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-xs text-slate-500">specter-arc-engine ~ bash</div>
        {/* Live indicator */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-400 tracking-widest">LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={containerRef} className="bg-[#0A0C10] p-6 font-mono text-sm h-[260px] overflow-y-auto scrollbar-thin">
        <AnimatePresence>
          {visibleLogs.map((log, idx) => {
            if (typeof log !== 'string') return null;
            let colorClass = "text-slate-400";
            if (log.includes("OK") || log.includes("SUCCESS") || log.includes("confirmed") || log.includes("synced")) colorClass = "text-[#06B6D4]";
            if (log.includes("Awaiting") || log.includes("Monitoring") || log.includes("Health")) colorClass = "text-yellow-400/80";
            if (log.includes("Executing") || log.includes("USDC")) colorClass = "text-[#8B5CF6]";
            if (log.includes("[SYSTEM]")) colorClass = "text-emerald-400 font-bold";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`mb-1.5 ${colorClass}`}
              >
                {log}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {isBooting && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-slate-400 mt-1 align-middle"
          />
        )}
        <div />
      </div>
    </div>
  );
}
