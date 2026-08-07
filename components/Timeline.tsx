import { motion } from 'framer-motion';

export default function Timeline({ items }: { items: Array<{ company: string; period: string; role: string; responsibilities: string[] }> }) {
  return (
    <div className="mt-6 space-y-5">
      {items.map((item, index) => (
        <motion.div key={item.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-cyan-300" />
          <div className="ml-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.role} • {item.company}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              {item.responsibilities.map((responsibility) => (<li key={responsibility}>• {responsibility}</li>))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
