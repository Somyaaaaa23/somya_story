"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, Code2, Download, Linkedin, Github, Mail, X } from "lucide-react";
import { contact, recruiterSnapshot } from "@/data/world";
import { useDialogFocus } from "@/components/useDialogFocus";

type RecruiterPanelProps = { open: boolean; onClose: () => void };

export function RecruiterPanel({ open, onClose }: RecruiterPanelProps) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useDialogFocus<HTMLElement>(open);
  return (
    <AnimatePresence>
      {open && <motion.div className="panel-backdrop recruiter-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.section ref={dialogRef} className="recruiter-panel" role="dialog" aria-modal="true" aria-labelledby="recruiter-title" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: reduceMotion ? 0.1 : 0.22 }}>
          <div className="panel-head"><span className="panel-eyebrow">THE SHORT VERSION</span><button className="icon-button" onClick={onClose} aria-label="Close recruiter view"><X size={19} /></button></div>
          <div className="recruiter-label"><span className="live-dot" /> RECRUITER VIEW · 30-SECOND READ</div>
          <h2 id="recruiter-title">{recruiterSnapshot.title}<span className="period">.</span></h2>
          <p className="recruiter-role">{recruiterSnapshot.role}</p>
          <p className="panel-detail">{recruiterSnapshot.summary}</p>
          <div className="strength-grid">{recruiterSnapshot.strengths.map((strength, i) => <div key={strength}><span>0{i + 1}</span>{strength}</div>)}</div>
          <div className="recruiter-note">{recruiterSnapshot.note}</div>
          <div className="panel-actions recruiter-actions">
            <a className="button-primary" href="#contact" onClick={onClose}>Contact me <ArrowDownRight size={17} /></a>
            <a className="button-quiet" href={contact.resume} target="_blank" rel="noreferrer"><Download size={16} /> Résumé PDF</a>
          </div>
          <div className="social-row">
            <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href={contact.leetcode} target="_blank" rel="noreferrer"><Code2 size={16} /> LeetCode</a>
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  );
}
