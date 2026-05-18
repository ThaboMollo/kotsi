import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

export function AboutTeaser() {
  return (
    <Section id="about" className="bg-ink">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="relative w-full shrink-0 lg:w-[420px]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/founder-portrait.jpg"
                alt={`${site.founder}, founder of ${site.name}`}
                width={500}
                height={600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Meet the Founder
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] italic text-white">
              {site.founder}
            </h2>
            <p className="font-medium text-gold">{site.founderTitle}</p>

            {site.founderBio.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed ${i === 0 ? "text-white/80" : "text-white/70"}`}
              >
                {paragraph}
              </p>
            ))}

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Read Full Story
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
