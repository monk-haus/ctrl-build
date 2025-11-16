"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const sections = [
  { id: "acceptance", title: "ACCEPTANCE OF TERMS", number: "01" },
  { id: "use", title: "USE OF THE WEBSITE", number: "02" },
  { id: "property", title: "INTELLECTUAL PROPERTY", number: "03" },
  { id: "content", title: "USER-SUBMITTED CONTENT", number: "04" },
  { id: "disclaimer", title: "DISCLAIMER OF WARRANTIES", number: "05" },
  { id: "liability", title: "LIMITATION OF LIABILITY", number: "06" },
  { id: "law", title: "GOVERNING LAW", number: "07" },
  { id: "changes", title: "CHANGES TO THIS AGREEMENT", number: "08" },
  { id: "contact", title: "CONTACT INFORMATION", number: "09" },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
      setMobileNavOpen(false);
    }
  };

  return (
    <section className="terms">
      <div className="terms-inner">
        <div className="terms-header">
          <h1 className="terms-h1">TERMS OF SERVICE</h1>
          <p className="terms-sub">
            Last Updated: November 16, 2025. This agreement governs your use of the CTRL+Build website.
          </p>
          <div className="terms-separator" />
        </div>

        <div className="terms-mobile-nav">
          <button
            className="terms-mobile-nav-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            Jump to Section... {mobileNavOpen ? "▲" : "▼"}
          </button>
          {mobileNavOpen && (
            <div className="terms-mobile-nav-menu">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`terms-mobile-nav-link ${activeSection === section.id ? "active" : ""}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  [ {section.number} ] {section.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="terms-content">
          <nav className="terms-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`terms-nav-link ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                [ {section.number} ] {section.title}
              </button>
            ))}
          </nav>

          <div className="terms-main">
            <div
              id="acceptance"
              ref={(el) => { sectionRefs.current.acceptance = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 01 ] ACCEPTANCE OF TERMS</h3>
              <p className="terms-body">
                By accessing and using the CTRL+Build website (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="terms-body">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and CTRL+Build ("we," "our," or "us") regarding your use of our Website and services. Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </div>

            <div
              id="use"
              ref={(el) => { sectionRefs.current.use = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 02 ] USE OF THE WEBSITE</h3>
              <p className="terms-body">
                You agree to use this Website for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Website.
              </p>
              <p className="terms-body">
                You agree not to:
              </p>
              <ol className="terms-list">
                <li>Use the Website in any manner that could damage, disable, overburden, or impair our servers or networks</li>
                <li>Attempt to gain unauthorized access to any portion of the Website or any other accounts, computer systems, or networks connected to the Website</li>
                <li>Use any robot, spider, or other automatic device to monitor or copy any content from the Website without our prior written consent</li>
                <li>Interfere with or disrupt the Website or servers or networks connected to the Website</li>
              </ol>
            </div>

            <div
              id="property"
              ref={(el) => { sectionRefs.current.property = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 03 ] INTELLECTUAL PROPERTY</h3>
              <p className="terms-body">
                All content on this Website, including but not limited to the CTRL+Build logo, text, graphics, logos, images, photographs, audio clips, digital downloads, data compilations, and software, is the exclusive property of CTRL+Build or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <h5 className="terms-h5">Intellectual Property Rights</h5>
              <p className="terms-body">
                The CTRL+Build name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of CTRL+Build or its affiliates or licensors. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.
              </p>
              <p className="terms-body">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without our prior written consent, except as follows:
              </p>
              <ul className="terms-list">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
                <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use</li>
              </ul>
            </div>

            <div
              id="content"
              ref={(el) => { sectionRefs.current.content = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 04 ] USER-SUBMITTED CONTENT</h3>
              <p className="terms-body">
                When you submit information through our Website, including but not limited to project briefs, contact forms, or other communications, you grant CTRL+Build a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              <p className="terms-body">
                You represent and warrant that:
              </p>
              <ol className="terms-list">
                <li>You own or have the necessary licenses, rights, consents, and permissions to use and authorize CTRL+Build to use all patent, trademark, trade secret, copyright, or other proprietary rights in and to any and all user content</li>
                <li>Your content does not violate any third-party rights, including privacy, publicity, intellectual property, or other proprietary rights</li>
                <li>Your content is accurate and not misleading</li>
              </ol>
            </div>

            <div
              id="disclaimer"
              ref={(el) => { sectionRefs.current.disclaimer = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 05 ] DISCLAIMER OF WARRANTIES</h3>
              <p className="terms-body">
                THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CTRL+BUILD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND COURSE OF PERFORMANCE.
              </p>
              <p className="terms-body">
                CTRL+Build does not warrant that the Website will be available at any particular time or location, that any defects or errors will be corrected, or that the content is free of viruses or other harmful components. Your use of the Website is solely at your own risk.
              </p>
            </div>

            <div
              id="liability"
              ref={(el) => { sectionRefs.current.liability = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 06 ] LIMITATION OF LIABILITY</h3>
              <p className="terms-body">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CTRL+BUILD, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE WEBSITE.
              </p>
              <p className="terms-body">
                In no event shall CTRL+Build's total liability to you for all damages, losses, or causes of action exceed the amount you paid to CTRL+Build, if any, for accessing the Website, or one hundred dollars ($100), whichever is greater.
              </p>
            </div>

            <div
              id="law"
              ref={(el) => { sectionRefs.current.law = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 07 ] GOVERNING LAW</h3>
              <p className="terms-body">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in New York County, New York, for the resolution of any disputes arising out of or relating to these Terms or your use of the Website.
              </p>
            </div>

            <div
              id="changes"
              ref={(el) => { sectionRefs.current.changes = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 08 ] CHANGES TO THIS AGREEMENT</h3>
              <p className="terms-body">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="terms-body">
                By continuing to access or use our Website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Website.
              </p>
            </div>

            <div
              id="contact"
              ref={(el) => { sectionRefs.current.contact = el; }}
              className="terms-section"
            >
              <h3 className="terms-h3">[ 09 ] CONTACT INFORMATION</h3>
              <p className="terms-body">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:contact@ctrl-build.com" className="terms-link">contact@ctrl-build.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

