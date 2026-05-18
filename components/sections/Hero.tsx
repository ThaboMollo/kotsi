import { site } from "@/content/site";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/CallButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-4 pt-20 pb-16 text-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {site.shortName}
        </p>

        <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-tight font-bold text-white">
          We Don&apos;t Just Take Pictures, We Capture{" "}
          <span className="font-script text-gold">Legends</span>
        </h1>

        <p className="text-lg text-white/70">{site.subTagline}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton variant="primary" className="!bg-gold !text-ink hover:!bg-gold-bright" />
          <CallButton variant="outline" className="!border-white !text-white hover:!bg-white/10" />
        </div>
      </div>
    </section>
  );
}
