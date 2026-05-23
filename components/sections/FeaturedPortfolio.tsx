"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { portfolio } from "@/content/portfolio";
import { GalleryModal } from "@/components/GalleryModal";
import { ImageViewer } from "@/components/ImageViewer";

export function FeaturedPortfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setGalleryOpen(false);
    setViewerIndex(index);
  };

  return (
    <>
      <Section id="portfolio" className="bg-bone text-ink">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)]">
              Our Work Speaks for Itself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              From intimate bridal showers to grand wedding celebrations, every
              shoot tells a unique story.
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {portfolio.map((item) => (
              <div key={item.slug} className="mb-4 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-lg bg-stone">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:[&:nth-child(even)]:aspect-[4/5]"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-semibold text-bone transition-colors hover:bg-stone"
            >
              View Full Portfolio
              <ArrowRight size={16} />
            </button>
          </div>
        </Container>
      </Section>

      <GalleryModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onImageClick={handleImageClick}
      />

      <ImageViewer
        open={viewerIndex !== null}
        initialIndex={viewerIndex ?? 0}
        onClose={() => setViewerIndex(null)}
      />
    </>
  );
}
