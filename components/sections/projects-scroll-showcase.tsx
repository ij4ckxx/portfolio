"use client";

import { memo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

gsap.registerPlugin(ScrollTrigger);

type ProjectsScrollShowcaseProps = {
  projects: Project[];
};

type ProjectCardProps = {
  index: number;
  project: Project;
};

const ProjectCard = memo(function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="project-panel project-x-card">
      <div className="project-x-card-glow" aria-hidden="true" />
      <div className="relative z-10 flex min-h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-cyber-cyan">
              {project.system}
            </p>
            <h3 className="mt-4 max-w-[13ch] text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
              {project.name}
            </h3>
          </div>
          <span className="grid size-12 shrink-0 place-items-center border border-cyber-cyan/50 text-cyber-cyan transition group-hover/card:bg-cyber-cyan group-hover/card:text-black">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>

        <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
          {project.summary}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="project-highlight border border-white/10 bg-white/[0.03] p-4 font-mono text-xs font-black uppercase tracking-[0.12em] text-white/80"
            >
              <span className="mr-2 text-cyber-green">+</span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-cyber-violet/35 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.12em] text-cyber-violet"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute bottom-4 right-5 font-mono text-6xl font-black text-white/[0.04]">
        0{index + 1}
      </span>
    </article>
  );
});

export function ProjectsScrollShowcase({ projects }: ProjectsScrollShowcaseProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const stage = stageRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;

      if (!stage || !track || !progress) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-x-card", stage);
        const highlights = gsap.utils.toArray<HTMLElement>(".project-highlight", stage);
        const scrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

        gsap.set(cards, {
          autoAlpha: 0,
          rotateX: 3,
          rotateY: -2,
          scale: 0.96,
          y: 28,
        });
        gsap.set(highlights, { autoAlpha: 0, y: 18 });
        gsap.set(progress, { scaleX: 0.08 });

        gsap.to(cards, {
          autoAlpha: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: stage,
            start: "top 78%",
            once: true,
          },
        });

        gsap.to(highlights, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.025,
          scrollTrigger: {
            trigger: stage,
            start: "top 58%",
            once: true,
          },
        });

        const horizontalTween = gsap.to(track, {
          x: () => -scrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${Math.max(scrollDistance(), window.innerHeight)}`,
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.to(progress, {
                scaleX: Math.max(self.progress, 0.08),
                duration: 0.12,
                overwrite: true,
              });
            },
          },
        });

        cards.forEach((card) => {
          gsap.to(card, {
            yPercent: -1.5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 78%",
              end: "right 22%",
              scrub: true,
            },
          });
        });
      });

      media.add("(max-width: 899px), (prefers-reduced-motion: reduce)", () => {
        gsap.set(track, { clearProps: "transform" });
        gsap.set(".project-x-card", { autoAlpha: 1, clearProps: "transform" });
        gsap.set(".project-highlight", { autoAlpha: 1, clearProps: "transform" });
        gsap.set(progress, { scaleX: 0.08 });
      });

      return () => media.revert();
    },
    { scope: stageRef },
  );

  return (
    <div ref={stageRef} className="project-pin-stage mt-8">
      <div className="mx-auto mb-5 flex max-w-6xl items-center justify-between gap-4 lg:px-4">
        <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-white/45">
          Scroll to scrub project signals
        </p>
        <p className="hidden font-mono text-xs font-black uppercase tracking-[0.2em] text-cyber-cyan sm:block">
          Scrub enabled
        </p>
      </div>

      <div className="project-x-viewport">
        <div ref={trackRef} className="project-x-track">
          {projects.map((project, index) => (
            <div key={project.name} className="group/card project-x-item">
              <ProjectCard index={index} project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 h-px max-w-6xl overflow-hidden bg-white/10 lg:mx-4" aria-hidden="true">
        <span
          ref={progressRef}
          className="block h-full origin-left bg-gradient-to-r from-cyber-violet via-cyber-cyan to-cyber-green"
        />
      </div>
    </div>
  );
}
