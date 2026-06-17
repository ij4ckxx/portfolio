"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { profile } from "@/constants/portfolio";
import { HologramDashboard } from "./hologram-dashboard";

export function HeroSection() {
  const title = profile.name.split("");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:pt-32">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 pb-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-full overflow-hidden text-ellipsis font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyber-cyan sm:text-xs sm:tracking-[0.28em]"
          >
            ./elite-engineer-command-center
          </motion.p>

          <h1 className="mt-5 flex max-w-4xl flex-wrap text-[clamp(2.55rem,8vw,6.75rem)] font-black leading-[0.88] tracking-normal text-white">
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
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm font-black uppercase tracking-[0.08em] text-cyber-green sm:text-base sm:tracking-[0.12em] md:text-xl"
          >
            <span>Software Engineer</span>
            <span className="text-cyber-red">/</span>
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            {profile.tagline} Nearly 2 years of enterprise delivery across Catalyst storefronts,
            Makeswift systems, authentication flows, and AI product experiments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
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
