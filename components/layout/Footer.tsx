import { Facebook, Instagram, MapPin } from "lucide-react";
import { site } from "@/content/site";

const quickLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-display text-lg font-bold text-white">
              {site.shortName}
            </p>
            <p className="font-display text-sm italic text-gold">by Baraza</p>
            <p className="text-sm text-muted">{site.slogan}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Quick Links
            </p>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Follow Us
            </p>
            <div className="flex gap-4">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-gold"
              >
                <Facebook size={20} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-gold"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} />
              <span>{site.location}</span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted/60">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
