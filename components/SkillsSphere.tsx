import { motion } from 'framer-motion';
import { skillsByCategory } from '@/data/portfolio';

export default function SkillsSphere() {
  return (
    <div className="relative flex h-[320px] items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute h-56 w-56 rounded-full border border-cyan-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-2xl" />
      <div className="relative h-56 w-56 rounded-full border border-white/10 bg-black/20 backdrop-blur-3xl" />
      {skillsByCategory.slice(0, 4).map((skill, index) => {
        const angle = (index / 4) * Math.PI * 2;
        const x = Math.cos(angle) * 95;
        const y = Math.sin(angle) * 95;
        return (
          <motion.div
            key={skill.category}
            animate={{ x: [0, x, 0], y: [0, y, 0] }}
            transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {skill.category}
          </motion.div>
        );
      })}
    </div>
  );
}
