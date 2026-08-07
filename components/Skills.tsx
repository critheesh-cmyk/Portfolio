import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsByCategory } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import GlassCard from './GlassCard';
import SkillsSphere from './SkillsSphere';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Programming');
  const activeSkills = skillsByCategory.find((item) => item.category === activeCategory) ?? skillsByCategory[0];

  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedText text="Skills & toolkit" className="text-3xl font-semibold sm:text-4xl" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.map((skill) => (
                <button key={skill.category} onClick={() => setActiveCategory(skill.category)} className={`rounded-full px-3 py-2 text-sm transition ${activeCategory === skill.category ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/10 text-white/70'}`}>
                  {skill.category}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {activeSkills.items.map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.03, y: -4 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-4 text-sm font-medium text-white/80">
                  {item}
                </motion.div>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <SkillsSphere />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
