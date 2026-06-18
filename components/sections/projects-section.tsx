import { projects } from "@/constants/portfolio";
import { ProjectsScrollShowcase } from "@/components/sections/projects-scroll-showcase";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-pin-section px-4 py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl lg:px-4">
        <p className="section-kicker">Project Subsystems</p>
        <h2 id="projects-title" className="section-title">
          Scroll-driven holographic panels for the strongest work.
        </h2>
      </div>
      <ProjectsScrollShowcase projects={projects} />
    </section>
  );
}
