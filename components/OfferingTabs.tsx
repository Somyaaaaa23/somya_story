"use client";

import type { CSSProperties } from "react";
import { offerings } from "@/data/world";
import { BinderClip, ChromeStar, ScriptPaper } from "@/components/Decor";

type OfferingTabsProps = { openId: string | null; onToggle: (id: string) => void };

export function OfferingTabs({ openId, onToggle }: OfferingTabsProps) {
  const open = offerings.find((item) => item.id === openId);

  return (
    <>
      <div className="tab-stack">
        {offerings.map((item) => {
          const isOpen = item.id === openId;
          const style = { "--layer": item.color, "--layer-ink": item.ink, "--pos": item.pos } as CSSProperties;
          return (
            <div key={item.id} className={`tab-layer ${isOpen ? "is-open" : ""}`} style={style}>
              <button type="button" className="tab-label" aria-expanded={isOpen} aria-controls="offering-note" onClick={() => onToggle(item.id)}>
                {item.tab}
              </button>
              <div className="tab-body" />
            </div>
          );
        })}
      </div>

      {open && (
        <div className="note unfold" key={open.id} id="offering-note" role="region" aria-labelledby="offering-note-title">
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
