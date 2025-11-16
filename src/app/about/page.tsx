"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function AboutHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e.forEach(x => x.isIntersecting && setInView(true)), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = useMemo(() => ["about-hero", inView ? "in" : ""].join(" "), [inView]);
  return (
    <section className={cls}>
      <div ref={ref} className="about-hero-inner">
        <h1 className="about-hero-h1">
          <span className="about-hero-line">WE ARE</span>
          <span className="about-hero-line">THE CONSTANT.</span>
        </h1>
        <p className="about-hero-body">
          In a field defined by variables, we are the control. CTRL+Build is a collective of engineers, architects, and master builders united by a single mission: to bring digital precision and absolute accountability to the built world.
        </p>
      </div>
    </section>
  );
}

function Leadership() {
  const [open, setOpen] = useState(false);
  return (
    <section className="about-lead">
      <div className="about-lead-header">THE COMMAND TEAM</div>
      <div className="about-lead-grid">
        <div className="lead-photo" style={{ backgroundImage: `url(/assets/images/team/alistair.jpg)` }}>
          <div className="lead-cad">
            <div className="lead-readout">
              <div>NAME: Alistair Vance</div>
              <div>ROLE: Founder & CEO</div>
              <div className="cta" onClick={() => setOpen(true)}>[ VIEW FULL CREDENTIALS ]</div>
            </div>
          </div>
        </div>
        <div className="lead-copy">
          <h3>ALISTAIR VANCE</h3>
          <div className="role">Founder & Chief Executive Officer</div>
          <p>
            Alistair founded CTRL+Build to unite high-fidelity digital modeling with master-built execution. His career spans complex civic, cultural, and commercial programs.
          </p>
          <p>
            He believes every detail can be commanded—first in data, then on site—so projects deliver precisely as envisioned.
          </p>
        </div>
      </div>

      <div className={`about-modal ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="about-modal-card" onClick={(e) => e.stopPropagation()}>
          <h3 style={{ marginBottom: 8 }}>Alistair Vance — Credentials</h3>
          <p>20+ years leading complex projects. Publications in computational construction and VDC management.</p>
          <ul>
            <li>Key Projects: Aperture Hub, Signal Yard, Linea Tower</li>
            <li>Registrations: PE, PMP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="about-philo">
      <div className="about-philo-header">PRECISION. PROCESS. PERFORMANCE.</div>
      <div className="about-philo-grid">
        <div className="philo-card">
          <h4>VIRTUAL COMMAND</h4>
          <p>We model every eventuality. Our process begins in the digital realm, de-risking projects before a single shovel breaks ground.</p>
        </div>
        <div className="philo-card">
          <h4>LOGISTICAL CONTROL</h4>
          <p>Data-driven logistics and procurement protocols ensure the right materials and teams arrive at precisely the right moment.</p>
        </div>
        <div className="philo-card">
          <h4>MASTER-BUILT EXECUTION</h4>
          <p>On-site teams translate digital intent into physical reality with disciplined, craftsman-level execution.</p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: "Dr. Elena Rostova", role: "Head of VDC & Digital Twinning", img: "/assets/images/team/elena.jpg", linkedin: "#" },
    { name: "Marcus Thorne", role: "Director of Project Operations", img: "/assets/images/team/marcus.jpg", linkedin: "#" },
    { name: "Soren Kjaer", role: "Design Director", img: "/assets/images/team/soren.jpg", linkedin: "#" },
    { name: "Jillian Cole", role: "Head of Bespoke Interiors", img: "/assets/images/team/jillian.jpg", linkedin: "#" }
  ];
  return (
    <section className="about-team">
      <div className="about-team-header">OUR CORE OPERATORS</div>
      <div className="about-team-grid">
        {members.map((m) => (
          <div key={m.name} className="team-card">
            <div className="team-img" style={{ backgroundImage: `url(${m.img})` }} />
            <div className="team-caption">
              <div className="team-name">{m.name.toUpperCase()}</div>
              <div className="team-role">{m.role}</div>
              <Link href={m.linkedin}>LinkedIn</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DualCta() {
  return (
    <section className="about-dualcta">
      <div className="dualcta-inner">
        <div className="dualcta-block dualcta-divider">
          <h3>JOIN THE TEAM</h3>
          <p>We are seeking problem-solvers who believe in a better way to build. Explore a career at the intersection of technology and craft.</p>
          <Link href="/careers">[ VIEW OPEN ROLES ]</Link>
        </div>
        <div className="dualcta-block">
          <h3>HAVE A PROJECT?</h3>
          <p>Let&apos;s discuss how our process can deliver your vision with unparalleled precision and quality.</p>
          <Link href="/contact" className="dualcta-button">[ START YOUR PROJECT BRIEF ]</Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Leadership />
      <Philosophy />
      <Team />
      <DualCta />
    </>
  );
}


