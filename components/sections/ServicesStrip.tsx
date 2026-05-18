import {
  Heart,
  Sparkles,
  GraduationCap,
  Cake,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { services } from "@/content/services";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  GraduationCap,
  Cake,
  Camera,
};

export function ServicesStrip() {
  return (
    <Section id="services" className="bg-ink">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            What We Capture
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                className="flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-stone p-6 text-center transition-colors hover:border-gold/30"
              >
                {Icon && <Icon className="text-gold" size={28} />}
                <h3 className="font-semibold text-white">{service.name}</h3>
                <p className="text-sm text-muted">{service.short}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
