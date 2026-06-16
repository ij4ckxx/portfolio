"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { profile } from "@/constants/portfolio";
import { HologramDashboard } from "./hologram-dashboard";

export function HeroSection() {
  const title = profile.name.split("");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-32">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-[0.35em] text-cyber-cyan"
          >
            ./elite-engineer-command-center
          </motion.p>

          <h1 className="mt-5 flex max-w-4xl flex-wrap text-[clamp(3.25rem,10vw,8.4rem)] font-black leading-[0.82] tracking-normal text-white">
            {title.map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: index * 0.025, duration: 0.5 }}
                className={letter === " " ? "w-4 sm:w-7" : "text-glitch"}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-6 font-mono text-xl font-black uppercase tracking-[0.14em] text-cyber-green sm:text-2xl"
          >
            SOFTWARE ENGINEER
            <span className="mx-3 text-cyber-red">/</span>
            FULL STACK DEVELOPER
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/70"
          >
            {profile.tagline} Nearly 2 years of enterprise delivery across Catalyst storefronts,
            Makeswift systems, authentication flows, and AI product experiments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="mt-9 flex flex-wrap gap-3"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 12 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          <HologramDashboard />
        </motion.div>
      </div>
    </section>
  );
}
