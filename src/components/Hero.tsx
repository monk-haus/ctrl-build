"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const wireRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1200);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    const photo = photoRef.current;
    const wire = wireRef.current;
    if (!el || !photo || !wire) return;
    const baseX = 3;
    const baseY = -50;
    wire.style.transform = `translate3d(${baseX}px, ${baseY}px, 0)`;

    let cleanup: (() => void) | undefined;

    if (isDesktop) {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        const photoX = (-dx * 8);
        const photoY = (-dy * 8);
        const wireX = (dx * 14) + baseX;
        const wireY = (dy * 14) + baseY;
        photo.style.transform = `translate3d(${photoX}px, ${photoY}px, 0)`;
        wire.style.transform = `translate3d(${wireX}px, ${wireY}px, 0)`;
      };
      const onLeave = () => {
        photo.style.transform = `translate3d(0, 0, 0)`;
        wire.style.transform = `translate3d(${baseX}px, ${baseY}px, 0)`;
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanup = () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    } else {
      const onScroll = () => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        const visible = Math.max(0, Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0));
        const progress = visible / Math.max(1, rect.height);
        const offset = (1 - progress); 
        const photoY = offset * -6;
        const wireY = offset * 12 + baseY;
        photo.style.transform = `translate3d(0, ${photoY}px, 0)`;
        wire.style.transform = `translate3d(${baseX}px, ${wireY}px, 0)`;
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => window.removeEventListener("scroll", onScroll);
    }
    return () => { if (cleanup) cleanup(); };
  }, [isDesktop]);

  const containerClass = useMemo(
    () => ["ctrl-hero", entered ? "in" : ""].filter(Boolean).join(" "),
    [entered]
  );

  return (
    <section className={containerClass}>
      <div className="ctrl-hero-grid" />
      <div className="ctrl-hero-left">
        <h1 className="ctrl-hero-h1">
          <span className="ctrl-hero-line">COMMAND</span>
          <span className="ctrl-hero-line">YOUR</span>
          <span className="ctrl-hero-line">SPACE.</span>
        </h1>
        <p className="ctrl-hero-sub">
          We are CTRL+Build. A next-generation construction firm merging digital precision with master craftsmanship to deliver projects of unparalleled quality.
        </p>
        <Link href="/portfolio" className="ctrl-cta ctrl-hero-cta">[ VIEW RECENT WORK ]</Link>
      </div>
      <div className="ctrl-hero-right ctrl-hero-visual ctrl-hero-visual-enter" ref={containerRef}>
        <div
          ref={photoRef}
          className="ctrl-hero-photo"
          style={{ backgroundImage: `url(/assets/images/hero/photo.jpg)` }}
        />
        <div
          ref={wireRef}
          className="ctrl-hero-wire"
          style={{ backgroundImage: `url(/assets/images/hero/blueprint.png)`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        />
      </div>
      <div className="ctrl-scroll-indicator">+</div>
    </section>
  );
}


