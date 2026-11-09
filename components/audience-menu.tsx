"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { audiences, type AudienceId } from "@/lib/site";

/**
 * Sélecteur de public. Un menu déroulant plutôt qu'un groupe de pilules :
 * à trois entrées, les pilules ne tiennent plus à côté de la navigation.
 */
export function AudienceMenu({ current }: { current: AudienceId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = audiences.find((a) => a.id === current) ?? audiences[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-mist px-3.5 py-2 text-[13px] font-medium text-ink transition hover:bg-black/[0.07]"
      >
        {active.short}
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted transition-transform duration-200 ${open ? "-rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 w-64 origin-top-right overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-1.5 shadow-lift"
          >
            {audiences.map((a) => {
              const isActive = a.id === current;
              return (
                <Link
                  key={a.id}
                  href={a.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition ${
                    isActive ? "bg-mist" : "hover:bg-mist"
                  }`}
                >
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-ink">{a.label}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-muted">{a.tagline}</span>
                  </span>
                  {isActive && <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Variante dépliée, pour le menu mobile où il y a la place. */
export function AudienceList({
  current,
  onNavigate,
}: {
  current: AudienceId;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {audiences.map((a) => {
        const isActive = a.id === current;
        return (
          <Link
            key={a.id}
            href={a.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition ${
              isActive ? "bg-mist" : "hover:bg-mist"
            }`}
          >
            <span>
              <span className="block text-[15px] font-medium text-ink">{a.label}</span>
              <span className="mt-0.5 block text-[13px] text-muted">{a.tagline}</span>
            </span>
            {isActive && <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />}
          </Link>
        );
      })}
    </div>
  );
}
