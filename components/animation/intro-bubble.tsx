"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { skills } from "@/constants/portfolio";

const STORAGE_KEY = "jegan-skill-bubbles-v1";
const bubbleSkills = skills.slice(0, 8);

export function IntroBubble() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || window.localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, "played");

    const revealTimer = window.setTimeout(() => setShow(true), 0);
    const hideTimer = window.setTimeout(() => setShow(false), 2300);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="intro-bubble-overlay" aria-hidden="true">
      <div className="intro-bubble-field">
        {bubbleSkills.map((skill, index) => (
          <div
            key={skill}
            className="intro-skill-bubble"
            style={
              {
                "--bubble-index": index,
                "--bubble-x": `${(index % 4) * 5.8 - 8.7}rem`,
                "--bubble-size": `${3.35 + (index % 3) * 0.42}rem`,
              } as CSSProperties
            }
          >
            {skill.length > 8 ? skill.slice(0, 2) : skill}
          </div>
        ))}
        <div className="intro-bubble-core">SKILLS</div>
      </div>
    </div>
  );
}
