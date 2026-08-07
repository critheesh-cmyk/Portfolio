import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { heroRoles, profile, socials } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import FloatingIcons from './FloatingIcons';
import GlassCard from './GlassCard';
import MagneticButton from './MagneticButton';
import ThreeScene from './ThreeScene';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_35%)]" />
      </div>
      <FloatingIcons />
      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Premium developer portfolio
          </motion.p>
          <AnimatedText text={`Hello, I’m ${profile.name}`} className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl" />
          <div className="mt-4 text-3xl font-medium text-white/70 sm:text-5xl">
            <span className="text-gradient">{heroRoles[0]}</span>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-white/70">
            {profile.summary}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#contact">Hire Me</MagneticButton>
            <MagneticButton href={profile.resume}>View Resume</MagneticButton>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} className="rounded-full border border-white/10 bg-white/10 p-3 text-white/70 transition hover:bg-white/20">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
          <GlassCard className="overflow-hidden p-0">
            <div className="relative h-[460px] overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_35%)]" />
              <ThreeScene />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm">{profile.availability}</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="mt-2" />
        </motion.div>
      </div>
    </section>
  );
}
