'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from '@/components/About';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import Cursor from '@/components/Cursor';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Cursor />
      <Background />
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" style={{ width: `${scrollProgress}%` }} />
      </div>
      {loading ? <LoadingScreen /> : null}
      <div className="relative z-10">
        <Navbar />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
