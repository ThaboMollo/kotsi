import { Container } from "@/components/layout/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/CallButton";
import { site } from "@/content/site";

export function ContactBand() {
  return (
    <section id="contact" className="bg-gold py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold text-ink">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink/80">
          Ready to capture your next milestone? Get in touch and let&apos;s
          create something legendary.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton />
          <CallButton />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-ink/70">
          <span>{site.whatsapp.display} (WhatsApp)</span>
          <span className="hidden text-ink/40 sm:inline">|</span>
          <span>{site.phone.display} (Call)</span>
        </div>
      </Container>
    </section>
  );
}
