"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { OfferingTabs } from "@/components/OfferingTabs";
import { ProjectDrawer } from "@/components/ProjectDrawer";
import { RecruiterPanel } from "@/components/RecruiterPanel";
import { BinderClip, ChromeStar, DoodleArt, PaperClip, ScriptPaper } from "@/components/Decor";
import { contact } from "@/data/world";

export default function OriginStory() {
  const [openOffering, setOpenOffering] = useState<string | null>("experience");
  const [openProject, setOpenProject] = useState<string | null>("graphsentinel");
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dialog-open", recruiterOpen);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setRecruiterOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [recruiterOpen]);

  const toggleOffering = (id: string) => setOpenOffering((current) => (current === id ? null : id));

  return (
    <main id="home">
      <Navigation onOpenRecruiter={() => setRecruiterOpen(true)} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span className="eyebrow">A DEVELOPER’S FIELD NOTES</span><span className="eyebrow">BIT MESRA · 2023–2027</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title" className="display hero-title">I didn’t start with a master plan.</h1>
            <p className="script hero-script">I started by building.</p>
            <p className="hero-description">A computer science student at BIT Mesra, figuring things out by making things real. Software, AI/ML, research, and the occasional idea that refuses to stay in a notebook.</p>
            <div className="hero-actions">
              <a className="btn btn-ink" href="#offering">Open my files <ArrowDown size={16} /></a>
              <button type="button" className="btn btn-outline" onClick={() => setRecruiterOpen(true)}>The 30-second version <ArrowRight size={16} /></button>
            </div>
          </div>
          <div className="hero-collage" aria-hidden="true">
            <ScriptPaper className="collage-script">build, break, learn, and build again. follow the interesting questions. ship it, then make it better. build, break, learn.</ScriptPaper>
            <figure className="polaroid collage-polaroid">
              <div className="polaroid-art"><DoodleArt /></div>
              <figcaption className="polaroid-caption">follow the interesting questions ↗</figcaption>
            </figure>
            <PaperClip className="collage-clip" />
            <div className="collage-note paper-shadow">
              <div className="torn lined"><p>notes to self:<br />1. build it<br />2. break it<br />3. learn, repeat</p></div>
            </div>
            <BinderClip className="collage-binder" hole="#FFFCF8" />
            <ChromeStar className="collage-star" />
          </div>
        </div>
      </section>

      <section className="section section-pink offering" id="offering" aria-labelledby="offer-title">
        <div className="section-head">
          <h2 id="offer-title" className="display section-title">the little things I offer</h2>
          <p className="eyebrow">CURATED BY SOMYA · PULL A TAB TO OPEN ITS NOTES</p>
        </div>
        <OfferingTabs openId={openOffering} onToggle={toggleOffering} />
      </section>

      <section className="section section-white projects" id="projects" aria-labelledby="projects-title">
        <div className="drawer-head">
          <div>
            <p className="eyebrow">FILED UNDER: THINGS I’VE MADE</p>
            <h2 id="projects-title" className="display section-title">the project drawer</h2>
          </div>
          <p className="hand drawer-hint">pick a file, it opens like a book →</p>
        </div>
        <ProjectDrawer openId={openProject} onOpen={setOpenProject} />
      </section>

      <section className="section section-pink contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">YOUR TURN</p>
        <h2 id="contact-title" className="display">Got an interesting problem?</h2>
        <p className="script contact-script">I’m listening.</p>
        <p className="contact-copy">I’m interested in software engineering, applied AI/ML, research, and people who enjoy making useful things.</p>
        <div className="contact-actions">
          <a className="btn btn-ink" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="btn btn-outline" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="btn btn-outline" href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <button type="button" className="btn btn-outline" onClick={() => setRecruiterOpen(true)}>Open recruiter view</button>
        </div>
        <div className="site-footer"><span>MADE WITH CURIOSITY, NOT A TEMPLATE</span><span>SOMYA UPADHYAY © 2026</span><a href="#home">BACK TO THE TOP ↑</a></div>
      </section>

      <RecruiterPanel open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </main>
  );
}
