import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }} className={className}>
      {text.split(' ').map((word, index) => (
        <motion.span key={`${word}-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
