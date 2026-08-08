import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  decimals?: number;
  triggerBump?: boolean;
}

export function AnimatedCounter({ value, prefix = '', decimals = 0, triggerBump = false }: AnimatedCounterProps) {
  const [hasMounted, setHasMounted] = useState(false);
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) => {
    return prefix + current.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  });

  useEffect(() => {
    setHasMounted(true);
    springValue.set(triggerBump ? value + 1200 : value);
  }, [value, springValue, triggerBump]);

  if (!hasMounted) return <span>{prefix}0</span>;

  return <motion.span>{displayValue}</motion.span>;
}
