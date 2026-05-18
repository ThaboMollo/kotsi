import { site } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    image: `${site.url}/images/og-image.jpg`,
    founder: { "@type": "Person", name: site.founder },
    telephone: "+27613693823",
    address: { "@type": "PostalAddress", addressCountry: "ZA" },
    areaServed: [
      { "@type": "City", name: "Johannesburg" },
      { "@type": "City", name: "Pretoria" },
      { "@type": "AdministrativeArea", name: "Gauteng" },
    ],
    sameAs: [site.social.facebook, site.social.instagram],
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}
