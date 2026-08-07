'use client';

import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-0" style={{ background: `radial-gradient(220px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 70%)` }} />;
}
