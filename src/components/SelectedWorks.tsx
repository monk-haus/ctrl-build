"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Work = {
  title: string;
  category: string;
  image: string;
  href: string;
};

const works: Work[] = [
  { title: "The Aperture Hub", category: "Commercial Office", image: "/assets/images/works/aperture.jpg", href: "/projects/aperture-hub" },
  { title: "Northline Residence", category: "Residential Architecture", image: "/assets/images/works/northline.jpg", href: "/projects/northline-residence" },
  { title: "Signal Yard", category: "Industrial Campus", image: "/assets/images/works/signal-yard.jpg", href: "/projects/signal-yard" },
];

export default function SelectedWorks() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        viewport.scrollLeft += e.deltaY;
      }
    };

    const onScroll = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      const p = max > 0 ? (viewport.scrollLeft / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, p)));
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      viewport.removeEventListener("wheel", onWheel as any);
      viewport.removeEventListener("scroll", onScroll);
    };
  }, []);

  const barStyle = useMemo(() => ({ width: `${progress}%` }), [progress]);

  return (
    <section className="ctrl-works">
      <div className="ctrl-works-header">SELECTED WORKS [03]</div>
      <div className="ctrl-works-viewport" ref={viewportRef}>
        <div className="ctrl-works-track" ref={trackRef}>
          {works.map((w) => (
            <Link key={w.title} href={w.href} className="ctrl-work-card">
              <div className="ctrl-work-image" style={{ backgroundImage: `url(${w.image})` }} />
              <div className="ctrl-work-overlay">
                <div className="ctrl-work-title">{w.title.toUpperCase()}</div>
                <div className="ctrl-work-cat">{w.category}</div>
                <div className="ctrl-work-cta">[ VIEW CASE STUDY ]</div>
              </div>
            </Link>
          ))}
          <Link href="/projects" className="ctrl-work-viewall">[ VIEW ALL PROJECTS ]</Link>
        </div>
      </div>
      <div className="ctrl-works-progress">
        <div className="ctrl-works-progress-bar" style={barStyle} />
      </div>
    </section>
  );
}


