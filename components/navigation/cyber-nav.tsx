"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between border border-cyber-cyan/25 bg-black/50 px-3 py-3 shadow-[0_0_40px_rgba(0,229,255,0.12)] backdrop-blur-xl">
        <a href="#home" className="group flex items-center gap-3" aria-label="JN home">
          <span className="relative grid size-11 place-items-center border border-cyber-green bg-cyber-green text-black shadow-[0_0_28px_rgba(57,255,20,0.35)]">
            <span className="font-mono text-sm font-black">JN</span>
            <span className="absolute -right-1 -top-1 size-2 bg-cyber-red" />
          </span>
          <span className="hidden font-mono text-xs font-bold uppercase tracking-[0.28em] text-white/70 sm:block">
            Command Center
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(([label, href]) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ y: -2 }}
              className="relative px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/65 transition hover:text-cyber-green"
            >
              {label}
            </motion.a>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="hidden border border-cyber-green/50 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-cyber-green transition hover:bg-cyber-green hover:text-black md:block"
        >
          Resume
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center border border-cyber-cyan/40 text-cyber-cyan md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 grid max-w-6xl gap-2 border border-cyber-cyan/25 bg-black/85 p-4 backdrop-blur-xl md:hidden"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border border-white/10 px-4 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-white"
            >
              {label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
