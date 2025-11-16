"use client";

import { useMemo, useState } from "react";

type Service = {
  num: string;
  title: string;
  summary: string;
  image: string;
  paragraph: string;
  bullets: string[];
};

const services: Service[] = [
  {
    num: "01.",
    title: "Pre-Construction & VDC",
    summary: "Digital modeling, feasibility analysis, and logistics planning.",
    image: "/assets/images/services/vdc.jpg",
    paragraph:
      "We align scope, schedule, and budget using digital twins and constructability reviews. Early insight reduces risk and accelerates delivery.",
    bullets: ["BIM & Digital Twinning", "Feasibility & Risk Analysis", "Logistics & Procurement Strategy"]
  },
  {
    num: "02.",
    title: "Construction Management",
    summary: "Field execution with real-time coordination and quality control.",
    image: "/assets/images/services/field.jpg",
    paragraph:
      "Integrated planning and site coordination keep crews, materials, and inspections synchronized, ensuring predictable outcomes.",
    bullets: ["Trade Coordination", "Schedule & Cost Control", "Quality & Closeout"]
  },
  {
    num: "03.",
    title: "Fabrication & Assembly",
    summary: "Prefabrication workflows for speed, precision, and safety.",
    image: "/assets/images/services/fab.jpg",
    paragraph:
      "Component-based delivery and shop-ready documentation reduce rework and compress on-site durations.",
    bullets: ["DFMA Engineering Support", "Shop Drawings & Kitting", "Installation Sequencing"]
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => setOpenIndex((v) => (v === idx ? null : idx));

  const containerClass = useMemo(() => ["ctrl-services"].join(" "), []);

  return (
    <section className={containerClass}>
      <div className="ctrl-services-inner">
        <div className="ctrl-services-header">CORE CAPABILITIES [04]</div>
        <div className="ctrl-spec-list">
          {services.map((s, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={s.title}
                className={`ctrl-spec-row ${isOpen ? "open" : ""}`}
                onClick={() => toggle(idx)}
                role="button"
                aria-expanded={isOpen}
                style={{ cursor: "pointer" }}
              >
                <div className="ctrl-spec-num">{s.num}</div>
                <div className="ctrl-spec-title">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </div>
                <button
                  aria-expanded={isOpen}
                  className="ctrl-spec-trigger"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(idx);
                  }}
                >
                  <span className="ctrl-spec-plus">+</span>
                </button>
                <div
                  className="ctrl-spec-detail"
                  style={{ maxHeight: isOpen ? 800 : 0 }}
                >
                  <div className="ctrl-spec-detail-inner">
                    <div
                      className="ctrl-spec-photo"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div className="ctrl-spec-copy">
                      <p>{s.paragraph}</p>
                      <div className="ctrl-spec-bullets">
                        {s.bullets.map((b) => (
                          <div key={b} className="item">
                            <span className="mark">+</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


