import { skillCategories, skills } from "@/constants/portfolio";

export function SkillsReactor() {
  return (
    <section className="px-4 py-14" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Skills Reactor</p>
        <h2 id="skills-title" className="section-title">
          Full-stack systems orbiting a product engineering core.
        </h2>
        <div className="relative mx-auto mt-9 aspect-square max-w-[680px]">
          <div className="absolute inset-[30%] grid place-items-center border border-cyber-cyan bg-cyber-cyan text-center text-black shadow-[0_0_80px_rgba(0,217,255,0.25)]">
            <span className="font-mono text-sm font-black uppercase tracking-[0.2em]">
              Full Stack
              <br />
              Engineer
            </span>
          </div>
          <div className="reactor-ring absolute inset-4 rounded-full border border-dashed border-cyber-cyan/30" />
          <div className="reactor-ring reverse absolute inset-20 rounded-full border border-dashed border-cyber-violet/35" />
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const radius = index % 2 === 0 ? 43 : 34;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;

            return (
              <div
                key={skill}
                className="skill-node absolute -translate-x-1/2 -translate-y-1/2 border border-cyber-cyan/35 bg-black/75 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_0_24px_rgba(0,229,255,0.12)]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {skill}
              </div>
            );
          })}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.title} className="glass-mobile-card terminal-card">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyber-cyan">
                {category.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
