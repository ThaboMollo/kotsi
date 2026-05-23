import { site } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    image: `${site.url}/images/og-image.jpg`,
    url: site.url,
    founder: { "@type": "Person", name: site.founder },
    telephone: "+27613693823",
    address: {
      "@type": "PostalAddress",
      addressRegion: site.region,
      addressCountry: "ZA",
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": name === site.region ? "AdministrativeArea" : "City",
      name,
    })),
    sameAs: [site.social.facebook, site.social.instagram],
    priceRange: "$$",
    makesOffer: [
      "Wedding photography",
      "Graduation photography",
      "Bridal shower photography",
      "Birthday photoshoots",
      "Tombstone unveiling photography",
      "Event photography",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    inLanguage: "en-ZA",
    publisher: { "@id": `${site.url}/#business` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/og-image.jpg`,
    sameAs: [site.social.facebook, site.social.instagram],
  };
}
