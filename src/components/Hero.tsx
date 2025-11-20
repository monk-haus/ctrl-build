"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const wireRef = useRef<HTMLDivElement | null>(null);

  // Stable desktop detection using matchMedia - does NOT flicker on mobile Safari
  // This is computed once and never changes, preventing effect races
  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia("(min-width: 1200px)").matches;
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const heroImage = isMobile
    ? "/assets/images/hero/photo-mobile.jpg"
    : "/assets/images/hero/photo.jpg";

  // Start animation after hydration completes
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setEntered(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Image preload - only desktop
  useEffect(() => {
    if (!isDesktop) {
      setImageLoaded(true);
      return;
    }
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let loaded = false;
    let cancelled = false;
    
    const img = new Image();
    
    const handleLoad = () => {
      if (loaded || cancelled) return;
      loaded = true;
      clearTimeout(timeoutId);
      setImageLoaded(true);
    };
    
    const handleError = () => {
      if (loaded || cancelled) return;
      loaded = true;
      clearTimeout(timeoutId);
      console.error('Hero photo failed to load');
      setImageError(true);
      setImageLoaded(true);
    };
    
    timeoutId = setTimeout(() => {
      if (!loaded && !cancelled) {
        console.warn('Hero photo loading timeout');
        handleError();
      }
    }, 5000);
    
    try {
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = '/assets/images/hero/photo.jpg';
    } catch (e) {
      console.error('Error setting up image preload:', e);
      handleError();
    }
    
    return () => {
      cancelled = true;
      loaded = true;
      clearTimeout(timeoutId);
      if (img) {
        img.onload = null;
        img.onerror = null;
      }
    };
  }, [isDesktop]);

  // Desktop mouse parallax - ONLY runs on desktop, ONLY when image loaded
  useEffect(() => {
    if (!isDesktop) return;
    if (!imageLoaded) return;
    
    const el = containerRef.current;
    const photo = photoRef.current;
    const wire = wireRef.current;
    if (!el || !photo || !wire) return;
    
    const baseX = 3;
    const baseY = -3;
    
    let rafId: number | null = null;
    let ticking = false;

    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        try {
          if (!el || !photo || !wire) {
            ticking = false;
            return;
          }
          const rect = el.getBoundingClientRect();
          if (!rect.width || !rect.height) {
            ticking = false;
            return;
          }
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
        } catch (e) {
          console.error('Hero mouse move error:', e);
        } finally {
          ticking = false;
        }
      });
    };
    
    const onLeave = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      ticking = false;
      try {
        if (photo) photo.style.transform = `translate3d(0, 0, 0)`;
        if (wire) wire.style.transform = `translate3d(${baseX}px, ${baseY}px, 0)`;
      } catch (e) {
        console.error('Hero mouse leave error:', e);
      }
    };
    
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [isDesktop, imageLoaded]);

  // Mobile/tablet scroll parallax - DISABLED to prevent Safari crashes
  useEffect(() => {
    if (isDesktop) return;
    return;
  }, [isDesktop]);

  const containerClass = useMemo(
    () => ["ctrl-hero", entered ? "in" : ""].filter(Boolean).join(" "),
    [entered]
  );

  if (isMobile) {
    return (
      <section className="ctrl-hero in">
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
        <div className="ctrl-hero-right ctrl-hero-visual" ref={containerRef}>
          <div
          ref={photoRef}
          className="ctrl-hero-photo"
          style={{
            backgroundImage: imageError ? "none" : `url(${heroImage})`,
            opacity: imageError ? 0 : 1
          }}
        />
          <div
            ref={wireRef}
            className="ctrl-hero-wire"
            style={{
              backgroundImage: "url(/assets/images/hero/blueprint.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="ctrl-scroll-indicator">+</div>
      </section>
    );
  }

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
          style={{ 
            backgroundImage: imageError ? 'none' : `url(${heroImage})`,
            opacity: imageError ? 0 : 1,
            transform: isMobile ? "none" : undefined
          }}
        />
        <div
          ref={wireRef}
          className="ctrl-hero-wire"
          style={{ 
            backgroundImage: `url(/assets/images/hero/blueprint.png)`, 
            backgroundSize: "contain", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center",
            transform: isMobile ? "none" : "translate3d(3px, -3px, 0)"
          }}
        />
      </div>
      <div className="ctrl-scroll-indicator">+</div>
    </section>
  );
}
