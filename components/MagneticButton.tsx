'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MagneticButton({ children, className = '', href }: { children: React.ReactNode; className?: string; href?: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({ x: event.clientX - rect.left - rect.width / 2, y: event.clientY - rect.top - rect.height / 2 });
  };

  const shared = {
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    style: { transform: `translate(${offset.x / 6}px, ${offset.y / 6}px)` },
  };

  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...shared}
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 ${className}`}
    >
      {children}
    </motion.a>
  );
}
