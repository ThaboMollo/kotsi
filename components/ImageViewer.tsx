"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/content/portfolio";

interface ImageViewerProps {
  open: boolean;
  initialIndex: number;
  onClose: () => void;
}

export function ImageViewer({ open, initialIndex, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef(0);
  const total = portfolio.length;

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [onClose, goNext, goPrev],
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

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
  };

  const item = portfolio[currentIndex];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex flex-col bg-black"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute right-6 top-6 z-10 text-bone/70 transition-colors hover:text-bone"
          >
            <X size={28} />
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 text-bone/60 transition-colors hover:border-white/30 hover:text-bone lg:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 text-bone/60 transition-colors hover:border-white/30 hover:text-bone lg:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex flex-1 flex-col items-center justify-center px-16 py-20 sm:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full max-w-6xl overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-3 flex w-full max-w-6xl items-center justify-between">
              <span className="text-[13px] font-semibold tracking-[2px] text-bone/60">
                {item.category}
              </span>
              <span className="text-[11px] tracking-[3px] uppercase text-muted/50">
                {item.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 pb-6">
            <span className="text-[13px] tracking-[3px] text-bone/50">
              {currentIndex + 1} / {total}
            </span>
            <span className="text-[11px] tracking-[1px] text-muted/50">
              Swipe or use arrows to navigate
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
