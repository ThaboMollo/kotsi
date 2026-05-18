"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-lg font-bold text-white">
          {site.shortName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-6 bg-ink px-4 pb-8 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-white transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-gold px-6 py-3 text-center font-semibold text-ink transition-colors hover:bg-gold-bright"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
