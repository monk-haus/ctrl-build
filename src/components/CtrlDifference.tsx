"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CtrlDifference() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      const io = new IntersectionObserver(
        (entries) => {
          try {
            entries.forEach((e) => {
              if (e.isIntersecting) setInView(true);
            });
          } catch (e) {
            console.error('CtrlDifference IntersectionObserver callback error:', e);
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
      console.error('CtrlDifference IntersectionObserver setup error:', e);
    }
  }, []);
  const cls = useMemo(
    () => ["ctrl-diff", inView ? "in" : ""].filter(Boolean).join(" "),
    [inView]
  );

  return (
    <section className={cls}>
      <div className="ctrl-diff-inner" ref={ref}>
        <div className="ctrl-diff-header">THE CTRL DIFFERENCE [05]</div>
        <div className="ctrl-diff-grid">
          <div className="ctrl-diff-card left">
            <div
              className="ctrl-diff-visual"
              style={{ backgroundImage: `url(/assets/images/diff/diagram.jpg)` }}
            />
            <h3 className="ctrl-diff-h3">DATA-DRIVEN PRECISION</h3>
            <p className="ctrl-diff-body">
              We leverage a proprietary digital workflow, from generative design to on-site VDC, to de-risk your project.
              We model every contingency, optimizing for cost, schedule, and quality before we ever break ground.
              This is how we eliminate uncertainty.
            </p>
            <Link href="/process" className="ctrl-diff-cta">[ Learn About Our Process ]</Link>
          </div>
          <div className="ctrl-diff-card right">
            <div
              className="ctrl-diff-visual"
              style={{ backgroundImage: `url(/assets/images/diff/leadership.jpg)` }}
            />
            <h3 className="ctrl-diff-h3">MASTER-BUILT EXECUTION</h3>
            <p className="ctrl-diff-body">
              Technology is only a tool. Our team of veteran engineers, project managers, and master builders provides
              the on-site command and control required to execute complex architectural visions flawlessly.
              We don't just build; we take ownership.
            </p>
            <Link href="/team" className="ctrl-diff-cta">[ Meet The Leadership ]</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


