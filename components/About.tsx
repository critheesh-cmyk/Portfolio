import { motion } from 'framer-motion';
import { BrainCircuit, MapPin, Sparkles } from 'lucide-react';
import { aboutStats, education, experienceItems, profile } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import GlassCard from './GlassCard';

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedText text="About me" className="text-3xl font-semibold sm:text-4xl" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <GlassCard className="p-0 overflow-hidden">
            <div className="relative h-[320px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-cyan-300"><BrainCircuit size={18} /> <span className="text-sm">Building intuitive experiences</span></div>
                  <p className="mt-3 max-w-sm text-sm text-white/70">{profile.summary}</p>
                </div>
              </div>
            </div>
          </GlassCard>
          <div className="space-y-6">
            <GlassCard>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-semibold text-gradient">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-2 text-cyan-300"><MapPin size={16} /> <span>{profile.location}</span></div>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <motion.div key={item.title} whileHover={{ x: 6 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-white/60">{item.period}</p>
                  </motion.div>
                ))}
                {experienceItems.map((item) => (
                  <motion.div key={item.company} whileHover={{ x: 6 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-violet-300"><Sparkles size={14} /> <span className="text-sm">Current Internship</span></div>
                    <p className="mt-2 font-semibold">{item.company}</p>
                    <p className="mt-1 text-sm text-white/60">{item.role} • {item.period}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
