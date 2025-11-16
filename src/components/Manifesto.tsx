"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function Manifesto() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      const io = new IntersectionObserver(
        entries => {
          try {
            entries.forEach(e => {
              if (e.isIntersecting) setInView(true);
            });
          } catch (e) {
            console.error('Manifesto IntersectionObserver callback error:', e);
          }
        },
        { threshold: 0.2 }
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
      console.error('Manifesto IntersectionObserver setup error:', e);
    }
  }, []);

  const cls = useMemo(
    () => ["ctrl-manifesto", inView ? "in" : ""].filter(Boolean).join(" "),
    [inView]
  );

  return (
    <section className={cls} ref={ref}>
      <div className="ctrl-manifesto-inner">
        <h2 className="ctrl-manifesto-h2">CONTROL IS THE ULTIMATE CRAFT.</h2>
        <div className="ctrl-manifesto-body">
          <p>We believe building is a practice of precision. In a field defined by variables, we are the constant.</p>
          <p>CTRL+Build was founded on a single premise: that modern craftsmanship is not just about material, but about data. We unite generative design, virtual construction, and advanced logistics with decades of on-site mastery.</p>
          <p>We don't just manage projects; we command every detail from the digital twin to the final fixture. This is how we eliminate uncertainty and deliver structures of unparalleled quality and intent.</p>
        </div>
      </div>
    </section>
  );
}


