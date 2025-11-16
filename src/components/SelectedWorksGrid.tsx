"use client";

import Link from "next/link";

type GridItem = {
  title: string;
  category: string;
  image: string;
  href: string;
  variant: "hero" | "medium" | "portrait" | "standard";
  status: string;
};

const items: GridItem[] = [
  { title: "The Aperture Hub", category: "Commercial Office", image: "/assets/images/works/aperture.jpg", href: "/projects/aperture-hub", variant: "hero", status: "Completed 2024" },
  { title: "Northline Residence", category: "Residential Architecture", image: "/assets/images/projects/northline/1.jpg", href: "/projects/northline-residence", variant: "medium", status: "Completed 2023" },
  { title: "Signal Yard", category: "Industrial Campus", image: "/assets/images/projects/signal-yard/1..jpg", href: "/projects/signal-yard", variant: "portrait", status: "In Progress" },
  { title: "Atrium One", category: "Mixed-Use", image: "/assets/images/projects/atrium-one/1.jpg", href: "/projects/atrium-one", variant: "standard", status: "Completed 2022" },
  { title: "Linea Tower", category: "High-Rise", image: "/assets/images/projects/linea-tower/1.jpg", href: "/projects/linea-tower", variant: "medium", status: "Concept" }
];

export default function SelectedWorksGrid() {
  return (
    <section className="ctrl-works-grid">
      <div className="ctrl-works-grid-header">SELECTED WORKS [03]</div>
      <div className="ctrl-works-grid-wrap">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`ctrl-grid-card ${item.variant}`}
          >
            <div className="ctrl-grid-img" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="ctrl-grid-overlay">
              <div className="ctrl-grid-title">{item.title.toUpperCase()}</div>
              <div className="ctrl-grid-cat">{item.category}</div>
            </div>
            <div className="ctrl-grid-cad">
              <div className="ctrl-grid-readout">
                <div>PROJECT: {item.title}</div>
                <div>TYPE: {item.category}</div>
                <div>STATUS: {item.status}</div>
                <div className="cta">[ VIEW CASE STUDY ]</div>
              </div>
            </div>
            <div className="ctrl-grid-caption">
              <div className="title">{item.title.toUpperCase()}</div>
              <div className="cat">{item.category}</div>
              <div className="cta">[ VIEW CASE STUDY ]</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="ctrl-works-grid-footer">
        <Link href="/projects" className="ctrl-works-grid-viewall">[ VIEW ALL PROJECTS ]</Link>
      </div>
    </section>
  );
}


