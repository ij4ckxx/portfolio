import { aboutHighlights, profile } from "@/constants/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-mobile-card holo-card">
          <p className="section-kicker">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
            Job-ready full stack developer for enterprise commerce.
          </h2>
          <p className="mt-6 leading-8 text-white/65">
            Software Developer with nearly 2 years of experience building enterprise commerce systems,
            CMS-driven storefronts, and AI-powered applications.
          </p>
        </div>
        <div className="grid gap-4">
          {aboutHighlights.map((item, index) => (
            <article key={item} className="glass-mobile-card terminal-card">
              <span className="font-mono text-xs font-black text-cyber-violet-hot">0{index + 1}</span>
              <p className="mt-3 leading-8 text-white/72">{item}</p>
            </article>
          ))}
          <div className="glass-mobile-card terminal-card">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyber-cyan">
              Based in {profile.location}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/62">
              Open to Software Developer, Full Stack Developer, React Developer, and Next.js Developer roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
