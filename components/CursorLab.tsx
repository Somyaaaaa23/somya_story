"use client";

import { useEffect, useRef, useState } from "react";

// Preview-only switcher for trying cursor styles; pick one, then drop the switcher before shipping.
const modes = [
  { id: "dot", label: "soft dot" },
  { id: "glow", label: "blush glow" },
  { id: "pen", label: "pencil" },
  { id: "star", label: "chrome star" },
  { id: "off", label: "normal" },
] as const;

type Mode = (typeof modes)[number]["id"];

export function CursorLab() {
  const [mode, setMode] = useState<Mode>("dot");
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cursor-lab");
      if (modes.some((m) => m.id === saved)) setMode(saved as Mode);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.cursor = mode;
    try {
      localStorage.setItem("cursor-lab", mode);
    } catch {}
    if ((mode !== "dot" && mode !== "glow") || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    // The dot sits on the pointer; the ring drifts after it, slower for the glow so it feels like a soft wake.
    const ease = mode === "glow" ? 0.07 : 0.16;
    let x = -200, y = -200, rx = x, ry = y, frame = 0;
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const target = event.target as Element;
      root.classList.add("cursor-in");
      root.classList.toggle("cursor-hover", !!target.closest?.("a, button, [role='button']"));
      root.classList.toggle("cursor-file", !!target.closest?.(".file"));
    };
    const leave = () => root.classList.remove("cursor-in");
    const down = () => root.classList.add("cursor-down");
    const up = () => root.classList.remove("cursor-down");
    const tick = () => {
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      root.classList.remove("cursor-in", "cursor-hover", "cursor-file", "cursor-down");
    };
  }, [mode]);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true"><span>open</span></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div className="cursor-lab" role="group" aria-label="Try a cursor style">
        <span>cursor lab</span>
        {modes.map((m) => (
          <button key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>{m.label}</button>
        ))}
      </div>
    </>
  );
}
