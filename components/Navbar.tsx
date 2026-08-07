'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/data/portfolio';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      lastY = y;
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= 150;
      });
      setActive(current ?? 'home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav animate={{ y: hidden ? -120 : 0 }} transition={{ duration: 0.25 }} className="fixed inset-x-0 top-4 z-40 mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-2xl">
      <a href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/90">{profile.name}</a>
      <div className="hidden items-center gap-2 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={`rounded-full px-3 py-2 text-sm text-white/70 transition ${active === link.href.slice(1) ? 'bg-white/15 text-white' : 'hover:bg-white/10'}`}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <MagneticButton href="#contact" className="px-4 py-2">Hire Me</MagneticButton>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
