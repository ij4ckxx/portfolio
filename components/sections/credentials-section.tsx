import { ArrowUpRight } from "lucide-react";
import { credentials } from "@/constants/portfolio";

export function CredentialsSection() {
  return (
    <section className="px-4 py-10" aria-labelledby="credentials-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Achievements / Certifications / Education</p>
        <h2 id="credentials-title" className="section-title">
          Verified learning path and delivery recognition.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {credentials.map((credential) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyber-cyan">
                    {credential.issuer}
                  </p>
                  {credential.href ? <ArrowUpRight className="size-4 text-cyber-violet-hot" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-4 text-xl font-black uppercase leading-tight text-white">
                  {credential.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{credential.detail}</p>
              </>
            );

            return credential.href ? (
              <a
                key={`${credential.title}-${credential.issuer}`}
                href={credential.href}
                target="_blank"
                rel="noreferrer"
                className="glass-mobile-card terminal-card block transition hover:-translate-y-1 hover:border-cyber-violet/55"
              >
                {content}
              </a>
            ) : (
              <article key={`${credential.title}-${credential.issuer}`} className="glass-mobile-card terminal-card">
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
