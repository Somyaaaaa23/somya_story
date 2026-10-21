"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Check, Copy, X } from "lucide-react";
import { useState } from "react";
import { worldNodes, type WorldId } from "@/data/world";
import { useDialogFocus } from "@/components/useDialogFocus";

type DetailPanelProps = { activeNode: WorldId | null; onClose: () => void };

export function DetailPanel({ activeNode, onClose }: DetailPanelProps) {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const node = worldNodes.find((item) => item.id === activeNode);
  const NodeIcon = node?.icon;
  const dialogRef = useDialogFocus<HTMLElement>(Boolean(node));

  const copySummary = async () => {
    if (!node) return;
    const summary = `${node.title}\n${node.detail}\n\n${node.facts.join("\n")}`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {node && (
        <motion.div className="panel-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.section ref={dialogRef} className="detail-panel" role="dialog" aria-modal="true" aria-labelledby="panel-title" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: reduceMotion ? 0.1 : 0.25 }}>
            <div className="panel-head"><span className="panel-eyebrow">{node.eyebrow}</span><button className="icon-button" onClick={onClose} aria-label="Close details"><X size={19} /></button></div>
            <div className={`panel-symbol node-${node.color}`}>{NodeIcon && <NodeIcon size={27} strokeWidth={1.7} />}</div>
            <h2 id="panel-title">{node.title}<span className="period">.</span></h2>
            <p className="panel-short">{node.short}</p>
            <p className="panel-detail">{node.detail}</p>
            <div className="panel-divider"><span>FIELD NOTES</span><span>↘</span></div>
            <ul className="fact-list">{node.facts.map((fact) => <li key={fact}><span className="fact-check"><Check size={13} /></span><span>{fact}</span></li>)}</ul>
            {node.links && <div className="social-row">{node.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={14} /></a>)}</div>}
            <div className="panel-note"><span className="note-pin">✳</span><p>Small reminder: the best work is more than the final screenshot. I want to show the thinking behind it, too.</p></div>
            <div className="panel-actions">
              <a href="#contact" className="button-primary" onClick={onClose}>{node.actionLabel} <ArrowDownRight size={17} /></a>
              <button className="button-quiet" onClick={copySummary}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied notes" : "Copy summary"}</button>
            </div>
            <div className="panel-footer">A CHAPTER, NOT THE WHOLE STORY <ArrowUpRight size={13} /></div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
