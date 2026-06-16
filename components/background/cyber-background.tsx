"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function CyberBackground() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".cyber-fog-a", {
        x: 80,
        y: -60,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".cyber-fog-b", {
        x: -70,
        y: 70,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".matrix-column", {
        yPercent: 100,
        duration: 8,
        repeat: -1,
        stagger: 0.18,
        ease: "none",
      });
    },
    { scope: root },
  );

  const matrix = Array.from({ length: 22 }, (_, index) => index);

  return (
    <div ref={root} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-cyber-grid opacity-35" />
      <div className="absolute inset-0 bg-scanlines opacity-[0.09]" />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="cyber-fog-a absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyber-green/20 blur-3xl" />
      <div className="cyber-fog-b absolute bottom-[10%] right-[7%] h-96 w-96 rounded-full bg-cyber-violet/20 blur-3xl" />
      <div className="absolute left-0 top-0 flex h-full w-full justify-between overflow-hidden px-4 opacity-20">
        {matrix.map((item) => (
          <div
            key={item}
            className="matrix-column font-mono text-[10px] leading-5 text-cyber-green"
            style={{ transform: `translateY(-${20 + item * 5}%)` }}
          >
            0101
            <br />
            SYS
            <br />
            0xJN
            <br />
            API
            <br />
            AUTH
            <br />
            1010
            <br />
            UI
            <br />
            CORE
          </div>
        ))}
      </div>
    </div>
  );
}
