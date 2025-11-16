"use client";

import FinalCta from "@/components/FinalCta";
import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  name: string;
  type: "Commercial" | "Residential" | "Industrial" | "Interiors";
  status: string;
  href: string;
  image: string;
};

const allProjects: Project[] = [
  { name: "The Aperture Hub", type: "Commercial", status: "Completed 2024", href: "/projects/aperture-hub", image: "/assets/images/works/aperture.jpg" },
  { name: "Northline Residence", type: "Residential", status: "Completed 2023", href: "/projects/northline-residence", image: "/assets/images/projects/northline/1.jpg" },
  { name: "Signal Yard", type: "Industrial", status: "In Progress", href: "/projects/signal-yard", image: "/assets/images/projects/signal-yard/1..jpg" },
  { name: "Atrium One", type: "Commercial", status: "Completed 2022", href: "/projects/atrium-one", image: "/assets/images/projects/atrium-one/1.jpg" },
  { name: "Linea Tower", type: "Commercial", status: "Concept", href: "/projects/linea-tower", image: "/assets/images/projects/linea-tower/1.jpg" }
];

const filters = ["All", "Commercial", "Residential", "Industrial", "Interiors"] as const;
type Filter = typeof filters[number];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [preview, setPreview] = useState<{ src: string; x: number; y: number; show: boolean }>({ src: "", x: 0, y: 0, show: false });
  const indexRef = useRef<HTMLDivElement | null>(null);

  const projects = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter((p) => p.type === filter);
  }, [filter]);

  useEffect(() => {
    const el = indexRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      setPreview((p) => ({ ...p, x: e.clientX + 24, y: e.clientY + 24 }));
    };
    const onLeave = () => setPreview((p) => ({ ...p, show: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const onRowEnter = (src: string) => setPreview({ src, x: preview.x, y: preview.y, show: true });

  return (
    <>
      <div className="port-bar">
        <div className="port-bar-inner">
          <div className="port-h1">PROJECT ARCHIVE</div>
          <div className="port-filters">
            {filters.map((f) => (
              <a key={f} className={`port-filter ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
                [ {f.toUpperCase()} ]
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="port-index" ref={indexRef}>
        {projects.map((p) => (
          <div key={p.name} className="port-row" onMouseEnter={() => onRowEnter(p.image)}>
            <div className="port-name">{p.name.toUpperCase()}</div>
            <div className="port-type">{p.type} {p.type === "Commercial" ? "Office" : ""}</div>
            <div className="port-status">{p.status}</div>
            <a href={p.href} className="port-action">[ VIEW CASE STUDY ]</a>
          </div>
        ))}
        <div
          className={`port-preview ${preview.show ? "show" : ""}`}
          style={{ left: preview.x, top: preview.y, backgroundImage: `url(${preview.src})` }}
        />
      </div>

      <div className="port-grid">
        {projects.map((p) => (
          <div key={p.name} className="port-card">
            <div className="port-card-img" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="port-card-cap">
              <div className="port-card-title">{p.name.toUpperCase()}</div>
              <div className="port-card-meta">{p.type} — {p.status}</div>
              <a href={p.href} className="port-card-cta">[ VIEW CASE STUDY ]</a>
            </div>
          </div>
        ))}
      </div>

      <FinalCta />
    </>
  );
}


