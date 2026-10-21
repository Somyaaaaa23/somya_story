"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowRight, Asterisk, MousePointer2, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { WorldMap } from "@/components/WorldMap";
import { DetailPanel } from "@/components/DetailPanel";
import { RecruiterPanel } from "@/components/RecruiterPanel";
import { contact, type WorldId } from "@/data/world";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function OriginStory() {
  const [activeNode, setActiveNode] = useState<WorldId | null>(null);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const introRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      gsap.fromTo(".intro-reveal", { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: introRef.current, start: "top 82%", once: true },
      });
      gsap.fromTo(".map-reveal", { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: mapRef.current, start: "top 78%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const anyDialogOpen = Boolean(activeNode || recruiterOpen);
    document.body.classList.toggle("dialog-open", anyDialogOpen);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveNode(null);
        setRecruiterOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeNode, recruiterOpen]);

  const explore = () => mapRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });

  return (
    <main id="home">
      <Navigation onOpenRecruiter={() => setRecruiterOpen(true)} onExplore={explore} />
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-meta"><span><span className="live-dot" /> CURRENTLY IN THE MAKING</span><span>BIT MESRA, INDIA · 2026</span></div>
        <div className="hero-copy">
          <div className="hero-kicker hero-reveal"><span className="scribble-star"><Asterisk size={20} /></span> A DEVELOPER’S FIELD NOTES</div>
          <h1 id="hero-title" className="hero-title hero-reveal">I didn’t start<br />with a <span className="scribble-word">master plan<span className="scribble-underline" /></span><span className="hero-period">.</span></h1>
          <p className="hero-subtitle hero-reveal">I started by <span>building.</span></p>
          <p className="hero-description hero-reveal">A computer science student at BIT Mesra, figuring things out by making things real. Software, AI/ML, research, and the occasional idea that refuses to stay in a notebook.</p>
          <div className="hero-actions hero-reveal"><button className="button-primary" onClick={explore}>Explore my world <ArrowDownRight size={18} /></button><button className="button-text" onClick={() => setRecruiterOpen(true)}>The 30-second version <ArrowRight size={16} /></button></div>
          <div className="hero-footnote hero-reveal"><span className="footnote-line" /> No perfect origin story. Just a lot of trying.</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-paper art-paper-back" />
          <div className="art-paper art-paper-front">
            <div className="art-paper-top"><span>NOTES TO SELF</span><span>NO. 001</span></div>
            <div className="art-doodle"><svg viewBox="0 0 280 240" role="img" aria-label="Decorative hand-drawn path"><path d="M31 173 C10 115 68 74 112 105 S172 178 204 122 S238 70 254 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 9"/><path d="M39 62 C65 23 119 28 130 67 C142 110 83 124 69 87 C58 58 98 44 115 68" fill="none" stroke="#3157D5" strokeWidth="4" strokeLinecap="round"/><path d="M204 145 l9 20 22 -2 -16 15 5 22 -19 -12 -19 12 6 -22 -17 -15 22 2z" fill="#F05A36"/><circle cx="54" cy="190" r="9" fill="#F4D86A"/><path d="M170 37 l8 15 17 2 -13 12 4 17 -16 -9 -15 9 3 -17 -12 -12 17 -2z" fill="#657B54"/><path d="M95 162 q19 -17 36 0 q-18 18 -36 0z" fill="#3157D5"/><circle cx="110" cy="162" r="4" fill="#F5F0E6"/></svg></div>
            <div className="art-caption">follow the interesting<br />questions <span>↗</span></div>
            <div className="art-stamp">STILL<br />LEARNING</div>
          </div>
          <div className="floating-note note-a"><Sparkles size={15} /> build, break, learn</div>
          <div className="floating-note note-b"><span className="note-dot" /> curiosity is a feature</div>
          <div className="art-index">FIG. 01 — A WORK IN PROGRESS</div>
        </div>
        <div className="hero-bottom"><span>SCROLL A LITTLE. WANDER A LOT.</span><span className="scroll-cue"><ArrowDown size={15} /></span><span>01 / THE BEGINNING</span></div>
      </section>

      <section className="manifesto-section" ref={introRef} aria-labelledby="manifesto-title">
        <div className="section-label intro-reveal"><span>01 / THE BACKSTORY</span><span>NOT A STRAIGHT LINE ↘</span></div>
        <div className="manifesto-grid">
          <h2 id="manifesto-title" className="manifesto-title intro-reveal">Somewhere between <span className="blue-underline">curiosity</span> and <span className="orange-highlight">shipping it</span>, I found my thing.</h2>
          <div className="manifesto-copy intro-reveal"><p>I study computer science, but the work I remember most starts with a question: could this be useful? Could this be clearer? Could I make it work?</p><p>That question has taken me from building products to experimenting with machine learning, exploring research, competing in hackathons, and helping connect students with opportunities.</p><p className="hand-note">This map is the messy, useful middle. <span>↙</span></p></div>
        </div>
        <div className="margin-doodle" aria-hidden="true">✳</div>
      </section>

      <section className="world-section" ref={mapRef} id="explore" aria-labelledby="world-title">
        <div className="section-label map-reveal"><span>02 / PICK A PATH</span><span>NO WRONG TURN</span></div>
        <div className="world-heading map-reveal"><div><p className="eyebrow">WELCOME TO THE WORK IN PROGRESS</p><h2 id="world-title">A little world<br />of <span>what I do.</span></h2></div><p className="world-instruction"><MousePointer2 size={18} /> Click a destination.<br />Follow whatever interests you.</p></div>
        <WorldMap activeNode={activeNode} onSelect={setActiveNode} />
        <p className="world-mobile-hint">Tap any destination to open its field notes.</p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-doodle" aria-hidden="true">↗</div>
        <p className="eyebrow">03 / YOUR TURN</p>
        <h2 id="contact-title">Got an interesting<br />problem? <span>I’m listening.</span></h2>
        <p className="contact-copy">I’m interested in software engineering, applied AI/ML, research, and people who enjoy making useful things.</p>
        <div className="contact-actions"><a className="button-primary" href={`mailto:${contact.email}`}>Let’s talk <ArrowDownRight size={18} /></a><button className="button-text" onClick={() => setRecruiterOpen(true)}>Open recruiter view <ArrowRight size={16} /></button></div>
        <div className="contact-footer"><span>MADE WITH CURIOSITY, NOT A TEMPLATE.</span><span>SOMYA UPADHYAY © 2026</span><a href="#home">BACK TO THE TOP ↑</a></div>
      </section>

      <DetailPanel activeNode={activeNode} onClose={() => setActiveNode(null)} />
      <RecruiterPanel open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </main>
  );
}
