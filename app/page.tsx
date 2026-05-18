import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactBand } from "@/components/sections/ContactBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesStrip />
      <FeaturedPortfolio />
      <AboutTeaser />
      <Testimonials />
      <ContactBand />
    </>
  );
}
