"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavigationProps = { onOpenRecruiter: () => void };

export function Navigation({ onOpenRecruiter }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="site-nav" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Somya Upadhyay, home">
        <span className="brand-stamp">S</span>
        <span className="brand-name">somya upadhyay <small>FIELD NOTES / 2026</small></span>
      </a>
      <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Portfolio links">
        <a className="nav-link" href="#offering" onClick={close}>What I do</a>
        <a className="nav-link" href="#projects" onClick={close}>Projects</a>
        <button type="button" className="nav-link" onClick={() => { close(); onOpenRecruiter(); }}>Recruiter view</button>
        <a className="nav-cta" href="#contact" onClick={close}>Say hello</a>
      </nav>
      <button type="button" className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
