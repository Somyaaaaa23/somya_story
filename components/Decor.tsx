"use client";

import { useId } from "react";

type DecorProps = { className?: string };

export function BinderClip({ className, hole }: DecorProps & { hole: string }) {
  return (
    <svg className={className} viewBox="0 0 90 110" aria-hidden="true">
      <circle cx="45" cy="24" r="17" fill="#D9A3C1" />
      <circle cx="45" cy="24" r="7" fill={hole} />
      <path d="M30 34h30l10 40H20z" fill="#CF93B4" />
      <rect x="8" y="70" width="74" height="22" rx="5" fill="#D9A3C1" />
      <rect x="8" y="70" width="74" height="6" rx="3" fill="#E7BED4" />
    </svg>
  );
}

export function ChromeStar({ className }: DecorProps) {
  const id = useId();
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FAFAFA" />
          <stop offset=".45" stopColor="#A3A3A8" />
          <stop offset=".6" stopColor="#F2F2F4" />
          <stop offset="1" stopColor="#5E5E64" />
        </linearGradient>
      </defs>
      <path d="M50 6c4 0 7 22 11 26s26 3 27 7-19 14-20 19 8 27 4 30-21-13-27-13-22 16-26 13 5-25 4-30S7 43 8 39s23-3 27-7S46 6 50 6z" fill={`url(#${id})`} stroke="#6F6F75" strokeWidth="1.2" />
      <path d="M44 30c3-6 7-6 8 2" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function StarBullet() {
  return (
    <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M50 6c4 0 7 22 11 26s26 3 27 7-19 14-20 19 8 27 4 30-21-13-27-13-22 16-26 13 5-25 4-30S7 43 8 39s23-3 27-7S46 6 50 6z" fill="#B9B9BF" stroke="#6F6F75" strokeWidth="5" />
    </svg>
  );
}

export function PaperClip({ className }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 34 84" fill="none" aria-hidden="true">
      <path d="M10 70V16a7 7 0 0 1 14 0v56a11 11 0 0 1-22 0V22" stroke="#A9A9AE" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export function ScriptPaper({ className, children }: DecorProps & { children: string }) {
  return (
    <div className={`script-paper ${className ?? ""}`} aria-hidden="true">
      <p>{children}</p>
    </div>
  );
}

export function DoodleArt() {
  return (
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <path d="M31 173 C10 115 68 74 112 105 S172 178 204 122 S238 70 254 80" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 9" />
      <path d="M39 62 C65 23 119 28 130 67 C142 110 83 124 69 87 C58 58 98 44 115 68" fill="none" stroke="#8E2621" strokeWidth="4" strokeLinecap="round" />
      <path d="M204 145 l9 20 22 -2 -16 15 5 22 -19 -12 -19 12 6 -22 -17 -15 22 2z" fill="#E9AFC0" />
      <circle cx="54" cy="190" r="9" fill="#C4BD55" />
      <path d="M170 37 l8 15 17 2 -13 12 4 17 -16 -9 -15 9 3 -17 -12 -12 17 -2z" fill="#C6A0B1" />
      <path d="M95 162 q19 -17 36 0 q-18 18 -36 0z" fill="#141414" />
      <circle cx="110" cy="162" r="4" fill="#FFFCF8" />
    </svg>
  );
}
