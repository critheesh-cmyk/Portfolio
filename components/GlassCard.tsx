import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, rotateX: 3, rotateY: -3 }}
      className={`glass-panel rounded-[28px] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
