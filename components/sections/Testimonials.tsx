"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-stone">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="space-y-4 rounded-lg border border-white/10 bg-ink p-8"
            >
              <Quote className="text-gold/40" size={32} />
              <p className="leading-relaxed text-white/80">{t.quote}</p>
              <div className="pt-2">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-gold">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
