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
  const isDesktopRef = useRef<boolean>(false);
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Preload and track image loading with timeout - only on desktop
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    
    // Check if mobile first, before any state updates
    const isMobile = window.innerWidth < 1200;
    if (isMobile) {
      // On mobile, don't preload - let CSS handle it naturally
      // Don't set imageLoaded here - let it load naturally via CSS
      // This prevents any JavaScript image loading that could cause crashes
      return;
    }

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
      setImageLoaded(true); // Set to true anyway to prevent blocking
    };
    
    // Set timeout to prevent indefinite waiting
    timeoutId = setTimeout(() => {
      if (!loaded && !cancelled) {
        console.warn('Hero photo loading timeout');
        handleError();
      }
    }, 5000); // 5 second timeout
    
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
      loaded = true; // Prevent callbacks after cleanup
      clearTimeout(timeoutId);
      if (img) {
        img.onload = null;
        img.onerror = null;
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial value on mount - use ref only, no state updates
    isDesktopRef.current = window.innerWidth >= 1200;
    mountedRef.current = true;
    
    // Don't add resize listener on mobile to prevent any state updates
    if (window.innerWidth < 1200) {
      return;
    }

    let rafId: number | null = null;
    let ticking = false;
    let resizeTimeout: NodeJS.Timeout | null = null;
    
    const update = () => {
      if (ticking) return;
      ticking = true;
      
      // Debounce resize to prevent excessive updates
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        rafId = requestAnimationFrame(() => {
          // Only update ref, no state updates
          isDesktopRef.current = window.innerWidth >= 1200;
          ticking = false;
        });
      }, 150);
    };
    
    window.addEventListener("resize", update, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Set initial wire position once on mount
  useEffect(() => {
    const wire = wireRef.current;
    if (wire) {
      try {
        wire.style.transform = `translate3d(3px, -50px, 0)`;
      } catch (e) {
        // Ignore errors
      }
    }
  }, []);

  // Effect for desktop mouse handlers only
  useEffect(() => {
    // Only run on desktop and when image is loaded
    if (!mountedRef.current || !isDesktopRef.current || !imageLoaded) {
      return;
    }
    
    const el = containerRef.current;
    const photo = photoRef.current;
    const wire = wireRef.current;
    if (!el || !photo || !wire) return;
    
    const baseX = 3;
    const baseY = -50;
    
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
  }, [imageLoaded]);

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
          style={{ 
            backgroundImage: imageError ? 'none' : `url(/assets/images/hero/photo.jpg)`,
            opacity: imageError ? 0 : 1
          }}
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


