"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { site } from "@/lib/site";

type BookingContextValue = { open: () => void; close: () => void };

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking doit être utilisé dans <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Fermer"
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Prendre rendez-vous"
              className="relative flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-lift sm:h-[80vh] sm:rounded-3xl"
              initial={{ y: 40, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-3">
                <p className="text-sm font-semibold">Échange découverte · 30 min</p>
                <div className="flex items-center gap-1">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-mist hover:text-ink"
                  >
                    Nouvel onglet <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={close}
                    aria-label="Fermer"
                    className="rounded-full p-2 text-muted transition hover:bg-mist hover:text-ink"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <iframe
                src={site.bookingUrl}
                title="Calendrier de prise de rendez-vous"
                className="h-full w-full flex-1 bg-mist"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
