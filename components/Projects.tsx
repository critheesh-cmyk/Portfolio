import { projects } from '@/data/portfolio';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedText text="Selected projects" className="text-3xl font-semibold sm:text-4xl" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
