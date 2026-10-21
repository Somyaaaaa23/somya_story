"use client";

import { ArrowDownRight, Compass, FileText, Menu, X } from "lucide-react";
import { useState } from "react";

type NavigationProps = {
  onOpenRecruiter: () => void;
  onExplore: () => void;
};

export function Navigation({ onOpenRecruiter, onExplore }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleExplore = () => {
    setMenuOpen(false);
    onExplore();
  };

  const handleRecruiter = () => {
    setMenuOpen(false);
    onOpenRecruiter();
  };

  return (
    <header className="site-nav" aria-label="Main navigation">
      <a className="brand-mark" href="#home" aria-label="Somya Upadhyay, home">
        <span className="brand-stamp">S<span>✳</span></span>
        <span className="brand-name">somya upadhyay <small>FIELD NOTES / 2026</small></span>
      </a>
      <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Portfolio links">
        <button className="nav-link" onClick={handleExplore}><Compass size={15} /> Explore the world</button>
        <button className="nav-link" onClick={handleRecruiter}><FileText size={15} /> Recruiter view</button>
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Say hello <ArrowDownRight size={15} /></a>
      </nav>
      <button className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
