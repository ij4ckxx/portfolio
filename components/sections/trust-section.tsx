import { trustSignals } from "@/constants/portfolio";

export function TrustSection() {
  return (
    <section className="border-y border-cyber-cyan/15 bg-black/35 px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
        {trustSignals.map((signal) => (
          <div
            key={signal}
            className="cyber-badge"
          >
            <span className="size-2 bg-cyber-green" />
            {signal}
          </div>
        ))}
      </div>
    </section>
  );
}
