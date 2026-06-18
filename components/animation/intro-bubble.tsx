"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "jegan-intro-bubble-v1";

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
      <div className="intro-bubble-orbit">
        <div className="intro-bubble">
          <Image
            src="/portfolio-logo.png"
            alt=""
            width={128}
            height={128}
            className="size-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}
