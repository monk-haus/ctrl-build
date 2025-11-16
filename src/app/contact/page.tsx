"use client";

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <h1 className="contact-h1">
            START A<br/>CONVERSATION.
          </h1>
          <p className="contact-body">
            Our team is available to discuss your project's requirements. Use the form for project inquiries, or contact our headquarters directly. For career opportunities, please see our About page.
          </p>
          <div className="contact-block">
            <div className="contact-head">[HQ]</div>
            <div className="contact-lines">
              <div>2098 Settlers Lane</div>
              <div>Manhattan, NY 10016</div>
            </div>
          </div>
          <div className="contact-block">
            <div className="contact-head">[INFO]</div>
            <div className="contact-lines">
              <a href="mailto:contact@ctrl-build.com">contact@ctrl-build.com</a>
              <a href="tel:+19177855799">+1 (917) 785-5799</a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="brief-title">SUBMIT A PROJECT BRIEF</div>
          <form className="brief-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label className="label" htmlFor="name">Full Name *</label>
              <input id="name" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="company">Company Name</label>
              <input id="company" className="input" />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">Email Address *</label>
              <input id="email" type="email" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">Phone Number *</label>
              <input id="phone" type="tel" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="type">Project Type *</label>
              <select id="type" className="select" required>
                <option value="">Select</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Industrial</option>
                <option>Interiors</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label className="label" htmlFor="overview">Project Overview *</label>
              <textarea id="overview" className="textarea" rows={4} required />
            </div>
            <button className="submit">[ SUBMIT BRIEF ]</button>
            <div className="trust">We respect your privacy. A member of our team will respond within one business day.</div>
          </form>
        </div>
      </div>
    </section>
  );
}


