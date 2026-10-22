"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { offerings } from "@/data/world";
import { BinderClip, ChromeStar, ScriptPaper } from "@/components/Decor";

type OfferingTabsProps = { openId: string | null; onToggle: (id: string) => void };

let audio: AudioContext | null = null;

// A short paper flick: a burst of filtered noise plus a soft tick, synthesised so no audio file ships.
function playPaperFlick() {
  try {
    audio ??= new AudioContext();
    const now = audio.currentTime;
    const noise = audio.createBuffer(1, Math.floor(audio.sampleRate * 0.22), audio.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);

    const rustle = audio.createBufferSource();
    rustle.buffer = noise;
    const band = audio.createBiquadFilter();
    band.type = "bandpass";
    band.Q.value = 0.9;
    band.frequency.setValueAtTime(3200, now);
    band.frequency.exponentialRampToValueAtTime(900, now + 0.2);
    const rustleGain = audio.createGain();
    rustleGain.gain.setValueAtTime(0.0001, now);
    rustleGain.gain.exponentialRampToValueAtTime(0.35, now + 0.015);
    rustleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    rustle.connect(band).connect(rustleGain).connect(audio.destination);
    rustle.start(now);

    const tick = audio.createOscillator();
    tick.type = "triangle";
    tick.frequency.setValueAtTime(1600, now);
    tick.frequency.exponentialRampToValueAtTime(500, now + 0.04);
    const tickGain = audio.createGain();
    tickGain.gain.setValueAtTime(0.18, now);
    tickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    tick.connect(tickGain).connect(audio.destination);
    tick.start(now);
    tick.stop(now + 0.06);
  } catch {
    // Sound is a nicety; never let it break the click.
  }
}

export function OfferingTabs({ openId, onToggle }: OfferingTabsProps) {
  const open = offerings.find((item) => item.id === openId);
  const noteRef = useRef<HTMLDivElement>(null);
  const scrollOnOpen = useRef(false);

  // After a folder is picked, let its sheet lift, then glide down to the note it opened.
  useEffect(() => {
    if (!open || !scrollOnOpen.current) return;
    scrollOnOpen.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => noteRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 320);
    return () => window.clearTimeout(timer);
  }, [open]);

  const pick = (id: string) => {
    playPaperFlick();
    scrollOnOpen.current = id !== openId;
    onToggle(id);
  };

  return (
    <>
      <div className="file-grid">
        {offerings.map((item, index) => {
          const isOpen = item.id === openId;
          const style = { "--layer": item.color } as CSSProperties;
          return (
            <button key={item.id} type="button" className={`file ${isOpen ? "is-open" : ""}`} style={style} aria-expanded={isOpen} aria-controls="offering-note" onClick={() => pick(item.id)}>
              <span className="file-art">
                <svg className="file-back" viewBox="0 0 200 150" aria-hidden="true">
                  <path d="M70 12h112q12 0 12 12v20H70z" fill="#141414" />
                </svg>
                <span className="file-sheet lined" aria-hidden="true" />
                <svg className="file-front" viewBox="0 0 200 150" aria-hidden="true">
                  <path d="M8 22q0-12 12-12h40q8 0 12 6l7 10h103q10 0 10 10v98q0 10-10 10H18q-10 0-10-10z" fill="var(--layer)" stroke="#141414" strokeWidth="4.5" strokeLinejoin="round" />
                </svg>
                <span className="file-no">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className="file-label"><i style={{ background: item.color }} />{item.title}</span>
            </button>
          );
        })}
      </div>

      {open && (
        <div className="note unfold" key={open.id} ref={noteRef} id="offering-note" role="region" aria-labelledby="offering-note-title">
          <ScriptPaper className="note-backing">field notes, field notes. a chapter, not the whole story. the best work is more than the final screenshot. field notes, field notes.</ScriptPaper>
          <div className="note-paper paper-shadow">
            <div className="torn lined">
              <span className="note-hole" style={{ top: 96 }} />
              <span className="note-hole" style={{ top: 256 }} />
              <span className="note-hole" style={{ top: 416 }} />
              <p className="eyebrow">{open.eyebrow}</p>
              <h3 id="offering-note-title">{open.title}</h3>
              <p className="note-line">{open.line}</p>
              <ul>{open.facts.map((fact) => <li key={fact}>— {fact}</li>)}</ul>
              {open.links && (
                <div className="note-links">
                  {open.links.map((link) => (
                    <a key={link.href} href={link.href} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label} ↗</a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <BinderClip className="note-binder" hole="#F9E4E8" />
          <ChromeStar className="note-star" />
        </div>
      )}
    </>
  );
}
