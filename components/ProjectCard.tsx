import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
  featured?: boolean;
}

export default function ProjectCard({ title, description, tech, image, demo, github, featured = false }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -8, scale: 1.01 }} className={`group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'h-[300px]' : 'h-[240px]'}`}>
        <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-between p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Featured</p>
            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          </div>
          <div className="flex gap-2">
            <a href={github} className="rounded-full border border-white/10 bg-white/10 p-2"><Github size={16} /></a>
            <a href={demo} className="rounded-full border border-white/10 bg-white/10 p-2"><ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">{item}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
