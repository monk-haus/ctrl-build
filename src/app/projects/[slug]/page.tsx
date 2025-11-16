import FinalCta from "@/components/FinalCta";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type CS = {
  name: string;
  type: string;
  location: string;
  status: string;
  hero: string;
  spec: { scope: string[]; client: string[]; services: string[] };
  ctrlVisual: string;
  ctrlCopy: string;
  gallery: {
    full: string;
    split1: { img: string; title: string; copy: string };
    split2: { img: string; title: string; copy: string };
    triple: string[];
  };
  prev?: string;
  next?: string;
};

const CASES: Record<string, CS> = {
  "aperture-hub": {
    name: "The Aperture Hub",
    type: "Commercial Office",
    location: "New York, NY",
    status: "Completed 2024",
    hero: "/assets/images/projects/aperture-hub/1.jpg",
    spec: {
      scope: ["80,000 sq ft", "New Construction"],
      client: ["Aperture Holdings, Inc."],
      services: ["Pre-Construction & VDC", "General Contracting"],
    },
    ctrlVisual: "/assets/images/projects/aperture-hub/vdc.jpg",
    ctrlCopy:
      "By modeling the site's logistics in VDC, we identified a critical path conflict and prefabricated MEP assemblies off-site. This saved six weeks and reduced on-site waste by forty percent while improving safety.",
    gallery: {
      full: "/assets/images/projects/aperture-hub/2.jpg",
      split1: {
        img: "/assets/images/projects/aperture-hub/3.jpg",
        title: "THE ATRIUM",
        copy:
          "A light-filled core that leverages a high-performance envelope and engineered daylight control to optimize comfort and energy use.",
      },
      split2: {
        img: "/assets/images/projects/aperture-hub/4.jpg",
        title: "STRUCTURAL EXPRESSION",
        copy:
          "A rational structural grid expressed through joinery and finish reveals, translating digital intention to craft.",
      },
      triple: [
        "/assets/images/projects/aperture-hub/5.jpg",
        "/assets/images/projects/aperture-hub/6.jpg",
        "/assets/images/projects/aperture-hub/2.jpg",
      ],
    },
    prev: "northline-residence",
    next: "signal-yard",
  },
  "northline-residence": {
    name: "Northline Residence",
    type: "Residential",
    location: "Westchester, NY",
    status: "Completed 2023",
    hero: "/assets/images/projects/northline/1.jpg",
    spec: {
      scope: ["12,000 sq ft", "Renovation"],
      client: ["Private Client"],
      services: ["Pre-Construction & VDC", "General Contracting"],
    },
    ctrlVisual: "/assets/images/projects/northline/vdc.jpg",
    ctrlCopy:
      "Through tightly coordinated models, invasive work was sequenced around occupancy, reducing disruption and accelerating turnover.",
    gallery: {
      full: "/assets/images/projects/northline/2.jpg",
      split1: {
        img: "/assets/images/projects/northline/3.jpg",
        title: "LIVING CORE",
        copy:
          "Materials and daylight orchestrated to create serene, high-function spaces.",
      },
      split2: {
        img: "/assets/images/projects/northline/4.jpg",
        title: "DETAILING",
        copy:
          "Clean, durable detailing informed by fabrication constraints established in BIM.",
      },
      triple: [
        "/assets/images/projects/northline/5.jpg",
        "/assets/images/projects/northline/7.jpg",
        "/assets/images/projects/northline/2.jpg",
      ],
    },
    prev: "signal-yard",
    next: "aperture-hub",
  },
  "signal-yard": {
    name: "Signal Yard",
    type: "Industrial",
    location: "Newark, NJ",
    status: "In Progress",
    hero: "/assets/images/projects/signal-yard/1..jpg",
    spec: {
      scope: ["240,000 sq ft", "New Construction"],
      client: ["Signal Logistics"],
      services: ["Pre-Construction & VDC", "General Contracting"],
    },
    ctrlVisual: "/assets/images/projects/signal-yard/vdc.jpg",
    ctrlCopy:
      "Componentized delivery strategies and kitting streamlined site logistics, minimizing congestion and improving throughput.",
    gallery: {
      full: "/assets/images/projects/signal-yard/2.jpg",
      split1: {
        img: "/assets/images/projects/signal-yard/3.jpg",
        title: "FACADE LOGIC",
        copy:
          "A systematized envelope driven by thermal and maintenance requirements.",
      },
      split2: {
        img: "/assets/images/projects/signal-yard/4.jpg",
        title: "MATERIAL ECONOMY",
        copy:
          "Optimized material families reduced waste without sacrificing performance.",
      },
      triple: [
        "/assets/images/projects/signal-yard/5.jpg",
        "/assets/images/projects/signal-yard/6.jpg",
        "/assets/images/projects/signal-yard/2.jpg",
      ],
    },
    prev: "aperture-hub",
    next: "northline-residence",
  },
  "atrium-one": {
    name: "Atrium One",
    type: "Mixed-Use",
    location: "Brooklyn, NY",
    status: "Completed 2022",
    hero: "/assets/images/projects/atrium-one/1.jpg",
    spec: {
      scope: ["65,000 sq ft", "New Construction"],
      client: ["Atrium Development Group"],
      services: ["Pre-Construction & VDC", "General Contracting"],
    },
    ctrlVisual: "/assets/images/projects/atrium-one/vdc.jpg",
    ctrlCopy:
      "Integrated BIM coordination across multiple trades eliminated field conflicts before construction, enabling faster installation and reducing change orders by thirty percent.",
    gallery: {
      full: "/assets/images/projects/atrium-one/2.jpg",
      split1: {
        img: "/assets/images/projects/atrium-one/3.jpg",
        title: "MIXED-USE CORE",
        copy:
          "A vertical integration of retail, office, and residential spaces connected by a central atrium that maximizes natural light and circulation.",
      },
      split2: {
        img: "/assets/images/projects/atrium-one/4.jpg",
        title: "URBAN INTEGRATION",
        copy:
          "Thoughtful material selection and massing respond to the neighborhood context while establishing a distinct architectural identity.",
      },
      triple: [
        "/assets/images/projects/atrium-one/5.jpg",
        "/assets/images/projects/atrium-one/6.jpg",
        "/assets/images/projects/atrium-one/2.jpg",
      ],
    },
    prev: "signal-yard",
    next: "aperture-hub",
  },
  "linea-tower": {
    name: "Linea Tower",
    type: "High-Rise",
    location: "Manhattan, NY",
    status: "Concept",
    hero: "/assets/images/projects/linea-tower/1.jpg",
    spec: {
      scope: ["450,000 sq ft", "New Construction"],
      client: ["Linea Development"],
      services: ["Pre-Construction & VDC", "General Contracting"],
    },
    ctrlVisual: "/assets/images/projects/linea-tower/vdc.jpg",
    ctrlCopy:
      "Advanced parametric modeling and performance simulation optimized the tower's form and systems, achieving superior energy efficiency while maintaining architectural intent.",
    gallery: {
      full: "/assets/images/projects/linea-tower/2.jpg",
      split1: {
        img: "/assets/images/projects/linea-tower/3.jpg",
        title: "VERTICAL EXPRESSION",
        copy:
          "A slender, elegant form that responds to wind loads and solar exposure while maximizing views and natural light.",
      },
      split2: {
        img: "/assets/images/projects/linea-tower/4.jpg",
        title: "SYSTEM INTEGRATION",
        copy:
          "MEP systems and structural elements are seamlessly integrated through early-stage coordination, reducing floor-to-floor height and maximizing usable space.",
      },
      triple: [
        "/assets/images/projects/linea-tower/5.jpg",
        "/assets/images/projects/linea-tower/6.jpg",
        "/assets/images/projects/linea-tower/2.jpg",
      ],
    },
    prev: "atrium-one",
    next: "aperture-hub",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASES[slug];
  
  if (!cs) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: cs.name,
    description: `${cs.name} - ${cs.type} project in ${cs.location}. ${cs.status}. ${cs.ctrlCopy}`,
    openGraph: {
      title: `${cs.name} | CTRL+Build`,
      description: `${cs.type} project in ${cs.location}. ${cs.status}.`,
      images: [
        {
          url: cs.hero,
          width: 1200,
          height: 630,
          alt: cs.name,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASES[slug];
  if (!cs) return notFound();
  const prev = cs.prev ? CASES[cs.prev] : undefined;
  const next = cs.next ? CASES[cs.next] : undefined;

  return (
    <>
      <section className="cs-hero" style={{ backgroundImage: `url(${cs.hero})` }}>
        <div className="cs-hero-ken" style={{ backgroundImage: `url(${cs.hero})` }} />
        <div className="cs-hero-overlay">
          <div className="cs-hero-h1">{cs.name.toUpperCase()}</div>
          <div className="cs-hero-data">
            {cs.type} / {cs.location} / {cs.status}
          </div>
        </div>
        <div className="cs-plus">+</div>
      </section>

      <section className="cs-spec">
        <div className="cs-spec-inner">
          <div className="cs-spec-h2">PROJECT SPECIFICATION</div>
          <div className="cs-grid">
            <div className="cs-grid-item">
              <strong>SCOPE</strong>
              <div>{cs.spec.scope[0]}</div>
              <div>{cs.spec.scope[1]}</div>
            </div>
            <div className="cs-grid-item">
              <strong>CLIENT</strong>
              {cs.spec.client.map((c) => (
                <div key={c}>{c}</div>
              ))}
            </div>
            <div className="cs-grid-item">
              <strong>SERVICES</strong>
              {cs.spec.services.map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
          <div className="cs-challenge">
            <h3>THE CHALLENGE</h3>
            <p>
              Aperture Holdings required a high-performance, LEED-certified workspace on an aggressive timeline, constrained by a complex urban site and loading logistics. The project demanded precise planning to eliminate uncertainty.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-ctrl">
        <div className="cs-ctrl-h2">COMMANDING THE PROCESS</div>
        <div className="cs-ctrl-grid">
          <div className="cs-ctrl-vis" style={{ backgroundImage: `url(${cs.ctrlVisual})` }} />
          <div className="cs-ctrl-copy">
            <h3>FROM DIGITAL TWIN TO REALITY</h3>
            <p>{cs.ctrlCopy}</p>
          </div>
        </div>
      </section>

      <section className="cs-gallery">
        <div className="cs-gallery-inner">
          <div className="cs-g-full" style={{ backgroundImage: `url(${cs.gallery.full})` }} />

          <div className="cs-g-split">
            <div className="cs-g-img" style={{ backgroundImage: `url(${cs.gallery.split1.img})` }} />
            <div className="cs-g-copy">
              <h4>{cs.gallery.split1.title}</h4>
              <p>{cs.gallery.split1.copy}</p>
            </div>
          </div>

          <div className="cs-g-split reverse">
            <div className="cs-g-copy">
              <h4>{cs.gallery.split2.title}</h4>
              <p>{cs.gallery.split2.copy}</p>
            </div>
            <div className="cs-g-img" style={{ backgroundImage: `url(${cs.gallery.split2.img})` }} />
          </div>

          <div className="cs-g-triple">
            {cs.gallery.triple.map((img) => (
              <div key={img} className="img" style={{ backgroundImage: `url(${img})` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="cs-nav">
        <div className="cs-nav-inner">
          {prev && (
            <a href={`/projects/${cs.prev}`} className="cs-nav-block" style={{ backgroundImage: `url(${prev.hero})` }}>
              <div className="cs-nav-text">
                <div className="label">PREVIOUS PROJECT</div>
                <div className="title">{prev.name.toUpperCase()}</div>
              </div>
            </a>
          )}
          {next && (
            <a href={`/projects/${cs.next}`} className="cs-nav-block" style={{ backgroundImage: `url(${next.hero})` }}>
              <div className="cs-nav-text">
                <div className="label">NEXT PROJECT</div>
                <div className="title">{next.name.toUpperCase()}</div>
              </div>
            </a>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}


