import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SeoIntro } from "@/components/sections/SeoIntro";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactBand } from "@/components/sections/ContactBand";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(),
      organizationSchema(),
      websiteSchema(),
    ].map(({ "@context": _context, ...schema }) => schema),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Manifesto />
      <SeoIntro />
      <ServicesStrip />
      <FeaturedPortfolio />
      <AboutTeaser />
      <Testimonials />
      <ContactBand />
    </>
  );
}
