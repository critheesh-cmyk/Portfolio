'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress((prev) => (prev >= 100 ? 100 : prev + 8)), 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]">
      <div className="glass-panel relative overflow-hidden rounded-[32px] px-10 py-12 text-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="mx-auto mb-6 h-16 w-16 rounded-full border-2 border-cyan-300/40 border-t-transparent" />
        <p className="text-2xl font-semibold">Ritheesh</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/50">Initializing experience</p>
        <div className="mt-6 h-2 w-56 rounded-full bg-white/10">
          <motion.div animate={{ width: `${progress}%` }} className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" />
        </div>
        <p className="mt-4 text-sm text-white/70">{progress}%</p>
      </div>
    </motion.div>
  );
}
