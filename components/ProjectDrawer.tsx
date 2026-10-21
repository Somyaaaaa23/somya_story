"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/world";
import { ProjectBook } from "@/components/ProjectBook";

type ProjectDrawerProps = { openId: string | null; onOpen: (id: string | null) => void };

export function ProjectDrawer({ openId, onOpen }: ProjectDrawerProps) {
  const open = projects.find((project) => project.id === openId);
  const bookRef = useRef<HTMLDivElement>(null);
  const openedByUser = useRef(false);

  // Bring a freshly opened file into view; on phones it sits below all three folders.
  useEffect(() => {
    if (!openedByUser.current || !openId) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bookRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [openId]);

  const openFile = (id: string) => {
    openedByUser.current = true;
    onOpen(id);
  };

  return (
    <>
      <div className="folders">
        {projects.map((project) => {
          const isOpen = project.id === openId;
          return (
            <button key={project.id} type="button" className={`folder ${isOpen ? "is-open" : ""}`} aria-expanded={isOpen} aria-controls="project-file" aria-label={`Open the ${project.name} project file`} onClick={() => openFile(project.id)}>
              <span className="folder-back" />
              <span className="folder-tab" />
              <span className="folder-sheet" />
              <span className="folder-grid" />
              <span className="folder-front">
                <span className="folder-corner left">FILE NO. {project.no}</span>
                <span className="folder-corner right">{project.year}</span>
                <span className="folder-script">{project.script}</span>
                <span className="folder-bold">{project.bold}</span>
                <span className="folder-tag">{project.tag.toUpperCase()}</span>
                <span className="folder-cta">{isOpen ? "File is open ↓" : "Open file ↗"}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="book-slot" id="project-file" ref={bookRef}>
        {open && (
          <div className="unfold" key={open.id}>
            <ProjectBook project={open} onClose={() => onOpen(null)} />
          </div>
        )}
      </div>
    </>
  );
}
