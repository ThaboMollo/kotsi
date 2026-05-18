import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "South African photography studio specializing in weddings, graduations, bridal showers, birthdays, and tombstone unveilings. Based in Gauteng.",
  keywords: [
    "wedding photographer South Africa",
    "graduation photographer Gauteng",
    "tombstone unveiling photographer",
    "bridal shower photography",
    "birthday photoshoot Johannesburg",
    "Pretoria photographer",
    "Small Street Photography",
  ],
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
