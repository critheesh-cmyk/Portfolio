import { experienceItems } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import GlassCard from './GlassCard';
import Timeline from './Timeline';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedText text="Experience" className="text-3xl font-semibold sm:text-4xl" />
        <GlassCard className="mt-10">
          <Timeline items={experienceItems} />
        </GlassCard>
      </div>
    </section>
  );
}
