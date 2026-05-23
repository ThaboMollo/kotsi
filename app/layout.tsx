import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: `${site.name} | Gauteng Wedding & Event Photographer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Gauteng photographer",
    "wedding photographer Gauteng",
    "wedding photographer Johannesburg",
    "wedding photographer Pretoria",
    "graduation photographer Johannesburg",
    "graduation photographer Pretoria",
    "tombstone unveiling photographer",
    "tombstone unveiling photographer Gauteng",
    "bridal shower photography",
    "birthday photoshoot Johannesburg",
    "event photographer Gauteng",
    "Pretoria photographer",
    "Small Street Photography",
    "Small Street Photography by Baraza",
  ],
  authors: [{ name: site.founder }],
  creator: site.name,
  publisher: site.name,
  category: "Photography",
  applicationName: site.shortName,
  openGraph: {
    title: `${site.name} | Gauteng Wedding & Event Photographer`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 864,
        height: 1296,
        alt: `${site.name} photography portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Gauteng Photographer`,
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        <Analytics />
      </body>
    </html>
  );
}
