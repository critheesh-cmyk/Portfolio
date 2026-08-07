import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-4 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-gradient text-xl font-semibold">{profile.name}</p>
            <p className="mt-2 text-sm text-white/60">Crafted with precision, motion, and a bit of midnight sparkle.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} className="rounded-full border border-white/10 bg-white/10 p-2 text-white/70">
                {social.label === 'GitHub' ? <Github size={16} /> : social.label === 'LinkedIn' ? <Linkedin size={16} /> : <Mail size={16} />}
              </a>
            ))}
            <motion.a href="#home" whileHover={{ y: -4, rotate: -12 }} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
              <ArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
