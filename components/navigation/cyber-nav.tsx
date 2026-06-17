"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { profile } from "@/constants/portfolio";

const nav = [
  ["Projects", "#projects"],
  ["Missions", "#experience"],
  ["GitHub", "#github"],
  ["Contact", "#contact"],
];

export function CyberNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="cyber-nav-frame mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-hidden border border-cyber-cyan/25 bg-black/62 px-3 py-2.5 shadow-[0_0_40px_rgba(0,229,255,0.12)] backdrop-blur-xl"
      >
        <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="Jegan Nathan home">
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden border border-cyber-green bg-black shadow-[0_0_28px_rgba(57,255,20,0.35)] sm:size-11">
            <Image
              src="/portfolio-logo.png"
              alt=""
              width={128}
              height={128}
              className="size-full object-cover object-top"
              priority
            />
            <span className="absolute -right-1 -top-1 size-2 bg-cyber-red shadow-[0_0_14px_rgba(255,49,49,0.8)]" />
            <span className="absolute inset-0 animate-ping border border-cyber-green/50" />
          </span>
          <span className="hidden min-w-0 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 sm:block lg:text-xs lg:tracking-[0.24em]">
            Jegan Command
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(([label, href]) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ y: -2 }}
              className="group relative px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white/65 transition hover:text-cyber-green lg:px-4 lg:text-xs lg:tracking-[0.16em]"
            >
              {label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyber-green transition group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="hidden items-center gap-2 border border-cyber-green/50 px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-cyber-green transition hover:bg-cyber-green hover:text-black md:inline-flex lg:px-4 lg:text-xs"
        >
          <Download size={14} />
          Resume
        </a>

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center border border-cyber-cyan/40 text-cyber-cyan md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 grid max-w-6xl gap-2 overflow-hidden border border-cyber-cyan/25 bg-black/88 p-3 backdrop-blur-xl md:hidden"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border border-white/10 px-4 py-3.5 font-mono text-xs font-black uppercase tracking-[0.14em] text-white"
            >
              {label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
