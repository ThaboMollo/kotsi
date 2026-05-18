import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Manifesto() {
  return (
    <Section id="manifesto" className="bg-bone text-ink">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] italic text-ink">
          Stories Live in the Details
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted">
          Every smile, every tear, every moment — frozen in time, remembered
          forever. We are Small Street Photography by Baraza, and we believe your
          story deserves to be told with artistry, passion, and soul.
        </p>
      </Container>
    </Section>
  );
}
