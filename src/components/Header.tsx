"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type LinkItem = {
  label: string;
  href: string;
  bg?: string;
};

const navItems: LinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverBg, setHoverBg] = useState<string | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        setIsSticky(window.scrollY > 100);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHoverBg(undefined);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) setHoverBg(undefined);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const headerClass = useMemo(
    () => ["ctrl-header", isSticky ? "sticky" : ""].filter(Boolean).join(" "),
    [isSticky]
  );

  const menuClass = useMemo(
    () => ["ctrl-menu", menuOpen ? "open" : ""].filter(Boolean).join(" "),
    [menuOpen]
  );

  const overlayClass = useMemo(
    () => ["ctrl-overlay", menuOpen ? "open" : ""].filter(Boolean).join(" "),
    [menuOpen]
  );

  return (
    <>
      <header className={headerClass}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link href="/" className="ctrl-logo">
            <Image src="/assets/images/logo.png" alt="CTRL+Build" width={140} height={28} priority />
          </Link>
        </div>
        <nav className="ctrl-nav">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/contact" className="ctrl-cta">[ START A PROJECT ]</Link>
          <button
            aria-label="Menu"
            className={menuClass}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="ctrl-menu-line" />
            <span className="ctrl-menu-line" />
            <span className="ctrl-menu-line" />
          </button>
        </div>
      </header>
      <div className={overlayClass}>
        <div className="ctrl-overlay-inner">
          <button
            aria-label="Close menu"
            className={`ctrl-menu open ctrl-overlay-close`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="ctrl-menu-line" />
            <span className="ctrl-menu-line" />
            <span className="ctrl-menu-line" />
          </button>
          <div
            className="ctrl-overlay-bg"
            style={{
              backgroundImage: hoverBg ? `url(${hoverBg})` : "none",
              opacity: hoverBg ? 0.2 : 0
            }}
          />
          <div className="ctrl-overlay-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="ctrl-overlay-link"
                onMouseEnter={() => setHoverBg(item.bg)}
                onMouseLeave={() => setHoverBg(undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="ctrl-overlay-footer">
            <Link href="/contact" className="ctrl-cta">[ START A PROJECT ]</Link>
            <Link href="mailto:contact@ctrl-build.com">contact@ctrl-build.com</Link>
            <Link href="tel:+19177855799">+1 (917) 785-5799</Link>
          </div>
        </div>
      </div>
    </>
  );
}


