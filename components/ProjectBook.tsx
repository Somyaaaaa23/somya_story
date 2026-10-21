"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/world";
import { PaperClip, StarBullet } from "@/components/Decor";

type PageId = "about" | "screens" | "highlights";

const PAGE_LABELS: Record<PageId, string> = { about: "WHAT IT IS", screens: "SCREENS", highlights: "HIGHLIGHTS" };
const PAGE_NUMBERS = ["ONE", "TWO", "THREE"];

type ProjectBookProps = { project: Project; onClose: () => void };

export function ProjectBook({ project, onClose }: ProjectBookProps) {
  const pages: PageId[] = ["about"];
  if (project.screens.length) pages.push("screens");
  if (project.highlights.length) pages.push("highlights");

  const [index, setIndex] = useState(0);
  const [shot, setShot] = useState(0);
  const current = pages[index];
  const cover = project.screens[0];

  return (
    <div className="book">
      <div className="book-cover">
        <div className="book-cover-top">
          <span>FILE NO. {project.no}</span>
          <button type="button" className="btn btn-outline book-close" onClick={onClose}>Close file ×</button>
        </div>
        <div className="book-title">
          <span className="folder-script">{project.script}</span>
          <span className="folder-bold">{project.bold}</span>
          <p className="book-tag">{project.tag}</p>
        </div>
        {cover ? (
          <figure className="polaroid book-polaroid">
            <Image src={cover.src} alt={cover.caption} width={cover.width} height={cover.height} sizes="300px" />
            <figcaption className="polaroid-caption">{cover.caption}</figcaption>
            <PaperClip className="book-clip" />
          </figure>
        ) : project.stack.length > 0 ? (
          <div className="book-stack-note paper-shadow">
            <div className="torn lined">
              <p>built with:<br />{project.stack.join(", ")}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="book-pages">
        <div className="book-tabs" role="tablist" aria-label={`Pages in the ${project.name} file`}>
          {pages.map((page, i) => (
            <button key={page} type="button" role="tab" className="book-tab" aria-selected={i === index} aria-controls="book-sheet" onClick={() => setIndex(i)}>
              0{i + 1} · {PAGE_LABELS[page]}
            </button>
          ))}
        </div>
        <div className="book-sheet" id="book-sheet" role="tabpanel">
          <div className="page-turn" key={current}>
            <p className="eyebrow">PAGE {PAGE_NUMBERS[index]}</p>
            {current === "about" && (
              <>
                <h3>What it is</h3>
                <p className="book-lead">{project.about}</p>
                {project.problem && (
                  <>
                    <p className="eyebrow book-label">THE PROBLEM</p>
                    <p className="book-text">{project.problem}</p>
                  </>
                )}
                {project.stack.length > 0 && (
                  <>
                    <p className="eyebrow book-label">BUILT WITH</p>
                    <div className="chips">{project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
                  </>
                )}
              </>
            )}
            {current === "screens" && (
              <>
                <h3>Screens</h3>
                <figure className="screen-main">
                  <a href={project.screens[shot].src} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${project.screens[shot].caption}`}>
                    <Image src={project.screens[shot].src} alt={project.screens[shot].caption} width={project.screens[shot].width} height={project.screens[shot].height} sizes="(max-width: 760px) 90vw, 620px" />
                  </a>
                  <figcaption className="polaroid-caption">{project.screens[shot].caption}</figcaption>
                </figure>
                {project.screens.length > 1 && (
                  <div className="screen-thumbs">
                    {project.screens.map((screen, i) => (
                      <button key={screen.src} type="button" className="screen-thumb" aria-pressed={i === shot} aria-label={`Show screen: ${screen.caption}`} onClick={() => setShot(i)}>
                        <Image src={screen.src} alt="" width={screen.width} height={screen.height} sizes="120px" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
            {current === "highlights" && (
              <>
                <h3>Highlights</h3>
                <ul className="highlights">{project.highlights.map((item) => <li key={item}><StarBullet /><span>{item}</span></li>)}</ul>
                {project.link && <a className="btn btn-ink book-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
              </>
            )}
          </div>
          <div className="book-footer">
            <span className="eyebrow">PAGE {index + 1} OF {pages.length}</span>
            {pages.length > 1 && (
              <div className="book-nav">
                {index > 0 && <button type="button" className="btn btn-outline" onClick={() => setIndex(index - 1)}>← Previous</button>}
                <button type="button" className="btn btn-ink" onClick={() => setIndex(index === pages.length - 1 ? 0 : index + 1)}>
                  {index === pages.length - 1 ? "Back to page one ↺" : "Next page →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
