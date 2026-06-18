"use client";

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
      <div className="cyber-nav-frame mx-auto flex max-w-5xl items-center justify-between gap-3 overflow-hidden rounded-full border border-white/12 bg-white/[0.075] px-3 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
        <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="Jegan Nathan home">
          <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/20 bg-black/40 shadow-[0_0_28px_rgba(127,60,255,0.28)] sm:size-10">
            <Image
              src="/portfolio-logo.png"
              alt=""
              width={128}
              height={128}
              className="size-full object-cover object-top"
              priority
            />
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-cyber-violet-hot shadow-[0_0_14px_rgba(182,108,255,0.75)]" />
            <span className="absolute inset-0 rounded-full border border-cyber-cyan/35" />
          </span>
          <span className="hidden min-w-0 text-sm font-semibold tracking-normal text-white/78 sm:block">
            Jegan
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-white/68 transition hover:bg-white/10 hover:text-white lg:px-4"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/78 transition hover:bg-cyber-cyan hover:text-black md:inline-flex"
        >
          <Download size={14} />
          Resume
        </a>

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/10 text-white/78 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div
          className="mx-auto mt-2 grid max-w-5xl gap-2 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.08] p-3 backdrop-blur-2xl md:hidden"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-white/82"
            >
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
