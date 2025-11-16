"use client";

import FinalCta from "@/components/FinalCta";
import { useEffect, useMemo, useRef, useState } from "react";

type Role = {
  id: string;
  title: string;
  department: string;
  location: string;
  brief: string;
  responsibilities: string[];
  qualifications: string[];
  filter: "VDC" | "PROJECT MANAGEMENT" | "FIELD OPERATIONS";
};

const roles: Role[] = [
  {
    id: "1",
    title: "SENIOR VDC ENGINEER",
    department: "VDC & Digital Twinning",
    location: "New York, NY / Hybrid",
    brief: "Lead the development and implementation of virtual design and construction workflows, creating digital twins that drive project success from concept to completion.",
    responsibilities: [
      "Develop and maintain comprehensive BIM models across all project phases",
      "Coordinate multi-trade clash detection and resolution",
      "Create 4D/5D simulations for scheduling and cost analysis",
      "Mentor junior VDC team members and establish best practices",
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Architecture, or related field",
      "5+ years of VDC/BIM experience in construction",
      "Proficiency in Revit, Navisworks, and related software",
      "Strong problem-solving and communication skills",
    ],
    filter: "VDC",
  },
  {
    id: "2",
    title: "PROJECT MANAGER",
    department: "Project Management",
    location: "New York, NY / On-Site",
    brief: "Oversee complex construction projects from pre-construction through completion, ensuring on-time, on-budget delivery while maintaining the highest quality standards.",
    responsibilities: [
      "Manage project schedules, budgets, and resources",
      "Coordinate with clients, architects, and subcontractors",
      "Lead project meetings and provide regular status updates",
      "Ensure compliance with safety and quality standards",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management or related field",
      "7+ years of project management experience",
      "PMP or equivalent certification preferred",
      "Excellent leadership and negotiation skills",
    ],
    filter: "PROJECT MANAGEMENT",
  },
  {
    id: "3",
    title: "FIELD OPERATIONS COORDINATOR",
    department: "Field Operations",
    location: "New York, NY / On-Site",
    brief: "Bridge the gap between digital planning and physical execution, ensuring field teams have the information and resources needed for flawless implementation.",
    responsibilities: [
      "Coordinate daily field operations and logistics",
      "Translate digital models into actionable field instructions",
      "Monitor progress and quality on-site",
      "Facilitate communication between office and field teams",
    ],
    qualifications: [
      "Associate's degree or equivalent field experience",
      "3+ years of construction field experience",
      "Familiarity with construction technology and mobile tools",
      "Strong organizational and communication abilities",
    ],
    filter: "FIELD OPERATIONS",
  },
  {
    id: "4",
    title: "VDC COORDINATOR",
    department: "VDC & Digital Twinning",
    location: "New York, NY / Hybrid",
    brief: "Support the VDC team in creating and maintaining digital models, performing clash detection, and ensuring model accuracy throughout the project lifecycle.",
    responsibilities: [
      "Assist in BIM model development and maintenance",
      "Perform clash detection and generate reports",
      "Create construction documentation from models",
      "Support field teams with model navigation and queries",
    ],
    qualifications: [
      "Associate's degree in Engineering Technology or related field",
      "2+ years of BIM/VDC experience",
      "Proficiency in Revit and Navisworks",
      "Detail-oriented with strong technical skills",
    ],
    filter: "VDC",
  },
];

