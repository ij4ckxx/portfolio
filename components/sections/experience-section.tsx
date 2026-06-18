import { missions, profile } from "@/constants/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Mission Timeline</p>
        <h2 id="experience-title" className="section-title">
          Arizon Digital missions completed under production pressure.
        </h2>
        <div className="mt-8 border border-cyber-cyan/25 bg-black/40 p-5 font-mono text-sm text-white/70">
          <span className="text-cyber-cyan">ROLE:</span> Software Engineer
          <span className="mx-3 text-cyber-violet">|</span>
          <span className="text-cyber-cyan">DURATION:</span> Sep 2024 - Present
          <span className="mx-3 text-cyber-violet">|</span>
          <span className="text-cyber-violet">{profile.company}</span>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {missions.map((mission) => (
            <article
              key={mission.id}
              className="mission-card"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-black text-cyber-cyan">{mission.id}</span>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyber-cyan">
                  completed
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black uppercase">{mission.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{mission.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
