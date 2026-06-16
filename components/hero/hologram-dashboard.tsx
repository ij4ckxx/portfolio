"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cpu, Radio, ShieldCheck, Terminal } from "lucide-react";
import { useRef } from "react";

export function HologramDashboard() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".ring-one", { rotate: 360, duration: 18, repeat: -1, ease: "none" });
      gsap.to(".ring-two", { rotate: -360, duration: 24, repeat: -1, ease: "none" });
      gsap.to(".signal-bar", {
        scaleY: () => gsap.utils.random(0.25, 1),
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
        ease: "power2.inOut",
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full border border-cyber-cyan/30 shadow-[0_0_90px_rgba(0,229,255,0.12)]" />
      <div className="ring-one absolute inset-12 rounded-full border border-dashed border-cyber-green/60" />
      <div className="ring-two absolute inset-24 rounded-full border border-dashed border-cyber-violet/70" />
      <div className="absolute inset-[34%] grid place-items-center border border-cyber-green bg-black/80 shadow-[0_0_50px_rgba(57,255,20,0.24)]">
        <Cpu className="text-cyber-green" size={44} />
      </div>

      <Panel className="left-0 top-12" icon={<Terminal size={16} />} title="BUILD" value="NEXT.JS" />
      <Panel className="right-0 top-24" icon={<ShieldCheck size={16} />} title="AUTH" value="SSO/JWT" />
      <Panel className="bottom-24 left-4" icon={<Radio size={16} />} title="SIGNAL" value="LIVE" />

      <div className="absolute bottom-6 right-8 flex h-24 items-end gap-1 border border-cyber-cyan/25 bg-black/50 p-3">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="signal-bar h-full w-1 origin-bottom bg-cyber-cyan" />
        ))}
      </div>
    </div>
  );
}

function Panel({
  className,
  icon,
  title,
  value,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className={`absolute min-w-36 border border-cyber-cyan/40 bg-black/70 p-3 backdrop-blur-xl ${className}`}>
      <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyber-cyan">
        {icon}
        {title}
      </div>
      <p className="mt-2 font-mono text-lg font-black text-white">{value}</p>
    </div>
  );
}
