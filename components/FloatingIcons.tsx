import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiThreedotjs } from 'react-icons/si';

const icons = [
  { icon: SiReact, className: 'left-[10%] top-[20%]' },
  { icon: SiNextdotjs, className: 'right-[12%] top-[18%]' },
  { icon: SiTailwindcss, className: 'left-[12%] bottom-[20%]' },
  { icon: SiFramer, className: 'right-[8%] bottom-[18%]' },
  { icon: SiThreedotjs, className: 'left-[45%] top-[8%]' },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {icons.map(({ icon: Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -10, 0], rotate: [0, 5, -3, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-full border border-white/10 bg-white/10 p-3 text-2xl text-cyan-300 backdrop-blur-xl ${className}`}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
