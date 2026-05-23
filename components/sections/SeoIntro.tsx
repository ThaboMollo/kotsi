import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

export function SeoIntro() {
  return (
    <Section id="photography-services-gauteng" className="bg-bone py-12 text-ink">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold">
            Gauteng Photography for Weddings, Graduations & Family Events
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {site.shortName} photographs weddings, graduations, bridal showers,
            birthday celebrations, tombstone unveilings, and community events
            across {site.serviceAreas.join(", ")}. Every session is shaped
            around real moments, natural portraits, and the people who make each
            milestone worth remembering.
          </p>
        </div>
      </Container>
    </Section>
  );
}
