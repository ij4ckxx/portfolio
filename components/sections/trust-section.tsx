import { trustSignals } from "@/constants/portfolio";

export function TrustSection() {
  return (
    <section className="px-4 py-8">
      <div className="apple-signal-panel mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
        {trustSignals.map((signal) => (
          <div
            key={signal}
            className="cyber-badge apple-signal-chip"
          >
            <span className="size-1.5 rounded-full bg-cyber-violet-hot shadow-[0_0_14px_rgba(182,108,255,0.65)]" />
            {signal}
          </div>
        ))}
      </div>
    </section>
  );
}
