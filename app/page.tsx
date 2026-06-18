import { CyberBackground } from "@/components/background/cyber-background";
import { HeroSection } from "@/components/hero/hero-section";
import { CyberNav } from "@/components/navigation/cyber-nav";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GitHubCommand } from "@/components/sections/github-command";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsReactor } from "@/components/sections/skills-reactor";
import { TrustSection } from "@/components/sections/trust-section";
import { profile } from "@/constants/portfolio";

export default function Home() {
  return (
    <>
      <CyberBackground />
      <CyberNav />
      <main>
        <HeroSection />
        <TrustSection />
        <SkillsReactor />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubCommand />
        <section className="px-4 py-10" aria-labelledby="identity-title">
          <div className="holo-card mx-auto max-w-6xl">
            <p className="section-kicker">LinkedIn Identity Card</p>
            <h2 id="identity-title" className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Software Developer at {profile.company}
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-white/65">
              Full stack developer based in {profile.location}, focused on enterprise commerce,
              architecture, CMS-driven interfaces, authentication systems, and polished product experiences.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border border-cyber-cyan px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-cyber-cyan transition hover:bg-cyber-cyan hover:text-black"
            >
              Open LinkedIn Signal
            </a>
          </div>
        </section>
        <section className="px-4 py-10" aria-labelledby="award-title">
          <div className="award-card mx-auto max-w-6xl">
            <p className="section-kicker">Achievement Unlocked</p>
            <h2 id="award-title" className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Best Performer Award 2025
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/65">
              Recognition from Arizon Digital for ownership, delivery quality, collaboration, and consistent engineering impact.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
