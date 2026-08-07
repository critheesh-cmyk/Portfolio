'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-8 w-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-xl"
        animate={{ x: position.x - 16, y: position.y - 16, scale: hovering ? 1.75 : 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[59] h-3 w-3 rounded-full bg-cyan-300/80"
        animate={{ x: position.x - 6, y: position.y - 6 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      />
    </>
  );
}
