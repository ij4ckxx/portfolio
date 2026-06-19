import { projects } from "@/constants/portfolio";
import { ProjectsScrollShowcase } from "@/components/sections/projects-scroll-showcase";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-pin-section px-4 py-14"
      aria-labelledby="projects-title"
    >
      <ProjectsScrollShowcase projects={projects} />
    </section>
  );
}
