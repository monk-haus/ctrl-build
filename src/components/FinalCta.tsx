"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function FinalCta() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      const io = new IntersectionObserver(
        (entries) => {
          try {
            entries.forEach((e) => e.isIntersecting && setInView(true));
          } catch (e) {
            console.error('FinalCta IntersectionObserver callback error:', e);
          }
        },
        { threshold: 0.3 }
      );
      io.observe(el);
      return () => {
        try {
          io.disconnect();
        } catch (e) {
          // Ignore cleanup errors
        }
      };
    } catch (e) {
      console.error('FinalCta IntersectionObserver setup error:', e);
    }
  }, []);

  const cls = useMemo(() => ["ctrl-final", inView ? "in" : ""].join(" "), [inView]);

  return (
    <section className={cls}>
      <div className="ctrl-final-inner" ref={ref}>
        <h1 className="ctrl-final-h1">
          <span className="ctrl-final-line">LET'S BUILD</span>
          <span className="ctrl-final-line">SOMETHING</span>
          <span className="ctrl-final-line">REMARKABLE.</span>
        </h1>
        <p className="ctrl-final-sub">
          Begin the brief for your next project, or schedule a consultation with our team.
        </p>
        <Link href="/contact" className="ctrl-final-cta">[ START A PROJECT ]</Link>
      </div>
    </section>
  );
}


