"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/constants/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 900px)", () => {
        if (!track.current) return;
        gsap.to(track.current, {
          x: () => -(track.current!.scrollWidth - window.innerWidth + 80),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${track.current!.scrollWidth}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: section },
  );

  return (
    <section id="projects" ref={section} className="overflow-hidden px-4 py-24 lg:px-0" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl lg:px-4">
        <p className="section-kicker">Project Subsystems</p>
        <h2 id="projects-title" className="section-title">
          Pinned holographic panels for the strongest work.
        </h2>
      </div>
      <div ref={track} className="mt-12 flex flex-col gap-5 lg:w-max lg:flex-row lg:px-[max(1rem,calc((100vw-72rem)/2))]">
        {projects.map((project, index) => (
          <article key={project.name} className="project-panel">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-cyber-cyan">
                  {project.system}
                </p>
                <h3 className="mt-4 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
                  {project.name}
                </h3>
              </div>
              <span className="grid size-12 place-items-center border border-cyber-green text-cyber-green">
                <ArrowUpRight />
              </span>
            </div>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68">{project.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.03] p-4 font-mono text-xs font-black uppercase tracking-[0.12em] text-white/80">
                  <span className="mr-2 text-cyber-green">+</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="border border-cyber-violet/35 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.12em] text-cyber-violet">
                  {tech}
                </span>
              ))}
            </div>
            <span className="absolute bottom-4 right-5 font-mono text-8xl font-black text-white/[0.04]">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
