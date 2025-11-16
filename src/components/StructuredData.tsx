export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CTRL+Build",
    url: "https://ctrl-build.com",
    logo: "https://ctrl-build.com/assets/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-917-785-5799",
      contactType: "Customer Service",
      email: "contact@ctrl-build.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2098 Settlers Lane",
      addressLocality: "Manhattan",
      addressRegion: "NY",
      postalCode: "10016",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/ctrl-build",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CTRL+Build",
    url: "https://ctrl-build.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

