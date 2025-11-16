"use client";

import FinalCta from "@/components/FinalCta";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const sec1Ref = useRef<HTMLElement | null>(null);
  const sec2Ref = useRef<HTMLElement | null>(null);
  const sec3Ref = useRef<HTMLElement | null>(null);
  const [inViewHero, setInViewHero] = useState(false);
  const [active, setActive] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e.forEach(x => x.isIntersecting && setInViewHero(true)), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const s1 = sec1Ref.current;
    const s2 = sec2Ref.current;
    const s3 = sec3Ref.current;
    if (!s1 || !s2 || !s3) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === s1) setActive(1);
          else if (e.target === s2) setActive(2);
          else if (e.target === s3) setActive(3);
        });
      },
      { threshold: 0.4 }
    );
    [s1, s2, s3].forEach((x) => io.observe(x));
    return () => io.disconnect();
  }, []);

  const heroCls = useMemo(() => ["svc-hero", inViewHero ? "in" : ""].join(" "), [inViewHero]);

  const scrollTo = (n: 1 | 2 | 3) => {
    const map: Record<number, HTMLElement | null> = { 1: sec1Ref.current, 2: sec2Ref.current, 3: sec3Ref.current };
    const el = map[n];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section ref={heroRef} className={heroCls}>
        <div className="svc-hero-bg" />
        <div className="svc-hero-inner">
          <h1 className="svc-hero-h1">
            <span className="svc-hero-line">THE BLUEPRINT</span>
            <span className="svc-hero-line">IS THE BUILDING.</span>
          </h1>
          <p className="svc-hero-sub">
            Our service is a fully-integrated, data-driven workflow. We don&apos;t just manage steps; we command the entire process, from digital twin to final execution.
          </p>
        </div>
        <div className="svc-plus">+</div>
      </section>

      <nav ref={barRef} className="svc-nav">
        <div className="svc-nav-inner">
          <a className={`svc-nav-link ${active === 1 ? "active" : ""}`} onClick={() => scrollTo(1)}>[ 01: VDC & PLANNING ]</a>
          <a className={`svc-nav-link ${active === 2 ? "active" : ""}`} onClick={() => scrollTo(2)}>[ 02: EXECUTION & MANAGEMENT ]</a>
          <a className={`svc-nav-link ${active === 3 ? "active" : ""}`} onClick={() => scrollTo(3)}>[ 03: COMPLETION & FIT-OUT ]</a>
        </div>
      </nav>

      <section ref={sec1Ref} id="svc-01" className="svc-sec">
        <div className="svc-sec-inner">
          <div className="svc-visual" style={{ backgroundImage: `url(/assets/images/services/vdc.jpg)` }} />
          <div className="svc-copy">
            <h3>01. PRE-CONSTRUCTION & VDC</h3>
            <h4>COMMAND THE DIGITAL TWIN.</h4>
            <p>We align scope, schedule, and budget in the model. Risk is surfaced early and resolved digitally, compressing delivery while protecting quality.</p>
            <div className="svc-bullets">
              <div className="item"><span className="mark">+</span><span>BIM & Digital Twinning</span></div>
              <div className="item"><span className="mark">+</span><span>Feasibility & Risk Analysis</span></div>
              <div className="item"><span className="mark">+</span><span>Logistics & Procurement Strategy</span></div>
              <div className="item"><span className="mark">+</span><span>Cost Modeling & Optimization</span></div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sec2Ref} id="svc-02" className="svc-sec reverse">
        <div className="svc-sec-inner">
          <div className="svc-copy">
            <h3>02. GENERAL CONTRACTING</h3>
            <h4>COMMAND THE SITE.</h4>
            <p>The plan becomes execution. Field coordination, safety programs, and vendor management translate digital intent into predictable progress.</p>
            <div className="svc-bullets">
              <div className="item"><span className="mark">+</span><span>End-to-End Project Management</span></div>
              <div className="item"><span className="mark">+</span><span>Safety & Quality Control Protocol</span></div>
              <div className="item"><span className="mark">+</span><span>Subcontractor & Vendor Management</span></div>
              <div className="item"><span className="mark">+</span><span>Real-Time Progress Reporting</span></div>
            </div>
          </div>
          <div className="svc-visual" style={{ backgroundImage: `url(/assets/images/services/field.jpg)` }} />
        </div>
      </section>

      <section ref={sec3Ref} id="svc-03" className="svc-sec">
        <div className="svc-sec-inner">
          <div className="svc-visual" style={{ backgroundImage: `url(/assets/images/services/fab.jpg)` }} />
          <div className="svc-copy">
            <h3>03. INTERIORS & BESPOKE FIT-OUT</h3>
            <h4>COMMAND THE DETAIL.</h4>
            <p>The last one percent defines the entire experience. We deliver high-fidelity finishes, custom fabrication, and a disciplined handover.</p>
            <div className="svc-bullets">
              <div className="item"><span className="mark">+</span><span>High-Fidelity Finish Installation</span></div>
              <div className="item"><span className="mark">+</span><span>Custom Millwork & Fabrication</span></div>
              <div className="item"><span className="mark">+</span><span>Global Material Sourcing</span></div>
              <div className="item"><span className="mark">+</span><span>Final Handover & Commissioning</span></div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}


