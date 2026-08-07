'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import GlassCard from './GlassCard';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedText text="Let’s build something iconic" className="text-3xl font-semibold sm:text-4xl" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> <span>{profile.email}</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /> <span>{profile.location}</span></div>
            </div>
            <div className="mt-6 h-[240px] rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.2),transparent),linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
          </GlassCard>
          <GlassCard>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0" placeholder="Name" />
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0" placeholder="Email" />
              </div>
              <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0" placeholder="Tell me about your idea" />
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100" type="submit">
                <Send size={16} /> {submitted ? 'Message sent' : 'Send message'}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