const filters = ["ALL", "VDC", "PROJECT MANAGEMENT", "FIELD OPERATIONS"] as const;
type Filter = typeof filters[number];

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const rolesRef = useRef<HTMLDivElement | null>(null);
  const [inViewHero, setInViewHero] = useState(false);
  const [filter, setFilter] = useState<Filter>("ALL");
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e.forEach(x => x.isIntersecting && setInViewHero(true)), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const filteredRoles = useMemo(() => {
    if (filter === "ALL") return roles;
    return roles.filter((r) => r.filter === filter);
  }, [filter]);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroCls = useMemo(() => ["careers-hero", inViewHero ? "in" : ""].join(" "), [inViewHero]);

  return (
    <>
      <section ref={heroRef} className={heroCls}>
        <div className="careers-hero-inner">
          <h1 className="careers-hero-h1">
            <span className="careers-hero-line">CONTROL</span>
            <span className="careers-hero-line">YOUR</span>
            <span className="careers-hero-line">FUTURE.</span>
          </h1>
          <p className="careers-hero-body">
            We are not just building structures; we are building a new methodology. We seek the precise, the passionate, and the pioneering. Join us in defining the future of construction.
          </p>
          <button onClick={scrollToRoles} className="careers-hero-cta">[ BROWSE OPEN ROLES ]</button>
        </div>
      </section>

      <section className="careers-culture">
        <div className="careers-culture-inner">
          <h2 className="careers-culture-h2">OUR CORE CODE</h2>
          <div className="careers-culture-grid">
            <div className="careers-culture-col">
              <h3 className="careers-culture-num">[ 01 ] PRECISION IN ALL</h3>
              <p className="careers-culture-body">
                From digital models to client handovers, we value meticulous attention to detail. We measure twice, build once. We believe excellence is a habit.
              </p>
            </div>
            <div className="careers-culture-col">
              <h3 className="careers-culture-num">[ 02 ] RADICAL OWNERSHIP</h3>
              <p className="careers-culture-body">
                Every team member is an owner. We take full accountability for our work, our team's success, and our project's outcome. No excuses, only solutions.
              </p>
            </div>
            <div className="careers-culture-col">
              <h3 className="careers-culture-num">[ 03 ] DIGITAL MASTERY</h3>
              <p className="careers-culture-body">
                Technology is our primary lever. We are perpetually learning, innovating, and integrating new tools to lead the industry. We are students of our craft.
              </p>
            </div>
          </div>
          <div className="careers-culture-visual">
            <div className="careers-culture-img" style={{ backgroundImage: "url(/assets/images/services/vdc.jpg)" }} />
            <div className="careers-culture-diagram" style={{ backgroundImage: "url(/assets/images/services/vdc.jpg)" }} />
          </div>
        </div>
      </section>

      <section className="careers-toolkit">
        <div className="careers-toolkit-inner">
          <h2 className="careers-toolkit-h2">THE CTRL TOOLKIT</h2>
          <div className="careers-toolkit-grid">
            <div className="careers-toolkit-card">
              <h4 className="careers-toolkit-title">HEALTH & WELLNESS</h4>
              <ul className="careers-toolkit-list">
                <li>+ Comprehensive Medical, Dental, & Vision</li>
              </ul>
            </div>
            <div className="careers-toolkit-card">
              <h4 className="careers-toolkit-title">FUTURE & FINANCE</h4>
              <ul className="careers-toolkit-list">
                <li>+ 401(k) Matching Program</li>
                <li>+ Performance-Based Bonuses</li>
              </ul>
            </div>
            <div className="careers-toolkit-card">
              <h4 className="careers-toolkit-title">PROFESSIONAL GROWTH</h4>
              <ul className="careers-toolkit-list">
                <li>+ Paid Certifications & Continuing Ed</li>
                <li>+ Leadership & Mentorship Tracks</li>
              </ul>
            </div>
            <div className="careers-toolkit-card">
              <h4 className="careers-toolkit-title">MODERN WORK</h4>
              <ul className="careers-toolkit-list">
                <li>+ Flexible & Hybrid Schedules</li>
                <li>+ High-End Tech & Equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={rolesRef} className="careers-roles">
        <div className="careers-roles-inner">
          <div className="careers-roles-header">
            <h2 className="careers-roles-h2">OPEN ROLES [{roles.length.toString().padStart(2, "0")}]</h2>
            <div className="careers-roles-filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`careers-filter ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  [ {f} ]
                </button>
              ))}
            </div>
          </div>
          <div className="careers-roles-list">
            {filteredRoles.map((role) => (
              <div key={role.id} className={`careers-role-row ${expandedRole === role.id ? "expanded" : ""}`}>
                <div className="careers-role-header" onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}>
                  <div className="careers-role-title">{role.title}</div>
                  <div className="careers-role-dept">{role.department}</div>
                  <div className="careers-role-loc">{role.location}</div>
                </div>
                {expandedRole === role.id && (
                  <div className="careers-role-brief">
                    <div className="careers-role-section">
                      <h4 className="careers-role-h4">THE BRIEF</h4>
                      <p className="careers-role-p">{role.brief}</p>
                    </div>
                    <div className="careers-role-section">
                      <h4 className="careers-role-h4">CORE RESPONSIBILITIES</h4>
                      <ul className="careers-role-ul">
                        {role.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="careers-role-section">
                      <h4 className="careers-role-h4">QUALIFICATIONS</h4>
                      <ul className="careers-role-ul">
                        {role.qualifications.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" className="careers-role-cta">[ APPLY FOR THIS ROLE ]</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="careers-cta-inner">
          <h3 className="careers-cta-h3">DON'T SEE YOUR ROLE?</h3>
          <p className="careers-cta-body">
            We are always looking for exceptional, high-character individuals to join our team. If you believe in our mission, send us your brief.
          </p>
          <a href="/contact" className="careers-cta-button">[ SUBMIT A GENERAL APPLICATION ]</a>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

