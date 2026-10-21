"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Asterisk, Orbit, Sparkles } from "lucide-react";
import { worldNodes, type WorldId } from "@/data/world";

type WorldMapProps = {
  activeNode: WorldId | null;
  onSelect: (id: WorldId) => void;
};

export function WorldMap({ activeNode, onSelect }: WorldMapProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="world-map" aria-label="Interactive map of Somya's work">
      <div className="map-topline"><span><span className="live-dot" /> MAP OF CURIOSITY</span><span>SELECT A DESTINATION ↘</span></div>
      <svg className="map-lines" viewBox="0 0 800 540" aria-hidden="true" preserveAspectRatio="none">
        <path className="map-line map-line-main" d="M395 275 C300 200 260 150 160 125 S80 180 130 240 S320 350 400 280 S580 120 660 160 S700 320 570 350 S450 440 400 280" />
        <path className="map-line map-line-secondary" d="M395 275 C500 240 550 280 570 350 M395 275 C330 380 240 410 180 370" />
        <circle cx="395" cy="275" r="116" className="orbit-ring" />
        <circle cx="395" cy="275" r="158" className="orbit-ring orbit-ring-dash" />
      </svg>
      <motion.div className="map-center" animate={reduceMotion ? undefined : { rotate: [0, 3, -3, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        <span className="center-spark"><Asterisk size={25} strokeWidth={1.7} /></span>
        <span className="center-kicker">THE PERSON</span>
        <strong>behind<br />the projects.</strong>
        <span className="center-foot">curious by default <span>↗</span></span>
      </motion.div>

      {worldNodes.map((node, index) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        return (
          <motion.button
            key={node.id}
            type="button"
            className={`world-node ${node.position} ${isActive ? "world-node-active" : ""} node-${node.color}`}
            onClick={() => onSelect(node.id)}
            aria-haspopup="dialog"
            aria-label={`Explore ${node.title}: ${node.short}`}
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.09, duration: reduceMotion ? 0 : 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -5, rotate: index % 2 ? 1 : -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="node-icon"><Icon size={20} strokeWidth={1.8} /></span>
            <span className="node-copy"><strong>{node.title}</strong><small>{node.short}</small></span>
            <ArrowUpRight className="node-arrow" size={16} />
          </motion.button>
        );
      })}
      <div className="map-sticker sticker-one" aria-hidden="true"><Sparkles size={17} /> NO FIXED ROUTE</div>
      <div className="map-sticker sticker-two" aria-hidden="true"><Orbit size={17} /> STILL IN PROGRESS</div>
      <div className="map-caption">A living map of things I’ve tried, learned, and built.</div>
    </div>
  );
}
