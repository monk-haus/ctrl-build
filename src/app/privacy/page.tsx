"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const sections = [
  { id: "intro", title: "INTRODUCTION", number: "01" },
  { id: "collect", title: "INFORMATION WE COLLECT", number: "02" },
  { id: "use", title: "HOW WE USE YOUR INFORMATION", number: "03" },
  { id: "share", title: "HOW WE SHARE YOUR INFORMATION", number: "04" },
  { id: "security", title: "DATA SECURITY", number: "05" },
  { id: "rights", title: "YOUR DATA RIGHTS", number: "06" },
  { id: "changes", title: "CHANGES TO THIS POLICY", number: "07" },
  { id: "contact", title: "CONTACT US", number: "08" },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        });
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="privacy">
      <div className="privacy-inner">
        <div className="privacy-header">
          <h1 className="privacy-h1">PRIVACY POLICY</h1>
          <p className="privacy-sub">
            Last Updated: November 16, 2025. Your trust is our foundation. This policy details how we handle and protect your data.
          </p>
          <div className="privacy-separator" />
        </div>

        <div className="privacy-content">
          <nav className="privacy-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`privacy-nav-link ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                [ {section.number} ]
              </button>
            ))}
          </nav>

          <div className="privacy-main">
            <div
              id="intro"
              ref={(el) => { sectionRefs.current.intro = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 01 ] INTRODUCTION</h3>
              <p className="privacy-body">
                CTRL+Build ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website, you consent to the data practices described in this policy.
              </p>
            </div>

            <div
              id="collect"
              ref={(el) => { sectionRefs.current.collect = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 02 ] INFORMATION WE COLLECT</h3>
              
              <h5 className="privacy-h5">Information You Provide to Us</h5>
              <p className="privacy-body">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="privacy-list">
                <li>Submit a project brief or contact form on our website</li>
                <li>Communicate with us via email or phone</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Apply for a position through our careers page</li>
              </ul>
              <p className="privacy-body">
                This information may include your name, email address, phone number, company name, project details, and any other information you choose to provide.
              </p>

              <h5 className="privacy-h5">Information We Collect Automatically</h5>
              <p className="privacy-body">
                When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
              </p>
              <ul className="privacy-list">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information and operating system</li>
              </ul>
              <p className="privacy-body">
                We use cookies and similar tracking technologies to collect this information. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div
              id="use"
              ref={(el) => { sectionRefs.current.use = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 03 ] HOW WE USE YOUR INFORMATION</h3>
              <p className="privacy-body">
                We use the information we collect for the following purposes:
              </p>
              <ul className="privacy-list">
                <li>To provide and maintain our services, including responding to your inquiries and project briefs</li>
                <li>To communicate with you about your projects, our services, and company updates</li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To send you marketing communications (with your consent, where required)</li>
              </ul>
            </div>

            <div
              id="share"
              ref={(el) => { sectionRefs.current.share = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 04 ] HOW WE SHARE YOUR INFORMATION</h3>
              <p className="privacy-body">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="privacy-list">
                <li>With service providers who assist us in operating our website and conducting our business (e.g., hosting, analytics, email services)</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of our clients and partners</li>
                <li>In connection with a business transfer, such as a merger or acquisition</li>
              </ul>
              <p className="privacy-body">
                All third-party service providers are contractually obligated to maintain the confidentiality and security of your information.
              </p>
            </div>

            <div
              id="security"
              ref={(el) => { sectionRefs.current.security = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 05 ] DATA SECURITY</h3>
              <p className="privacy-body">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div
              id="rights"
              ref={(el) => { sectionRefs.current.rights = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 06 ] YOUR DATA RIGHTS</h3>
              <p className="privacy-body">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="privacy-list">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to or restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p className="privacy-body">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            <div
              id="changes"
              ref={(el) => { sectionRefs.current.changes = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 07 ] CHANGES TO THIS POLICY</h3>
              <p className="privacy-body">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div
              id="contact"
              ref={(el) => { sectionRefs.current.contact = el; }}
              className="privacy-section"
            >
              <h3 className="privacy-h3">[ 08 ] CONTACT US</h3>
              <p className="privacy-body">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at{" "}
                <a href="mailto:contact@ctrl-build.com" className="privacy-link">contact@ctrl-build.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

