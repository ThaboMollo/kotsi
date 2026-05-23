"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/content/portfolio";

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
  onImageClick: (index: number) => void;
}

const row1 = portfolio.slice(0, 3);
const row2 = portfolio.slice(3, 6);

export function GalleryModal({ open, onClose, onImageClick }: GalleryModalProps) {
  const [mounted, setMounted] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-10">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-gold">
              Portfolio
            </span>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="text-bone/70 transition-colors hover:text-bone"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5 lg:px-10">
            <div className="flex flex-col gap-6">
              <Row images={row1} startIndex={0} heightClass="h-56 md:h-64 lg:h-72" onImageClick={onImageClick} />
              <Row images={row2} startIndex={3} heightClass="h-64 md:h-72 lg:h-80" onImageClick={onImageClick} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Row({
  images,
  heightClass,
  startIndex,
  onImageClick,
}: {
  images: typeof portfolio;
  heightClass: string;
  startIndex: number;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {images.map((item, i) => (
        <button
          key={item.slug}
          onClick={() => onImageClick(startIndex + i)}
          className="group flex flex-col gap-2.5 text-left"
        >
          <div className={`relative w-full overflow-hidden rounded-lg ${heightClass}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <span className="text-[13px] font-semibold text-bone/70">
            {item.category}
          </span>
        </button>
      ))}
    </div>
  );
}
