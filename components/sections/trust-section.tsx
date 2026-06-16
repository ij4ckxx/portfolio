"use client";

import { motion } from "framer-motion";
import { trustSignals } from "@/constants/portfolio";

export function TrustSection() {
  return (
    <section className="border-y border-cyber-cyan/15 bg-black/35 px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
        {trustSignals.map((signal, index) => (
          <motion.div
            key={signal}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="cyber-badge"
          >
            <span className="size-2 animate-pulse bg-cyber-green" />
            {signal}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
