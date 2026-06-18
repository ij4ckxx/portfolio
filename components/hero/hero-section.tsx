import { ArrowDown, Download, Send } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { profile } from "@/constants/portfolio";
import { HologramDashboard } from "./hologram-dashboard";

export function HeroSection() {
  const title = profile.name.split("");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:pt-32">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 pb-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <p className="hero-rise max-w-full overflow-hidden text-ellipsis font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyber-cyan sm:text-xs sm:tracking-[0.28em]">
            ./elite-engineer-command-center
          </p>

          <h1 className="mt-5 flex max-w-4xl flex-wrap text-[clamp(2.2rem,6.6vw,5.35rem)] font-black leading-[0.92] tracking-normal text-white">
            {title.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={letter === " " ? "w-4 sm:w-7" : "hero-letter text-glitch"}
                style={{ animationDelay: `${index * 25}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="hero-rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs font-black uppercase tracking-[0.08em] text-cyber-cyan sm:text-sm sm:tracking-[0.12em] md:text-base [animation-delay:420ms]">
            <span>Software Engineer</span>
            <span className="text-cyber-violet">/</span>
            <span>Full Stack Developer</span>
          </div>

          <p className="hero-rise mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 [animation-delay:550ms]">
            {profile.tagline} Nearly 2 years of enterprise delivery across Catalyst storefronts,
            Makeswift systems, authentication flows, and AI product experiments.
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:680ms]">
            <NeonButton asChild>
              <a href="#projects">
                View Projects <ArrowDown size={16} />
              </a>
            </NeonButton>
            <NeonButton asChild variant="ghost">
              <a href="#contact">
                Contact Me <Send size={16} />
              </a>
            </NeonButton>
            <NeonButton asChild variant="ghost">
              <a href={profile.resume} download>
                Download Resume <Download size={16} />
              </a>
            </NeonButton>
          </div>
        </div>

        <div className="hero-dashboard">
          <HologramDashboard />
        </div>
      </div>
    </section>
  );
}
