"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = useMemo(() => ["ctrl-footer", inView ? "in" : ""].join(" "), [inView]);

  return (
    <footer className={cls} ref={ref}>
      <div className="ctrl-footer-inner">
        <div className="ctrl-footer-grid">
          <div className="ctrl-foot-col">
            <div className="ctrl-foot-logo">
              <Image src="/assets/images/logo.png" alt="CTRL+Build" width={160} height={32} />
            </div>
            <div className="ctrl-foot-tag">Precision in Practice.</div>
          </div>
          <div className="ctrl-foot-col">
            <div className="ctrl-foot-head">[PAGES]</div>
            <div className="ctrl-foot-list">
              <Link href="/services" className="ctrl-foot-link">Services</Link>
              <Link href="/portfolio" className="ctrl-foot-link">Portfolio</Link>
              <Link href="/about" className="ctrl-foot-link">About</Link>
              <Link href="/contact" className="ctrl-foot-link">Contact</Link>
            </div>
          </div>
          <div className="ctrl-foot-col">
            <div className="ctrl-foot-head">[HQ]</div>
            <div className="ctrl-foot-list">
              <div className="ctrl-foot-link">2098 Settlers Lane</div>
              <div className="ctrl-foot-link">Manhattan, NY 10016</div>
            </div>
          </div>
          <div className="ctrl-foot-col">
            <div className="ctrl-foot-head">[INFO]</div>
            <div className="ctrl-foot-list">
              <Link href="mailto:contact@ctrl-build.com" className="ctrl-foot-link">contact@ctrl-build.com</Link>
              <Link href="tel:+19177855799" className="ctrl-foot-link">+1 (917) 785-5799</Link>
              <Link href="https://www.linkedin.com" className="ctrl-foot-link">LinkedIn</Link>
              <Link href="/careers" className="ctrl-foot-link">Careers</Link>
            </div>
          </div>
        </div>
        <div className="ctrl-subfooter">
          <div className="ctrl-subleft">
            © 2025 CTRL+Build. All Rights Reserved.
            <span className="ctrl-monk-credit"> Designed and developed by <Link href="https://monk.haus" target="_blank" rel="noopener noreferrer">monk</Link>.</span>
          </div>
          <div className="ctrl-subright">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


