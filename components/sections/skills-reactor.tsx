import { skills } from "@/constants/portfolio";

export function SkillsReactor() {
  return (
    <section className="px-4 py-24" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Skills Reactor</p>
        <h2 id="skills-title" className="section-title">
          Full-stack systems orbiting a product engineering core.
        </h2>
        <div className="relative mx-auto mt-14 aspect-square max-w-[680px]">
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
      </div>
    </section>
  );
}
